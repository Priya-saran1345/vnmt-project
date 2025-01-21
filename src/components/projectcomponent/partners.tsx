import Image from "next/image"

export function Partners() {
  return (
    <section className="bg-blue-600 bg-[url('/images/partner-bg.svg')] h-[396px] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Partner</h2>
            <p className="text-blue-100 max-w-md">We Help You to Make the Most of NetSuite & Celigo</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <Image
                src="/placeholder.svg?height=60&width=200"
                alt="Oracle NetSuite Partner"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
              <p className="text-gray-600 text-sm mt-2">NetSuite SDN Partner (Service & Technology)</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Image
                src="/placeholder.svg?height=60&width=200"
                alt="Celigo Partner"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
              <p className="text-gray-600 text-sm mt-2">Celigo Integration Partner (AI-Driven Automation)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

