"use client";
import React, { useEffect, useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import Link from 'next/link';
// import { Useapi } from '@/helpers/apiContext';
import Image from 'next/image';
import NavbarItems from '@/components/projectcomponent/Navbar-items'
import { RxCross2 } from 'react-icons/rx';
import { BiLogoLinkedin } from 'react-icons/bi';
import { Search } from 'lucide-react';
const Navbar = () => {
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
            localStorage.setItem("isScrolled", window.scrollY > 50 ? "true" : "false");
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div className={`text-homeblack py-3 lg:py-0 bg-white   ${isScrolled ? " animate-slide-down" : "hidden"} sticky shadow-lg -top-1 z-[50]`}>
      <div className='w-full px-4 xl:w-[95%]  2xl:w-[75%] mx-auto'>
        <div className='flex w-full  justify-between items-center '>
          {/* Logo */}
          <div className='w-fit'>
          <Link href="/">
            <Image 
              src={'/images/logo.svg'} 
              loading='lazy'
              width={200} 
              height={35}
              alt={'vnmt'} 
              className="cursor-pointer"
              />
          </Link>
              </div>
          {/* Desktop Navbar */}
          <div className="hidden w-full  lg:block">
            <NavbarItems  show={0}/>
          </div>
                      <div className='flex  w-fit  gap-2 items-center  mt-2 lg:mt-0 flex-col lg:flex-row  justify-end'>
                {/* <Link target='_blank' href={'https://meetings.hubspot.com/sakshi-jass?uuid=ae684c90-b22d-4aed-a972-4de20bef7f87'}>
                    <button className=' max-w-[180px]  py-[8px]   border-2 px-2 2xl:px-4 border-pink rounded-full meeting-btn'>
                        <span className="meeting-text font-semibold text-sm ">Contact Us</span>
                    </button>
                </Link> */}
                <Link href="#" className="hover:text-orange text-blue">
                    <BiLogoLinkedin className="text-[22px]" />
                </Link>
                <div className="relative border-blue bg-white border-[2px] rounded-full px-4 flex  justify-between items-center">
                    <input
                        placeholder="Search"
                        className="bg-white border-slate-200 text-black 2xl:w-[200px] xl:w-[170px] lg:w-[140px] w-[100px]   outline-none h-[30px] rounded-full
                   px-3 py-1 text-sm focus:outline-none placeholder:text-gray-400"
                    />
                    <Search className=" h-5 w-5 text-black " />
                </div>

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
