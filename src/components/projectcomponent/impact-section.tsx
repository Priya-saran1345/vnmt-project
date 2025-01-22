"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { impactStats, impactContent } from "@/components/data/impact"


gsap.registerPlugin(ScrollTrigger);

export function ImpactSection() {
  useEffect(() => {
    // Left Section Animation
    gsap.fromTo(
      ".impact-left",
      { x: "-500%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 4, // Increased duration for smoother animation
        ease: "power4.out", // Smoother easing function
        delay: 2, // Delay the start by 2 seconds
        scrollTrigger: {
          trigger: ".impact-section",
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );

    // Right Section Animation
    gsap.fromTo(
      ".impact-right",
      { x: "500%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 4, // Increased duration for smoother animation
        ease: "power4.out", // Smoother easing function
        delay: 2, // Delay the start by 2 seconds
        scrollTrigger: {
          trigger: ".impact-section",
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );
  })

  return (
    <div className="">
      <div className="relative w-full pb-16 overflow-hidden">
        <div className="flex impact-section items-stretch">
          {/* Dark curved section */}
          <div className="impact-left w-[50%]  bg-[url('/images/impact-bg.svg')] flex justify-end items-center rounded-r-full relative z-10">
            <div className="p-12 pr-32 text-white ">
              <h2 className="heading font-bold heading-calisto mb-3">{impactContent?.title}</h2>
              <p
                className="text-xl text-gray-300 mb-6"
                dangerouslySetInnerHTML={{ __html: impactContent.subtitle }}
              ></p>
              <div className="flex gap-2 items-center">
                <div className="w-[42%] rounded-full h-[7px] bg-white border border-orange"></div>
                <div className="w-[10%] rounded-full h-[7px] bg-white border border-orange"></div>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="impact-right w-[65%] bg-[#EDF3FF] border-2 !py-20 border-r-0 border-darkblue h-[300px] rounded-l-full -ml-28 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="pl-40 space-y-8">
                {impactStats.map((stat) => (
                  <div key={stat.id} className="flex items-center gap-4">
                    <div className="text-4xl lg:text-[65px] font-bold bg-gradient-to-b from-lightblue to-darkblue py-2 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-blue font-bold text-lg">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-darkblue to-lightblue text-white py-6 overflow-hidden">
        <div
          className="flex whitespace-nowrap animate-scroll-loop"
          style={{
            animation: "scroll-loop 10s linear infinite",
          }}
        >
          <span className="text-center heading font-bold px-4">
            YOUR SUCCESS WITH OUR NETSUITE EXPERTISE | EMPOWER YOUR SUCCESS
          </span>
          <span className="text-center heading font-bold px-4">
            YOUR SUCCESS WITH OUR NETSUITE EXPERTISE | EMPOWER YOUR SUCCESS
          </span>
        </div>
      </div>
    </div>
  );
}
