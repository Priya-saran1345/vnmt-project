"use client";

import { motion, useInView  } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface PlatformIconProps {
  src: string;
  alt: string;
  className?: string;
}

function DotWave() {
  const wavePath = "M20,50 Q250,-25 500,50 T1000,10";

  return (
    <svg
      width="100%"
      height="100"
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      className="relative z-0"
    >
      <path
        d={wavePath}
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeDasharray="5,5"
        className="wave-path"
      />
    </svg>
  );
}

function PlatformIcon({ src, alt, className = "" }: PlatformIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      exit={{scale:1}}
      transition={{ type: "spring", stiffness: 500, damping: 15 }}
      className={`relative w-[6.5rem] h-[6.5rem] z-5 bg-white rounded-lg shadow-lg cursor-pointer ${className}`}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="p-2 object-contain"
      />
    </motion.div>
  );
}

export default function IntegrationSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  return (
    <div className="bg_integration bg-blue">
      <div className="w-full lg:w-[95%] 2xl:w-[77%] mx-auto px-5  py-10 relative">
        <motion.h1
          className="font-bold text-white text-center mb-32 mx-auto heading-calisto heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get Seamless Integration Experience with Our <br /> Celigo Expertise
        </motion.h1>

        <div 
          ref={sectionRef}
        className="relative h-48 ">
          <DotWave />
          <div className="absolute inset-0 flex justify-between items-center -top-[6.5rem]">
          {[
          { src: "/images/integration1.svg", alt: "Xero" },
          { src: "/images/integration2.svg", alt: "Shopify" },
          { src: "/images/integration3.svg", alt: "HubSpot" },
          { src: "/images/integration4.svg", alt: "WooCommerce" },
          { src: "/images/integration5.svg", alt: "Adobe CC" },
          { src: "/images/integration6.svg", alt: "Magento" },
        ].map((icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0,scale:0 }}
            animate={isInView ? { opacity: 1, scale:1 } : {}}
            transition={{
              delay: index * 0.1, 
              duration: 0.5,
            }}
          >
            <PlatformIcon src={icon.src} alt={icon.alt} />
          </motion.div>
        ))}
          </div>
        </div>

        <motion.p
          className="text-white text-center text-lg md:text-xl mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Seamlessly integrate your applications with Celigo&apos;s user-friendly platform. Automate processes and enhance
          operational efficiency with pre-built connectors and real-time monitoring.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
             <button
     className='_button1'
    >
     EXPLORE CELIGO
    </button>
          {/* <button className="bg-white text-blue px-8 py-3 rounded-full font-bold text-lg hover:scale-105 smooth3 transition-colors">
            EXPLORE CELIGO
          </button> */}
        </motion.div>
      </div>
    </div>
  );
}
