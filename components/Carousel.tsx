"use client";

import Image from "next/image";
import { useState } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
      img: "/assets/carousel1.svg",
      title: "Swap",
      description:
        "Swap from one token to another based on the price that is determined by the liquidity in Elektriks pools. On Elektrik, this is done by traders directly with a smart contract.",
    },
    {
      img: "/assets/carousel1.svg",
      title: "Liquidity",
      description:
        "Liquidity from one token to another based on the price that is determined by the liquidity in Elektriks pools. On Elektrik, this is done by traders directly with a smart contract.",
    },
    {
      img: "/assets/carousel1.svg",
      title: "Stake",
      description:
        "Stake from one token to another based on the price that is determined by the liquidity in Elektriks pools. On Elektrik, this is done by traders directly with a smart contract.",
    },
  ];

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className='mt-spacing mx-40'>
      <div className='relative carousel-container'>
        {images.map((image, index) => (
          <>
            <Image
              width={400}
              height={400}
              key={index}
              src={`${image.img}`}
              alt={`Image ${index + 1}`}
              className={`absolute w-full h-full transform transition-transform duration-500 ${
                index === activeIndex
                  ? "translate-x-0"
                  : index === (activeIndex + 1) % images.length
                  ? "translate-x-full"
                  : "translate-x-full -translate-y-1/2"
              }`}
            />
          </>
        ))}
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={` ${
                index === activeIndex ? "circle-fill" : "circle-not-fill"
              }`}
            />
          ))}
        </div>
        <div className='flex justify-between items-center p-4 cursor-pointer slider-arrows'>
          <div onClick={handlePrev}>
            <Image
              src='/assets/prev-arrow.svg'
              alt='prev-arrow'
              width={10}
              height={10}
            />
          </div>

          <div onClick={handleNext}>
            <Image
              src='/assets/next-arrow.svg'
              alt='prev-arrow'
              width={10}
              height={10}
              className='z-20'
            />
          </div>
        </div>

        <Image
          width={400}
          height={400}
          key={activeIndex}
          src={`${images[(activeIndex + 1) % images.length].img}`}
          alt={`Image ${((activeIndex + 1) % images.length) + 1}`}
          className={`next-carousel-preview w-1/2 h-full opacity-40`}
        />
      </div>

      <div className='relative'>
        <div className='flex w-1/2 flex-1 flex-col items-center justify-center m-auto  mt-5'>
          <p className='text-light-1 text-xl uppercase font-medium'>
            {images[activeIndex].title}
          </p>
          <p className='text-dark-4 text-center text-sm mt-4 uppercase'>
            {images[activeIndex].description}
          </p>
        </div>

        <div className='flex w-1/2 flex-1 flex-col items-center justify-center m-auto   next-carousel-preview opacity-40'>
          <p className='text-light-1 text-xl uppercase font-medium'>
            {images[(activeIndex + 1) % images.length].title}
          </p>
          <p className='text-dark-4 text-center text-sm mt-4 uppercase'>
            {images[(activeIndex + 1) % images.length].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
