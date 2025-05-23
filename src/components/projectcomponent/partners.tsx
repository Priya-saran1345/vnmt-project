import Image from "next/image";

export function Partners() {
  return (
    <div className="bg-blue-600 bg-[url('/images/bgpartner.svg')]  text-white overflow-hidden">
      <div className="w-full w-full max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-full xl:max-w-[1280px] 2xl:max-w-[1450px] px-4 md:px-6 lg:px-8 mx-auto
">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className=" flex flex-col gap-2 mt-10 ">
            <h2 className="heading font-bold heading-calisto tracking-none leading-none">Our <br/> Partner</h2>
            <p className="  max-w-md parahraph ">We Help You to Make the Most <br /> of NetSuite & Celigo</p>
          </div>
          <div className="grid grid-cols-2  h-full gap-8">
            {/* First Box - Scroll Up */}
            <div className="md:h-[396px]  bg-gradient-to-b from-blue to-[#82AEFF] animate-scroll-up">
              <div className="bg-white shadow-lg xl:w-[328px] rounded-b-3xl border-orange border-[1px] border-t-0 p-6 space-y-2">
                <Image
                  src="/images/oracle.svg"
                  alt="Oracle NetSuite Partner"
                  width={80}
                  height={25}
                  className=""
                />
                <div className=''>
                <p className="text-black text-[16px]  ">NetSuite SDN Partner </p>
                <p className="text-black text-[16px] ">(Service & Technology)</p></div>
                <Image
                  src="/images/oracle_net_dev.png"
                  alt="Oracle NetSuite Partner"
                  width={140}
                  height={25}
                  className="-ml-2"
                />
              </div>
            </div>
            {/* Second Box - Scroll Down */}
            <div className="md:h-[396px]  flex justify-start items-end bg-gradient-to-t from-blue to-[#82AEFF] animate-scroll-down rounded-t-3xl">
              <div className="bg-white shadow-lg xl:w-[328px] border-orange border-[1px] border-b-0 rounded-t-3xl p-6 space-y-2">
                <Image
                  src="/images/celigo.svg"
                  alt="Celigo Partner"
                  width={80}
                  height={25}
                  className=""
                />
                <div className=''>
                <p className="text-black text-[16px] ">Celigo Platinum Partner</p>
                <p className="text-black text-[16px]">(AI-Driven Automation)</p></div>
                <div className='flex gap-4'>
                <Image
                  src="/images/celigo_serv.png"
                  alt="Oracle NetSuite Partner"
                  width={50}
                  height={25}
                  className="-ml-2"
                />
                                <Image
                  src="/images/celigo_black (1).png"
                  alt="Oracle NetSuite Partner"
                  width={50}
                  height={25}
                  className="-ml-2"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
