import Image from "next/image"
import { partners } from "@/components/data/partners"
import { Button } from "@/components/ui/button"

export function TruestedPartner() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Trusted by Industry Leaders Worldwide</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
          {partners.map((partner:{logo:string,name:string,id:number}) => (
            <div key={partner.id} className="bg-white/10 p-4 rounded-lg flex items-center justify-center">
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
        <div className="text-center">
          <Button variant="secondary">View All</Button>
        </div>
      </div>
    </section>
  )
}

