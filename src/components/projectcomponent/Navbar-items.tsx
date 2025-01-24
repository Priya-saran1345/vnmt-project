
/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
// import { FaInstagram } from 'react-icons/fa';
// import { LuFacebook } from 'react-icons/lu';
// import { BiLogoLinkedin } from 'react-icons/bi';
// import { Search } from 'lucide-react';
const NavbarIndex = ({ show }: any) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const toggleDropdown = (menu: string) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };
    return (
        <div className=' lg:flex gap-[10px] w-full  justify-between 2xl:gap-3 py-3 items-center text-[17px] lg:text-[15px] bg-blu  xl:text-[15px] 2xl:text=[17px] '>
            <div className={`lg:items-center ${show ? "flex flex-col" : "flex"}   xl:gap-4 flex-1 justify-center gap-5`}>

                <div className='relative'>
                    <div className='flex gap-1 items-center'>
                        <li onClick={() => toggleDropdown('seo')} onMouseOver={() => toggleDropdown('seo')} className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink text-[16px ] ${openDropdown === 'seo' && "text-pink"}`}>
                            Company
                        </li>

                    </div>

                    {openDropdown === 'seo' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}

                            className=' absolute text-homegrey shadow-md text-[17px]
                            w-fit text-nowrap lg:w-fit overflow-y-scroll lg:overflow-auto  max-h-[70vh] lg:h-fit
                flex-wrap lg:flex-nowrap border-t-4 border-orange px-6 py-6 z-[99999] left-0 top-9  bg-white justify-start lg:justify-around flex 
                   gap-5  p-4 rounded-b-xl' onMouseLeave={() => toggleDropdown('')}>
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1, easings: ["easeIn", "easeOut"] }}
                            >
                                <ul className='flex flex-col text-[16px] gap-[5px]'>
                                    <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2  transition-all duration-300'>
                                        <MdKeyboardDoubleArrowRight />
                                        About Us
                                    </li>
                                    <Link target='_blank' href='/local-seo-services' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2  transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Career
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/on-page-seo-services' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2  transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Meet The Team
                                        </li>
                                    </Link>
                                </ul>
                            </motion.div>
                        </motion.div>
                    )}
                </div>

                <div className='relative'>
                    <div className='flex gap-1 items-center'>
                        <li onClick={() => toggleDropdown('netsuite')}
                            onMouseOver={() => toggleDropdown('netsuite')}
                            className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink text-[16px ] 
                        ${openDropdown === 'netsuite' && "text-pink"}`}>
                            Netsuite
                        </li>
                    </div>
                    {openDropdown === 'netsuite' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}

                            className=' absolute text-homegrey shadow-md text-[17px]
                            w-fit text-nowrap lg:w-fit overflow-y-scroll lg:overflow-auto  max-h-[70vh] lg:h-fit
                flex-wrap lg:flex-nowrap border-t-4 border-orange px-6 py-6 z-[99999] left-0 top-9  bg-white justify-start lg:justify-around flex 
                   gap-5  p-4 rounded-b-xl' onMouseLeave={() => toggleDropdown('')}>
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1, easings: ["easeIn", "easeOut"] }}
                            >
                                <ul className='flex flex-col text-[16px] gap-[5px]'>
                                    <Link target='_blank' href='/google-shopping-ads' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Netsuite Consulting
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/google-ads-services' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Netsuite Support & Maintenance
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/google-ads-services' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Netsuite Training
                                        </li>
                                    </Link>
                                </ul>
                            </motion.div>
                        </motion.div>
                    )}
                </div>


                <div className='relative'>
                    <div className='flex gap-1 items-center'>
                        <li onClick={() => toggleDropdown('Celigo')}
                            onMouseOver={() => toggleDropdown('Celigo')}
                            className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink text-[16px ] 
                        ${openDropdown === 'Celigo' && "text-pink"}`}>
                            Celigo
                        </li>
                    </div>
                    {openDropdown === 'Celigo' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}

                            className=' absolute text-homegrey shadow-md text-[17px]
                            w-fit text-nowrap lg:w-fit overflow-y-scroll lg:overflow-auto  max-h-[70vh] lg:h-fit
                flex-wrap lg:flex-nowrap border-t-4 border-orange px-6 py-6 z-[99999] left-0 top-9  bg-white justify-start lg:justify-around flex 
                   gap-5  p-4 rounded-b-xl' onMouseLeave={() => toggleDropdown('')}>
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1, easings: ["easeIn", "easeOut"] }}
                            >
                                <ul className='flex flex-col text-[16px] gap-[5px]'>
                                    <Link target='_blank' href='/web-development-services' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Celigo Customization
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/magento-web-development-services' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Celigo Support
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/laravel-development-services' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Celigo Optimization
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/custom-php-development-services-company' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Celigo Implementation
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/asp-dot-net-development-services' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Integration Using Celigo Platform
                                        </li>
                                    </Link>
                                </ul>
                            </motion.div>
                        </motion.div>
                    )}
                </div>
                <div className='relative'>
                    <div className='flex gap-1 items-center'>
                        <li onClick={() => toggleDropdown('Integrations')}
                            onMouseOver={() => toggleDropdown('Integrations')}
                            className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink text-[16px ] 
                        ${openDropdown === 'Integrations' && "text-pink"}`}>
                            Integrations
                        </li>
                    </div>
                    {openDropdown === 'Integrations' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}

                            className=' absolute text-homegrey shadow-md text-[17px]
                            w-fit text-nowrap lg:w-fit overflow-y-scroll lg:overflow-auto  max-h-[70vh] lg:h-fit
                flex-wrap lg:flex-nowrap border-t-4 border-orange px-6 py-6 z-[99999] left-0 top-9  bg-white justify-start lg:justify-around flex 
                   gap-5  p-4 rounded-b-xl' onMouseLeave={() => toggleDropdown('')}>
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1, easings: ["easeIn", "easeOut"] }}
                            >
                                <ul className='flex flex-col text-[16px] gap-[5px]'>
                                    <Link target='_blank' href='/seo-packages' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Netsuite Integration
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/ecommerce-seo-packages' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Magento Netsuite Integration
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/local-seo-packages' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            WooCommerce Netsuite Integration
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/guest-posting-service-packages' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Shopify Netsuite Integration
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/app-store-aso-packages' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Jitterbit Netsuite Integration
                                        </li>
                                    </Link>
                                </ul>

                            </motion.div>
                        </motion.div>
                    )}
                </div>




                <div className='relative'>
                    <div className='flex gap-1 items-center'>
                        <li onClick={() => toggleDropdown('Products')}
                            onMouseOver={() => toggleDropdown('Products')}
                            className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink text-[16px ] 
                        ${openDropdown === 'Products' && "text-pink"}`}>
                            Products
                        </li>
                    </div>
                    {openDropdown === 'Products' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}

                            className=' absolute text-homegrey shadow-md text-[17px]
                            w-fit text-nowrap lg:w-fit overflow-y-scroll lg:overflow-auto  max-h-[70vh] lg:h-fit
                flex-wrap lg:flex-nowrap border-t-4 border-orange px-6 py-6 z-[99999] left-0 top-9  bg-white justify-start lg:justify-around flex 
                   gap-5  p-4 rounded-b-xl' onMouseLeave={() => toggleDropdown('')}>
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1, easings: ["easeIn", "easeOut"] }}
                            >
                                <ul className='flex flex-col text-[16px] gap-[5px]'>
                                    <Link target='_blank' href='/seo-tools' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Netsuite WooCommerce Integrator
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/website-seo-analyzer' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Netsuite Shopify Loop Integrator
                                        </li>
                                    </Link>
                                </ul>
                            </motion.div>
                        </motion.div>
                    )}
                </div>
                <div className='relative'>
                    <div className='flex gap-1 items-center'>
                        <li onClick={() => toggleDropdown('industries')}
                            onMouseOver={() => toggleDropdown('industries')}
                            className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink text-[16px ] 
                        ${openDropdown === 'industries' && "text-pink"}`}>
                            Industries
                        </li>
                    </div>
                    {openDropdown === 'industries' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}

                            className=' absolute text-homegrey shadow-md text-[17px]
                            w-fit text-nowrap lg:w-fit overflow-y-scroll lg:overflow-auto  max-h-[70vh] lg:h-fit
                flex-wrap lg:flex-nowrap border-t-4 border-orange px-6 py-6 z-[99999] left-0 top-9  bg-white justify-start lg:justify-around flex 
                   gap-5  p-4 rounded-b-xl' onMouseLeave={() => toggleDropdown('')}>
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1, easings: ["easeIn", "easeOut"] }}
                            >
                                <ul className='flex flex-col text-[16px] gap-[5px]'>
                                    <Link target='_blank' href='/seo-tools' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Retail
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/website-seo-analyzer' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Wholesale Distribution
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/seo-tools/keywords-research-tool' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Manufacturing
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/seo-tools/meta-tags-analyzer/' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Professional Services
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/seo-tools/code-to-text-ratio-checker/' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Food and Beverage
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/seo-tools/code-to-text-ratio-checker/' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Finance
                                        </li>
                                    </Link>
                                </ul>

                            </motion.div>
                        </motion.div>
                    )}
                </div>
                <div className='relative'>
                    <div className='flex gap-1 items-center'>
                        <li onClick={() => toggleDropdown('Resources')}
                            onMouseOver={() => toggleDropdown('Resources')}
                            className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink text-[16px ] 
                        ${openDropdown === 'Resources' && "text-pink"}`}>
                            Resources
                        </li>
                    </div>
                    {openDropdown === 'Resources' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}

                            className=' absolute text-homegrey shadow-md text-[17px]
                            w-fit text-nowrap lg:w-fit overflow-y-scroll lg:overflow-auto  max-h-[70vh] lg:h-fit
                flex-wrap lg:flex-nowrap border-t-4 border-orange px-6 py-6 z-[99999] left-0 top-9  bg-white justify-start lg:justify-around flex 
                   gap-5  p-4 rounded-b-xl' onMouseLeave={() => toggleDropdown('')}>
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1, easings: ["easeIn", "easeOut"] }}
                            >
                                <ul className='flex flex-col text-[16px] gap-[5px]'>
                                    <Link target='_blank' href='/seo-tools' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Blog
                                        </li>
                                    </Link>
                                    <Link target='_blank' href='/website-seo-analyzer' passHref>
                                        <li className='flex items-center gap-2 text-black hover:text-orange hover:translate-x-2 transition-all duration-300'>
                                            <MdKeyboardDoubleArrowRight />
                                            Case Studies
                                        </li>
                                    </Link>

                                </ul>

                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default NavbarIndex