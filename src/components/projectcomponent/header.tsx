import Link from "next/link"
import {  Search } from "lucide-react"
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdWifiCalling3 } from "react-icons/md"
import { FaInstagram } from "react-icons/fa"
import { BiLogoLinkedin } from "react-icons/bi"
import { LuFacebook } from "react-icons/lu"

export function Header() {
  return (
    <div className="bg-blue text-[16px] flex items-center h-[72px] text-white">
      {/* Top bar */}
      <div className=" w-full">
        <div className="w-full lg:w-[95%] 2xl:w-[77%]
            mx-auto px-4 ">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-3">
              <span><LiaFlagUsaSolid className="text-[24px]" /></span>
              {/* <span>COUNTRY+ : {contactInfo.country}</span> */}
              <span>COUNTRY+ </span>
              <span>|</span>
              <span>FAQ</span>
              <span>|</span>
              <span><MdWifiCalling3 className="text-[22px]" />
              </span>
              <span>
                +(123)456789321
              </span>
              {/* <span>FAQ: {contactInfo.phone}</span> */}
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-blue-200">
                <FaInstagram className="text-[22px]" />
              </Link>
              <Link href="#" className="hover:text-blue-200">
                <LuFacebook className="text-[22px]" />
              </Link>
              <Link href="#" className="hover:text-blue-200">
                <BiLogoLinkedin className="text-[22px]" />
              </Link>
              <div className="relative rounded-full px-4 flex bg-white justify-between items-center">
                <input
                  type="search"
                  placeholder="Search"
                  className="bg-white text-black w-[200px] border-none outline-none h-[40px] rounded-full px-3 py-1 text-sm focus:outline-none "
                />
                <Search className=" h-4 w-4  text-blue-300 " />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main navigation */}

    </div>
  )
}

