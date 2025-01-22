import Image from "next/image";

export function Partners() {
  return (
    <div className="bg-blue-600 bg-[url('/images/partner-banner.svg')] h-[396px] text-white overflow-hidden">
      <div className="w-full lg:w-[95%] 2xl:w-[77%] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className=" flex flex-col gap-2 mt-10 ">
            <h2 className="heading font-bold heading-calisto tracking-none leading-none">Our <br/> Partner</h2>
            <p className=" !text-[20px] max-w-md  ">We Help You to Make the Most <br /> of NetSuite & Celigo</p>
          </div>
          <div className="grid grid-cols-2 h-full gap-8">
            {/* First Box - Scroll Up */}
            <div className="h-[396px] bg-gradient-to-b from-blue to-[#82AEFF] animate-scroll-up">
              <div className="bg-white w-[328px] rounded-b-3xl border-orange border-[1px] border-t-0 p-6">
                <Image
                  src="/images/oracle.svg"
                  alt="Oracle NetSuite Partner"
                  width={80}
                  height={25}
                  className=""
                />
                <p className="text-black text-[16px] font-medium mt-4">NetSuite SDN Partner </p>
                <p className="text-black text-[16px] font-medium">(Service & Technology)</p>
              </div>
            </div>
            {/* Second Box - Scroll Down */}
            <div className="h-[396px] flex justify-start items-end bg-gradient-to-t from-blue to-[#82AEFF] animate-scroll-down">
              <div className="bg-white w-[328px] border-orange border-[1px] border-b-0 rounded-t-3xl p-6">
                <Image
                  src="/images/celigo.svg"
                  alt="Celigo Partner"
                  width={80}
                  height={25}
                  className=""
                />
                <p className="text-black text-[16px] mt-4">Celigo Integration Partner</p>
                <p className="text-black text-[16px]">(AI-Driven Automation)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
