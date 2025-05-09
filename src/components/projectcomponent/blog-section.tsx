/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { blogContent } from "@/components/data/blog-posts";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Button from "./button";
import { BASE_URL } from "@/utils/api";

export function BlogSection({blogPosts}:any) {
  // console.log(blogPosts);
  
  // Create a reference to the slider
  const sliderRef = useRef<Slider>(null)
  
  // Slick settings for autoplay, infinite scroll, and navigation
  const slickSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, // Speed of autoplay (3 seconds)
    speed: 500, // Transition speed
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1795,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }
  // Handle previous slide action
  const prevSlide = () => {
    sliderRef.current?.slickPrev()
  }

  // Handle next slide action
  const nextSlide = () => {
    sliderRef.current?.slickNext()
  }

  return (
    <section className="py-16">
      <div className="w-full max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-full  xl:max-w-[1280px] 2xl:max-w-[1450px] px-4 md:px-6 lg:px-8 mx-auto
">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
          <div className="w-2/3">
            <h2 className="heading heading-calisto font-bold mb-2 leading-tight">
              {blogContent.title}
              <br />
              {blogContent.subtitle}
            </h2>
          </div>
          <p className="text-xl md:w-[45%] text-black parahraph">{blogContent.description}</p>
        </div>

        <div className="  left-0 right-0 hidden md:flex justify-end gap-4 px-4 transform -translate-y-1/2 z-10">
          <button
            onClick={prevSlide}
            className="rounded-full border-2 border-blue h-10
             w-10  flex items-center justify-center text-blue hover:bg-blue hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="rounded-full border-2 border-blue h-10 w-10 text-blue flex items-center justify-center text-blue-600 hover:bg-blue hover:text-white transition-colors"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
          <Button content='View All'></Button>
        </div>
        {/* Carousel container with React Slick */}

        <div className="relative w-full overflow-hidden">
          <Slider ref={sliderRef} {...slickSettings}>
            {blogPosts?.map((post:any, index:any) => {
              return (
                <div key={index} className="flex-none border-orange div-container group min-h-[435px] !w-[363px] px-4 transition-all duration-500">
                  <div className="upper-half"></div>
                  <div className="transform-gpu transition-all duration-500 perspective-1000 group"> 
                    <Card
                      className="relative h-[412px] overflow-hidden rounded-2xl transform-gpu transition-all duration-500   "
                    >
                      {/* Background Image */}
                      {/* <div className="absolute inset-0">
                        <Image src={post.image || "/placeholder.svg"} alt="" fill className="object-cover" />
                        
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-700/90" />
                      </div> */}
                      {/* Content */}
                      <CardContent className="relative !pb-0 h-full flex flex-col justify-end text-white">
                        <div>
                          <div className="p-2 group-hover:bg-orange smooth3 bg-blue rounded-sm w-fit bg-blue-600 text-white hover:bg-blue-700 font-semibold text-sm rounded-t-lg">
                            Check Fly Strategy
                          </div>
                        </div>
                        <div className="p-2 pb-4 text-black bg-white px-4 smooth3 group-hover:bg-darkblue group-hover:text-white rounded-sm items-center">
                          <p className="!text-[16px] font-semibold paragraph line-clamp-3 text-base  mb-4">{post?.title}</p>
                          <div className="flex items-center gap-3">
                            <Image
                              src={`${BASE_URL}${post?.author_avatar}` || "/placeholder.svg"}
                              alt={post?.author_name}
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                            <div>
                              <p className="font-semibold group-hover:text-white text-orange">{post.author_name}</p>
                              <p className="text-sm group-hover:text-white text-black">{new Date(post.published_date).toLocaleDateString()}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>

        {/* Left and Right Buttons */}

      </div>
    </section>
  )
}
