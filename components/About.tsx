import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      className='flex w-full flex-row items-center justify-center mt-10 mx-40'
      id='about'
    >
      <div className='flex-1 self-start'>
        <p className='text-light-1 text-3xl opacity-30'>ABOUT</p>
        <Image
          src='/assets/elektrik.svg'
          alt='elektrik'
          width={300}
          height={300}
          className='mt-5'
        />
        <p className='text-dark-4 mt-10 text-justify'>
          Elektrik is a decentralized exchange on the LightLink network that
          operates on a peer-to-peer model, allowing direct trading and
          inclusive liquidity provision. Its capital-efficient design offers
          tighter spreads and reduces slippage, enhancing the trading experience
          and increasing yields for liquidity providers. This fosters a more
          decentralized and user-friendly trading environment.
        </p>
      </div>
      <div className='m-20'></div>
      <div className='flex-1 ml-20'>
        <div className='flex flex-row mt-10'>
          <Image
            src='/assets/pro-trading.svg'
            alt='pro-trading'
            width={60}
            height={60}
          />
          <div className='flex flex-col ml-10'>
            <p className='text-light-1 text-xl uppercase font-medium'>
              Pro trading experience
            </p>
            <p className='text-dark-4 text-sm'>
              Offers advanced on-chain trading tools to enable exotic strategies
            </p>
          </div>
        </div>
        <div className='flex flex-row mt-10'>
          <Image
            src='/assets/lower-gas.svg'
            alt='pro-trading'
            width={60}
            height={60}
          />
          <div className='flex flex-col ml-10'>
            <p
              className='text-light-1 text-xl uppercase font-medium'
              style={{ width: "60%" }}
            >
              Lower gas fees and fast transaction time
            </p>
            <p className='text-dark-4 text-sm'>
              Optimized trading environment on LightLink and other layer 2s
            </p>
          </div>
        </div>
        <div className='flex flex-row mt-10'>
          <Image
            src='/assets/liquidity.svg'
            alt='pro-trading'
            width={60}
            height={60}
          />
          <div className='flex flex-col ml-10'>
            <p className='text-light-1 text-xl uppercase font-medium'>
              Dynamic Liquidity Provision
            </p>
            <p className='text-dark-4 text-sm'>
              Maximizing fees generated for LPs and pool depth for traders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
