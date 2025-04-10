"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { caseStudies } from "@/components/data/case-studies"
import Button from "./button"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

export function CaseStudy() {
  const [isPaused, setIsPaused] = useState(false)

  // Initialize Embla carousel with autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true,
    },
    [Autoplay({ playOnInit: true, delay: 2000, stopOnInteraction: true })],
  )

  // Scroll functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Pause autoplay on hover
  useEffect(() => {
    if (!emblaApi) return

    if (isPaused) {
      emblaApi.plugins().autoplay.stop()
    } else {
      emblaApi.plugins().autoplay.play()
    }
  }, [emblaApi, isPaused])

  // Define the sizes for the three types of cards
  const getCardSize = (index: number) => {
    const sizes = [360, 320, 400] // Sizes: small, medium, large
    const groupSize = 3 // Group size (3 items in a group)

    // Determine the size based on the index's position within the group
    const positionInGroup = index % groupSize

    return sizes[positionInGroup] // Small for 0, Medium for 1, Large for 2
  }

  return (
    <section className="py-16 overflow-hidden">
      <div>
        {/* Header Section */}
        <div className="text-center mb-16 px-4">
          <h2 className="heading heading-calisto font-bold">Case Studies</h2>
          <p className="text-xl text-black parahraph">How We Make Transformative Impact Through Client Experiences</p>
        </div>

        {/* Upper Cards Scrolling Section */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            className="absolute left-5 lg:left-10 2xl:left-20 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-8 h-8 text-orange" />
          </button>

          <button
            className="absolute right-5 lg:right-10 2xl:right-20 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <ChevronRight className="w-8 h-8 text-orange" />
          </button>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div
              className="flex space-x-10 items-end"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {caseStudies.concat(caseStudies).map((study, index) => (
                <div
                  key={index}
                  className="flex-none rounded-t-3xl w-[320px]"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className="card-wrapper rounded-t-3xl overflow-hidden shadow-lg transform origin-bottom group relative">
                    <div
                      className="relative"
                      style={{ height: `${getCardSize(index)}px` }} // Adjust the height based on the card's position
                    >
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-500"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute bg-gradient-to-b h-full flex flex-col justify-center items-center from-transparent to-blue inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Arrow animation */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full border-2 border-white -translate-y-full group-hover:translate-y-16 transition-transform duration-500">
                          <ArrowUpRight className="w-16 h-16 text-white" />
                        </div>
                        {/* Text animation */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="font-semibold rounded-t-[3px] p-2 bg-lightorange text-[22px] text-white">
                            {study.title}
                          </h3>
                          <p className="text-gray-800 bg-white rounded-b-[3px] p-2 text-base line-clamp-3">
                            {study.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <Button content="View All"></Button>
          </div>
        </div>
      </div>
    </section>
  )
}
