/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link"

import { MdWifiCalling3 } from "react-icons/md"


import { useState } from "react"
import Image from "next/image";
import CountrySelector from "./countrySelect";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onMouseLeave={() => setIsOpen(false)}
      className="bg-darkblue text-[16px] flex items-center h-[50px] text-white">
      {/* Top bar */}
      <div className=" w-full">
        <div className="w-full lg:w-[95%] 2xl:w-[77%]
            mx-auto px-4 ">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-3">
              <CountrySelector isOpen={isOpen} setIsOpen={setIsOpen} />
              <span
                onMouseEnter={() => setIsOpen(false)}
              >|</span>
              <a
                onMouseEnter={() => setIsOpen(false)}
                href="#faq" className=" hover:text-orange text-white cursor-pointer">FAQ</a>
              <span
                onMouseEnter={() => setIsOpen(false)}
              >|</span>
              <div className='relative'>
                <span ><MdWifiCalling3 className="text-[22px]" /></span>
                <div className='absolute h-5 w-5 rounded-full -top-2 -left-1 bg-orange opacity-50 animate-ping '> </div>
                <div className='absolute h-2.5 w-2.5 rounded-full -top-[3px] left-0 bg-orange animate-pulse'> </div>
              </div>
              <a href="tel:+123456789321" className="hover:text-orange text-white">
                +(123)456789321
              </a>

              {/* <span>FAQ: {contactInfo.phone}</span> */}
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="btn_left rounded-full"
              >
                CAREER
              </Link>

              <Link href="#" className="hover:scale-110 smooth1">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn"
                  width={22}
                  height={22}
                  className=""
                />
              </Link>

              <div className="relative rounded-full px-4 flex bg-white justify-between items-center">
                <input
                  placeholder="Search"
                  className="bg-white text-black w-[200px] border-none outline-none h-[30px] rounded-full px-3 py-1 text-sm focus:outline-none placeholder:text-gray-400"
                />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg"
                  alt="Search"
                  width={20}
                  height={20}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Main navigation */}
    </div>
  )
}

