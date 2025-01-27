"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { services } from "@/components/data/services"

export function ServicesClient() {
    const [activeService, setActiveService] = useState<number>(1)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const handleScroll = () => {
        const container = scrollContainerRef.current
        if (!container) return

        const containerRect = container.getBoundingClientRect()
        const containerCenter = containerRect.top + containerRect.height / 2

        const serviceElements = container.querySelectorAll(".service-item")

        serviceElements.forEach((element) => {
            const rect = element.getBoundingClientRect()
            const elementCenter = rect.top + rect.height / 2

            if (Math.abs(containerCenter - elementCenter) < rect.height / 2) {
                setActiveService(Number(element.getAttribute("data-id")))
            }
        })
    }

    useEffect(() => {
        const container = scrollContainerRef.current
        if (container) {
            container.addEventListener("scroll", handleScroll)
            handleScroll() // Initial check
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll)
            }
        }
    }, [])

    return (
        <div className="flex  items-start gap-4 ">
            <div className="md:w-full ">
                <div className="relative rounded-2xl overflow-hidden">
                    <Image
                        src="/images/bgservices.svg"
                        alt="NetSuite Services"
                        width={1000}
                        height={1000}
                        className="object-contain shadow-lg rounded-2xl "
                    />
                </div>
            </div>
            <div className="md:w-full relative">
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-orange-500" />
                <div
                    ref={scrollContainerRef}
                    className="h-[450px] overflow-y-auto pr-8 space-y-4 custom-scrollbar"
                >
                    {services.map((service: { icon: string, description: string, title: string, id: number }) => (
                        <div
                            key={service.id}
                            data-id={service.id}
                            className={`service-item group flex gap-4 p-4 pb-1 transition-all duration-300 hover:scale-105 navitemup shadowop`}
                        >
                            <div
                                className={`flex-shrink-0 rounded-tl-[45%] rounded-[5%] group-hover:border-orange/50 bg-blue group-hover:bg-white group-hover:border-[2px] h-[90px] w-[90px] flex items-center justify-center smooth3`}
                            >
                                <Image
                                    src={service.icon || "/placeholder.svg"}
                                    className={`group-hover:filter-none smoot3 invert brightness-0 ${activeService === service.id ? "" : ""
                                        }`}
                                    height={39}
                                    width={50}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h3 className="bulletheading font-semibold mb-2 navitem cursor-default">{service.title}</h3>
                                <p className="parahraph text-[#818181] cursor-default">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
        
    )
}

