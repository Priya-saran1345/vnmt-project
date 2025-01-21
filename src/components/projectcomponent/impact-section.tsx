// import Image from "next/image"
import { impactStats, impactContent } from "@/components/data/impact"

export function ImpactSection() {
  return (
    <div>

   
    <div className="relative w-full py-16 overflow-hidden">
      <div className="flex items-stretch">
        {/* Dark curved section */}
        <div className="w-[55%] bg-gray-900 rounded-r-full relative z-10">
          <div className="p-12 lg:p-16 text-white max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">{impactContent.title}</h2>
            <p className="text-xl text-gray-300 mb-6">{impactContent.subtitle}</p>
            <div className="relative  rounded-full overflow-hidden">
              {/* <Image
                src={impactContent?.image || "/placeholder.svg?height=400&width=600"}
                alt="Impact"
                fill
                className="object-cover"
                priority
              /> */}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="w-[60%] bg-blue-50 rounded-l-full -ml-20 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="pl-32 py-10  space-y-8">
              {impactStats.map((stat) => (
                <div key={stat.id} className="flex items-center gap-4">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-gray-600 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    
 <div className="bg-blue-600 text-white py-10">
        <p className="text-center text-xl font-bold px-4">
          YOUR SUCCESS WITH OUR NETSUITE EXPERTISE | EMPOWER YOUR SUCCESS
        </p>
      </div>
       </div>
  )
}


