'use client'
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/components/data/case-studies";

export function CaseStudy() {
  const [isPaused, setIsPaused] = useState(false);

  // Define the sizes for the three types of cards
  const getCardSize = (index: number) => {
    const sizes = [320, 360, 400];  // Sizes: small, medium, large
    const groupSize = 3;  // Group size (3 items in a group)
    
    // Determine the size based on the index's position within the group
    const positionInGroup = index % groupSize;

    return sizes[positionInGroup]; // Small for 0, Medium for 1, Large for 2
  };

  return (
    <section className="py-16 overflow-hidden">
      <div>
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="heading heading-calisto font-bold">Case Studies</h2>
          <p className="text-xl text-gray-600">How We Make Transformative Impact Through Client Experiences</p>
        </div>
        
        {/* Upper Cards Scrolling Section */}
        <div className="relative">
          <div
            className={`cards-scroll flex gap-10 items-end`}
            style={{ animation: "cardsScroll 50s linear infinite", animationPlayState: isPaused ? 'paused' : 'running' }}
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
                    style={{ height: `${getCardSize(index)}px` }}  // Adjust the height based on the card's position
                  >
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute bg-gradient-to-b h-full flex flex-col justify-center items-center from-transparent to-lightblue inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Arrow animation */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full border-2 border-white -translate-y-full group-hover:translate-y-16 transition-transform duration-500">
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
        <div className="bg-gradient-to-b from-[#124DBA] to-lightblue text-white  overflow-hidden">
          <div className="text-scroll">
            <p className="text-center heading font-bold whitespace-nowrap">
              YOUR SUCCESS WITH OUR NETSUITE EXPERTISE | EMPOWER YOUR SUCCESS
            </p>
            <p className="text-center heading font-bold whitespace-nowrap">
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
