import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { navigationItems, contactInfo } from "@/components/data/navigation"
import { Play } from "lucide-react"
import { FaPlay } from "react-icons/fa"

export function Hero() {
  return (
    <div className="  text-white pt-8 pb-16 relative overflow-hidden">
      <div
        className="w-full flex flex-col justify-between lg:w-[95%] 2xl:w-[77%] mx-auto    bg-[url('/images/banner.svg')] min-h-[68vh] bg-no-repeat h-full   pt-4"
      >
        <div className="px-7">
     
        <div className=" bg-white w-[80%] rounded-full text-black
 px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.svg"
                alt="VNMT Logo"
                width={140}
                height={35}
                className=""
              />
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navigationItems.map((item) => (
                <Link key={item.id} href={item.href} className="text-sm font-medium hover:text-blue-200">
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button variant="outline" size="sm" className="text-white border-white hover:bg-blue-700">
              Menu
            </Button>
          </div>
        </div>
        <div className="max-w-2xl mt-20 mx-20 relative z-10 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Operational
            <br />
            Excellence
            <br />
            with Ease
          </h1>
        </div>
             
        </div>
        <div className="flex mr-8 justify-between items-center w-full ">
          <div className="flex gap-[80px]">

            <Button variant="outline" className="text-white w-[90%] text-[30px] flex justify-around font-semibold mt-3 h-[90px] rounded-3xl  bg-[#FF8352] border-white hover:bg-blue-700">
              <div className="bg-white flex justify-center items-center p-5 rounded-full h-[70px] w-[70px]">

              <FaPlay className="mr-2 text-[#FF8352] text-[44px] " />
              </div>
               How It <br/> Work's
            </Button>
          
          <p className="text-blue-100 text-[18px] mb-8 max-w-xl">
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with Aldus PageMaker.
          </p>
          </div>
            <Button variant="secondary" className="mr-16 border-[#FF8352] border">FREE CONSULTATION</Button>
        </div>
      </div>
      {/* Decorative circles */}

    </div>
  )
}

