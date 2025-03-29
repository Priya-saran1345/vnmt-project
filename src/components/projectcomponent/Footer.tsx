/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Link from "next/link"
import { useRef } from "react"
import { FaInstagram, FaYoutube } from "react-icons/fa"
import { FiFacebook, FiPhoneCall, FiTwitter } from "react-icons/fi"
import { GrLinkedinOption } from "react-icons/gr"
// import { BiLogoGmail } from "react-icons/bi"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { BsMicrosoftTeams } from "react-icons/bs"
import { IoLogoWhatsapp } from "react-icons/io"
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md"
import NewsletterForm from "./newsletter-form"
const Footer = ({ data }: any) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // const locationData = [
  //   {
  //     flag: "https://flagcdn.com/w320/au.png",
  //     country: "Australia - Truganina VIC 3029",
  //     phone: "+61 1300 147617",
  //   },
  //   {
  //     flag: "https://flagcdn.com/w320/in.png",
  //     country: "India - Gandhinagar, GJ",
  //     phone: "+91 90234 03569",
  //   },
  //   {
  //     flag: "https://flagcdn.com/w320/in.png",
  //     country: "India - Pune, MH",
  //     phone: "+91 90234 03569",
  //   },
  //   {
  //     flag: "https://flagcdn.com/w320/us.png",
  //     country: "USA - San Francisco, CA-94108",
  //     phone: "+1 442 319 8010",
  //   },
  // ];


  const industries = [
    "Retail",
    "Wholesale Distribution",
    "Manufacturing",
    "Finance",
    "Professional Services",
    "Food & Beverage",
  ]

  const footerSections = [
    { title: "NETSUITE",
      links: [
        "NetSuite Consulting",
        "NetSuite Implementation",
        "NetSuite Integration",
        "NetSuite Optimization",
        "NetSuite Support & Maintenance",
        "NetSuite Training",
      ],
    },
    { title: "INTEGRATION",
      links: ["NetSuite Integration", "Magento NetSuite Integration", "WooCommerce NetSuite Integration", "Shopify NetSuite Integration", "JitterbitNetSuite Integration"],
    },
    { title: "CELIGO",
      links: [
        "Celigo Customization",
        "Celigo Support",
        "Celigo Optimization",
        "Celigo Implementation",
        "Integration Using Celigo Platform",
      ],
    },
    { title: "ABOUT COMPANY",
      links: ["About Us", "Career", "Customer Stories", "Blogs", "Case Studies"],
    },
  ]

  const socialMedia = [
    { key: "facebook_url", icon: <FiFacebook className="text-[22px] text-white group-hover:text-lightblue" />, color: "border-lightblue" },
    { key: "twitter_url", icon: <FiTwitter className="text-[22px] text-white group-hover:text-lightblue" />, color: "border-lightblue" },
    { key: "instagram_url", icon: <FaInstagram className="text-[22px] text-white group-hover:text-pink-500" />, color: "border-pink-500" },
    { key: "linkedin_url", icon: <GrLinkedinOption className="text-[22px] text-white group-hover:text-blue" />, color: "border-blue" },
    { key: "youtube_url", icon: <FaYoutube className="text-[22px] text-white group-hover:text-red-500" />, color: "border-red-500" },
  ];

  return (
    <div className="pb-0 md:bg-black  ">
      {/* Footer */}
      <div className="  -mt-20 pt-20 text-white text-sm overflow-hidden relative">

        {/* Content */}
        <div className="bg_footer_img bg-black md:bg-transparent flex items-center justify-center flex-col w-full">
          <div className="mx-auto container   ">
            <div className=''>
            {/* Global Locations */}
            <div className='flex flex-col md:flex-row flex-wrap lg:flex-nowrap w-full justify-center  relative py-12 z-10'>

              <div className="px-4 lg:px-2 xl:px-5 2xl:px-6 border-blue border-r-2  pt-3">
                <h3 className=" mb-4 underline-custom text-xl font-semibold  cursor-pointer">GLOBAL LOCATIONS</h3>
                <div className="space-y-4">
                  {data?.office_locations?.map((loc: any, index: any) => (
                    <div key={index} className="group flex items-start gap-3">
                      <Image
                        src={loc.flag_url}
                        alt={loc.country_code}
                        height={10}
                        width={10}
                        className="w-6 h-3 mt-1"
                      />
                      <div className="flex flex-col">
                        <h4 className="font-semibold flex gap-2 text-[15px] items-center">
                          {loc.location}
                        </h4>
                        {/* <p className="text-white text-[15px] cursor-pointer">{loc.address}</p> */}
                        <p className=" text-[15px] cursor-pointer">
                          Tel: <a href={`tel:${loc.phone_number}`} className="hover:underline text-white">{loc.phone_number}</a>
                        </p>
                      </div>
                    </div>

                  ))}
                </div>
              </div>

              {footerSections.map((section, index) => (
                <div key={index} className={` px-4 lg:px-2 xl:px-5 2xl:px-6  ${section.title === 'ABOUT COMPANY' ? 'border-none' : 'border-blue border-r-2'}  py-3`}>
                  <h3 className=" mb-4 underline-custom text-xl font-semibold cursor-pointer">{section.title}</h3>
                  <ul className={`grid mb-4 ${section.title === "NETSUITE" || "CELIGO" ? " grid-cols-1" : "xl:grid-cols-2 grid-cols-1 "}  gap-y-4  items-start ${section.title === "ABOUT COMPANY" ? " gap-x-4" : " "}`}>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href="#" className="text-white  text-sm hover:text-orange text-[15px]">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {section.title === 'ABOUT COMPANY' && (
                    <>
                      <h3 className=" mb-4 mt-4 underline-custom text-xl font-semibold ">
                        FOLLOW US @
                      </h3>
                      <div className="flex gap-2 mb-4">
                        {(socialMedia && data) && socialMedia.map(({ key, icon, color }) =>
                          data[key] ? (
                            <Link key={key} href={data[key]} target="_blank" rel="noopener noreferrer" className={`border p-1.5 hover:${color} smooth1 hover:scale-105 rounded-md group`}>
                              {icon}
                            </Link>
                          ) : null
                        )}
                      </div>
                      
                      <h3 className=" mb-4 mt-4 underline-custom text-xl font-semibold ">
                        GET IN TOUCH
                      </h3>
                      <NewsletterForm />
                      <p className="text-[14px] mt-4 flex gap-1"><span className="text-white hover:text-orange cursor-pointer">
                        Terms & Conditions</span> | <span className="text-white hover:text-orange cursor-pointer"> Privacy policy</span> </p>
                    </>
                  )} 

                  {section.title === 'CELIGO' && (
                    <>
                      <div className="  pt-4">
                        <h3 className=" mb-4 underline-custom text-xl  cursor-pointer font-semibold">CONTACT US</h3>
                        <div className="space-y-4">
                          <p className="flex hover:text-orange cursor-pointer gap-2">
                            <Image src={'/images/mail.svg'} alt="" height={22} width={22}></Image>
                            {data?.site_email}
                          </p>
                          <p className="flex hover:text-orange cursor-pointer gap-2">
                            <Image src={'/images/call.svg'} alt="" height={24} width={24}></Image>
                            {data?.contact_number}
                          </p>
                          <p className="flex hover:text-orange cursor-pointer gap-2">
                            <BsMicrosoftTeams className="text-blue text-[28px]" />
                            {data?.site_email}

                          </p>
                        </div>
                      </div>
                    </>
                  )}


                </div>
              ))}

            </div>

            {/* INDUSTRIES THAT WE SERVE */}
            <div className="flex flex-col  gap-4 ml-4 z-10">
              {/* Industries */}
              <h3 className="font-bold underline-custom text-xl mt-4 text-white z-10">INDUSTRIES THAT WE SERVE</h3>
              <div className="flex md:flex-row flex-wrap gap-2  text-[14px] relative z-10">
                {industries.map((industry, index) => (
                  <span key={index} >
                    {index !== 0 && "| "}
                    <span className="hover:text-orange text-white cursor-pointer"> {industry} </span>
                  </span>
                ))}
              </div>
            </div>

            </div>

          </div>

          <div className="mx-auto container mb-8 w-full">

            {/* Footer Logos */}
            <div
              ref={sectionRef}
              className="flex justify-between items-center">
              <div className=" z-10 mt-4 flex-1 ">
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
                <div className="flex fixed bottom-8 right-[3%] flex-row-reverse z-[1000] gap-6 items-center justify-center">
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
                  <div className="bg-[#fff]  p-4 rounded-xl shadow-lg animate-zoom">
                    <p className="text-blue text-center font-semibold mb-2 text-lg">Quick Connect </p>

                    <a className="flex gap-2 items-center cursor-pointer group z-50" href="https://wa.me/+61452217290" target="_blank" rel="noopener noreferrer" >
                      <IoLogoWhatsapp className="text-green-500 text-[23px] cursor-pointer" />
                      <p className="text-black group-hover:text-orange cursor-pointer  smooth1">Whatsapp Now</p>
                    </a>

                    <a className="flex gap-2 items-center cursor-pointer group z-50 mt-2" href={`tel:${data?.contact_number}`} target="_blank" rel="noopener noreferrer" >
                      <FiPhoneCall className="text-black text-[16px] cursor-pointer" />
                      <p className="text-black group-hover:text-orange cursor-pointer  smooth1"> {data?.contact_number}</p>
                    </a>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 bg-darkblue text-sm text-white">
        © Copyright {new Date().getFullYear()} @ <span className="font-semibold">VNMT</span> | All rights reserved
      </div>

    </div>
  )
}

export default Footer