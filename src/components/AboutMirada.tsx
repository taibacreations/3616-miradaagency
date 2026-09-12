import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const AboutMirada = () => {
  return (
    <section className='w-full bg-white overflow-hidden pt-10 lg:pt-22'>
     
      <div className='max-w-content z-10 mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row justify-around items-center gap-10 lg:gap-25'>

          <div className='w-full lg:max-w-[670px]'>
            <p className='font-gotham text-[16px] sm:text-[18px] text-black mb-3'>
              Over Mirada Intelligence
            </p>
            <h2 className='font-monument text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.1] text-[#012549] capitalize mb-5.5 max-w-[400px]'>
              Het gezicht <br /> achter Mirada
            </h2>
            <p className='font-gotham text-[16px] sm:text-[18px] text-black mb-5.5'>
              Achter Mirada Intelligence staat Virgil Ippel. Met meer dan 15 jaar diepgaande expertise in het leiden van complexe IT-omgevingen, systeemtransities en procesoptimalisaties, breng ik het beste van twee werelden samen naar de lokale ondernemer: hardcore IT-structuur en resultaatgerichte online marketing.
            </p>
            <p className='font-gotham text-[16px] sm:text-[18px] text-black mb-5'>
              Bij Mirada geloven we niet in ingewikkelde marketingtermen, wel in transparantie, korte lijnen en meetbaar resultaat in de regio. We introduceren nu tijdelijk exclusieve AI-pilotprojecten voor een geselecteerd aantal ambitieuze lokale bedrijven om de keiharde kracht van onze geautomatiseerde workflows te bewijzen.
              </p>

            <h3 className='font-gotham text-[16px] sm:text-[18px] text-[#012549] mb-3.5 font-bold'>
               Veelgestelde vragen: 
            </h3>
            

            <Accordion type="single" collapsible className="w-full flex flex-col gap-[15px] mb-8">

              <AccordionItem
                value="item-1"
                className="group rounded-xl bg-[#F5F9FC] px-5 sm:px-6 hover:bg-[#012549] data-[state=open]:bg-[#012549] transition-colors duration-300"
              >
                <AccordionTrigger className="py-[18px] font-gotham font-bold text-[15px] sm:text-[16px] text-black group-hover:text-white data-[state=open]:text-white hover:no-underline [&_svg]:text-black [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:text-white data-[state=open]:[&_svg]:text-white">
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
                <AccordionTrigger className="py-[18px] font-gotham font-bold text-[15px] sm:text-[16px] text-black group-hover:text-white data-[state=open]:text-white hover:no-underline [&_svg]:text-black [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:text-white data-[state=open]:[&_svg]:text-white">
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
                <AccordionTrigger className="py-[18px] font-gotham font-bold text-[15px] sm:text-[16px] text-black group-hover:text-white data-[state=open]:text-white hover:no-underline [&_svg]:text-black [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:text-white data-[state=open]:[&_svg]:text-white">
                  Moet ik al technisch onderlegd zijn?
                </AccordionTrigger>
                <AccordionContent className="text-[#D1D5DB] font-gotham text-[14px] sm:text-[15px]">
                  Nee, technische kennis is niet nodig.
                </AccordionContent>
              </AccordionItem>

              

            </Accordion>

            
          </div>

          <div className='w-full lg:w-auto'>
            <img
              src="/CEO.webp"
              alt=""
              className="rounded-2xl w-full h-auto lg:h-[700px] object-center lg:object-right xl:object-center xl:h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutMirada