
import { ServicesClient } from "./ServicesClient";
import Button from '@/components/projectcomponent/button'

export function Services() {


  return (
    <section className="py-16">
      <div className="w-full lg:w-[95%] 2xl:w-[77%] mx-auto px-5">
        <div className="gap-12">
          <div className="flex justify-between w-full md:items-end md:flex-row flex-col">
            <div >
              <h2 className="font-bold  heading-calisto heading leading-tight  ">NetSuite Services</h2>
              <p className="font-medium parahraph mb-6 text-[#818181]">Your Trusted Partner for NetSuite Success</p>
            </div> 
            <div className="flex justify-end mb-4 ">
            <Button content= 'View All' href="/netsuite-services"></Button>
            </div>
          </div>
          <ServicesClient />

        </div>
      </div>
    </section>
  );
}
