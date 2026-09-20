"use client";

import { createElement } from "react";

export default function TechAnimation({
  className = "",
  src = "https://assets6.lottiefiles.com/packages/lf20_RWmLEO.json",
}: {
  className?: string;
  src?: string;
}) {
  return createElement("dotlottie-wc", {
    src,
    autoplay: true,
    loop: true,
    speed: "1",
    className,
    style: {
      width: "100%",
      height: "100%",
      display: "block",
    },
  });
}
