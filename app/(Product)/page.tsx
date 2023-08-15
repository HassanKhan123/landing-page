import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import LearnMore from "@/components/LearnMore";
import Liquidity from "@/components/Liquidity";
import Mission from "@/components/Mission";
import Partners from "@/components/Partners";
import Roadmap from "@/components/Roadmap";
import Shipping from "@/components/Shipping";
import Tokenomics from "@/components/Tokenomics";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Carousel />
      <Partners />
      <Liquidity />
      <Shipping />
      <Tokenomics />
      <Mission />
      <Roadmap />
      <LearnMore />
    </>
  );
}
