"use client";

import dynamic from "next/dynamic";

const AboutUs = dynamic(() => import("./AboutUs"));
const ImageSlider = dynamic(() => import("./image"));
const Problem = dynamic(() => import("./Problem"));
const WorkflowProblem = dynamic(() => import("./WorkflowProblem"));

export default function HomeSections() {
  return (
    <>
      <AboutUs />
      <ImageSlider />
      <Problem />
      <WorkflowProblem />
    </>
  );
}
