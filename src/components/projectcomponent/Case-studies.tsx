
'use client'
import Image from "next/image";
import { caseStudies } from "@/components/data/case-studies";

export function CaseStudy() {
  return (
    <section className="py-16 overflow-hidden">
      <div>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-xl text-gray-600">How We Make transformative Impact Through Client Experiences</p>
        </div>
        <div className="relative">
          <div className="infinite-scroll flex gap-6 items-end">
            {caseStudies.concat(caseStudies).map((study, index) => (
              <div key={index} className="flex-none rounded-t-3xl w-[280px]">
                <div className="rounded-t-3xl bg-blue-300 overflow-hidden shadow-lg transform origin-bottom">
                  <div className="relative h-[250px]">
                    <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{study.title}</h3>
                    <p className="text-gray-600 mt-2">{study.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-600 text-white py-8">
          <p className="text-center text-2xl font-bold">
            YOUR SUCCESS WITH OUR NETSUITE EXPERTISE | EMPOWER YOUR SUCCESS
          </p>
        </div>
      </div>

      <style jsx>{`
        .infinite-scroll {
          display: flex;
          animation: scroll-infinite 70s linear infinite;
          width: max-content; /* Allows scrolling of long content */
        }
        @keyframes scroll-infinite {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
