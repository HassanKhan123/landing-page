import Image from "next/image";
import React from "react";

const Roadmap = () => {
  return (
    <section
      className='mx-40 flex flex-col items-center justify-center'
      id='roadmap'
    >
      <p className='text-light-1 text-4xl uppercase font-bold'>Roadmap</p>

      <div className='relative'>
        <Image
          src='/assets/roadmap.svg'
          alt='roadmap'
          width={500}
          height={500}
          style={{ marginTop: -40 }}
        />

        <div className='roadmap-text-section-1'>
          <div className='flex flex-row'>
            <p className='text-xl quarter-3'>Q3 2023 </p>
            {"  "}
            <p className='text-xl month ml-2'> This Month</p>
          </div>
          <p className='text-light-1 text-3xl uppercase font-medium'>
            ELEKTRIK V1
          </p>
          <ul className='roadmap-list pl-4'>
            <li className='text-dark-4'>
              Launch Elektrik V1 testnet and mainnet
            </li>
            <li className='text-dark-4'>
              Partner with LightLink enterprises to assist launch liquidity
              pools
            </li>
            <li className='text-dark-4'>Start phase 1 of ELTK airdrop</li>
          </ul>
        </div>

        <div className='roadmap-text-section-2'>
          <p className='text-xl quarter-2'>Q4 2023 </p>

          <p className='text-light-1 text-3xl uppercase font-medium'>
            ELEKTRIK V2
          </p>
          <ul className='roadmap-list pl-4'>
            <li className='text-dark-4'>
              Undergo audit for Elektrik V2 smart contracts
            </li>
            <li className='text-dark-4'>Elektrik NFT collection goes love</li>
            <li className='text-dark-4'>Launch Elektrik V2 testnet</li>
          </ul>
        </div>
        <div className='roadmap-text-section-3'>
          <p className='text-xl quarter-2'>Q1 2024 </p>
          <p className='text-light-1 text-3xl uppercase font-medium'>
            Mainnet & Airdrop
          </p>

          <ul className='roadmap-list pl-4'>
            <li className='text-dark-4'>Launch Elektrik V2 mainnet</li>
            <li className='text-dark-4'>
              Work with LightLink foundation and enterprises for pool bribery
              purposes
            </li>
            <li className='text-dark-4'>Start phase 2 of ELTK airdrop</li>
          </ul>
        </div>
        <div className='roadmap-text-section-4'>
          <p className='text-xl quarter-2'>Q1 2024 </p>
          <p className='text-light-1 text-3xl uppercase font-medium'>
            Optimize DLP & Mobile
          </p>

          <ul className='roadmap-list pl-4'>
            <li className='text-dark-4'>
              Upgrade mobile version to include additional trading features
            </li>
            <li className='text-dark-4'>
              Optimize and offer more dynamic liquidity provision opportunities
              for LPs
            </li>
            <li className='text-dark-4'>Start phase 3 of ELTK airdrop</li>
          </ul>
        </div>
        <div className='roadmap-text-section-5'>
          <p className='text-xl quarter-2'>Q3 2024 </p>
          <p className='text-light-1 text-3xl uppercase font-medium'>
            Multi-Chain
          </p>

          <ul className='roadmap-list pl-4'>
            <li className='text-dark-4'>
              Go multi-chain with a launch on another layer 2 network
            </li>
            <li className='text-dark-4'>
              Integrate cross-network, purpose-driven bridges to prevent
              liquidity fragmentation
            </li>
            <li className='text-dark-4'>End phase 3 of ELTK airdrop</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
