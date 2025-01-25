"use client"

import React, { useRef, useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { FiFacebook, FiPhoneCall } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa"
import { GrLinkedinOption } from "react-icons/gr"
// import { BiLogoGmail } from "react-icons/bi"
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md"
import Image from "next/image"
// import ReactPlayer from "react-player"
import { IoLogoWhatsapp } from "react-icons/io";

import { motion, useInView } from "framer-motion";
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
      <div className="bg-black -mt-20 pt-28 text-white/85 text-base relative overflow-hidden">
        {/* Video Background */}
        <video
          src="/images/bg-video.mp4"
          autoPlay
          loop
          muted
          style={{ position: 'absolute', inset: '0', objectFit: 'cover', zIndex: 10, width: "100%", height: "100%" }}
          className="opacity-20"
        />


        {/* Content */}
        <div className="">
          <div className="flex justify-center  w-full relative lg:w-[95%] 2xl:w-[77%] mx-auto py-12 z-10">
            {/* Global Locations */}
            <div className="px-4 border-blue border-r-2 w-[20%] pt-3">
              <h3 className="font-bold mb-4 underline-custom  cursor-pointer">GLOBAL LOCATIONS</h3>
              <div className="space-y-4">
                {locationData.map((loc, index) => (
                  <div key={index}>
                    <h4 className="font-semibold">{loc.country}</h4>
                    <p className=" text-white/85 text-base hover:text-orange cursor-pointer">{loc.address}</p>
                  </div>
                ))}
              </div>
              <h3 className="font-bold underline-custom mt-4">INDUSTRIES THAT WE SERVE</h3>
            </div>
            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={index} className="border-r-2 px-4 border-blue w-[20%] py-3">
                <h3 className="font-bold mb-4 underline-custom  cursor-pointer">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-white/85 text-base hover:text-orange text-[15px]">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Contact Us */}
            <div className="px-4 w-[20%] py-3">
              <h3 className="font-bold mb-4 underline-custom  cursor-pointer">CONTACT US</h3>
              <div className="space-y-4">
                <p className="flex hover:text-orange cursor-pointer gap-2">
                  <Image src={'/images/mail.svg'} alt="" height={22} width={22}></Image>

                  {/* <BiLogoGmail className="!text-orange text-[20px] bg-white" /> */}
                  sales@vnmtsolutions.com
                </p>
                <p className="flex hover:text-orange cursor-pointer gap-2">
                  <Image src={'/images/call.svg'} alt="" height={24} width={24}></Image>

                  {/* <MdWifiCalling3 className="text-white bg-gradient-to-b from-orange to-white text-[20px] rounded-[15%]" /> */}
                  61 1300147617
                </p>
              </div>
              <h3 className="font-bold mb-4 mt-4 underline-custom hover:text-blue cursor-pointer">FOLLOW US@</h3>
              <div className="flex gap-2 mb-4">
                <Link href="#" className="border p-1.5 hover:border-pink-500 smooth1 hover:scale-105 rounded-md group">
                  <FaInstagram className="text-[22px] text-white/85  group-hover:text-pink-500" />
                </Link>
                <Link href="#" className="border p-1.5 hover:border-lightblue smooth1 hover:scale-105 rounded-md group">
                  <FiFacebook className="text-[22px] text-white/85  group-hover:text-lightblue" />
                </Link>
                <Link href="#" className="border p-1.5 hover:border-blue smooth1 hover:scale-105 rounded-md group">
                  <GrLinkedinOption className="text-[22px] text-white/85  group-hover:text-blue" />
                </Link>
              </div>
              <div className="relative bg-white text-black rounded-full shadow-md">
                <div className="relative px-3 w-full flex items-center">
                  <input
                    type="search"
                    placeholder="Search"
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
                    className="text-[20px] flex items-center justify-center text-white/85 text-base cursor-pointer"
                    onClick={handleSearch}
                  >
                    <Search className="h-full w-full text-black" />
                  </div>
                </div>
              </div>
              <p className="text-[14px] mt-4"><span className="text-white hover:text-orange cursor-pointer"> Terms & Conditions</span> | <span className="text-white hover:text-orange cursor-pointer"> Privacy policy</span> </p>
            </div>
          </div>
          <div className="ml-2 lg:ml-[3%] 2xl:ml-[11.5%] mr-5 mb-12">


            {/* Industries */}
            <div className="flex gap-2 px-4 text-[14px] relative z-10">
              {industries.map((industry, index) => (
                <span key={index} >
                  {index !== 0 && "| "}
                  <span className="hover:text-orange text-white cursor-pointer"> {industry} </span>
                </span>
              ))}
            </div>
            {/* Footer Logos */}
            <div
              ref={sectionRef}
              className="flex justify-between items-center">




              <div className=" z-40 mt-4 flex-1 ">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="infinite-scroll-container "
                >
                  <div className="infinite-scroll gap-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((elem, index) => (
                      <motion.div
                        key={elem}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="flex items-center"
                      >
                        <Image
                          src={`/images/footer${elem}.svg`}
                          height={50}
                          width={90}
                          alt={`Footer logo ${elem}`}
                          className="hover:scale-110"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>















              <div className="flex gap-8 items-end">
                <div className="flex fixed bottom-8 right-[5%] flex-col z-20 gap-2 items-center justify-center">
                  <div
                    className="relative group"
                  >
                    <div
                      className="bg-orange hover:scale-105 smooth3 rounded-full flex justify-center cursor-pointer items-center border-[1px] border-white w-[40px] h-[40px]"
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth", // Smooth scroll effect
                        })
                      }
                    >
                      <MdOutlineKeyboardDoubleArrowUp className="text-[26px]" />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-12 text-nowrap opacity-0 -left-4 group-hover:opacity-100
         transition-opacity duration-300 bg-orange text-white text-xs rounded py-1 px-2">
                      Scroll to Top
                    </div>
                  </div>
                </div>

                <div className="bg-[#fff] z-40 border-blue border-[1px] p-4 rounded-lg shadow-md animate-zoom">
                  <p className="text-blue text-center font-semibold mb-2">Quick Connect </p>

                  <a className="flex gap-2 items-center cursor-pointer group z-50" href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" >
                    <IoLogoWhatsapp className="text-green-500 text-[28px] cursor-pointer" />
                    <p className="text-black group-hover:text-orange cursor-pointer group-hover:font-semibold smooth1">Whatsapp Now</p>
                  </a>

                  <a className="flex gap-2 items-center cursor-pointer group z-50 mt-2" href="tel:+91123456789" target="_blank" rel="noopener noreferrer" >
                    <FiPhoneCall className="text-black text-[23px] cursor-pointer" />
                    <p className="text-black group-hover:text-orange cursor-pointer group-hover:font-semibold smooth1">+(91) 123456789</p>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 bg-darkblue text-base text-white">
        © Copyright 2025 @  <span className="font-semibold">VNMT</span> | All rights reserved
      </div>
    </div>
  )
}

export default Footer
