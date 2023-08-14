import Image from "next/image";
import React from "react";

const Liquidity = () => {
  return (
    <section className='liquidity-container px-40 py-20'>
      <p className='text-light-1 text-3xl uppercase font-bold'>Liquidity</p>

      <div className='flex flex-row justify-between mt-20'>
        <p className='text-light-1 text-2xl uppercase'>Conviction (%)</p>
        <p className='text-dark-4 text-sm w-1/3 text-center'>
          AI makes predictions based on live and historical data, and assigns
          each price prediction a weighting indicating its likelihood of
          occurring
        </p>
      </div>

      <div className='flex flex-row justify-center items-center my-20'>
        <Image
          src='/assets/liquidity-chart.svg'
          alt='liquidity-chart'
          width={1500}
          height={800}
        />
      </div>
    </section>
  );
};

export default Liquidity;
