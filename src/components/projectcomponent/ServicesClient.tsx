/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useTransform, useScroll } from "framer-motion"
import { services } from "@/components/data/services"

export function ServicesClient() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    // console.log(isDragging);
    const [containerHeight, setContainerHeight] = useState(0)
    // console.log(containerHeight);

    useEffect(() => {
        if (containerRef.current) {
            setContainerHeight(containerRef.current.clientHeight - 100)
        }
    }, [])
    const { scrollYProgress } = useScroll({
        container: containerRef,
    })

    // Smooth spring animation for the scrollbar thumb
    // const springConfig = { damping: 25, stiffness: 100 }
    const y =   useTransform(scrollYProgress, [0, 1], [0, containerRef.current ? containerRef.current.clientHeight - 100 : 0])

    // Handle drag to scroll
    const handleDrag = (_: any, info: { delta: { y: number } }) => {
        if (containerRef.current) {
            containerRef.current.scrollTop +=
                (info.delta.y * containerRef.current.scrollHeight) / containerRef.current.clientHeight
        }
    }

    return (
        <div className="flex  items-start gap-4 lg:flex-row flex-col-reverse ">

            <div className="md:w-full  ">
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

            <div className="md:w-full relative overflow-hidden ">
                <div className="relative flex overflow-y-hidden  w-full">
                    
                    <div ref={containerRef} className="h-[450px]  pr-8 space-y-4 scrollbar-none overflow-x-hidden">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                data-id={service.id}
                                className="service-item group flex gap-4 p-4 pb-1 transition-all duration-300 hover:scale-105 navitemup shadowop"
                            >
                                <div className="flex-shrink-0 rounded-tl-[45%] rounded-[5%] group-hover:border-orange/50 bg-blue group-hover:bg-white group-hover:border-[2px] h-[90px] w-[90px] flex items-center justify-center smooth3">
                                    <Image
                                        src={service.icon || "/placeholder.svg"}
                                        className="group-hover:filter-none smoot3 invert brightness-0"
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

                    {/* Custom Scrollbar */}
                    <div className="absolute right-1 top-0 h-full rounded-full w-2 bg-orange ">
                        <motion.div
                            drag="y"
                            dragConstraints={{
                                top: 0,
                                bottom: containerRef.current ? containerRef.current.clientHeight - 100 : 0,
                            }}
                            onDragStart={() => setIsDragging(true)}
                            onDragEnd={() => setIsDragging(false)}
                            onDrag={handleDrag}
                            style={{ y }}
                            className="absolute w-full h-[50px] rounded-full cursor-pointer"
                        >
                            <div className="absolute -right-0.5 w-[180%] border border-orange h-full bg-[#fff] rounded-full" />
                        </motion.div>
                    </div>

                </div>
            </div>

        </div>

    )
}

