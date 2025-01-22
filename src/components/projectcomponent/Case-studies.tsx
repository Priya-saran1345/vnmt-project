'use client'
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/components/data/case-studies";

export function CaseStudy() {
  const [isPaused, setIsPaused] = useState(false);

  const getHeightByIndex = (index: number) => {
    const baseHeight = 300;  // Starting height for the middle card
    const increment = 50;    // Amount to increase the height for the outer cards
    const groupSize = 3;     // Group size (pairs of 3 cards)
  
    // Calculate the group index (e.g., 0 for the first set of 3, 1 for the second set)
    const groupIndex = Math.floor(index / groupSize);
  
    // Calculate position within the group (0 for first, 1 for middle, 2 for last)
    const positionInGroup = index % groupSize;
  
    if (positionInGroup === 1) {
      // Middle card in the group (smaller height)
      return baseHeight;
    } else {
      // Outer cards (larger height)
      return baseHeight + increment * groupIndex;
    }
  };

  return (
    <section className="py-16 overflow-hidden">
      <div>
        {/* Header Section */}
        <div className="text-center ">
          <h2 className="heading heading-calisto font-bold ">Case Studies</h2>
          <p className="text-xl text-gray-600">How We Make transformative Impact Through Client Experiences</p>
        </div>
        {/* Upper Cards Scrolling Section */}
        <div className="relative -mt-28">
          <div
            className={`cards-scroll flex gap-6 items-end`}
            style={{ animation: "cardsScroll 50s linear infinite", animationPlayState: isPaused ? 'paused' : 'running' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {caseStudies.concat(caseStudies).map((study, index) => (
              <div
                key={index}
                className="flex-none rounded-t-3xl w-[280px]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="card-wrapper rounded-t-3xl overflow-hidden shadow-lg transform origin-bottom group relative">
                  <div
                    className="relative"
                    style={{ height: `${getHeightByIndex(index)}px` }}
                  >
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute bg-gradient-to-b h-full from-transparent to-lightblue inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Arrow animation */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full border-2 border-white -translate-y-full group-hover:translate-y-12 transition-transform duration-500">
                        <ArrowUpRight className="w-16 h-16 text-white" />
                      </div>
                      {/* Text animation */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-semibold rounded-t-[3px] p-2 bg-lightorange text-[22px] text-white">
                          {study.title}
                        </h3>
                        <p className="text-slate-600 bg-white rounded-b-[3px] p-2 text-sm line-clamp-3">
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
        {/* Bottom Scrolling Text Section */}
        <div className="bg-gradient-to-b from-[#124DBA] to-lightblue text-white py-1 overflow-hidden">
          <div className="text-scroll">
            <p className="text-center text-[54px] font-bold whitespace-nowrap">
              YOUR SUCCESS WITH OUR NETSUITE EXPERTISE | EMPOWER YOUR SUCCESS
            </p>
            <p className="text-center text-[54px] font-bold whitespace-nowrap">
              YOUR SUCCESS WITH OUR NETSUITE EXPERTISE | EMPOWER YOUR SUCCESS
            </p>
          </div>
        </div>
      </div>

      {/* Styles for Animations */}
      <style jsx>{`
        /* Upper Cards Scrolling Animation */
        .cards-scroll {
          display: flex;
          animation: cardsScroll 50s linear infinite;
        }
        @keyframes cardsScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        /* Bottom Text Scrolling Animation */
        .text-scroll {
          display: flex;
          flex-wrap: nowrap;
          animation: textScroll 20s linear infinite;
        }

        @keyframes textScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
