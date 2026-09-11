"use client";

import Link from "next/link";
import { Pixelify_Sans } from "next/font/google";
import {
  PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type GameStatus =
  | "menu"
  | "playing"
  | "paused"
  | "gameover"
  | "bedroom"
  | "finished";

type BiomeId =
  | "darkForest"
  | "snow"
  | "desert"
  | "jungle"
  | "underwater"
  | "volcano"
  | "prehistoric"
  | "castle"
  | "village";

type MonsterKind =
  | "shadow"
  | "reindeer"
  | "scorpion"
  | "frog"
  | "pufferfish"
  | "magmaSlug"
  | "raptor"
  | "knight";

type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type Platform = Rect & {
  biome: BiomeId;
  variant: number;
};

type Player = Rect & {
  velocityX: number;
  velocityY: number;
  grounded: boolean;
  facing: 1 | -1;
  lives: number;
  invincibleUntil: number;
};

type Monster = Rect & {
  kind: MonsterKind;
  startX: number;
  endX: number;
  speed: number;
  direction: 1 | -1;
  alive: boolean;
};

type InputState = {
  left: boolean;
  right: boolean;
  jump: boolean;
  jumpPressed: boolean;
};

type Biome = {
  id: BiomeId;
  name: string;
  subtitle: string;
  start: number;
  end: number;
  skyTop: string;
  skyBottom: string;
  ground: string;
  groundTop: string;
};

type Checkpoint = {
  x: number;
  label: string;
};

const pixelFont = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixel",
});

const GAME_WIDTH = 960;
const GAME_HEIGHT = 540;
const WORLD_WIDTH = 20000;
const FLOOR_Y = 462;

const PLAYER_WIDTH = 34;
const PLAYER_HEIGHT = 44;

const GRAVITY = 0.72;
const MOVE_SPEED = 4.8;
const AIR_CONTROL = 0.82;
const JUMP_FORCE = 14.4;
const MAX_FALL_SPEED = 16.5;

const BIOMES: Biome[] = [
  {
    id: "darkForest",
    name: "DARK FOREST",
    subtitle: "Whispers between the trees",
    start: 0,
    end: 4000,
    skyTop: "#111227",
    skyBottom: "#39445e",
    ground: "#403347",
    groundTop: "#79a851",
  },
  {
    id: "snow",
    name: "FROSTLAND",
    subtitle: "A trail beneath the northern lights",
    start: 4000,
    end: 6000,
    skyTop: "#526d9b",
    skyBottom: "#d8f0f3",
    ground: "#657284",
    groundTop: "#f6fdff",
  },
  {
    id: "desert",
    name: "SUNSCORCHED DESERT",
    subtitle: "Ruins buried under golden dunes",
    start: 6000,
    end: 8000,
    skyTop: "#58b5df",
    skyBottom: "#ffe0a2",
    ground: "#a86d3b",
    groundTop: "#edbe58",
  },
  {
    id: "jungle",
    name: "EMERALD JUNGLE",
    subtitle: "Every leaf is watching",
    start: 8000,
    end: 10000,
    skyTop: "#276452",
    skyBottom: "#89d78a",
    ground: "#354133",
    groundTop: "#5fbd4e",
  },
  {
    id: "underwater",
    name: "SUNKEN KINGDOM",
    subtitle: "A forgotten road under the sea",
    start: 10000,
    end: 12000,
    skyTop: "#073b69",
    skyBottom: "#16a9b4",
    ground: "#34546a",
    groundTop: "#6ad2b3",
  },
  {
    id: "volcano",
    name: "EMBER PEAK",
    subtitle: "The mountain breathes fire",
    start: 12000,
    end: 14000,
    skyTop: "#2d1425",
    skyBottom: "#b53b29",
    ground: "#382d31",
    groundTop: "#dc6034",
  },
  {
    id: "prehistoric",
    name: "PRIMAL VALLEY",
    subtitle: "Footprints from another age",
    start: 14000,
    end: 16000,
    skyTop: "#558c9c",
    skyBottom: "#bdd681",
    ground: "#554536",
    groundTop: "#78af48",
  },
  {
    id: "castle",
    name: "THE IRON CASTLE",
    subtitle: "One final road through the old walls",
    start: 16000,
    end: 18000,
    skyTop: "#24233e",
    skyBottom: "#716276",
    ground: "#454553",
    groundTop: "#8b8998",
  },
  {
    id: "village",
    name: "HOME VILLAGE",
    subtitle: "Warm lights beyond the hill",
    start: 18000,
    end: WORLD_WIDTH,
    skyTop: "#60c8dc",
    skyBottom: "#f8d99e",
    ground: "#6d4f37",
    groundTop: "#8abd4a",
  },
];

const CHECKPOINTS: Checkpoint[] = [
  { x: 120, label: "START" },
  { x: 4000, label: "20%" },
  { x: 8000, label: "40%" },
  { x: 12000, label: "60%" },
  { x: 16000, label: "80%" },
];

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

const wrap = (value: number, span: number) => ((value % span) + span) % span;

const intersects = (a: Rect, b: Rect) =>
  a.x < b.x + b.width &&
  a.x + a.width > b.x &&
  a.y < b.y + b.height &&
  a.y + a.height > b.y;

const seeded = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

const getBiomeAt = (x: number) =>
  BIOMES.find((biome) => x >= biome.start && x < biome.end) ??
  BIOMES[BIOMES.length - 1];

const isTouchDevice = () => {
  if (typeof window === "undefined") return false;

  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );
};

const createPlatforms = (): Platform[] => {
  const result: Platform[] = BIOMES.map((biome, index) => ({
    x: biome.start,
    y: FLOOR_Y,
    width: biome.end - biome.start,
    height: 110,
    biome: biome.id,
    variant: index,
  }));

  const patterns = [
    [
      { dx: 0, y: 382, w: 150 },
      { dx: 205, y: 338, w: 125 },
      { dx: 375, y: 382, w: 175 },
      { dx: 610, y: 320, w: 145 },
    ],
    [
      { dx: 0, y: 370, w: 190 },
      { dx: 245, y: 305, w: 120 },
      { dx: 410, y: 345, w: 150 },
      { dx: 615, y: 285, w: 135 },
    ],
    [
      { dx: 0, y: 395, w: 125 },
      { dx: 170, y: 350, w: 155 },
      { dx: 375, y: 300, w: 115 },
      { dx: 535, y: 355, w: 185 },
    ],
    [
      { dx: 0, y: 360, w: 165 },
      { dx: 215, y: 390, w: 120 },
      { dx: 380, y: 330, w: 160 },
      { dx: 585, y: 375, w: 145 },
    ],
    [
      { dx: 0, y: 388, w: 140 },
      { dx: 185, y: 325, w: 135 },
      { dx: 365, y: 365, w: 175 },
      { dx: 590, y: 305, w: 130 },
    ],
  ] as const;

  BIOMES.forEach((biome, biomeIndex) => {
    const segmentStart = biome.start + 260;
    const segmentEnd = biome.end - 250;
    let cursor = segmentStart;
    let patternIndex = biomeIndex % patterns.length;

    while (cursor < segmentEnd) {
      const pattern = patterns[patternIndex % patterns.length];
      const mirror = seeded(cursor + biomeIndex * 97) > 0.55;
      const lift = Math.floor(seeded(cursor * 0.37) * 18) - 9;

      for (const item of pattern) {
        const px = mirror ? 720 - item.dx - item.w : item.dx;
        const x = cursor + px;

        if (x + item.w >= segmentEnd) continue;

        result.push({
          x,
          y: clamp(item.y + lift, 280, 400),
          width: item.w,
          height: 22 + ((patternIndex + biomeIndex) % 3) * 3,
          biome: biome.id,
          variant: (patternIndex + item.dx + biomeIndex) % 5,
        });
      }

      cursor += 790;
      patternIndex += 1;
    }

    // Safe low platforms near biome entrances and checkpoints.
    result.push(
      {
        x: biome.start + 90,
        y: 405,
        width: 150,
        height: 22,
        biome: biome.id,
        variant: biomeIndex % 4,
      },
      {
        x: biome.end - 290,
        y: 395,
        width: 175,
        height: 22,
        biome: biome.id,
        variant: (biomeIndex + 2) % 4,
      },
    );
  });

  return result
    .filter((platform) => {
      const isGround = platform.y === FLOOR_Y;

      // Keep the continuous ground, but remove the opening platforms.
      if (platform.biome === "darkForest" && !isGround && platform.x < 760) {
        return false;
      }

      // The village is a walking area, so it has no floating jump platforms.
      if (platform.biome === "village" && !isGround) {
        return false;
      }

      return true;
    })
    .sort((a, b) => a.x - b.x || a.y - b.y);
};

const createMonster = (
  x: number,
  kind: MonsterKind,
  range = 320,
  speed = 1.5,
): Monster => ({
  x,
  y: FLOOR_Y - 38,
  width: 44,
  height: 38,
  kind,
  startX: x - range / 2,
  endX: x + range / 2,
  speed,
  direction: seeded(x) > 0.5 ? 1 : -1,
  alive: true,
});

const createMonsters = (): Monster[] => [
  createMonster(950, "shadow", 380, 1.25),
  createMonster(1800, "shadow", 430, 1.5),
  createMonster(2850, "shadow", 360, 1.72),
  createMonster(3550, "shadow", 300, 1.85),

  createMonster(4300, "reindeer", 300, 1.3),
  createMonster(4900, "reindeer", 380, 1.55),
  createMonster(5600, "reindeer", 320, 1.8),

  createMonster(6300, "scorpion", 380, 1.5),
  createMonster(7000, "scorpion", 420, 1.75),
  createMonster(7700, "scorpion", 320, 1.95),

  createMonster(8300, "frog", 320, 1.55),
  createMonster(9000, "frog", 420, 1.85),
  createMonster(9700, "frog", 330, 2.05),

  createMonster(10300, "pufferfish", 380, 1.75),
  createMonster(11000, "pufferfish", 450, 2.0),
  createMonster(11700, "pufferfish", 320, 2.2),

  createMonster(12300, "magmaSlug", 350, 1.8),
  createMonster(13000, "magmaSlug", 430, 2.0),
  createMonster(13700, "magmaSlug", 330, 2.25),

  createMonster(14300, "raptor", 420, 1.75),
  createMonster(15000, "raptor", 460, 1.95),
  createMonster(15700, "raptor", 340, 2.15),

  createMonster(16300, "knight", 360, 1.75),
  createMonster(17000, "knight", 430, 2.0),
  createMonster(17700, "knight", 340, 2.2),
];

export default function TinyBuildifyJump() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const gameTimeRef = useRef(0);
  const cameraXRef = useRef(0);
  const gameViewWidthRef = useRef(GAME_WIDTH);
  const statusRef = useRef<GameStatus>("menu");
  const checkpointXRef = useRef(120);
  const biomeNoticeUntilRef = useRef(0);
  const activeBiomeRef = useRef<BiomeId>("darkForest");

  const platforms = useMemo(() => createPlatforms(), []);

  const playerRef = useRef<Player>({
    x: 120,
    y: FLOOR_Y - PLAYER_HEIGHT,
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,
    velocityX: 0,
    velocityY: 0,
    grounded: false,
    facing: 1,
    lives: 3,
    invincibleUntil: 0,
  });

  const monstersRef = useRef<Monster[]>(createMonsters());

  const inputRef = useRef<InputState>({
    left: false,
    right: false,
    jump: false,
    jumpPressed: false,
  });

  const [status, setStatus] = useState<GameStatus>("menu");
  const [lives, setLives] = useState(3);
  const [progress, setProgress] = useState(0);
  const [currentBiome, setCurrentBiome] = useState(BIOMES[0]);
  const [checkpointLabel, setCheckpointLabel] = useState("START");
  const [isTouch, setIsTouch] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isCompactLandscape, setIsCompactLandscape] = useState(false);
  const [viewportSize, setViewportSize] = useState({
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
  });

  // Desktop keeps the original 960x540 logical viewport. On touch devices,
  // widen the logical viewport to match the real screen aspect ratio instead
  // of stretching the 16:9 canvas to fill a wider phone display.
  const gameViewWidth = useMemo(() => {
    if (!isTouch || viewportSize.width <= 0 || viewportSize.height <= 0) {
      return GAME_WIDTH;
    }

    const screenAspect = viewportSize.width / viewportSize.height;
    const logicalWidth = Math.round(GAME_HEIGHT * screenAspect);

    return clamp(logicalWidth, GAME_WIDTH, 1800);
  }, [isTouch, viewportSize.height, viewportSize.width]);

  gameViewWidthRef.current = gameViewWidth;
  const bedroomPlayerXRef = useRef(9);
  const bedroomPlayerElementRef = useRef<HTMLDivElement | null>(null);
  const [bedroomPlayerX, setBedroomPlayerX] = useState(9);
  const bedroomFacingRef = useRef<1 | -1>(1);
  const [bedroomFacing, setBedroomFacing] = useState<1 | -1>(1);
  const [bedroomWalking, setBedroomWalking] = useState(false);

  const setGameStatus = useCallback((next: GameStatus) => {
    statusRef.current = next;
    setStatus(next);
  }, []);

  const clearInput = useCallback(() => {
    inputRef.current = {
      left: false,
      right: false,
      jump: false,
      jumpPressed: false,
    };
  }, []);

  const respawnAtCheckpoint = useCallback(() => {
    playerRef.current = {
      x: checkpointXRef.current,
      y: FLOOR_Y - PLAYER_HEIGHT,
      width: PLAYER_WIDTH,
      height: PLAYER_HEIGHT,
      velocityX: 0,
      velocityY: 0,
      grounded: false,
      facing: 1,
      lives: 3,
      invincibleUntil: performance.now() + 1800,
    };

    cameraXRef.current = clamp(
      checkpointXRef.current - gameViewWidthRef.current * 0.28,
      0,
      WORLD_WIDTH - gameViewWidthRef.current,
    );

    setLives(3);
  }, []);

  const resetGame = useCallback(() => {
    checkpointXRef.current = 120;
    setCheckpointLabel("START");
    monstersRef.current = createMonsters();
    gameTimeRef.current = 0;
    activeBiomeRef.current = "darkForest";
    biomeNoticeUntilRef.current = performance.now() + 2200;
    setCurrentBiome(BIOMES[0]);
    setProgress(0);
    clearInput();
    respawnAtCheckpoint();
  }, [clearInput, respawnAtCheckpoint]);

  const startGame = useCallback(() => {
    resetGame();
    setGameStatus("playing");
  }, [resetGame, setGameStatus]);

  const togglePause = useCallback(() => {
    if (statusRef.current === "playing") {
      clearInput();
      setGameStatus("paused");
      return;
    }

    if (statusRef.current === "paused") {
      lastTimeRef.current = performance.now();
      setGameStatus("playing");
    }
  }, [clearInput, setGameStatus]);

  const skipToVillage = useCallback(() => {
    checkpointXRef.current = 16090;
    setCheckpointLabel("80%");

    playerRef.current = {
      x: 18120,
      y: FLOOR_Y - PLAYER_HEIGHT,
      width: PLAYER_WIDTH,
      height: PLAYER_HEIGHT,
      velocityX: 0,
      velocityY: 0,
      grounded: true,
      facing: 1,
      lives: 3,
      invincibleUntil: performance.now() + 1000,
    };

    cameraXRef.current = clamp(
      playerRef.current.x - gameViewWidthRef.current * 0.34,
      0,
      WORLD_WIDTH - gameViewWidthRef.current,
    );

    setLives(3);
    setProgress(91);
    setCurrentBiome(BIOMES[BIOMES.length - 1]);
    clearInput();
    setGameStatus("playing");
  }, [clearInput, setGameStatus]);

  const requestMobileLandscape = useCallback(async () => {
    const gameElement = wrapperRef.current as
      | (HTMLDivElement & {
          webkitRequestFullscreen?: () => Promise<void> | void;
        })
      | null;

    try {
      if (gameElement && !document.fullscreenElement) {
        if (gameElement.requestFullscreen) {
          await gameElement.requestFullscreen();
        } else {
          await gameElement.webkitRequestFullscreen?.();
        }
      }
    } catch {
      // iPhone/iPad Safari may reject fullscreen for normal page elements.
    }

    try {
      const orientation = screen.orientation as ScreenOrientation & {
        lock?: (mode: "landscape") => Promise<void>;
      };

      await orientation.lock?.("landscape");
    } catch {
      // Safari does not expose orientation locking. The rotate overlay remains
      // visible until the user physically rotates the device.
    }

    startGame();
  }, [startGame]);

  useEffect(() => {
    const updateDevice = () => {
      const touch = isTouchDevice();
      const width = window.innerWidth;
      const height = window.innerHeight;
      const shortSide = Math.min(width, height);
      const iPadOSDesktopMode =
        navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
      const tablet =
        touch &&
        (iPadOSDesktopMode ||
          shortSide >= 600 ||
          /ipad|tablet|playbook|silk/i.test(navigator.userAgent));

      setIsTouch(touch);
      setIsTablet(tablet);
      setIsPortrait(touch && height > width);
      setIsCompactLandscape(touch && width > height && height <= 540);
      setViewportSize({ width, height });
    };

    updateDevice();
    window.addEventListener("resize", updateDevice, { passive: true });
    window.addEventListener("orientationchange", updateDevice, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", updateDevice);
      window.removeEventListener("orientationchange", updateDevice);
    };
  }, []);

  useEffect(() => {
    const gameElement = wrapperRef.current;
    if (!gameElement) return;

    const preventGameGesture = (event: Event) => {
      if (
        isTouch &&
        (statusRef.current === "playing" || statusRef.current === "bedroom")
      ) {
        event.preventDefault();
      }
    };

    const releaseAllControls = () => {
      clearInput();
      setBedroomWalking(false);
    };

    gameElement.addEventListener("touchmove", preventGameGesture, {
      passive: false,
    });
    gameElement.addEventListener("contextmenu", preventGameGesture);
    window.addEventListener("blur", releaseAllControls);
    document.addEventListener("visibilitychange", releaseAllControls);

    return () => {
      gameElement.removeEventListener("touchmove", preventGameGesture);
      gameElement.removeEventListener("contextmenu", preventGameGesture);
      window.removeEventListener("blur", releaseAllControls);
      document.removeEventListener("visibilitychange", releaseAllControls);
    };
  }, [clearInput, isTouch]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const code = event.code;

      const isLeft = key === "arrowleft" || key === "a" || code === "KeyA";
      const isRight = key === "arrowright" || key === "d" || code === "KeyD";
      const isJump =
        key === "arrowup" ||
        key === "w" ||
        key === " " ||
        code === "KeyW" ||
        code === "Space";

      if (isLeft || isRight || isJump) {
        event.preventDefault();
      }

      if (key === "escape" || key === "p") {
        if (statusRef.current === "playing" || statusRef.current === "paused") {
          togglePause();
        }
        return;
      }

      if (statusRef.current === "menu" && key === "enter") {
        startGame();
        return;
      }

      if (statusRef.current === "bedroom") {
        if (isLeft) {
          inputRef.current.left = true;
          inputRef.current.right = false;
        }

        if (isRight) {
          inputRef.current.right = true;
          inputRef.current.left = false;
        }

        return;
      }

      if (statusRef.current !== "playing") return;

      if (isLeft) {
        inputRef.current.left = true;
      }

      if (isRight) {
        inputRef.current.right = true;
      }

      if (isJump) {
        if (!inputRef.current.jump) {
          inputRef.current.jumpPressed = true;
        }
        inputRef.current.jump = true;
      }
    };

    const onKeyUp = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const code = event.code;

      const isLeft = key === "arrowleft" || key === "a" || code === "KeyA";
      const isRight = key === "arrowright" || key === "d" || code === "KeyD";
      const isJump =
        key === "arrowup" ||
        key === "w" ||
        key === " " ||
        code === "KeyW" ||
        code === "Space";

      if (isLeft) {
        inputRef.current.left = false;
      }

      if (isRight) {
        inputRef.current.right = false;
      }

      if (isJump) {
        inputRef.current.jump = false;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [setGameStatus, startGame, togglePause]);

  const updateCheckpoint = useCallback((playerX: number) => {
    for (const checkpoint of CHECKPOINTS) {
      const reached =
        playerX >= checkpoint.x - 24 && checkpoint.x > checkpointXRef.current;

      if (reached) {
        checkpointXRef.current = checkpoint.x + 90;
        setCheckpointLabel(checkpoint.label);
      }
    }
  }, []);

  const hurtPlayer = useCallback(() => {
    const player = playerRef.current;
    const now = performance.now();

    if (now < player.invincibleUntil) return;

    player.lives -= 1;
    setLives(player.lives);

    if (player.lives <= 0) {
      clearInput();
      respawnAtCheckpoint();
      return;
    }

    player.velocityX = player.facing === 1 ? -6.5 : 6.5;
    player.velocityY = -7.5;
    player.invincibleUntil = now + 1400;
  }, [clearInput, respawnAtCheckpoint]);

  const updateGame = useCallback(
    (delta: number) => {
      if (statusRef.current !== "playing") return;

      const player = playerRef.current;
      const input = inputRef.current;
      const scale = delta / 16.6667;
      const oldX = player.x;
      const oldY = player.y;
      const biome = getBiomeAt(player.x);
      const underwater = biome.id === "underwater";

      if (biome.id !== activeBiomeRef.current) {
        activeBiomeRef.current = biome.id;
        biomeNoticeUntilRef.current = performance.now() + 2200;
        setCurrentBiome(biome);
      }

      updateCheckpoint(player.x);

      const speed = underwater ? MOVE_SPEED * 0.83 : MOVE_SPEED;
      const gravity = underwater ? GRAVITY * 0.43 : GRAVITY;
      const jumpForce = underwater ? JUMP_FORCE * 0.82 : JUMP_FORCE;
      const control = player.grounded ? 1 : AIR_CONTROL;

      if (input.left && !input.right) {
        player.velocityX = -speed * control;
        player.facing = -1;
      } else if (input.right && !input.left) {
        player.velocityX = speed * control;
        player.facing = 1;
      } else {
        player.velocityX *= player.grounded ? 0.72 : 0.95;
        if (Math.abs(player.velocityX) < 0.05) player.velocityX = 0;
      }

      if (input.jumpPressed && player.grounded) {
        player.velocityY = -jumpForce;
        player.grounded = false;
      }

      input.jumpPressed = false;

      if (!input.jump && player.velocityY < -5) {
        player.velocityY *= 0.82;
      }

      player.velocityY += gravity * scale;
      player.velocityY = Math.min(
        player.velocityY,
        underwater ? MAX_FALL_SPEED * 0.6 : MAX_FALL_SPEED,
      );

      player.x += player.velocityX * scale;
      player.x = clamp(player.x, 0, WORLD_WIDTH - player.width);

      for (const platform of platforms) {
        if (!intersects(player, platform)) continue;

        if (oldX + player.width <= platform.x + 3) {
          player.x = platform.x - player.width;
          player.velocityX = 0;
        } else if (oldX >= platform.x + platform.width - 3) {
          player.x = platform.x + platform.width;
          player.velocityX = 0;
        }
      }

      player.y += player.velocityY * scale;
      player.grounded = false;

      for (const platform of platforms) {
        if (!intersects(player, platform)) continue;

        if (oldY + player.height <= platform.y + 6 && player.velocityY >= 0) {
          player.y = platform.y - player.height;
          player.velocityY = 0;
          player.grounded = true;
        } else if (oldY >= platform.y + platform.height - 5) {
          player.y = platform.y + platform.height;
          player.velocityY = 1;
        }
      }

      if (player.y > GAME_HEIGHT + 130) {
        clearInput();
        respawnAtCheckpoint();
      }

      for (const monster of monstersRef.current) {
        if (!monster.alive) continue;

        monster.x += monster.speed * monster.direction * scale;

        if (monster.x <= monster.startX) {
          monster.x = monster.startX;
          monster.direction = 1;
        }

        if (monster.x + monster.width >= monster.endX) {
          monster.x = monster.endX - monster.width;
          monster.direction = -1;
        }

        if (!intersects(player, monster)) continue;

        const previousBottom = oldY + player.height;
        const stomped =
          player.velocityY > 0 &&
          previousBottom <= monster.y + monster.height * 0.55;

        if (stomped) {
          monster.alive = false;
          player.y = monster.y - player.height;
          player.velocityY = underwater ? -6.5 : -9.5;
        } else {
          hurtPlayer();
        }
      }

      if (player.x >= WORLD_WIDTH - 370) {
        clearInput();
        bedroomPlayerXRef.current = 9;
        setBedroomPlayerX(9);
        setGameStatus("bedroom");
      }

      const targetCamera = clamp(
        player.x - gameViewWidthRef.current * 0.34,
        0,
        WORLD_WIDTH - gameViewWidthRef.current,
      );

      cameraXRef.current +=
        (targetCamera - cameraXRef.current) * Math.min(1, 0.13 * scale);

      setProgress(
        Math.min(100, Math.floor((player.x / (WORLD_WIDTH - 400)) * 100)),
      );
    },
    [clearInput, hurtPlayer, platforms, setGameStatus, updateCheckpoint],
  );

  const rect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
  ) => {
    ctx.fillStyle = color;
    ctx.fillRect(
      Math.round(x),
      Math.round(y),
      Math.round(width),
      Math.round(height),
    );
  };

  const pixelText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    size: number,
    color: string,
    align: CanvasTextAlign = "left",
  ) => {
    ctx.font = `700 ${size}px "Pixelify Sans", monospace`;
    ctx.textAlign = align;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  };

  const drawCloud = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    scale = 1,
    color = "rgba(255,255,255,.85)",
  ) => {
    rect(ctx, x, y + 10 * scale, 76 * scale, 14 * scale, color);
    rect(ctx, x + 12 * scale, y, 23 * scale, 18 * scale, color);
    rect(ctx, x + 33 * scale, y + 4 * scale, 27 * scale, 18 * scale, color);
  };

  const drawPixelTree = (
    ctx: CanvasRenderingContext2D,
    x: number,
    baseY: number,
    scale: number,
    trunk: string,
    leafA: string,
    leafB: string,
  ) => {
    rect(
      ctx,
      x + 20 * scale,
      baseY - 95 * scale,
      18 * scale,
      95 * scale,
      trunk,
    );
    rect(ctx, x, baseY - 145 * scale, 58 * scale, 42 * scale, leafA);
    rect(
      ctx,
      x - 14 * scale,
      baseY - 118 * scale,
      86 * scale,
      38 * scale,
      leafB,
    );
    rect(
      ctx,
      x + 8 * scale,
      baseY - 168 * scale,
      48 * scale,
      34 * scale,
      leafA,
    );
  };

  const drawDarkForest = (
    ctx: CanvasRenderingContext2D,
    cameraX: number,
    time: number,
  ) => {
    ctx.fillStyle = "#f5edbd";
    ctx.beginPath();
    ctx.arc(780, 96, 48, 0, Math.PI * 2);
    ctx.fill();

    for (let i = 0; i < 10; i += 1) {
      const x = wrap(i * 160 - cameraX * 0.18, 1200) - 120;
      drawPixelTree(
        ctx,
        x,
        FLOOR_Y,
        0.8 + (i % 3) * 0.12,
        "#2c2835",
        "#17192e",
        "#20213a",
      );
    }

    for (let i = 0; i < 8; i += 1) {
      const x = wrap(i * 220 - cameraX * 0.38, 1300) - 140;
      drawPixelTree(
        ctx,
        x,
        FLOOR_Y + 5,
        0.92 + (i % 2) * 0.13,
        "#3d3140",
        "#24364a",
        "#2c4351",
      );
    }

    // Lanterns, gravestones, mushrooms, owls.
    for (let i = 0; i < 7; i += 1) {
      const x = wrap(i * 290 - cameraX * 0.6, 1400) - 100;
      rect(ctx, x, 404, 8, 58, "#31222c");
      rect(ctx, x - 9, 392, 26, 18, "#e0a949");
      rect(ctx, x - 5, 396, 18, 10, "#ffe28b");
    }

    for (let i = 0; i < 6; i += 1) {
      const x = wrap(i * 360 - cameraX * 0.48, 1450) - 80;
      rect(ctx, x, 414, 26, 48, "#6d6877");
      rect(ctx, x + 7, 404, 12, 14, "#6d6877");
      rect(ctx, x + 11, 420, 4, 16, "#9994a2");
      rect(ctx, x + 5, 426, 16, 4, "#9994a2");
    }

    for (let i = 0; i < 10; i += 1) {
      const x = wrap(i * 180 - cameraX * 0.72, 1200) - 60;
      const glow = 0.65 + Math.sin(time * 0.006 + i) * 0.25;
      rect(ctx, x, 443, 8, 12, "#efe6d5");
      rect(ctx, x - 5, 438, 18, 7, `rgba(209,78,89,${glow})`);
    }

    ctx.fillStyle = "rgba(218,230,255,.07)";
    for (let i = 0; i < 7; i += 1) {
      ctx.fillRect(
        wrap(i * 230 - cameraX * 0.09 + time * 0.008, 1300) - 160,
        330 + (i % 3) * 34,
        210,
        13,
      );
    }
  };

  const drawSnow = (
    ctx: CanvasRenderingContext2D,
    cameraX: number,
    time: number,
  ) => {
    // Aurora.
    ctx.strokeStyle = "rgba(112,255,203,.22)";
    ctx.lineWidth = 24;
    for (let i = 0; i < 3; i += 1) {
      ctx.beginPath();
      ctx.moveTo(-80, 90 + i * 34);
      ctx.bezierCurveTo(220, 10 + i * 26, 510, 180 + i * 12, 1040, 70 + i * 22);
      ctx.stroke();
    }

    // Mountains.
    for (let i = 0; i < 7; i += 1) {
      const x = wrap(i * 230 - cameraX * 0.16, 1500) - 170;
      ctx.fillStyle = i % 2 === 0 ? "#7188a6" : "#8399b4";
      ctx.beginPath();
      ctx.moveTo(x, FLOOR_Y);
      ctx.lineTo(x + 115, 210 + (i % 3) * 22);
      ctx.lineTo(x + 230, FLOOR_Y);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "#edf8ff";
      ctx.beginPath();
      ctx.moveTo(x + 75, 305);
      ctx.lineTo(x + 115, 210 + (i % 3) * 22);
      ctx.lineTo(x + 155, 305);
      ctx.closePath();
      ctx.fill();
    }

    // Pine trees, cabins, frozen signs, snowmen.
    for (let i = 0; i < 10; i += 1) {
      const x = wrap(i * 170 - cameraX * 0.5, 1300) - 100;
      rect(ctx, x + 20, 365, 12, 97, "#5c4637");
      ctx.fillStyle = "#31576b";
      for (let level = 0; level < 3; level += 1) {
        ctx.beginPath();
        ctx.moveTo(x - level * 6, 420 - level * 34);
        ctx.lineTo(x + 26, 350 - level * 34);
        ctx.lineTo(x + 55 + level * 6, 420 - level * 34);
        ctx.closePath();
        ctx.fill();
      }
      rect(ctx, x - 2, 385, 58, 7, "#f7fdff");
      rect(ctx, x + 5, 350, 45, 7, "#f7fdff");
    }

    for (let i = 0; i < 3; i += 1) {
      const x = wrap(i * 520 - cameraX * 0.36, 1700) - 150;
      rect(ctx, x, 365, 120, 97, "#9a6848");
      ctx.fillStyle = "#784534";
      ctx.beginPath();
      ctx.moveTo(x - 14, 365);
      ctx.lineTo(x + 60, 310);
      ctx.lineTo(x + 134, 365);
      ctx.closePath();
      ctx.fill();
      rect(ctx, x + 18, 390, 28, 25, "#bfe9f4");
      rect(ctx, x + 75, 392, 25, 70, "#6d4635");
      rect(ctx, x - 5, 358, 130, 8, "#ffffff");
    }

    ctx.fillStyle = "#ffffff";
    for (let i = 0; i < 78; i += 1) {
      const x = wrap(i * 131 - cameraX * 0.08, gameViewWidthRef.current);
      const y = (i * 71 + time * 0.04) % GAME_HEIGHT;
      ctx.fillRect(x, y, i % 4 === 0 ? 4 : 2, i % 4 === 0 ? 4 : 2);
    }

    // Dense Christmas-tree belt that repeats across the full snow biome.
    for (let i = 0; i < 12; i += 1) {
      const x = wrap(i * 145 - cameraX * 0.72, 1740) - 110;
      const scale = 0.7 + (i % 4) * 0.09;
      rect(ctx, x + 22 * scale, 347, 12 * scale, 115, "#624838");
      for (let tier = 0; tier < 3; tier += 1) {
        ctx.fillStyle = tier % 2 === 0 ? "#1f655d" : "#2b7868";
        ctx.beginPath();
        ctx.moveTo(x - tier * 7, 421 - tier * 35);
        ctx.lineTo(x + 28 * scale, 337 - tier * 28);
        ctx.lineTo(x + 61 * scale + tier * 7, 421 - tier * 35);
        ctx.closePath();
        ctx.fill();
      }
      rect(ctx, x + 5, 381, 8, 8, "#f4ca5d");
      rect(ctx, x + 42, 400, 7, 7, "#e7646e");
      rect(ctx, x + 25, 359, 7, 7, "#80d7eb");
    }
  };

  const drawDesert = (
    ctx: CanvasRenderingContext2D,
    cameraX: number,
    time: number,
  ) => {
    ctx.fillStyle = "#ffd86c";
    ctx.beginPath();
    ctx.arc(790, 92, 50, 0, Math.PI * 2);
    ctx.fill();

    // Layered dunes.
    for (let layer = 0; layer < 3; layer += 1) {
      ctx.fillStyle = ["#dfaa4d", "#d19a42", "#bf8438"][layer];
      for (let i = 0; i < 6; i += 1) {
        const x = wrap(i * 310 - cameraX * (0.12 + layer * 0.08), 1900) - 320;
        ctx.beginPath();
        ctx.arc(x, 430 + layer * 18, 230 - layer * 25, Math.PI, Math.PI * 2);
        ctx.fill();
      }
    }

    // Pyramids and temple ruins.
    for (let i = 0; i < 3; i += 1) {
      const x = wrap(i * 620 - cameraX * 0.18, 1900) - 200;
      ctx.fillStyle = "#c68a3e";
      ctx.beginPath();
      ctx.moveTo(x, 420);
      ctx.lineTo(x + 150, 190 + i * 25);
      ctx.lineTo(x + 300, 420);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "#dda34d";
      ctx.beginPath();
      ctx.moveTo(x + 150, 190 + i * 25);
      ctx.lineTo(x + 300, 420);
      ctx.lineTo(x + 218, 420);
      ctx.closePath();
      ctx.fill();

      rect(ctx, x + 138, 355, 26, 65, "#7f542e");
    }

    for (let i = 0; i < 7; i += 1) {
      const x = wrap(i * 260 - cameraX * 0.55, 1500) - 100;
      rect(ctx, x + 17, 352, 18, 110, "#3f7e42");
      rect(ctx, x, 378, 22, 14, "#3f7e42");
      rect(ctx, x, 354, 12, 38, "#3f7e42");
      rect(ctx, x + 32, 395, 24, 14, "#3f7e42");
      rect(ctx, x + 45, 372, 11, 37, "#3f7e42");
      rect(ctx, x + 22, 374, 4, 4, "#f3bd6a");
      rect(ctx, x + 28, 420, 4, 4, "#f3bd6a");
    }

    // Pots, bones, obelisks.
    for (let i = 0; i < 5; i += 1) {
      const x = wrap(i * 410 - cameraX * 0.64, 1650) - 120;
      rect(ctx, x, 431, 32, 31, "#a75b3e");
      rect(ctx, x - 4, 427, 40, 7, "#c0734f");
      rect(ctx, x + 7, 438, 18, 13, "#d4975d");
    }

    for (let i = 0; i < 4; i += 1) {
      const x = wrap(i * 520 - cameraX * 0.42, 1800) - 140;
      rect(ctx, x, 290, 40, 172, "#b58245");
      rect(ctx, x - 7, 282, 54, 12, "#d1a45b");
      pixelText(ctx, "◇", x + 20, 355, 22, "#76502d", "center");
    }

    // Sand particles.
    ctx.fillStyle = "rgba(255,230,170,.5)";
    for (let i = 0; i < 45; i += 1) {
      const x = wrap(i * 149 + time * 0.09, gameViewWidthRef.current);
      const y = 210 + ((i * 53 + time * 0.02) % 230);
      ctx.fillRect(x, y, 3, 2);
    }
  };

  const drawJungle = (
    ctx: CanvasRenderingContext2D,
    cameraX: number,
    time: number,
  ) => {
    // Distant canopy.
    ctx.fillStyle = "#1f5e49";
    for (let i = 0; i < 12; i += 1) {
      const x = wrap(i * 120 - cameraX * 0.22, 1350) - 120;
      ctx.beginPath();
      ctx.arc(x, 350 + (i % 3) * 20, 80, 0, Math.PI * 2);
      ctx.fill();
    }

    // Foreground trees, roots and giant flowers.
    for (let i = 0; i < 8; i += 1) {
      const x = wrap(i * 230 - cameraX * 0.48, 1600) - 160;
      rect(ctx, x + 48, 250, 36, 212, "#4b3d2f");
      rect(ctx, x + 38, 250, 16, 212, "#5d4934");
      rect(ctx, x + 25, 438, 40, 24, "#4b3d2f");
      rect(ctx, x + 78, 438, 45, 24, "#4b3d2f");

      ctx.fillStyle = i % 2 === 0 ? "#2f8a4b" : "#357d47";
      for (let j = 0; j < 5; j += 1) {
        ctx.beginPath();
        ctx.arc(x + 10 + j * 28, 235 + (j % 2) * 18, 38, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.strokeStyle = "#2f7145";
    ctx.lineWidth = 8;
    for (let i = 0; i < 9; i += 1) {
      const x = wrap(i * 160 - cameraX * 0.3, 1400) - 100;
      const sway = Math.sin(time * 0.002 + i) * 22;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.bezierCurveTo(x + 60, 100, x - 45 + sway, 190, x + 20, 300);
      ctx.stroke();

      rect(ctx, x + 10, 145, 18, 10, "#6cc654");
      rect(ctx, x - 4, 210, 20, 11, "#63b64d");
    }

    for (let i = 0; i < 8; i += 1) {
      const x = wrap(i * 210 - cameraX * 0.68, 1500) - 120;
      rect(ctx, x + 12, 419, 8, 43, "#427a3a");
      rect(ctx, x, 402, 32, 20, i % 2 === 0 ? "#ee6d86" : "#eab85e");
      rect(ctx, x + 8, 397, 16, 9, "#f7d77b");
    }

    // Fireflies.
    for (let i = 0; i < 30; i += 1) {
      const x = wrap(i * 173 - cameraX * 0.13, gameViewWidthRef.current);
      const y = 180 + ((i * 67 + Math.sin(time * 0.004 + i) * 20) % 240);
      rect(ctx, x, y, 3, 3, "rgba(255,238,113,.85)");
    }

    // Deep layered jungle wall, hanging vines and a repeating pond.
    for (let layer = 0; layer < 3; layer += 1) {
      for (let i = 0; i < 10; i += 1) {
        const x = wrap(i * 170 - cameraX * (0.18 + layer * 0.16), 1700) - 130;
        const h = 150 + ((i + layer) % 4) * 28;
        rect(
          ctx,
          x + 46,
          FLOOR_Y - h,
          25,
          h,
          layer === 0 ? "#294b38" : "#3f5737",
        );
        ctx.fillStyle =
          layer === 0 ? "#255b40" : layer === 1 ? "#347b46" : "#42914b";
        ctx.beginPath();
        ctx.arc(x + 57, FLOOR_Y - h, 62 - layer * 6, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = 0; i < 12; i += 1) {
      const x = wrap(i * 145 - cameraX * 0.4, 1740) - 100;
      ctx.strokeStyle = i % 2 ? "#3b8747" : "#57a84f";
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.bezierCurveTo(x + 55, 95, x - 45, 190, x + 18, 315);
      ctx.stroke();
    }
  };

  const drawUnderwater = (
    ctx: CanvasRenderingContext2D,
    cameraX: number,
    time: number,
  ) => {
    // Light rays.
    ctx.fillStyle = "rgba(188,255,255,.1)";
    for (let i = 0; i < 10; i += 1) {
      const x = wrap(i * 130 - cameraX * 0.05, 1200) - 100;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + 75, GAME_HEIGHT);
      ctx.lineTo(x + 130, GAME_HEIGHT);
      ctx.lineTo(x + 35, 0);
      ctx.closePath();
      ctx.fill();
    }

    // Ruins.
    for (let i = 0; i < 4; i += 1) {
      const x = wrap(i * 520 - cameraX * 0.24, 1800) - 220;
      rect(ctx, x, 295, 38, 167, "#467787");
      rect(ctx, x + 135, 295, 38, 167, "#467787");
      rect(ctx, x - 18, 278, 210, 22, "#5a8d99");
      rect(ctx, x + 10, 320, 18, 20, "#6b9fa7");
      rect(ctx, x + 145, 330, 18, 20, "#6b9fa7");
      rect(ctx, x + 68, 355, 36, 107, "#315f72");
    }

    // A distant underwater palace with glowing windows.
    for (let i = 0; i < 2; i += 1) {
      const x = wrap(i * 1050 - cameraX * 0.15, 2200) - 350;
      rect(ctx, x, 250, 320, 212, "rgba(52,104,123,.75)");
      rect(ctx, x + 40, 195, 70, 267, "rgba(60,119,135,.78)");
      rect(ctx, x + 210, 175, 70, 287, "rgba(60,119,135,.78)");

      ctx.fillStyle = "rgba(67,129,143,.78)";
      ctx.beginPath();
      ctx.moveTo(x + 40, 195);
      ctx.lineTo(x + 75, 145);
      ctx.lineTo(x + 110, 195);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(x + 210, 175);
      ctx.lineTo(x + 245, 120);
      ctx.lineTo(x + 280, 175);
      ctx.closePath();
      ctx.fill();

      for (let j = 0; j < 5; j += 1) {
        rect(ctx, x + 35 + j * 55, 300, 18, 26, "rgba(126,234,211,.42)");
      }
    }

    // Coral, seaweed, shells and treasure chests.
    for (let i = 0; i < 12; i += 1) {
      const x = wrap(i * 145 - cameraX * 0.62, 1500) - 80;
      const sway = Math.sin(time * 0.002 + i) * 14;
      ctx.strokeStyle = i % 2 === 0 ? "#3b9a79" : "#5bb58a";
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(x, FLOOR_Y);
      ctx.quadraticCurveTo(x + sway, 410, x - sway, 345);
      ctx.stroke();
    }

    for (let i = 0; i < 8; i += 1) {
      const x = wrap(i * 220 - cameraX * 0.74, 1600) - 100;
      rect(ctx, x + 10, 425, 8, 37, "#d46f73");
      rect(ctx, x, 409, 11, 31, "#e37f78");
      rect(ctx, x + 20, 400, 11, 40, "#c95f72");
      rect(ctx, x + 31, 417, 9, 23, "#ef987c");
    }

    for (let i = 0; i < 3; i += 1) {
      const x = wrap(i * 620 - cameraX * 0.5, 1900) - 160;
      rect(ctx, x, 422, 65, 40, "#7a4f2e");
      rect(ctx, x, 416, 65, 12, "#a46c36");
      rect(ctx, x + 27, 422, 12, 40, "#d2a33e");
      rect(ctx, x + 31, 430, 4, 10, "#f4dc76");
    }

    // Bubbles and distant fish.
    ctx.strokeStyle = "rgba(220,255,255,.52)";
    for (let i = 0; i < 35; i += 1) {
      const x = wrap(i * 157 - cameraX * 0.12, gameViewWidthRef.current);
      const y = GAME_HEIGHT - ((i * 83 + time * 0.035) % GAME_HEIGHT);
      ctx.beginPath();
      ctx.arc(x, y, 2 + (i % 4), 0, Math.PI * 2);
      ctx.stroke();
    }

    for (let i = 0; i < 9; i += 1) {
      const x = wrap(i * 190 - cameraX * 0.2 - time * 0.03, 1300) - 100;
      const y = 130 + (i % 4) * 55;
      rect(ctx, x, y, 22, 10, "rgba(177,223,230,.4)");
      ctx.fillStyle = "rgba(177,223,230,.4)";
      ctx.beginPath();
      ctx.moveTo(x - 10, y + 5);
      ctx.lineTo(x, y);
      ctx.lineTo(x, y + 10);
      ctx.closePath();
      ctx.fill();
    }

    // A dense reef made of many coral shapes and colours.
    const coralColours = [
      "#ef6e78",
      "#f4a45f",
      "#d56fc0",
      "#77d4a0",
      "#f0d36b",
      "#7d9bea",
    ];
    for (let i = 0; i < 18; i += 1) {
      const x = wrap(i * 105 - cameraX * 0.74, 1890) - 90;
      const c = coralColours[i % coralColours.length];
      rect(ctx, x + 15, 417, 9, 45, c);
      rect(ctx, x, 430, 19, 8, c);
      rect(ctx, x + 4, 408, 8, 30, c);
      rect(ctx, x + 23, 425, 19, 8, c);
      rect(ctx, x + 34, 400, 8, 34, c);
    }
    for (let i = 0; i < 14; i += 1) {
      const x =
        wrap(
          i * 145 - cameraX * 0.28 - time * (0.018 + (i % 3) * 0.006),
          1900,
        ) - 120;
      const y = 105 + (i % 6) * 45;
      rect(
        ctx,
        x,
        y,
        28,
        12,
        i % 2 ? "rgba(244,193,108,.6)" : "rgba(143,221,227,.6)",
      );
      ctx.fillStyle = i % 2 ? "rgba(244,193,108,.6)" : "rgba(143,221,227,.6)";
      ctx.beginPath();
      ctx.moveTo(x - 12, y + 6);
      ctx.lineTo(x, y);
      ctx.lineTo(x, y + 12);
      ctx.closePath();
      ctx.fill();
    }
  };

  const drawVolcano = (
    ctx: CanvasRenderingContext2D,
    cameraX: number,
    time: number,
  ) => {
    // Volcano silhouettes.
    for (let i = 0; i < 4; i += 1) {
      const x = wrap(i * 520 - cameraX * 0.16, 1900) - 260;
      ctx.fillStyle = i % 2 === 0 ? "#3b2831" : "#462e32";
      ctx.beginPath();
      ctx.moveTo(x, FLOOR_Y);
      ctx.lineTo(x + 230, 120 + (i % 2) * 70);
      ctx.lineTo(x + 460, FLOOR_Y);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "#ea4e27";
      ctx.beginPath();
      ctx.moveTo(x + 190, 210);
      ctx.lineTo(x + 230, 120 + (i % 2) * 70);
      ctx.lineTo(x + 270, 215);
      ctx.lineTo(x + 245, 335);
      ctx.lineTo(x + 220, 395);
      ctx.closePath();
      ctx.fill();
    }

    // Lava rivers and basalt pillars.
    for (let i = 0; i < 8; i += 1) {
      const x = wrap(i * 210 - cameraX * 0.52, 1500) - 120;
      rect(ctx, x, 340, 42, 122, "#2f2b32");
      rect(ctx, x + 5, 346, 32, 7, "#6f5552");
      rect(ctx, x + 10, 384, 22, 5, "#5e4849");
    }

    for (let i = 0; i < 5; i += 1) {
      const x = wrap(i * 390 - cameraX * 0.68, 1700) - 140;
      rect(ctx, x, 446, 180, 16, "#f26a2c");
      rect(ctx, x + 12, 450, 55, 5, "#ffc14c");
      rect(ctx, x + 95, 450, 64, 5, "#ff9d36");
    }

    // Charred trees and skulls.
    for (let i = 0; i < 6; i += 1) {
      const x = wrap(i * 320 - cameraX * 0.58, 1700) - 120;
      rect(ctx, x + 18, 350, 16, 112, "#261d22");
      rect(ctx, x, 367, 32, 10, "#261d22");
      rect(ctx, x + 27, 390, 35, 10, "#261d22");
    }

    for (let i = 0; i < 5; i += 1) {
      const x = wrap(i * 380 - cameraX * 0.76, 1700) - 100;
      rect(ctx, x, 431, 27, 22, "#d8c6a0");
      rect(ctx, x + 5, 450, 17, 12, "#b3a182");
      rect(ctx, x + 5, 437, 5, 5, "#3e3031");
      rect(ctx, x + 17, 437, 5, 5, "#3e3031");
    }

    // Twisted hell trees and distant infernal fortress.
    for (let i = 0; i < 6; i += 1) {
      const x = wrap(i * 320 - cameraX * 0.36, 1800) - 180;
      rect(ctx, x + 22, 330, 16, 132, "#241920");
      rect(ctx, x, 350, 30, 10, "#241920");
      rect(ctx, x + 30, 378, 36, 10, "#241920");
      rect(ctx, x + 4, 337, 9, 24, "#241920");
      rect(ctx, x + 55, 354, 9, 32, "#241920");
    }

    const fortressX = wrap(640 - cameraX * 0.12, 1700) - 260;
    rect(ctx, fortressX, 260, 260, 202, "rgba(37,24,30,.72)");
    rect(ctx, fortressX - 45, 205, 75, 257, "rgba(44,27,32,.78)");
    rect(ctx, fortressX + 230, 185, 75, 277, "rgba(44,27,32,.78)");
    rect(ctx, fortressX + 103, 342, 54, 120, "#1e151b");

    // Meteors.
    for (let i = 0; i < 8; i += 1) {
      const x =
        ((i * 190 + time * 0.11) % (gameViewWidthRef.current + 220)) - 110;
      const y = (i * 73 + time * 0.07) % 260;
      ctx.strokeStyle = "rgba(255,123,45,.62)";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(x - 32, y - 26);
      ctx.lineTo(x, y);
      ctx.stroke();
      rect(ctx, x, y, 8, 8, "#ffc044");
    }

    ctx.fillStyle = "#ffb12f";
    for (let i = 0; i < 34; i += 1) {
      const x = wrap(i * 173 + time * 0.06, gameViewWidthRef.current);
      const y = GAME_HEIGHT - ((i * 73 + time * 0.04) % GAME_HEIGHT);
      ctx.fillRect(x, y, 3, 6);
    }

    // Large, unmistakable central volcano and repeating infernal skyline.
    const volcanoX = wrap(470 - cameraX * 0.22, 1500) - 260;
    ctx.fillStyle = "#2b2028";
    ctx.beginPath();
    ctx.moveTo(volcanoX, FLOOR_Y);
    ctx.lineTo(volcanoX + 260, 72);
    ctx.lineTo(volcanoX + 520, FLOOR_Y);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#ff5b29";
    ctx.beginPath();
    ctx.moveTo(volcanoX + 205, 165);
    ctx.lineTo(volcanoX + 260, 72);
    ctx.lineTo(volcanoX + 315, 170);
    ctx.lineTo(volcanoX + 290, 320);
    ctx.lineTo(volcanoX + 255, 420);
    ctx.lineTo(volcanoX + 225, 285);
    ctx.closePath();
    ctx.fill();
    for (let i = 0; i < 7; i += 1) {
      const x = wrap(i * 260 - cameraX * 0.58, 1820) - 130;
      rect(ctx, x + 18, 325, 18, 137, "#1c171d");
      rect(ctx, x - 10, 347, 40, 11, "#1c171d");
      rect(ctx, x + 30, 379, 43, 11, "#1c171d");
      rect(ctx, x + 5, 318, 10, 18, "#a93a27");
    }
  };

  const drawPrehistoric = (
    ctx: CanvasRenderingContext2D,
    cameraX: number,
    time: number,
  ) => {
    // Distant mesas and huge ferns.
    for (let i = 0; i < 6; i += 1) {
      const x = wrap(i * 330 - cameraX * 0.15, 1900) - 230;
      rect(ctx, x, 320, 190, 142, "#788557");
      rect(ctx, x + 30, 290, 130, 35, "#87945f");
    }

    for (let i = 0; i < 10; i += 1) {
      const x = wrap(i * 180 - cameraX * 0.42, 1450) - 120;
      rect(ctx, x + 34, 335, 15, 127, "#5c4936");
      ctx.fillStyle = i % 2 === 0 ? "#477743" : "#3f6c3f";
      for (let j = 0; j < 5; j += 1) {
        ctx.beginPath();
        ctx.ellipse(
          x + 40 - j * 17,
          345 + j * 16,
          31,
          11,
          -0.35,
          0,
          Math.PI * 2,
        );
        ctx.ellipse(
          x + 43 + j * 17,
          345 + j * 16,
          31,
          11,
          0.35,
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }
    }

    // Fossils, nests, eggs and footprints.
    for (let i = 0; i < 4; i += 1) {
      const x = wrap(i * 520 - cameraX * 0.33, 1900) - 180;
      ctx.strokeStyle = "#d5cfaa";
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(x, 408);
      ctx.lineTo(x + 85, 350);
      ctx.lineTo(x + 175, 375);
      ctx.lineTo(x + 240, 330);
      ctx.stroke();

      for (let j = 0; j < 5; j += 1) {
        ctx.beginPath();
        ctx.moveTo(x + 75 + j * 25, 356);
        ctx.lineTo(x + 60 + j * 25, 411);
        ctx.stroke();
      }
    }

    for (let i = 0; i < 5; i += 1) {
      const x = wrap(i * 380 - cameraX * 0.7, 1700) - 120;
      rect(ctx, x, 449, 80, 13, "#765a3b");
      ctx.fillStyle = "#f1dcaa";
      ctx.beginPath();
      ctx.ellipse(x + 24, 444, 12, 18, -0.2, 0, Math.PI * 2);
      ctx.ellipse(x + 50, 444, 12, 18, 0.15, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < 14; i += 1) {
      const x = wrap(i * 150 - cameraX * 0.82, 1400) - 80;
      ctx.fillStyle = "rgba(69,57,43,.35)";
      ctx.beginPath();
      ctx.ellipse(x, 447 + (i % 2) * 8, 13, 8, 0.2, 0, Math.PI * 2);
      ctx.fill();
      rect(ctx, x + 8, 438, 5, 8, "rgba(69,57,43,.35)");
      rect(ctx, x + 13, 441, 5, 8, "rgba(69,57,43,.35)");
    }

    // Flying silhouettes.
    for (let i = 0; i < 5; i += 1) {
      const x = wrap(i * 260 - cameraX * 0.12 - time * 0.025, 1300) - 120;
      const y = 100 + (i % 3) * 55;
      ctx.strokeStyle = "rgba(49,68,54,.45)";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 18, y - 8);
      ctx.lineTo(x + 36, y);
      ctx.stroke();
    }

    for (let i = 0; i < 12; i += 1) {
      const x = wrap(i * 155 - cameraX * 0.48, 1760) - 100;
      drawPixelTree(
        ctx,
        x,
        FLOOR_Y,
        0.72 + (i % 3) * 0.08,
        "#56442f",
        "#356d3d",
        "#477f42",
      );
    }
  };

  const drawCastle = (
    ctx: CanvasRenderingContext2D,
    cameraX: number,
    time: number,
  ) => {
    // Moon and storm clouds.
    ctx.fillStyle = "#e6d9b0";
    ctx.beginPath();
    ctx.arc(780, 90, 46, 0, Math.PI * 2);
    ctx.fill();

    for (let i = 0; i < 6; i += 1) {
      const x = wrap(i * 250 - cameraX * 0.08 + time * 0.012, 1600) - 180;
      drawCloud(ctx, x, 90 + (i % 3) * 45, 1.2, "rgba(37,35,58,.75)");
    }

    // Castle sections.
    for (let i = 0; i < 4; i += 1) {
      const x = wrap(i * 610 - cameraX * 0.2, 2100) - 260;
      rect(ctx, x, 245, 330, 217, "#4d4b61");
      rect(ctx, x - 60, 170, 95, 292, "#57556a");
      rect(ctx, x + 290, 150, 95, 312, "#57556a");

      for (let j = 0; j < 4; j += 1) {
        rect(ctx, x - 60 + j * 27, 150, 18, 28, "#57556a");
        rect(ctx, x + 290 + j * 27, 130, 18, 28, "#57556a");
      }

      rect(ctx, x + 130, 340, 70, 122, "#242434");
      rect(ctx, x + 22, 275, 18, 28, "#d4a950");
      rect(ctx, x + 270, 290, 18, 28, "#d4a950");

      for (let row = 0; row < 5; row += 1) {
        for (let col = 0; col < 7; col += 1) {
          rect(
            ctx,
            x + 10 + col * 44 + (row % 2) * 18,
            265 + row * 32,
            34,
            4,
            "rgba(28,27,43,.16)",
          );
        }
      }
    }

    // Banners, braziers, chains, broken armor.
    for (let i = 0; i < 7; i += 1) {
      const x = wrap(i * 240 - cameraX * 0.52, 1500) - 120;
      rect(ctx, x, 320, 10, 142, "#34313e");
      rect(ctx, x - 18, 326, 46, 64, i % 2 === 0 ? "#8c3f56" : "#4f5f8f");
      ctx.fillStyle = "rgba(255,255,255,.15)";
      ctx.beginPath();
      ctx.moveTo(x - 18, 390);
      ctx.lineTo(x + 5, 410);
      ctx.lineTo(x + 28, 390);
      ctx.closePath();
      ctx.fill();
    }

    for (let i = 0; i < 5; i += 1) {
      const x = wrap(i * 370 - cameraX * 0.68, 1700) - 130;
      rect(ctx, x + 12, 405, 12, 57, "#4b4140");
      rect(ctx, x, 397, 36, 11, "#6b5a4e");
      rect(ctx, x + 5, 383, 26, 15, "#e05b2c");
      rect(ctx, x + 10, 374, 16, 13, "#ffb03f");
    }

    for (let i = 0; i < 4; i += 1) {
      const x = wrap(i * 490 - cameraX * 0.6, 1900) - 150;
      ctx.strokeStyle = "#292833";
      ctx.lineWidth = 6;
      for (let j = 0; j < 8; j += 1) {
        ctx.strokeRect(x, 130 + j * 25, 18, 24);
      }
    }

    for (let i = 0; i < 6; i += 1) {
      const x = wrap(i * 300 - cameraX * 0.78, 1700) - 100;
      rect(ctx, x, 432, 24, 30, "#777987");
      rect(ctx, x + 22, 440, 30, 12, "#5f616f");
      rect(ctx, x + 36, 421, 6, 39, "#9da0aa");
    }

    // Lightning reveals the castle silhouette.
    if (Math.sin(time * 0.0021) > 0.965) {
      ctx.fillStyle = "rgba(235,241,255,.22)";
      ctx.fillRect(0, 0, gameViewWidthRef.current, GAME_HEIGHT);

      ctx.strokeStyle = "#e8edff";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(720, 0);
      ctx.lineTo(675, 85);
      ctx.lineTo(715, 82);
      ctx.lineTo(650, 175);
      ctx.stroke();
    }

    // Rain.
    ctx.strokeStyle = "rgba(197,204,226,.25)";
    ctx.lineWidth = 2;
    for (let i = 0; i < 60; i += 1) {
      const x = wrap(i * 83 + time * 0.08, gameViewWidthRef.current);
      const y = (i * 59 + time * 0.12) % GAME_HEIGHT;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - 7, y + 16);
      ctx.stroke();
    }

    // Stronger castle silhouette, lightning and glowing windows.
    const keepX = wrap(520 - cameraX * 0.25, 1500) - 220;
    rect(ctx, keepX, 210, 440, 252, "rgba(45,43,61,.92)");
    rect(ctx, keepX - 70, 115, 120, 347, "rgba(54,52,70,.96)");
    rect(ctx, keepX + 390, 92, 120, 370, "rgba(54,52,70,.96)");
    for (let i = 0; i < 8; i += 1) {
      rect(ctx, keepX + 30 + i * 52, 275 + (i % 2) * 44, 17, 31, "#e4b95e");
    }
    if (Math.floor(time / 850) % 5 === 0) {
      ctx.strokeStyle = "rgba(235,241,255,.95)";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(690, 0);
      ctx.lineTo(620, 105);
      ctx.lineTo(670, 105);
      ctx.lineTo(590, 220);
      ctx.stroke();
    }
  };

  const drawVillage = (
    ctx: CanvasRenderingContext2D,
    cameraX: number,
    time: number,
  ) => {
    drawCloud(ctx, 120 - cameraX * 0.03, 90, 0.85);
    drawCloud(ctx, 660 - cameraX * 0.025, 145, 1.15);

    // Hills and windmills.
    ctx.fillStyle = "#77ad4f";
    for (let i = 0; i < 6; i += 1) {
      const x = wrap(i * 340 - cameraX * 0.13, 1900) - 300;
      ctx.beginPath();
      ctx.arc(x, 450, 250, Math.PI, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < 2; i += 1) {
      const x = wrap(i * 900 - cameraX * 0.22, 2200) - 150;
      rect(ctx, x + 35, 300, 45, 162, "#e0c28b");
      ctx.save();
      ctx.translate(x + 57, 300);
      ctx.rotate(time * 0.0004 + i);
      rect(ctx, -8, -78, 16, 156, "#8c6548");
      rect(ctx, -78, -8, 156, 16, "#8c6548");
      ctx.restore();
    }

    // Houses, market stalls, fences, carts, flowers.
    for (let i = 0; i < 7; i += 1) {
      const x = 80 + i * 245 - (cameraX - 18000) * 0.58;
      const body =
        i % 3 === 0 ? "#f0ba78" : i % 3 === 1 ? "#d99a73" : "#d7b36f";
      const roof = i % 2 === 0 ? "#9b4c3f" : "#62784d";

      rect(ctx, x, 340, 135, 122, body);
      ctx.fillStyle = roof;
      ctx.beginPath();
      ctx.moveTo(x - 20, 340);
      ctx.lineTo(x + 67, 273);
      ctx.lineTo(x + 155, 340);
      ctx.closePath();
      ctx.fill();

      rect(ctx, x + 18, 375, 30, 28, "#8fd2dc");
      rect(ctx, x + 84, 389, 29, 73, "#70442d");
      rect(ctx, x + 88, 414, 4, 4, "#e8c66b");

      rect(ctx, x + 10, 424, 10, 38, "#6d8f3e");
      rect(ctx, x + 2, 416, 25, 12, i % 2 === 0 ? "#e86f7e" : "#e5b556");
    }

    for (let i = 0; i < 10; i += 1) {
      const x = wrap(i * 190 - cameraX * 0.7, 1600) - 100;
      rect(ctx, x, 415, 8, 47, "#775237");
      rect(ctx, x + 32, 415, 8, 47, "#775237");
      rect(ctx, x - 6, 424, 52, 8, "#8a6040");
      rect(ctx, x - 6, 444, 52, 8, "#8a6040");
    }

    for (let i = 0; i < 4; i += 1) {
      const x = wrap(i * 450 - cameraX * 0.55, 1800) - 120;
      rect(ctx, x, 406, 82, 56, "#825534");
      rect(ctx, x - 10, 392, 102, 18, i % 2 === 0 ? "#e4625e" : "#e6bd56");
      rect(ctx, x + 6, 432, 12, 30, "#5e402e");
      rect(ctx, x + 64, 432, 12, 30, "#5e402e");
    }

    // Grounded villagers with hair, bows, outfits, props and conversation pairs.
    const skinTones = ["#f0bf96", "#d99b72", "#b97756", "#8f5e45"];
    const hairTones = ["#3c2a25", "#6d432c", "#d6a149", "#24212a", "#8b523b"];
    const outfitTones = [
      "#d95f6b",
      "#5f86c8",
      "#e4a34f",
      "#6bb27b",
      "#9a6bc2",
      "#d8789f",
    ];

    const drawVillager = (
      x: number,
      groundY: number,
      index: number,
      facing: 1 | -1,
      pose: "walk" | "talk" | "stand",
      prop?: "basket" | "flower" | "bread" | "book",
      bow = false,
    ) => {
      ctx.save();
      ctx.translate(x, groundY);
      ctx.scale(0.76, 0.76);

      const skin = skinTones[index % skinTones.length];
      const hair = hairTones[index % hairTones.length];
      const outfit = outfitTones[index % outfitTones.length];
      const step = pose === "walk" ? Math.sin(time * 0.018 + index) * 5.5 : 0;
      const bodyX = 0;
      const localGroundY = 0;
      const headY = localGroundY - 55;

      // Shadow anchors every villager visually to the ground.
      ctx.fillStyle = "rgba(73,50,38,.22)";
      ctx.beginPath();
      ctx.ellipse(bodyX + 17, localGroundY + 1, 18, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Legs and shoes.
      rect(ctx, bodyX + 7, localGroundY - 15 + step, 8, 15 - step, "#493b42");
      rect(ctx, bodyX + 21, localGroundY - 15 - step, 8, 15 + step, "#493b42");
      rect(ctx, bodyX + 4, localGroundY - 3, 12, 4, "#2d2830");
      rect(ctx, bodyX + 20, localGroundY - 3, 12, 4, "#2d2830");

      // Outfit with collar, belt and sleeve pixels.
      rect(ctx, bodyX + 4, localGroundY - 40, 28, 27, outfit);
      rect(ctx, bodyX + 8, localGroundY - 39, 20, 5, "rgba(255,255,255,.22)");
      rect(ctx, bodyX + 5, localGroundY - 23, 26, 4, "#78534c");
      rect(ctx, bodyX, localGroundY - 36, 7, 18, outfit);
      rect(ctx, bodyX + 30, localGroundY - 36, 7, 18, outfit);

      // Head, ears, hair and face.
      rect(ctx, bodyX + 8, headY, 20, 19, skin);
      rect(ctx, bodyX + 5, headY + 6, 4, 8, skin);
      rect(ctx, bodyX + 28, headY + 6, 4, 8, skin);
      rect(ctx, bodyX + 6, headY - 5, 24, 8, hair);
      rect(ctx, bodyX + (facing > 0 ? 23 : 11), headY + 8, 3, 3, "#29252c");
      rect(ctx, bodyX + 16, headY + 14, 6, 2, "#9e5f59");

      // Hair silhouettes differ by character.
      if (index % 3 === 0) {
        rect(ctx, bodyX + 5, headY, 6, 17, hair);
        rect(ctx, bodyX + 27, headY, 5, 14, hair);
      } else if (index % 3 === 1) {
        rect(ctx, bodyX + 7, headY - 8, 22, 6, hair);
        rect(ctx, bodyX + 25, headY - 2, 7, 11, hair);
      } else {
        rect(ctx, bodyX + 4, headY - 1, 7, 12, hair);
      }

      // Optional bow.
      if (bow) {
        rect(ctx, bodyX + 5, headY - 10, 8, 7, "#ed7896");
        rect(ctx, bodyX + 15, headY - 10, 8, 7, "#ed7896");
        rect(ctx, bodyX + 12, headY - 8, 5, 5, "#ffd06d");
      }

      // Hand-held props.
      if (prop === "basket") {
        rect(
          ctx,
          bodyX + (facing > 0 ? 34 : -12),
          localGroundY - 27,
          14,
          12,
          "#9a6238",
        );
        rect(
          ctx,
          bodyX + (facing > 0 ? 37 : -9),
          localGroundY - 33,
          8,
          7,
          "#6e472f",
        );
        rect(
          ctx,
          bodyX + (facing > 0 ? 36 : -10),
          localGroundY - 29,
          3,
          3,
          "#d95f6b",
        );
        rect(
          ctx,
          bodyX + (facing > 0 ? 43 : -3),
          localGroundY - 28,
          3,
          3,
          "#6bb27b",
        );
      }

      if (prop === "flower") {
        rect(
          ctx,
          bodyX + (facing > 0 ? 36 : -5),
          localGroundY - 35,
          3,
          18,
          "#4f9a52",
        );
        rect(
          ctx,
          bodyX + (facing > 0 ? 32 : -9),
          localGroundY - 40,
          11,
          9,
          "#e97992",
        );
        rect(
          ctx,
          bodyX + (facing > 0 ? 35 : -6),
          localGroundY - 43,
          5,
          5,
          "#ffd16b",
        );
      }

      if (prop === "bread") {
        rect(
          ctx,
          bodyX + (facing > 0 ? 34 : -12),
          localGroundY - 31,
          16,
          9,
          "#d7a34f",
        );
        rect(
          ctx,
          bodyX + (facing > 0 ? 37 : -9),
          localGroundY - 34,
          10,
          5,
          "#efc873",
        );
      }

      if (prop === "book") {
        rect(
          ctx,
          bodyX + (facing > 0 ? 33 : -12),
          localGroundY - 34,
          18,
          14,
          "#6f78b8",
        );
        rect(
          ctx,
          bodyX + (facing > 0 ? 41 : -4),
          localGroundY - 33,
          2,
          12,
          "#e8dca9",
        );
      }
      ctx.restore();
    };

    // Moving villagers.
    for (let i = 0; i < 5; i += 1) {
      const base = 18110 + i * 340;
      const facing: 1 | -1 = i % 2 === 0 ? 1 : -1;
      const walk = Math.sin(time * 0.0011 + i * 1.4) * 42;
      const x = base - cameraX + walk;
      drawVillager(
        x,
        FLOOR_Y,
        i,
        facing,
        "walk",
        ["basket", "flower", "bread", "book"][i % 4] as
          | "basket"
          | "flower"
          | "bread"
          | "book",
        i % 2 === 1,
      );
    }

    // Stationary conversation pairs.
    for (let pair = 0; pair < 3; pair += 1) {
      const pairX = 18370 + pair * 570 - cameraX;
      drawVillager(
        pairX,
        FLOOR_Y,
        pair + 7,
        1,
        "talk",
        pair === 0 ? "book" : undefined,
        pair === 2,
      );
      drawVillager(
        pairX + 48,
        FLOOR_Y,
        pair + 11,
        -1,
        "talk",
        pair === 1 ? "flower" : undefined,
        pair === 0,
      );

      const bubbleY = FLOOR_Y - 103 - (pair % 2) * 7;
      rect(ctx, pairX + 13, bubbleY, 57, 27, "rgba(255,255,255,.94)");
      rect(ctx, pairX + 35, bubbleY + 25, 9, 8, "rgba(255,255,255,.94)");
      const conversationLines = [
        ["♥  ♪", "HI!", "♪  ♥", "...", "WOW"],
        ["!  ♥", "OK!", "♪ ?", "YES", "HA!"],
        ["♪  !", "HEY", "♥ ?", "NICE", "..."],
      ];
      const conversationIndex =
        Math.floor(time / 1450 + pair * 1.7) % conversationLines[pair].length;

      pixelText(
        ctx,
        conversationLines[pair][conversationIndex],
        pairX + 42,
        bubbleY + 19,
        12,
        "#8b5d78",
        "center",
      );
    }

    const homeX = WORLD_WIDTH - 350 - cameraX;

    // The player's home is larger and more detailed than the other village houses.
    rect(ctx, homeX, 276, 286, 186, "#f3c47f");
    rect(ctx, homeX + 12, 292, 262, 10, "#e6ad6a");

    // Layered roof with trim and shingles.
    ctx.fillStyle = "#994b3d";
    ctx.beginPath();
    ctx.moveTo(homeX - 38, 286);
    ctx.lineTo(homeX + 143, 168);
    ctx.lineTo(homeX + 324, 286);
    ctx.closePath();
    ctx.fill();

    rect(ctx, homeX - 17, 280, 320, 11, "#713d35");
    for (let roofX = 0; roofX < 250; roofX += 34) {
      rect(
        ctx,
        homeX + 19 + roofX,
        246 - Math.abs(roofX - 119) * 0.32,
        23,
        5,
        "#b55c49",
      );
    }

    // Visible chimney and animated smoke.
    rect(ctx, homeX + 220, 188, 34, 67, "#8b4e3f");
    rect(ctx, homeX + 214, 181, 46, 12, "#693a34");
    rect(ctx, homeX + 226, 199, 9, 7, "#b36a52");
    rect(ctx, homeX + 242, 218, 8, 7, "#b36a52");

    for (let i = 0; i < 7; i += 1) {
      const y = 174 - ((time * 0.02 + i * 24) % 150);
      rect(
        ctx,
        homeX + 224 + Math.sin(time * 0.002 + i) * 15,
        y,
        25 + i * 3,
        15,
        "rgba(255,255,255,.34)",
      );
    }

    // Windows with frames, curtains and flower boxes.
    rect(ctx, homeX + 28, 322, 58, 52, "#754c3d");
    rect(ctx, homeX + 34, 328, 46, 40, "#9edce1");
    rect(ctx, homeX + 55, 328, 5, 40, "#f3d08a");
    rect(ctx, homeX + 34, 346, 46, 5, "#f3d08a");
    rect(ctx, homeX + 27, 374, 60, 10, "#8b5c3d");
    rect(ctx, homeX + 34, 368, 8, 8, "#e76f7e");
    rect(ctx, homeX + 50, 368, 8, 8, "#e9b854");
    rect(ctx, homeX + 68, 368, 8, 8, "#78b85d");

    rect(ctx, homeX + 200, 322, 58, 52, "#754c3d");
    rect(ctx, homeX + 206, 328, 46, 40, "#9edce1");
    rect(ctx, homeX + 227, 328, 5, 40, "#f3d08a");
    rect(ctx, homeX + 206, 346, 46, 5, "#f3d08a");
    rect(ctx, homeX + 199, 374, 60, 10, "#8b5c3d");
    rect(ctx, homeX + 207, 368, 8, 8, "#e76f7e");
    rect(ctx, homeX + 225, 368, 8, 8, "#e9b854");
    rect(ctx, homeX + 242, 368, 8, 8, "#78b85d");

    // Front door, awning, steps and porch lights.
    rect(ctx, homeX + 111, 344, 66, 118, "#74442d");
    rect(ctx, homeX + 116, 351, 56, 104, "#805039");
    rect(ctx, homeX + 145, 401, 6, 6, "#f1d06c");
    rect(ctx, homeX + 101, 331, 86, 15, "#8c4c3d");
    rect(ctx, homeX + 108, 325, 72, 9, "#c56c51");
    rect(ctx, homeX + 95, 454, 98, 8, "#8e6042");
    rect(ctx, homeX + 104, 443, 80, 11, "#a8744d");
    rect(ctx, homeX + 91, 357, 10, 16, "#f0c768");
    rect(ctx, homeX + 187, 357, 10, 16, "#f0c768");

    // Wall trim and foundation pixels.
    rect(ctx, homeX + 8, 300, 8, 162, "#d69a5d");
    rect(ctx, homeX + 270, 300, 8, 162, "#d69a5d");
    for (let i = 0; i < 7; i += 1) {
      rect(ctx, homeX + 17 + i * 39, 414 + (i % 2) * 18, 18, 6, "#d8a36a");
    }

    // HOME is now on a freestanding sign beside the house.
    const signX = homeX - 90;
    rect(ctx, signX + 26, FLOOR_Y - 68, 8, 68, "#684732");
    rect(ctx, signX, FLOOR_Y - 82, 66, 31, "#8a5d3c");
    rect(ctx, signX + 5, FLOOR_Y - 77, 56, 21, "#f1cf84");
    pixelText(ctx, "HOME", signX + 33, FLOOR_Y - 61, 12, "#64402f", "center");
  };

  const drawBackground = (
    ctx: CanvasRenderingContext2D,
    cameraX: number,
    time: number,
  ) => {
    const biome = getBiomeAt(
      clamp(cameraX + gameViewWidthRef.current / 2, 0, WORLD_WIDTH - 1),
    );

    const gradient = ctx.createLinearGradient(0, 0, 0, GAME_HEIGHT);
    gradient.addColorStop(0, biome.skyTop);
    gradient.addColorStop(1, biome.skyBottom);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, gameViewWidthRef.current, GAME_HEIGHT);

    if (biome.id === "darkForest") drawDarkForest(ctx, cameraX, time);
    if (biome.id === "snow") drawSnow(ctx, cameraX, time);
    if (biome.id === "desert") drawDesert(ctx, cameraX, time);
    if (biome.id === "jungle") drawJungle(ctx, cameraX, time);
    if (biome.id === "underwater") drawUnderwater(ctx, cameraX, time);
    if (biome.id === "volcano") drawVolcano(ctx, cameraX, time);
    if (biome.id === "prehistoric") drawPrehistoric(ctx, cameraX, time);
    if (biome.id === "castle") drawCastle(ctx, cameraX, time);
    if (biome.id === "village") drawVillage(ctx, cameraX, time);
  };

  const drawPlatforms = (ctx: CanvasRenderingContext2D, cameraX: number) => {
    for (const platform of platforms) {
      const x = platform.x - cameraX;
      if (x + platform.width < -80 || x > gameViewWidthRef.current + 80)
        continue;

      const biome =
        BIOMES.find((item) => item.id === platform.biome) ?? BIOMES[0];

      rect(ctx, x, platform.y, platform.width, platform.height, biome.ground);
      rect(ctx, x, platform.y, platform.width, 10, biome.groundTop);

      // Each platform gets a unique deterministic texture.
      for (let offset = 14; offset < platform.width; offset += 36) {
        const r = seeded(platform.x + offset * 7 + platform.variant * 13);
        const detailY =
          platform.y + 22 + Math.floor(r * Math.max(10, platform.height - 32));
        rect(
          ctx,
          x + offset,
          detailY,
          8 + Math.floor(r * 12),
          4 + Math.floor(r * 5),
          "rgba(20,16,24,.18)",
        );
      }

      if (platform.biome === "snow") {
        rect(ctx, x, platform.y - 5, platform.width, 9, "#ffffff");
        for (let offset = 20; offset < platform.width; offset += 62) {
          rect(ctx, x + offset, platform.y + 12, 12, 8, "#aecbd8");
        }
      }

      if (platform.biome === "desert") {
        for (let offset = 18; offset < platform.width; offset += 55) {
          rect(ctx, x + offset, platform.y + 15, 18, 4, "#d79e47");
        }
      }

      if (platform.biome === "jungle") {
        for (let offset = 15; offset < platform.width; offset += 48) {
          rect(ctx, x + offset, platform.y - 8, 6, 12, "#6ed052");
          rect(ctx, x + offset + 5, platform.y - 5, 8, 7, "#4dad45");
        }
      }

      if (platform.biome === "underwater") {
        for (let offset = 20; offset < platform.width; offset += 70) {
          ctx.fillStyle = offset % 140 === 0 ? "#df8f87" : "#d7b477";
          ctx.beginPath();
          ctx.arc(x + offset, platform.y + 6, 7, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (platform.biome === "volcano") {
        for (let offset = 20; offset < platform.width; offset += 74) {
          rect(ctx, x + offset, platform.y + 17, 46, 5, "#f06a2c");
          rect(ctx, x + offset + 12, platform.y + 18, 18, 2, "#ffc24c");
        }
      }

      if (platform.biome === "prehistoric") {
        for (let offset = 22; offset < platform.width; offset += 85) {
          rect(ctx, x + offset, platform.y + 18, 24, 8, "#79654b");
        }
      }

      if (platform.biome === "castle") {
        for (let offset = 0; offset < platform.width; offset += 46) {
          rect(ctx, x + offset, platform.y + 23, 39, 4, "#666572");
        }
      }

      if (platform.biome === "village") {
        for (let offset = 14; offset < platform.width; offset += 42) {
          rect(ctx, x + offset, platform.y - 5, 5, 8, "#a2d45c");
        }
      }
    }
  };

  const drawCheckpoint = (
    ctx: CanvasRenderingContext2D,
    checkpoint: Checkpoint,
    cameraX: number,
    time: number,
  ) => {
    const x = checkpoint.x - cameraX;

    // At the starting point, show only the flag and pole — no checkpoint stone.
    if (checkpoint.label === "START") {
      if (x < -80 || x > gameViewWidthRef.current + 80) return;

      rect(ctx, x, FLOOR_Y - 72, 7, 72, "#4b3c35");
      rect(ctx, x - 3, FLOOR_Y - 78, 13, 9, "#6d5548");
      rect(ctx, x + 7, FLOOR_Y - 70, 48, 24, "#7de3ad");
      rect(ctx, x + 12, FLOOR_Y - 65, 37, 14, "#c2ffda");
      rect(ctx, x + 23, FLOOR_Y - 62, 9, 8, "#5fb58b");
      return;
    }
    if (x < -80 || x > gameViewWidthRef.current + 80) return;

    const active = checkpoint.x <= checkpointXRef.current;
    rect(ctx, x, FLOOR_Y - 82, 8, 82, "#4b3c35");
    rect(ctx, x - 3, FLOOR_Y - 88, 14, 10, "#6d5548");
    rect(ctx, x + 8, FLOOR_Y - 76, 48, 28, active ? "#7de3ad" : "#6d7180");
    rect(ctx, x + 13, FLOOR_Y - 71, 38, 18, active ? "#b8ffd3" : "#9598a4");

    if (active) {
      const glow = 0.12 + Math.sin(time * 0.006) * 0.04;
      ctx.fillStyle = `rgba(126,230,175,${glow})`;
      ctx.fillRect(x - 20, FLOOR_Y - 110, 90, 120);
    }
  };

  const drawPlayer = (
    ctx: CanvasRenderingContext2D,
    cameraX: number,
    time: number,
  ) => {
    const player = playerRef.current;
    const now = performance.now();

    if (now < player.invincibleUntil && Math.floor(now / 90) % 2 === 0) {
      return;
    }

    const x = Math.round(player.x - cameraX);
    const y = Math.round(player.y);
    const walking = player.grounded && Math.abs(player.velocityX) > 0.5;
    const leg = walking ? Math.sin(time * 0.02) * 4 : 0;

    ctx.save();

    if (player.facing === -1) {
      ctx.translate(x + player.width, 0);
      ctx.scale(-1, 1);
    } else {
      ctx.translate(x, 0);
    }

    rect(ctx, -8, y + 22, 12, 6, "#737a8d");
    rect(ctx, 4, y + 17, 27, 24, "#666d82");
    rect(ctx, 5, y + 3, 27, 23, "#858ca0");
    rect(ctx, 8, y, 8, 10, "#858ca0");
    rect(ctx, 23, y, 8, 10, "#858ca0");
    rect(ctx, 5, y + 13, 27, 10, "#292b3c");
    rect(ctx, 22, y + 15, 5, 4, "#ffd45f");
    rect(ctx, 4, y + 25, 29, 5, "#dd5964");
    rect(ctx, -4, y + 27, 10, 5, "#dd5964");
    rect(ctx, 7, y + 37, 8, 8 + leg, "#282a3a");
    rect(ctx, 21, y + 37, 8, 8 - leg, "#282a3a");

    // Small pixel highlights.
    rect(ctx, 9, y + 6, 3, 4, "#a9afbf");
    rect(ctx, 9, y + 20, 4, 3, "#959cad");

    ctx.restore();
  };

  const drawMonster = (
    ctx: CanvasRenderingContext2D,
    monster: Monster,
    cameraX: number,
    time: number,
  ) => {
    const x = Math.round(monster.x - cameraX);
    const y =
      Math.round(monster.y) +
      Math.round(Math.sin(time * 0.008 + monster.x) * 2);

    if (x < -80 || x > gameViewWidthRef.current + 80) return;

    ctx.save();

    if (monster.direction === -1) {
      ctx.translate(x + monster.width, 0);
      ctx.scale(-1, 1);
    } else {
      ctx.translate(x, 0);
    }

    if (monster.kind === "shadow") {
      rect(ctx, 2, y + 8, 40, 28, "#733e7d");
      rect(ctx, 7, y + 4, 9, 12, "#c7c2d4");
      rect(ctx, 29, y + 4, 9, 12, "#c7c2d4");
      rect(ctx, 10, y + 17, 7, 5, "#ffe766");
      rect(ctx, 28, y + 17, 7, 5, "#ffe766");
      rect(ctx, 16, y + 27, 13, 4, "#4d2458");
      rect(ctx, -4, y + 19, 8, 12, "#5d2f67");
      rect(ctx, 40, y + 19, 8, 12, "#5d2f67");
    }

    if (monster.kind === "reindeer") {
      rect(ctx, 7, y + 14, 31, 21, "#9a6845");
      rect(ctx, 29, y + 8, 15, 18, "#b47b50");
      rect(ctx, 36, y + 13, 5, 5, "#ffffff");
      rect(ctx, 38, y + 14, 3, 3, "#263542");
      rect(ctx, 42, y + 19, 5, 5, "#df4f4e");
      rect(ctx, 11, y + 32, 7, 7, "#5a3b2b");
      rect(ctx, 29, y + 32, 7, 7, "#5a3b2b");
      rect(ctx, 2, y + 17, 9, 6, "#7c5138");

      ctx.strokeStyle = "#6e4a35";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(31, y + 10);
      ctx.lineTo(27, y - 1);
      ctx.lineTo(22, y - 6);
      ctx.moveTo(34, y + 9);
      ctx.lineTo(39, y - 2);
      ctx.lineTo(45, y - 7);
      ctx.stroke();

      rect(ctx, 8, y + 8, 27, 7, "#d64049");
      rect(ctx, 10, y + 2, 22, 8, "#d64049");
      rect(ctx, 29, y - 2, 8, 8, "#ffffff");
    }

    if (monster.kind === "scorpion") {
      rect(ctx, 5, y + 14, 33, 19, "#6e3c28");
      rect(ctx, 0, y + 20, 10, 7, "#994b2c");
      rect(ctx, 35, y + 18, 10, 7, "#994b2c");
      ctx.strokeStyle = "#6e3c28";
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(35, y + 15);
      ctx.quadraticCurveTo(52, y - 7, 39, y - 12);
      ctx.stroke();
      rect(ctx, 12, y + 18, 5, 4, "#f4d451");
      rect(ctx, 27, y + 18, 5, 4, "#f4d451");
      rect(ctx, 8, y + 31, 7, 7, "#513025");
      rect(ctx, 28, y + 31, 7, 7, "#513025");
    }

    if (monster.kind === "frog") {
      rect(ctx, 4, y + 13, 36, 22, "#4e9e45");
      rect(ctx, 8, y + 5, 11, 12, "#63bd53");
      rect(ctx, 27, y + 5, 11, 12, "#63bd53");
      rect(ctx, 11, y + 8, 5, 5, "#fff");
      rect(ctx, 30, y + 8, 5, 5, "#fff");
      rect(ctx, 13, y + 9, 3, 3, "#1b3020");
      rect(ctx, 30, y + 9, 3, 3, "#1b3020");
      rect(ctx, 15, y + 27, 16, 4, "#2d6233");
      rect(ctx, -4, y + 28, 12, 8, "#3c7f3c");
      rect(ctx, 37, y + 28, 12, 8, "#3c7f3c");
    }

    if (monster.kind === "pufferfish") {
      rect(ctx, 9, y + 8, 30, 27, "#e5a44e");
      rect(ctx, 34, y + 13, 8, 7, "#ffffff");
      rect(ctx, 37, y + 15, 3, 3, "#263542");
      ctx.fillStyle = "#e5a44e";
      ctx.beginPath();
      ctx.moveTo(6, y + 21);
      ctx.lineTo(-5, y + 12);
      ctx.lineTo(-5, y + 30);
      ctx.closePath();
      ctx.fill();
      for (let i = 0; i < 6; i += 1) {
        rect(ctx, 10 + i * 5, y + 5 + (i % 2) * 28, 3, 8, "#f1c46d");
      }
      rect(ctx, 18, y + 17, 4, 4, "#bb6d35");
      rect(ctx, 26, y + 24, 4, 4, "#bb6d35");
    }

    if (monster.kind === "magmaSlug") {
      rect(ctx, 4, y + 17, 38, 19, "#85352d");
      rect(ctx, 10, y + 6, 27, 22, "#c94a2d");
      rect(ctx, 14, y + 10, 6, 5, "#ffd65c");
      rect(ctx, 28, y + 10, 6, 5, "#ffd65c");
      rect(ctx, 12, y + 27, 28, 5, "#ff7c2d");
      rect(ctx, 16, y + 1, 7, 10, "#ff9b30");
      rect(ctx, 28, y - 2, 7, 12, "#ffbb3d");
    }

    if (monster.kind === "raptor") {
      rect(ctx, 4, y + 10, 34, 25, "#568349");
      rect(ctx, 28, y + 2, 17, 22, "#699b55");
      rect(ctx, 37, y + 8, 8, 5, "#f4e460");
      rect(ctx, 40, y + 9, 3, 3, "#243122");
      rect(ctx, -5, y + 14, 15, 8, "#568349");
      rect(ctx, 9, y + 32, 8, 7, "#344c33");
      rect(ctx, 28, y + 32, 8, 7, "#344c33");
      for (let i = 0; i < 4; i += 1) {
        ctx.fillStyle = "#d4b658";
        ctx.beginPath();
        ctx.moveTo(9 + i * 7, y + 10);
        ctx.lineTo(13 + i * 7, y + 2);
        ctx.lineTo(17 + i * 7, y + 10);
        ctx.closePath();
        ctx.fill();
      }
      rect(ctx, 31, y + 20, 13, 4, "#355236");
    }

    if (monster.kind === "knight") {
      rect(ctx, 8, y + 7, 28, 29, "#696b79");
      rect(ctx, 11, y + 2, 23, 17, "#858897");
      rect(ctx, 9, y + 10, 26, 6, "#292a35");
      rect(ctx, 27, y + 11, 5, 3, "#e95858");
      rect(ctx, 1, y + 13, 8, 24, "#3d3f4d");
      rect(ctx, 36, y - 3, 5, 39, "#c4c5ca");
      rect(ctx, 32, y - 5, 13, 5, "#c4c5ca");
      rect(ctx, 10, y + 28, 8, 10, "#494b57");
      rect(ctx, 26, y + 28, 8, 10, "#494b57");
    }

    ctx.restore();
  };

  const drawHud = (ctx: CanvasRenderingContext2D) => {
    const viewWidth = gameViewWidthRef.current;
    const touchHud = isTouch;

    // On phones the logical viewport is wider than desktop. Keep the HUD
    // comfortably away from the pause button and scale the important text up
    // instead of stretching the UI with the world.
    const lifeBoxX = touchHud ? 24 : 18;
    const lifeBoxY = touchHud ? 20 : 18;
    const lifeBoxWidth = touchHud ? 286 : 245;
    const lifeBoxHeight = touchHud ? 72 : 62;

    const progressBoxWidth = touchHud ? 230 : 242;
    const progressBoxHeight = touchHud ? 68 : 62;
    const progressBoxX = touchHud
      ? viewWidth - progressBoxWidth - 142
      : viewWidth - 330;
    const progressBoxY = touchHud ? 20 : 18;

    rect(
      ctx,
      lifeBoxX,
      lifeBoxY,
      lifeBoxWidth,
      lifeBoxHeight,
      "rgba(10,12,29,.78)",
    );
    rect(
      ctx,
      progressBoxX,
      progressBoxY,
      progressBoxWidth,
      progressBoxHeight,
      "rgba(10,12,29,.78)",
    );

    ctx.strokeStyle = "rgba(255,255,255,.18)";
    ctx.lineWidth = touchHud ? 2.5 : 2;
    ctx.strokeRect(lifeBoxX, lifeBoxY, lifeBoxWidth, lifeBoxHeight);
    ctx.strokeRect(
      progressBoxX,
      progressBoxY,
      progressBoxWidth,
      progressBoxHeight,
    );

    pixelText(
      ctx,
      `LIFE ${"♥".repeat(Math.max(0, lives))}`,
      lifeBoxX + 18,
      lifeBoxY + (touchHud ? 39 : 32),
      touchHud ? 24 : 18,
      "#ffffff",
    );

    pixelText(
      ctx,
      `${progress}%`,
      progressBoxX + progressBoxWidth - 18,
      progressBoxY + (touchHud ? 40 : 30),
      touchHud ? 25 : 20,
      "#ffffff",
      "right",
    );

    const progressTrackX = lifeBoxX + 16;
    const progressTrackY = lifeBoxY + lifeBoxHeight - (touchHud ? 12 : 12);
    const progressTrackWidth = lifeBoxWidth - 32;
    rect(
      ctx,
      progressTrackX,
      progressTrackY,
      progressTrackWidth,
      touchHud ? 5 : 4,
      "rgba(255,255,255,.14)",
    );
    rect(
      ctx,
      progressTrackX,
      progressTrackY,
      progressTrackWidth * (progress / 100),
      touchHud ? 5 : 4,
      "#8ce4b5",
    );

    pixelText(
      ctx,
      currentBiome.name,
      viewWidth / 2,
      touchHud ? 44 : 35,
      touchHud ? 18 : 13,
      "#f4f5ff",
      "center",
    );
  };

  const drawBiomeNotice = (ctx: CanvasRenderingContext2D, now: number) => {
    if (now > biomeNoticeUntilRef.current) return;

    const remaining = biomeNoticeUntilRef.current - now;
    const alpha = Math.min(1, remaining / 450);

    ctx.save();
    ctx.globalAlpha = alpha;
    rect(
      ctx,
      gameViewWidthRef.current / 2 - 195,
      112,
      390,
      92,
      "rgba(9,10,29,.84)",
    );
    ctx.strokeStyle = "rgba(255,255,255,.2)";
    ctx.strokeRect(gameViewWidthRef.current / 2 - 195, 112, 390, 92);
    pixelText(
      ctx,
      currentBiome.name,
      gameViewWidthRef.current / 2,
      152,
      25,
      "#ffffff",
      "center",
    );
    pixelText(
      ctx,
      currentBiome.subtitle,
      gameViewWidthRef.current / 2,
      181,
      13,
      "#c4c8df",
      "center",
    );
    ctx.restore();
  };

  const updateBedroom = useCallback(
    (delta: number) => {
      if (statusRef.current !== "bedroom") return;

      const direction =
        inputRef.current.right && !inputRef.current.left
          ? 1
          : inputRef.current.left && !inputRef.current.right
            ? -1
            : 0;

      const walkingNow = direction !== 0;
      setBedroomWalking((previous) =>
        previous === walkingNow ? previous : walkingNow,
      );

      if (direction !== 0) {
        const nextFacing = direction as 1 | -1;

        if (bedroomFacingRef.current !== nextFacing) {
          bedroomFacingRef.current = nextFacing;
          setBedroomFacing(nextFacing);
        }

        const bedroomMoveSpeed = isTouch ? 0.032 : 0.022;

        bedroomPlayerXRef.current = clamp(
          bedroomPlayerXRef.current + direction * delta * bedroomMoveSpeed,
          4,
          78,
        );

        // Move the bedroom sprite immediately instead of waiting for React's
        // render cycle. This keeps touch movement continuous on mobile.
        if (bedroomPlayerElementRef.current) {
          bedroomPlayerElementRef.current.style.left = `${bedroomPlayerXRef.current}%`;
        }
        setBedroomPlayerX(bedroomPlayerXRef.current);
      }

      // Walk back through the left edge to return to the village.
      if (bedroomPlayerXRef.current <= 4.5) {
        clearInput();
        setBedroomWalking(false);
        bedroomPlayerXRef.current = 9;
        setBedroomPlayerX(9);

        playerRef.current.x = WORLD_WIDTH - 520;
        playerRef.current.y = FLOOR_Y - PLAYER_HEIGHT;
        playerRef.current.velocityX = 0;
        playerRef.current.velocityY = 0;
        playerRef.current.grounded = true;
        playerRef.current.facing = -1;

        cameraXRef.current = clamp(
          playerRef.current.x - gameViewWidthRef.current * 0.34,
          0,
          WORLD_WIDTH - gameViewWidthRef.current,
        );

        setCurrentBiome(BIOMES[BIOMES.length - 1]);
        setProgress(98);
        setGameStatus("playing");
        return;
      }

      if (bedroomPlayerXRef.current >= 74) {
        clearInput();
        setBedroomWalking(false);
        window.setTimeout(() => setGameStatus("finished"), 550);
        statusRef.current = "finished";
      }
    },
    [clearInput, isTouch, setGameStatus],
  );

  const renderGame = useCallback(
    (ctx: CanvasRenderingContext2D, time: number) => {
      ctx.imageSmoothingEnabled = false;
      const cameraX = cameraXRef.current;

      drawBackground(ctx, cameraX, time);
      drawPlatforms(ctx, cameraX);

      for (const checkpoint of CHECKPOINTS) {
        drawCheckpoint(ctx, checkpoint, cameraX, time);
      }

      for (const monster of monstersRef.current) {
        if (monster.alive) {
          drawMonster(ctx, monster, cameraX, time);
        }
      }

      drawPlayer(ctx, cameraX, time);
      drawHud(ctx);
      drawBiomeNotice(ctx, performance.now());
    },
    [checkpointLabel, currentBiome, lives, platforms, progress],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    let disposed = false;
    const shouldAnimate = status === "playing" || status === "bedroom";

    const stopLoop = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    const loop = (time: number) => {
      if (disposed || document.hidden) {
        frameRef.current = null;
        return;
      }

      const previous = lastTimeRef.current || time;
      const delta = Math.min(time - previous, 33);
      lastTimeRef.current = time;

      if (statusRef.current === "playing") {
        gameTimeRef.current += delta;
        updateGame(delta);
      } else if (statusRef.current === "bedroom") {
        updateBedroom(delta);
      }

      renderGame(context, gameTimeRef.current);
      frameRef.current = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (disposed || document.hidden || frameRef.current !== null) return;

      lastTimeRef.current = performance.now();
      frameRef.current = requestAnimationFrame(loop);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
        clearInput();
        setBedroomWalking(false);
        return;
      }

      if (shouldAnimate) {
        startLoop();
      } else {
        renderGame(context, gameTimeRef.current);
      }
    };

    // Menu / paused / finished states do not need a continuous canvas loop.
    // Draw one frame so the frozen scene stays visually identical.
    if (shouldAnimate) {
      startLoop();
    } else {
      renderGame(context, gameTimeRef.current);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      disposed = true;
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      stopLoop();
    };
  }, [clearInput, renderGame, status, updateBedroom, updateGame]);
  const setControl = (control: "left" | "right" | "jump", active: boolean) => {
    const currentStatus = statusRef.current;
    const canMove = currentStatus === "playing" || currentStatus === "bedroom";

    if (!canMove) return;
    if (currentStatus === "bedroom" && control === "jump") return;

    if (control === "left" && active) {
      inputRef.current.right = false;
    }

    if (control === "right" && active) {
      inputRef.current.left = false;
    }

    if (
      control === "jump" &&
      currentStatus === "playing" &&
      active &&
      !inputRef.current.jump
    ) {
      inputRef.current.jumpPressed = true;
    }

    inputRef.current[control] = active;
  };

  const pressControl = (
    event: ReactPointerEvent<HTMLButtonElement>,
    control: "left" | "right" | "jump",
  ) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    setControl(control, true);
  };

  const releaseControl = (
    event: ReactPointerEvent<HTMLButtonElement>,
    control: "left" | "right" | "jump",
  ) => {
    event.preventDefault();

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setControl(control, false);
  };

  return (
    <main
      className={`${pixelFont.variable} ${pixelFont.className} tiny-game-page ${
        isTouch ? "touch-device" : "pointer-device"
      } ${isTablet ? "tablet-device" : "phone-device"} ${
        isCompactLandscape ? "compact-landscape" : ""
      }`}
    >
      <section
        ref={wrapperRef}
        className={`game-shell ${isTouch ? "touch-game-shell" : ""}`}
      >
        <canvas
          ref={canvasRef}
          width={gameViewWidth}
          height={GAME_HEIGHT}
          className="game-canvas"
          aria-label="Tiny Buildify Jump"
        />

        <Link
          href="/playground"
          className="back-button"
          aria-label="Back to playground"
        >
          <span aria-hidden="true">←</span>
          <span>PLAYGROUND</span>
        </Link>

        {status === "playing" && (
          <>
            <button
              type="button"
              className="pause-button"
              onPointerDown={
                isTouch
                  ? (event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      togglePause();
                    }
                  : undefined
              }
              onClick={isTouch ? undefined : togglePause}
              aria-label="Pause game"
            >
              <span className="pause-icon" aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </>
        )}

        {status === "menu" && (
          <div className="title-screen">
            <div className="title-sun" />
            <div className="title-cloud cloud-a" />
            <div className="title-cloud cloud-b" />
            <div className="title-cloud cloud-c" />

            <div className="title-world-showcase" aria-hidden="true">
              <div className="world-slice slice-forest">
                <span className="slice-tree tree-one" />
                <span className="slice-tree tree-two" />
                <span className="slice-moon" />
              </div>
              <div className="world-slice slice-snow">
                <span className="slice-pine pine-one" />
                <span className="slice-pine pine-two" />
                <span className="slice-snowcap" />
              </div>
              <div className="world-slice slice-desert">
                <span className="slice-pyramid" />
                <span className="slice-cactus" />
              </div>
              <div className="world-slice slice-jungle">
                <span className="slice-vine vine-one" />
                <span className="slice-vine vine-two" />
                <span className="slice-leaf" />
              </div>
              <div className="world-slice slice-ocean">
                <span className="slice-fish fish-one" />
                <span className="slice-fish fish-two" />
                <span className="slice-coral" />
              </div>
              <div className="world-slice slice-volcano">
                <span className="slice-volcano" />
                <span className="slice-lava" />
              </div>
              <div className="world-slice slice-dino">
                <span className="slice-fern fern-one" />
                <span className="slice-fern fern-two" />
                <span className="slice-bird" />
              </div>
              <div className="world-slice slice-castle">
                <span className="slice-tower tower-one" />
                <span className="slice-tower tower-two" />
              </div>
              <div className="world-slice slice-village">
                <span className="slice-house" />
                <span className="slice-windmill" />
              </div>
            </div>

            <div className="title-hero" aria-hidden="true">
              <span className="hero-tail" />
              <span className="hero-body" />
              <span className="hero-head" />
              <span className="hero-ear hero-ear-left" />
              <span className="hero-ear hero-ear-right" />
              <span className="hero-mask" />
              <span className="hero-eye" />
              <span className="hero-scarf" />
              <span className="hero-leg hero-leg-left" />
              <span className="hero-leg hero-leg-right" />
            </div>

            <div className="game-logo">
              <span className="logo-tiny">TINY</span>
              <span className="logo-buildify">BUILDIFY</span>
              <span className="logo-jump">JUMP</span>
            </div>

            <p className="title-description">
              Cross nine handcrafted pixel worlds and find your way home.
            </p>

            <button
              type="button"
              className="main-play-button"
              onClick={isTouch ? requestMobileLandscape : startGame}
              aria-label="Start game"
            >
              <span>▶</span>
            </button>

            <div className="menu-controls">
              {isTouch ? (
                <>
                  <span>LEFT CONTROLS &nbsp; MOVE</span>
                  <span>RIGHT BUTTON &nbsp; JUMP</span>
                  <span>TOP RIGHT &nbsp; PAUSE</span>
                </>
              ) : (
                <>
                  <span>A / D or ← / → &nbsp; MOVE</span>
                  <span>W / ↑ / SPACE &nbsp; JUMP</span>
                  <span>P or ESC &nbsp; PAUSE</span>
                </>
              )}
            </div>
          </div>
        )}

        {status === "paused" && (
          <div className="pause-overlay">
            <div className="pause-sky-glow" />
            <div className="pause-card">
              <div className="pause-orb">
                <span className="play-triangle large" />
              </div>

              <p className="dialog-kicker">ADVENTURE PAUSED</p>
              <h2>TAKE A BREATH</h2>
              <p>Your checkpoint is safe. Resume whenever you are ready.</p>

              <div className="pause-progress">
                <div>
                  <span>WORLD</span>
                  <strong>{currentBiome.name}</strong>
                </div>
                <div>
                  <span>PROGRESS</span>
                  <strong>{progress}%</strong>
                </div>
                <div>
                  <span>CHECKPOINT</span>
                  <strong>{checkpointLabel}</strong>
                </div>
              </div>

              <div className="dialog-actions pause-actions-v2">
                <button
                  type="button"
                  className="pause-equal-action pause-action-resume"
                  onClick={togglePause}
                >
                  RESUME
                </button>

                <button
                  type="button"
                  className="pause-equal-action pause-action-restart"
                  onClick={startGame}
                >
                  RESTART
                </button>

                <button
                  type="button"
                  className="pause-equal-action pause-action-playground"
                  onClick={() => {
                    window.location.href = "/playground";
                  }}
                >
                  PLAYGROUND
                </button>
              </div>
            </div>

            <button
              type="button"
              className="secret-village-skip"
              onClick={skipToVillage}
              aria-label="Skip to village"
              tabIndex={-1}
            />
          </div>
        )}

        {status === "gameover" && (
          <div className="overlay">
            <div className="dialog-card danger-card">
              <p className="dialog-icon">☠</p>
              <p className="dialog-kicker">THE ROAD ENDS HERE</p>
              <h2>GAME OVER</h2>
              <p>Restart from the beginning and reach the next checkpoint.</p>

              <button
                type="button"
                className="primary-action"
                onClick={startGame}
              >
                TRY AGAIN
              </button>
            </div>
          </div>
        )}

        {status === "bedroom" && (
          <div className="bedroom-viewport">
            <div
              className="bedroom-scene bedroom-unified-stage"
              style={(() => {
                // One fixed 960x540 room for every device. Desktop mirrors the
                // game-shell sizing rules; touch uses the real browser viewport.
                // The room is scaled exactly once inside bedroom-viewport.
                const desktopGutter = viewportSize.height <= 760 ? 20 : 40;
                const availableWidth = isTouch
                  ? viewportSize.width
                  : Math.min(
                      Math.max(320, viewportSize.width - desktopGutter),
                      1280,
                    );
                const desktopAspectHeight =
                  availableWidth * (GAME_HEIGHT / GAME_WIDTH);
                const availableHeight = isTouch
                  ? viewportSize.height
                  : Math.min(
                      desktopAspectHeight,
                      Math.max(180, viewportSize.height - desktopGutter),
                    );
                const bedroomScale = Math.min(
                  availableWidth / GAME_WIDTH,
                  availableHeight / GAME_HEIGHT,
                );

                // Keep the bedroom artwork at its real 16:9 proportions on
                // every device. Phones use the same contain scale as desktop:
                // nothing is stretched and nothing is zoom-cropped. Any extra
                // width on ultra-wide phones is filled by the bedroom viewport
                // background instead of enlarging the 960x540 artwork.
                return {
                  width: `${GAME_WIDTH}px`,
                  height: `${GAME_HEIGHT}px`,
                  transform: `scale(${bedroomScale})`,
                  transformOrigin: "center center",
                };
              })()}
            >
              <div className="bedroom-wallpaper" />

              {/* Reference-inspired home interior: the furniture language comes
                from the supplied pixel-art room, while the palette stays in
                the game's original dusk / navy / teal / warm-wood family. */}
              <div className="home-reference-room" aria-hidden="true">
                <div className="ref-side-table">
                  <span className="ref-lamp-shade" />
                  <span className="ref-lamp-stem" />
                  <span className="ref-lamp-base" />
                </div>

                <div className="ref-sofa">
                  <span className="ref-sofa-back" />
                  <span className="ref-sofa-seat" />
                  <span className="ref-sofa-arm ref-sofa-arm-left" />
                  <span className="ref-sofa-arm ref-sofa-arm-right" />
                  <span className="ref-sofa-leg ref-sofa-leg-left" />
                  <span className="ref-sofa-leg ref-sofa-leg-right" />
                  <span className="ref-sofa-cushion ref-cushion-left" />
                  <span className="ref-sofa-cushion ref-cushion-right" />
                </div>

                <div className="ref-window">
                  <span className="ref-window-sky" />
                  <span className="ref-window-moon" />
                  <span className="ref-window-star ref-window-star-a" />
                  <span className="ref-window-star ref-window-star-b" />
                  <span className="ref-window-frame-v" />
                  <span className="ref-window-frame-h" />
                  <span className="ref-curtain ref-curtain-left" />
                  <span className="ref-curtain ref-curtain-right" />
                  <span className="ref-curtain-rod" />
                </div>

                <div className="ref-dresser">
                  <span className="ref-dresser-top" />
                  <span className="ref-drawer ref-drawer-one">
                    <i />
                  </span>
                  <span className="ref-drawer ref-drawer-two">
                    <i />
                  </span>
                </div>

                <div className="ref-floating-shelf ref-floating-shelf-top">
                  <span className="ref-book ref-book-a" />
                  <span className="ref-book ref-book-b" />
                  <span className="ref-book ref-book-c" />
                  <span className="ref-book ref-book-d" />
                  <span className="ref-small-plant">
                    <i />
                  </span>
                </div>

                <div className="ref-floating-shelf ref-floating-shelf-small">
                  <span className="ref-photo-frame">
                    <i />
                    <b />
                  </span>
                  <span className="ref-flower-pot">
                    <i />
                    <b />
                  </span>
                </div>

                <div className="ref-tv-console">
                  <div className="ref-tv">
                    <span className="ref-tv-screen" />
                    <span className="ref-tv-stand" />
                  </div>
                  <span className="ref-console-top" />
                  <span className="ref-console-door ref-console-door-left" />
                  <span className="ref-console-door ref-console-door-right" />
                  <span className="ref-console-drawer ref-console-drawer-one">
                    <i />
                  </span>
                  <span className="ref-console-drawer ref-console-drawer-two">
                    <i />
                  </span>
                </div>

                <div className="ref-left-gallery">
                  <span className="ref-art-frame ref-art-frame-a">
                    <i />
                  </span>
                  <span className="ref-art-frame ref-art-frame-b">
                    <i />
                  </span>
                  <span className="ref-art-frame ref-art-frame-c">
                    <i />
                  </span>
                </div>

                <div className="ref-floor-rug" />
              </div>

              <div
                ref={bedroomPlayerElementRef}
                className={`walking-home-player outdoor-sprite ${
                  bedroomWalking ? "is-walking" : "is-idle"
                } ${bedroomFacing === -1 ? "faces-left" : "faces-right"}`}
                style={{ left: `${bedroomPlayerX}%` }}
              >
                <span className="sprite-tail" />
                <span className="sprite-body" />
                <span className="sprite-head" />
                <span className="sprite-ear sprite-ear-one" />
                <span className="sprite-ear sprite-ear-two" />
                <span className="sprite-mask" />
                <span className="sprite-eye" />
                <span className="sprite-scarf-main" />
                <span className="sprite-scarf-tail" />
                <span className="sprite-leg sprite-leg-one" />
                <span className="sprite-leg sprite-leg-two" />
                <span className="sprite-highlight-one" />
                <span className="sprite-highlight-two" />
              </div>

              <div className="home-caption finish-sign">
                <span>READY TO CALL IT A DAY?</span>
                <small>Walk to the sofa if you want to finish the game.</small>
                <em>Walk left to return to the village.</em>
              </div>
            </div>
          </div>
        )}

        {status === "finished" && (
          <div className="finished-screen">
            <div className="confetti confetti-a" />
            <div className="confetti confetti-b" />
            <div className="confetti confetti-c" />
            <div className="confetti confetti-d" />

            <div className="finished-card">
              <p className="finished-stars">✦ ✦ ✦</p>
              <p className="dialog-kicker">THE JOURNEY IS COMPLETE</p>
              <h2>CONGRATULATIONS!</h2>

              <p>
                You crossed every world, survived every danger, and made it
                home.
              </p>

              <div className="finished-stats">
                <div>
                  <strong>100%</strong>
                  <span>Journey</span>
                </div>
                <div>
                  <strong>9</strong>
                  <span>Worlds</span>
                </div>
                <div>
                  <strong>HOME</strong>
                  <span>Destination</span>
                </div>
              </div>

              <div className="dialog-actions finished-action-row">
                <button
                  type="button"
                  className="finished-action-button finished-action-again"
                  onClick={startGame}
                  style={{
                    backgroundColor: "#8de4b6",
                    boxShadow: "0 6px 0 #3f9879",
                    color: "#18362f",
                  }}
                >
                  PLAY AGAIN
                </button>

                <button
                  type="button"
                  className="finished-action-button finished-action-playground"
                  onClick={() => {
                    window.location.href = "/playground";
                  }}
                  style={{
                    backgroundColor: "#70b7ff",
                    boxShadow: "0 6px 0 #397fc4",
                    color: "#102f55",
                  }}
                >
                  PLAYGROUND
                </button>
              </div>
            </div>
          </div>
        )}

        {(status === "playing" || status === "bedroom") && isTouch && (
          <div className="mobile-controls">
            <div className="movement-buttons">
              <button
                type="button"
                className="control-button direction-button"
                aria-label="Move left"
                onPointerDown={(event) => pressControl(event, "left")}
                onPointerUp={(event) => releaseControl(event, "left")}
                onPointerCancel={(event) => releaseControl(event, "left")}
                onLostPointerCapture={(event) => releaseControl(event, "left")}
                onContextMenu={(event) => event.preventDefault()}
              >
                <span aria-hidden="true">◀</span>
              </button>

              <button
                type="button"
                className="control-button direction-button"
                aria-label="Move right"
                onPointerDown={(event) => pressControl(event, "right")}
                onPointerUp={(event) => releaseControl(event, "right")}
                onPointerCancel={(event) => releaseControl(event, "right")}
                onLostPointerCapture={(event) => releaseControl(event, "right")}
                onContextMenu={(event) => event.preventDefault()}
              >
                <span aria-hidden="true">▶</span>
              </button>
            </div>

            {status === "playing" && (
              <button
                type="button"
                className="control-button jump-button"
                aria-label="Jump"
                onPointerDown={(event) => pressControl(event, "jump")}
                onPointerUp={(event) => releaseControl(event, "jump")}
                onPointerCancel={(event) => releaseControl(event, "jump")}
                onLostPointerCapture={(event) => releaseControl(event, "jump")}
                onContextMenu={(event) => event.preventDefault()}
              >
                <span className="jump-glyph" aria-hidden="true">
                  <i />
                  <i />
                </span>
              </button>
            )}
          </div>
        )}

        {isTouch && isPortrait && (
          <div className="rotate-overlay" role="dialog" aria-modal="true">
            <div className="phone-icon" aria-hidden="true">
              <span>↻</span>
            </div>
            <h2>ROTATE TO LANDSCAPE</h2>
            <p>
              Turn your {isTablet ? "tablet" : "phone"} sideways to play with
              the full controls.
            </p>
            <button
              type="button"
              className="landscape-retry-button"
              onClick={requestMobileLandscape}
            >
              TRY LANDSCAPE
            </button>
          </div>
        )}
      </section>

      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
        }

        :global(html),
        :global(body) {
          min-height: 100%;
          margin: 0;
          background: #08091b;
          overscroll-behavior: none;
        }

        :global(button),
        :global(a) {
          font: inherit;
          -webkit-tap-highlight-color: transparent;
        }

        .tiny-game-page {
          display: grid;
          width: 100%;
          min-height: 100svh;
          place-items: center;
          padding: 20px;
          overflow: hidden;
          color: #ffffff;
          background:
            radial-gradient(
              circle at center,
              rgba(68, 79, 151, 0.26),
              transparent 50%
            ),
            #08091b;
          font-family: var(--font-pixel), "Press Start 2P", monospace;
        }

        .game-shell {
          position: relative;
          width: min(100%, 1280px);
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border: 4px solid rgba(255, 255, 255, 0.16);
          border-radius: 24px;
          background: #11142f;
          box-shadow:
            0 35px 100px rgba(0, 0, 0, 0.58),
            0 0 55px rgba(101, 111, 202, 0.2);
          isolation: isolate;
          touch-action: none;
          user-select: none;
        }

        .game-shell::after {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
          content: "";
          background:
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.022) 0,
              rgba(255, 255, 255, 0.022) 1px,
              transparent 1px,
              transparent 4px
            ),
            radial-gradient(circle, transparent 50%, rgba(0, 0, 0, 0.23));
        }

        .game-canvas {
          display: block;
          width: 100%;
          height: 100%;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }

        .back-button,
        .pause-button {
          position: absolute;
          z-index: 30;
          top: 18px;
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.26);
          background: rgba(12, 14, 36, 0.8);
          box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
          text-decoration: none;
          backdrop-filter: blur(6px);
        }

        .back-button {
          left: 18px;
          gap: 8px;
          padding: 0 15px;
          border-radius: 9px;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .back-button span:first-child {
          font-size: 21px;
        }

        .pause-button {
          right: 18px;
          width: 54px;
          height: 54px;
          border-radius: 15px;
          background: linear-gradient(
            145deg,
            rgba(119, 228, 183, 0.96),
            rgba(93, 140, 222, 0.96)
          );
          box-shadow:
            0 7px 0 rgba(42, 67, 114, 0.85),
            0 12px 24px rgba(0, 0, 0, 0.28);
          cursor: pointer;
          transition:
            transform 150ms ease,
            filter 150ms ease;
        }

        .pause-button:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
        }

        .pause-button:active {
          box-shadow: 0 2px 0 rgba(42, 67, 114, 0.85);
          transform: translateY(5px);
        }

        .pause-button.is-paused {
          background: linear-gradient(
            145deg,
            rgba(255, 197, 98, 0.98),
            rgba(239, 111, 112, 0.98)
          );
          box-shadow:
            0 7px 0 rgba(131, 61, 68, 0.88),
            0 12px 24px rgba(0, 0, 0, 0.28);
        }

        .biome-badge {
          position: absolute;
          z-index: 29;
          top: 82px;
          right: 12px;
          width: 118px;
          padding: 7px 8px;
          color: #eef5ff;
          border: 2px solid rgba(255, 255, 255, 0.18);
          border-radius: 7px;
          background: rgba(12, 14, 36, 0.78);
          box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.25);
          font-size: 9px;
          line-height: 1.25;
          text-align: center;
          letter-spacing: 0.06em;
          pointer-events: none;
        }

        .pause-icon {
          display: flex;
          width: 22px;
          height: 24px;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }

        .pause-icon > span:not(.play-triangle) {
          width: 6px;
          height: 23px;
          border-radius: 2px;
          background: #ffffff;
          box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.18);
        }

        .play-triangle {
          display: block;
          width: 0;
          height: 0;
          margin-left: 4px;
          border-top: 11px solid transparent;
          border-bottom: 11px solid transparent;
          border-left: 17px solid #ffffff;
          filter: drop-shadow(2px 2px 0 rgba(0, 0, 0, 0.18));
        }

        .play-triangle.large {
          border-top-width: 20px;
          border-bottom-width: 20px;
          border-left-width: 31px;
        }

        .title-screen {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(
            180deg,
            #79d8de 0%,
            #c7f0e5 67%,
            #8fc743 67%,
            #8fc743 79%,
            #765239 79%,
            #4e3829 100%
          );
        }

        .title-screen::after {
          position: absolute;
          inset: 0;
          content: "";
          pointer-events: none;
          opacity: 0.18;
          background-image: repeating-linear-gradient(
            0deg,
            transparent 0,
            transparent 3px,
            rgba(255, 255, 255, 0.4) 3px,
            rgba(255, 255, 255, 0.4) 4px
          );
        }

        .title-sun {
          position: absolute;
          top: 85px;
          right: 17%;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(255, 239, 163, 0.85);
        }

        .title-cloud {
          position: absolute;
          width: 80px;
          height: 18px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.88);
        }

        .title-cloud::before,
        .title-cloud::after {
          position: absolute;
          bottom: 0;
          content: "";
          background: inherit;
        }

        .title-cloud::before {
          left: 14px;
          width: 27px;
          height: 28px;
          border-radius: 50% 50% 0 0;
        }

        .title-cloud::after {
          right: 11px;
          width: 35px;
          height: 22px;
          border-radius: 50% 50% 0 0;
        }

        .cloud-a {
          top: 18%;
          left: 12%;
        }

        .cloud-b {
          top: 11%;
          right: 25%;
          transform: scale(0.65);
        }

        .cloud-c {
          top: 28%;
          right: 10%;
          transform: scale(0.5);
        }

        .game-logo {
          position: relative;
          z-index: 4;
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-top: -28px;
          line-height: 0.8;
          filter: drop-shadow(8px 9px 0 rgba(52, 61, 48, 0.16));
          transform: rotate(-2deg);
        }

        .game-logo span {
          display: block;
          -webkit-text-stroke: 7px #ffffff;
          paint-order: stroke fill;
          font-weight: 900;
          letter-spacing: -0.09em;
          text-transform: uppercase;
        }

        .logo-tiny {
          color: #755039;
          font-size: clamp(55px, 9vw, 112px);
        }

        .logo-buildify {
          z-index: 2;
          margin-top: 8px;
          color: #ef5b14;
          font-size: clamp(58px, 10vw, 122px);
        }

        .logo-jump {
          margin-top: 11px;
          color: #397b58;
          font-size: clamp(38px, 6vw, 72px);
          letter-spacing: 0.02em !important;
          -webkit-text-stroke-width: 5px !important;
        }

        .title-description {
          position: relative;
          z-index: 4;
          max-width: 560px;
          margin: 27px auto 18px;
          padding: 0 20px;
          color: #3e5c50;
          font-family: var(--font-pixel), "Press Start 2P", monospace;
          font-weight: 700;
          line-height: 1.55;
          text-align: center;
        }

        .main-play-button {
          position: relative;
          z-index: 6;
          display: grid;
          width: 94px;
          height: 94px;
          place-items: center;
          color: #ffffff;
          border: 8px solid #ffffff;
          border-radius: 24px;
          background: #78523a;
          box-shadow:
            0 8px 0 #4d3527,
            0 15px 25px rgba(41, 48, 32, 0.25);
          font-size: 42px;
          cursor: pointer;
          transform: rotate(45deg);
          transition:
            transform 150ms ease,
            filter 150ms ease;
        }

        .main-play-button span {
          margin-left: 5px;
          transform: rotate(-45deg);
        }

        .main-play-button:hover {
          filter: brightness(1.12);
          transform: rotate(45deg) scale(1.06);
        }

        .main-play-button:active {
          box-shadow: 0 3px 0 #4d3527;
          transform: translateY(5px) rotate(45deg);
        }

        .menu-controls {
          position: absolute;
          z-index: 6;
          right: 0;
          bottom: 7.5%;
          left: 0;
          display: flex;
          justify-content: center;
          gap: 34px;
          color: #fff7df;
          font-size: 12px;
          font-weight: 900;
          text-shadow: 2px 2px 0 rgba(40, 45, 30, 0.38);
        }

        .title-landscape {
          position: absolute;
          inset: auto 0 19% 0;
          height: 210px;
        }

        .mountain {
          position: absolute;
          bottom: 0;
          width: 280px;
          height: 180px;
          opacity: 0.26;
          background: #6c8e78;
          clip-path: polygon(0 100%, 50% 0, 100% 100%);
        }

        .mountain-a {
          right: 23%;
        }

        .mountain-b {
          right: 5%;
          height: 240px;
        }

        .pixel-tree {
          position: absolute;
          bottom: -10px;
          width: 55px;
          height: 105px;
          background: #547c28;
          box-shadow: inset -12px 0 rgba(38, 81, 36, 0.2);
        }

        .pixel-tree::before {
          position: absolute;
          top: -53px;
          left: -24px;
          width: 102px;
          height: 76px;
          content: "";
          background: #7aad27;
          box-shadow: inset -15px -12px rgba(61, 116, 34, 0.16);
        }

        .pixel-tree::after {
          position: absolute;
          right: 20px;
          bottom: -15px;
          width: 15px;
          height: 65px;
          content: "";
          background: #604b2f;
        }

        .title-tree-a {
          left: 8%;
        }

        .title-tree-b {
          left: 20%;
          transform: scale(0.75);
        }

        .title-tree-c {
          right: 15%;
          transform: scale(0.88);
        }

        .title-castle {
          position: absolute;
          right: 3%;
          bottom: -15px;
          width: 280px;
          height: 130px;
          opacity: 0.25;
          background: #9b755f;
        }

        .title-castle span {
          position: absolute;
          bottom: 0;
          width: 50px;
          background: #9b755f;
        }

        .title-castle span:nth-child(1) {
          left: 20px;
          height: 210px;
        }

        .title-castle span:nth-child(2) {
          left: 118px;
          height: 260px;
        }

        .title-castle span:nth-child(3) {
          right: 25px;
          height: 180px;
        }

        .overlay,
        .pause-overlay,
        .finished-screen {
          position: absolute;
          inset: 0;
          z-index: 20;
          display: grid;
          place-items: center;
          padding: 25px;
          background: rgba(8, 9, 28, 0.74);
          backdrop-filter: blur(7px);
        }

        .pause-overlay {
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 30%,
              rgba(84, 216, 186, 0.28),
              transparent 38%
            ),
            linear-gradient(
              160deg,
              rgba(12, 15, 45, 0.96),
              rgba(44, 28, 74, 0.94)
            );
        }

        .pause-overlay::before,
        .pause-overlay::after {
          position: absolute;
          content: "";
          border: 2px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
        }

        .pause-overlay::before {
          width: 520px;
          height: 520px;
          top: -280px;
          left: -180px;
        }

        .pause-overlay::after {
          width: 420px;
          height: 420px;
          right: -170px;
          bottom: -240px;
        }

        .pause-sky-glow {
          position: absolute;
          top: 10%;
          left: 50%;
          width: 280px;
          height: 160px;
          border-radius: 50%;
          background: rgba(121, 234, 197, 0.15);
          filter: blur(35px);
          transform: translateX(-50%);
        }

        .pause-card,
        .dialog-card,
        .finished-card {
          position: relative;
          z-index: 2;
          width: min(560px, 92%);
          padding: 40px;
          text-align: center;
          border: 3px solid rgba(255, 255, 255, 0.16);
          border-radius: 16px;
          background: linear-gradient(
            180deg,
            rgba(42, 44, 89, 0.98),
            rgba(19, 21, 51, 0.98)
          );
          box-shadow:
            10px 10px 0 rgba(0, 0, 0, 0.3),
            inset 0 0 0 4px rgba(0, 0, 0, 0.13);
        }

        .pause-card {
          padding-top: 58px;
          background: linear-gradient(
            180deg,
            rgba(47, 50, 102, 0.98),
            rgba(20, 23, 58, 0.98)
          );
        }

        .pause-orb {
          position: absolute;
          top: -43px;
          left: 50%;
          display: grid;
          width: 88px;
          height: 88px;
          place-items: center;
          border: 6px solid #ffffff;
          border-radius: 28px;
          background: linear-gradient(145deg, #7be6b8, #638ddd);
          box-shadow:
            0 8px 0 #385a9a,
            0 16px 28px rgba(0, 0, 0, 0.35);
          transform: translateX(-50%) rotate(45deg);
        }

        .pause-orb .play-triangle {
          transform: rotate(-45deg);
        }

        .pause-progress {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 27px;
        }

        .pause-progress div {
          padding: 14px 8px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.05);
        }

        .pause-progress span,
        .pause-progress strong {
          display: block;
        }

        .pause-progress span {
          color: #9299c1;
          font-size: 9px;
          letter-spacing: 0.13em;
        }

        .pause-progress strong {
          margin-top: 6px;
          color: #ffffff;
          font-size: 12px;
        }

        .danger-card {
          background: linear-gradient(
            180deg,
            rgba(85, 39, 69, 0.98),
            rgba(35, 19, 43, 0.98)
          );
        }

        .dialog-kicker {
          margin: 0 0 10px;
          color: #aeb4da;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.18em;
        }

        .pause-card h2,
        .dialog-card h2,
        .finished-card h2,
        .sleep-panel h2,
        .rotate-overlay h2 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(33px, 6vw, 58px);
          line-height: 1;
          letter-spacing: -0.06em;
          text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.25);
        }

        .pause-card > p:not(.dialog-kicker),
        .dialog-card > p:not(.dialog-kicker, .dialog-icon),
        .finished-card > p:not(.dialog-kicker, .finished-stars) {
          max-width: 430px;
          margin: 20px auto 0;
          color: #c5c8de;
          font-family: var(--font-pixel), "Press Start 2P", monospace;
          line-height: 1.65;
        }

        .dialog-icon {
          margin: 0 0 15px;
          color: #ec8294;
          font-size: 48px;
        }

        .dialog-actions {
          display: flex;
          justify-content: center;
          gap: 13px;
          margin-top: 30px;
        }

        .primary-action,
        .secondary-action,
        .sleep-button {
          display: inline-flex;
          min-height: 51px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 23px;
          border-radius: 8px;
          font-weight: 900;
          text-decoration: none;
          cursor: pointer;
        }

        .primary-action,
        .sleep-button {
          color: #18362f;
          border: 0;
          background: #8de4b6;
          box-shadow: 0 6px 0 #3f9879;
        }

        .secondary-action {
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        .mini-play {
          width: 0;
          height: 0;
          border-top: 7px solid transparent;
          border-bottom: 7px solid transparent;
          border-left: 11px solid #18362f;
        }

        .bedroom-scene {
          position: absolute;
          inset: 0;
          z-index: 15;
          overflow: hidden;
          background: linear-gradient(
            180deg,
            #323858 0,
            #424868 66%,
            #76513a 66%,
            #4a342a 100%
          );
        }

        .bedroom-scene::after {
          position: absolute;
          inset: 0;
          z-index: 20;
          content: "";
          pointer-events: none;
          box-shadow:
            inset 0 0 130px rgba(0, 0, 0, 0.5),
            inset 0 -80px 90px rgba(0, 0, 0, 0.2);
        }

        .bedroom-wallpaper {
          position: absolute;
          inset: 0 0 34% 0;
          opacity: 0.14;
          background:
            repeating-linear-gradient(
              90deg,
              transparent 0,
              transparent 68px,
              rgba(255, 255, 255, 0.18) 68px,
              rgba(255, 255, 255, 0.18) 72px
            ),
            repeating-linear-gradient(
              0deg,
              transparent 0,
              transparent 46px,
              rgba(255, 255, 255, 0.1) 46px,
              rgba(255, 255, 255, 0.1) 50px
            );
        }

        .bedroom-window {
          position: absolute;
          top: 72px;
          right: 95px;
          width: 190px;
          height: 150px;
          border: 12px solid #81593e;
          background: linear-gradient(180deg, #111638, #202551);
          box-shadow:
            9px 9px 0 rgba(0, 0, 0, 0.24),
            0 0 36px rgba(255, 235, 160, 0.08);
        }

        .bedroom-window::before,
        .bedroom-window::after {
          position: absolute;
          z-index: 2;
          content: "";
          background: #81593e;
        }

        .bedroom-window::before {
          top: 61px;
          left: 0;
          width: 100%;
          height: 9px;
        }

        .bedroom-window::after {
          top: 0;
          left: 80px;
          width: 9px;
          height: 100%;
        }

        .bedroom-moon {
          position: absolute;
          top: 20px;
          right: 22px;
          width: 43px;
          height: 43px;
          border-radius: 50%;
          background: #fff1a7;
          box-shadow: 0 0 24px rgba(255, 239, 158, 0.35);
        }

        .window-curtain {
          position: absolute;
          z-index: 4;
          top: -18px;
          width: 38px;
          height: 178px;
          background: repeating-linear-gradient(
            90deg,
            #6b4a72 0,
            #6b4a72 12px,
            #5b3c65 12px,
            #5b3c65 24px
          );
        }

        .curtain-left {
          left: -42px;
        }

        .curtain-right {
          right: -42px;
        }

        .star {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #ffffff;
        }

        .star-a {
          top: 24px;
          left: 25px;
        }
        .star-b {
          top: 89px;
          left: 45px;
        }
        .star-c {
          top: 72px;
          right: 38px;
        }

        .picture-frame {
          position: absolute;
          top: 88px;
          left: 105px;
          display: grid;
          width: 140px;
          height: 92px;
          place-items: center;
          color: #5f4635;
          border: 9px solid #74523e;
          background: linear-gradient(145deg, #f0d08c, #d6a968);
          box-shadow: 7px 7px 0 rgba(0, 0, 0, 0.2);
          font-weight: 700;
        }

        .bookshelf {
          position: absolute;
          top: 220px;
          left: 92px;
          display: flex;
          width: 150px;
          height: 118px;
          align-items: flex-end;
          gap: 7px;
          padding: 0 14px 17px;
          border: 12px solid #6e4832;
          background: #4b342b;
          box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
        }

        .bookshelf::after {
          position: absolute;
          right: 0;
          bottom: 48px;
          left: 0;
          height: 9px;
          content: "";
          background: #765039;
        }

        .bookshelf span {
          width: 15px;
          height: 54px;
          background: #ca6b62;
          box-shadow:
            20px 0 #6b8dc2,
            40px 0 #d6ad5b,
            60px 0 #7eb779,
            80px 0 #9a70ad;
        }

        .nightstand {
          position: absolute;
          right: 330px;
          bottom: 93px;
          width: 78px;
          height: 80px;
          background: #704b34;
          box-shadow:
            7px 7px 0 rgba(0, 0, 0, 0.2),
            inset 0 34px #81583d;
        }

        .nightstand::after {
          position: absolute;
          top: 48px;
          left: 34px;
          width: 7px;
          height: 7px;
          content: "";
          background: #eac765;
        }

        .lamp-shade {
          position: absolute;
          top: -58px;
          left: 8px;
          width: 62px;
          height: 42px;
          background: #efc466;
          clip-path: polygon(18% 0, 82% 0, 100% 100%, 0 100%);
          filter: drop-shadow(0 0 18px rgba(255, 215, 112, 0.25));
        }

        .lamp-stand {
          position: absolute;
          top: -18px;
          left: 35px;
          width: 8px;
          height: 24px;
          background: #8b6648;
        }

        .bedroom-scene::before {
          position: absolute;
          right: 31%;
          bottom: 105px;
          width: 120px;
          height: 72px;
          content: "";
          border: 8px solid #6f4934;
          background: #9b6a48;
          box-shadow:
            0 -70px 0 -24px #d7b16a,
            -215px -12px 0 -28px #73503b,
            -215px -58px 0 -18px #d7a85e;
        }

        .rug {
          position: absolute;
          right: 80px;
          bottom: 34px;
          width: 340px;
          height: 74px;
          border: 8px solid #5f3d50;
          border-radius: 50%;
          background: repeating-linear-gradient(
            90deg,
            #876078 0,
            #876078 30px,
            #75506a 30px,
            #75506a 60px
          );
          opacity: 0.8;
        }

        .pixel-bed {
          position: absolute;
          right: 32px;
          bottom: 65px;
          width: 390px;
          height: 170px;
        }

        .bed-headboard {
          position: absolute;
          left: -20px;
          bottom: 15px;
          width: 40px;
          height: 145px;
          background: #6d4932;
          box-shadow: 430px 0 #6d4932;
        }

        .bed-pillow {
          position: absolute;
          top: 31px;
          left: 28px;
          width: 110px;
          height: 50px;
          border: 6px solid #b6b8c8;
          background: #f1f2f6;
        }

        .bed-blanket {
          position: absolute;
          top: 58px;
          left: 112px;
          width: 290px;
          height: 88px;
          border-top: 7px solid #7896ba;
          background: repeating-linear-gradient(
            90deg,
            #6380a7 0,
            #6380a7 40px,
            #526e93 40px,
            #526e93 80px
          );
        }

        .bed-frame {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 35px;
          background: #6c4933;
          box-shadow:
            18px 25px 0 -9px #4d3427,
            403px 25px 0 -9px #4d3427;
        }

        .walking-home-player {
          position: absolute;
          z-index: 8;
          bottom: 102px;
          width: 50px;
          height: 75px;
          transition: left 70ms linear;
          animation: player-bob 0.36s steps(2) infinite alternate;
        }

        .walk-body {
          position: absolute;
          right: 8px;
          bottom: 9px;
          width: 34px;
          height: 38px;
          background: #666d82;
        }

        .walk-face {
          position: absolute;
          top: 8px;
          left: 8px;
          width: 35px;
          height: 32px;
          background: linear-gradient(
            180deg,
            #858ca0 0,
            #858ca0 42%,
            #292b3c 42%,
            #292b3c 75%,
            #858ca0 75%
          );
        }

        .walk-ear {
          position: absolute;
          top: 0;
          width: 11px;
          height: 18px;
          background: #858ca0;
        }

        .left-ear {
          left: 8px;
        }
        .right-ear {
          right: 7px;
        }

        .walk-scarf {
          position: absolute;
          top: 38px;
          left: 4px;
          width: 43px;
          height: 7px;
          background: #d95a64;
        }

        .walk-leg {
          position: absolute;
          bottom: 0;
          width: 9px;
          height: 14px;
          background: #292b3c;
          animation: leg-step 0.36s steps(2) infinite alternate;
        }

        .leg-left {
          left: 10px;
        }
        .leg-right {
          right: 10px;
          animation-delay: -0.18s;
        }

        .sleeping-puff {
          position: absolute;
          z-index: 9;
          bottom: 225px;
          left: 42%;
          color: #dce7ff;
          font-size: 25px;
          opacity: 0;
          animation: sleep-z 1.2s steps(3) infinite;
        }

        .home-caption {
          position: absolute;
          right: 70px;
          bottom: 38px;
          display: grid;
          gap: 5px;
          padding: 14px 18px;
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.15);
          background: rgba(18, 20, 48, 0.82);
          box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.24);
          text-align: center;
        }

        .home-caption span {
          font-size: 13px;
        }

        .home-caption small {
          color: #a9aec7;
          font-size: 9px;
        }

        @keyframes walk-to-bed {
          0% {
            left: 74%;
            transform: scaleX(-1);
            opacity: 1;
          }
          78% {
            left: 47%;
            transform: scaleX(-1);
            opacity: 1;
          }
          92% {
            left: 39%;
            transform: scaleX(-1) translateY(-30px);
            opacity: 1;
          }
          100% {
            left: 34%;
            transform: scaleX(-1) translateY(-38px);
            opacity: 0;
          }
        }

        @keyframes player-bob {
          from {
            margin-bottom: 0;
          }
          to {
            margin-bottom: 3px;
          }
        }

        @keyframes leg-step {
          from {
            height: 14px;
          }
          to {
            height: 8px;
          }
        }

        @keyframes sleep-z {
          0% {
            opacity: 0;
            transform: translate(0, 8px) scale(0.8);
          }
          35% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(40px, -50px) scale(1.3);
          }
        }

        .finished-screen {
          background: radial-gradient(
            circle at center,
            rgba(88, 76, 172, 0.5),
            rgba(8, 9, 28, 0.96)
          );
        }

        .finished-card {
          width: min(620px, 94%);
        }

        .finished-stars {
          margin: 0 0 15px;
          color: #f5d76f;
          font-size: 35px;
          letter-spacing: 0.25em;
        }

        .finished-card h2 {
          color: #96ebbd;
        }

        .finished-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 28px;
        }

        .finished-stats div {
          padding: 15px 8px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          background: rgba(255, 255, 255, 0.05);
        }

        .finished-stats strong,
        .finished-stats span {
          display: block;
        }

        .finished-stats strong {
          color: #ffffff;
          font-size: 19px;
        }

        .finished-stats span {
          margin-top: 5px;
          color: #969bbb;
          font-size: 10px;
          text-transform: uppercase;
        }

        .confetti {
          position: absolute;
          width: 15px;
          height: 15px;
          background: #f7cd5d;
          box-shadow:
            80px 60px #7be0b2,
            160px -20px #ed6b79,
            245px 75px #78b9ed,
            -70px 120px #e78ed4,
            -170px 20px #f7cd5d;
          animation: celebrate 2.4s ease-in-out infinite alternate;
        }

        .confetti-a {
          top: 15%;
          left: 20%;
        }

        .confetti-b {
          top: 30%;
          right: 22%;
          transform: rotate(45deg);
          animation-delay: -0.8s;
        }

        .confetti-c {
          bottom: 20%;
          left: 17%;
          animation-delay: -1.3s;
        }

        .confetti-d {
          right: 15%;
          bottom: 16%;
          transform: rotate(30deg);
          animation-delay: -1.8s;
        }

        @keyframes celebrate {
          from {
            opacity: 0.5;
            transform: translateY(-10px) rotate(0);
          }
          to {
            opacity: 1;
            transform: translateY(15px) rotate(90deg);
          }
        }

        .mobile-controls {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 12;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 20px max(24px, env(safe-area-inset-right))
            max(20px, env(safe-area-inset-bottom))
            max(24px, env(safe-area-inset-left));
          pointer-events: none;
        }

        .movement-buttons {
          display: flex;
          gap: 13px;
        }

        .control-button {
          display: grid;
          place-items: center;
          color: #ffffff;
          border: 3px solid rgba(255, 255, 255, 0.37);
          background: rgba(15, 17, 43, 0.72);
          box-shadow:
            0 7px 0 rgba(0, 0, 0, 0.38),
            inset 0 0 20px rgba(255, 255, 255, 0.07);
          font-weight: 900;
          pointer-events: auto;
          touch-action: none;
        }

        .control-button:active {
          background: rgba(93, 204, 164, 0.82);
          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.4);
          transform: translateY(5px);
        }

        .direction-button {
          width: clamp(62px, 10vw, 86px);
          height: clamp(62px, 10vw, 86px);
          border-radius: 12px;
          font-size: clamp(22px, 4vw, 34px);
        }

        .jump-button {
          width: clamp(80px, 12vw, 108px);
          height: clamp(80px, 12vw, 108px);
          border-radius: 50%;
        }

        .jump-button span {
          font-size: clamp(28px, 5vw, 42px);
          line-height: 0.75;
        }

        .jump-button small {
          margin-top: 5px;
          font-size: 10px;
          letter-spacing: 0.13em;
        }

        .rotate-overlay {
          position: absolute;
          inset: 0;
          z-index: 100;
          display: grid;
          place-content: center;
          padding: 30px;
          text-align: center;
          background: radial-gradient(circle, #343968, #0a0b25 72%);
        }

        .phone-icon {
          display: grid;
          width: 110px;
          height: 68px;
          place-items: center;
          margin: 0 auto 25px;
          color: #92ebbd;
          border: 5px solid #92ebbd;
          border-radius: 14px;
          font-size: 36px;
          animation: phoneRotate 1.5s ease-in-out infinite;
        }

        .rotate-overlay h2 {
          font-size: clamp(26px, 8vw, 43px);
          letter-spacing: -0.04em;
        }

        .rotate-overlay p {
          color: #c0c4dc;
          font-family: var(--font-pixel), "Press Start 2P", monospace;
        }

        @keyframes phoneRotate {
          0%,
          25% {
            transform: rotate(90deg);
          }
          70%,
          100% {
            transform: rotate(0);
          }
        }

        @media (max-width: 760px) {
          .tiny-game-page {
            padding: 0;
          }

          .game-shell {
            width: 100vw;
            height: 100svh;
            aspect-ratio: auto;
            border: 0;
            border-radius: 0;
          }

          .game-canvas {
            object-fit: cover;
          }

          .back-button {
            top: max(10px, env(safe-area-inset-top));
            left: max(10px, env(safe-area-inset-left));
          }

          .back-button span:last-child {
            display: none;
          }

          .pause-button {
            top: max(10px, env(safe-area-inset-top));
            right: max(10px, env(safe-area-inset-right));
          }

          .biome-badge {
            top: 72px;
            right: max(8px, env(safe-area-inset-right));
          }

          .game-logo {
            margin-top: -10px;
          }

          .title-description {
            margin: 17px auto 13px;
            font-size: 13px;
          }

          .main-play-button {
            width: 75px;
            height: 75px;
            border-width: 6px;
            font-size: 32px;
          }

          .menu-controls {
            gap: 12px;
            bottom: 5%;
            padding: 0 12px;
            font-size: 9px;
          }

          .pause-progress {
            grid-template-columns: 1fr;
          }

          .dialog-actions {
            flex-direction: column;
          }

          .finished-stats {
            grid-template-columns: 1fr;
          }
        }

        @media (max-height: 520px) and (orientation: landscape) {
          .game-logo {
            margin-top: -30px;
          }

          .logo-tiny {
            font-size: 48px;
          }

          .logo-buildify {
            font-size: 56px;
          }

          .logo-jump {
            font-size: 32px;
          }

          .title-description {
            max-width: 490px;
            margin: 10px auto 9px;
            font-size: 11px;
          }

          .main-play-button {
            width: 60px;
            height: 60px;
            border-width: 5px;
            border-radius: 16px;
            font-size: 25px;
          }

          .menu-controls {
            bottom: 4%;
            font-size: 9px;
          }

          .pause-card,
          .dialog-card,
          .finished-card {
            width: min(610px, 84vw);
            max-height: 90vh;
            padding: 20px 26px;
            overflow-y: auto;
          }

          .pause-card {
            padding-top: 44px;
          }

          .pause-orb {
            width: 70px;
            height: 70px;
            top: -35px;
          }

          .pause-card h2,
          .dialog-card h2,
          .finished-card h2 {
            font-size: 34px;
          }

          .pause-card > p:not(.dialog-kicker),
          .dialog-card > p:not(.dialog-kicker, .dialog-icon),
          .finished-card > p:not(.dialog-kicker, .finished-stars) {
            margin-top: 10px;
            font-size: 12px;
          }

          .pause-progress {
            margin-top: 14px;
          }

          .dialog-actions {
            margin-top: 17px;
          }

          .bedroom-window {
            top: 40px;
            right: 90px;
            transform: scale(0.8);
          }

          .pixel-bed {
            bottom: 35px;
            left: 90px;
            transform: scale(0.8);
            transform-origin: left bottom;
          }

          .bedroom-player {
            bottom: 77px;
            left: 470px;
          }

          .sleep-panel {
            right: 45px;
            bottom: 30px;
            width: 270px;
            padding: 17px;
          }

          .sleep-panel h2 {
            font-size: 25px;
          }
        }

        /* V5 targeted refinements: title showcase, bedroom, and action buttons. */
        .playground-action {
          display: inline-flex;
          min-height: 51px;
          align-items: center;
          justify-content: center;
          gap: 11px;
          padding: 0 22px;
          color: #f7fbff;
          border: 2px solid rgba(154, 225, 255, 0.48);
          border-radius: 8px;
          background: linear-gradient(
            145deg,
            rgba(76, 102, 177, 0.92),
            rgba(92, 62, 145, 0.92)
          );
          box-shadow:
            0 6px 0 #333764,
            0 12px 22px rgba(0, 0, 0, 0.25),
            inset 0 1px rgba(255, 255, 255, 0.22);
          font-weight: 700;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition:
            transform 140ms ease,
            filter 140ms ease,
            box-shadow 140ms ease;
        }

        .playground-action:hover {
          filter: brightness(1.12);
          transform: translateY(-2px);
        }

        .playground-action:active {
          box-shadow: 0 2px 0 #333764;
          transform: translateY(4px);
        }

        .playground-grid {
          display: grid;
          width: 18px;
          height: 18px;
          grid-template-columns: repeat(2, 1fr);
          gap: 3px;
        }

        .playground-grid i {
          display: block;
          border-radius: 2px;
          background: #a8f0d0;
          box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.18);
        }

        .title-world-showcase {
          position: absolute;
          right: 4%;
          bottom: 18.4%;
          left: 4%;
          z-index: 2;
          display: grid;
          height: 118px;
          grid-template-columns: repeat(9, 1fr);
          overflow: hidden;
          border: 4px solid rgba(255, 255, 255, 0.58);
          border-bottom: 0;
          border-radius: 18px 18px 0 0;
          box-shadow:
            0 -7px 0 rgba(79, 118, 89, 0.16),
            inset 0 0 0 3px rgba(255, 255, 255, 0.13);
        }

        .world-slice {
          position: relative;
          overflow: hidden;
          border-right: 2px solid rgba(255, 255, 255, 0.26);
        }

        .world-slice:last-child {
          border-right: 0;
        }

        .slice-forest {
          background: linear-gradient(#24284d 0 65%, #3e4e43 65%);
        }
        .slice-snow {
          background: linear-gradient(#88add0 0 65%, #eefaff 65%);
        }
        .slice-desert {
          background: linear-gradient(#67c5e7 0 65%, #e9bd58 65%);
        }
        .slice-jungle {
          background: linear-gradient(#266e55 0 65%, #4a9c4c 65%);
        }
        .slice-ocean {
          background: linear-gradient(#176c9c, #21b7bd);
        }
        .slice-volcano {
          background: linear-gradient(#5b2031 0 63%, #3b2930 63%);
        }
        .slice-dino {
          background: linear-gradient(#7eb2aa 0 65%, #6f974d 65%);
        }
        .slice-castle {
          background: linear-gradient(#353551 0 65%, #555467 65%);
        }
        .slice-village {
          background: linear-gradient(#80d7df 0 65%, #8ec64d 65%);
        }

        .slice-tree {
          position: absolute;
          bottom: 0;
          width: 9px;
          height: 55px;
          background: #493a39;
        }

        .slice-tree::before {
          position: absolute;
          top: -24px;
          left: -15px;
          width: 38px;
          height: 33px;
          content: "";
          background: #253a43;
        }

        .tree-one {
          left: 28%;
        }
        .tree-two {
          right: 17%;
          transform: scale(0.78);
        }

        .slice-moon {
          position: absolute;
          top: 13px;
          right: 14px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff2a9;
        }

        .slice-pine {
          position: absolute;
          bottom: 0;
          width: 8px;
          height: 46px;
          background: #645044;
        }

        .slice-pine::before,
        .slice-pine::after {
          position: absolute;
          left: -15px;
          width: 38px;
          height: 30px;
          content: "";
          background: #3e6d67;
          clip-path: polygon(50% 0, 100% 100%, 0 100%);
        }

        .slice-pine::before {
          top: -25px;
        }
        .slice-pine::after {
          top: -10px;
        }
        .pine-one {
          left: 24%;
        }
        .pine-two {
          right: 18%;
          transform: scale(0.78);
        }

        .slice-snowcap {
          position: absolute;
          right: -12px;
          bottom: 0;
          width: 82px;
          height: 58px;
          background: #91a9bd;
          clip-path: polygon(0 100%, 50% 0, 100% 100%);
        }

        .slice-pyramid {
          position: absolute;
          right: 6px;
          bottom: 0;
          width: 80px;
          height: 68px;
          background: #c88a3e;
          clip-path: polygon(50% 0, 100% 100%, 0 100%);
        }

        .slice-cactus {
          position: absolute;
          bottom: 0;
          left: 15px;
          width: 9px;
          height: 50px;
          background: #3e8047;
        }

        .slice-cactus::before,
        .slice-cactus::after {
          position: absolute;
          width: 17px;
          height: 7px;
          content: "";
          background: #3e8047;
        }

        .slice-cactus::before {
          top: 16px;
          left: -12px;
        }
        .slice-cactus::after {
          top: 27px;
          left: 5px;
        }

        .slice-vine {
          position: absolute;
          top: -4px;
          width: 7px;
          height: 86px;
          border-radius: 0 0 12px 12px;
          background: #3d8f4c;
          transform-origin: top;
        }

        .vine-one {
          left: 25%;
          transform: rotate(7deg);
        }
        .vine-two {
          right: 22%;
          transform: rotate(-9deg);
        }

        .slice-leaf {
          position: absolute;
          right: -18px;
          bottom: 2px;
          width: 75px;
          height: 52px;
          border-radius: 55% 0;
          background: #3b8544;
          transform: rotate(-12deg);
        }

        .slice-fish {
          position: absolute;
          width: 20px;
          height: 10px;
          background: #ffd15c;
        }

        .slice-fish::before {
          position: absolute;
          left: -8px;
          width: 9px;
          height: 10px;
          content: "";
          background: inherit;
          clip-path: polygon(0 0, 100% 50%, 0 100%);
        }

        .fish-one {
          top: 25px;
          left: 35%;
        }
        .fish-two {
          top: 58px;
          right: 15%;
          background: #ef7278;
          transform: scale(0.75);
        }

        .slice-coral {
          position: absolute;
          bottom: 0;
          left: 22px;
          width: 8px;
          height: 36px;
          background: #e27587;
          box-shadow:
            12px 8px #d9a459,
            24px -2px #8b68c6;
        }

        .slice-volcano {
          position: absolute;
          right: 2px;
          bottom: 0;
          width: 88px;
          height: 78px;
          background: #463039;
          clip-path: polygon(0 100%, 55% 0, 100% 100%);
        }

        .slice-lava {
          position: absolute;
          right: 35px;
          bottom: 19px;
          width: 10px;
          height: 48px;
          background: #ff6a2d;
          transform: rotate(12deg);
        }

        .slice-fern {
          position: absolute;
          bottom: 0;
          width: 7px;
          height: 52px;
          background: #4c6a3c;
        }

        .slice-fern::before {
          position: absolute;
          top: 4px;
          left: -17px;
          width: 42px;
          height: 32px;
          content: "";
          border-radius: 50%;
          background: #477f43;
        }

        .fern-one {
          left: 24%;
        }
        .fern-two {
          right: 18%;
          transform: scale(0.78);
        }

        .slice-bird {
          position: absolute;
          top: 24px;
          right: 37%;
          width: 24px;
          height: 10px;
          border-top: 4px solid #456055;
          border-radius: 50%;
        }

        .slice-tower {
          position: absolute;
          bottom: 0;
          width: 36px;
          background: #4d4d61;
        }

        .slice-tower::before {
          position: absolute;
          top: -12px;
          left: 0;
          width: 36px;
          height: 14px;
          content: "";
          background: #59596d;
          clip-path: polygon(
            0 100%,
            0 0,
            22% 0,
            22% 40%,
            44% 40%,
            44% 0,
            66% 0,
            66% 40%,
            88% 40%,
            88% 0,
            100% 0,
            100% 100%
          );
        }

        .tower-one {
          left: 16%;
          height: 62px;
        }
        .tower-two {
          right: 13%;
          height: 82px;
        }

        .slice-house {
          position: absolute;
          right: 10px;
          bottom: 0;
          width: 62px;
          height: 50px;
          background: #efb876;
        }

        .slice-house::before {
          position: absolute;
          top: -28px;
          left: -7px;
          width: 76px;
          height: 32px;
          content: "";
          background: #9c5040;
          clip-path: polygon(50% 0, 100% 100%, 0 100%);
        }

        .slice-windmill {
          position: absolute;
          bottom: 0;
          left: 18px;
          width: 8px;
          height: 48px;
          background: #ddc187;
        }

        .slice-windmill::before,
        .slice-windmill::after {
          position: absolute;
          top: 2px;
          left: -17px;
          width: 42px;
          height: 6px;
          content: "";
          background: #8c6548;
        }

        .slice-windmill::after {
          transform: rotate(90deg);
        }

        .title-hero {
          position: absolute;
          z-index: 5;
          bottom: 18%;
          left: 50%;
          width: 62px;
          height: 86px;
          transform: translateX(-50%) scale(1.3);
          filter: drop-shadow(6px 7px 0 rgba(55, 67, 54, 0.18));
          animation: title-hero-bob 1.15s steps(2) infinite alternate;
        }

        .hero-body {
          position: absolute;
          left: 13px;
          bottom: 14px;
          width: 39px;
          height: 40px;
          background: #666d82;
        }

        .hero-head {
          position: absolute;
          top: 10px;
          left: 12px;
          width: 41px;
          height: 35px;
          background: #858ca0;
        }

        .hero-ear {
          position: absolute;
          top: 0;
          width: 13px;
          height: 20px;
          background: #858ca0;
        }

        .hero-ear-left {
          left: 13px;
        }
        .hero-ear-right {
          right: 9px;
        }

        .hero-mask {
          position: absolute;
          top: 25px;
          left: 12px;
          width: 41px;
          height: 13px;
          background: #292b3c;
        }

        .hero-eye {
          position: absolute;
          top: 28px;
          right: 15px;
          width: 6px;
          height: 5px;
          background: #ffd45f;
        }

        .hero-scarf {
          position: absolute;
          top: 43px;
          left: 8px;
          width: 48px;
          height: 7px;
          background: #dd5964;
          box-shadow: -10px 4px #dd5964;
        }

        .hero-tail {
          position: absolute;
          bottom: 31px;
          left: 2px;
          width: 15px;
          height: 7px;
          background: #737a8d;
        }

        .hero-leg {
          position: absolute;
          bottom: 0;
          width: 11px;
          height: 18px;
          background: #292b3c;
        }

        .hero-leg-left {
          left: 17px;
        }
        .hero-leg-right {
          right: 13px;
        }

        @keyframes title-hero-bob {
          from {
            transform: translateX(-50%) translateY(0) scale(1.3);
          }
          to {
            transform: translateX(-50%) translateY(-4px) scale(1.3);
          }
        }

        .bedroom-scene {
          overflow: visible !important;
          background: linear-gradient(180deg, #30345d 0 72%, #594233 72% 100%);
          box-shadow:
            -120vw 0 0 120vw #30345d,
            120vw 0 0 120vw #30345d;
        }

        .bedroom-scene.bedroom-unified-stage::before {
          content: "";
          position: fixed;
          z-index: -2;
          inset: -100vh -100vw;
          pointer-events: none;
          background: linear-gradient(180deg, #30345d 0 72%, #594233 72% 100%);
        }

        .bedroom-scene.bedroom-unified-stage::after {
          content: "";
          position: absolute;
          z-index: 0;
          left: -140vw;
          right: -140vw;
          bottom: 165px;
          height: 10px;
          pointer-events: none;
          background: #14172f;
          box-shadow: 0 5px 0 #46466f;
        }

        .bedroom-wallpaper {
          position: absolute;
          z-index: 1;
          inset: 0 0 26% 0;
          opacity: 0.7;
          background:
            repeating-linear-gradient(
              90deg,
              rgba(97, 109, 164, 0.3) 0,
              rgba(97, 109, 164, 0.3) 4px,
              transparent 4px,
              transparent 28px
            ),
            repeating-linear-gradient(
              0deg,
              transparent 0,
              transparent 28px,
              rgba(255, 255, 255, 0.08) 28px,
              rgba(255, 255, 255, 0.08) 31px
            );
        }

        .bedroom-window-large {
          top: 62px;
          left: 52px;
          right: auto;
          width: 190px;
          height: 144px;
          border-color: #687197;
          background: #bce6f0;
        }

        .window-sky-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.25),
            transparent 55%
          );
        }

        .window-plant {
          position: absolute;
          z-index: 6;
          bottom: 3px;
          left: 14px;
          width: 28px;
          height: 22px;
          border-bottom: 9px solid #d86e63;
        }

        .window-plant i {
          position: absolute;
          bottom: 8px;
          width: 6px;
          height: 18px;
          border-radius: 50% 50% 0 0;
          background: #59a65d;
          transform-origin: bottom;
        }

        .window-plant i:nth-child(1) {
          left: 4px;
          transform: rotate(-22deg);
        }
        .window-plant i:nth-child(2) {
          left: 11px;
          height: 23px;
        }
        .window-plant i:nth-child(3) {
          left: 18px;
          transform: rotate(24deg);
        }

        .wall-shelf {
          position: absolute;
          top: 65px;
          left: 300px;
          display: flex;
          width: 190px;
          height: 62px;
          align-items: flex-end;
          gap: 8px;
          padding: 0 14px 9px;
          border-bottom: 9px solid #765343;
        }

        .shelf-book {
          width: 13px;
          height: 38px;
        }

        .book-red {
          background: #d56b75;
        }
        .book-blue {
          background: #6489bd;
          height: 45px;
        }
        .book-yellow {
          background: #d9b958;
          height: 32px;
        }
        .book-purple {
          background: #916bb1;
          height: 42px;
        }

        .shelf-globe {
          width: 43px;
          height: 43px;
          margin-left: 11px;
          border-radius: 50%;
          background:
            radial-gradient(circle at 35% 35%, #8ab45a 0 24%, transparent 25%),
            #5c91bd;
          box-shadow: 0 7px 0 -3px #6b4a3c;
        }

        .shelf-camera {
          position: relative;
          width: 28px;
          height: 25px;
          margin-left: auto;
          background: #4e536e;
        }

        .shelf-camera::before {
          position: absolute;
          top: 7px;
          left: 8px;
          width: 11px;
          height: 11px;
          content: "";
          border-radius: 50%;
          background: #bdeaf1;
        }

        .computer-desk {
          position: absolute;
          left: 275px;
          bottom: 79px;
          width: 185px;
          height: 115px;
          border-top: 10px solid #8d6551;
        }

        .computer-monitor {
          position: absolute;
          top: -95px;
          left: 17px;
          width: 125px;
          height: 70px;
          border: 8px solid #767fa7;
          background: #a9e5e8;
          box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.15);
        }

        .monitor-cursor {
          position: absolute;
          right: 25px;
          bottom: 19px;
          width: 9px;
          height: 14px;
          border-left: 4px solid #7a6ab0;
          border-bottom: 4px solid #7a6ab0;
        }

        .monitor-stand {
          position: absolute;
          top: -25px;
          left: 72px;
          width: 15px;
          height: 25px;
          background: #737b9e;
        }

        .desk-leg {
          position: absolute;
          top: 0;
          width: 10px;
          height: 105px;
          background: #775443;
        }

        .desk-leg-left {
          left: 8px;
        }
        .desk-leg-right {
          right: 8px;
        }

        .desk-drawer {
          position: absolute;
          top: 5px;
          right: 17px;
          width: 55px;
          height: 35px;
          background: #986d54;
          box-shadow: inset 0 -7px rgba(0, 0, 0, 0.09);
        }

        .desk-chair {
          position: absolute;
          left: -68px;
          bottom: 0;
          width: 48px;
          height: 54px;
          background: #7590b7;
          box-shadow: 0 41px 0 -19px #765443;
        }

        .desk-chair span {
          position: absolute;
          right: -8px;
          bottom: -35px;
          width: 9px;
          height: 52px;
          background: #765443;
        }

        .bedroom-cabinet {
          position: absolute;
          left: 492px;
          bottom: 79px;
          width: 76px;
          height: 138px;
          background: #805a49;
          box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.15);
        }

        .cabinet-book {
          position: absolute;
          top: 16px;
          width: 12px;
          height: 44px;
        }

        .cabinet-book-a {
          left: 12px;
          background: #5e7cad;
        }
        .cabinet-book-b {
          left: 29px;
          background: #9a67a9;
          height: 52px;
        }
        .cabinet-book-c {
          left: 47px;
          background: #d4a95b;
          height: 37px;
        }

        .cabinet-drawer {
          position: absolute;
          right: 9px;
          bottom: 12px;
          left: 9px;
          height: 38px;
          background: #986b52;
          box-shadow: inset 0 -7px rgba(0, 0, 0, 0.08);
        }

        .bedroom-mirror {
          position: absolute;
          top: 102px;
          left: 595px;
          width: 95px;
          height: 150px;
          border: 10px solid #a17a69;
          background: #b9e0e8;
          box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.14);
        }

        .mirror-shine {
          position: absolute;
          width: 8px;
          height: 75px;
          background: rgba(255, 255, 255, 0.55);
          transform: rotate(-35deg);
        }

        .shine-a {
          top: 7px;
          left: 25px;
        }
        .shine-b {
          top: 45px;
          left: 54px;
          height: 42px;
        }

        .aquarium {
          position: absolute;
          top: 115px;
          right: 188px;
          width: 180px;
          height: 145px;
        }

        .aquarium-water {
          position: absolute;
          inset: 0 0 35px 0;
          overflow: hidden;
          border: 9px solid #58718c;
          background: linear-gradient(#57c7e8, #4fa7d6);
          box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.14);
        }

        .aquarium-stand {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 39px;
          background: #765443;
          box-shadow:
            0 26px 0 -15px #765443,
            160px 26px 0 -15px #765443;
        }

        .aquarium-fish {
          position: absolute;
          width: 20px;
          height: 10px;
          background: #ff755b;
          animation: aquarium-swim 5s linear infinite;
        }

        .aquarium-fish::before {
          position: absolute;
          left: -8px;
          width: 9px;
          height: 10px;
          content: "";
          background: inherit;
          clip-path: polygon(0 0, 100% 50%, 0 100%);
        }

        .fish-a {
          top: 25px;
          left: 25px;
        }
        .fish-b {
          top: 55px;
          left: 90px;
          background: #f1dd4a;
          animation-delay: -2s;
        }
        .fish-c {
          top: 75px;
          left: 55px;
          background: #ef8ea2;
          animation-delay: -3.5s;
        }

        .aquarium-plant {
          position: absolute;
          bottom: 0;
          width: 8px;
          background: #589b48;
          transform-origin: bottom;
        }

        .plant-a {
          right: 30px;
          height: 65px;
          transform: rotate(8deg);
        }
        .plant-b {
          right: 45px;
          height: 45px;
          transform: rotate(-9deg);
        }

        .aquarium-bubble {
          position: absolute;
          width: 5px;
          height: 5px;
          border: 2px solid rgba(255, 255, 255, 0.75);
          border-radius: 50%;
          animation: bubble-rise 2.8s linear infinite;
        }

        .bubble-a {
          bottom: 12px;
          left: 45px;
        }
        .bubble-b {
          bottom: 8px;
          left: 105px;
          animation-delay: -1.1s;
        }
        .bubble-c {
          bottom: 18px;
          right: 22px;
          animation-delay: -2s;
        }

        .bedroom-door {
          position: absolute;
          top: 100px;
          right: 28px;
          width: 82px;
          height: 250px;
          border: 8px solid #825d52;
          background: #a87a6b;
        }

        .door-handle {
          position: absolute;
          top: 122px;
          right: 10px;
          width: 8px;
          height: 8px;
          background: #5d6b80;
        }

        .bedside-table {
          position: absolute;
          right: 368px;
          bottom: 76px;
          width: 68px;
          height: 72px;
          background: #815a49;
          box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.14);
        }

        .bedside-lamp {
          position: absolute;
          top: -49px;
          left: 8px;
          width: 52px;
          height: 36px;
          background: #f0c46d;
          clip-path: polygon(18% 0, 82% 0, 100% 100%, 0 100%);
        }

        .bedside-lamp-base {
          position: absolute;
          top: -17px;
          left: 31px;
          width: 7px;
          height: 20px;
          background: #7d5b47;
        }

        .bedside-drawer {
          position: absolute;
          top: 17px;
          right: 9px;
          left: 9px;
          height: 27px;
          background: #986d54;
        }

        .bedroom-rug {
          position: absolute;
          right: 48px;
          bottom: 29px;
          width: 365px;
          height: 72px;
          border-radius: 50%;
          background: repeating-linear-gradient(
            90deg,
            #6d78a6 0,
            #6d78a6 34px,
            #59668f 34px,
            #59668f 68px
          );
          opacity: 0.86;
        }

        .bedroom-bed-right {
          right: 20px;
          bottom: 55px;
          width: 330px;
          transform: scale(0.88);
          transform-origin: right bottom;
        }

        .home-caption {
          right: 34px;
          bottom: 20px;
          padding: 10px 15px;
        }

        @keyframes aquarium-swim {
          from {
            transform: translateX(-35px);
          }
          to {
            transform: translateX(145px);
          }
        }

        @keyframes bubble-rise {
          from {
            opacity: 0;
            transform: translateY(0);
          }
          20% {
            opacity: 1;
          }
          to {
            opacity: 0;
            transform: translateY(-90px);
          }
        }

        /* V6 targeted adjustments only. */
        .playground-action {
          min-height: 51px;
          padding: 0 23px;
          color: #243247;
          border: 0;
          border-radius: 8px;
          background: linear-gradient(145deg, #86c9ff, #8e9cff);
          box-shadow:
            0 6px 0 #4e65ae,
            0 11px 20px rgba(0, 0, 0, 0.24);
          font-weight: 700;
        }

        .playground-action:hover {
          filter: brightness(1.08);
          transform: translateY(-2px);
        }

        .playground-action:active {
          box-shadow: 0 2px 0 #4e65ae;
          transform: translateY(4px);
        }

        .playground-grid i {
          background: #ffffff;
        }

        .secret-village-skip {
          position: absolute;
          right: 0;
          bottom: 0;
          z-index: 50;
          width: 74px;
          height: 58px;
          padding: 0;
          border: 0;
          opacity: 0;
          cursor: default;
        }

        .desk-chair,
        .bedroom-door {
          display: none;
        }

        .bedroom-bed-right .bed-headboard {
          right: -20px;
          left: auto;
          box-shadow: none;
        }

        .bedroom-bed-right .bed-pillow {
          right: 24px;
          left: auto;
        }

        .bedroom-bed-right .bed-blanket {
          right: 108px;
          left: auto;
          width: 225px;
        }

        .finish-sign {
          right: 345px;
          bottom: 24px;
          width: 285px;
          padding: 13px 16px;
          border-color: rgba(255, 236, 169, 0.32);
          background: linear-gradient(
            180deg,
            rgba(43, 45, 83, 0.96),
            rgba(25, 27, 57, 0.96)
          );
        }

        .finish-sign span {
          color: #ffe59a;
          font-size: 12px;
          line-height: 1.35;
        }

        .finish-sign small {
          display: block;
          margin-top: 6px;
          color: #ffffff;
          font-size: 9px;
          line-height: 1.45;
        }

        .finish-sign em {
          display: block;
          margin-top: 5px;
          color: #9da4ca;
          font-size: 8px;
          font-style: normal;
        }

        /* V7 targeted adjustments only. */
        .computer-monitor {
          display: grid;
          place-items: center;
        }

        .monitor-brand {
          position: relative;
          z-index: 2;
          color: #5965a5;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.45);
        }

        .monitor-cursor {
          display: none;
        }

        /* Keep the bedroom character facing right, matching the game sprite. */
        .walk-face::after {
          position: absolute;
          top: 14px;
          right: 6px;
          width: 5px;
          height: 4px;
          content: "";
          background: #ffd45f;
        }

        .walk-scarf::after {
          position: absolute;
          top: 2px;
          left: -10px;
          width: 12px;
          height: 5px;
          content: "";
          background: #d95a64;
        }

        .playground-button {
          min-width: 154px !important;
          min-height: 51px !important;
          padding: 0 23px !important;
          color: #20324d !important;
          border: 0 !important;
          border-radius: 8px !important;
          background: #8fc8ff !important;
          box-shadow: 0 6px 0 #527cb6 !important;
          font-weight: 700 !important;
          text-decoration: none !important;
        }

        .playground-button:hover {
          filter: brightness(1.08);
          transform: translateY(-2px);
        }

        .playground-button:active {
          box-shadow: 0 2px 0 #527cb6 !important;
          transform: translateY(4px);
        }

        .playground-arrow {
          font-size: 16px;
          line-height: 1;
        }

        .title-hero {
          left: 12%;
          transform: scale(1.3);
        }

        @keyframes title-hero-bob {
          from {
            transform: translateY(0) scale(1.3);
          }
          to {
            transform: translateY(-4px) scale(1.3);
          }
        }

        /* V8 targeted adjustments only. */
        .pause-playground-button {
          transition:
            transform 140ms ease,
            filter 140ms ease,
            box-shadow 140ms ease;
        }

        .pause-playground-button:hover {
          filter: brightness(1.08);
          transform: translateY(-2px);
        }

        .pause-playground-button:active {
          box-shadow: 0 2px 0 #527cb6 !important;
          transform: translateY(4px);
        }

        /* Side-profile bedroom sprite, matching the in-game character. */
        .walking-home-player {
          transform-origin: center bottom;
        }

        .walking-home-player .left-ear {
          display: none;
        }

        .walking-home-player .right-ear {
          top: 1px;
          right: 11px;
          width: 12px;
          height: 18px;
        }

        .walking-home-player .walk-face {
          top: 9px;
          left: 12px;
          width: 30px;
          height: 31px;
        }

        .walking-home-player .walk-face::before {
          position: absolute;
          right: -8px;
          bottom: 4px;
          width: 11px;
          height: 10px;
          content: "";
          background: #858ca0;
        }

        .walking-home-player .walk-face::after {
          top: 13px;
          right: 3px;
          width: 5px;
          height: 4px;
        }

        .walking-home-player .walk-body {
          right: 10px;
          width: 31px;
        }

        .walking-home-player .walk-scarf {
          left: 7px;
          width: 38px;
        }

        .walking-home-player .walk-scarf::after {
          left: -12px;
          width: 14px;
        }

        .bedroom-fairy-lights {
          position: absolute;
          z-index: 3;
          top: 24px;
          left: 430px;
          display: flex;
          width: 410px;
          justify-content: space-between;
          border-top: 3px solid rgba(105, 79, 111, 0.55);
          transform: rotate(1deg);
        }

        .bedroom-fairy-lights span {
          width: 7px;
          height: 10px;
          margin-top: -1px;
          border-radius: 0 0 5px 5px;
          background: #ffd77c;
          box-shadow: 0 0 11px rgba(255, 219, 126, 0.72);
        }

        .bedroom-fairy-lights span:nth-child(2n) {
          background: #8fe4d2;
          box-shadow: 0 0 11px rgba(143, 228, 210, 0.7);
        }

        .bedroom-fairy-lights span:nth-child(3n) {
          background: #ec8fa9;
          box-shadow: 0 0 11px rgba(236, 143, 169, 0.7);
        }

        .bedroom-poster {
          position: absolute;
          z-index: 2;
          display: grid;
          place-items: center;
          color: #fff1b2;
          border: 7px solid #765447;
          background: #6b719e;
          box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.14);
          text-align: center;
        }

        .poster-one {
          top: 164px;
          left: 470px;
          width: 58px;
          height: 75px;
          font-size: 24px;
        }

        .poster-two {
          top: 74px;
          right: 392px;
          width: 82px;
          height: 54px;
          color: #ccecf1;
          font-size: 9px;
          letter-spacing: 0.08em;
        }

        .bedroom-clock {
          position: absolute;
          z-index: 3;
          top: 166px;
          right: 445px;
          width: 54px;
          height: 54px;
          border: 7px solid #735247;
          border-radius: 50%;
          background: #f2ddb1;
          box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.12);
        }

        .bedroom-clock::before {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 6px;
          height: 6px;
          content: "";
          border-radius: 50%;
          background: #6d5060;
          transform: translate(-50%, -50%);
        }

        .clock-hand {
          position: absolute;
          bottom: 50%;
          left: 50%;
          width: 3px;
          background: #6d5060;
          transform-origin: bottom;
        }

        .hour-hand {
          height: 13px;
          transform: translateX(-50%) rotate(42deg);
        }

        .minute-hand {
          height: 18px;
          transform: translateX(-50%) rotate(130deg);
        }

        .small-round-window {
          position: absolute;
          z-index: 2;
          top: 72px;
          left: 685px;
          width: 82px;
          height: 82px;
          overflow: hidden;
          border: 9px solid #755448;
          border-radius: 50%;
          background: linear-gradient(180deg, #566a9b, #24284f);
          box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.14);
        }

        .small-round-window::before,
        .small-round-window::after {
          position: absolute;
          z-index: 3;
          content: "";
          background: #755448;
        }

        .small-round-window::before {
          top: 31px;
          left: 0;
          width: 100%;
          height: 5px;
        }

        .small-round-window::after {
          top: 0;
          left: 31px;
          width: 5px;
          height: 100%;
        }

        .round-window-moon {
          position: absolute;
          top: 12px;
          right: 11px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #fff0a1;
        }

        .round-window-star {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #ffffff;
        }

        .small-round-window .star-one {
          top: 18px;
          left: 15px;
        }

        .small-round-window .star-two {
          right: 20px;
          bottom: 15px;
        }

        .floor-plant {
          position: absolute;
          z-index: 4;
          right: 445px;
          bottom: 75px;
          width: 72px;
          height: 105px;
        }

        .plant-pot {
          position: absolute;
          right: 12px;
          bottom: 0;
          width: 48px;
          height: 34px;
          background: #d37b68;
          clip-path: polygon(8% 0, 92% 0, 80% 100%, 20% 100%);
        }

        .plant-leaf {
          position: absolute;
          bottom: 28px;
          left: 32px;
          width: 12px;
          border-radius: 50% 50% 10% 10%;
          background: #4f9e60;
          transform-origin: bottom;
        }

        .leaf-one {
          height: 58px;
          transform: rotate(-27deg);
        }

        .leaf-two {
          height: 70px;
          transform: rotate(-8deg);
        }

        .leaf-three {
          height: 65px;
          transform: rotate(17deg);
        }

        .leaf-four {
          height: 52px;
          transform: rotate(34deg);
        }

        .toy-chest {
          position: absolute;
          z-index: 3;
          left: 590px;
          bottom: 75px;
          width: 82px;
          height: 50px;
          border-top: 11px solid #a86b4d;
          background: #8b5a46;
          box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.12);
        }

        .toy-star {
          position: absolute;
          top: 10px;
          left: 32px;
          color: #f4cc66;
          font-size: 18px;
        }

        .bedroom-rug {
          box-shadow:
            inset 0 0 0 5px rgba(255, 255, 255, 0.08),
            0 5px 0 rgba(0, 0, 0, 0.08);
        }

        /* V9 targeted bedroom and ending-screen adjustments only. */

        .bedroom-bed-right .bed-pillow {
          top: 42px;
          right: 22px;
          left: auto;
          width: 94px;
          height: 46px;
          z-index: 3;
          border-width: 5px;
        }

        .bedroom-bed-right .bed-blanket {
          top: 47px;
          right: 106px;
          left: auto;
          width: 226px;
          height: 86px;
        }

        .finish-sign {
          top: 20px;
          right: 24px;
          bottom: auto;
          width: 302px;
          z-index: 12;
        }

        .character-portrait {
          position: absolute;
          overflow: hidden;
          color: transparent;
          background: linear-gradient(180deg, #6e78aa, #444b7a);
        }

        .portrait-head {
          position: absolute;
          top: 17px;
          left: 26px;
          width: 32px;
          height: 29px;
          background: #858ca0;
        }

        .portrait-ear {
          position: absolute;
          top: 8px;
          width: 10px;
          height: 15px;
          background: #858ca0;
        }

        .portrait-ear-left {
          left: 28px;
        }

        .portrait-ear-right {
          right: 24px;
        }

        .portrait-mask {
          position: absolute;
          top: 29px;
          left: 26px;
          width: 32px;
          height: 10px;
          background: #292b3c;
        }

        .portrait-eye {
          position: absolute;
          top: 31px;
          right: 29px;
          width: 5px;
          height: 4px;
          background: #ffd45f;
        }

        .portrait-scarf {
          position: absolute;
          top: 45px;
          left: 22px;
          width: 41px;
          height: 6px;
          background: #d95a64;
        }

        .family-gallery {
          position: absolute;
          z-index: 3;
          top: 84px;
          right: 40px;
          display: grid;
          width: 250px;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .family-frame {
          position: relative;
          height: 76px;
          overflow: hidden;
          border: 7px solid #765447;
          background: #a9cce1;
          box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.13);
        }

        .family-sky {
          position: absolute;
          inset: 0 0 25px;
          background: #8fd3e3;
        }

        .family-ground {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 25px;
          background: #79ad57;
        }

        .family-person {
          position: absolute;
          bottom: 11px;
          width: 11px;
          height: 20px;
          background: #d96d78;
          box-shadow: 0 -8px 0 -1px #efc19a;
        }

        .family-person::before {
          position: absolute;
          top: -11px;
          left: 1px;
          width: 9px;
          height: 6px;
          content: "";
          background: #5d3d31;
        }

        .person-a {
          left: 27px;
        }
        .person-b {
          left: 49px;
          background: #5f89c2;
        }

        .family-kite {
          position: absolute;
          top: 11px;
          right: 22px;
          width: 14px;
          height: 14px;
          background: #e66c77;
          transform: rotate(45deg);
        }

        .family-kite::after {
          position: absolute;
          top: 12px;
          left: 12px;
          width: 2px;
          height: 28px;
          content: "";
          background: #74554e;
          transform: rotate(-42deg);
          transform-origin: top;
        }

        .family-frame-two {
          background: linear-gradient(180deg, #e0b06f 0 62%, #7c5a49 62%);
        }

        .family-table {
          position: absolute;
          right: 18px;
          bottom: 8px;
          left: 18px;
          height: 8px;
          background: #7c5137;
        }

        .person-c {
          left: 24px;
          bottom: 14px;
          background: #6da67d;
        }
        .person-d {
          right: 24px;
          bottom: 14px;
          background: #9b6cc0;
        }

        .family-cake {
          position: absolute;
          right: 44px;
          bottom: 18px;
          width: 22px;
          height: 14px;
          background: #f0c779;
          box-shadow: inset 0 5px #e57f8d;
        }

        .family-cake::before {
          position: absolute;
          top: -8px;
          left: 9px;
          width: 3px;
          height: 8px;
          content: "";
          background: #ffd661;
        }

        .family-frame-three {
          background: linear-gradient(180deg, #96d4df 0 58%, #6ba04d 58%);
        }

        .family-tree {
          position: absolute;
          bottom: 13px;
          left: 45px;
          width: 8px;
          height: 33px;
          background: #664635;
        }

        .family-tree::before {
          position: absolute;
          top: -20px;
          left: -16px;
          width: 40px;
          height: 28px;
          content: "";
          border-radius: 50%;
          background: #4d8c4c;
        }

        .person-e {
          left: 20px;
          background: #e0a24f;
        }
        .person-f {
          right: 18px;
          background: #d9779c;
        }

        .family-flower {
          position: absolute;
          right: 36px;
          bottom: 9px;
          width: 4px;
          height: 13px;
          background: #4d8f51;
        }

        .family-flower::before {
          position: absolute;
          top: -6px;
          left: -3px;
          width: 10px;
          height: 8px;
          content: "";
          background: #ef7e98;
        }

        .family-frame-four {
          background: linear-gradient(180deg, #6bc5df 0 70%, #ddc37a 70%);
        }

        .family-water {
          position: absolute;
          right: 0;
          bottom: 11px;
          left: 0;
          height: 18px;
          background: repeating-linear-gradient(
            0deg,
            #4ca8cc 0,
            #4ca8cc 4px,
            #67bdd7 4px,
            #67bdd7 8px
          );
        }

        .person-g {
          left: 24px;
          bottom: 12px;
          background: #5b84bf;
        }
        .person-h {
          right: 24px;
          bottom: 12px;
          background: #6eaa7b;
        }

        .family-fish-icon {
          position: absolute;
          top: 18px;
          left: 47px;
          width: 16px;
          height: 8px;
          background: #ffd15f;
        }

        .family-fish-icon::before {
          position: absolute;
          left: -7px;
          width: 8px;
          height: 8px;
          content: "";
          background: inherit;
          clip-path: polygon(0 0, 100% 50%, 0 100%);
        }

        .ending-playground-button {
          min-width: 154px !important;
          min-height: 51px !important;
          padding: 0 23px !important;
          color: #20324d !important;
          border: 0 !important;
          border-radius: 8px !important;
          background: #8fc8ff !important;
          box-shadow: 0 6px 0 #527cb6 !important;
          font-weight: 700 !important;
          text-decoration: none !important;
        }

        .ending-playground-button:hover {
          filter: brightness(1.08);
          transform: translateY(-2px);
        }

        .ending-playground-button:active {
          box-shadow: 0 2px 0 #527cb6 !important;
          transform: translateY(4px);
        }

        /* V10 targeted fixes only. */

        /* Move the family frames away from the aquarium and instruction sign. */
        .family-gallery {
          top: 286px;
          right: auto;
          left: 560px;
          width: 300px;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .family-frame {
          height: 82px;
          border-width: 6px;
        }

        /* Add a mattress/support directly below the pillow. */
        .bedroom-bed-right::before {
          position: absolute;
          z-index: 2;
          top: 74px;
          right: 13px;
          width: 118px;
          height: 34px;
          content: "";
          border: 5px solid #b6b8c8;
          background: #eef0f5;
          box-shadow: inset 0 -7px rgba(124, 137, 171, 0.16);
        }

        .bedroom-bed-right .bed-pillow {
          z-index: 4;
        }

        .ending-playground-button {
          transition:
            transform 140ms ease,
            filter 140ms ease,
            box-shadow 140ms ease;
        }

        .ending-playground-button:hover {
          filter: brightness(1.08);
          transform: translateY(-2px);
        }

        .ending-playground-button:active {
          box-shadow: 0 2px 0 #527cb6 !important;
          transform: translateY(4px);
        }

        /* Character-only correction: restore the original forward-facing walking sprite. */
        .walking-home-player {
          width: 50px !important;
          height: 75px !important;
          bottom: 102px !important;
          transform: none !important;
          transform-origin: center bottom !important;
        }

        .walking-home-player .walk-body {
          right: 8px !important;
          bottom: 9px !important;
          width: 34px !important;
          height: 38px !important;
          background: #666d82 !important;
        }

        .walking-home-player .walk-face {
          top: 8px !important;
          left: 8px !important;
          width: 35px !important;
          height: 32px !important;
          background: linear-gradient(
            180deg,
            #858ca0 0,
            #858ca0 42%,
            #292b3c 42%,
            #292b3c 75%,
            #858ca0 75%
          ) !important;
        }

        .walking-home-player .walk-face::before {
          display: none !important;
          content: none !important;
        }

        .walking-home-player .walk-face::after {
          position: absolute;
          top: 14px !important;
          right: auto !important;
          left: 8px !important;
          display: block !important;
          width: 5px !important;
          height: 4px !important;
          content: "" !important;
          background: #ffd45f !important;
          box-shadow: 14px 0 0 #ffd45f;
        }

        .walking-home-player .walk-ear {
          display: block !important;
          top: 0 !important;
          width: 11px !important;
          height: 18px !important;
          background: #858ca0 !important;
        }

        .walking-home-player .left-ear {
          left: 8px !important;
          right: auto !important;
        }

        .walking-home-player .right-ear {
          right: 7px !important;
          left: auto !important;
        }

        .walking-home-player .walk-scarf {
          top: 38px !important;
          left: 4px !important;
          width: 43px !important;
          height: 7px !important;
          background: #d95a64 !important;
        }

        .walking-home-player .walk-scarf::after {
          display: none !important;
          content: none !important;
        }

        .walking-home-player .walk-leg {
          bottom: 0 !important;
          width: 9px !important;
          height: 14px !important;
          background: #292b3c !important;
        }

        .walking-home-player .leg-left {
          left: 10px !important;
          right: auto !important;
        }

        .walking-home-player .leg-right {
          right: 10px !important;
          left: auto !important;
        }

        /* Exact bedroom copy of the outdoor player sprite. */
        .walking-home-player.outdoor-sprite {
          position: absolute;
          z-index: 8;
          bottom: 102px;
          width: 47px;
          height: 45px;
          transition: left 70ms linear;
          animation: outdoor-player-bob 0.36s steps(2) infinite alternate;
          transform: none !important;
        }

        .outdoor-sprite .sprite-tail,
        .outdoor-sprite .sprite-body,
        .outdoor-sprite .sprite-head,
        .outdoor-sprite .sprite-ear,
        .outdoor-sprite .sprite-mask,
        .outdoor-sprite .sprite-eye,
        .outdoor-sprite .sprite-scarf-main,
        .outdoor-sprite .sprite-scarf-tail,
        .outdoor-sprite .sprite-leg,
        .outdoor-sprite .sprite-highlight-one,
        .outdoor-sprite .sprite-highlight-two {
          position: absolute;
          display: block;
          image-rendering: pixelated;
        }

        .outdoor-sprite .sprite-tail {
          left: 0;
          top: 22px;
          width: 12px;
          height: 6px;
          background: #737a8d;
        }

        .outdoor-sprite .sprite-body {
          left: 12px;
          top: 17px;
          width: 27px;
          height: 24px;
          background: #666d82;
        }

        .outdoor-sprite .sprite-head {
          left: 13px;
          top: 3px;
          width: 27px;
          height: 23px;
          background: #858ca0;
        }

        .outdoor-sprite .sprite-ear-one {
          left: 16px;
          top: 0;
          width: 8px;
          height: 10px;
          background: #858ca0;
        }

        .outdoor-sprite .sprite-ear-two {
          left: 31px;
          top: 0;
          width: 8px;
          height: 10px;
          background: #858ca0;
        }

        .outdoor-sprite .sprite-mask {
          left: 13px;
          top: 13px;
          width: 27px;
          height: 10px;
          background: #292b3c;
        }

        .outdoor-sprite .sprite-eye {
          left: 30px;
          top: 15px;
          width: 5px;
          height: 4px;
          background: #ffd45f;
        }

        .outdoor-sprite .sprite-scarf-main {
          left: 12px;
          top: 25px;
          width: 29px;
          height: 5px;
          background: #dd5964;
        }

        .outdoor-sprite .sprite-scarf-tail {
          left: 4px;
          top: 27px;
          width: 10px;
          height: 5px;
          background: #dd5964;
        }

        .outdoor-sprite .sprite-leg {
          top: 37px;
          width: 8px;
          background: #282a3a;
          transform-origin: top;
          animation: exact-leg-step 0.36s steps(2) infinite alternate;
        }

        .outdoor-sprite .sprite-leg-one {
          left: 15px;
          height: 12px;
        }

        .outdoor-sprite .sprite-leg-two {
          left: 29px;
          height: 8px;
          animation-delay: -0.18s;
        }

        .outdoor-sprite .sprite-highlight-one {
          left: 17px;
          top: 6px;
          width: 3px;
          height: 4px;
          background: #a9afbf;
        }

        .outdoor-sprite .sprite-highlight-two {
          left: 17px;
          top: 20px;
          width: 4px;
          height: 3px;
          background: #959cad;
        }

        @keyframes exact-leg-step {
          from {
            transform: scaleY(0.72);
          }
          to {
            transform: scaleY(1.28);
          }
        }

        @keyframes outdoor-player-bob {
          from {
            margin-bottom: 0;
          }
          to {
            margin-bottom: 2px;
          }
        }

        /* Bedroom movement correction: A/D moves, and the sprite faces its direction. */
        .walking-home-player.outdoor-sprite {
          animation: none !important;
          transform-origin: center bottom !important;
        }

        .walking-home-player.outdoor-sprite.faces-right {
          transform: scaleX(1) !important;
        }

        .walking-home-player.outdoor-sprite.faces-left {
          transform: scaleX(-1) !important;
        }

        .walking-home-player.outdoor-sprite .sprite-leg {
          animation: none !important;
          transform: scaleY(1);
        }

        .walking-home-player.outdoor-sprite.is-walking {
          animation: bedroom-player-bob 0.36s steps(2) infinite alternate !important;
        }

        .walking-home-player.outdoor-sprite.is-walking .sprite-leg-one {
          animation: bedroom-leg-one 0.36s steps(2) infinite alternate !important;
        }

        .walking-home-player.outdoor-sprite.is-walking .sprite-leg-two {
          animation: bedroom-leg-two 0.36s steps(2) infinite alternate !important;
        }

        @keyframes bedroom-player-bob {
          from {
            margin-bottom: 0;
          }
          to {
            margin-bottom: 2px;
          }
        }

        @keyframes bedroom-leg-one {
          from {
            transform: scaleY(0.72);
          }
          to {
            transform: scaleY(1.28);
          }
        }

        @keyframes bedroom-leg-two {
          from {
            transform: scaleY(1.28);
          }
          to {
            transform: scaleY(0.72);
          }
        }

        /* Responsive system: only layout and touch-control behavior. */
        :global(html),
        :global(body) {
          width: 100%;
          min-width: 100%;
          min-height: 100%;
        }

        /* Touch devices use the real visible viewport rather than the size of
           the surrounding page/layout. This prevents headers and parent
           containers from shrinking or covering the game. */
        .touch-device {
          position: fixed;
          inset: 0;
          z-index: 2147483000;
          display: block;
          width: 100vw;
          width: 100dvw;
          height: 100vh;
          height: 100dvh;
          min-height: 0;
          padding: 0;
          overflow: hidden;
          background: #08091b;
          overscroll-behavior: none;
          touch-action: none;
        }

        .touch-device .touch-game-shell {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          max-width: none;
          max-height: none;
          aspect-ratio: auto;
          border: 0;
          border-radius: 0;
          box-shadow: none;
        }

        .touch-device .game-canvas {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          /* The canvas logical width is matched to the phone aspect ratio, so
             this fills the viewport without geometrically stretching sprites. */
          object-fit: fill;
        }

        .touch-device .back-button,
        .touch-device .pause-button,
        .touch-device .control-button,
        .touch-device .main-play-button,
        .touch-device .dialog-actions button,
        .touch-device .dialog-actions a,
        .touch-device .landscape-retry-button {
          min-width: 44px;
          min-height: 44px;
        }

        .touch-device .back-button {
          top: max(8px, env(safe-area-inset-top));
          left: max(8px, env(safe-area-inset-left));
          z-index: 80;
        }

        .touch-device .back-button span:last-child {
          display: none;
        }

        .touch-device .pause-button {
          top: max(8px, env(safe-area-inset-top));
          right: max(8px, env(safe-area-inset-right));
          z-index: 80;
        }

        .touch-device .biome-badge {
          top: max(62px, calc(env(safe-area-inset-top) + 54px));
          right: max(8px, env(safe-area-inset-right));
        }

        .touch-device .mobile-controls {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 70;
          display: flex;
          min-height: 96px;
          align-items: flex-end;
          justify-content: space-between;
          padding-top: 10px;
          padding-right: max(14px, calc(env(safe-area-inset-right) + 8px));
          padding-bottom: max(12px, calc(env(safe-area-inset-bottom) + 8px));
          padding-left: max(14px, calc(env(safe-area-inset-left) + 8px));
          pointer-events: none;
        }

        .touch-device .movement-buttons {
          display: flex;
          gap: clamp(9px, 1.5vw, 16px);
        }

        .touch-device .control-button {
          opacity: 1;
          border: clamp(2px, 0.35vw, 3px) solid rgba(255, 255, 255, 0.7);
          background: rgba(8, 10, 30, 0.88);
          box-shadow:
            0 clamp(4px, 0.9vh, 7px) 0 rgba(0, 0, 0, 0.52),
            inset 0 0 16px rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
          -webkit-touch-callout: none;
          touch-action: none;
          user-select: none;
        }

        .touch-device .control-button span,
        .touch-device .control-button small {
          pointer-events: none;
        }

        .touch-device .direction-button {
          width: clamp(60px, min(10.6vw, 18vh), 98px);
          height: clamp(60px, min(10.6vw, 18vh), 98px);
          border-radius: clamp(11px, 1.5vw, 17px);
          font-size: clamp(24px, min(4vw, 7vh), 39px);
        }

        .touch-device .jump-button {
          width: clamp(78px, min(12.8vw, 22vh), 120px);
          height: clamp(78px, min(12.8vw, 22vh), 120px);
        }

        .touch-device .jump-button span {
          font-size: clamp(29px, min(5vw, 9vh), 45px);
        }

        .touch-device .jump-button small {
          font-size: clamp(8px, min(1.2vw, 2.2vh), 11px);
        }

        /* Tablets get larger controls without changing the game itself. */
        .tablet-device .mobile-controls {
          padding-right: max(24px, calc(env(safe-area-inset-right) + 12px));
          padding-bottom: max(18px, calc(env(safe-area-inset-bottom) + 10px));
          padding-left: max(24px, calc(env(safe-area-inset-left) + 12px));
        }

        .tablet-device .direction-button {
          width: clamp(78px, min(9.6vw, 17vh), 114px);
          height: clamp(78px, min(9.6vw, 17vh), 114px);
        }

        .tablet-device .jump-button {
          width: clamp(96px, min(11.6vw, 21vh), 138px);
          height: clamp(96px, min(11.6vw, 21vh), 138px);
        }

        /* Every overlay remains usable on short phones, tablets and desktop. */
        .touch-device .pause-overlay,
        .touch-device .dialog-overlay,
        .touch-device .finished-overlay {
          padding: max(10px, env(safe-area-inset-top))
            max(10px, env(safe-area-inset-right))
            max(10px, env(safe-area-inset-bottom))
            max(10px, env(safe-area-inset-left));
        }

        .touch-device .pause-card,
        .touch-device .dialog-card,
        .touch-device .finished-card {
          width: min(92vw, 700px);
          max-height: calc(
            100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom) -
              20px
          );
          overflow: auto;
          overscroll-behavior: contain;
        }

        .touch-device .dialog-actions {
          flex-wrap: wrap;
        }

        .touch-device .dialog-actions > * {
          flex: 1 1 140px;
        }

        /* Portrait is intentionally blocked by the rotate screen, but the
           blocker itself must still cover the entire visible display. */
        .touch-device .rotate-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          width: 100vw;
          width: 100dvw;
          height: 100vh;
          height: 100dvh;
          min-height: 0;
          padding: max(24px, env(safe-area-inset-top))
            max(20px, env(safe-area-inset-right))
            max(24px, env(safe-area-inset-bottom))
            max(20px, env(safe-area-inset-left));
        }

        .touch-device .rotate-overlay h2 {
          margin: 0;
          font-size: clamp(22px, 7vw, 46px);
        }

        .touch-device .rotate-overlay p {
          max-width: 560px;
          margin: 16px auto 0;
          font-size: clamp(11px, 2.7vw, 16px);
          line-height: 1.7;
        }

        .landscape-retry-button {
          margin: 22px auto 0;
          padding: 0 22px;
          color: #18243b;
          border: 0;
          border-radius: 10px;
          background: #8fe0bc;
          box-shadow: 0 6px 0 #4c9f7c;
          font-weight: 700;
        }

        .landscape-retry-button:active {
          box-shadow: 0 2px 0 #4c9f7c;
          transform: translateY(4px);
        }

        /* Landscape touch devices always occupy the whole viewport, including
           very wide phones and unusual tablet ratios. */
        @media (hover: none) and (pointer: coarse) and (orientation: landscape) {
          .touch-device,
          .touch-device .touch-game-shell {
            width: 100vw;
            width: 100dvw;
            height: 100vh;
            height: 100dvh;
          }

          .touch-device .menu-controls {
            bottom: max(3%, env(safe-area-inset-bottom));
          }
        }

        /* Short landscape screens such as small iPhones. */
        @media (hover: none) and (pointer: coarse) and (orientation: landscape) and (max-height: 540px) {
          .compact-landscape .back-button,
          .compact-landscape .pause-button {
            top: max(6px, env(safe-area-inset-top));
            min-width: 42px;
            min-height: 42px;
          }

          .compact-landscape .biome-badge {
            top: max(52px, calc(env(safe-area-inset-top) + 46px));
          }

          .compact-landscape .mobile-controls {
            min-height: 74px;
            padding-top: 6px;
            padding-right: max(10px, calc(env(safe-area-inset-right) + 6px));
            padding-bottom: max(7px, calc(env(safe-area-inset-bottom) + 5px));
            padding-left: max(10px, calc(env(safe-area-inset-left) + 6px));
          }

          .compact-landscape .direction-button {
            width: clamp(54px, 16vh, 72px);
            height: clamp(54px, 16vh, 72px);
            font-size: clamp(22px, 7vh, 31px);
          }

          .compact-landscape .jump-button {
            width: clamp(68px, 20vh, 90px);
            height: clamp(68px, 20vh, 90px);
          }

          .compact-landscape .jump-button span {
            font-size: clamp(27px, 9vh, 38px);
          }

          .compact-landscape .jump-button small {
            margin-top: 2px;
            font-size: 8px;
          }

          .compact-landscape .pause-card,
          .compact-landscape .dialog-card,
          .compact-landscape .finished-card {
            width: min(90vw, 680px);
            max-height: calc(100dvh - 12px);
            padding: 16px 20px;
          }

          .compact-landscape .pause-card {
            padding-top: 36px;
          }

          .compact-landscape .pause-card h2,
          .compact-landscape .dialog-card h2,
          .compact-landscape .finished-card h2 {
            font-size: clamp(22px, 7vh, 32px);
          }

          .compact-landscape .pause-progress,
          .compact-landscape .finished-stats {
            margin-top: 8px;
          }

          .compact-landscape .dialog-actions {
            margin-top: 10px;
          }

          .compact-landscape .dialog-actions > * {
            min-height: 42px;
          }
        }

        /* Desktop and non-touch screens keep the original 16:9 presentation,
           but fit safely on short or narrow browser windows. */
        @media (hover: hover) and (pointer: fine) {
          .pointer-device .game-shell {
            width: min(calc(100vw - 40px), 1280px);
            max-height: calc(100dvh - 40px);
          }
        }

        @media (hover: hover) and (pointer: fine) and (max-height: 760px) {
          .pointer-device {
            padding: 10px;
          }

          .pointer-device .game-shell {
            width: min(calc(100vw - 20px), calc((100dvh - 20px) * 1.7777778));
          }
        }

        /* Requested mobile-only fixes: bedroom fit + compact pause/finish dialogs. */
        .touch-device .bedroom-scene.bedroom-touch-fit {
          top: 0;
          right: auto;
          bottom: auto;
          left: 0;
          overflow: hidden;
        }

        @media (hover: none) and (pointer: coarse) and (orientation: landscape) {
          .touch-device .pause-overlay,
          .touch-device .finished-screen {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            padding: max(6px, env(safe-area-inset-top))
              max(8px, env(safe-area-inset-right))
              max(6px, env(safe-area-inset-bottom))
              max(8px, env(safe-area-inset-left));
          }

          .touch-device .pause-card,
          .touch-device .finished-card {
            width: min(78vw, 560px);
            max-height: calc(100dvh - 12px);
            padding: 14px 18px;
            overflow: hidden;
          }

          .touch-device .pause-card {
            padding-top: 31px;
          }

          .touch-device .pause-orb {
            top: -24px;
            width: 48px;
            height: 48px;
          }

          .touch-device .pause-card h2,
          .touch-device .finished-card h2 {
            margin-top: 4px;
            font-size: clamp(21px, 5.8vh, 30px);
            line-height: 1;
          }

          .touch-device .pause-card > p:not(.dialog-kicker),
          .touch-device
            .finished-card
            > p:not(.dialog-kicker, .finished-stars) {
            margin-top: 6px;
            font-size: clamp(9px, 2.6vh, 12px);
            line-height: 1.35;
          }

          .touch-device .dialog-kicker {
            font-size: clamp(8px, 2.1vh, 10px);
          }

          .touch-device .finished-stars {
            margin-bottom: 5px;
            font-size: clamp(18px, 4.8vh, 28px);
          }

          .touch-device .pause-progress,
          .touch-device .finished-stats {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 6px;
            margin-top: 8px;
          }

          .touch-device .pause-progress > div,
          .touch-device .finished-stats > div {
            min-width: 0;
            padding: 7px 5px;
          }

          .touch-device .pause-progress span,
          .touch-device .finished-stats span {
            font-size: clamp(7px, 1.9vh, 9px);
          }

          .touch-device .pause-progress strong,
          .touch-device .finished-stats strong {
            overflow: hidden;
            font-size: clamp(11px, 2.9vh, 16px);
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .touch-device .dialog-actions {
            flex-direction: row;
            flex-wrap: nowrap;
            gap: 7px;
            margin-top: 9px;
          }

          .touch-device .dialog-actions > * {
            flex: 1 1 0;
            min-width: 0 !important;
            min-height: 38px !important;
            height: 38px;
            padding: 0 8px !important;
            font-size: clamp(8px, 2.2vh, 10px);
            box-shadow: 0 4px 0 rgba(0, 0, 0, 0.25) !important;
          }
        }

        @media (hover: none) and (pointer: coarse) and (orientation: landscape) and (max-height: 390px) {
          .touch-device .pause-card,
          .touch-device .finished-card {
            width: min(82vw, 520px);
            padding: 10px 14px;
          }

          .touch-device .pause-card {
            padding-top: 27px;
          }

          .touch-device .pause-orb {
            top: -20px;
            width: 42px;
            height: 42px;
          }

          .touch-device .pause-card h2,
          .touch-device .finished-card h2 {
            font-size: clamp(18px, 5.4vh, 24px);
          }

          .touch-device .pause-progress,
          .touch-device .finished-stats {
            margin-top: 6px;
          }

          .touch-device .dialog-actions {
            margin-top: 7px;
          }

          .touch-device .dialog-actions > * {
            min-height: 34px !important;
            height: 34px;
          }
        }

        /* Requested fixes only: bedroom mobile layout/movement, mobile pause layout,
           and matching finish-screen action buttons. */
        .walking-home-player.outdoor-sprite {
          transition: none;
          will-change: left;
        }

        .finished-equal-action {
          width: 154px;
          min-width: 154px;
          min-height: 51px;
          padding: 0 23px;
          font: inherit;
          font-weight: 900;
          line-height: 1;
          text-align: center;
          text-decoration: none;
        }

        .touch-device .bedroom-scene.bedroom-touch-fit {
          right: auto;
          bottom: auto;
          overflow: hidden;
        }

        @media (hover: none) and (pointer: coarse) and (orientation: landscape) {
          .touch-device .pause-overlay {
            overflow: hidden;
            padding: max(5px, env(safe-area-inset-top))
              max(8px, env(safe-area-inset-right))
              max(5px, env(safe-area-inset-bottom))
              max(8px, env(safe-area-inset-left));
          }

          .touch-device .pause-card {
            display: flex;
            width: min(88vw, 610px);
            max-height: calc(100dvh - 10px);
            flex-direction: column;
            align-items: stretch;
            justify-content: center;
            padding: 8px 14px 10px;
            overflow: visible;
            border-width: 2px;
          }

          .touch-device .pause-orb {
            position: relative;
            top: auto;
            left: auto;
            width: 38px;
            height: 38px;
            flex: 0 0 38px;
            margin: 0 auto 4px;
            border-width: 3px;
            border-radius: 12px;
            box-shadow: 0 4px 0 #385a9a;
            transform: rotate(45deg);
          }

          .touch-device .pause-orb .play-triangle.large {
            transform: rotate(-45deg) scale(0.72);
          }

          .touch-device .pause-card .dialog-kicker {
            margin: 1px 0 3px;
            font-size: clamp(7px, 2vh, 9px);
            line-height: 1.1;
          }

          .touch-device .pause-card h2 {
            margin: 0;
            font-size: clamp(18px, 6vh, 28px);
            line-height: 0.95;
          }

          .touch-device .pause-card > p:not(.dialog-kicker) {
            max-width: 470px;
            margin: 4px auto 0;
            font-size: clamp(8px, 2.4vh, 11px);
            line-height: 1.25;
          }

          .touch-device .pause-progress {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 5px;
            margin-top: 6px;
          }

          .touch-device .pause-progress div {
            min-width: 0;
            padding: 5px 4px;
          }

          .touch-device .pause-progress span {
            font-size: clamp(6px, 1.7vh, 8px);
          }

          .touch-device .pause-progress strong {
            margin-top: 2px;
            overflow: hidden;
            font-size: clamp(9px, 2.5vh, 12px);
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .touch-device .pause-card .dialog-actions {
            flex-direction: row;
            flex-wrap: nowrap;
            gap: 6px;
            margin-top: 7px;
          }

          .touch-device .pause-card .dialog-actions > * {
            min-width: 0 !important;
            min-height: 34px !important;
            height: 34px;
            flex: 1 1 0;
            padding: 0 7px !important;
            font-size: clamp(7px, 2vh, 9px);
          }

          .touch-device .finished-card .dialog-actions .finished-equal-action {
            width: auto;
            min-width: 0 !important;
          }
        }

        @media (hover: none) and (pointer: coarse) and (orientation: landscape) and (max-height: 360px) {
          .touch-device .pause-card {
            width: min(91vw, 600px);
            padding: 5px 11px 7px;
          }

          .touch-device .pause-orb {
            width: 30px;
            height: 30px;
            flex-basis: 30px;
            margin-bottom: 2px;
          }

          .touch-device .pause-card h2 {
            font-size: clamp(16px, 5.4vh, 21px);
          }

          .touch-device .pause-card > p:not(.dialog-kicker) {
            margin-top: 2px;
            font-size: clamp(7px, 2.1vh, 9px);
          }

          .touch-device .pause-progress {
            margin-top: 4px;
          }

          .touch-device .pause-card .dialog-actions {
            margin-top: 5px;
          }

          .touch-device .pause-card .dialog-actions > * {
            min-height: 30px !important;
            height: 30px;
          }
        }

        /* Final requested UI fixes only: bedroom composition, pause dialog,
           and equal finish actions. Gameplay and movement are untouched. */

        /* Bedroom: keep the original 960x540 stage and movement coordinates,
           but make the room read as one intentional composition on every viewport. */
        .bedroom-scene {
          box-shadow: 0 0 0 200vmax #aeb0d4;
        }

        .bedroom-scene .bedroom-poster,
        .bedroom-scene .family-gallery,
        .bedroom-scene .bedroom-cabinet,
        .bedroom-scene .bedroom-mirror,
        .bedroom-scene .small-round-window,
        .bedroom-scene .toy-chest {
          display: none;
        }

        .bedroom-scene .bedroom-window-large {
          top: 72px;
          left: 62px;
          width: 196px;
          height: 146px;
        }

        .bedroom-scene .wall-shelf {
          top: 70px;
          left: 322px;
          width: 205px;
        }

        .bedroom-scene .computer-desk {
          left: 286px;
          bottom: 72px;
          width: 190px;
        }

        .bedroom-scene .aquarium {
          top: 105px;
          right: 72px;
          width: 190px;
          height: 150px;
        }

        .bedroom-scene .bedside-table {
          right: 338px;
          bottom: 72px;
        }

        .bedroom-scene .bedroom-rug {
          right: 42px;
          bottom: 25px;
          width: 390px;
          height: 78px;
        }

        .bedroom-scene .bedroom-bed-right {
          right: 18px;
          bottom: 52px;
          width: 350px;
          transform: scale(0.9);
          transform-origin: right bottom;
        }

        .bedroom-scene .floor-plant {
          right: 410px;
          bottom: 72px;
        }

        .bedroom-scene .bedroom-clock {
          top: 172px;
          left: 548px;
        }

        .bedroom-scene .finish-sign {
          top: 26px;
          right: 30px;
          bottom: auto;
          width: 280px;
          padding: 11px 15px;
          gap: 4px;
          border-radius: 8px;
          background: rgba(18, 20, 48, 0.9);
        }

        .bedroom-scene .finish-sign span {
          font-size: 11px;
        }

        .bedroom-scene .finish-sign small,
        .bedroom-scene .finish-sign em {
          font-size: 8px;
          line-height: 1.35;
        }

        /* Pause: the dialog owns the screen while paused. No floating HUD button
           is rendered over it, and every part stays inside the card. */
        .pause-overlay {
          padding: clamp(12px, 2.4vw, 24px);
          overflow: auto;
        }

        .pause-card {
          display: flex;
          width: min(620px, calc(100% - 12px));
          max-height: calc(100% - 8px);
          flex-direction: column;
          justify-content: center;
          padding: clamp(18px, 3.2vw, 34px);
          overflow: hidden;
        }

        .pause-orb {
          position: relative;
          top: auto;
          left: auto;
          width: clamp(48px, 8vw, 66px);
          height: clamp(48px, 8vw, 66px);
          margin: 0 auto 12px;
          border-width: 4px;
          border-radius: 20px;
          transform: rotate(45deg);
          flex: 0 0 auto;
        }

        .pause-card h2 {
          font-size: clamp(28px, 5vw, 44px);
        }

        .pause-card > p:not(.dialog-kicker) {
          margin-top: 12px;
        }

        .pause-progress {
          margin-top: 18px;
        }

        .pause-card .dialog-actions {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          width: 100%;
          margin-top: 18px;
        }

        .pause-card .dialog-actions > * {
          width: 100%;
          min-width: 0 !important;
          min-height: 48px;
          padding: 0 12px !important;
          font: inherit;
          font-weight: 900;
          text-decoration: none;
        }

        .pause-card .pause-equal-action,
        .touch-device .pause-card .pause-equal-action {
          --pause-action-bg: #67e8a5;
          --pause-action-shadow: #29966a;
          --pause-action-text: #12382a;
          display: inline-flex;
          width: 100% !important;
          min-width: 0 !important;
          min-height: 48px;
          height: 48px;
          align-items: center;
          justify-content: center;
          margin: 0;
          padding: 0 12px !important;
          color: var(--pause-action-text) !important;
          border: 0 !important;
          border-radius: 8px;
          background: var(--pause-action-bg) !important;
          box-shadow: 0 6px 0 var(--pause-action-shadow) !important;
          font: inherit;
          font-weight: 900;
          line-height: 1;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          transition:
            transform 120ms ease,
            filter 120ms ease,
            box-shadow 120ms ease;
        }

        .pause-card .pause-action-resume,
        .touch-device .pause-card .pause-action-resume {
          --pause-action-bg: #67e8a5;
          --pause-action-shadow: #29966a;
          --pause-action-text: #12382a;
        }

        .pause-card .pause-action-restart,
        .touch-device .pause-card .pause-action-restart {
          --pause-action-bg: #ffd166;
          --pause-action-shadow: #c58b20;
          --pause-action-text: #49320a;
        }

        .pause-card .pause-action-playground,
        .touch-device .pause-card .pause-action-playground {
          --pause-action-bg: #70b7ff;
          --pause-action-shadow: #397fc4;
          --pause-action-text: #102f55;
        }

        .pause-card .pause-equal-action:hover {
          filter: brightness(1.08);
          transform: translateY(-2px);
        }

        .pause-card .pause-equal-action:active {
          box-shadow: 0 2px 0 var(--pause-action-shadow) !important;
          transform: translateY(4px);
        }

        .pause-card .pause-equal-action:focus-visible {
          outline: 3px solid rgba(255, 255, 255, 0.9);
          outline-offset: 4px;
        }

        /* Finish: PLAY AGAIN and PLAYGROUND are deliberately the exact same
           button component visually on desktop and touch layouts. */
        .finished-card .dialog-actions {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          width: min(430px, 100%);
          margin-right: auto;
          margin-left: auto;
        }

        .finished-card .finished-equal-action,
        .touch-device .finished-card .finished-equal-action {
          --finish-action-bg: #8de4b6;
          --finish-action-shadow: #3f9879;
          --finish-action-text: #18362f;
          display: inline-flex;
          width: 100% !important;
          min-width: 0 !important;
          min-height: 51px !important;
          height: 51px;
          align-items: center;
          justify-content: center;
          margin: 0;
          padding: 0 18px !important;
          color: var(--finish-action-text) !important;
          border: 0 !important;
          border-radius: 8px !important;
          background: var(--finish-action-bg) !important;
          box-shadow: 0 6px 0 var(--finish-action-shadow) !important;
          font: inherit;
          font-weight: 900;
          line-height: 1;
          text-align: center;
          text-decoration: none !important;
          cursor: pointer;
        }

        .finished-card .finished-action-again,
        .touch-device .finished-card .finished-action-again {
          --finish-action-bg: #8de4b6;
          --finish-action-shadow: #3f9879;
          --finish-action-text: #18362f;
        }

        .finished-card .finished-action-playground,
        .touch-device .finished-card .finished-action-playground {
          --finish-action-bg: #70b7ff;
          --finish-action-shadow: #397fc4;
          --finish-action-text: #102f55;
        }

        .finished-card .finished-equal-action:hover {
          filter: brightness(1.08);
          transform: translateY(-2px);
        }

        .finished-card .finished-equal-action:active {
          box-shadow: 0 2px 0 var(--finish-action-shadow) !important;
          transform: translateY(4px);
        }

        /* Final rebuilt finish buttons: both actions are real BUTTON elements. */
        .finished-card .finished-action-row {
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 14px !important;
          width: min(430px, 100%) !important;
          margin: 28px auto 0 !important;
        }

        .finished-card .finished-action-row > .finished-action-button {
          appearance: none !important;
          -webkit-appearance: none !important;
          display: flex !important;
          width: 100% !important;
          min-width: 0 !important;
          height: 52px !important;
          min-height: 52px !important;
          align-items: center !important;
          justify-content: center !important;
          margin: 0 !important;
          padding: 0 16px !important;
          border: 0 !important;
          border-radius: 8px !important;
          font-family: var(--font-pixel), monospace !important;
          font-size: 15px !important;
          font-weight: 800 !important;
          line-height: 1 !important;
          letter-spacing: 0.02em !important;
          text-align: center !important;
          text-decoration: none !important;
          cursor: pointer !important;
          transform: translateY(0);
          transition:
            transform 120ms ease,
            filter 120ms ease,
            box-shadow 120ms ease;
        }

        .finished-card .finished-action-row > .finished-action-button:hover {
          filter: brightness(1.07);
          transform: translateY(-2px);
        }

        .finished-card .finished-action-row > .finished-action-button:active {
          transform: translateY(4px);
          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.35) !important;
        }

        @media (hover: none) and (pointer: coarse) {
          .touch-device .finished-card .finished-action-row {
            gap: 10px !important;
            width: min(470px, 100%) !important;
          }

          .touch-device
            .finished-card
            .finished-action-row
            > .finished-action-button {
            height: 54px !important;
            min-height: 54px !important;
            font-size: 16px !important;
          }
        }

        @media (hover: none) and (pointer: coarse) and (orientation: landscape) {
          .touch-device .pause-overlay {
            padding: max(6px, env(safe-area-inset-top))
              max(8px, env(safe-area-inset-right))
              max(6px, env(safe-area-inset-bottom))
              max(8px, env(safe-area-inset-left));
          }

          .touch-device .pause-card {
            width: min(78vw, 590px);
            max-height: calc(100dvh - 12px);
            padding: 10px 16px 12px;
          }

          .touch-device .pause-orb {
            width: 38px;
            height: 38px;
            margin-bottom: 5px;
            border-width: 3px;
            border-radius: 12px;
            box-shadow: 0 4px 0 #385a9a;
          }

          .touch-device .pause-card .dialog-kicker {
            margin: 0 0 3px;
            font-size: clamp(7px, 1.9vh, 9px);
          }

          .touch-device .pause-card h2 {
            font-size: clamp(19px, 5.4vh, 27px);
          }

          .touch-device .pause-card > p:not(.dialog-kicker) {
            margin-top: 4px;
            font-size: clamp(8px, 2.2vh, 10px);
            line-height: 1.25;
          }

          .touch-device .pause-progress {
            gap: 5px;
            margin-top: 7px;
          }

          .touch-device .pause-progress div {
            padding: 5px 4px;
          }

          .touch-device .pause-card .dialog-actions {
            gap: 6px;
            margin-top: 7px;
          }

          .touch-device .pause-card .dialog-actions > * {
            min-height: 32px !important;
            height: 32px;
            padding: 0 6px !important;
            font-size: clamp(7px, 1.9vh, 9px);
          }

          .touch-device .pause-card .pause-equal-action {
            min-height: 32px !important;
            height: 32px;
            border-radius: 6px;
            box-shadow: 0 4px 0 var(--pause-action-shadow) !important;
          }

          .touch-device .finished-card .dialog-actions {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
            width: min(390px, 100%);
          }

          .touch-device .finished-card .finished-equal-action {
            min-height: 38px !important;
            height: 38px;
            font-size: clamp(8px, 2.2vh, 10px);
          }
        }

        /* Pause actions v2: all three controls are intentionally the same
           element type and geometry. Only their inline colours differ. */
        .pause-card .pause-actions-v2 {
          display: grid !important;
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          align-items: stretch !important;
          gap: 10px !important;
          width: 100% !important;
        }

        .pause-card .pause-actions-v2 > .pause-equal-action,
        .touch-device .pause-card .pause-actions-v2 > .pause-equal-action {
          appearance: none !important;
          -webkit-appearance: none !important;
          display: inline-flex !important;
          width: 100% !important;
          min-width: 0 !important;
          min-height: 48px !important;
          height: 48px !important;
          flex: none !important;
          align-items: center !important;
          justify-content: center !important;
          margin: 0 !important;
          padding: 0 12px !important;
          border: 0 !important;
          border-radius: 8px !important;
          font: inherit !important;
          font-weight: 900 !important;
          font-size: 16px !important;
          letter-spacing: 0.04em !important;
          line-height: 1 !important;
          text-align: center !important;
          text-decoration: none !important;
          cursor: pointer !important;
        }

        @media (hover: none) and (pointer: coarse) and (orientation: landscape) {
          .touch-device .pause-card .pause-actions-v2 {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 6px !important;
          }

          .touch-device .pause-card .pause-actions-v2 > .pause-equal-action {
            min-height: 32px !important;
            height: 32px !important;
            padding: 0 6px !important;
            border-radius: 6px !important;
            font-size: clamp(11px, 2.6vh, 14px) !important;
          }
        }

        /* Final pause alignment fix: keep the diamond, play icon and labels
           optically centered on every viewport. */
        .pause-card {
          align-items: center;
          text-align: center;
        }

        .pause-card > .dialog-kicker,
        .pause-card > h2,
        .pause-card > p:not(.dialog-kicker),
        .pause-card > .pause-progress,
        .pause-card > .pause-actions-v2 {
          width: 100%;
          text-align: center;
        }

        .pause-orb {
          align-self: center;
          display: grid;
          place-items: center;
          padding: 0;
        }

        .pause-orb .play-triangle,
        .pause-orb .play-triangle.large,
        .touch-device .pause-orb .play-triangle.large {
          width: 28px;
          height: 32px;
          margin: 0 0 0 3px;
          border: 0;
          background: #ffffff;
          clip-path: polygon(0 0, 100% 50%, 0 100%);
          filter: drop-shadow(2px 2px 0 rgba(0, 0, 0, 0.18));
          transform: rotate(-45deg);
          transform-origin: 50% 50%;
        }

        .pause-card .dialog-kicker {
          margin-left: 0;
          margin-right: 0;
          letter-spacing: 0.14em;
        }

        .pause-card h2 {
          margin-left: 0;
          margin-right: 0;
          letter-spacing: -0.025em;
          text-indent: 0;
        }

        @media (hover: none) and (pointer: coarse) and (orientation: landscape) {
          .touch-device .pause-orb .play-triangle.large {
            width: 18px;
            height: 21px;
            margin-left: 2px;
          }

          .touch-device .pause-card .dialog-kicker,
          .touch-device .pause-card h2 {
            width: 100%;
            text-align: center;
          }
        }

        /* Bedroom unified stage: desktop and mobile use the exact same
           960x540 room composition. Device-specific rules must not resize or
           reposition individual furniture; only the whole stage is scaled. */
        .bedroom-scene.bedroom-unified-stage {
          position: absolute !important;
          inset: auto !important;
          z-index: 15;
          overflow: hidden !important;
          flex: none !important;
          min-width: 960px !important;
          max-width: none !important;
          min-height: 540px !important;
          max-height: none !important;
          margin: 0 !important;
          padding: 0 !important;
          border: 0 !important;
          border-radius: 0 !important;
          box-sizing: border-box !important;
        }

        /* On touch devices keep the controls above the scaled room instead of
           allowing any mobile layout rule to alter the room itself. */
        .touch-device .bedroom-scene.bedroom-unified-stage {
          width: 960px !important;
          height: 540px !important;
          min-width: 960px !important;
          min-height: 540px !important;
          overflow: hidden !important;
        }

        /* Home interior redesign — reference-inspired pixel furniture.
           Desktop and touch still share the exact same 960x540 stage; the
           whole room scales as one unit, so furniture never reflows. */
        .bedroom-scene.bedroom-unified-stage {
          background: #252849 !important;
          box-shadow: 0 0 0 200vmax #191b36 !important;
        }

        .bedroom-scene.bedroom-unified-stage .bedroom-wallpaper {
          display: block !important;
          position: absolute !important;
          inset: 0 !important;
          width: 100% !important;
          height: 100% !important;
          background: linear-gradient(
            to bottom,
            #30345d 0 67%,
            #222746 67% 69%,
            #5c4639 69% 100%
          ) !important;
          opacity: 1 !important;
        }

        .bedroom-scene.bedroom-unified-stage .bedroom-wallpaper::before {
          content: "";
          position: absolute;
          inset: 0 0 31% 0;
          background:
            linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.025) 1px,
                transparent 1px
              )
              0 0 / 48px 48px,
            linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px) 0
              0 / 48px 48px;
          pointer-events: none;
        }

        .bedroom-scene.bedroom-unified-stage .bedroom-wallpaper::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 31%;
          background: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.025) 0 2px,
            transparent 2px 82px
          );
          pointer-events: none;
        }

        /* Hide the previous furniture set. The player, finish sign and room
           behaviour remain untouched. */
        .bedroom-scene.bedroom-unified-stage .bedroom-fairy-lights,
        .bedroom-scene.bedroom-unified-stage .bedroom-poster,
        .bedroom-scene.bedroom-unified-stage .family-gallery,
        .bedroom-scene.bedroom-unified-stage .bedroom-clock,
        .bedroom-scene.bedroom-unified-stage .bedroom-window-large,
        .bedroom-scene.bedroom-unified-stage .wall-shelf,
        .bedroom-scene.bedroom-unified-stage .computer-desk,
        .bedroom-scene.bedroom-unified-stage .bedroom-cabinet,
        .bedroom-scene.bedroom-unified-stage .small-round-window,
        .bedroom-scene.bedroom-unified-stage .bedroom-mirror,
        .bedroom-scene.bedroom-unified-stage .aquarium,
        .bedroom-scene.bedroom-unified-stage .floor-plant,
        .bedroom-scene.bedroom-unified-stage .toy-chest,
        .bedroom-scene.bedroom-unified-stage .bedside-table,
        .bedroom-scene.bedroom-unified-stage .bedroom-rug,
        .bedroom-scene.bedroom-unified-stage .pixel-bed {
          display: none !important;
        }

        /* The redesigned room is the only bedroom furniture set. Legacy room
           decorations are intentionally disabled so mobile and desktop cannot
           end up with two layouts layered on top of each other. */
        .bedroom-scene.bedroom-unified-stage
          > :is(
            .bedroom-fairy-lights,
            .bedroom-poster,
            .family-gallery,
            .bedroom-clock,
            .bedroom-window,
            .wall-shelf,
            .computer-desk,
            .bedroom-cabinet,
            .small-round-window,
            .bedroom-mirror,
            .aquarium,
            .floor-plant,
            .toy-chest,
            .bedside-table,
            .bedroom-rug,
            .pixel-bed
          ) {
          display: none !important;
        }
        .home-reference-room {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          image-rendering: pixelated;
        }

        .home-reference-room *,
        .home-reference-room *::before,
        .home-reference-room *::after {
          box-sizing: border-box;
        }

        .ref-wall-trim {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 165px;
          height: 10px;
          background: #14172f;
          box-shadow: 0 5px 0 #46466f;
        }

        /* Window + curtains: centered like the supplied reference, but with
           the original night palette. */
        .ref-window {
          position: absolute;
          left: 330px;
          top: 50px;
          width: 266px;
          height: 166px;
          border: 10px solid #4c3e35;
          background: #171b38;
          box-shadow:
            0 0 0 7px #7b694e,
            0 8px 0 rgba(10, 12, 28, 0.35);
        }

        .ref-window-sky {
          position: absolute;
          inset: 0;
          background: linear-gradient(#1d3154, #44708a);
        }

        .ref-window-moon {
          position: absolute;
          top: 24px;
          right: 36px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f4e4ad;
          box-shadow: 0 0 18px rgba(244, 228, 173, 0.28);
        }

        .ref-window-star {
          position: absolute;
          width: 5px;
          height: 5px;
          background: #d9eff5;
          box-shadow:
            12px 19px 0 #d9eff5,
            42px 7px 0 #d9eff5;
        }

        .ref-window-star-a {
          left: 36px;
          top: 30px;
        }
        .ref-window-star-b {
          left: 105px;
          top: 72px;
          transform: scale(0.75);
        }

        .ref-window-frame-v {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 8px;
          transform: translateX(-50%);
          background: #4c3e35;
        }

        .ref-window-frame-h {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          height: 7px;
          transform: translateY(-50%);
          background: #4c3e35;
        }

        .ref-curtain-rod {
          position: absolute;
          left: -34px;
          right: -34px;
          top: -28px;
          height: 8px;
          background: #29283f;
          box-shadow: 0 4px 0 #17182d;
        }

        .ref-curtain {
          position: absolute;
          top: -15px;
          width: 63px;
          height: 145px;
          background: #65425a;
          filter: drop-shadow(5px 6px 0 rgba(12, 14, 31, 0.3));
        }

        .ref-curtain::before {
          content: "";
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.06) 0 8px,
            transparent 8px 20px
          );
        }

        .ref-curtain-left {
          left: -82px;
          clip-path: polygon(
            0 0,
            100% 0,
            74% 18%,
            78% 35%,
            52% 48%,
            66% 65%,
            45% 79%,
            76% 100%,
            18% 100%,
            0 85%
          );
        }

        .ref-curtain-right {
          right: -82px;
          clip-path: polygon(
            0 0,
            100% 0,
            100% 85%,
            82% 100%,
            24% 100%,
            55% 79%,
            34% 65%,
            48% 48%,
            22% 35%,
            26% 18%
          );
        }

        /* Reference-style sofa, kept on the right so reaching it still ends
           the journey exactly where the original bed was. */
        .ref-sofa {
          position: absolute;
          right: 38px;
          bottom: 76px;
          width: 330px;
          height: 154px;
        }

        .ref-sofa-back {
          position: absolute;
          left: 42px;
          right: 42px;
          top: 8px;
          height: 104px;
          border: 8px solid #38293d;
          border-bottom: 0;
          border-radius: 36px 36px 8px 8px;
          background: #71465f;
          box-shadow: inset 0 -18px 0 #5b3851;
        }

        .ref-sofa-seat {
          position: absolute;
          left: 37px;
          right: 37px;
          bottom: 27px;
          height: 63px;
          border: 8px solid #38293d;
          background: #87536d;
          box-shadow: inset 0 12px 0 rgba(255, 255, 255, 0.055);
        }

        .ref-sofa-arm {
          position: absolute;
          bottom: 29px;
          width: 55px;
          height: 86px;
          border: 8px solid #38293d;
          background: #684058;
        }

        .ref-sofa-arm-left {
          left: 0;
        }
        .ref-sofa-arm-right {
          right: 0;
        }

        .ref-sofa-cushion {
          position: absolute;
          bottom: 49px;
          width: 96px;
          height: 54px;
          border: 5px solid #543347;
          background: #9a6178;
          box-shadow: inset 0 -8px 0 #7f4c67;
        }

        .ref-cushion-left {
          left: 66px;
          transform: rotate(-2deg);
        }
        .ref-cushion-right {
          right: 66px;
          transform: rotate(2deg);
        }

        .ref-sofa-leg {
          position: absolute;
          bottom: 10px;
          width: 18px;
          height: 18px;
          background: #27243a;
          box-shadow: 0 7px 0 #111326;
        }

        .ref-sofa-leg-left {
          left: 54px;
        }
        .ref-sofa-leg-right {
          right: 54px;
        }

        /* Side table and warm lamp, matching the reference silhouette. */
        .ref-side-table {
          position: absolute;
          right: 382px;
          bottom: 78px;
          width: 76px;
          height: 128px;
        }

        .ref-side-table::before {
          content: "";
          position: absolute;
          left: 4px;
          right: 4px;
          bottom: 63px;
          height: 12px;
          background: #7c664c;
          box-shadow: 0 5px 0 #493c35;
        }

        .ref-side-table::after {
          content: "";
          position: absolute;
          left: 12px;
          bottom: 0;
          width: 9px;
          height: 66px;
          background: #6b543f;
          box-shadow: 43px 0 0 #6b543f;
        }

        .ref-lamp-shade {
          position: absolute;
          left: 13px;
          top: 0;
          width: 51px;
          height: 41px;
          background: #e8a970;
          clip-path: polygon(22% 0, 78% 0, 100% 100%, 0 100%);
          box-shadow: inset 0 -9px 0 #d18465;
        }

        .ref-lamp-shade::before {
          content: "";
          position: absolute;
          left: 14px;
          top: -11px;
          width: 22px;
          height: 18px;
          background: #f1c188;
          clip-path: polygon(50% 0, 100% 100%, 0 100%);
        }

        .ref-lamp-stem {
          position: absolute;
          left: 36px;
          top: 41px;
          width: 7px;
          height: 23px;
          background: #d1aa71;
        }

        .ref-lamp-base {
          position: absolute;
          left: 23px;
          top: 59px;
          width: 33px;
          height: 8px;
          background: #d1aa71;
        }

        /* Dresser under the window. */
        .ref-dresser {
          position: absolute;
          left: 356px;
          top: 244px;
          width: 214px;
          height: 114px;
          border: 7px solid #3f3b42;
          background: #857452;
          box-shadow: 0 7px 0 rgba(13, 15, 31, 0.28);
        }

        .ref-dresser-top {
          position: absolute;
          left: -15px;
          right: -15px;
          top: -16px;
          height: 10px;
          background: #b39c69;
          box-shadow: 0 5px 0 #4d453d;
        }

        .ref-drawer {
          position: absolute;
          left: 10px;
          right: 10px;
          height: 42px;
          border-bottom: 5px solid #5a503e;
          background: #9b895d;
        }

        .ref-drawer-one {
          top: 7px;
        }
        .ref-drawer-two {
          bottom: 5px;
          border-bottom: 0;
        }

        .ref-drawer i {
          position: absolute;
          left: 50%;
          top: 14px;
          width: 43px;
          height: 7px;
          transform: translateX(-50%);
          background: #433b33;
        }

        /* Upper shelves, books, tiny framed art and plant — all directly
           inspired by the reference composition. */
        .ref-floating-shelf {
          position: absolute;
          height: 10px;
          background: #8d7652;
          box-shadow: 0 6px 0 #443a35;
        }

        .ref-floating-shelf-top {
          right: 84px;
          top: 94px;
          width: 190px;
        }

        .ref-floating-shelf-small {
          right: 42px;
          top: 177px;
          width: 160px;
        }

        .ref-book {
          position: absolute;
          bottom: 10px;
          width: 18px;
          box-shadow: inset -5px 0 0 rgba(0, 0, 0, 0.17);
        }

        .ref-book-a {
          left: 12px;
          height: 40px;
          background: #4cc5a8;
        }
        .ref-book-b {
          left: 33px;
          height: 59px;
          background: #5a77d7;
        }
        .ref-book-c {
          left: 56px;
          height: 45px;
          background: #d96b5b;
        }
        .ref-book-d {
          left: 84px;
          height: 25px;
          width: 52px;
          background: #459178;
        }

        .ref-small-plant {
          position: absolute;
          right: 11px;
          bottom: 10px;
          width: 32px;
          height: 22px;
          background: #bd744d;
        }

        .ref-small-plant i {
          position: absolute;
          left: 12px;
          bottom: 20px;
          width: 10px;
          height: 29px;
          background: #4aa66f;
          box-shadow:
            -9px -8px 0 #5abb79,
            9px -14px 0 #3e8e62;
        }

        .ref-photo-frame {
          position: absolute;
          left: 12px;
          bottom: 10px;
          width: 48px;
          height: 43px;
          border: 7px solid #4c4039;
          background: #223858;
        }

        .ref-photo-frame i,
        .ref-photo-frame b {
          position: absolute;
          width: 9px;
          height: 9px;
          background: #f0ca68;
        }

        .ref-photo-frame i {
          left: 6px;
          top: 7px;
        }
        .ref-photo-frame b {
          right: 6px;
          top: 15px;
          background: #6dd7b1;
        }

        .ref-flower-pot {
          position: absolute;
          right: 18px;
          bottom: 10px;
          width: 32px;
          height: 26px;
          background: #c77f43;
        }

        .ref-flower-pot i {
          position: absolute;
          left: 13px;
          bottom: 25px;
          width: 7px;
          height: 38px;
          background: #53a267;
        }

        .ref-flower-pot b {
          position: absolute;
          left: 2px;
          bottom: 53px;
          width: 29px;
          height: 26px;
          background: #cf6b76;
          clip-path: polygon(
            50% 0,
            65% 26%,
            100% 30%,
            76% 55%,
            82% 100%,
            50% 76%,
            18% 100%,
            24% 55%,
            0 30%,
            35% 26%
          );
        }

        /* TV console uses teal panels to preserve the existing game's palette. */
        .ref-tv-console {
          position: absolute;
          left: 38px;
          bottom: 72px;
          width: 286px;
          height: 143px;
          border: 7px solid #3e3b42;
          background: #645442;
          box-shadow: 0 8px 0 rgba(13, 15, 31, 0.28);
        }

        .ref-console-top {
          position: absolute;
          left: -10px;
          right: -10px;
          top: -10px;
          height: 10px;
          background: #9b825b;
        }

        .ref-console-door {
          position: absolute;
          top: 12px;
          bottom: 8px;
          width: 82px;
          border: 6px solid #4a4544;
          background: #299b9f;
          box-shadow: inset 12px -12px 0 #217b85;
        }

        .ref-console-door-left {
          left: 9px;
        }
        .ref-console-door-right {
          right: 9px;
        }

        .ref-console-drawer {
          position: absolute;
          left: 101px;
          width: 72px;
          height: 42px;
          background: #76614b;
          border-bottom: 5px solid #4c4039;
        }

        .ref-console-drawer-one {
          top: 12px;
        }
        .ref-console-drawer-two {
          bottom: 9px;
          border-bottom: 0;
        }

        .ref-console-drawer i {
          position: absolute;
          left: 50%;
          top: 13px;
          width: 26px;
          height: 7px;
          transform: translateX(-50%);
          background: #1f1d29;
        }

        .ref-tv {
          position: absolute;
          left: 70px;
          top: -98px;
          width: 146px;
          height: 86px;
        }

        .ref-tv-screen {
          position: absolute;
          inset: 0 0 20px 0;
          border: 8px solid #34343b;
          background: #c7d3cc;
          box-shadow: inset 0 0 0 5px #8aa39d;
        }

        .ref-tv-stand {
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 66px;
          height: 10px;
          transform: translateX(-50%);
          background: #34343b;
          box-shadow: 0 -15px 0 -2px #34343b;
        }

        .ref-floor-rug {
          position: absolute;
          left: 338px;
          bottom: 31px;
          width: 265px;
          height: 72px;
          border: 7px solid #3d3350;
          border-radius: 45%;
          background: #4b6b78;
          box-shadow: inset 0 0 0 8px #365661;
          opacity: 0.92;
        }

        /* Keep the interactive player above the new furniture and visually on
           the same floor line on every device. */
        .bedroom-scene.bedroom-unified-stage .walking-home-player {
          z-index: 8 !important;
          bottom: 48px !important;
        }

        .bedroom-scene.bedroom-unified-stage .finish-sign {
          z-index: 9;
          top: 24px !important;
          right: 26px !important;
          width: 274px !important;
          padding: 10px 14px !important;
          border: 4px solid #545785 !important;
          border-radius: 4px !important;
          background: rgba(18, 20, 48, 0.94) !important;
          box-shadow: 6px 6px 0 rgba(9, 11, 26, 0.35);
        }

        /* No furniture-specific responsive rules on purpose. Both desktop and
           phone use these exact coordinates; bedroomScale handles everything. */
        .touch-device
          .bedroom-scene.bedroom-unified-stage
          .home-reference-room {
          display: block !important;
        }

        /* Bedroom layout rebuild: this block intentionally neutralizes all
           older bedroom positioning/scaling rules above. The viewport fills
           the game shell; the fixed 960x540 room is centered and scaled once. */
        .bedroom-viewport {
          position: absolute;
          inset: 0;
          z-index: 15;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          /* Extend the room visually on very-wide screens instead of showing
             black bars or zooming the 960x540 room. */
          background:
            linear-gradient(
              to bottom,
              transparent 0 72.5%,
              rgba(16, 18, 38, 0.34) 72.5% 73.2%,
              transparent 73.2%
            ),
            linear-gradient(to bottom, #343961 0 73%, #6a5142 73% 100%);
          pointer-events: auto;
        }

        .bedroom-viewport .bedroom-scene.bedroom-unified-stage,
        .touch-device .bedroom-viewport .bedroom-scene.bedroom-unified-stage,
        .pointer-device .bedroom-viewport .bedroom-scene.bedroom-unified-stage {
          position: relative !important;
          inset: auto !important;
          left: auto !important;
          top: auto !important;
          right: auto !important;
          bottom: auto !important;
          flex: 0 0 960px !important;
          width: 960px !important;
          height: 540px !important;
          min-width: 960px !important;
          max-width: 960px !important;
          min-height: 540px !important;
          max-height: 540px !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
          border: 0 !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          background: #252849 !important;
        }

        .bedroom-viewport .bedroom-scene.bedroom-unified-stage::before,
        .bedroom-viewport .bedroom-scene.bedroom-unified-stage::after {
          content: none !important;
          display: none !important;
        }

        .bedroom-viewport .bedroom-wallpaper {
          position: absolute !important;
          inset: 0 !important;
          width: 960px !important;
          height: 540px !important;
        }

        .bedroom-viewport .home-reference-room {
          position: absolute !important;
          inset: 0 !important;
          width: 960px !important;
          height: 540px !important;
        }

        .bedroom-viewport .walking-home-player {
          position: absolute !important;
        }

        .touch-device .bedroom-viewport {
          width: 100% !important;
          height: 100% !important;
          min-width: 0 !important;
          min-height: 0 !important;
        }

        /* Furniture scale pass — keep the stable 960x540 room layout and
           make the furniture read at the same visual scale as the character.
           Each object scales around an anchored edge so its intended location
           and the sofa finish zone stay unchanged. */
        .bedroom-viewport .ref-window {
          transform: scale(0.72) !important;
          transform-origin: 50% 0 !important;
        }

        .bedroom-viewport .ref-dresser {
          transform: scale(0.68) !important;
          transform-origin: 50% 100% !important;
        }

        .bedroom-viewport .ref-tv-console {
          transform: scale(0.68) !important;
          transform-origin: 0 100% !important;
        }

        .bedroom-viewport .ref-sofa {
          transform: scale(0.68) !important;
          transform-origin: 100% 100% !important;
        }

        .bedroom-viewport .ref-side-table {
          transform: scale(0.74) !important;
          transform-origin: 50% 100% !important;
        }

        .bedroom-viewport .ref-floating-shelf-top,
        .bedroom-viewport .ref-floating-shelf-small {
          transform: scale(0.72) !important;
          transform-origin: 100% 100% !important;
        }

        .bedroom-viewport .ref-floor-rug {
          transform: scale(0.78) !important;
          transform-origin: 50% 100% !important;
        }

        /* Desktop sign: compact enough not to dominate the room. */
        .bedroom-viewport .finish-sign {
          width: 300px !important;
          padding: 12px 16px !important;
          top: 30px !important;
          right: 34px !important;
          text-align: center !important;
        }

        .bedroom-viewport .finish-sign > span {
          display: block !important;
          font-size: 15px !important;
          line-height: 1.15 !important;
          letter-spacing: 0.4px !important;
        }

        .bedroom-viewport .finish-sign > small {
          display: block !important;
          margin-top: 8px !important;
          font-size: 13px !important;
          line-height: 1.35 !important;
        }

        .bedroom-viewport .finish-sign > em {
          display: block !important;
          margin-top: 6px !important;
          font-size: 10px !important;
          line-height: 1.3 !important;
          opacity: 0.72 !important;
        }

        /* Phone/tablet landscape: the whole 960x540 room is scaled down, so
           deliberately enlarge the sign *inside* that room to keep it legible. */
        @media (hover: none) and (pointer: coarse) {
          .touch-device .bedroom-viewport .finish-sign {
            width: 390px !important;
            min-height: 112px !important;
            top: 22px !important;
            right: 24px !important;
            padding: 17px 20px !important;
            border-width: 5px !important;
          }

          .touch-device .bedroom-viewport .finish-sign > span {
            font-size: 20px !important;
            line-height: 1.15 !important;
          }

          .touch-device .bedroom-viewport .finish-sign > small {
            margin-top: 10px !important;
            font-size: 18px !important;
            line-height: 1.3 !important;
          }

          .touch-device .bedroom-viewport .finish-sign > em {
            margin-top: 8px !important;
            font-size: 13px !important;
            line-height: 1.25 !important;
          }
        }

        /* Latest home refinements: remove the wall stripe, add a small left
           gallery, and make the touch version fill the available viewport. */
        .bedroom-viewport .ref-wall-trim {
          display: none !important;
        }

        .ref-left-gallery {
          position: absolute;
          left: 62px;
          top: 76px;
          width: 182px;
          height: 122px;
          pointer-events: none;
        }

        .ref-art-frame {
          position: absolute;
          display: block;
          background: #2b2940;
          border: 6px solid #675746;
          box-shadow:
            inset 0 0 0 4px #a4875a,
            5px 6px 0 rgba(12, 14, 31, 0.26);
        }

        .ref-art-frame i {
          position: absolute;
          inset: 9px;
          display: block;
          background:
            linear-gradient(
              145deg,
              transparent 0 42%,
              #6fa39a 43% 58%,
              transparent 59%
            ),
            linear-gradient(
              35deg,
              #3e5571 0 46%,
              #d4bb75 47% 59%,
              #765168 60% 100%
            );
        }

        .ref-art-frame-a {
          left: 0;
          top: 0;
          width: 76px;
          height: 58px;
        }

        .ref-art-frame-b {
          left: 92px;
          top: 14px;
          width: 62px;
          height: 76px;
        }

        .ref-art-frame-b i {
          background: linear-gradient(180deg, #243b5c 0 55%, #4d766d 56% 100%);
        }

        .ref-art-frame-b i::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 13px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          transform: translateX(-50%);
          background: #ead889;
        }

        .ref-art-frame-c {
          left: 34px;
          top: 72px;
          width: 78px;
          height: 46px;
        }

        .ref-art-frame-c i {
          background: linear-gradient(
            135deg,
            #344b67 0 40%,
            #80634e 41% 57%,
            #39766e 58% 100%
          );
        }

        /* Touch-only: keep the fixed 960x540 stage centered with a uniform
           contain scale. Extra ultra-wide space is painted by the viewport,
           so the room never stretches and never zoom-crops. */
        @media (hover: none) and (pointer: coarse) {
          .touch-device .bedroom-viewport {
            inset: 0 !important;
            width: 100% !important;
            height: 100% !important;
            min-width: 100% !important;
            min-height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            align-items: center !important;
            justify-content: center !important;
            overflow: hidden !important;
          }

          .touch-device .bedroom-viewport .bedroom-scene.bedroom-unified-stage {
            margin: 0 !important;
            border: 0 !important;
            border-radius: 0 !important;
          }

          /* Bigger English sign text on phones after the stage itself is fit
             to the full viewport. */
          .touch-device .bedroom-viewport .finish-sign {
            width: 410px !important;
            min-height: 124px !important;
            top: 20px !important;
            right: 22px !important;
            padding: 18px 22px !important;
          }

          .touch-device .bedroom-viewport .finish-sign > span {
            font-size: 22px !important;
            line-height: 1.12 !important;
            letter-spacing: 0.65px !important;
          }

          .touch-device .bedroom-viewport .finish-sign > small {
            margin-top: 11px !important;
            font-size: 19px !important;
            line-height: 1.28 !important;
          }

          .touch-device .bedroom-viewport .finish-sign > em {
            margin-top: 9px !important;
            font-size: 14px !important;
            line-height: 1.24 !important;
          }
        }

        /* Mobile title screen + touch controls refinement.
           Desktop keeps the original composition. Phones use the same artwork,
           but scale the title composition by viewport height rather than letting
           desktop-sized artwork dominate a short landscape screen. */
        @media (hover: none) and (pointer: coarse) and (orientation: landscape) {
          .touch-device .title-screen {
            justify-content: center;
            padding-top: max(6px, env(safe-area-inset-top));
            padding-right: max(12px, env(safe-area-inset-right));
            padding-bottom: max(8px, env(safe-area-inset-bottom));
            padding-left: max(12px, env(safe-area-inset-left));
          }

          .touch-device .game-logo {
            margin-top: clamp(-18px, -3vh, -8px) !important;
            transform: rotate(-2deg) scale(0.78) !important;
            transform-origin: center center;
          }

          .touch-device .logo-tiny {
            font-size: clamp(34px, 9.2vh, 58px) !important;
          }

          .touch-device .logo-buildify {
            margin-top: 4px !important;
            font-size: clamp(38px, 10.2vh, 64px) !important;
          }

          .touch-device .logo-jump {
            margin-top: 7px !important;
            font-size: clamp(24px, 6.2vh, 40px) !important;
          }

          .touch-device .game-logo span {
            -webkit-text-stroke-width: 4px !important;
          }

          .touch-device .title-description {
            max-width: min(58vw, 510px);
            margin: clamp(4px, 1.2vh, 9px) auto clamp(5px, 1.3vh, 10px) !important;
            padding: 0 10px;
            font-size: clamp(9px, 2.2vh, 12px) !important;
            line-height: 1.35;
          }

          .touch-device .main-play-button {
            width: clamp(50px, 12.5vh, 68px) !important;
            height: clamp(50px, 12.5vh, 68px) !important;
            border-width: clamp(4px, 1vh, 6px) !important;
            border-radius: clamp(13px, 3vh, 18px) !important;
            font-size: clamp(21px, 5.2vh, 29px) !important;
          }

          .touch-device .title-world-showcase {
            right: 3% !important;
            bottom: 9.5% !important;
            left: 3% !important;
            height: clamp(56px, 15vh, 88px) !important;
            border-width: 3px !important;
            border-bottom: 0 !important;
            border-radius: 12px 12px 0 0 !important;
          }

          .touch-device .title-hero {
            bottom: 9.5% !important;
            left: 12% !important;
            transform: scale(0.88) !important;
            transform-origin: bottom center;
          }

          .touch-device .title-sun {
            top: 9% !important;
            right: 14% !important;
            width: clamp(38px, 9vh, 58px) !important;
            height: clamp(38px, 9vh, 58px) !important;
          }

          .touch-device .title-cloud {
            transform: scale(0.72);
          }

          .touch-device .menu-controls {
            bottom: max(1.8%, env(safe-area-inset-bottom)) !important;
            gap: clamp(10px, 2.2vw, 22px) !important;
            padding: 0 12px !important;
            font-size: clamp(7px, 1.7vh, 9px) !important;
            white-space: nowrap;
          }

          /* Larger thumb targets. Keep them visually light enough that they do
             not hide the character on short phones. */
          .touch-device .mobile-controls {
            min-height: clamp(94px, 25vh, 132px) !important;
            padding-right: max(
              16px,
              calc(env(safe-area-inset-right) + 10px)
            ) !important;
            padding-bottom: max(
              12px,
              calc(env(safe-area-inset-bottom) + 8px)
            ) !important;
            padding-left: max(
              16px,
              calc(env(safe-area-inset-left) + 10px)
            ) !important;
          }

          .touch-device .movement-buttons {
            gap: clamp(12px, 2vw, 20px) !important;
          }

          .touch-device .direction-button {
            width: clamp(74px, min(13vw, 22vh), 106px) !important;
            height: clamp(74px, min(13vw, 22vh), 106px) !important;
            border-radius: clamp(14px, 2vw, 20px) !important;
            font-size: clamp(30px, min(4.8vw, 9vh), 44px) !important;
          }

          .touch-device .jump-button {
            width: clamp(96px, min(16vw, 28vh), 136px) !important;
            height: clamp(96px, min(16vw, 28vh), 136px) !important;
            border-radius: 50% !important;
          }

          .touch-device .jump-glyph {
            position: relative;
            display: block;
            width: clamp(34px, 7vh, 48px);
            height: clamp(34px, 7vh, 48px);
          }

          .touch-device .jump-glyph i {
            position: absolute;
            left: 50%;
            display: block;
            width: 100%;
            height: 44%;
            background: #ffffff;
            clip-path: polygon(
              0 72%,
              50% 8%,
              100% 72%,
              82% 92%,
              50% 53%,
              18% 92%
            );
            filter: drop-shadow(2px 3px 0 rgba(0, 0, 0, 0.22));
            transform: translateX(-50%);
          }

          .touch-device .jump-glyph i:first-child {
            top: 1%;
          }

          .touch-device .jump-glyph i:last-child {
            top: 39%;
            opacity: 0.96;
          }
        }

        /* Extra-short phones need a deliberately compact cover, but the game
           buttons stay larger than before. */
        @media (hover: none) and (pointer: coarse) and (orientation: landscape) and (max-height: 430px) {
          .compact-landscape .game-logo {
            margin-top: -12px !important;
            transform: rotate(-2deg) scale(0.66) !important;
          }

          .compact-landscape .title-description {
            max-width: 52vw;
            margin: 2px auto 4px !important;
            font-size: 8px !important;
          }

          .compact-landscape .main-play-button {
            width: 48px !important;
            height: 48px !important;
            border-width: 4px !important;
            font-size: 20px !important;
          }

          .compact-landscape .title-world-showcase {
            bottom: 8% !important;
            height: 52px !important;
          }

          .compact-landscape .title-hero {
            bottom: 8% !important;
            transform: scale(0.72) !important;
          }

          .compact-landscape .menu-controls {
            font-size: 7px !important;
          }

          .compact-landscape .direction-button {
            width: clamp(72px, 21vh, 88px) !important;
            height: clamp(72px, 21vh, 88px) !important;
          }

          .compact-landscape .jump-button {
            width: clamp(94px, 27vh, 112px) !important;
            height: clamp(94px, 27vh, 112px) !important;
          }
        }

        /* Final mobile gameplay HUD/control tuning. */
        @media (hover: none) and (pointer: coarse) and (orientation: landscape) {
          /* Slightly smaller than the previous revision, but still generous
             enough for thumbs on a phone. */
          .touch-device .direction-button {
            width: clamp(64px, min(11vw, 19vh), 88px) !important;
            height: clamp(64px, min(11vw, 19vh), 88px) !important;
            border-radius: clamp(13px, 1.8vw, 18px) !important;
            font-size: clamp(27px, min(4vw, 7.5vh), 38px) !important;
          }

          .touch-device .jump-button {
            width: clamp(82px, min(14vw, 23vh), 112px) !important;
            height: clamp(82px, min(14vw, 23vh), 112px) !important;
          }

          .touch-device .jump-glyph {
            width: clamp(30px, 6.1vh, 42px) !important;
            height: clamp(30px, 6.1vh, 42px) !important;
          }

          /* Move the biome name away from the pause control. The percentage
             panel is drawn on canvas and is also shifted left in drawHud(). */
          .touch-device .biome-badge {
            top: max(76px, calc(env(safe-area-inset-top) + 68px)) !important;
            right: max(
              86px,
              calc(env(safe-area-inset-right) + 78px)
            ) !important;
            width: 132px !important;
            padding: 8px 10px !important;
            font-size: 11px !important;
            line-height: 1.3 !important;
          }
        }

        @media (hover: none) and (pointer: coarse) and (orientation: landscape) and (max-height: 430px) {
          .compact-landscape .direction-button {
            width: clamp(58px, 17vh, 74px) !important;
            height: clamp(58px, 17vh, 74px) !important;
          }

          .compact-landscape .jump-button {
            width: clamp(74px, 21vh, 92px) !important;
            height: clamp(74px, 21vh, 92px) !important;
          }

          .compact-landscape .biome-badge {
            top: max(66px, calc(env(safe-area-inset-top) + 58px)) !important;
            right: max(
              78px,
              calc(env(safe-area-inset-right) + 70px)
            ) !important;
            width: 122px !important;
            font-size: 10px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .phone-icon,
          .confetti {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
