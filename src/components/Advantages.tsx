import React from 'react'
import Button from './ui/Button'

const Advantages = () => {
  return (
    <section className='w-full bg-[#F5F9FC] lg:min-h-[70vh] pt-4.5 pb-12 xl:pb-0'>
      <div className='max-w-content mx-auto flex flex-col xl:flex-row xl:items-center px-6 sm:px-8'>

        {/* ---- group: text + hand image. Row at md & lg. Dissolves at xl (contents) so both become direct flex items alongside cards grid = original layout ---- */}
        <div className='flex flex-col md:flex-row md:items-center md:justify-between md:gap-16 xl:contents'>

          {/* ---------------------------------------text box------------------------------------------------- */}
          <div>
            <h2 className='font-monument pb-[15px] max-w-[500px] text-[28px] capitalize leading-9 tracking-wider text-[#012549] sm:text-[32px] sm:leading-10 lg:text-[40px] lg:leading-12'>
              Waarom Lokale Ondernemers Ons Kiezen
            </h2>
            <p className='pb-[25px] font-gotham text-[15px] lg:text-[18px] text-black max-w-[540px] leading-[24px]'>
              15+ jaar IT-expertise, vertaald naar concrete groei voor jouw bedrijf — zonder jargon, met meetbare resultaten.
            </p>
            {/* ------------------------------------------------4 lines------------------------------------ */}
            <div className='max-w-[500px] flex flex-col gap-3 pb-[20px]'>
              <div className='flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 17 17" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g clipPath="url(#clip0_54_460)">
                    <path d="M8.30203 15.2201C12.1229 15.2201 15.2203 12.1227 15.2203 8.30185C15.2203 4.48101 12.1229 1.38361 8.30203 1.38361C4.48119 1.38361 1.38379 4.48101 1.38379 8.30185C1.38379 12.1227 4.48119 15.2201 8.30203 15.2201Z" stroke="#012549" strokeWidth="1.38365" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M6.22656 8.30186L7.61021 9.68551L10.3775 6.91821" stroke="#012549" strokeWidth="1.38365" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_54_460">
                      <rect width="16.6038" height="16.6038" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p className='font-gotham text-[15px] sm:text-[18px] font-medium'>
                  Vast aanspreekpunt — geen doorverwijzingen
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 17 17" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g clipPath="url(#clip0_54_460)">
                    <path d="M8.30203 15.2201C12.1229 15.2201 15.2203 12.1227 15.2203 8.30185C15.2203 4.48101 12.1229 1.38361 8.30203 1.38361C4.48119 1.38361 1.38379 4.48101 1.38379 8.30185C1.38379 12.1227 4.48119 15.2201 8.30203 15.2201Z" stroke="#012549" strokeWidth="1.38365" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M6.22656 8.30186L7.61021 9.68551L10.3775 6.91821" stroke="#012549" strokeWidth="1.38365" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_54_460">
                      <rect width="16.6038" height="16.6038" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p className='font-gotham text-[15px] sm:text-[18px] font-medium'>
                  Transparante prijzen — geen verborgen kosten
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 17 17" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g clipPath="url(#clip0_54_460)">
                    <path d="M8.30203 15.2201C12.1229 15.2201 15.2203 12.1227 15.2203 8.30185C15.2203 4.48101 12.1229 1.38361 8.30203 1.38361C4.48119 1.38361 1.38379 4.48101 1.38379 8.30185C1.38379 12.1227 4.48119 15.2201 8.30203 15.2201Z" stroke="#012549" strokeWidth="1.38365" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M6.22656 8.30186L7.61021 9.68551L10.3775 6.91821" stroke="#012549" strokeWidth="1.38365" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_54_460">
                      <rect width="16.6038" height="16.6038" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p className='font-gotham text-[15px] sm:text-[18px] font-medium'>
                  Korte lijnen — directe toegang tot expertise
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 17 17" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g clipPath="url(#clip0_54_460)">
                    <path d="M8.30203 15.2201C12.1229 15.2201 15.2203 12.1227 15.2203 8.30185C15.2203 4.48101 12.1229 1.38361 8.30203 1.38361C4.48119 1.38361 1.38379 4.48101 1.38379 8.30185C1.38379 12.1227 4.48119 15.2201 8.30203 15.2201Z" stroke="#012549" strokeWidth="1.38365" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M6.22656 8.30186L7.61021 9.68551L10.3775 6.91821" stroke="#012549" strokeWidth="1.38365" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_54_460">
                      <rect width="16.6038" height="16.6038" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p className='font-gotham text-[15px] sm:text-[18px] font-medium'>
                  Flexibele contracten — schaalbaar met je groei
                </p>
              </div>
            </div>

            {/* -----------------------------------------------button---------------------------------------------- */}
            <Button href="#gratis-scan" variant="primary" className="lg:pl-[25px] lg:pr-[12px] lg:py-[13px] " icon>
                Ontdek Jouw Lead-Lekken — Gratis Scan
            </Button>

            {/* --------------------------------------------------one line----------------------------------------- */}
              <p className='font-gotham text-[15px] lg:text-[18px] text-black max-w-[540px] pt-[20px]'>
                Geen verplichtingen · Resultaat binnen 24 uur
              </p>
          </div>

          {/* -------------------------------------------------------hand image------------------------------------------------- */}
          <div className="flex justify-center md:block md:shrink-0 md:mt-20 xl:mt-0">
            <img
              src="hand.webp"
              alt=""
              className="w-full max-w-[220px] md:max-w-[250px] xl:max-w-none object-contain"
            />
          </div>
        </div>

        {/* -----------------------------------------------3 box grid---------------------------------------------- */}
        <div className='grid grid-cols-1 gap-4 sm:gap-6 md:gap-[52px] px-3.5 -mt-10 sm:-mt-14 md:-mt-1 lg:-mt-5 xl:mt-0 xl:-translate-y-5'>
            {/* ---------------------card 1---------------------- */}
            <div className='flex min-h-[90px] sm:min-h-[100px] md:min-h-0 gap-4 md:gap-6 bg-white shadow-md border-accent border-l-[5px] rounded-2xl px-4 py-4 md:px-5 md:py-6 items-center'>
                <img src="/b1.svg" alt="" className="w-10 md:w-auto shrink-0" />
                <div className='xl:max-w-[350px]'>
                  <h3 className='font-gotham font-bold text-[16px] lg:text-[20px] text-[#0A192F] pb-[8px]'>
                      Snelle Implementatie
                  </h3>
                  <p className='font-gotham text-[13px] lg:text-[18px] text-black leading-[20px] lg:leading-[22px]'>
                      Websites live in 2–4 weken, AI-workflows operationeel binnen 1–2 weken — geen maanden wachten.
                  </p>
                </div>
            </div>
            {/* --------------------------card 2--------------------- */}
            <div className='flex min-h-[90px] sm:min-h-[100px] md:min-h-0 gap-4 md:gap-6 bg-[#012549] rounded-2xl px-4 py-4 md:px-5 md:py-6 items-center md:translate-x-[35px]'>
                <img src="/b2.svg" alt="" className="w-10 md:w-auto shrink-0" />
                <div className='xl:max-w-[350px]'>
                  <h3 className='font-gotham font-bold text-[16px] lg:text-[20px] text-white pb-[8px]'>
                      Technisch Waterdicht
                  </h3>
                  <p className='font-gotham text-[13px] lg:text-[18px] text-white leading-[20px] lg:leading-[22px]'>
                      15+ jaar ervaring in complexe IT-omgevingen — je systemen draaien stabiel, veilig en schaalbaar.
                  </p>
                </div>
            </div>
            {/* -----------------------card 3-------------------- */}
            <div className='flex min-h-[90px] sm:min-h-[100px] md:min-h-0 gap-4 md:gap-6 bg-white shadow-md border-accent border-l-[5px] rounded-2xl px-4 py-4 md:px-5 md:py-6 items-center'>
                <img src="/b3.svg" alt="" className="w-10 md:w-auto shrink-0" />
                <div className='xl:max-w-[350px]'>
                  <h3 className='font-gotham font-bold text-[16px] lg:text-[20px] text-[#0A192F] pb-[8px]'>
                      Meetbare Resultaten
                  </h3>
                  <p className='font-gotham text-[13px] lg:text-[18px] text-black leading-[20px] lg:leading-[22px]'>
                      Transparante tracking en rapportages in begrijpelijk Nederlands — je weet precies wat je investering oplevert.
                  </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages