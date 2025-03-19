"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { IoIosArrowForward } from "react-icons/io"
import { FaCircle } from "react-icons/fa"
import { RiArrowDropDownLine } from "react-icons/ri";


const NavbarItems = ({ show }: { show?: number }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  return (
    <div
      onMouseLeave={() => toggleDropdown("")}
      className="lg:flex gap-[10px] w-full justify-between 2xl:gap-3 py-3 items-center text-[17px] lg:text-[15px] bg-white xl:text-[15px] 2xl:text=[17px]"
    >
      <div
        className={`lg:items-center ${show ? "flex flex-col" : "flex"} xl:gap-4 flex-1 justify-center items-center gap-3`}
      >
        {/* Company */}
        <div className="relative">
          <div className="flex items-center">
            <li
              onClick={() => toggleDropdown("company")}
              onMouseOver={() => toggleDropdown("company")}
              className={`
                            flex ${openDropdown === "company" ? "border-b-2 border-orange" : "border-b-2 border-white"} 
                            font-semibold items-center cursor-pointer hover:text-orange text-[16px] ${openDropdown === "company" && "text-orange"}`}>
              Company
            </li>
            <RiArrowDropDownLine className="text-2xl" />
          </div>

          {openDropdown === "company" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute text-homegrey shadow-md text-[17px]
                            w-fit text-nowrap lg:w-fit overflow-y-scroll lg:overflow-auto max-h-[70vh] lg:h-fit
                            flex-wrap lg:flex-nowrap px-6 py-6 z-[99999] left-0 top-9 bg-white justify-start lg:justify-around flex 
                            gap-5 p-4 rounded-b-xl"
              onMouseLeave={() => toggleDropdown("")}
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, easings: ["easeIn", "easeOut"] }}
              >
                <ul className="flex flex-col text-[16px] gap-[5px]">
                  <li className="flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300">
                    <MdKeyboardDoubleArrowRight />
                    About Us
                  </li>
                  <Link target="_blank" href="/careers" passHref>
                    <li className="flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300">
                      <MdKeyboardDoubleArrowRight />
                      Career
                    </li>
                  </Link>
                  <Link target="_blank" href="/team" passHref>
                    <li className="flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300">
                      <MdKeyboardDoubleArrowRight />
                      Meet The Team
                    </li>
                  </Link>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Netsuite */}
        <div className="relative">
          <div className="flex gap-1 items-center">
            <li
              onClick={() => toggleDropdown("netsuite")}
              onMouseOver={() => toggleDropdown("netsuite")}
              className={`flex font-semibold ${openDropdown === "netsuite" ? "border-b-2 border-orange " : "border-b-2 border-white"} gap-1 items-center cursor-pointer hover:text-orange text-[16px] 
                            ${openDropdown === "netsuite" && "text-orange"}`}
            >
              Netsuite
            </li>
            <RiArrowDropDownLine className="text-2xl" />
          </div>
          {openDropdown === "netsuite" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute text-homegrey shadow-md text-[17px]
                            w-fit text-nowrap lg:w-fit overflow-y-scroll lg:overflow-auto max-h-[70vh] lg:h-fit
                            flex-wrap lg:flex-nowrap px-6 py-6 z-[99999] left-0 top-9 bg-white justify-start lg:justify-around flex 
                            gap-5 p-4 rounded-b-xl"
              onMouseLeave={() => toggleDropdown("")}
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, easings: ["easeIn", "easeOut"] }}
              >
                <ul className="flex flex-col text-[16px] gap-[12px]">
                  <li className="flex items-start gap-3 text-blue">
                    <div className="mt-1 text-blue">
                      <FaCircle className="text-blue size-5" />
                    </div>
                    <div>
                      <div className="font-semibold">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCircle className="text-orange size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-orange">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCircle className="text-blue size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, easings: ["easeIn", "easeOut"] }}
              >
                <ul className="flex flex-col text-[16px] gap-[12px]">
                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCircle className="text-blue size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCircle className="text-blue size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Celigo */}
        <div className="relative">
          <div className="flex gap-1 items-center">
            <li
              onClick={() => toggleDropdown("celigo")}
              onMouseOver={() => toggleDropdown("celigo")}
              className={`flex font-semibold ${openDropdown === "celigo" ? "border-b-2 border-orange" : "border-b-2 border-white"} gap-1 items-center cursor-pointer hover:text-orange text-[16px] 
                            ${openDropdown === "celigo" && "text-orange"}`}
            >
              Celigo
            </li>
            <RiArrowDropDownLine className="text-2xl" />
          </div>
          {openDropdown === "celigo" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute text-homegrey shadow-md text-[17px]
                          w-fit text-nowrap lg:w-fit overflow-y-scroll lg:overflow-auto max-h-[70vh] lg:h-fit
                          flex-wrap lg:flex-nowrap px-6 py-6 z-[99999] left-0 top-9 bg-white justify-start lg:justify-around flex 
                          gap-5 p-4 rounded-b-xl"
              onMouseLeave={() => toggleDropdown("")}
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, easings: ["easeIn", "easeOut"] }}
              >
                <ul className="flex flex-col text-[16px] gap-[12px]">
                  <li className="flex items-start gap-3 text-blue">
                    <div className="mt-1 text-blue">
                      <FaCircle className="text-blue size-5" />
                    </div>
                    <div>
                      <div className="font-semibold">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCircle className="text-orange size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-orange">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCircle className="text-blue size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, easings: ["easeIn", "easeOut"] }}
              >
                <ul className="flex flex-col text-[16px] gap-[12px]">
                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCircle className="text-blue size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCircle className="text-blue size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Integration */}
        <div className="relative">
          <div className="flex gap-1 items-center">
            <li
              onClick={() => toggleDropdown("integration")}
              onMouseOver={() => toggleDropdown("integration")}
              className={`flex font-semibold ${openDropdown === "integration" ? "border-b-2 border-orange" : "border-b-2 border-white"} gap-1 items-center cursor-pointer hover:text-orange text-[16px] 
                            ${openDropdown === "integration" && "text-orange"}`}
            >
              Integration
            </li>
            <RiArrowDropDownLine className="text-2xl" />
          </div>
          {openDropdown === "integration" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute text-homegrey shadow-md text-[17px]
                          w-fit text-nowrap lg:w-fit overflow-y-scroll lg:overflow-auto max-h-[70vh] lg:h-fit
                          flex-wrap lg:flex-nowrap px-6 py-6 z-[99999] left-0 top-9 bg-white justify-start lg:justify-around flex 
                          gap-5 p-4 rounded-b-xl"
              onMouseLeave={() => toggleDropdown("")}
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, easings: ["easeIn", "easeOut"] }}
              >
                <ul className="flex flex-col text-[16px] gap-[12px]">
                  <li className="flex items-start gap-3 text-blue">
                    <div className="mt-1 text-blue">
                      <FaCircle className="text-blue size-5" />
                    </div>
                    <div>
                      <div className="font-semibold">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCircle className="text-orange size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-orange">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCircle className="text-blue size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, easings: ["easeIn", "easeOut"] }}
              >
                <ul className="flex flex-col text-[16px] gap-[12px]">
                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCircle className="text-blue size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCircle className="text-blue size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Products */}
        <div className="relative">
          <div className="flex gap-1 items-center">
            <li
              onClick={() => toggleDropdown("products")}
              onMouseOver={() => toggleDropdown("products")}
              className={`flex font-semibold gap-1 ${openDropdown === "products" ? "border-b-2 border-orange" : "border-b-2 border-white"} items-center cursor-pointer hover:text-orange text-[16px] 
                            ${openDropdown === "products" && "text-orange"}`}
            >
              Products
            </li>
            <RiArrowDropDownLine className="text-2xl" />
          </div>
          {openDropdown === "products" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute text-homegrey shadow-md text-[17px]
                          w-fit text-nowrap lg:w-fit overflow-y-scroll lg:overflow-auto max-h-[70vh] lg:h-fit
                          flex-wrap lg:flex-nowrap px-6 py-6 z-[99999] left-0 top-9 bg-white justify-start lg:justify-around flex 
                          gap-5 p-4 rounded-b-xl"
              onMouseLeave={() => toggleDropdown("")}
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, easings: ["easeIn", "easeOut"] }}
              >
                <ul className="flex flex-col text-[16px] gap-[12px]">
                  <li className="flex items-start gap-3 text-blue">
                    <div className="mt-1 text-blue">
                      <FaCircle className="text-blue size-5" />
                    </div>
                    <div>
                      <div className="font-semibold">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCircle className="text-orange size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-orange">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCircle className="text-blue size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, easings: ["easeIn", "easeOut"] }}
              >
                <ul className="flex flex-col text-[16px] gap-[12px]">
                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCircle className="text-blue size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCircle className="text-blue size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue">NetSuite Consulting</div>
                      <div className="text-sm text-gray-500">
                        Lorem ipsum is simply text of the printing & typesetting industry.
                      </div>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Resources */}
        <div className="relative">
          <div className="flex gap-1 items-center">
            <li
              onClick={() => toggleDropdown("resources")}
              onMouseOver={() => toggleDropdown("resources")}
              className={`flex font-semibold ${openDropdown === "resources" ? "border-b-2 border-orange" : "border-b-2 border-white"} gap-1 items-center cursor-pointer hover:text-orange text-[16px] 
                            ${openDropdown === "resources" && "text-orange"}`}
            >
              Resources
            </li>
            <RiArrowDropDownLine className="text-2xl" />
          </div>
          {openDropdown === "resources" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute text-homegrey shadow-md text-[17px]
                            w-fit text-nowrap lg:w-fit overflow-y-scroll lg:overflow-auto max-h-[70vh] lg:h-fit
                            flex-wrap lg:flex-nowrap px-6 py-6 z-[99999] left-0 top-9 bg-white justify-start lg:justify-around flex 
                            gap-5 p-4 rounded-b-xl"
              onMouseLeave={() => toggleDropdown("")}
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, easings: ["easeIn", "easeOut"] }}
              >
                <ul className="flex flex-col text-[16px] gap-[5px]">
                  <Link target="_blank" href="/blog" passHref>
                    <li className="flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300">
                      <MdKeyboardDoubleArrowRight />
                      Blog
                    </li>
                  </Link>
                  <Link target="_blank" href="/case-studies" passHref>
                    <li className="flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300">
                      <MdKeyboardDoubleArrowRight />
                      Case Studies
                    </li>
                  </Link>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Careers */}
        <div className="relative">
          <div className="flex gap-1 items-center">
            <li
              className={`flex font-semibold border-b-2 border-white gap-1 items-center cursor-pointer hover:text-orange text-[16px]`}
            >
              Careers
            </li>
          </div>
        </div>

        {/* Contact Us Button - Only for mobile */}
        {show === 1 && (
          <div className="relative mt-4">
            <div className="flex gap-1 items-center">
              <li
                className={`flex px-4 py-2 bg-orange rounded-full text-white font-semibold
                                ${isHovered ? "pr-8 border-orange text-orange" : "border-white"} 
                                gap-1 items-center cursor-pointer text-[16px] relative`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Contact Us
                <IoIosArrowForward
                  className={`absolute right-2 transition-all duration-300 transform 
                                    ${isHovered ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
                  size={20}
                />
              </li>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavbarItems

