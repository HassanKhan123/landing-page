"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

const ScrollCarousel = () => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    // Get the width of each carousel item
    const itemWidth = itemRefs.current[0]?.offsetWidth || 0;

    // Calculate the scroll amount for each step (2 items)
    const scrollAmount = itemWidth * 2;

    // Add scroll event listener to the container
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        containerRef.current.scrollLeft =
          Math.round(scrollLeft / scrollAmount) * scrollAmount;
      }
    };

    containerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      containerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className='flex space-x-4 p-4 my-10'
      style={{ scrollSnapType: "x mandatory" }}
    >
      <div className='shipping-card shipping-card-1'>
        <p className='text-light-1 text-2xl uppercase font-medium text-left'>
          Swaps
        </p>
        <p className='text-dark-4 text-sm uppercase my-6'>
          From basic limit orders to advanced icebergs, Elektrik redefines the
          on-chain swap experience by giving users access to features previously
          reserved for CEXs.
        </p>
        <Image
          src='/assets/shipping-card-1.svg'
          alt='shipping-card-1'
          width={212}
          height={120}
          className='self-center'
        />
      </div>

      <div className='shipping-card shipping-card-2'>
        <p className='text-light-1 text-2xl uppercase font-medium text-left'>
          Trading
        </p>
        <p className='text-dark-4 text-sm uppercase my-6'>
          Elektrik enables its users to treat spot swaps and limit orders in the
          familiar derivative format; tracking PnL, average entry, as well as a
          visualization of resting orders on the chart.
        </p>
        <Image
          src='/assets/shipping-card-2.svg'
          alt='shipping-card-1'
          width={212}
          height={120}
          className='self-center'
        />
      </div>

      <div className='shipping-card shipping-card-3'>
        <p className='text-light-1 text-2xl uppercase font-medium text-left'>
          Capital Efficiency
        </p>
        <p className='text-dark-4 text-sm uppercase my-6'>
          Elektrik's design focuses on minimizing costs and slippage, providing
          traders with a capital-efficient platform to maximize their trading
          performance and profits.
        </p>
        <Image
          src='/assets/shipping-card-3.svg'
          alt='shipping-card-1'
          width={212}
          height={120}
          className='self-center'
        />
      </div>
      <div className='shipping-card shipping-card-1'>
        <p className='text-light-1 text-2xl uppercase font-medium text-left'>
          Capital Efficiency
        </p>
        <p className='text-dark-4 text-sm uppercase my-6'>
          Elektrik's design focuses on minimizing costs and slippage, providing
          traders with a capital-efficient platform to maximize their trading
          performance and profits.
        </p>
        <Image
          src='/assets/shipping-card-3.svg'
          alt='shipping-card-1'
          width={212}
          height={120}
          className='self-center'
        />
      </div>

      {/* {[...Array(10)].map((_, index) => (
        <div
          key={index}
          ref={el => (itemRefs.current[index] = el)}
          className='w-1/2 bg-blue-300 p-4 flex-shrink-0 scroll-snap-align-start'
        >
          Item {index + 1}
        </div>
      ))} */}
    </div>
  );
};

export default ScrollCarousel;
