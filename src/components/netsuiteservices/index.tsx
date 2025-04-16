/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { partners } from "@/components/data/partners";
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  FileText,
  House,
  Package,
  Users2
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { PartnersRow } from '../projectcomponent/trusted-partner';
import Faq from '@/components/projectcomponent/Faq';


const resourcesData: any = {
  'Case Studies': {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Latest Case Studies',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    items: [
      'How Company X Increased Efficiency by 200%',
      'Manufacturing Giant Streamlines Operations',
      'E-commerce Success Story with NetSuite'
    ]
  },
  'Blogs': {
    icon: <FileText className="w-6 h-6" />,
    title: 'Recent Blog Posts',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    items: [
      'Top 10 NetSuite Features for 2024',
      'Maximizing ROI with NetSuite Implementation',
      'Cloud ERP Best Practices'
    ]
  },
  'Customer Stories': {
    icon: <Users2 className="w-6 h-6" />,
    title: 'Customer Success Stories',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    items: [
      'From Startup to Enterprise with NetSuite',
      'Global Expansion Success Story',
      'Digital Transformation Journey'
    ]
  },
  'Products': {
    icon: <Package className="w-6 h-6" />,
    title: 'Featured Products',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    items: [
      'NetSuite ERP Solutions Overview',
      'SuiteCommerce Advanced Features',
      'Financial Management Suite'
    ]
  }
};


const NetsuiteServiceMain = () => {
  const [activeResource, setActiveResource] = useState('Case Studies');
  const firstHalf = partners.slice(0, Math.floor(partners.length / 2));

  return (
    <div className=" ">
      {/* Hero Section */}
      <section className="relative text-white py-10 bg-cover bg-right bg-no-repeat" style={{ backgroundImage: "url('/netsuiteServices/01 (1).png')" }}>
        <div className="container mx-auto flex  px-4 py-2 text-base items-center">
          <Link href="/" className="text-orange hover:text-lightorange transition-colors flex gap-1 items-center ">
            <House size={19} className="-mt-1" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4 ml-1" />
          <span>NetSuite Services</span>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="text-white max-w-xl mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Empowering Your Business
              <br />
              with Expert NetSuite
              <br />
              solutions
            </h1>
            <p className="text-base mb-6">
              Streamline, Automate, & Scale with VNMT Solutions&apos;
              <br />
              Comprehensive NetSuite Services
            </p>
            <motion.button
              className="bg-white text-blue px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET STARTED
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-white py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-4 overflow-hidden">
            <span className="text-white text-center font-semibold bg-orange px-4 py-2 rounded-md text-lg w-full md:w-auto">
              OUR CLIENTS
            </span>
            <div className="flex-1 overflow-hidden">
              <PartnersRow partners={firstHalf} direction={-1} />
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4 ">
          <h2 className="heading font-bold mb-6 heading-calisto">Why Choose Oracle NetSuite?</h2>
          <p className="text-gray-600 mb-4 parahraph">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p className="text-gray-600 parahraph">
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>

      <div className="bg-cover bg-[url('/images/faq-bg.svg')]">
      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="heading font-bold heading-calisto text-center mb-4">Our NetSuite Services</h2>
          <p className="text-center text-gray-600 mb-16 parahraph" >
            Lorem ipsum is simply dummy text of the printing and typesetting industry
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-6xl mx-auto">
            {[
              {
                title: "Implementation",
                icon: "/netsuiteServices/02.png",
                alt: "test"
              },
              {
                title: "Development",
                icon: "/netsuiteServices/03.png",
                alt: "test"
              },
              {
                title: "Customization",
                icon: "/netsuiteServices/04.png",
                alt: "test"
              },
              {
                title: "Optimization",
                icon: "/netsuiteServices/05.png",
                alt: "test"
              },
              {
                title: "Consulting",
                icon: "/netsuiteServices/06.png",
                alt: "test"
              },
              {
                title: "E-Commerce",
                icon: "/netsuiteServices/07.png",
                alt: "test"
              },
              {
                title: "Training",
                icon: "/netsuiteServices/08.png",
                alt: "test"
              },
              {
                title: "Maintenance",
                icon: "/netsuiteServices/09.png",
                alt: "test"
              }
            ].map((service,) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-lg hover:shadow-netsuiteService smooth2 text-center relative"
              >
                <div className="w-20 h-20  rounded-full border-4 border-orange flex items-center justify-center text-3xl absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <Image
                    src={service.icon}
                    width={50}
                    height={50}
                    alt={service.alt}
                    className=" "
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 mt-6 ">{service.title}</h3>
                <p className="text-gray-700 font-medium mb-4 ">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
                </p>
                <button className="text-orange hover:text-lightorange font-medium text-lg">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-10 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/netsuiteServices/10.png"
            alt="Oracle NetSuite Services"
            width={1000}
            height={1000}
            quality={100}
            className="object-cover object-center w-full h-full" />


        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="heading heading-calisto font-bold text-center mb-4 text-3xl md:text-4xl lg:text-5xl ">Our NetSuite Expertise</h2>
          <p className="text-center mb-8 md:mb-16 text-base md:text-lg">
            It&apos;s not about the numbers that speak our growth,<br />
            but our expertise that has helped a number of businesses.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
            {[
              { number: "950+", label: "Project Completed" },
              { number: "10+", label: "Experienced Engineers" },
              { number: "10K+", label: "Hours Worked" },
              { number: "30+", label: "Industries We Serve" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="md:pt-20 pt-10 pb-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl  font-serif text-center mb-16 heading heading-calisto font-bold">Resources</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative">
          {/* Left Navigation */}
          <div className="space-y-2">
            {Object.keys(resourcesData).map((item) => (
              <motion.button
                key={item}
                onClick={() => setActiveResource(item)}
                className={`w-full text-left px-4 py-3 rounded flex items-center gap-3 transition-colors font-semibold text-xl ${
                  activeResource === item ? "bg-blue text-white" : "hover:bg-gray-100"
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Right Content */}
          <div className="md:col-span-2 relative min-h-[500px] border border-orange rounded-xl shadow-xl ">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeResource}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="bg-white rounded-xl  p-6 h-full"
              >
                <div className="flex flex-col md:flex-row gap-6 relative">
                  {/* Left side - Image */}
                  <div className="md:w-1/2 z-[5]">
                    <motion.img
                      src={resourcesData[activeResource].image}
                      alt={activeResource}
                      className="w-full h-auto object-cover rounded-lg "
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                  </div>

                  {/* Right side - Content */}
                  <div className="md:w-1/2">
                    <motion.h3
                      className="text-xl font-semibold mb-4 flex items-center gap-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {resourcesData[activeResource].icon}
                      {resourcesData[activeResource].title}
                    </motion.h3>

                    <div className="space-y-4">
                      {resourcesData[activeResource].items.map((item:any, index:any) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="border-b border-gray-200 pb-4 last:border-0"
                        >
                          <p className="text-gray-700 mb-2">{item}</p>
                          <motion.p
                            className="text-orange hover:text-lightorange cursor-pointer flex items-center gap-2"
                            whileHover={{ x: 4 }}
                          >
                            Read more
                            <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }}>
                              <ArrowRight className="w-4 h-4" />
                            </motion.span>
                          </motion.p>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      className="mt-6 bg-orange hover:bg-lightorange text-white px-4 font-semibold py-1 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      VIEW ALL
                    </motion.button>
                  </div>

                </div>

                <div className='h-[60%] absolute bottom-0 left-24 bg-gray-200 rounded-b-xl w-56  -z-0 md:block hidden'></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>

    <Faq />
    </div>
    </div>
  );
};

export default NetsuiteServiceMain;