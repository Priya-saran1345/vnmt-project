"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface PlatformIconProps {
  src: string
  alt: string
  className?: string
}

function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-8 gap-2 ${className}`}>
      {Array.from({ length: 64 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-1 h-1 bg-white/20 rounded-full"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}
function PlatformIcon({ src, alt, className = "" }: PlatformIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative w-16 h-16 bg-white rounded-lg shadow-lg ${className}`}
    >
      <Image src={src || "/placeholder.svg"} alt={alt} fill className="p-2 object-contain" />
    </motion.div>
  )
}

function WavyLine() {


  return (
    <div className="relative">
      <svg
        width="100%"
        height="100"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute top-1/2 left-0 -translate-y-1/2"
      >
        <motion.path
          d="M0,50 Q250,0 500,50 T1000,50"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="5,5"
          animate={{
            d: ["M0,50 Q250,0 500,50 T1000,50", "M0,50 Q250,100 500,50 T1000,50", "M0,50 Q250,0 500,50 T1000,50"],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />


      </svg>
    </div>
  )
}



export default function IntegrationSection() {
  return (
    <div className=" bg_integration relative overflow-hidden">
      <DotPattern className="absolute top-4 right-4" />
      <DotPattern className="absolute bottom-4 left-4" />

      <div className="container mx-auto px-4 py-16 relative">
        <motion.h1
          className="font-bold text-white text-center mb-16  mx-auto heading-calisto heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get Seamless Integration Experience with Our <br /> Celigo Expertise
        </motion.h1>

        <div className="relative h-48 mb-16">
          <div className="absolute inset-0 flex justify-between items-center">
            <PlatformIcon
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jPEM9Gabod85LgDhquvaM7pWBQpCYC.png"
              alt="Xero"
            />
            <PlatformIcon
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jPEM9Gabod85LgDhquvaM7pWBQpCYC.png"
              alt="Shopify"
            />
            <PlatformIcon
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jPEM9Gabod85LgDhquvaM7pWBQpCYC.png"
              alt="HubSpot"
              className="scale-125"
            />
            <PlatformIcon
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jPEM9Gabod85LgDhquvaM7pWBQpCYC.png"
              alt="WooCommerce"
            />
            <PlatformIcon
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jPEM9Gabod85LgDhquvaM7pWBQpCYC.png"
              alt="Adobe CC"
            />
            <PlatformIcon
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jPEM9Gabod85LgDhquvaM7pWBQpCYC.png"
              alt="Magento"
            />
          </div>
          <WavyLine />
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
          <button className="bg-white text-blue px-8 py-3 rounded-full font-bold text-lg hover:scale-105 smooth3 transition-colors">
            EXPLORE CELIGO
          </button>
        </motion.div>
      </div>
    </div>
  )
}

