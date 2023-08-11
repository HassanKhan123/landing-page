"use client";

import Image from "next/image";
import React from "react";

import { headerLinks } from "@/constants";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className='flex flex-row justify-between'>
      <Image src='/assets/logo.svg' alt='logo' width={180} height={43} />
      <div className='flex flex-row justify-between items-center'>
        {headerLinks.map(link => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <div className='flex flex-col justify-center items-center cursor-pointer'>
              <p
                className={`my-1 mx-5 text-sm text-light-2 ${
                  isActive && "active-menu"
                }`}
              >
                {link.label}
              </p>

              <p className={`${isActive && "active-menu-pointer"}`}></p>
              <p className={`${!isActive && "not-active-menu-pointer"}`}></p>
            </div>
          );
        })}
      </div>
      <div className='btn'>
        <p className='m-3  text-dark-2 text-sm font-bold'>GET EARLY ACCESS</p>
      </div>
    </div>
  );
};

export default Header;
