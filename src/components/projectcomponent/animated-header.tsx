"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import NavbarItems from '@/components/projectcomponent/Navbar-items'
// import { FiMenu } from "react-icons/fi"
// import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';

export interface SubNavItem {
    id: number
    label: string
    href: string
}

export interface NavItem {
    id: number
    label: string
    href: string
    categories: {
        title: string
        items: SubNavItem[]
    }[]
}

export default function AnimatedHeader() {
    const [isScrolled, setIsScrolled] = useState(false)
    // const [hoveredItem, setHoveredItem] = useState<number | null>(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        // Check if the user has scrolled before, on page load
        const scrollState = localStorage.getItem("isScrolled");
        if (scrollState === "true") {
            setIsScrolled(true);
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            // Store scroll state in localStorage
            localStorage.setItem("isScrolled", window.scrollY > 50 ? "true" : "false");
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerVariants = {
        initial: {
            width: "55%",
            borderColor: "orange",
        },
        scrolled: {

            width: "100%",
            top: 0,
            left: 0,
            backgroundColor: "white",
            borderRadius: "0",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        },
    }

    // const menuVariants = {
    //     hidden: { opacity: 0, y: -20 },
    //     visible: {
    //         opacity: 1,
    //         y: 0,
    //         transition: {
    //             duration: 0.2,
    //             staggerChildren: 0.1,
    //         },
    //     },
    //     exit: {
    //         opacity: 0,
    //         y: -20,
    //         transition: { duration: 0.2 },
    //     },
    // }

    return (
        <>
            <motion.header
                variants={headerVariants}
                // animate={isScrolled ? "scrolled" : "initial"}
                transition={{ duration: 0.15 }}
                className={`fixed top-15 w-[55%]  z-50 rounded-full   ${isScrolled ? "hidden " : "animate-slide-down"}   px-8 bg-white `}

            >
                <div

                    className="flex w-full text-black  items-center justify-between gap-24">
                    <Link href="/" className="flex-shrink-0">
                        <Image src="/images/logo.svg" alt="Logo" width={140} height={35} className="h-8 w-auto" />
                    </Link>

                    {/* <nav 
                    className="hidden md:flex items-center gap-6">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={`relative font-semibold text-md text-black overflow-hidden group  hover:text-orange ${hoveredItem === item.id ? "text-orange " : ""}`}
                                onMouseEnter={() => setHoveredItem(item.id)}
                            >
                                <span
                                    className={`inline-block transition-transform duration-200 ease-in-out ${hoveredItem === item.id ? "-translate-y-full" : "translate-y-0"
                                        }`}
                                >
                                    {item.label}
                                </span>
                                <span
                                    className={`absolute left-0 inline-block transition-transform duration-200 ease-in-out ${hoveredItem === item.id ? "translate-y-0" : "translate-y-full"
                                        }`}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </nav> */}
                    <NavbarItems></NavbarItems>

                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-black">
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>

                    {/* <div className="text-black text-[20px] border-white hover:bg-blue-700 cursor-pointer hover:text-orange smooth1">
                        <Sheet>
                            <SheetTrigger asChild>
                                <div className="text-black text-[20px] border-white hover:bg-blue-700 cursor-pointer hover:text-orange smooth1">
                                    <FiMenu />
                                </div>
                            </SheetTrigger>
                            <SheetContent className="bg-white">
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                    <SheetDescription>
                                        Select an option from the menu below.
                                    </SheetDescription>
                                </SheetHeader>
                                <div className="grid gap-4 py-4">
                                    <ul className="space-y-2 text-black text-[18px]">
                                        <li className="hover:text-blue cursor-pointer">Home</li>
                                        <li className="hover:text-blue cursor-pointer">About</li>
                                        <li className="hover:text-blue cursor-pointer">Contact</li>
                                        <li className="hover:text-blue cursor-pointer">Services</li>
                                    </ul>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div> */}
                </div>
            </motion.header>

            {/* <AnimatePresence>
                {hoveredItem && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className={`fixed ${isScrolled ? "top-[4.2rem] w-0 left-0 " : "top-[10.4rem] w-1/2 left-[15%]"}   bg-white shadow-lg z-40  border-t-2 border-blue`}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <div className="container mx-auto p-4">
                            <div className="grid grid-cols-4 gap-8">
                                {navigationItems
                                    .find((item) => item.id === hoveredItem)
                                    ?.categories.map((category, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: { opacity: 1, y: 0 },
                                            }}
                                            className=" border-r"
                                        >
                                            <h3 className="font-bold text-sm text-black mb-4  ">{category.title}</h3>
                                            <ul className="space-y-2">
                                                {category.items.map((subItem) => (
                                                    <motion.li
                                                        key={subItem.id}
                                                        variants={{
                                                            hidden: { opacity: 0, x: -20 },
                                                            visible: { opacity: 1, x: 0 },
                                                        }}
                                                    >
                                                        <Link href={subItem.href} className=" text-black hover:text-orange  transition-colors">
                                                            {subItem.label}
                                                        </Link>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence> */}

            {/* Mobile Menu */}
            {/* <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-0 top-16 bg-white shadow-lg md:hidden z-40"
                    >
                        <nav className="container mx-auto px-4 py-4">
                            {navigationItems.map((item) => (
                                <div key={item.id} className="py-2">
                                    <Link
                                        href={item.href}
                                        className="block font-semibold text-lg"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence> */}
        </>
    )
}

