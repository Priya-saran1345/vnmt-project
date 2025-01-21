"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { blogPosts, blogContent } from "@/components/data/blog-posts"
import { Button } from "@/components/ui/button"
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
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {blogContent.title}
              <br />
              {blogContent.subtitle}
            </h2>
          </div>
          <p className="text-gray-600 md:max-w-md">{blogContent.description}</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {blogPosts.map((post: { id: number; title: string; image: string; date: string; author: string }) => (
                <Card key={post.id} className="flex-none w-full md:w-1/3 p-2">
                  <CardContent className="p-0">
                    <div className="relative h-48 mb-4">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="p-4">
                      <Button variant="secondary" className="mb-4">
                        Check My Strategy
                      </Button>
                      <p className="line-clamp-2 mb-2">{post.title}</p>
                      <div className="flex items-center text-sm text-orange-500">
                        <span>{post.author}</span>
                        <span className="mx-2">-</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

