import Image from "next/image";
import React from "react";

const Tokenomics = () => {
  return (
    <section className='flex flex-1 flex-col items-center justify-center mx-40'>
      <p className='text-light-1 text-3xl uppercase font-medium'>
        $ELTK TOKENOMICS
      </p>
      <p className='w-1/2 text-dark-4 text-sm my-5 text-center'>
        Elektrik's vote-escrow token economy rewards long-term token lockers,
        promoting stability and reducing trade slippage by enhancing liquidity
        pool stickiness. This, along with a focus on liquidity stickiness and
        fair fee distribution, aligns incentives to create a positive flywheel,
        benefiting the overall LightLink ecosystem.
      </p>

      <div>
        <div className='relative'>
          <Image
            src='/assets/tokenomics.svg'
            alt='tokenomics'
            width={1200}
            height={1200}
          />
          <div className='tokenomics-text-1'>
            <p className='text-light-2 text-base'>
              Liquidity is used to make a market, earning fees and improving the
              trading environment
            </p>
          </div>
          <div className='tokenomics-text-2'>
            <p className='text-light-2 text-base'>
              ELTK emissions attract liquidity and LP token locking
            </p>
          </div>
          <div className='tokenomics-text-3'>
            <p className='text-light-2 text-base'>
              veELTK holders receive yield based on the trading volume of the
              pool they voted for and rebase amounts
            </p>
          </div>
          <div className='tokenomics-text-4'>
            <p className='text-light-2 text-base'>
              Higher ELTK emissions leads to more liquidity and a greater
              trading experience, resulting in more trader fees paid to
              liquidity providers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
