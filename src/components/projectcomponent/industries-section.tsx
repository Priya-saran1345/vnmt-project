"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MonitorSmartphone, Search, LayoutGrid, LineChart, BarChart2, Share2 } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    id: 1,
    title: "Digital Strategy",
    description:
      "Bibendum libero enim donec elementum inc eptos feugiat praesent parturient pote susp endisse. Dapibus eros sapien blandit nibher",
    icon: MonitorSmartphone,
    color: "bg-[#8B5CF6]",
    hoverColor: "hover:bg-[#8B5CF6]",
    iconBg: "bg-[#8B5CF6]/10",
  },
  {
    id: 2,
    title: "Product Research",
    description:
      "Bibendum libero enim donec elementum inc eptos feugiat praesent parturient pote susp endisse. Dapibus eros sapien blandit nibher",
    icon: Search,
    color: "bg-[#FF7B54]",
    hoverColor: "hover:bg-[#FF7B54]",
    iconBg: "bg-[#FF7B54]/10",
  },
  {
    id: 3,
    title: "User Experience",
    description:
      "Bibendum libero enim donec elementum inc eptos feugiat praesent parturient pote susp endisse. Dapibus eros sapien blandit nibher",
    icon: LayoutGrid,
    color: "bg-[#22D3EE]",
    hoverColor: "hover:bg-[#22D3EE]",
    iconBg: "bg-[#22D3EE]/10",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description:
      "Bibendum libero enim donec elementum inc eptos feugiat praesent parturient pote susp endisse. Dapibus eros sapien blandit nibher",
    icon: LineChart,
    color: "bg-[#FF7BCA]",
    hoverColor: "hover:bg-[#FF7BCA]",
    iconBg: "bg-[#FF7BCA]/10",
  },
  {
    id: 5,
    title: "SEO Optimization",
    description:
      "Bibendum libero enim donec elementum inc eptos feugiat praesent parturient pote susp endisse. Dapibus eros sapien blandit nibher",
    icon: BarChart2,
    color: "bg-[#3B82F6]",
    hoverColor: "hover:bg-[#3B82F6]",
    iconBg: "bg-[#3B82F6]/10",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description:
      "Bibendum libero enim donec elementum inc eptos feugiat praesent parturient pote susp endisse. Dapibus eros sapien blandit nibher",
    icon: Share2,
    color: "bg-[#8B5CF6]",
    hoverColor: "hover:bg-[#8B5CF6]",
    iconBg: "bg-[#8B5CF6]/10",
  },
]

export function IndustriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center justify-center gap-4">
        <h2 className="mt-3 text-4xl font-bold text-gray-900 heading-calisto heading">Our Industries</h2>
          <span className="text-sm font-medium tracking-wider text-[#818181] parahraph uppercase">We build customized solutions that meet the unique demands of different industries.

</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({id, title, description, icon: Icon, color, hoverColor, iconBg }:{id:number, title: string,description:string,icon: React.ElementType ,color:string,hoverColor:string, iconBg:string}) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <Card
    className={cn(
      `relative overflow-hidden transition-colors duration-300 ${
        id === 1 ? 'border-r border-b' :
        id === 2 ? 'border-b' :
        id === 3 ? 'border-l border-b' :
        id === 4 ? 'border-r' :
        id === 6 ? 'border-l' :
        ''
      }`,
      "group hover:text-white",
      hoverColor
    )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-8">
        <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-6", iconBg)}>
          <Icon className={cn("w-8 h-8", color.replace("bg-", "text-"))} />
        </div>
        <h3 className="text-xl font-semibold mb-4 group-hover:text-white">{title}</h3>
        <p className="text-gray-600 group-hover:text-white/90">{description}</p>
        {title === "Digital Strategy" && (
          <button className="mt-6 text-white font-medium inline-flex items-center">
            READ MORE
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
        {isHovered && (
          <motion.div
            className={cn("absolute inset-0 -z-10", color)}
            initial={{ scale: 0, x: 32, y: 32, opacity: 0 }}
            animate={{ scale: 1, x: 0, y: 0, opacity: 1 }}
            exit={{ scale: 0, x: 32, y: 32, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.3,
            }}
            style={{
              originX: 0,
              originY: 0,
            }}
          />
        )}
      </CardContent>
    </Card>
  )
}


