import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className='flex w-full flex-1 flex-row mt-spacing bg-dark-5 p-10 px-40 relative'>
      <div className='flex flex-col flex-1'>
        <Image
          src='/assets/logo.svg'
          alt='logo'
          width={180}
          height={43}
          className='mb-20'
        />

        <div className='mt-10'>
          <p className='text-dark-4 text-sm'>Follow Us on:</p>
          <div className='flex flex-row'>
            <Image
              src='/assets/telegram.svg'
              alt='telegram'
              width={30}
              height={30}
              className='m-5 ml-0'
            />
            <Image
              src='/assets/discord.svg'
              alt='discord'
              width={30}
              height={30}
              className='m-5 ml-0'
            />
            <Image
              src='/assets/twitter.svg'
              alt='twitter'
              width={30}
              height={30}
              className='m-5 ml-0'
            />
          </div>

          <div className='flex flex-row items-center'>
            <p className='text-dark-4 text-sm'>
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
      </div>
      <div className='flex flex-col px-20'>
        <p className='text-light-1 text-xl uppercase font-medium mb-7'>
          DETAILS
        </p>
        <p className='text-light-2 text-sm my-2'>About Elektrik</p>
        <p className='text-light-2 text-sm my-2'>Whitepaper</p>
        <p className='text-light-2 text-sm my-2'>Cookie Policy</p>
        <p className='text-light-2 text-sm my-2'>Privacy Policy</p>
        <p className='text-light-2 text-sm my-2'>Terms & Conditions</p>
      </div>

      <div className='flex flex-col px-20'>
        <p className='text-light-1 text-xl uppercase font-medium mb-7'>
          Company
        </p>
        <p className='text-light-2 text-sm my-2'>Become a Partner</p>
        <p className='text-light-2 text-sm my-2'>Work with Us</p>
        <p className='text-light-2 text-sm my-2'>Press about Elektrik</p>
      </div>
      <div className='flex flex-col px-20'>
        <p className='text-light-1 text-xl uppercase font-medium mb-7'>
          Contact
        </p>
        <p className='text-light-2 text-sm my-2'>support@elektrik.com</p>
        <p className='text-light-2 text-sm my-2'>contact@elektrik.com</p>
      </div>

      <p className='absolute bottom-10 right-20 text-dark-4 text-sm'>
        2023 Copyright. All rights protected
      </p>
    </section>
  );
};

export default Footer;
