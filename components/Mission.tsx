import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <section className='flex w-full flex-1 flex-col items-center justify-center  mission-container'>
      <p className={`text-2xl text-light-2 active-menu`}>OUR MISSION</p>
      <Image
        src='/assets/elektrik.svg'
        alt='elektrik'
        width={300}
        height={300}
        className='mt-5'
      />
      <p className='w-1/3 text-center uppercase my-7 text-dark-4 font-bold'>
        To power superior on-chain trading, with access to professional level
        tools and a unique, flexible approach to liquidity provision.
      </p>

      <p className='w-1/2 text-center text-dark-4'>
        Our mission is to build a capital-efficient decentralized exchange that
        supercharges on-chain trading. Leveraging the power of the LightLink
        network, we strive to provide an unrivaled trading experience with
        minimal fees, advanced tools, access to pool data within the platform’s
        UI and our Dynamic Liquidity Provision model.
      </p>
    </section>
  );
};

export default Mission;
