import Image from "next/image"
import { partners } from "@/components/data/partners"

export function TruestedPartner() {
  return (
<div className="bg-gradient-to-b from-darkblue to-lightblue  py-16">
<div className=" mx-auto px-4">
        <h2 className="heading font-bold text-center text-white mb-12">Trusted by Industry Leaders Worldwide</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
          {partners.map((partner:{logo:string,name:string,id:number}) => (
            <div key={partner.id} className=" p-4 rounded-lg flex items-center justify-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={40}
                className="object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        <div className="text-center w-fit mx-auto p-2 text-white rounded-lg bg-darkblue">
          <span >View All</span>
        </div>
      </div>
    </div>
  )
}

