
/* eslint-disable @typescript-eslint/no-explicit-any */

// import { Useapi } from '@/helpers/apiContext'
import Link from 'next/link'
import React, { useState } from 'react'

// import Button from '@/components/button'
// import ClientsCount from '../ClientsCount'
// import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'


const Index = ({ show }: any) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    //   const { basic_details } = Useapi();
    // const Router = useRouter()
    const toggleDropdown = (menu: string) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };
    return (
        <div className=' lg:flex gap-[10px] w-full justify-between 2xl:gap-3 py-3 items-center text-[17px] lg:text-[15px] bg-blu  xl:text-[15px] 2xl:text=[17px] '>
            <div className={`lg:items-center font-medium ${show ? "flex flex-col" : "flex"}  gap-2 xl:gap-4 flex-1 justify-evenly`}>
              
                <div className='relative'>


                    <div className='flex gap-1 items-center'>
                        <li onClick={() => toggleDropdown('seo')} onMouseOver={() => toggleDropdown('seo')} className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink text-[16px ] ${openDropdown === 'seo' && "text-pink"}`}>
                            Company
                        </li>
                        {/* {openDropdown === 'seo' ?<FaAngleUp />
:
         
<FaAngleDown />
} */}
                    </div>

                    {openDropdown === 'seo' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}

                            className=' absolute text-homegrey shadow-md text-[17px] w-fit text-nowrap lg:w-fit overflow-y-scroll lg:overflow-auto  max-h-[70vh] lg:h-fit
                  flex-wrap lg:flex-nowrap px-6 py-6 z-[99999] left-0 top-16  bg-white justify-start lg:justify-around flex 
                   gap-5  p-4 rounded-xl' onMouseLeave={() => toggleDropdown('')}>
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1, easings: ["easeIn", "easeOut"] }}

                            >

                                <ul className='  flex flex-col  text-[15px]  gap-[5px]'>
                                    <Link target='_blank' className='hover:text-pink' href='/'><li>About Us</li></Link>
                                    <Link target='_blank' className='hover:text-pink' href='/local-seo-services'><li>Career</li></Link>
                                    <Link target='_blank' className='hover:text-pink' href='/on-page-seo-services'><li>Meet The Team</li></Link>
                                    {/* <Link target='_blank' className='hover:text-pink' href='/off-page-seo'><li>Off Page SEO</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/app-store-optimization'><li>App Store Optimization</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/ecommerce-seo-services'><li>Ecommerce SEO</li></Link> */}
                                    {/* <Link target='_blank' className='hover:text-pink' href='/google-business-profile-management-services'><li>GMB Services</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/online-reputation-management'><li>Improve your brand’s Online Reputation</li></Link> */}
                                </ul>
                            </motion.div>
                            {/* <div className='bg-[#DFF0F8]  hidden lg:block  w-[2px] min-h-full'>
            </div> */}
                            {/* <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, easings: ["easeIn", "easeOut"] }}
            >
            
              <ul className=' mt-5  text-[15px]  gap-[5px] flex flex-col '>
                <Link target='_blank' className='hover:text-pink' href='/link-building-services'><li>Link Building Services</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/guest-posting-services'><li>Guest Posting Services</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/article-submission-services'><li>Article Submission Services</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/citation-submission'><li>Citation Submission</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/blog-commenting-service'><li>Blog Commenting Service</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/content-marketing-services'><li>Content Marketing</li></Link>
              </ul>
            </motion.div> */}
                            {/* <div className='bg-[#DFF0F8]  hidden lg:block  w-[2px] min-h-full'>
              
            </div> */}
                            {/* <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, easings: ["easeIn", "easeOut"] }}>
              <div className='flex justify-start gap-2 items-center'>
              </div>
              <ul className='  flex flex-col mt-5 text-[15px]  gap-[5px] '>
                <Link target='_blank' className='hover:text-pink' href='/seo-tools/backlink-maker'><li>Create Backlinks</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/website-seo-analyzer'><li>Website SEO Analyzer</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/seo-tools'><li>Free SEO Tools </li></Link>
                <Link target='_blank' className='hover:text-pink' href='/seo-tools/keyword-position-checker'><li>Keyword Position Checker</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/seo-tools/google-index-checker/'><li>Google Index Checker</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/seo-tools/xml-sitemap-generator'><li>XML Sitemap Generator</li></Link>
              </ul>
            </motion.div> */}
                            {/* <div className='bg-[#DFF0F8]   hidden lg:block w-[2px] min-h-full'>
            </div> */}
                            {/* <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, easings: ["easeIn", "easeOut"] }}
              className='min-h-full lg:w-[20%] flex justify-center items-start  lg:items-center'>
              <div className='flex flex-col gap-3 justify-center items-center'>
                <p className='text-[20px] text-homeblack font-medium'>For More Information</p>
               
              </div>
            </motion.div> */}
                        </motion.div>
                    )}
                </div>
                {/* Pay Per Click Dropdown */}
                <div className='flex gap-1 items-center'>
                    <li onClick={() => toggleDropdown('ppc')} onMouseOver={() => toggleDropdown('ppc')} className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink text-[16px ] ${openDropdown === 'ppc' && "text-pink"}`}>
                        Netsuite</li>

                    {/* <Image
            src={'/images/down-icon.svg'}
            width={14}
            height={11}
            alt={"w3era digital marketing company"}
            className={`cursor-pointer 2xl:w-[14px] w-[12px] transition-transform duration-300 ease-in-out ${openDropdown === 'ppc' ? 'rotate-180' : ''}`}
          /> */}
                    {/* {openDropdown === 'ppc' ?<FaAngleUp />
:
         
<FaAngleDown />
} */}
                    {/* <FaAngleDown /> */}

                </div>

                {openDropdown === 'ppc' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='shadow-md absolute text-homegrey text-[17px]
                w-[85%] lg:w-[95%] overflow-y-scroll lg:overflow-auto max-h-[70vh] lg:h-fit flex-wrap lg:flex-nowrap 
                  px-12 py-14 z-[99999] top-20 left-10 bg-white  justify-start lg:justify-around flex gap-5  p-7 rounded-xl' onMouseLeave={() => toggleDropdown('')}>
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1, easings: ["easeIn", "easeOut"] }}
                        >
                            <div className='flex justify-start gap-2 items-center'>

                            </div>
                            <ul className=' flex flex-col mt-5 text-[15px]  gap-[5px]  '>
                                {/* <Link target='_blank' className='hover:text-pink' href='/google-my-business-ads/'><li>GMB Ads</li></Link> */}
                                <Link target='_blank' className='hover:text-pink' href='/google-shopping-ads'><li>Netsuite Consulting</li></Link>
                                <Link target='_blank' className='hover:text-pink' href='/google-ads-services'><li>Netsuite Support & Maintenance</li></Link>
                                <Link target='_blank' className='hover:text-pink' href='/google-ads-services'><li>Netsuite Training</li></Link>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, easings: ["easeIn", "easeOut"] }}
                        >


                        </motion.div>

                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, easings: ["easeIn", "easeOut"] }}
                        >

                        </motion.div>

                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, easings: ["easeIn", "easeOut"] }}
                            className='min-h-full lg:w-[20%] flex justify-center items-start  lg:items-center'>

                        </motion.div>
                    </motion.div>
                )}





                <div className='flex gap-1 items-center'>
                    <li onClick={() => toggleDropdown('web-dev')} onMouseOver={() => toggleDropdown('web-dev')} className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink text-[16px ] ${openDropdown === 'web-dev' && "text-pink"}`}>
                        Celigo
                    </li>

                </div>

                {openDropdown === 'web-dev' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='shadow-md absolute text-homegrey text-[17px]  w-[85%] lg:w-[95%] lg:h-fit overflow-y-scroll lg:overflow-auto 
               max-h-[70vh]  flex-wrap lg:flex-nowrap px-12 py-14 z-[99999] top-20 left-10 bg-white  justify-start lg:justify-around flex gap-5  p-7 rounded-xl' onMouseLeave={() => toggleDropdown('')}>
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1, easings: ["easeIn", "easeOut"] }}
                        >

                            <ul className=' flex flex-col mt-5 text-[15px]  gap-[5px]  '>
                                <Link target='_blank' className='hover:text-pink' href='/web-development-services'><li>Celigo Customization</li></Link>
                                <Link target='_blank' className='hover:text-pink' href='/magento-web-development-services'><li>Celigo Support</li></Link>
                                <Link target='_blank' className='hover:text-pink' href='/laravel-development-services'><li>Celigo Optimization</li></Link>
                                <Link target='_blank' className='hover:text-pink' href='/custom-php-development-services-company'><li>Celigo Implementation</li></Link>
                                <Link target='_blank' className='hover:text-pink' href='/asp-dot-net-development-services'><li>Integration Using Celigo Platform</li></Link>

                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, easings: ["easeIn", "easeOut"] }}
                        >

                        </motion.div>

                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, easings: ["easeIn", "easeOut"] }}
                        >

                        </motion.div>


                    </motion.div>
                )}
                {/* Our Packages Dropdown */}
                <div className='flex gap-1 items-center'>
                    <li onClick={() => toggleDropdown('packages')} onMouseOver={() => toggleDropdown('packages')}
                        className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink  ${openDropdown === 'packages' && "text-pink"}`}>
                        Integrations
                    </li>

                    {/* {openDropdown === 'packages' ?<FaAngleUp />
:
         
<FaAngleDown />
} */}

                </div>

                {openDropdown === 'packages' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='shadow-md absolute text-homegrey text-[17px]  w-[85%] lg:w-[95%] lg:h-fit overflow-y-scroll lg:overflow-auto max-h-[70vh]
                  flex-wrap lg:flex-nowrap px-12 py-14 z-[99999] top-20 left-10 bg-white  justify-start lg:justify-around flex gap-5  p-7 rounded-xl' onMouseLeave={() => toggleDropdown('')}>
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1, easings: ["easeIn", "easeOut"] }}>

                            <ul className=' flex flex-col mt-5 text-[15px]  gap-[5px] '>
                                <Link target='_blank' className='hover:text-pink' href='/seo-packages'><li>Netsuite Integration</li></Link>
                                <Link target='_blank' className='hover:text-pink' href='/ecommerce-seo-packages'><li>Magento Netsuite Integration</li></Link>
                                <Link target='_blank' className='hover:text-pink' href='/local-seo-packages'><li>WooCommerce Netsuite Integration</li></Link>
                                <Link target='_blank' className='hover:text-pink' href='/guest-posting-service-packages'><li>Shopify Netsuite Integration</li></Link>
                                <Link target='_blank' className='hover:text-pink' href='/app-store-aso-packages'><li>Jitterbit Netsuite Integration</li></Link>
                                {/* <Link target='_blank' className='hover:text-pink' href='/link-building-packages'><li>Link Building Packages</li></Link> */}

                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, easings: ["easeIn", "easeOut"] }}
                        >

                        </motion.div>

                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, easings: ["easeIn", "easeOut"] }}
                        >

                        </motion.div>
                    </motion.div>
                )}
                {/* SMM Dropdown */}
                <li onMouseOver={() => toggleDropdown('tool')}
                    onClick={() => toggleDropdown('tool')}
                    className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink text-[16px ] ${openDropdown === 'tool' && "text-pink"}`}>
                    Products
                    {/* {openDropdown === 'tool' ?
        <FaAngleUp />
           :
            <FaAngleDown />
            } */}
                </li>
                {openDropdown === 'tool' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='shadow-md absolute text-homegrey 
                w-[85%] lg:w-[95%] overflow-y-scroll lg:overflow-auto max-h-[70vh] lg:h-fit flex-wrap lg:flex-nowrap text-[17px]  px-12 py-14 z-[99999] 
                top-20 left-10 bg-white justify-start  lg:justify-around flex gap-5 p-7 rounded-xl'
                        onMouseLeave={() => toggleDropdown('')}>
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, easings: ["easeIn", "easeOut"] }}
                        >
                            <div className='flex justify-start gap-2 items-center'>

                            </div>
                            <ul className=' flex flex-col mt-5 text-[15px]  gap-[5px]  '>
                                <Link target='_blank' className='hover:text-pink' href='/seo-tools'><li>Netsuite WooCommerce Integrator</li></Link>
                                <Link target='_blank' className='hover:text-pink' href='/website-seo-analyzer'><li>Netsuite Shopify Loop Integrator</li></Link>


                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, easings: ["easeIn", "easeOut"] }}
                        >


                        </motion.div>

                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, easings: ["easeIn", "easeOut"] }}
                        >
                            <div className='flex justify-start gap-2 items-center'>

                            </div>

                        </motion.div>

                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, easings: ["easeIn", "easeOut"] }}
                        >
                            <div className='flex justify-start gap-2 items-center'>

                            </div>

                        </motion.div>

                    </motion.div>
                )}
                <li onMouseOver={() => toggleDropdown('industries')}
                    onClick={() => toggleDropdown('industries')}
                    className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink text-[16px ] ${openDropdown === 'industries' && "text-pink"}`}>
                    Industries
                    {/* {openDropdown === 'industries' ?
        <FaAngleUp />
           :
            <FaAngleDown />
            } */}
                </li>
                {openDropdown === 'industries' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='shadow-md absolute text-homegrey 
                w-[85%] lg:w-[95%] overflow-y-scroll lg:overflow-auto max-h-[70vh] lg:h-fit flex-wrap lg:flex-nowrap text-[17px]  px-12 py-14 z-[99999] 
                top-20 left-10 bg-white justify-start  lg:justify-around flex gap-5 p-7 rounded-xl'
                        onMouseLeave={() => toggleDropdown('')}>
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, easings: ["easeIn", "easeOut"] }}
                        >
                            <div className='flex justify-start gap-2 items-center'>
                            </div>
                            <ul className=' flex flex-col mt-5 text-[15px]  gap-[5px]  '>
                                <Link target='_blank' className='hover:text-pink' href='/seo-tools'><li>Retail</li></Link>
                                <Link target='_blank' className='hover:text-pink' href='/website-seo-analyzer'><li>Wholesale Distribution</li></Link>
                                <Link target='_blank' className='hover:text-pink' href='/seo-tools/keywords-research-tool'><li>Manufacturing</li></Link>
                                <Link target='_blank' className='hover:text-pink' href='/seo-tools/meta-tags-analyzer/'><li>Professional Services</li></Link>
                                <Link target='_blank' className='hover:text-pink' href='/seo-tools/code-to-text-ratio-checker/'><li>Food and Beverage</li></Link>
                                <Link target='_blank' className='hover:text-pink' href='/seo-tools/code-to-text-ratio-checker/'><li>Finance</li></Link>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, easings: ["easeIn", "easeOut"] }}
                        >
                            <div className='flex justify-start gap-2 items-center'>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
                <li onMouseOver={() => toggleDropdown('Resources')}
                    onClick={() => toggleDropdown('Resources')}
                    className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink text-[16px ] ${openDropdown === 'Resources' && "text-pink"}`}>
                    Resources
                    {/* {openDropdown === 'Resources' ?
        <FaAngleUp />
           :
            <FaAngleDown />
            } */}
                </li>
                {openDropdown === 'Resources' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='shadow-md absolute text-homegrey 
                w-[85%] lg:w-[95%] overflow-y-scroll lg:overflow-auto max-h-[70vh] lg:h-fit flex-wrap lg:flex-nowrap text-[17px]  px-12 py-14 z-[99999] 
                top-20 left-10 bg-white justify-start  lg:justify-around flex gap-5 p-7 rounded-xl'
                        onMouseLeave={() => toggleDropdown('')}>
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, easings: ["easeIn", "easeOut"] }}
                        >
                            <div className='flex justify-start gap-2 items-center'>
                            </div>
                            <ul className=' flex flex-col mt-5 text-[15px]  gap-[5px]  '>
                                <Link target='_blank' className='hover:text-pink' href='/seo-tools'><li>Blog</li></Link>
                                <Link target='_blank' className='hover:text-pink' href='/website-seo-analyzer'><li>Case Studies</li></Link>
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </div>
            <div className='flex gap-2 lg:gap-1 mt-2 lg:mt-0 flex-col lg:flex-row w-full md:w-fit justify-end'>
                <Link target='_blank' href={'https://meetings.hubspot.com/sakshi-jass?uuid=ae684c90-b22d-4aed-a972-4de20bef7f87'}>
                    <button className=' max-w-[180px]  py-[8px]   border-2 px-2 2xl:px-4 border-pink rounded-full meeting-btn'>
                        <span className="meeting-text font-semibold text-sm ">Contact Us</span>
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Index