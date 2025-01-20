import Image from "next/image"
import { integrationPlatforms, integrationContent } from "@/components/data/integration"

export function IntegrationSection() {
  return (
    <section className="bg-blue-600 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(48)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-white rounded-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {integrationContent.title}
            <br />
            <span className="text-blue-100">{integrationContent.subtitle}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-blue-100">{integrationContent.description}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Dotted Line */}
          <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-blue-400 -translate-y-1/2" />

          {/* Platform Icons */}
          <div className="flex justify-between items-center relative z-10">
            {integrationPlatforms.map((platform) => (
              <div
                key={platform.id}
                className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform"
              >
                <Image
                  src={platform.logo || "/placeholder.svg"}
                  alt={platform.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

