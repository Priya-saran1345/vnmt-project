
import { ServicesClient } from "./ServicesClient";

export function Services() {


  return (
    <section className="py-16">
      <div className="w-full lg:w-[95%] 2xl:w-[77%] mx-auto px-5">
        <div className="gap-12">
          <div className="flex justify-between w-[83%] items-end">
            <div >
              <h2 className="font-bold  heading-calisto heading">NetSuite Services</h2>
              <p className="font-medium parahraph mb-6 text-[#818181]">Your Trusted Partner for NetSuite Success</p>
            </div>
            <div className="flex justify-end mb-4">
              <button  className="text-blue border-2 border-blue px-4 py-1 rounded-[8px] font-semibold">
                View All
              </button>
            </div>
          </div>
          <ServicesClient />

          {/* <div className="flex  items-start ">
            <div className="md:w-1/3 ">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/service-girl.svg"
                  alt="NetSuite Services"
                  width={410}
                  height={410}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-orange-500" />
              <div
                ref={scrollContainerRef}
                className="h-[400px] overflow-y-auto pr-8 space-y-8 custom-scrollbar"
              >
                {services.map((service: {icon:string,description:string,title:string,id:number}) => (
                  <div
                    key={service.id}
                    data-id={service.id}
                    className={`service-item flex gap-4 p-4 transition-all duration-300`}
                  >
                    <div
                      className={`flex-shrink-0 rounded-tl-[60%] rounded-[5%] h-[90px] ${
                        activeService === service.id
                          ? "border-orange/50 border-[1px]"
                          : "bg-blue"
                      } w-[90px] flex items-center justify-center`}
                    >
                      <Image
                        src={service.icon || "/placeholder.svg"}
                        className={`${
                          activeService === service.id ? "" : "invert brightness-0"
                        }`}
                        height={39}
                        width={50}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="bulletheading font-semibold mb-2">{service.title}</h3>
                      <p className="parahraph">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}
