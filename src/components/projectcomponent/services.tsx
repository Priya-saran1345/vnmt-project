
import { ServicesClient } from "./ServicesClient";
import Button from '@/components/projectcomponent/button'

export function Services() {


  return (
    <section className="pb-16">
      <div className="w-full lg:w-[95%] 2xl:w-[77%] mx-auto px-5">
        <div className="gap-12">
          <div className="flex justify-between w-full items-end">
            <div >
              <h2 className="font-bold  heading-calisto heading">NetSuite Services</h2>
              <p className="font-medium parahraph mb-6 text-[#818181]">Your Trusted Partner for NetSuite Success</p>
            </div>
            <div className="flex justify-end mb-4">
            <Button content= 'View All'></Button>
              {/* <button  className="text-blue border-2 border-blue px-4 py-1 rounded-[8px] font-semibold">
               
              </button> */}
            </div>
          </div>
          <ServicesClient />

        </div>
      </div>
    </section>
  );
}
