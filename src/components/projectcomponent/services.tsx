import Image from "next/image"
import { Settings, NetworkIcon as Connection, Users } from "lucide-react"
import { services } from "@/components/data/services"
import { Button } from "@/components/ui/button"

const iconMap = {
  Settings,
  Connection,
  Users,
}

export function Services() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">NetSuite Services</h2>
            <p className="text-gray-600 mb-6">Your Trusted Partner for NetSuite Success</p>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="NetSuite Services"
                width={500}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="flex justify-end mb-4">
              <Button variant="ghost" className="text-blue-600">
                View All
              </Button>
            </div>
            <div className="space-y-6">
              {services.map((service:any) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap]
                return (
                  <div key={service.id} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

