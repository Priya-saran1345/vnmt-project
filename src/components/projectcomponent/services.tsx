
import { ServicesClient } from "./ServicesClient";
import Button from '@/components/projectcomponent/button'

export function Services() {


  return (
    <section className="py-16">
      <div className="w-full max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-full xl:max-w-[1280px] 2xl:max-w-[1450px] px-4 md:px-6 lg:px-8 mx-auto
">
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
