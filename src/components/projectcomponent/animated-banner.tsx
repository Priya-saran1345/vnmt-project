/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useMousePosition } from "@/components/projectcomponent/use-mouse-position";

interface BannerItem {
  id: number;
  title: string;
  x: number;
  y: number;
  image: string;
}

const items: BannerItem[] = [
  { id: 1, title: "Consulting", x: -40, y: 20, image: "/images/icon1.png" },
  { id: 2, title: "E-Commerce", x: 120, y: 30, image: "/images/icon2.png" },
  { id: 3, title: "Integration", x: 120, y: 80, image: "/images/icon3.png" },
  { id: 4, title: "Implementation", x: -150, y: -10, image: "/images/icon4.png" },
  { id: 5, title: "Optimisation", x: -40, y: 50, image: "/images/icon5.png" },
];

export function AnimatedBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mousePosition = useMousePosition();
useEffect(() => {  gsap.set(itemsRef.current, { opacity: 0, scale: 0, y: 50 }); // Ensures elements are off-screen initially
},[])
  useEffect(() => {
    if (!containerRef.current) return;

    // Set the initial state: invisible and scaled down

    // Scatter animation after 2 seconds, combined with position changes
    gsap.to(itemsRef.current, {
      opacity: 1,
      scale: 1,
        // Bring elements into view
      x: (i) => items[i].x,
      y: (i) => items[i].y,
      duration: 0.5,
      stagger: 0.2,  // Keep stagger to add slight delay between items
      ease: "expo.inOut",
      delay: 0,
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current || !mousePosition.x || !mousePosition.y) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = mousePosition.x - centerX;
    const mouseY = mousePosition.y - centerY;

    itemsRef.current.forEach((item, index) => {
      if (!item) return;

      gsap.to(item, {
        x: items[index].x + mouseX * 0.05,
        y: items[index].y + mouseY * 0.05,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  }, [mousePosition]);

  return (
    <div ref={containerRef} className="relative flex flex-col py-6 items-center h-[500px] w-[800px] overflow-hidden z-30">
      {items.map((item, index) => (
        <div
          key={item.id}
          ref={(el: any) => (itemsRef.current[index] = el)}
          className="opacity-0 flex items-center  w-fit gap-2 hover:bg-orange hover:text-white 
          duration-300 text-[18px] rounded-full bg-white text-orange font-bold px-4 py-1 shadow-lg"
        >
          <img className="h-12 w-12 border-orange border-2 rounded-full" src={item.image} alt={item.title} />
          <span className="text-md font-bold">{item.title}</span>
        </div>
      ))}
    </div>
  );
}
