import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Partners from "@/components/Partners";
import Tokenomics from "@/components/Tokenomics";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Carousel />
      <Partners />
      <Tokenomics />
      <Mission />
    </>
  );
}
