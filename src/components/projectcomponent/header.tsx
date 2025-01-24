import Link from "next/link"
import {  Search } from "lucide-react"
import { MdWifiCalling3 } from "react-icons/md"
import { FaInstagram } from "react-icons/fa"
import { BiLogoLinkedin } from "react-icons/bi"
import { LuFacebook } from "react-icons/lu"

export function Header() {
  return (
    <div className="bg-darkblue text-[16px] flex items-center h-[50px] text-white">
      {/* Top bar */}
      <div className=" w-full">
        <div className="w-full lg:w-[95%] 2xl:w-[77%]
            mx-auto px-4 ">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-3">
              {/* <span>COUNTRY+ : {contactInfo.country}</span> */}

              <a href="#faq" className=" hover:text-orange text-white cursor-pointer">FAQ</a>
              <span>|</span>
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
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-orange text-white">
                <FaInstagram className="text-[22px]" />
              </Link>
              <Link href="#" className="hover:text-orange text-white">
                <LuFacebook className="text-[22px]" />
              </Link>
              <Link href="#" className="hover:text-orange text-white">
                <BiLogoLinkedin className="text-[22px]" />
              </Link>
              <div className="relative rounded-full px-4 flex bg-white justify-between items-center">
                <input
                  placeholder="Search"
                  className="bg-white text-black w-[200px] border-none outline-none h-[30px] rounded-full px-3 py-1 text-sm focus:outline-none placeholder:text-gray-400"
                />
                <Search className=" h-5 w-5 text-black " />
              </div>
            </div> 
          </div>
        </div>
      </div>
      {/* Main navigation */}
    </div>
  )
}

