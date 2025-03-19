"use client"
import { useState } from "react"
import { IoMdMenu } from "react-icons/io"
import Link from "next/link"
import Image from "next/image"
import NavbarItems from "./Navbar-items"
import { RxCross2 } from "react-icons/rx"
import { BiLogoLinkedin } from "react-icons/bi"
import { Search } from "lucide-react"
import { IoIosArrowForward } from "react-icons/io"

const Navbar = () => {
  const [showmenu, setshowmenu] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`text-homeblack py-3 lg:py-0 bg-white sticky shadow-lg top-0 z-[50]`}>
      <div className="w-full px-4 xl:w-[95%] 2xl:w-[75%] mx-auto">
        <div className="flex w-full justify-between items-center">
          {/* Logo */}
          <div className="w-fit">
            <Link href="/">
              <Image
                src={"/images/logo.svg"}
                loading="lazy"
                width={200}
                height={35}
                alt={"vnmt"}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden w-full lg:block">
            <NavbarItems show={0} />
          </div>

          {/* Right Side Elements */}
          <div className="flex w-fit gap-2 items-center mt-2 lg:mt-0 flex-col lg:flex-row justify-end">
            {/* LinkedIn Icon */}
            <Link href="#" className="hover:text-orange text-blue">
              <BiLogoLinkedin className="text-[22px]" />
            </Link>

            {/* Search Bar */}
            <div className="relative border-blue bg-white border-[2px] rounded-full px-4 flex justify-between items-center">
              <input
                placeholder="Search"
                className="bg-white border-slate-200 text-black 2xl:w-[200px] xl:w-[170px] lg:w-[140px] w-[100px] outline-none h-[30px] rounded-full
                   px-3 py-1 text-sm focus:outline-none placeholder:text-gray-400"
              />
              <Search className="h-5 w-5 text-black" />
            </div>

            {/* US Flag */}
            <div className="hidden lg:flex items-center">
              <Image src="/images/us-flag.svg" alt="US" width={24} height={16} className="rounded" />
              <span className="ml-1">▼</span>
            </div>

            {/* Contact Us Button */}
            <div className="hidden lg:block">
              <div
                className={`
                  flex px-4 py-2 bg-orange rounded-full text-white font-semibold smooth1
                  ${isHovered ? "pr-8 border-orange" : "border-white"} 
                  gap-1 items-center cursor-pointer text-[16px] relative
                `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                CONTACT US
                <IoIosArrowForward
                  className={`absolute right-2 transition-all duration-300 transform 
                    ${isHovered ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
                  size={20}
                />
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="text-[26px] lg:hidden cursor-pointer" onClick={() => setshowmenu((prev) => !prev)}>
            {!showmenu && <IoMdMenu />}
            {showmenu && <RxCross2 />}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {showmenu && (
        <div className="lg:hidden absolute px-6 top-[72px] left-0 w-full bg-white shadow-md z-30">
          <NavbarItems show={1} />
        </div>
      )}
    </div>
  )
}

export default Navbar

