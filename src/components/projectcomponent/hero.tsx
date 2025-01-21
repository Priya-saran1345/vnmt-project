"use client"
import { useState } from "react"
// import { Play } from "lucide-react"
import { FaPlay } from "react-icons/fa"
import AnimatedHeader from "./animated-header"

export function Hero() {
  const [hoveredItem, setHoveredItem] = useState<string | null | number>(null)

  return (
    <div className="  text-white pt-8 pb-16 relative overflow-hidden">
      <div
        className=" h-[642px] w-full flex flex-col justify-between lg:w-[95%] 2xl:w-[77%] mx-auto bg-[url('/images/banner.svg')] min-h-[68vh] bg-no-repeat pt-4"
      >
        <div className="px-7  ">

          {/* <div className=" bg-white w-[80%] rounded-full text-black px-8 py-2 border border-orange ">



            <div className="flex items-center justify-between ">
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
                {navigationItems.map((item: { id: number; label: string; href: string }) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="relative font-semibold text-md text-black overflow-hidden group navitem"
                    onMouseEnter={() => setHoveredItem(item.id)}

                  >
                    <span
                      className={`inline-block transition-transform duration-200 ease-in-out ${hoveredItem === item.id ? "-translate-y-full" : "translate-y-0"
                        }`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`absolute left-0 inline-block transition-transform duration-200 ease-in-out ${hoveredItem === item.id ? "translate-y-0" : "translate-y-full"
                        }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="text-black text-[20px] border-white hover:bg-blue-700 cursor-pointer hover:text-orange smooth1">
                <FiMenu />
              </div>
            </div>

          </div> */}
           <AnimatedHeader />
{hoveredItem &&
<div 
                      onMouseLeave={() => setHoveredItem(null)}
  className='absolute bg-white text-black h-[30vh] w-1/2 '>

</div>
}
          


          <div className="max-w-2xl mt-20 mx-20 relative z-10  flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 heading-calisto">
              Operational
              <br />
              <span className="font-bold "> Excellence</span>
              <br />
              with Ease
            </h1>
            <div className='flex gap-2 items-center '>
              <div className='w-[23%] rounded-full h-[7px] bg-white border border-orange'></div>
              <div className='w-[4%] rounded-full h-[7px] bg-white border border-orange'></div>
            </div>
          </div>

        </div>
        <div className="flex mr-8 justify-between items-center w-full ">
          <div className="flex gap-[80px]">

            <button className="text-white w-[90%] text-[30px] flex items-center text-left justify-around font-semibold mt-3 h-[90px] rounded-3xl  bg-[#FF8352] border-white hover:bg-blue-700 leading-8 ">
              <div className="bg-white flex justify-center items-center p-5 rounded-full h-[70px] w-[70px]">

                <FaPlay className=" pl-1 animate text-[#FF8352] text-[44px] " />
              </div>
              How It <br /> Work&apos;s
            </button>

            <p className="text-blue-100 text-[18px] mb-8 max-w-xl">
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with Aldus PageMaker.
            </p>
          </div>
          <div className='relative '>
            <button className="mr-16 border-[#FF8352] border bg-white text-blue rounded-xl font-semibold text-lg px-4 py-1 relative">FREE CONSULTATION
            </button>
            <div className='absolute h-5 w-5 rounded-full -top-2 right-14 bg-orange opacity-50 '> </div>
            <div className='absolute h-2.5 w-2.5 rounded-full -top-[3px] right-[60px] bg-orange animate-pulse'> </div>
          </div>
        </div>
      </div>
      {/* Decorative circles */}

    </div>
  )
}

