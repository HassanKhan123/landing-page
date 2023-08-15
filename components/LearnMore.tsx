"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

const LearnMore = () => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  //   useEffect(() => {
  //     // Get the width of each carousel item
  //     const itemWidth = itemRefs.current[0]?.offsetWidth || 0;

  //     // Calculate the scroll amount for each step (2 items)
  //     const scrollAmount = itemWidth * 2;

  //     // Add scroll event listener to the container
  //     const handleScroll = () => {
  //       if (containerRef.current) {
  //         const scrollLeft = containerRef.current.scrollLeft;
  //         containerRef.current.scrollLeft =
  //           Math.round(scrollLeft / scrollAmount) * scrollAmount;
  //       }
  //     };

  //     containerRef.current.addEventListener("scroll", handleScroll);

  //     return () => {
  //       containerRef.current.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <section className='ml-40 my-20'>
      <p className='text-light-1 text-3xl uppercase font-bold my-10'>
        Learn more about elektrik
      </p>

      <div className='flex-container'>
        <div className='flex-item p-4 max-w-md'>
          <div className='learn-more-container box-1'>
            <div className='relative'>
              <Image
                src='/assets/learn-more-img-1.svg'
                alt='learn-more-img-1'
                width={600}
                height={600}
                className='mx-auto'
              />

              <p className='new uppercase font-bold absolute top-0'>New</p>
            </div>
            <div className='card-text-box'>
              <p className='text-light-1 text-xl uppercase my-5'>
                new chain standard for web 3.0 is here
              </p>
              <p className='text-dark-4 text-sm my-2'>
                Professional-grade, Decentralized Exchange designed by traders,
                for traders.professional-grade, Decentralized Exchange designed
                by traders, for traders. grade, Decentralized Exchange designed
                by traders, for traders.professional-grade, Decentralized
                Exchange designed by traders, for traders. designed by
                traders...
              </p>
              <div className='flex flex-row justify-between items-center mb-10'>
                <p className='text-dark-4 text-sm my-2 opacity-40'>
                  23.07.2023
                </p>
                <Image
                  src='/assets/active_arrow_forward.svg'
                  alt='active_arrow_forward'
                  height={30}
                  width={30}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex-item p-4 max-w-md'>
          <div className='flex flex-col container-2'>
            <div className='learn-more-container box-2'>
              <div className='flex flex-row'>
                <Image
                  src='/assets/learn-more-img-2.svg'
                  alt='learn-more-img-2'
                  height={250}
                  width={250}
                  className='self-start'
                />

                <div className='mx-8 my-2'>
                  <p className='text-light-1 text-xl uppercase'>
                    ETH 3.0 when?!
                  </p>
                  <p className='text-dark-4 text-sm my-2'>
                    Professional-grade, Decentralized Exchange designed by
                    traders, for traders.professional-grade, Decentralized
                    Exchange designed by traders, for traders.
                  </p>
                  <p className='text-dark-4 text-sm my-2'>
                    Professional-grade, Decentralized Exchange designed by
                    traders, for
                  </p>
                  <div className='flex flex-row justify-between items-center mb-10'>
                    <p className='text-dark-4 text-sm my-2 opacity-40'>
                      23.07.2023
                    </p>
                    <Image
                      src='/assets/arrow_forward.svg'
                      alt='arrow_forward'
                      height={30}
                      width={30}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='learn-more-container-2 box-2'>
              <div className='flex flex-row'>
                <Image
                  src='/assets/learn-more-img-3.svg'
                  alt='learn-more-img-2'
                  height={250}
                  width={250}
                  className='self-start'
                />

                <div className='mx-8 my-2'>
                  <p className='text-light-1 text-xl uppercase'>
                    Internet Computers
                  </p>
                  <p className='text-dark-4 text-sm my-2'>
                    Professional-grade, Decentralized Exchange designed by
                    traders, for traders.professional-grade, Decentralized
                    Exchange designed by traders, for traders.
                  </p>
                  <p className='text-dark-4 text-sm my-2'>
                    Professional-grade, Decentralized Exchange designed by
                    traders, for
                  </p>
                  <div className='flex flex-row justify-between items-center mb-10'>
                    <p className='text-dark-4 text-sm my-2 opacity-40'>
                      23.07.2023
                    </p>
                    <Image
                      src='/assets/arrow_forward.svg'
                      alt='arrow_forward'
                      height={30}
                      width={30}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-item p-4 max-w-md'>
          <div className='learn-more-container box-1'>
            <div className='relative'>
              <Image
                src='/assets/learn-more-img-1.svg'
                alt='learn-more-img-1'
                width={600}
                height={600}
                className='mx-auto'
              />

              <p className='new uppercase font-bold absolute top-0'>New</p>
            </div>
            <div className='card-text-box'>
              <p className='text-light-1 text-xl uppercase my-5'>
                new chain standard for web 3.0 is here
              </p>
              <p className='text-dark-4 text-sm my-2'>
                Professional-grade, Decentralized Exchange designed by traders,
                for traders.professional-grade, Decentralized Exchange designed
                by traders, for traders. grade, Decentralized Exchange designed
                by traders, for traders.professional-grade, Decentralized
                Exchange designed by traders, for traders. designed by
                traders...
              </p>
              <div className='flex flex-row justify-between items-center mb-10'>
                <p className='text-dark-4 text-sm my-2 opacity-40'>
                  23.07.2023
                </p>
                <Image
                  src='/assets/active_arrow_forward.svg'
                  alt='active_arrow_forward'
                  height={30}
                  width={30}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex-item p-4 max-w-md'>
          <div className='learn-more-container box-1'>
            <div className='relative'>
              <Image
                src='/assets/learn-more-img-1.svg'
                alt='learn-more-img-1'
                width={600}
                height={600}
                className='mx-auto'
              />

              <p className='new uppercase font-bold absolute top-0'>New</p>
            </div>
            <div className='card-text-box'>
              <p className='text-light-1 text-xl uppercase my-5'>
                new chain standard for web 3.0 is here
              </p>
              <p className='text-dark-4 text-sm my-2'>
                Professional-grade, Decentralized Exchange designed by traders,
                for traders.professional-grade, Decentralized Exchange designed
                by traders, for traders. grade, Decentralized Exchange designed
                by traders, for traders.professional-grade, Decentralized
                Exchange designed by traders, for traders. designed by
                traders...
              </p>
              <div className='flex flex-row justify-between items-center mb-10'>
                <p className='text-dark-4 text-sm my-2 opacity-40'>
                  23.07.2023
                </p>
                <Image
                  src='/assets/active_arrow_forward.svg'
                  alt='active_arrow_forward'
                  height={30}
                  width={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
