"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  Clock3,
  Compass,
  MapPin,
  Plane,
  RefreshCw,
  RotateCw,
  UserRound,
  X,
} from "lucide-react";
import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLanguage } from "@/components/LanguageProvider";

type Place = {
  name: string;
  description: string;
  image: string;
};

type Destination = {
  name: string;
  country: string;
  image: string;
  accent: string;
  tagline: string;
  reason: string;
  bestFor: string[];
  highlights: Place[];
  activities: string[];
  bestTime: string;
  travelTip: string;
};

type FormData = {
  nickname: string;
  birthDate: string;
  birthTime: string;
};

const destinations: Destination[] = [
  {
    name: "Tokyo",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1400&q=85",
    accent: "#ff9f66",
    tagline: "Energy, creativity, great food, and endless discovery.",
    reason:
      "Tokyo matches curious travelers who enjoy exciting food, colorful neighborhoods, modern technology, and traditional culture.",
    bestFor: [
      "Creative explorers",
      "Food lovers",
      "Technology fans",
      "Pop culture lovers",
    ],
    highlights: [
      {
        name: "Shibuya",
        description:
          "Discover bright city energy, shopping, cafes, and Tokyo’s famous crossing.",
        image:
          "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Senso-ji Temple",
        description:
          "Explore a beautiful historic temple and the traditional streets of Asakusa.",
        image:
          "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?auto=format&fit=crop&w=900&q=85",
      },
    ],
    activities: [
      "Explore Harajuku",
      "Try sushi and ramen",
      "Visit digital art museums",
      "Take a Mount Fuji day trip",
    ],
    bestTime: "March to May or October to November for comfortable weather.",
    travelTip: "Stay near a train station and use an IC transportation card.",
  },
  {
    name: "Paris",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=85",
    accent: "#5dbfea",
    tagline: "Art, architecture, food, and timeless charm.",
    reason:
      "Paris fits travelers who appreciate beautiful architecture, art, fashion, relaxing cafes, and memorable food experiences.",
    bestFor: [
      "Art lovers",
      "Romantic travelers",
      "Fashion fans",
      "Cafe explorers",
    ],
    highlights: [
      {
        name: "Eiffel Tower",
        description:
          "Enjoy one of the most recognizable landmarks and beautiful city views.",
        image:
          "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "The Louvre",
        description:
          "Explore world-famous artworks inside an iconic historic museum.",
        image:
          "https://images.unsplash.com/photo-1565099824688-e93eb20fe622?auto=format&fit=crop&w=900&q=85",
      },
    ],
    activities: [
      "Walk beside the Seine",
      "Explore art museums",
      "Try French pastries",
      "Visit Montmartre",
    ],
    bestTime: "April to June or September to October for pleasant weather.",
    travelTip:
      "Book popular attractions early and explore smaller streets on foot.",
  },
  {
    name: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85",
    accent: "#54d2a0",
    tagline: "Nature, relaxation, adventure, and tropical energy.",
    reason:
      "Bali is perfect when you need a refreshing break surrounded by beaches, nature, wellness experiences, and local culture.",
    bestFor: [
      "Nature lovers",
      "Wellness travelers",
      "Beach explorers",
      "Adventure seekers",
    ],
    highlights: [
      {
        name: "Ubud",
        description:
          "Explore rice terraces, art markets, cafes, temples, and creative culture.",
        image:
          "https://images.unsplash.com/photo-1533669955142-6a73332af4db?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Nusa Penida",
        description:
          "Discover turquoise water, dramatic cliffs, and unforgettable beaches.",
        image:
          "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=900&q=85",
      },
    ],
    activities: [
      "Watch a Mount Batur sunrise",
      "Explore waterfalls",
      "Try surfing or snorkeling",
      "Visit traditional temples",
    ],
    bestTime:
      "April to October is generally best for beaches and outdoor activities.",
    travelTip:
      "Allow extra travel time because traffic between popular areas can be busy.",
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=85",
    accent: "#7087f4",
    tagline: "Peaceful scenery and unforgettable outdoor adventures.",
    reason:
      "The Swiss Alps are ideal for travelers who enjoy mountains, fresh air, quiet landscapes, scenic trains, and outdoor activities.",
    bestFor: [
      "Mountain lovers",
      "Photographers",
      "Hikers",
      "Peaceful travelers",
    ],
    highlights: [
      {
        name: "Lauterbrunnen",
        description:
          "Visit a peaceful valley surrounded by mountains and waterfalls.",
        image:
          "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Zermatt",
        description:
          "Explore a beautiful village with remarkable Matterhorn views.",
        image:
          "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=85",
      },
    ],
    activities: [
      "Ride a panoramic train",
      "Hike alpine trails",
      "Visit lakeside villages",
      "Try skiing",
    ],
    bestTime:
      "June to September for hiking or December to March for winter sports.",
    travelTip: "Compare regional travel passes before buying separate tickets.",
  },
  {
    name: "New York",
    country: "United States",
    image:
      "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=1400&q=85",
    accent: "#cd65dd",
    tagline: "Fast, bold, diverse, and filled with possibilities.",
    reason:
      "New York is a great match for energetic travelers who enjoy culture, food, entertainment, and constantly discovering something new.",
    bestFor: [
      "Urban explorers",
      "Theatre fans",
      "Food lovers",
      "Creative travelers",
    ],
    highlights: [
      {
        name: "Central Park",
        description:
          "Relax among gardens, lakes, walking paths, and green spaces.",
        image:
          "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Brooklyn Bridge",
        description:
          "Walk across the historic bridge and enjoy beautiful skyline views.",
        image:
          "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=900&q=85",
      },
    ],
    activities: [
      "Watch a Broadway show",
      "Explore food markets",
      "Visit famous museums",
      "See the skyline",
    ],
    bestTime: "April to June or September to November for milder temperatures.",
    travelTip: "Group attractions by neighborhood to save travel time.",
  },
  {
    name: "Iceland",
    country: "Iceland",
    image:
      "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=1400&q=85",
    accent: "#efc853",
    tagline: "Wild landscapes that feel like another planet.",
    reason:
      "Iceland suits imaginative travelers who enjoy road trips, dramatic landscapes, waterfalls, glaciers, and peaceful natural spaces.",
    bestFor: [
      "Road-trip lovers",
      "Photographers",
      "Quiet adventurers",
      "Northern-lights seekers",
    ],
    highlights: [
      {
        name: "Skógafoss",
        description:
          "Stand beside one of Iceland’s most powerful and impressive waterfalls.",
        image:
          "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Jökulsárlón",
        description:
          "See floating icebergs inside a spectacular glacial lagoon.",
        image:
          "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=900&q=85",
      },
    ],
    activities: [
      "Drive the South Coast",
      "Visit geothermal pools",
      "Explore waterfalls",
      "See the northern lights",
    ],
    bestTime:
      "June to August for daylight or September to March for northern lights.",
    travelTip: "Always check weather and road conditions before driving.",
  },
  {
    name: "Seoul",
    country: "South Korea",
    image:
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1400&q=85",
    accent: "#806ff7",
    tagline: "Tradition, fashion, food, and modern city culture.",
    reason:
      "Seoul matches creative travelers who enjoy design, shopping, music, food, historic places, and lively neighborhoods.",
    bestFor: [
      "Culture explorers",
      "Fashion fans",
      "Food lovers",
      "Night-city travelers",
    ],
    highlights: [
      {
        name: "Gyeongbokgung Palace",
        description:
          "Discover royal history and beautiful traditional Korean architecture.",
        image:
          "https://images.unsplash.com/photo-1538485399081-7c897a5f6f17?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Bukchon Village",
        description:
          "Walk through traditional houses, small streets, and cultural workshops.",
        image:
          "https://images.unsplash.com/photo-1546874177-9e664107314e?auto=format&fit=crop&w=900&q=85",
      },
    ],
    activities: [
      "Wear a traditional hanbok",
      "Try Korean barbecue",
      "Explore creative cafes",
      "Walk beside the Han River",
    ],
    bestTime: "April to May or September to November for comfortable weather.",
    travelTip: "Save Korean names of locations and use a transportation card.",
  },
  {
    name: "Sydney",
    country: "Australia",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=85",
    accent: "#f26cab",
    tagline: "Bright city energy surrounded by beaches and nature.",
    reason:
      "Sydney suits easygoing travelers who want city experiences, coastal scenery, outdoor activities, food, and sunny adventures.",
    bestFor: [
      "Beach lovers",
      "Outdoor travelers",
      "City explorers",
      "Relaxed adventurers",
    ],
    highlights: [
      {
        name: "Sydney Opera House",
        description:
          "Visit the city’s most famous landmark beside Sydney Harbour.",
        image:
          "https://images.unsplash.com/photo-1524820197278-540916411e20?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Bondi Beach",
        description:
          "Swim, surf, relax, or walk along Sydney’s famous coastline.",
        image:
          "https://images.unsplash.com/photo-1572498622687-95a1a8d7d87f?auto=format&fit=crop&w=900&q=85",
      },
    ],
    activities: [
      "Walk from Bondi to Coogee",
      "Ride a harbour ferry",
      "Explore the Blue Mountains",
      "Watch the sunset",
    ],
    bestTime: "September to November or March to May for comfortable weather.",
    travelTip: "Use ferries for transportation and beautiful harbour views.",
  },
];

const wheelSize = 600;
const wheelCenter = wheelSize / 2;
const wheelRadius = wheelSize / 2;
const segmentAngle = 360 / destinations.length;

const resultSpinDuration = 4400;
const playfulSpinDuration = 1800;

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function createSegmentPath(
  index: number,
  totalSegments: number,
  radius: number,
) {
  const anglePerSegment = 360 / totalSegments;
  const startAngle = index * anglePerSegment;
  const endAngle = startAngle + anglePerSegment;

  const start = polarToCartesian(wheelCenter, wheelCenter, radius, endAngle);

  const end = polarToCartesian(wheelCenter, wheelCenter, radius, startAngle);

  return [
    `M ${wheelCenter} ${wheelCenter}`,
    `L ${start.x} ${start.y}`,
    `A ${radius} ${radius} 0 0 0 ${end.x} ${end.y}`,
    "Z",
  ].join(" ");
}

export default function TravelSpinnerGame() {
  const { language } = useLanguage();
  const th = language === "th";
  const resultTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const playfulTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [formData, setFormData] = useState<FormData>({
    nickname: "",
    birthDate: "",
    birthTime: "",
  });

  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isPreviewSpinning, setIsPreviewSpinning] = useState(false);
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [error, setError] = useState("");

  const wheelIsMoving = isSpinning || isPreviewSpinning;

  const segmentPaths = useMemo(
    () =>
      destinations.map((_, index) =>
        createSegmentPath(index, destinations.length, wheelRadius),
      ),
    [],
  );

  useEffect(() => {
    if (!isResultOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsResultOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isResultOpen]);

  useEffect(() => {
    return () => {
      if (resultTimeoutRef.current) {
        clearTimeout(resultTimeoutRef.current);
      }

      if (playfulTimeoutRef.current) {
        clearTimeout(playfulTimeoutRef.current);
      }
    };
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const handlePlayfulSpin = () => {
    if (wheelIsMoving) return;

    setIsPreviewSpinning(true);
    setSelectedDestination(null);
    setIsResultOpen(false);

    const extraRounds = 2 + Math.floor(Math.random() * 2);
    const randomOffset = 60 + Math.random() * 240;

    setRotation(
      (currentRotation) => currentRotation + extraRounds * 360 + randomOffset,
    );

    if (playfulTimeoutRef.current) {
      clearTimeout(playfulTimeoutRef.current);
    }

    playfulTimeoutRef.current = setTimeout(() => {
      setIsPreviewSpinning(false);
    }, playfulSpinDuration);
  };

  const handleSpin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (wheelIsMoving) return;

    if (!formData.nickname.trim()) {
      setError("Please enter your nickname.");
      return;
    }

    if (!formData.birthDate) {
      setError("Please select your date of birth.");
      return;
    }

    if (!formData.birthTime) {
      setError("Please select your time of birth.");
      return;
    }

    setError("");
    setSelectedDestination(null);
    setIsResultOpen(false);
    setIsSpinning(true);

    const selectedIndex = Math.floor(Math.random() * destinations.length);

    const selectedSegmentCenter =
      selectedIndex * segmentAngle + segmentAngle / 2;

    const currentNormalizedRotation = ((rotation % 360) + 360) % 360;

    const targetNormalizedRotation = (360 - selectedSegmentCenter) % 360;

    const adjustment =
      (targetNormalizedRotation - currentNormalizedRotation + 360) % 360;

    const extraRounds = 6 + Math.floor(Math.random() * 3);
    const nextRotation = rotation + extraRounds * 360 + adjustment;

    setRotation(nextRotation);

    if (resultTimeoutRef.current) {
      clearTimeout(resultTimeoutRef.current);
    }

    resultTimeoutRef.current = setTimeout(() => {
      setSelectedDestination(destinations[selectedIndex]);
      setIsSpinning(false);
      setIsResultOpen(true);
    }, resultSpinDuration);
  };

  const handleSpinAgain = () => {
    setIsResultOpen(false);
    setSelectedDestination(null);
  };

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#09091d] px-4 pb-14 pt-20 text-white sm:px-6 sm:pb-20 sm:pt-24 md:px-8 lg:px-10 lg:pt-28 xl:px-12">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Base */}
          <div className="absolute inset-0 bg-[#09091d]" />

          {/* Cloud 1 */}
          <div
            className="absolute -top-8 left-0 hidden h-[380px] w-[700px] opacity-20 sm:block"
            style={{
              backgroundImage: 'url("https://pngimg.com/d/cloud_PNG16.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />

          {/* Cloud 2 */}
          <div
            className="absolute right-0 top-36 hidden h-[420px] w-[720px] opacity-15 md:block"
            style={{
              backgroundImage: 'url("https://pngimg.com/d/cloud_PNG16.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />

          {/* Cloud 3 */}
          <div
            className="absolute bottom-0 left-1/2 hidden h-[320px] w-[650px] -translate-x-1/2 opacity-10 sm:block"
            style={{
              backgroundImage: 'url("https://pngimg.com/d/cloud_PNG16.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />

          {/* Purple Glow */}
          <div className="absolute -left-40 top-16 h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[150px]" />

          {/* Blue Glow */}
          <div className="absolute -right-40 top-28 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[150px]" />

          {/* Pink Glow */}
          <div className="absolute bottom-[-160px] left-1/2 h-[380px] w-[700px] -translate-x-1/2 rounded-full bg-pink-500/15 blur-[180px]" />

          {/* Stars */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <section className="relative z-10 mx-auto max-w-7xl">
          {/* Back */}
          <Link
            href="/playground"
            className="mb-5 inline-flex min-h-10 items-center gap-2 text-xs text-white/45 transition hover:text-white sm:mb-6 sm:text-sm"
          >
            <ArrowLeft size={16} />
            Back to Playground
          </Link>

          {/* Heading */}
          <header className="mx-auto mb-7 max-w-4xl text-center sm:mb-9 lg:mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/65 sm:mb-5 sm:px-4 sm:text-[11px]">
              <Compass size={14} />
              Travel Spinner
            </div>

            <h1 className="text-[clamp(2rem,8vw,3rem)] font-black leading-[1.02] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              Where should you{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                go next?
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl px-2 text-xs leading-6 text-white/45 sm:text-sm lg:text-base">
              Enter your details, spin the wheel, and discover your next playful
              travel destination.
            </p>
          </header>

          {/* Main content */}
          <div className="grid min-w-0 items-start gap-8 md:gap-10 xl:grid-cols-[1.08fr_0.92fr] xl:items-center xl:gap-16">
            {/* Wheel */}
            <section className="relative flex min-w-0 items-center justify-center py-2 sm:py-5 xl:min-h-[560px] xl:py-0">
              <div className="relative aspect-square w-[min(88vw,580px)] max-w-full sm:w-[min(76vw,500px)] md:w-[min(68vw,540px)] xl:w-full xl:max-w-[580px]">
                {/* Pointer */}
                <div className="absolute left-1/2 top-[-6px] z-40 -translate-x-1/2 sm:top-[-12px]">
                  <div className="flex flex-col items-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff83bd] to-[#ee4f9b] text-white shadow-[0_14px_35px_rgba(238,79,155,0.5)] sm:h-14 sm:w-14 sm:rounded-2xl">
                      <MapPin
                        size={21}
                        fill="currentColor"
                        className="sm:h-[27px] sm:w-[27px]"
                      />
                    </div>

                    <div className="-mt-1 h-0 w-0 border-l-[10px] border-r-[10px] border-t-[14px] border-l-transparent border-r-transparent border-t-[#ee4f9b] sm:border-l-[14px] sm:border-r-[14px] sm:border-t-[20px]" />
                  </div>
                </div>

                <div className="absolute inset-0 rounded-full border border-white/15 bg-white/[0.04] shadow-[0_28px_80px_rgba(0,0,0,0.4)]" />

                <div className="absolute inset-[8px] rounded-full border-[6px] border-white/20 min-[380px]:inset-[10px] min-[380px]:border-[7px] sm:inset-[17px] sm:border-[12px]" />

                {/* Rotating wheel */}
                <div
                  className="absolute inset-[15px] overflow-hidden rounded-full min-[380px]:inset-[18px] sm:inset-[31px]"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: isSpinning
                      ? `transform ${resultSpinDuration}ms cubic-bezier(0.12,0.72,0.08,1)`
                      : isPreviewSpinning
                        ? `transform ${playfulSpinDuration}ms cubic-bezier(0.18,0.78,0.16,1)`
                        : "none",
                  }}
                >
                  <svg
                    viewBox={`0 0 ${wheelSize} ${wheelSize}`}
                    className="h-full w-full"
                    role="img"
                    aria-label="Travel destination spinner wheel"
                  >
                    <defs>
                      {destinations.map((destination, index) => (
                        <pattern
                          key={destination.name}
                          id={`destination-${index}`}
                          patternUnits="userSpaceOnUse"
                          width={wheelSize}
                          height={wheelSize}
                        >
                          <image
                            href={destination.image}
                            width={wheelSize}
                            height={wheelSize}
                            preserveAspectRatio="xMidYMid slice"
                          />
                        </pattern>
                      ))}
                    </defs>

                    {destinations.map((destination, index) => (
                      <path
                        key={destination.name}
                        d={segmentPaths[index]}
                        fill={`url(#destination-${index})`}
                        stroke="rgba(255,255,255,0.78)"
                        strokeWidth="5"
                      />
                    ))}

                    {destinations.map((destination, index) => {
                      const angle = index * segmentAngle + segmentAngle / 2;

                      const position = polarToCartesian(
                        wheelCenter,
                        wheelCenter,
                        220,
                        angle,
                      );

                      return (
                        <g
                          key={`label-${destination.name}`}
                          transform={`translate(${position.x} ${position.y}) rotate(${angle})`}
                        >
                          <rect
                            x="-63"
                            y="-17"
                            width="126"
                            height="34"
                            rx="17"
                            fill="rgba(9,9,29,0.76)"
                          />

                          <text
                            x="0"
                            y="4"
                            textAnchor="middle"
                            fill="white"
                            fontSize="13"
                            fontWeight="800"
                          >
                            {destination.name.toUpperCase()}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 z-30 flex h-[30%] w-[30%] min-h-[78px] min-w-[78px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-[#292344] bg-[#17172f] shadow-[0_18px_45px_rgba(0,0,0,0.45)] sm:border-[10px]">
                  <button
                    type="button"
                    onClick={handlePlayfulSpin}
                    disabled={wheelIsMoving}
                    aria-label="Spin the wheel for fun"
                    className="group flex h-[68%] w-[68%] items-center justify-center rounded-full bg-white text-[#17172f] shadow-xl transition hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-75"
                  >
                    <Plane
                      className={`h-7 w-7 transition sm:h-12 sm:w-12 ${
                        wheelIsMoving
                          ? "animate-pulse"
                          : "group-hover:-rotate-12"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </section>

            {/* Form */}
            <section className="mx-auto w-full min-w-0 max-w-2xl rounded-[22px] border border-white/10 bg-[#15162d]/95 p-4 text-white shadow-[0_28px_90px_rgba(0,0,0,0.3)] backdrop-blur-2xl min-[380px]:p-5 sm:rounded-[32px] sm:p-7 md:p-8 xl:max-w-none">
              <div className="mb-6 sm:mb-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Compass size={22} />
                </div>

                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:mt-5 sm:text-xs">
                  Before you spin
                </p>

                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Tell us about you
                </h2>

                <p className="mt-2 text-xs leading-5 text-white/40 sm:text-sm">
                  Complete your details before spinning the wheel.
                </p>
              </div>

              <form onSubmit={handleSpin} className="space-y-4 sm:space-y-5">
                {/* Nickname */}
                <label className="block">
                  <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60 sm:text-xs">
                    Nickname
                  </span>

                  <div className="group flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-[#111228] px-4 transition focus-within:border-purple-400/60 sm:rounded-2xl">
                    <UserRound size={18} className="shrink-0 text-white/40" />

                    <input
                      type="text"
                      name="nickname"
                      value={formData.nickname}
                      onChange={handleInputChange}
                      placeholder="What should we call you?"
                      autoComplete="off"
                      spellCheck={false}
                      disabled={wheelIsMoving}
                      className="h-12 min-w-0 flex-1 border-0 bg-transparent text-sm text-white outline-none placeholder:text-white/25 focus:bg-transparent disabled:cursor-not-allowed sm:h-14
                      [-webkit-text-fill-color:white]
                      [&:-webkit-autofill]:shadow-[0_0_0_1000px_#111228_inset]
                      [&:-webkit-autofill]:[-webkit-text-fill-color:white]
                      [&:-webkit-autofill]:caret-white"
                    />
                  </div>
                </label>

                {/* Date */}
                <label className="block">
                  <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60 sm:text-xs">
                    Date of birth
                  </span>

                  <div className="flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-[#111228] px-4 transition focus-within:border-purple-400/60 sm:rounded-2xl">
                    <CalendarDays
                      size={18}
                      className="shrink-0 text-white/40"
                    />

                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      disabled={wheelIsMoving}
                      className="h-12 w-full min-w-0 flex-1 border-0 bg-transparent text-xs text-white outline-none [color-scheme:dark] disabled:cursor-not-allowed min-[380px]:text-sm sm:h-14"
                    />
                  </div>
                </label>

                {/* Time */}
                <label className="block">
                  <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60 sm:text-xs">
                    Time of birth
                  </span>

                  <div className="flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-[#111228] px-4 transition focus-within:border-purple-400/60 sm:rounded-2xl">
                    <Clock3 size={18} className="shrink-0 text-white/40" />

                    <input
                      type="time"
                      name="birthTime"
                      value={formData.birthTime}
                      onChange={handleInputChange}
                      disabled={wheelIsMoving}
                      className="h-12 w-full min-w-0 flex-1 border-0 bg-transparent text-xs text-white outline-none [color-scheme:dark] disabled:cursor-not-allowed min-[380px]:text-sm sm:h-14"
                    />
                  </div>
                </label>

                {error && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-xs text-red-200 sm:rounded-2xl sm:text-sm"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={wheelIsMoving}
                  className="flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#7869ff] via-[#a45ff2] to-[#f06cae] text-sm font-black text-white shadow-[0_18px_45px_rgba(138,93,246,0.3)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:h-14 sm:rounded-2xl"
                >
                  <RotateCw
                    size={18}
                    className={wheelIsMoving ? "animate-spin" : ""}
                  />

                  {isSpinning
                    ? (th ? "กำลังหาจุดหมายของคุณ..." : "Finding your destination...")
                    : isPreviewSpinning
                      ? "Wheel is spinning..."
                      : "Spin the wheel"}
                </button>
              </form>
            </section>
          </div>
        </section>
      </main>

      {/* Result popup */}
      {isResultOpen && selectedDestination && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-[#09091d]/75 px-0 pt-12 backdrop-blur-md sm:items-center sm:px-4 sm:py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="result-title"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              setIsResultOpen(false);
            }
          }}
        >
          <article className="relative max-h-[calc(100dvh-3rem)] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-t-[24px] border border-white/70 bg-white text-[#17203b] shadow-[0_35px_120px_rgba(0,0,0,0.45)] sm:max-h-[92vh] sm:rounded-[30px]">
            <div className="pointer-events-none absolute left-0 top-0 h-48 w-48 -translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-300/45 blur-3xl" />

            <div className="pointer-events-none absolute right-0 top-24 h-48 w-48 translate-x-1/3 rounded-full bg-pink-300/45 blur-3xl" />

            <button
              type="button"
              onClick={() => setIsResultOpen(false)}
              aria-label="Close result"
              className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/85 text-[#242744] shadow-lg backdrop-blur-xl transition hover:rotate-90 hover:bg-[#242744] hover:text-white sm:right-4 sm:top-4 sm:h-10 sm:w-10"
            >
              <X size={17} />
            </button>

            {/* Popup hero */}
            <div className="relative h-48 overflow-hidden rounded-t-[24px] min-[380px]:h-52 sm:h-72 sm:rounded-t-[30px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("${selectedDestination.image}")`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#5556da]/95 via-[#6567df]/15 to-black/10" />

              <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/40 bg-white/85 text-[#6d5df5] shadow-xl backdrop-blur sm:left-6 sm:top-6 sm:h-14 sm:w-14 sm:rounded-2xl">
                <Plane size={23} />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/20 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] backdrop-blur-xl sm:text-[10px] sm:tracking-[0.18em]">
                  Your perfect destination
                </div>

                <h2
                  id="result-title"
                  className="mt-3 text-3xl font-black tracking-[-0.04em] drop-shadow-lg sm:text-5xl"
                >
                  {selectedDestination.name}
                </h2>

                <p className="mt-2 flex items-center gap-2 text-xs text-white/85 sm:text-sm">
                  <MapPin size={15} />
                  {selectedDestination.country}
                </p>
              </div>
            </div>

            <div className="relative p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-8">
              {/* Match */}
              <section className="rounded-[20px] border border-purple-100 bg-gradient-to-br from-[#f0f4ff] via-white to-[#fff0f8] p-4 shadow-[0_18px_45px_rgba(111,94,246,0.1)] sm:rounded-[24px] sm:p-5">
                <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#7869e9] sm:text-[10px]">
                  This destination fits you
                </p>

                <h3 className="mt-2 text-xl font-black text-[#17203b] sm:text-2xl">
                  Great match, {formData.nickname}.
                </h3>

                <p className="mt-3 text-xs leading-5 text-[#59617b] sm:text-sm sm:leading-6">
                  {selectedDestination.reason}
                </p>

                <p className="mt-3 text-xs font-bold text-[#674ecf] sm:text-sm">
                  {selectedDestination.tagline}
                </p>
              </section>

              {/* Quick information */}
              <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4">
                <section className="rounded-[18px] bg-[#eef4ff] p-4 sm:rounded-[22px] sm:p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7894ff] text-white shadow-md sm:h-10 sm:w-10">
                      <UserRound size={17} />
                    </span>

                    <h3 className="text-sm font-black text-[#17203b] sm:text-base">
                      Perfect for
                    </h3>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                    {selectedDestination.bestFor.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-blue-200 bg-white px-3 py-1.5 text-[9px] font-semibold text-[#59617b] sm:text-[10px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="rounded-[18px] bg-[#fff0f7] p-4 sm:rounded-[22px] sm:p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f46dac] text-white shadow-md sm:h-10 sm:w-10">
                      <CalendarDays size={17} />
                    </span>

                    <h3 className="text-sm font-black text-[#17203b] sm:text-base">
                      Best time
                    </h3>
                  </div>

                  <p className="mt-3 text-[11px] leading-5 text-[#59617b] sm:mt-4 sm:text-xs">
                    {selectedDestination.bestTime}
                  </p>
                </section>
              </div>

              {/* Places */}
              <section className="mt-5 sm:mt-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#9a8eaa] sm:text-[10px]">
                      Recommended places
                    </p>

                    <h3 className="mt-1 text-lg font-black text-[#17203b] sm:text-xl">
                      Places worth visiting
                    </h3>
                  </div>

                  <MapPin size={19} className="shrink-0 text-[#f46dac]" />
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
                  {selectedDestination.highlights.map((place) => (
                    <article
                      key={place.name}
                      className="group overflow-hidden rounded-[18px] border border-[#e9e9f3] bg-white shadow-[0_12px_35px_rgba(44,43,87,0.08)] sm:rounded-[20px]"
                    >
                      <div
                        className="relative h-28 bg-cover bg-center transition duration-500 group-hover:scale-[1.03] sm:h-32"
                        style={{
                          backgroundImage: `url("${place.image}")`,
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                        <h4 className="absolute bottom-3 left-3 right-3 text-sm font-black text-white drop-shadow sm:text-base">
                          {place.name}
                        </h4>
                      </div>

                      <p className="p-3 text-[10px] leading-4 text-[#697089] sm:text-[11px] sm:leading-5">
                        {place.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Activities */}
              <section className="mt-4 rounded-[18px] bg-gradient-to-r from-[#eef8ff] to-[#f5f0ff] p-4 sm:mt-5 sm:rounded-[22px] sm:p-5">
                <h3 className="flex items-center gap-2 text-sm font-black text-[#17203b] sm:text-base">
                  <Compass size={17} className="text-[#6f62ec]" />
                  Things to try
                </h3>

                <div className="mt-3 grid gap-2 sm:mt-4 sm:grid-cols-2">
                  {selectedDestination.activities.map((activity) => (
                    <div
                      key={activity}
                      className="flex items-center gap-2 rounded-xl bg-white/80 px-3 py-2.5"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#61d5ad] text-white">
                        <Check size={12} />
                      </span>

                      <span className="text-[10px] font-medium text-[#59617b] sm:text-[11px]">
                        {activity}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tip */}
              <section className="mt-4 flex gap-3 rounded-[18px] border border-yellow-200 bg-[#fff9df] p-4 sm:mt-5 sm:rounded-[20px]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ffc94f] text-white">
                  <Compass size={17} />
                </span>

                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#c98d15] sm:text-[10px]">
                    Travel tip
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-[#6d654f] sm:text-xs">
                    {selectedDestination.travelTip}
                  </p>
                </div>
              </section>

              {/* Actions */}
              <div className="mt-5 flex flex-col-reverse gap-2 sm:mt-6 sm:flex-row sm:gap-3">
                <button
                  type="button"
                  onClick={() => setIsResultOpen(false)}
                  className="h-11 flex-1 rounded-xl border border-[#dedfeb] bg-white text-xs font-bold text-[#59617b] transition hover:bg-[#f5f5fa] sm:h-12 sm:rounded-2xl sm:text-sm"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={handleSpinAgain}
                  className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5bc8f6] via-[#8872f5] to-[#f36aaa] text-xs font-black text-white shadow-[0_14px_32px_rgba(127,105,240,0.28)] transition hover:scale-[1.02] sm:h-12 sm:rounded-2xl sm:text-sm"
                >
                  <RefreshCw size={16} />
                  Spin again
                </button>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
