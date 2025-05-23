"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import AutoPlay from "embla-carousel-autoplay"
import { testimonials } from "@/components/data/testimonials"
import { Card, CardContent } from "@/components/ui/card"
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md"

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      containScroll: "trimSnaps",
    },
    [AutoPlay({ delay: 5000, stopOnInteraction: false })],
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev()
  }

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext()
  }

  return (
    <section className="pb-16 overflow-hidden">
      <div className="w-full max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-full  xl:max-w-[1280px] 2xl:max-w-[1450px] px-4 md:px-6 lg:px-8 mx-auto
">
        <div className="text-center mb-12">
          <h2 className="heading heading-calisto font-bold ">Testimonials</h2>
          <p className="text-xl text-black parahraph">Hear What Our Clients Say</p>
        </div>
        <div className="flex items-center">


          <div className=" left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block" onClick={scrollPrev}>
            <MdKeyboardDoubleArrowLeft className="text-3xl text-black  cursor-pointer hover:text-black" />
          </div>
          <div className="relative overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y h-[360px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] relative"
                >
                  <div
                    className="px-4 transition-all duration-300 ease-in-out"
                    style={{
                      transform: `scale(${selectedIndex === index ? 1.1 : 0.9})`,
                      filter: selectedIndex === index ? "blur(0px)" : "blur(2px)",
                      opacity: selectedIndex === index ? 1 : 0.7,
                    }}
                  >
                    <Card className="w-full transition-all duration-300 ease-in-out">
                      <CardContent className="p-6 bg-white rounded-xl shadow mt-4">
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-2xl ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <p className={`text-lg mb-2 font-semibold !text-[22px] ${selectedIndex === index ?"text-darkblue" :"text-textred"}  line-clamp-4`} >
                          {testimonial.title}
                        </p>
                        <p className="mb-6 line-clamp-4 text-[16px]">{testimonial.text}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Image
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.author}
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                            <div>
                              <p className="font-semibold">{testimonial.author}</p>
                              <p className="text-sm text-black">{testimonial.role}</p>
                            </div>
                          </div>
                          <Heart
                            className={`w-6 h-6 cursor-pointer transition-colors ${testimonial.liked
                                ? "fill-heartred text-heartred"
                                : "text-heartred fill-heartred hover:text-heartred"
                              }`}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block" onClick={scrollNext}>
            <MdKeyboardDoubleArrowRight className="text-3xl text-black cursor-pointer hover:text-black" />
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex ? "bg-orange w-6" : "bg-blue"
                }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
