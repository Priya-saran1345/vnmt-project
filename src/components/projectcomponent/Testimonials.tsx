"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import { testimonials } from "@/components/data/testimonials"
import { Card, CardContent } from "@/components/ui/card"
import { MdKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < testimonials.length - 1) {
      setCurrentSlide((prev) => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1)
    }
  }

  return (
    <section className="pb-16">
      <div className="w-[75%] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading font-bold mb-4">Testimonials</h2>
          <p className="text-xl text-gray-600">Hear What Our Clients Say</p>
        </div>
        <div className="relative mx-auto">
          {currentSlide > 0 && (
            <div
             
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10"
              onClick={prevSlide}
            >
              <MdOutlineKeyboardDoubleArrowLeft className="text-[28px] text-slate-500" />

            </div>
          )}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 33.33}%)`,
              }}
            >
              {testimonials.map(
                (
                  testimonial: {
                    liked: boolean
                    text: string
                    title:string
                    rating: number
                    avatar: string
                    role: string
                    author: string
                    id: number
                  },
                  index: number,
                ) => {
                  const isCenter = index === currentSlide + 1
                  // const position = index - currentSlide - 1 // -1 for left, 0 for center, 1 for right
                  return (
                    <Card
                      key={testimonial.id}
                      className={`flex-none w-1/3 px-4 transition-all duration-300 ease-in-out ${
                        isCenter ? "scale-[1.1]  blur-none opacity-100" : "scale-[.9] blur-[2px] opacity-70"
                      }`}
                    >
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
                        <p className="text-lg mb-2 font-semibold !text-[22px] text-textred line-clamp-4">{testimonial.title}</p>
                        <p className=" mb-6 line-clamp-4 text-[16px]">{testimonial.text}</p>
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
                              <p className="text-sm text-gray-600">{testimonial.role}</p>
                            </div>
                          </div>
                          <Heart
                            className={`w-6 h-6 cursor-pointer transition-colors ${
                              testimonial.liked ? "fill-heartred text-heartred" : "text-heartred fill-heartred hover:text-heartred"
                            }`}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  )
                },
              )}
            </div>
          </div>

          {currentSlide < testimonials.length - 3 && (
            <div
             
              
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10"
              onClick={nextSlide}
            >
            <MdKeyboardDoubleArrowRight className="text-[28px] text-slate-500" />

            </div>
          )}
        </div>
      </div>
    </section>
  )
}

