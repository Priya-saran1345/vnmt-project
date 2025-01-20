import { Button } from "@/components/ui/button"
import { netsuiteContent } from "@/components/data/netsuite"

export function NetsuiteSection() {
  return (
    <div className="py-16 justify-end flex  ">
      <div className="w-full lg:w-[95%] 2xl:w-[87%]">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{netsuiteContent.title}</h2>
              <p className="text-xl text-gray-600">{netsuiteContent.subtitle}</p>
            </div>
            <div className="space-y-4">
              {netsuiteContent.description.map((text, index) => (
                <p key={index} className="text-gray-600">
                  {text}
                </p>
              ))}
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              {netsuiteContent.ctaText} →
            </Button>
          </div>
          <div className="bg-gray-200 rounded-l-3xl aspect-video" />
        </div>
      </div>
    </div>
  )
}

