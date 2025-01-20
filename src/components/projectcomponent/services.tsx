"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { services } from "@/components/data/services"
import { Button } from "@/components/ui/button"

export function Services() {
  const [activeService, setActiveService] = useState<number>(1)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Function to check which service is in the center of the viewport
  const handleScroll = () => {
    const container = scrollContainerRef.current
    if (!container) return

    const containerRect = container.getBoundingClientRect()
    const containerCenter = containerRect.top + containerRect.height / 2

    // Get all service elements
    const serviceElements = container.querySelectorAll(".service-item")

    serviceElements.forEach((element) => {
      const rect = element.getBoundingClientRect()
      const elementCenter = rect.top + rect.height / 2

      // If this element's center is closest to the container's center
      if (Math.abs(containerCenter - elementCenter) < rect.height / 2) {
        setActiveService(Number(element.getAttribute("data-id")))
      }
    })
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      // Initial check
      handleScroll()
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto px-10">
        <div className="gap-12">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold mb-4">NetSuite Services</h2>
              <p className="text-gray-600 mb-6">Your Trusted Partner for NetSuite Success</p>
            </div>
            <div className="flex justify-end mb-4">
              <Button variant="ghost" className="text-blue-600 border-2 border-blue-600 font-semibold">
                View All
              </Button>
            </div>
          </div>

          <div className="flex items-start">
            <div className="md:w-1/3">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/service-girl.svg"
                  alt="NetSuite Services"
                  width={410}
                  height={410}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2 relative">
              {/* Orange indicator line */}
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-orange-500" />

              {/* Scrollable container */}
              <div ref={scrollContainerRef} className="h-[400px] overflow-y-auto pr-8 space-y-8 custom-scrollbar">
                {services.map((service:any) => (
                  <div
                    key={service.id}
                    data-id={service.id}
                    className={`service-item flex gap-4 p-4 transition-all duration-300
                     `}
                  >
                    <div className="flex-shrink-0 rounded-tl-full rounded-lg bg-blue h-[90px] w-[90px] flex items-center justify-center">
                      <Image src={service.icon || "/placeholder.svg"}
                      className={` ${activeService === service.id ? "" : "invert brightness-0"} `}
                       height={39} width={50} alt="" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

