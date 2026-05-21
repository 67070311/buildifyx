import AboutUs from "@/home/AboutUs";
import Hero from "@/home/Hero";
import Problem from "@/home/Problem";
import WorkflowProblem from "@/home/WorkflowProblem";
import ImageSlider from "@/home/image";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <WorkflowProblem />
      <ImageSlider />
      <Problem />
    </>
  );
}
