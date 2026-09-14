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
            <h2 className='font-monument font-extrabold tracking-wide text-[20px] md:text-[25px] lg:text-[30px] xl:text-[40px] leading-[1.1] text-[#012549] capitalize mb-4 max-w-[380px]'>
              Alles wat <br /> je wil weten
            </h2>
            <p className='font-gotham font-light text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-black mb-8'>
              Geen vage antwoorden. Gewoon eerlijk en to the point.
            </p>

            <Accordion type="single" collapsible className="w-full flex flex-col gap-[15px] mb-8">

              <AccordionItem
                value="item-1"
                className="group rounded-xl bg-[#F5F9FC] px-5 sm:px-6 hover:bg-[#012549] data-[state=open]:bg-[#012549] transition-colors duration-300"
              >
                <AccordionTrigger className="py-[18px] font-gotham font-bold text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-black group-hover:text-white data-[state=open]:text-white hover:no-underline [&_svg]:text-black [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:text-white data-[state=open]:[&_svg]:text-white">
                  Wat is die gratis scan precies?
                </AccordionTrigger>
                <AccordionContent className="text-[#D1D5DB] font-gotham text-[11px] md:text-[13px] lg:text-[15px] xl:text-[16px]">
                  We analyseren jouw huidige online aanwezigheid: waar verlies je potentiële klanten? Denk aan tracking-fouten, trage laadtijden, ontbrekende pixels, of campagnes die niet optimaal draaien. Je krijgt binnen 24 uur een concreet rapport — zonder verplichtingen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="group  rounded-xl bg-[#F5F9FC] px-5 sm:px-6 hover:bg-[#012549] data-[state=open]:bg-[#012549] transition-colors duration-300"
              >
                <AccordionTrigger className="py-[18px] font-gotham font-bold text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-black group-hover:text-white data-[state=open]:text-white hover:no-underline [&_svg]:text-black [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:text-white data-[state=open]:[&_svg]:text-white">
                  Ik heb al een website. Kan Mirada toch helpen?
                </AccordionTrigger>
                <AccordionContent className="text-[#D1D5DB] font-gotham text-[11px] md:text-[13px] lg:text-[15px] xl:text-[16px]">
                  Absoluut. We werken ook met bestaande websites. We kunnen je huidige site optimaliseren, er automatiseringen op aansluiten, of gerichte advertenties inzetten om meer bezoekers aan te trekken. We starten altijd met de scan om te zien wat de grootste kansen zijn.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="group rounded-xl bg-[#F5F9FC] px-5 sm:px-6 hover:bg-[#012549] data-[state=open]:bg-[#012549] transition-colors duration-300"
              >
                <AccordionTrigger className="py-[18px] font-gotham font-bold text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-black group-hover:text-white data-[state=open]:text-white hover:no-underline [&_svg]:text-black [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:text-white data-[state=open]:[&_svg]:text-white">
                  Moet ik al technisch onderlegd zijn?
                </AccordionTrigger>
                <AccordionContent className="text-[#D1D5DB] font-gotham text-[11px] md:text-[13px] lg:text-[15px] xl:text-[16px]">
                  Nee, helemaal niet. Wij regelen alles technisch. Jij hoeft alleen te vertellen wat je wil bereiken — wij zorgen dat het werkt. We leggen alles uit in gewone taal, zonder jargon.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="group  rounded-xl bg-[#F5F9FC] px-5 sm:px-6 hover:bg-[#012549] data-[state=open]:bg-[#012549] transition-colors duration-300"
              >
                <AccordionTrigger className="py-[18px] font-gotham font-bold text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-black group-hover:text-white data-[state=open]:text-white hover:no-underline [&_svg]:text-black [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:text-white data-[state=open]:[&_svg]:text-white">
                  Hoe snel zie ik resultaten?
                </AccordionTrigger>
                <AccordionContent className="text-[#D1D5DB] font-gotham text-[11px] md:text-[13px] lg:text-[15px] xl:text-[16px]">
                  Dat verschilt per dienst. Een website is live in 2–4 weken. Automatiseringen draaien vaak binnen 1–2 weken. Bij advertenties zie je doorgaans de eerste leads binnen de eerste maand. We stellen altijd een realistisch tijdpad op bij de start.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="group  rounded-xl bg-[#F5F9FC] px-5 sm:px-6 hover:bg-[#012549] data-[state=open]:bg-[#012549] transition-colors duration-300"
              >
                <AccordionTrigger className="py-[18px] font-gotham font-bold text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-black group-hover:text-white data-[state=open]:text-white hover:no-underline [&_svg]:text-black [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:text-white data-[state=open]:[&_svg]:text-white">
                  Zit ik vast aan een lang contract?
                </AccordionTrigger>
                <AccordionContent className="text-[#D1D5DB] font-gotham text-[11px] md:text-[13px] lg:text-[15px] xl:text-[16px]">
                  Nee. Maandelijkse diensten zijn per maand opzegbaar. Projecten (website, automatisering) worden met een vaste prijs afgesproken zonder langlopend contract. Flexibel en eerlijk — zo hoort het.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="group rounded-xl bg-[#F5F9FC] px-5 sm:px-6 hover:bg-[#012549] data-[state=open]:bg-[#012549] transition-colors duration-300"
              >
                <AccordionTrigger className="py-[18px] font-gotham font-bold text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-black group-hover:text-white data-[state=open]:text-white hover:no-underline [&_svg]:text-black [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:text-white data-[state=open]:[&_svg]:text-white">
                  Werken jullie alleen lokaal of ook nationaal?
                </AccordionTrigger>
                <AccordionContent className="text-[#D1D5DB] font-gotham text-[11px] md:text-[13px] lg:text-[15px] xl:text-[16px]">
                  Onze focus ligt op lokale en regionale ondernemers in Nederland. Maar we helpen ook bedrijven die nationaal actief zijn. Zolang je ambitieus bent en meetbaar wil groeien, kunnen we samenwerken.
                </AccordionContent>
              </AccordionItem>

            </Accordion>

            <p className='font-gotham font-light text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-black mb-4'>
              Staat jouw vraag er niet bij?
            </p>
            <Button href="#contact" variant="primary" className="lg:pl-[25px] lg:pr-[12px] lg:py-[13px]" icon>
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