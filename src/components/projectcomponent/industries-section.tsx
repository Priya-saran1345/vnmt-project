"use client"

import type * as React from "react"
import { MonitorSmartphone, Search, LayoutGrid, LineChart, BarChart2, Share2 } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    id: 1,
    title: "Financial Services",
    description:
      "Bibendum libero enim donec elementum inc eptos feugiat praesent parturient pote susp endisse. Dapibus eros sapien blandit nibher",
    icon: MonitorSmartphone,
    color: "from-[#D8B4FE] to-[#7C3AED] ",
    text: "text-[#8B5CF6]",
    hoverColor: "hover:bg-[#8B5CF6]",
    iconBg: "bg-[#8B5CF6]/10",
  },
  {
    id: 2,
    title: "Financial Services",
    description:
      "Bibendum libero enim donec elementum inc eptos feugiat praesent parturient pote susp endisse. Dapibus eros sapien blandit nibher",
    icon: Search,
    color: " from-[#FFB6C1] to-[#FF6347]",
    text: "text-[#FF7B54]",
    hoverColor: "hover:bg-[#FF7B54]",
    iconBg: "bg-[#FF7B54]/10",
  },
  {
    id: 3,
    title: "Agencies",
    description:
      "Bibendum libero enim donec elementum inc eptos feugiat praesent parturient pote susp endisse. Dapibus eros sapien blandit nibher",
    icon: LayoutGrid,
    color: "from-[#6EE7B7] to-[#3B82F6]",
    text: "text-[#22D3EE]",
    hoverColor: "hover:bg-[#22D3EE]",
    iconBg: "bg-[#22D3EE]/10",
  },
  {
    id: 4,
    title: "Hardware Manufacturing",
    description:
      "Bibendum libero enim donec elementum inc eptos feugiat praesent parturient pote susp endisse. Dapibus eros sapien blandit nibher",
    icon: LineChart,
    color: "from-[#FECACA] to-[#F472B6] ",
    text: "text-[#FF7BCA]",
    hoverColor: "hover:bg-[#FF7BCA]",
    iconBg: "bg-[#FF7BCA]/10",
  },
  {
    id: 5,
    title: "Media Manufacturing",
    description:
      "Bibendum libero enim donec elementum inc eptos feugiat praesent parturient pote susp endisse. Dapibus eros sapien blandit nibher",
    icon: BarChart2,
    color: " from-[#93C5FD] to-[#2563EB] ",
    text: "text-[#3B82F6]",
    hoverColor: "hover:bg-[#3B82F6]",
    iconBg: "bg-[#3B82F6]/10",
  },
  {
    id: 6,
    title: "Healthcare & Pharma",
    description:
      "Bibendum libero enim donec elementum inc eptos feugiat praesent parturient pote susp endisse. Dapibus eros sapien blandit nibher",
    icon: Share2,
    color: "from-[#86EFAC] to-[#059669] ",
    text: "text-[#8B5CF6]",
    hoverColor: "hover:bg-[#8B5CF6]",
    iconBg: "bg-[#8B5CF6]/10",
  },
]

export function IndustriesSection() {
  return (
    <section className="pt-20 pb-10 bg_industry flex flex-col gap-4">
      <div className="w-full max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-full  xl:max-w-[1280px] 2xl:max-w-[1450px] px-4 md:px-6 lg:px-8 mx-auto
">
        <div className="text-center max-w-2xl mx-auto mb-10 flex flex-col items-center justify-center gap-4">
          <h2 className="mt-3 text-4xl font-bold text-gray-900 heading-calisto heading ">Our Industries</h2>
          <span className="text-sm font-medium text-[#818181] parahraph">
            We build customized solutions that meet the unique demands of different industries.
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <span className="parahraph font-bold tracking-wide flex items-center gap-3 md:flex-row flex-col">
          {" "}
          Want to know more about our industries? {" "}
          <a className="text-blue hover:text-orange smooth1 hover:scale-105 cursor-pointer underline">
            {" "}
            Click here{" "}
          </a>
        </span>
      </div>
    </section>
  )
}

function ServiceCard({
  id,
  title,
  description,
  icon: Icon,
  color,
  iconBg,
  // text,
}: {
  id: number
  title: string
  description: string
  icon: React.ElementType
  color: string
  iconBg: string
  text: string
}) {
  return (
    <div
      className={cn("p-7 relative overflow-hidden bg-white transition-all duration-500 group hover:shadow-xl", {
        "border-r border-b": id === 1,
        "border-b": id === 2,
        "border-l border-b": id === 3,
        "border-r": id === 4,
        "border-l": id === 6,
      })}
    >
      {/* Gradient Background Animation */}
      <span
        className={cn(
          "absolute z-0 h-16 w-16 rounded-full transition-all duration-700 ease-in-out transform group-hover:scale-[20] bg-gradient-to-l",
          color,
        )}
      />

      <div
        className={cn(
          "relative z-1 w-full transition-all duration-500 ease-in-out",
          "group-hover:mx-auto group-hover:max-w-md",
        )}
      >
        {/* Icon */}
        <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-6 group", iconBg)}>
          <Icon className={cn("w-8 h-8 transition-all duration-500 text-white",)} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition-all duration-500 bulletheading">
          {title}
        </h3>

        {/* Description */}
        <p className="text-black group-hover:text-white transition-all duration-500 text-base">{description}</p>

        <button className="cta text-white mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <span>Read More</span>
        </button>
      </div>
    </div>
  )
}

