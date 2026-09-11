"use client";

import dynamic from "next/dynamic";
import { ReactNode, useEffect, useRef, useState } from "react";

const AboutUs = dynamic(() => import("./AboutUs"));
const ImageSlider = dynamic(() => import("./image"));
const Problem = dynamic(() => import("./Problem"));
const WorkflowProblem = dynamic(() => import("./WorkflowProblem"));

function DeferredSection({
  children,
  intrinsicHeight,
}: {
  children: ReactNode;
  intrinsicHeight: number;
}) {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return;

    const node = triggerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setMounted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setMounted(true);
        observer.disconnect();
      },
      {
        // Mount well before the section becomes visible so scrolling looks
        // exactly the same while avoiding heavy below-the-fold work on load.
        rootMargin: "1200px 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [mounted]);

  if (mounted) return children;

  return (
    <div
      ref={triggerRef}
      aria-hidden="true"
      style={{
        minHeight: `${intrinsicHeight}px`,
        contentVisibility: "auto",
        containIntrinsicSize: `${intrinsicHeight}px`,
      }}
    />
  );
}

export default function HomeSections() {
  return (
    <>
      <AboutUs />

      <DeferredSection intrinsicHeight={1100}>
        <ImageSlider />
      </DeferredSection>

      <DeferredSection intrinsicHeight={1050}>
        <Problem />
      </DeferredSection>

      <DeferredSection intrinsicHeight={900}>
        <WorkflowProblem />
      </DeferredSection>
    </>
  );
}
