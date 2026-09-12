import React from 'react'
import Button from './ui/Button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className='w-full bg-white relative overflow-hidden py-2 lg:py-3'>
      <img
        src="/faq-vect.svg"
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 hidden lg:block"
      />
      <div className='max-w-content z-10 mx-auto relative px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row justify-around items-center gap-10 lg:gap-25'>

          <div className='w-full lg:max-w-[670px]'>
            <h2 className='font-monument font-extrabold tracking-wide text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.1] text-[#012549] capitalize mb-4 max-w-[380px]'>
              Alles wat <br /> je wil weten
            </h2>
            <p className='font-gotham font-light text-[16px] sm:text-[18px] text-black mb-8'>
              Geen vage antwoorden. Gewoon eerlijk en to the point.
            </p>

            <Accordion type="single" collapsible className="w-full flex flex-col gap-[15px] mb-8">

              <AccordionItem
                value="item-1"
                className="group rounded-xl bg-[#F5F9FC] px-5 sm:px-6 hover:bg-[#012549] data-[state=open]:bg-[#012549] transition-colors duration-300"
              >
                <AccordionTrigger className="py-[18px] font-gotham font-bold text-[15px] sm:text-[16px] xl:text-[18px] text-black group-hover:text-white data-[state=open]:text-white hover:no-underline [&_svg]:text-black [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:text-white data-[state=open]:[&_svg]:text-white">
                  Wat is die gratis scan precies?
                </AccordionTrigger>
                <AccordionContent className="text-[#D1D5DB] font-gotham text-[14px] sm:text-[15px]">
                  Hier komt het antwoord op deze vraag.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="group  rounded-xl bg-[#F5F9FC] px-5 sm:px-6 hover:bg-[#012549] data-[state=open]:bg-[#012549] transition-colors duration-300"
              >
                <AccordionTrigger className="py-[18px] font-gotham font-bold text-[15px] sm:text-[16px] xl:text-[18px] text-black group-hover:text-white data-[state=open]:text-white hover:no-underline [&_svg]:text-black [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:text-white data-[state=open]:[&_svg]:text-white">
                  Ik heb al een website. Kan Mirada toch helpen?
                </AccordionTrigger>
                <AccordionContent className="text-[#D1D5DB] font-gotham text-[14px] sm:text-[15px]">
                  Ja, Mirada kan ook helpen met bestaande websites.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="group rounded-xl bg-[#F5F9FC] px-5 sm:px-6 hover:bg-[#012549] data-[state=open]:bg-[#012549] transition-colors duration-300"
              >
                <AccordionTrigger className="py-[18px] font-gotham font-bold text-[15px] sm:text-[16px] xl:text-[18px] text-black group-hover:text-white data-[state=open]:text-white hover:no-underline [&_svg]:text-black [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:text-white data-[state=open]:[&_svg]:text-white">
                  Moet ik al technisch onderlegd zijn?
                </AccordionTrigger>
                <AccordionContent className="text-[#D1D5DB] font-gotham text-[14px] sm:text-[15px]">
                  Nee, technische kennis is niet nodig.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="group  rounded-xl bg-[#F5F9FC] px-5 sm:px-6 hover:bg-[#012549] data-[state=open]:bg-[#012549] transition-colors duration-300"
              >
                <AccordionTrigger className="py-[18px] font-gotham font-bold text-[15px] sm:text-[16px] xl:text-[18px] text-black group-hover:text-white data-[state=open]:text-white hover:no-underline [&_svg]:text-black [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:text-white data-[state=open]:[&_svg]:text-white">
                  Hoe snel zie ik resultaten?
                </AccordionTrigger>
                <AccordionContent className="text-[#D1D5DB] font-gotham text-[14px] sm:text-[15px]">
                  Dat verschilt per project, meestal binnen enkele weken.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="group  rounded-xl bg-[#F5F9FC] px-5 sm:px-6 hover:bg-[#012549] data-[state=open]:bg-[#012549] transition-colors duration-300"
              >
                <AccordionTrigger className="py-[18px] font-gotham font-bold text-[15px] sm:text-[16px] xl:text-[18px] text-black group-hover:text-white data-[state=open]:text-white hover:no-underline [&_svg]:text-black [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:text-white data-[state=open]:[&_svg]:text-white">
                  Zit ik vast aan een lang contract?
                </AccordionTrigger>
                <AccordionContent className="text-[#D1D5DB] font-gotham text-[14px] sm:text-[15px]">
                  Nee, er is geen langdurig contract vereist.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="group rounded-xl bg-[#F5F9FC] px-5 sm:px-6 hover:bg-[#012549] data-[state=open]:bg-[#012549] transition-colors duration-300"
              >
                <AccordionTrigger className="py-[18px] font-gotham font-bold text-[15px] sm:text-[16px] xl:text-[18px] text-black group-hover:text-white data-[state=open]:text-white hover:no-underline [&_svg]:text-black [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:text-white data-[state=open]:[&_svg]:text-white">
                  Werken jullie alleen lokaal of ook nationaal?
                </AccordionTrigger>
                <AccordionContent className="text-[#D1D5DB] font-gotham text-[14px] sm:text-[15px]">
                  We werken zowel lokaal als landelijk.
                </AccordionContent>
              </AccordionItem>

            </Accordion>

            <p className='font-gotham font-light text-[16px] sm:text-[18px] text-black mb-4'>
              Staat jouw vraag er niet bij?
            </p>
            <Button href="#gratis-scan" variant="primary" className="lg:pl-[25px] lg:pr-[12px] lg:py-[13px]" icon>
              Stel je vraag direct
            </Button>
          </div>

          <div className='w-full lg:w-auto'>
            <img
              src="/faq-img.webp"
              alt=""
              className="rounded-2xl w-full h-auto lg:h-[700px] object-center lg:object-right xl:object-center xl:h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default FAQ