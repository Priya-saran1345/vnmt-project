import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faq = () => {
  return (
    <div className='w-full lg:w-[95%] 2xl:w-[77%] mx-auto'>
         <h1 className="text-4xl font-bold text-center mb-12">FAQs</h1>

<div className="grid md:grid-cols-2 gap-6 mb-16">
  <div className="space-y-4">
    <Accordion type="single" collapsible>
      {[1, 2, 3, 4].map((item) => (
        <AccordionItem key={item} value={`item-${item}`}>
          <AccordionTrigger className="text-left">Lorem ipsum is simply dummy text</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>

  <div className="space-y-4">
    <Accordion type="single" collapsible>
      {[5, 6, 7, 8].map((item) => (
        <AccordionItem key={item} value={`item-${item}`}>
          <AccordionTrigger className="text-left">Lorem ipsum is simply dummy text</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
</div>
    </div>
  )
}

export default faq