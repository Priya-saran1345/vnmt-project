'use client'
import React, { useState } from 'react'
import Link from "next/link"
import { Search } from 'lucide-react'
import { FiFacebook } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'
import { BiLogoGmail } from 'react-icons/bi'
import { MdWifiCalling3 } from 'react-icons/md'
import Image from 'next/image'
const Footer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
      // Add your search logic here, e.g., call an API or filter a list
    } else {
      console.log("Please enter a search term.");
    }
  };
  return (
    <div className=''>
     

      {/* Footer */}
      <div className='bg-black  -mt-20 pt-28 text-white/80'>
        <div className="w-full lg:w-[95%] 2xl:w-[77%]   mx-auto  py-12 ">


          <div className='flex justify-center mx-auto'>



            <div className='px-4 border-blue border-r-2 w-[20%] pt-3'>
              <h3 className="font-bold mb-4 underline hover:text-blue cursor-pointer">GLOBAL LOCATIONS</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Australia</h4>
                  <p className="text-sm text-white/70 hover:text-orange cursor-pointer">VIC4 Rockwell Cres, Truganina VIC 3029, Australia-0113004747617</p>
                </div>
                <div>
                  <h4 className="font-semibold">India - Gandhinagar, GJ</h4>
                  <p className="text-sm hover:text-orange cursor-pointer text-white/70">
                    113, The Urbania, Kudasan, Gandhinagar, Gujarat - 382421+91 9150234 03569
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">India - Pune, MH</h4>
                  <p className="text-sm text-white/70 hover:text-orange cursor-pointer">
                    6th Floor, 625 & 626, Gera'sImperium Rise, Hinjewadi Phase 2,Pune ,Maharashtra - 41157 +91 9023403569
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">USA</h4>
                  <p className="text-sm text-white/70 hover:text-orange cursor-pointer">
                    San Francisco, CA166 Geary Str STE 1500 #2157 San Francisco, CA-94108
                  </p>
                </div>
              </div>
              <h3 className="font-bold mb-4 underline hover:text-blue cursor-pointer mt-4">INDUSTRIES THAT WE SERVE  </h3>
            </div>
            <div className='border-r-2 px-4 border-blue w-[20%] py-3'>
              <h3 className="font-bold mb-4 underline hover:text-blue cursor-pointer">NETSHUITE</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                    Netsuite Consulting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                    Netsuite Implementation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                    Netsuite Integration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                    Netsuite Optimization                </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                    Netsuite Support & Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                    Netsuite Training
                  </Link>
                </li>
              </ul>
            </div>

            <div className='border-r-2 px-4 border-blue w-[20%] py-3'>
              <h3 className="font-bold mb-4 underline hover:text-blue cursor-pointer">CELIGO</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                    Celigo Customization
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                    Celigo Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                    Celigo Optimization
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                    Celigo Implementation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                    Integration Using Celigo Platform
                  </Link>
                </li>
              </ul>
            </div>
            <div className=' px-4 w-[20%] py-3'>
              <h3 className="font-bold mb-4 underline hover:text-blue cursor-pointer  ">ABOUT COMPANY</h3>
              <ul className="space-y-2 ">
                <li>
                  <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                    Customer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                    Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div className='px-4 w-[20%] py-3'>
              <h3 className="font-bold mb-4 underline hover:text-blue cursor-pointer">CONTACT US</h3>
              <div className="space-y-4">
                <p className='flex hover:text-orange cursor-pointer gap-2'><BiLogoGmail className='!text-orange text-[20px] bg-white' />
                  sales@vnmtsolutions.com</p>
                <p className='flex hover:text-orange cursor-pointer gap-2'><MdWifiCalling3 className='text-white bg-gradient-to-b from-orange  to-white text-[20px] rounded-[15%]' />  61 1300147617</p>

              </div>
              <h3 className="font-bold mb-4 mt-4 underline hover:text-blue cursor-pointer">FOLLOW US@</h3>

              <div className="flex gap-2 mb-4">
                <Link href="#" className="">
                  <FaInstagram className="text-[22px] text-white/80 hover:text-orange" />
                </Link>
                <Link href="#" className="">
                  <FiFacebook className="text-[22px] text-white/80 hover:text-orange" />
                </Link>
                <Link href="#" className="">
                  <GrLinkedinOption className="text-[22px] text-white/80 hover:text-orange" />
                </Link>
              </div>
              <div className="relative bg-white text-black rounded-full shadow-md">
                <div className="relative px-3 w-full flex items-center">
                  <input
                    type="search"
                    placeholder="SEARCH"
                    className="w-full rounded-full border-none outline-none py-[6px]  text-[14px] pl-2 pr-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                  />
                  <div
                    className=" text-[20px] flex items-center justify-center text-white/90 cursor-pointer"
                    onClick={handleSearch}
                  >
                    <Search className="h-full w-full text-black" />
                  </div>
                </div>

              </div>
              <p className='text-[14px]  mt-4 hover:text-orange'>Terms &
                Conditions | Privacy policy</p>
            </div>
          </div>
          <div className='flex gap-2 px-4 text-[14px'>
            <span>Retail </span>
            <span>|</span>
            <span>Wholesale Distribution</span>
            <span>|</span>
            <span>Manufacturing</span>
            <span>|</span>
            <span>Finance</span>
            <span>|</span>
            <span>Professional Services</span>
            <span>|</span>
            <span>Food & Beverage</span>
          </div>
          <div className='flex mt-4 px-4   gap-10'>
            {
              [1, 2, 3, 4, 5, 6, 7, 8].map(elem => {
                return (
                  <Image key={elem} src={`/images/footer${elem}.svg`} height={50} width={64} alt=''></Image>
                )
              })
            }

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center py-4  bg-darkblue  text-sm text-white/90">
        © Copyright 2024 @ VNMT | All rights reserved
      </div>
    </div>
  )
}

export default Footer