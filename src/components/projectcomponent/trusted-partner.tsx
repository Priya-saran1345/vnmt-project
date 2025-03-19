/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from "framer-motion"
import { partners } from "@/components/data/partners"

const SCROLL_SPEED = 0.05

function PartnersRow({ partners, direction }: { partners: any ; direction: 1 | -1 }) {
  const [hovering, setHovering] = useState(false)
  const baseX = useMotionValue(0)
  const scrollX = useSpring(baseX, {
    damping: 50,
    stiffness: 400,
  })

  const rowRef = useRef<HTMLDivElement>(null)

  useAnimationFrame((time, delta) => {
    if (!rowRef.current || hovering) return

    const rowWidth = rowRef.current.offsetWidth
    const moveBy = SCROLL_SPEED * delta * direction

    let newX = baseX.get() + moveBy
    if (direction === 1) {
      if (newX >= 0) newX -= rowWidth / 3
    } else {
      if (newX <= -rowWidth / 3) newX += rowWidth / 3
    }

    baseX.set(newX)
  })

  const x = useTransform(scrollX, (value) => `${value}px`)

  const orderedPartners =
    direction === 1
      ? [...partners.slice(-partners.length / 2), ...partners, ...partners.slice(0, partners.length / 2)]
      : [...partners, ...partners, ...partners]

  return (
    <div className="flex overflow-hidden">
      <motion.div
        ref={rowRef}
        style={{ x }}
        className="flex gap-8"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {orderedPartners.map((partner, index) => (
          <motion.div
            key={`${partner.id}-${index}`}
            className="w-[150px] h-[80px] flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={150}
              height={60}
              className="object-contain filter grayscale  hover:grayscale-0 transition-all duration-300 brightness-50 hover:brightness-100 "
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export function TrustedPartner() {
  const firstHalf = partners.slice(0, Math.floor(partners.length / 2));
const lastHalf = partners.slice(Math.floor(partners.length / 2));
  return (
    <div className="w-full">
      <div className="mx-auto">
        <div className="bg-gradient-to-t rounded-t-full py-4 flex items-center justify-center from-darkblue to-blue">
          <h2 className="heading heading-calisto font-bold text-center text-white">
            Trusted by Industry Leaders Worldwide
          </h2>
        </div>
        <div className="overflow-hidden bg-white py-8">
          <PartnersRow partners={firstHalf} direction={1} />
          <div className="h-8" /> {/* Spacer */}
          <PartnersRow partners={lastHalf} direction={-1} />
        </div>
        <div className="h-5 bg-darkblue"></div>
      </div>
    </div>
  )
}

