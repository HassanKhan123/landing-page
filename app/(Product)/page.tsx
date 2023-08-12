import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Carousel />
    </>
  );
}
