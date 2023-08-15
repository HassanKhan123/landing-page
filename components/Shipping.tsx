import Image from "next/image";
import React from "react";
import ScrollCarousel from "./ScrollCarousel";

const Shipping = () => {
  return (
    <section className='mx-40 mb-40'>
      <div className='flex flex-col items-center justify-center'>
        <Image
          src='/assets/shipping-elektrik.svg'
          alt='shipping-elektrik'
          width={300}
          height={300}
          className='shipping-elektrik-logo'
        />
        <p className='text-light-1 text-3xl uppercase font-medium'>
          What Elektrik is shipping
        </p>
        <p className='text-dark-4 w-1/4 text-sm text-center uppercase'>
          Elektrik is build the greatest user experience as it relates to the
          following services
        </p>

        <ScrollCarousel />
      </div>
    </section>
  );
};

export default Shipping;
