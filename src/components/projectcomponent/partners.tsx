import Image from "next/image"

export function Partners() {
  return (
    <div className="bg-blue-600 bg-[url('/images/partner-banner.svg')] h-[396px] text-white ">
      <div className="w-full lg:w-[95%] 2xl:w-[77%] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h2 className="heading font-bold">Our <br/> Partner</h2>
            <p className=" text-[18px] max-w-md ">We Help You to Make the Most <br /> of NetSuite & Celigo</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white h-full p-6 rounded-lg">
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
    </div>
  )
}

