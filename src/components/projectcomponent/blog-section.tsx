"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { blogPosts, blogContent } from "@/components/data/blog-posts"
import { Card, CardContent } from "@/components/ui/card"

export function BlogSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length)
  }

  return (
    <section className="py-16">
      <div className="w-full lg:w-[95%] 2xl:w-[77%] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
          <div className="w-2/3">
            <h2 className="heading heading-calisto font-bold mb-2">
              {blogContent.title}
             <br />
              {blogContent.subtitle}
            </h2>
          </div>
          <p className="text-xl md:w-[45%] text-gray-600">{blogContent.description}</p>
        </div>

        <div className="flex justify-end mb-3 gap-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`rounded-full border-2 border-blue-600 h-10  w-10 text-blue flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-blue border-blue transition-colors ${
              currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === blogPosts.length - 3}
            className={`rounded-full border-2 border-blue-600 h-10  w-10 text-blue flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-blue border-blue transition-colors ${
              currentSlide === blogPosts.length - 3 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
          >
            {blogPosts.map((post, index) => {
              const isCenter = (index - currentSlide) % blogPosts.length === 1

              return (
                <div key={post.id} className="flex-none min-h-[435px]  !w-[363px] px-4 transition-all duration-500">
                  <div
                    className={`transform-gpu transition-all duration-500 ${
                      isCenter ? "" : ""
                    } perspective-1000 group`}
                  >
                    <Card
                      className={`relative h-[450px] overflow-hidden rounded-2xl transform-gpu transition-all duration-500 origin-top group-hover:[transform:rotateX(10deg)]`}
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <Image src={post.image || "/placeholder.svg"} alt="" fill className="object-cover" />
                        {/* Overlay */}
                        <div
                          className={`absolute inset-0 ${
                            isCenter ? "bg-gradient-to-br from-blue-600/90 to-blue-700/90" : "bg-black/50"
                          }`}
                        />
                      </div>
                      {/* Content */}
                      <CardContent className="relative !pb-0 h-full flex flex-col justify-end  text-white">
                        <div>
                          <div  className={`p-2 rounded-sm w-fit bg-blue-600 ${
                      isCenter ? "bg-orange text-white" : "bg-blue text-white"
                    } text-white hover:bg-blue-700`}>
                            Check My Strategy
                          </div>
                        </div>
                        <div className={`p-2 pb-4  ${
                      isCenter ? "bg-blue text-white" : "bg-white text-darkblue"
                    } rounded-sm items-center `}>
                          <p className="!text-[16px] font-medium line-clamp-3 mb-4">{post.title}</p>
                          <span className={`${
                      isCenter ? " text-white" : " text-orange"
                    }`}>{post.author}</span>
                          <span className="mx-2">-</span>
                          <span className={` ${
                      isCenter ? " text-white" : " text-slate-600"
                    }`}>{post.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style> */}
    </section>
  )
}

