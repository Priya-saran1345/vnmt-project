"use client"
import { useState } from "react"
import { IoMdMenu, IoMdSearch } from "react-icons/io"
import Link from "next/link"
import Image from "next/image"
import NavbarItems from "./Navbar-items"
import { RxCross2 } from "react-icons/rx"
import CountrySelector from "./countrySelect"

const Navbar = () => {
  const [showmenu, setshowmenu] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`text-homeblack py-3 lg:py-2 bg-white sticky shadow-lg top-0 z-[50]`}>
      <div className="w-full p-2 xl:w-[95%] 2xl:w-[75%] mx-auto ">
        <div className="flex w-full justify-between items-center">
          {/* Logo */}
          <div className="w-full">
            <Link href="/">
              <Image
                src={"/images/logo.svg"}
                loading="lazy"
                width={150}
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
          <div className="flex w-full gap-2 items-center mt-2 lg:mt-0 flex-col lg:flex-row justify-end"
          onMouseLeave={() => setIsOpen(false)}
          >
            <CountrySelector isOpen={isOpen} setIsOpen={setIsOpen} />
            <IoMdSearch className="text-2xl text-orange" />
            <button className="uppercase px-4 py-0.5 font-medium bg-orange text-white rounded-lg border-2 border-orange hover:bg-transparent hover:text-orange smooth3"> Contact US </button>
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

