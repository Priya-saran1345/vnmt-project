"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { IoIosArrowForward } from "react-icons/io"
import { RiArrowDropDownLine } from "react-icons/ri"
import { getMenuIcon } from "./icons"

interface NavbarItemsProps {
  show?: number
  isMobile?: boolean
}

interface MenuItem {
  title: string
  path?: string
  hasDropdown?: boolean
  items?: {
    title: string
    description: string
    path: string
    icon?: string
    highlight?: boolean
    subItems?: {
      title: string
      description: string
      path: string
    }[]
  }[][]
}

const navItems: MenuItem[] = [
  {
    title: "Company",
    hasDropdown: true,
    items: [
      [
        {
          title: "About Us",
          description: "Learn about our company's mission and values",
          path: "/about-us",
          icon: "info",
          highlight: true,
        },
        {
          title: "Our Team",
          description: "Meet the experts behind our success",
          path: "/our-team",
          icon: "team",
        },
        {
          title: "Locations",
          description: "Find our offices around the globe",
          path: "/locations",
          icon: "location",
        },
      ],
    ],
  },
  {
    title: "NetSuite",
    hasDropdown: true,
    items: [
      [
        {
          title: "NetSuite Consulting",
          description: "Lorem ipsum is simply text of the printing & typesetting industry.",
          path: "/netsuite/consulting",
          icon: "consulting",
          highlight: true,
        },
        {
          title: "NetSuite Integration",
          description: "Lorem ipsum is simply text of the printing & typesetting industry.",
          path: "/netsuite/integration",
          icon: "integration",
        },
        {
          title: "NetSuite Support",
          description: "Lorem ipsum is simply text of the printing & typesetting industry.",
          path: "/netsuite/support",
          icon: "support",
        },
      ],
      [
        {
          title: "NetSuite Training",
          description: "Lorem ipsum is simply text of the printing & typesetting industry.",
          path: "/netsuite/training",
          icon: "training",
        },
        {
          title: "NetSuite Optimization",
          description: "Lorem ipsum is simply text of the printing & typesetting industry.",
          path: "/netsuite/optimization",
          icon: "optimization",
        },
      ],
    ],
  },
  {
    title: "Celigo",
    hasDropdown: true,
    items: [
      [
        {
          title: "Celigo iPaaS",
          description: "Integration Platform as a Service solutions",
          path: "/celigo/ipaas",
          icon: "ipaas",
        },
        {
          title: "Celigo Integrations",
          description: "Pre-built and custom integration solutions",
          path: "/celigo/integrations",
          icon: "integrations",
        },
      ],
    ],
  },
  {
    title: "Integration",
    hasDropdown: true,
    items: [
      [
        {
          title: "API Integration",
          description: "Custom API development and integration",
          path: "/integration/api",
          icon: "api",
        },
        {
          title: "ERP Integration",
          description: "Connect your enterprise systems seamlessly",
          path: "/integration/erp",
          icon: "erp",
        },
      ],
    ],
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "Resources",
    hasDropdown: true,
    items: [
      [
        {
          title: "Blog",
          description: "Latest insights and updates",
          path: "/blog",
          icon: "blog",
        },
        {
          title: "Case Studies",
          description: "Success stories and implementations",
          path: "/case-studies",
          icon: "case-studies",
        },
      ],
    ],
  },
  {
    title: "Careers",
    path: "/careers",
  },
]

const NavbarItems = ({ show, isMobile }: NavbarItemsProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleDropdown = (menu: string) => {
    if (windowWidth < 1024 && isMobile) {
      setOpenDropdown(openDropdown === menu ? null : menu)
    } else if (windowWidth >= 1024) {
      setOpenDropdown(menu)
    }
  }

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  }

  return (
    <nav
      className="w-full bg-white flex flex-col lg:flex-row lg:items-center transition-all duration-300"
      onMouseLeave={() => {
        if (!isMobile) {
          setOpenDropdown(null)
        }
      }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full gap-4 lg:gap-6 py-3 px-4 lg:px-6 text-sm lg:text-base">
        {navItems.map((item) => (
          <div key={item.title} className="relative group">
            {item.path ? (
              <Link href={item.path} passHref>
                <span className="font-semibold cursor-pointer text-gray-700 hover:text-orange transition-colors flex items-center gap-1">
                  {item.title}
                </span>
              </Link>
            ) : (
              <div
                onClick={() => toggleDropdown(item.title)}
                onMouseEnter={() => !isMobile && toggleDropdown(item.title)}
                className={`
                  flex items-center gap-1 cursor-pointer
                  font-semibold transition-colors
                  text-gray-700
                  ${openDropdown === item.title ? "text-orange" : ""}
                  hover:text-orange
                `}
              >
                {item.title}
                {item.hasDropdown && (
                  <RiArrowDropDownLine
                    className={`
                    text-xl transition-transform duration-200
                    ${openDropdown === item.title ? "rotate-180" : ""}
                  `}
                  />
                )}
              </div>
            )}

            <AnimatePresence>
              {item.hasDropdown && openDropdown === item.title && item.items && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className={`
                    absolute z-50 bg-white shadow-lg rounded-lg
                    ${isMobile ? "relative mt-2 w-full" : "top-full left-0 mt-2"}
                    w-[400px] max-w-[95vw]
                    overflow-hidden
                  `}
                  style={{ width: item.items[0].length > 3 ? "400px" : "400px" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 p-0 w-full">
                    {item.items.map((column, colIndex) => (
                      <div key={colIndex} className="space-y-0">
                        {column.map((subItem) => (
                          <Link key={subItem.title} href={subItem.path} className="block">
                            <div
                              className={`
                                flex items-center gap-3 cursor-pointer
                                p-4 transition-colors
                                hover:bg-gray-50 group
                              `}
                            >
                              <div
                                className={`
                                  flex items-center justify-center
                                  size-10 rounded-full
                                  ${subItem.highlight ? "bg-orange text-white" : "bg-blue-900 text-white"}
                                `}
                              >
                                {getMenuIcon(subItem.icon || "default")}
                              </div>
                              <div className="flex-1">
                                <div
                                  className={`
                                    font-semibold transition-colors
                                    ${subItem.highlight ? "text-orange" : "text-gray-700"}
                                    group-hover:text-orange
                                  `}
                                >
                                  {subItem.title}
                                </div>
                                <div className="text-xs text-gray-500">{subItem.description}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {show === 1 && (
          <div className="mt-4 lg:mt-0">
            <button
              className={`
                flex items-center gap-2
                px-6 py-2 rounded-full
                bg-orange text-white
                font-semibold transition-all
                hover:bg-orange/90
                ${isHovered ? "pr-10" : ""}
              `}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              CONTACT US
              <IoIosArrowForward
                className={`
                  absolute transform transition-all duration-300
                  ${isHovered ? "opacity-100 translate-x-6" : "opacity-0 translate-x-2"}
                `}
                size={20}
              />
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavbarItems

