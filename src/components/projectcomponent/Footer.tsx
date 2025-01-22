"use client"

import React, { useRef, useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { FiFacebook, FiPhoneCall } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa"
import { GrLinkedinOption } from "react-icons/gr"
import { BiLogoGmail } from "react-icons/bi"
import { MdOutlineKeyboardDoubleArrowUp, MdWifiCalling3 } from "react-icons/md"
import Image from "next/image"
// import ReactPlayer from "react-player"
import { IoLogoWhatsapp } from "react-icons/io";

import { motion, useInView  } from "framer-motion";
const Footer = () => {
  // const targetSectionRef = useRef<HTMLElement | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [searchTerm, setSearchTerm] = useState("")
  

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm)
    } else {
      console.log("Please enter a search term.")
    }
  }

  const locationData = [
    {
      country: "Australia",
      address: "VIC4 Rockwell Cres, Truganina VIC 3029, Australia-0113004747617",
    },
    {
      country: "India - Gandhinagar, GJ",
      address: "113, The Urbania, Kudasan, Gandhinagar, Gujarat - 382421+91 9150234 03569",
    },
    {
      country: "India - Pune, MH",
      address:
        "6th Floor, 625 & 626, Gera's Imperium Rise, Hinjewadi Phase 2, Pune, Maharashtra - 41157 +91 9023403569",
    },
    {
      country: "USA",
      address: "San Francisco, CA166 Geary Str STE 1500 #2157 San Francisco, CA-94108",
    },
  ]

  const industries = [
    "Retail",
    "Wholesale Distribution",
    "Manufacturing",
    "Finance",
    "Professional Services",
    "Food & Beverage",
  ]

  const footerSections = [
    {
      title: "NETSUITE",
      links: [
        "Netsuite Consulting",
        "Netsuite Implementation",
        "Netsuite Integration",
        "Netsuite Optimization",
        "Netsuite Support & Maintenance",
        "Netsuite Training",
      ],
    },
    {
      title: "CELIGO",
      links: [
        "Celigo Customization",
        "Celigo Support",
        "Celigo Optimization",
        "Celigo Implementation",
        "Integration Using Celigo Platform",
      ],
    },
    {
      title: "ABOUT COMPANY",
      links: ["About Us", "Career", "Customer", "Stories", "Blogs", "Case Studies"],
    },
  ]

  return (
    <div className="pb-0">
      {/* Footer */}
      <div className="bg-black -mt-20 pt-28 text-white/80 relative overflow-hidden">
        {/* Video Background */}
<video 
  src="/images/bg-video.mp4" 
  autoPlay 
  loop 
  muted 
  style={{ position: 'absolute', inset: '0', objectFit: 'cover', zIndex: 10, width: "100%", height:"100%" }} 
  className="opacity-20"
/>


        {/* Content */}
        <div className="">
          <div className="flex justify-center  w-full relative lg:w-[95%] 2xl:w-[77%] mx-auto py-12 z-10">
            {/* Global Locations */}
            <div className="px-4 border-blue border-r-2 w-[20%] pt-3">
              <h3 className="font-bold mb-4 underline  cursor-pointer">GLOBAL LOCATIONS</h3>
              <div className="space-y-4">
                {locationData.map((loc, index) => (
                  <div key={index}>
                    <h4 className="font-semibold">{loc.country}</h4>
                    <p className="text-sm text-white/70 hover:text-orange cursor-pointer">{loc.address}</p>
                  </div>
                ))}
              </div>
              <h3 className="font-bold mb-4 underline  cursor-pointer mt-4">INDUSTRIES THAT WE SERVE</h3>
            </div>
            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={index} className="border-r-2 px-4 border-blue w-[20%] py-3">
                <h3 className="font-bold mb-4 underline  cursor-pointer">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-white/80 hover:text-orange text-[15px]">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Us */}
            <div className="px-4 w-[20%] py-3">
              <h3 className="font-bold mb-4 underline  cursor-pointer">CONTACT US</h3>
              <div className="space-y-4">
                <p className="flex hover:text-orange cursor-pointer gap-2">
                  <BiLogoGmail className="!text-orange text-[20px] bg-white" />
                  sales@vnmtsolutions.com
                </p>
                <p className="flex hover:text-orange cursor-pointer gap-2">
                  <MdWifiCalling3 className="text-white bg-gradient-to-b from-orange to-white text-[20px] rounded-[15%]" />
                  61 1300147617
                </p>
              </div>
              <h3 className="font-bold mb-4 mt-4 underline hover:text-blue cursor-pointer">FOLLOW US@</h3>
              <div className="flex gap-2 mb-4">
                <Link href="#">
                  <FaInstagram className="text-[22px] text-white/80 hover:text-orange" />
                </Link>
                <Link href="#">
                  <FiFacebook className="text-[22px] text-white/80 hover:text-orange" />
                </Link>
                <Link href="#">
                  <GrLinkedinOption className="text-[22px] text-white/80 hover:text-orange" />
                </Link>
              </div>
              <div className="relative bg-white text-black rounded-full shadow-md">
                <div className="relative px-3 w-full flex items-center">
                  <input
                    type="search"
                    placeholder="SEARCH"
                    className="w-full rounded-full border-none outline-none py-[6px] text-[14px] pl-2 pr-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSearch()
                      }
                    }}
                  />
                  <div
                    className="text-[20px] flex items-center justify-center text-white/90 cursor-pointer"
                    onClick={handleSearch}
                  >
                    <Search className="h-full w-full text-black" />
                  </div>
                </div>
              </div>
              <p className="text-[14px] mt-4 hover:text-orange">Terms & Conditions | Privacy policy</p>
            </div>
          </div>
          <div className="ml-[11.5%] mr-5 mb-12">


            {/* Industries */}
            <div className="flex gap-2 px-4 text-[14px] relative z-10">
              {industries.map((industry, index) => (
                <span key={index}>
                  {index !== 0 && "| "}
                  {industry}
                </span>
              ))}
            </div>

            {/* Footer Logos */}
            <div 
            ref={sectionRef}
            className="flex justify-between items-center">

              <div className="flex items-center mt-4 px-4 gap-10 relative z-10">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((elem, index) => (
                  <motion.div
                    key={elem}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0  } : {}}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <Image src={`/images/footer${elem}.svg`} height={50} width={64} alt={`Footer logo ${elem}`} />
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-8 items-end">


                <div className="flex flex-col gap-2 items-center justify-center ">
                  <div
                    className="bg-orange rounded-full flex justify-center cursor-pointer items-center border-[1px] border-white w-[40px] h-[40px]"
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth", // Smooth scroll effect
                      })
                    }
                  >
                    <MdOutlineKeyboardDoubleArrowUp className="text-[26px]" />
                  </div>
                  <p className="text-white
">Scroll to Top</p>
                </div>
                <div className="bg-white border-blue border-[1px] p-4 rounded-md animate-zoom">
                  <p className="text-blue text-center font-semibold mb-2">Quick Connect </p>
                  <div className="flex gap-2 items-center font-semibold">
                    <IoLogoWhatsapp className="text-green-500 text-[28px]" />
                    <p className="text-black">Whatsapp Now</p>
                  </div>
                  <div className="flex gap-2 items-center font-semibold mt-2">
                    <FiPhoneCall className="text-black text-[23px]" />
                    <p className="text-black">+(91) 9876543212</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 bg-darkblue text-sm text-white/90">
        © Copyright 2024 @ VNMT | All rights reserved
      </div>
    </div>
  )
}

export default Footer
