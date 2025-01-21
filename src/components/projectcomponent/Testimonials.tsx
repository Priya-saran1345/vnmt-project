"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { testimonials } from "@/components/data/testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16">
      <div className="w-[75%]  mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-xl text-gray-600">Hear What Our Clients Say</p>
        </div>

        <div className="relative  mx-auto">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10"
            onClick={prevSlide}
          >
            ←
          </Button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${(currentSlide + 1) * 33.33}%)`,
              }}
            >
              {testimonials.map((testimonial: {liked:boolean,text:string,rating:number,avatar:string,role:string,author:string,id:number}, index: number) => {
                const isCenter = index === currentSlide;
                // const isNext = index === (currentSlide + 1) % testimonials.length;
                // const isPrev =
                //   index === (currentSlide - 1 + testimonials.length) % testimonials.length;

                const scaleClass = isCenter ? "scale-110" : "scale-90";
                const blurClass = isCenter ? "blur-none" : "blur-sm";

                return (
                  <Card
                    key={testimonial.id}
                    className={`flex-none w-1/3 transition-transform duration-300 ease-in-out ${scaleClass} ${blurClass}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-2xl ${
                              i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-lg mb-6">{testimonial.text}</p>
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
                            <p className="text-sm text-gray-600">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <Heart
                          className={`w-6 h-6 ${
                            testimonial.liked
                              ? "fill-red-500 text-red-500"
                              : "text-gray-300"
                          }`}
                        />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10"
            onClick={nextSlide}
          >
            →
          </Button>
        </div>
      </div>
    </section>
  );
}
