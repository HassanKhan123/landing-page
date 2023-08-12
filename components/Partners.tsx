import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section className='mx-40'>
      <div className='flex flex-col items-center justify-center partners-container'>
        <div className='relative'>
          <Image
            src='/assets/shadow-border.svg'
            alt='shadow-border'
            width={1500}
            height={500}
          />
          <div className='partners-box'>
            <Image src='/assets/logo.svg' alt='logo' width={350} height={43} />
            <p className='text-dark-4 text-sm my-10 partners-text-box'>
              Elektrik is a decentralized exchange going live on the LightLink
              layer 2 network. Our DEX is able to leverage gas-focused features
              of the underlying network, differentiating itself from the
              following teams in the space:
            </p>

            <div className='flex flex-row items-center justify-center'>
              <Image
                src='/assets/uniswap.svg'
                alt='uniswap'
                width={153}
                height={40}
                className='m-3 opacity-40'
              />
              <Image
                src='/assets/bnb.svg'
                alt='bnb'
                width={153}
                height={40}
                className='m-3 opacity-40'
              />
              <Image
                src='/assets/trust-swap.svg'
                alt='trust-swap'
                width={153}
                height={40}
                className='m-3 opacity-40'
              />
              <Image
                src='/assets/polygon.svg'
                alt='polygon'
                width={153}
                height={40}
                className='m-3 opacity-40'
              />
              <Image
                src='/assets/sushi.svg'
                alt='sushi'
                width={100}
                height={30}
                className='m-3 opacity-40'
              />
            </div>
            <div className='flex flex-row items-center justify-center'>
              <Image
                src='/assets/balancer.svg'
                alt='balancer'
                width={120}
                height={40}
                className='m-3 opacity-40'
              />

              <Image
                src='/assets/curve.svg'
                alt='curve'
                width={120}
                height={40}
                className='m-3 opacity-40'
              />

              <Image
                src='/assets/arbitrum.svg'
                alt='arbitrum'
                width={153}
                height={40}
                className='m-3 opacity-40'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
