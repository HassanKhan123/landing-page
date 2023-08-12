import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className='hero-container mx-40'>
      <section className='flex w-full flex-1 flex-col items-center justify-center mt-spacing'>
        <h1 className='text-6xl font-bold'>NEXT GENERATION</h1>
        <p className='text-dark-4 sub-text'>
          professional-grade. Decentralized Exchange designed by traders, for
          traders.
        </p>
        <div className='btn mt-10'>
          <p className='m-3  text-dark-2 text-sm font-bold'>
            LAUNCH ELEKTRIK TESTNET
          </p>
        </div>
      </section>

      <section className='hero-secondary-container'>
        <div className='flex flex-row'>
          <div className='self-center flex-1 hero-section-1'>
            <div>
              <div className='circle-fill m-5'></div>
              <div className='circle-not-fill m-5'></div>
              <div className='circle-not-fill m-5'></div>
              <div className='circle-not-fill m-5'></div>
              <div className='circle-not-fill m-5'></div>
            </div>

            <div>
              <p className='text-dark-4 text-sm  mt-20 m-5'>
                The first decentralized exchange build on
              </p>
              <Image
                src='/assets/light-link.svg'
                alt='light-link'
                width={200}
                height={200}
                className='m-5'
              />
            </div>
          </div>
          <div className='relative'>
            <Image
              src='/assets/circle.svg'
              alt='circle'
              width={600}
              height={600}
              className='m-auto'
            />
            <div className='position-absolute'>
              <Image
                src='/assets/round-down.svg'
                alt='round-down'
                width={70}
                height={70}
              />
            </div>
          </div>
          <div className='flex flex-1 flex-col items-end mt-10 hero-section-2'>
            <div>
              <Image
                src='/assets/telegram.svg'
                alt='telegram'
                width={30}
                height={30}
                className='m-10'
              />
              <Image
                src='/assets/discord.svg'
                alt='discord'
                width={30}
                height={30}
                className='m-10'
              />
              <Image
                src='/assets/twitter.svg'
                alt='twitter'
                width={30}
                height={30}
                className='m-10'
              />
            </div>
            <div>
              <p className='text-dark-4 text-sm  mt-20 mr-10 opacity-60'>
                2023 Copyright. All rights protected
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
