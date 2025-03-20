import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faq = () => {
  return (
    <div className=' mx-auto  ' id='faq'>
      <h1 className="
      heading font-bold text-center heading-calisto mb-4">FAQs</h1>
      <div className="grid w-full mx-auto lg:w-[85%] xl:w-[70%] 2xl:w-[55%] md:grid-cols-2 gap-0 md:gap-4 lg:gap-16 mb-4">
        <div className="space-y-4">
          <Accordion type="single" collapsible>
            {[1, 2, 3, 4].map((item) => (
              <AccordionItem key={item} value={`item-${item}`} className=' rounded-xl text-[18px] border-blue border-[1.8px] hover:bg-blue hover:text-white  group'>
                <AccordionTrigger className="text-left text-lg  group-hover:text-white font-bold">Lorem ipsum is simply dummy text?</AccordionTrigger>
                <AccordionContent className='group-hover:text-white  '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="space-y-4">
          <Accordion type="single" collapsible>
            {[5, 6, 7, 8].map((item) => (
              <AccordionItem key={item} value={`item-${item}`} className='rounded-xl text-[18px] border-blue border-[1.8px] hover:bg-blue hover:text-white  group'>
                <AccordionTrigger className="text-left text-lg  group-hover:text-white font-bold">Lorem ipsum is simply dummy text?</AccordionTrigger>
                <AccordionContent className='group-hover:text-white  '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="hidden   bg-[url('/images/footer-banner.svg')] -mt-20 max-w-[1246px]  items-end pb-12 md:flex justify-start px-12
     z-8 relative bg-no-repeat  mx-auto h-[350px] gap-12   rounded-3xl text-white py-4 ">
        <div className='w-[45%] '>
          <h2 className="heading font-bold heading-calisto ">Ready to Get Started ?</h2>
          <p className='paragraph'>
            Let&apos;s transform your business with our expert solutions.
            Contact us today to begin your journey toward succe</p>
        </div>
        <div className='mb-9 ml-4'>
          <button
            className='_button1 popup-effect'
          >
            Book Consultant Now
          </button>
        </div>
      </div>

    </div>
  )
}

export default faq