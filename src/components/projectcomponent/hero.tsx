/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState } from "react"
import type React from "react"
import { GoDotFill } from "react-icons/go";
import Slider from "react-slick"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import Image from "next/image";

const bgImages = [
  { id: 1, image: "/images/bgbanner1.svg" },
  { id: 2, image: "/images/bgbanner2.svg" },
  { id: 3, image: "/images/bgbanner3.svg" },
]

// Custom arrow components
const PrevArrow = (props: any) => {
  const { onClick } = props
  return (
    <div
      className="hidden xl:flex absolute left-10 top-1/2 -translate-y-1/2 z-20  items-center justify-center w-12 h-12 rounded-full bg-white text-orange cursor-pointer hover:bg-white/30 transition-all"
      onClick={onClick}
    >
      <FaArrowLeft className="text-2xl" />
    </div>
  )
}

const NextArrow = (props: any) => {
  const { onClick } = props
  return (
    <div
      className="hidden xl:flex absolute right-10 top-1/2 -translate-y-1/2 z-20  items-center justify-center w-12 h-12 rounded-full bg-white text-orange cursor-pointer hover:bg-white/30 transition-all"
      onClick={onClick}
    >
      <FaArrowRight className="text-2xl" />
    </div>
  )
}

export function Hero() {
  const [currentBg, setCurrentBg] = useState(bgImages[0].image)
console.log(currentBg);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    cssEase: "ease-in-out", 
    beforeChange: (_: number, next: number) => setCurrentBg(bgImages[next].image)
  }

  return (
    <div
      className="relative w-full flex flex-col bg-contain bg-right mx-auto bg-no-repeat h-[76vh] transition-all duration-500"
    >
      <div className="absolute inset-0 banner-gradient pointer-events-none " aria-hidden="true" />


      <Slider {...settings} className="">
  {bgImages.map((bg) => (
    <div key={bg.id} className="relative h-[80vh] w-full flex items-center justify-center ">
      {/* Background Image */}
      <Image src={bg.image} alt={`Background ${bg.id}`}   className="object-cover w-full h-full"  width={10000} height={10000} />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full lg:w-[95%] 2xl:w-[77%] mx-auto px-5 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
            <div className="space-y-6 ">
              <p className="font-semibold tracking-wide text-orange flex items-center gap-1">
                <GoDotFill /> BUSINESS MAKE EASY
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Reliably guiding your business to success
              </h1>
              <p className="text-lg text-gray-200 max-w-lg">
                We ensure a smooth ERP implementation to your business needs, setup to go-live
              </p>
              <button className="bg-orange hover:bg-orange-600 transition-colors text-white font-semibold px-6 py-2 border-2 border-orange rounded">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</Slider>
    </div>
  )
}
