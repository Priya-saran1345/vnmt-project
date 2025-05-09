/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react'
import { getMenuIcon } from "./icons"
import Image from "next/image"
import CountrySelector from "./countrySelect"
import ToolbarSearch from "./search"
// import { BASE_URL } from "@/utils/api"


interface NavbarItemsProps {
  className?: string
  logo?: string
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
      icon?: string
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
        },
        {
          title: "Career",
          description: "Find our offices around the globe",
          path: "/career",
          icon: "career",
        },
        {
          title: "Meet Our Team",
          description: "Meet the experts behind our success",
          path: "/our-team",
          icon: "team",
        },

      ],
    ],
  },
  {
    "title": "NetSuite",
    "hasDropdown": true,
    "items": [
      [
        {
          "title": "NetSuite Consulting",
          "description": "Expert guidance for your NetSuite implementation",
          "path": "/netsuite/consulting",
          "icon": "consulting"
        },
        {
          "title": "NetSuite Development",
          "description": "Seamless connection with your existing systems",
          "path": "/netsuite/development",
          "icon": "development",
          "subItems": [
            {
              "title": "NetSuite Implementation",
              "description": "Comprehensive implementation services",
              "icon": "implementation",
              "path": "/netsuite/development/implementation"
            },
            {
              "title": "NetSuite Customization",
              "description": "Tailored solutions for your business needs",
              "icon": "customization",
              "path": "/netsuite/development/customization"
            },
            {
              "title": "NetSuite Optimization",
              "description": "Enhance your NetSuite performance",
              "icon": "optimization",
              "path": "/netsuite/development/optimization"
            },
            {
              "title": "NetSuite Migration",
              "description": "Seamless data migration services",
              "icon": "migration",
              "path": "/netsuite/development/migration"
            },
            {
              "title": "NetSuite Administration",
              "description": "Manage and maintain your NetSuite environment",
              "icon": "administration",
              "path": "/netsuite/development/administration"
            }
          ]
        },
        {
          "title": "NetSuite Support & Maintenance",
          "description": "24/7 support for your NetSuite environment",
          "path": "/netsuite/support",
          "icon": "support"
        },
        {
          "title": "NetSuite Training",
          "description": "Comprehensive training programs for your team",
          "path": "/netsuite/training",
          "icon": "training"
        },
        {
          "title": "NetSuite eCommerce",
          "description": "E-commerce solutions for NetSuite",
          "path": "/netsuite/ecommerce",
          "icon": "ecommerce",
          "subItems": [
            {
              "title": "NetSuite SuiteCommerce",
              "description": "Powerful eCommerce platform",
              "icon": "suitecommerce",
              "path": "/netsuite/ecommerce/suitecommerce"
            },
            {
              "title": "NetSuite SuiteCommerce Advanced",
              "description": "Advanced features for SuiteCommerce",
              "icon": "suitecommerce-advanced",
              "path": "/netsuite/ecommerce/suitecommerce-advanced"
            },
            {
              "title": "NetSuite SuiteSuccess",
              "description": "Industry-specific solutions for rapid growth",
              "icon": "suitesuccess",
              "path": "/netsuite/ecommerce/suitesuccess"
            }
          ]
        }

      ]
    ]
  },
  {
    "title": "Celigo",
    "hasDropdown": true,
    "items": [
      [
        {
          "title": "Celigo Customization",
          "description": "Tailor Celigo to fit your business needs",
          "path": "/celigo/customization",
          "icon": "customization"
        },
        {
          "title": "Celigo Support",
          "description": "Expert support for your Celigo platform",
          "path": "/celigo/support",
          "icon": "support"
        },
        {
          "title": "Celigo Optimization",
          "description": "Enhance the performance of Celigo solutions",
          "path": "/celigo/optimization",
          "icon": "optimization"
        }
      ],
      [
        {
          "title": "Celigo Implementation",
          "description": "Seamless implementation of Celigo solutions",
          "path": "/celigo/implementation",
          "icon": "implementation"
        },
        {
          "title": "Integration Using Celigo Platform",
          "description": "Effortless integrations with Celigo",
          "path": "/celigo/integration-platform",
          "icon": "integration"
        }
      ]
    ]
  },
  {
    "title": "Products",
    "hasDropdown": true,
    "items": [
      [
        {
          "title": "NetSuite WooCommerce Integrator",
          "description": "Seamlessly integrate NetSuite with WooCommerce",
          "path": "/products/netsuite-woocommerce",
          "icon": "woocommerce"
        },
        {
          "title": "NetSuite Shopify Loop Integrator",
          "description": "Integrate NetSuite with Shopify for streamlined operations",
          "path": "/products/netsuite-shopify",
          "icon": "shopify"
        }
      ]
    ]
  },
  {
    title: "Industries",
    hasDropdown: true,
    items: [
      [
        {
          "title": "Retail",
          "description": "Optimize sales with tailored retail solutions",
          "path": "/industries/retail",
          "icon": "retail"
        },
        {
          "title": "Wholesale Distribution",
          "description": "Streamline bulk orders with smart integrations",
          "path": "/industries/wholesale",
          "icon": "wholesale"
        },
        {
          "title": "Manufacturing",
          "description": "Enhance production with automated workflows",
          "path": "/industries/manufacturing",
          "icon": "manufacturing"
        },
        {
          "title": "Professional Services",
          "description": "Boost efficiency with seamless service solutions",
          "path": "/industries/professional-services",
          "icon": "services"
        },
        {
          "title": "Food & Beverage",
          "description": "Optimize supply chains for fresh, fast delivery",
          "path": "/industries/food-beverage",
          "icon": "food"
        },
        {
          "title": "Finance",
          "description": "Secure, scalable solutions for financial growth",
          "path": "/industries/finance",
          "icon": "finance"
        }
      ]

    ],
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

export default function Navbar({  logo }: NavbarItemsProps) {
  // console.log(logo);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  // console.log("activeSubmenu", activeSubmenu);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && dropdownRefs.current[activeDropdown] &&
        !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)) {
        setActiveDropdown(null)
        setActiveSubmenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [activeDropdown])

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title)
    setActiveSubmenu(null)
  }

  const toggleSubmenu = (title: string, event: React.MouseEvent) => {
    event.stopPropagation()
    setActiveSubmenu(activeSubmenu === title ? null : title)
  }

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (mobileMenuOpen) {
      setActiveDropdown(null)
      setActiveSubmenu(null)
    }
  }


  return (
    <motion.header
      onMouseLeave={() => {
        toggleDropdown("")
        setIsOpen(false)
      }
      }
      className={`w-full bg-white border-b border-gray-200 sticky top-0 z-20 shadow-xl `}>
      <div className="  w-full max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-full xl:max-w-[1280px] 2xl:max-w-[1450px] px-4 md:px-6 lg:px-8 mx-auto
   ">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="w-full">
            <Link href="/">
              <Image
                src={
                  // logo ? `${BASE_URL}${logo}` : 
                  "/images/logo.svg"}
                loading="lazy"
                width={150}
                height={35}
                alt={"vnmt"}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            onMouseEnter={() => {
              setIsOpen(false)
            }}
            className="hidden lg:flex items-center justify-center w-full gap-3 xl:gap-4 2xl:gap-6">
            {navItems.map((item) => (
              <div key={item.title} className="relative" ref={(el: any) => (dropdownRefs.current[item.title] = el)}>
                {item.path ? (
                  <Link
                    href={item.path}
                    onMouseEnter={() => {
                      setActiveDropdown(null)
                      setActiveSubmenu(null)
                    }
                    }
                    className="text-black hover:text-orange font-semibold transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    onMouseEnter={() => toggleDropdown(item.title)}
                    className={`flex items-center text-black hover:text-orange font-semibold transition-colors duration-200 ${activeDropdown === item.title ? "text-gray-900" : ""
                      }`}
                  >
                    {item.title}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.title ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </button>
                )}
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-5 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                      style={{
                        width: "clamp(250px, 20vw, 350px)", // Responsive width
                      }}
                    >
                      <div className="py-2">
                        {item.items?.flat().map((subItem) => (
                          <div key={subItem.title} className="relative">
                            {subItem.subItems ? (
                              <button
                                onClick={(e) => toggleSubmenu(subItem.title, e)}
                                onMouseEnter={(e) => toggleSubmenu(subItem.title, e)}
                                className="w-full text-left"
                              >
                                <div className="flex items-center p-3 hover:bg-gray-100 transition-colors group">
                                  <div className="w-8 h-8 flex items-center justify-center rounded-full group-hover:text-orange text-blue">
                                    {getMenuIcon(subItem.icon || "default")}
                                  </div>
                                  <div className="ml-3 flex-1">
                                    <p className="text-base font-semibold text-blue group-hover:text-orange">
                                      {subItem.title}
                                    </p>
                                    <p className="text-xs text-gray-500">{subItem.description}</p>
                                  </div>
                                  <ChevronRight className="h-4 w-4 text-gray-400 self-center ml-2" />
                                </div>
                              </button>
                            ) : (
                              <Link href={subItem.path} onMouseEnter={() => setActiveSubmenu(null)}>
                                <div className="flex items-center p-3 hover:bg-gray-100 transition-colors group">
                                  <div className="w-8 h-8 flex items-center justify-center rounded-full group-hover:text-orange text-blue">
                                    {getMenuIcon(subItem.icon || "default")}
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-base font-semibold group-hover:text-orange text-blue">
                                      {subItem.title}
                                    </p>
                                    <p className="text-xs text-gray-500">{subItem.description}</p>
                                  </div>
                                </div>
                              </Link>
                            )}

                            {/* Submenu */}
                            <AnimatePresence>
                              {subItem.subItems && activeSubmenu === subItem.title && (
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -10 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute left-full top-0 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                                  style={{
                                    width: "clamp(250px, 20vw, 350px)", // Responsive width
                                  }}
                                >
                                  <div className="py-2">
                                    {subItem.subItems.map((subSubItem) => (
                                      <Link key={subSubItem.title} href={subSubItem.path}>
                                        <div className="flex items-center p-3 hover:bg-gray-100 transition-colors group">
                                          <div className="w-8 h-8 flex items-center justify-center rounded-full group-hover:text-orange text-blue">
                                            {getMenuIcon(subSubItem.icon || "default")}
                                          </div>
                                          <div className="ml-3">
                                            <p className="text-base font-semibold group-hover:text-orange text-blue">
                                              {subSubItem.title}
                                            </p>
                                            <p className="text-xs text-gray-500">{subSubItem.description}</p>
                                          </div>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div
            onMouseEnter={() => {
              setActiveDropdown(null)
              setActiveSubmenu(null)
            }}
            className="flex w-full  items-center mt-2 lg:mt-0 flex-col lg:flex-row justify-end">
            <div className=" lg:flex items-center hidden">
              <CountrySelector isOpen={isOpen} setIsOpen={setIsOpen} />
              {/* <IoMdSearch className="text-2xl text-orange" /> */}
              <ToolbarSearch isOpen={isOpen} setIsOpen={setIsOpen} />
              <button className="uppercase px-2 py-0.5 font-medium bg-orange text-white rounded-lg border-2 border-orange hover:bg-transparent hover:text-orange smooth3"> Contact US </button>
            </div>
            <button
              onClick={handleMobileMenuToggle}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors w-full flex justify-end"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.title} className="border-b border-gray-100 last:border-0">
                    {item.path ? (
                      <Link
                        href={item.path}
                        className="block py-3 px-4 text-gray-700 hover:text-gray-900 font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.title)}
                          className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:text-gray-900 font-medium"
                        >
                          {item.title}
                          {item.hasDropdown && (
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.title ? "rotate-180" : ""
                                }`}
                            />
                          )}
                        </button>

                        <AnimatePresence>
                          {item.hasDropdown && activeDropdown === item.title && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-gray-50 px-4 py-2"
                            >
                              {item.items?.flat().map((subItem) => (
                                <div key={subItem.title} className="py-2">
                                  {subItem.subItems ? (
                                    <>
                                      <button
                                        onClick={(e) => toggleSubmenu(subItem.title, e)}
                                        className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900"
                                      >
                                        <span className="font-medium text-sm">{subItem.title}</span>
                                        <ChevronDown
                                          className={`h-4 w-4 transition-transform duration-200 ${activeSubmenu === subItem.title ? "rotate-180" : ""
                                            }`}
                                        />
                                      </button>

                                      <AnimatePresence>
                                        {activeSubmenu === subItem.title && (
                                          <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="ml-4 mt-2 space-y-2"
                                          >
                                            {subItem.subItems.map((subSubItem) => (
                                              <Link
                                                key={subSubItem.title}
                                                href={subSubItem.path}
                                                className="block py-1 text-sm text-gray-600 hover:text-gray-900"
                                                onClick={() => setMobileMenuOpen(false)}
                                              >
                                                {subSubItem.title}
                                              </Link>
                                            ))}
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </>
                                  ) : (
                                    <Link
                                      href={subItem.path}
                                      className="block text-sm text-gray-700 hover:text-gray-900 font-medium"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subItem.title}
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
