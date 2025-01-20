'use client'
import React, { useState } from 'react'
import Link from "next/link"
import { Search } from 'lucide-react'

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
        <div className="text-center relative z-50 w-[50%] mx-auto bg-blue-600 rounded-3xl text-white py-12 px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started ?</h2>
          <div className='bg-white w-fit px-10 mx-auto text-orange-400 py-[10px] rounded-full' >
            Book Consultant Now
          </div>
        </div>

        {/* Footer */}
        <div className='bg-black -mt-20 pt-28 text-white '>
            
        <div className=" w-full lg:w-[95%] 2xl:w-[77%] mx-auto flex justify-center  py-12 ">
          <div className='border-r-2 px-4 border-orange-500'>
            <h3 className="font-bold mb-4">ABOUT COMPANY</h3>
            <ul className="space-y-2 ">
              <li>
                <Link href="#" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Career
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Customer
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div className='border-r-2 px-4 border-orange-500'>
            <h3 className="font-bold mb-4">CELIGO</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Celigo Customization
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Celigo Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Celigo Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Celigo Implementation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Integration Using Celigo Platform
                </Link>
              </li>
            </ul>
          </div>

          <div className='border-r-2 px-4 border-orange-500'>
            <h3 className="font-bold mb-4">GLOBAL LOCATIONS</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Australia</h4>
                <p className="text-sm text-gray-400">VIC4 Rockwell Cres, Truganina VIC 3029, Australia-0113004747617</p>
              </div>
              <div>
                <h4 className="font-semibold">India - Gandhinagar, GJ</h4>
                <p className="text-sm text-gray-400">
                  113, The Urbania, Kudasan, Gandhinagar, Gujarat - 382421+91 9150234 03569
                </p>
              </div>
              <div>
                <h4 className="font-semibold">USA</h4>
                <p className="text-sm text-gray-400">
                  San Francisco, CA166 Geary Str STE 1500 #2157 San Francisco, CA-94108
                </p>
              </div>
            </div>
          </div>
          <div className='px-4'>
            <h3 className="font-bold mb-4">CONTACT US</h3>
            <div className="space-y-4">
              <p>sales@vnmtsolutions.com</p>
              <p>61 1300147617</p>
              <div className="relative bg-white text-black rounded-full shadow-md">
      <input
        type="search"
        placeholder="Search"
        className="w-full rounded-full border-none outline-none py-2 pl-3 pr-10"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <Search
        className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 cursor-pointer"
        onClick={handleSearch}
      />
    </div>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-blue-400">
                  {/* <Instagram className="h-5 w-5" /> */}
                </Link>
                <Link href="#" className="hover:text-blue-400">
                  {/* <Facebook className="h-5 w-5" /> */}
                </Link>
                <Link href="#" className="hover:text-blue-400">
                  {/* <Linkedin className="h-5 w-5" /> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        </div>

        {/* Copyright */}
        <div className="text-center py-6  border-t border-gray-800 text-sm text-gray-400">
          © Copyright 2024 @ VNMT | All rights reserved
        </div>
    </div>
  )
}

export default Footer