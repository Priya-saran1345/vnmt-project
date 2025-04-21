/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { netsuiteContent } from "@/components/data/netsuite"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useTransform, useScroll } from "framer-motion"
import Button from '@/components/projectcomponent/button'
export function NetsuiteSection() {

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  // console.log(isDragging);

  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.clientHeight - 100);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // Smooth spring animation for the scrollbar thumb
  // const springConfig = { damping: 25, stiffness: 100 };
  const y = useTransform(scrollYProgress, [0, 1], [0, containerHeight])

  // Handle drag to scroll
  const handleDrag = (_: any, info: { delta: { y: number } }) => {
    if (containerRef.current) {
      containerRef.current.scrollTop +=
        (info.delta.y * containerRef.current.scrollHeight) / containerRef.current.clientHeight;
    }
  };

  return (
    <div className="pb-10 pt-7 justify-end flex bg_netsuite px-6">
      <div className="w-full lg:w-[95%] 2xl:w-[87%]">
        <div className="flex justify-between  gap-8 items-center md:flex-row flex-col">
          <div className="space-y-4 flex-1 ">
            <div>
              <h2 className="heading heading-calisto font-bold mb-2 leading-tight">{netsuiteContent.title}</h2>
              <p className="parahraph text-black font-medium" dangerouslySetInnerHTML={{ __html: netsuiteContent.subtitle }}></p>
            </div>

            <div className="relative flex overflow-hidden">
              {/* Scrollable Content */}
              <div
                ref={containerRef}
                className="space-y-4 my-8 h-[304px] overflow-y-auto scrollbar-none bg-[#FFF4F0] rounded-lg p-6"
              >
                {netsuiteContent.description.map((text, index) => (
                  <p key={index} className="text-black text-base">{text}</p>
                ))}
              </div>

              {/* Custom Scrollbar */}
              <div className="absolute right-1 top-8 h-[83%] rounded-full w-2 bg-orange">
                <motion.div
                  drag="y"
                  dragConstraints={{ top: 0, bottom: containerHeight }}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={() => setIsDragging(false)}
                  onDrag={handleDrag}
                  style={{ y }}
                  className="absolute w-full h-[50px] rounded-full cursor-pointer"
                >
                  <div className="absolute -right-0.5 w-[160%] border border-orange h-full bg-[#fff] rounded-full" />
                </motion.div>
              </div>
            </div>
                <div className='min-h-6  flex items-center'>
            <Button content='LEARN MORE'></Button></div>

          </div>

          <div className=" flex-1  rounded-l-[100px] " >
            <Image
              src={'/images/netsuite-side-img.svg'}

              height={495}
              width={600}
              className="w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

