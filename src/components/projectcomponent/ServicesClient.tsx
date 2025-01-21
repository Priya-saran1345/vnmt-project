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
        <div className="flex  items-start ">
            <div className="md:w-1/3 ">
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
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-orange-500" />
                <div
                    ref={scrollContainerRef}
                    className="h-[400px] overflow-y-auto pr-8 space-y-8 custom-scrollbar"
                >
                    {services.map((service: { icon: string, description: string, title: string, id: number }) => (
                        <div
                            key={service.id}
                            data-id={service.id}
                            className={`service-item flex gap-4 p-4 transition-all duration-300`}
                        >
                            <div
                                className={`flex-shrink-0 rounded-tl-[60%] rounded-[5%] h-[90px] ${activeService === service.id
                                        ? "border-orange/50 border-[1px]"
                                        : "bg-blue"
                                    } w-[90px] flex items-center justify-center`}
                            >
                                <Image
                                    src={service.icon || "/placeholder.svg"}
                                    className={`${activeService === service.id ? "" : "invert brightness-0"
                                        }`}
                                    height={39}
                                    width={50}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h3 className="bulletheading font-semibold mb-2">{service.title}</h3>
                                <p className="parahraph">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
        
    )
}

