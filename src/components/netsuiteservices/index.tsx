/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { AnimatePresence, motion } from 'framer-motion';
import {
  BookOpen,
  ChevronRight,
  FileText,
  Package,
  Users2
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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


const clientLogos = [
  "/placeholder.svg?height=40&width=120",
  "/placeholder.svg?height=40&width=120",
  "/placeholder.svg?height=40&width=120",
  "/placeholder.svg?height=40&width=120",
  "/placeholder.svg?height=40&width=120",
  "/placeholder.svg?height=40&width=120",
]

const NetsuiteServiceMain = () => {
  const [activeResource, setActiveResource] = useState('Case Studies');

  return (
    <div className=" mb-40">
      {/* Hero Section */}
      <section className="relative bg-blue text-white">
        <div className="container mx-auto flex items-center px-4 py-2 text-sm">
          <Link href="/" className="text-orange hover:text-lightorange transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
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
            <p className="text-sm mb-6">
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
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Oracle NetSuite"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-white py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 items-center ">
            <span className="text-white font-semibold bg-orange px-4 py-1 rounded-md text-lg">OUR CLIENTS</span>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt={`Client ${index + 1}`}
                    width={120}
                    height={40}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto ">
          <h2 className="heading font-bold mb-6 heading-calisto">Why Choose Oracle NetSuite?</h2>
          <p className="text-gray-600 mb-4 parahraph">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p className="text-gray-600 parahraph">
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue/5">
        <div className="container mx-auto">
          <h2 className="heading font-bold heading-calisto text-center mb-4">Our NetSuite Services</h2>
          <p className="text-center text-gray-600 mb-16 parahraph" >
            Lorem ipsum is simply dummy text of the printing and typesetting industry
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-6xl mx-auto">
            {[
              {
                title: "Implementation",
                icon: "🔧",
              },
              {
                title: "Development",
                icon: "💻",
              },
              {
                title: "Customization",
                icon: "⚙️",
              },
              {
                title: "Optimization",
                icon: "📈",
              },
              {
                title: "Consulting",
                icon: "👥",
              },
              {
                title: "E-Commerce",
                icon: "🛒",
              },
              {
                title: "Training",
                icon: "🎓",
              },
              {
                title: "Maintenance",
                icon: "🔨",
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg hover:shadow-xl smooth2 text-center relative"
              >
                <div className="w-20 h-20  rounded-full border-4 border-orange flex items-center justify-center text-3xl absolute -top-10 left-1/3">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 mt-6 ">{service.title}</h3>
                <p className="text-gray-700 font-medium mb-4 text-black ">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
                </p>
                <button className="text-orange hover:text-lightorange font-medium text-lg">
                  Read More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Add geometric pattern background */}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-serif text-center mb-4">Our NetSuite Expertise</h2>
          <p className="text-center mb-16">
            It&apos;s not about the numbers that speak our growth,<br />
            but our expertise that has helped a number of businesses.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif text-center mb-16">Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Left Navigation */}
            <div className="space-y-2">
              {Object.keys(resourcesData).map((item) => (
                <motion.button
                  key={item}
                  onClick={() => setActiveResource(item)}
                  className={`w-full text-left px-4 py-3 rounded flex items-center gap-3 transition-colors ${activeResource === item
                    ? 'bg-blue text-white'
                    : 'hover:bg-gray-100'
                    }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {resourcesData[item].icon}
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Right Content */}
            <div className="md:col-span-2 relative h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeResource}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  className="bg-gray-50 rounded-lg p-6 h-full"
                >
                  <motion.img
                    src={resourcesData[activeResource].image}
                    alt={activeResource}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  />
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
                    {resourcesData[activeResource].items.map((item: any, index: any) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="border-b border-gray-200 pb-4"
                      >
                        <p className="text-gray-700 mb-2">{item}</p>
                        <motion.p
                          className="text-orange hover:text-lightorange cursor-pointer flex items-center gap-2"
                          whileHover={{ x: 4 }}
                        >
                          Read more
                          <motion.span
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                          >
                            →
                          </motion.span>
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    className="mt-6 bg-orange hover:bg-lightorange text-white px-6 py-2 rounded-full transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    VIEW ALL
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetsuiteServiceMain;