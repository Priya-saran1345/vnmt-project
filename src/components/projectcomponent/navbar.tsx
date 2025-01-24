"use client";
import React, { useEffect, useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import Link from 'next/link';
// import { Useapi } from '@/helpers/apiContext';
import Image from 'next/image';
import NavbarItems from '@/components/projectcomponent/Navbar-items'
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
//   const { basic_details } = Useapi();
  const [showmenu, setshowmenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)
 useEffect(() => {
        // Check if the user has scrolled before, on page load
        const scrollState = localStorage.getItem("isScrolled");
        if (scrollState === "true") {
            setIsScrolled(true);
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            // Store scroll state in localStorage
            localStorage.setItem("isScrolled", window.scrollY > 50 ? "true" : "false");
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div className={`text-homeblack py-3 lg:py-0 bg-white   ${isScrolled ? " animate-slide-down" : "hidden"} sticky shadow-md -top-2 z-20`}>
      <div className='w-full px-4 xl:w-[95%]  2xl:w-[75%] mx-auto'>
        <div className='flex w-full  justify-between items-center '>
          {/* Logo */}
          <div className='w-fit'>

          <Link href="/">
            <Image 
              src={'/images/logo.svg'} 
              width={137} 
              loading='lazy'
              height={58} 
              alt={'vnmt'} 
              className="cursor-pointer"
              />
          </Link>
              </div>
          {/* Desktop Navbar */}
          <div className="hidden w-full  lg:block">
            <NavbarItems  show={0}/>
          </div>
          {/* Mobile Menu Icon */}
          <div className='text-[26px] lg:hidden cursor-pointer' onClick={() => setshowmenu((prev)=>!prev)}>
            {!showmenu&&
              <IoMdMenu />}
              {
               showmenu&&
            <RxCross2 />
              }
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {showmenu && (
        <div className=' lg:hidden absolute px-6 top-[72px] left-0 w-full bg-white shadow-md z-30'>
          <NavbarItems show={1} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
