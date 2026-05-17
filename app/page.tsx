import Navbar from "@/components/Navbar";
import AboutUs from "@/home/AboutUs";
import Hero from "@/home/Hero";
import Problem from "@/home/Problem";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Problem />
    </>
  );
}
