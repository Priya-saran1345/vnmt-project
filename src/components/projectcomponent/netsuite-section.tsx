import { netsuiteContent } from "@/components/data/netsuite"
import Image from "next/image"

export function NetsuiteSection() {
  return (
    <div className="py-8 justify-end flex bg_netsuite ">
      <div className="w-full lg:w-[95%] 2xl:w-[87%]">
        <div className="flex justify-between  gap-8 items-center">
          <div className="space-y-6 w-1/3 ">
            <div>
              <h2 className="heading heading-calisto font-bold mb-2">{netsuiteContent.title}</h2>
              <p className="bulletheading text-gray-600" dangerouslySetInnerHTML={{ __html: netsuiteContent.subtitle }}></p>
            </div>
            <div className="space-y-4 my-8 h-[304px]  overflow-y-auto custom-scrollbar bg-[#FFF4F0] rounded-lg p-6 ">
              {netsuiteContent.description.map((text, index) => (
                <p key={index} className="text-gray-600 parahraph ">
                  {text}
                </p>
              ))}
            </div>
            <div className="bg-blue text-white border-darkblue ctabtn hover:scale-105 smooth3 p-2 px-4 rounded-full w-fit hover:bg-blue-700">
              {netsuiteContent.ctaText} →
            </div>
          </div>
          <div className=" w-[60%]  rounded-l-[100px] " >
            <Image
              src={'/images/netsuite-side-img.svg'}

              height={495}
              width={600}
              className="w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

