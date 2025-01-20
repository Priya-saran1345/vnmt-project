import Link from "next/link"
import { Wallet, BarChart, Building, Cpu, Film, Stethoscope, type LucideIcon } from "lucide-react"
import { industries } from "@/components/data/industries"
import { Card, CardContent } from "@/components/ui/card"

const iconMap: Record<string, LucideIcon> = {
  Wallet,
  BarChart,
  Building,
  Cpu,
  Film,
  Stethoscope,
}

export function IndustriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full lg:w-[95%] 2xl:w-[77%]
 mx-auto px-4">
        <div className="text-center w-[30%] mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Industries</h2>
          <p className="text-gray-600">
            We build customized solutions that meet the unique demands of different industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3  mb-8">
          {industries.map((industry:any) => {
            const Icon = iconMap[industry.icon]
            return (
              <Card key={industry.id} className=" transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Click here to View More
          </Link>
        </div>
      </div>
    </section>
  )
}

