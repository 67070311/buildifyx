declare module "@icons-pack/react-simple-icons/icons/*.mjs" {
  import type { ComponentType, SVGProps } from "react";

  const Icon: ComponentType<SVGProps<SVGSVGElement> & { title?: string }>;
  export default Icon;
}
