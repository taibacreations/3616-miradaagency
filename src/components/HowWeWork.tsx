import React from 'react'

const HowWeWork = () => {
  return (
    <section className='w-full py-[60px] sm:py-[80px] lg:py-8'>

      <div className='max-w-[90%] sm:max-w-[640px] mx-auto xl:translate-y-10 2xl:translate-y-18 '>
        <h2 className='capitalize font-monument text-[26px] sm:text-[32px] xl:text-[clamp(28px,2.2vw,40px)] text-[#012549] text-center'>
          Hoe We Samenwerken
        </h2>
        <p className='capitalize font-gotham text-[15px] sm:text-[16px] xl:text-[clamp(14px,1vw,18px)] text-black text-center'>
          Geen verborgen stappen. Geen weken wachten op een antwoord. Vier stappen, helder en transparant.
        </p>
      </div>

      <div className='relative mt-8 xl:mt-[clamp(30px,3vw,60px)] rounded-3xl xl:rounded-none overflow-hidden bg-gradient-to-br from-[#04142B] via-[#0B3D6B] to-[#1478C9] xl:bg-none'>

        {/* Ratio spacer — locks container to image's real 1920:796 ratio on lg+ only */}
        <div className='hidden xl:block w-full pt-[41.4583%]' />

        {/* Background image — fills the locked-ratio container exactly, nothing to crop */}
        <img
          src="/work-bg.webp"
          alt=""
          className='hidden xl:block absolute inset-0 h-full object-center'
        />

        {/* Overlay — fluid padding/gap via clamp so it scales smoothly from 1024px to 2560px+ without breaking */}
        <div className='relative xl:absolute xl:inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-[clamp(24px,4vw,80px)] py-10 sm:py-14 lg:py-[clamp(24px,3vw,56px)]'>

          <div className='w-full max-w-content mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-[clamp(14px,1.6vw,30px)]'>

            <div className='relative bg-white rounded-3xl py-[30px] px-[20px] sm:py-[40px] sm:px-[25px] lg:py-[clamp(24px,2.6vw,50px)] lg:px-[clamp(18px,1.8vw,30px)]'>
              <span className='absolute z-50 top-[3px] right-[15px] sm:right-[20px] lg:right-[clamp(12px,1.2vw,20px)] font-gotham font-bold text-black/10 text-[40px] sm:text-[55px] lg:text-[clamp(38px,3.6vw,70px)]'>
                01
              </span>
              <h3 className='font-gotham font-bold max-w-[80%] sm:max-w-[200px] lg:max-w-[85%] text-[18px] sm:text-[20px] lg:text-[clamp(17px,1.25vw,24px)]'>
                Kennismaking (30 min, gratis)
              </h3>
              <p className='font-gotham text-[14px] sm:text-[16px] lg:text-[clamp(13px,0.94vw,18px)] max-w-full sm:max-w-[270px] lg:max-w-full mt-2 leading-[1.5]'>
                Jij vertelt wat je wilt bereiken. Je krijgt eerlijk advies — ook als we denken dat je het zelf kunt of dat er een goedkopere optie is. Geen salespraat, geen druk. Gewoon een open gesprek.
              </p>
            </div>

            <div className='relative bg-white rounded-3xl py-[30px] px-[20px] sm:py-[40px] sm:px-[25px] lg:py-[clamp(24px,2.6vw,50px)] lg:px-[clamp(18px,1.8vw,30px)]'>
              <span className='absolute z-50 top-[3px] right-[15px] sm:right-[20px] lg:right-[clamp(12px,1.2vw,20px)] font-gotham font-bold text-black/10 text-[40px] sm:text-[55px] lg:text-[clamp(38px,3.6vw,70px)]'>
                02
              </span>
              <h3 className='font-gotham font-bold max-w-[80%] sm:max-w-[200px] lg:max-w-[85%] text-[18px] sm:text-[20px] lg:text-[clamp(17px,1.25vw,24px)]'>
                Offerte & Plan
              </h3>
              <p className='font-gotham text-[14px] sm:text-[16px] lg:text-[clamp(13px,0.94vw,18px)] max-w-full sm:max-w-[270px] lg:max-w-full mt-2 leading-[1.5]'>
                Je ontvangt een heldere offerte. Concrete tijdlijn. Transparante prijzen. Jij beslist rustig, we sturen je echt niet drie keer achter elkaar een mailtje.
              </p>
            </div>

            <div className='relative bg-white rounded-3xl py-[30px] px-[20px] sm:py-[40px] sm:px-[25px] lg:py-[clamp(24px,2.6vw,50px)] lg:px-[clamp(18px,1.8vw,30px)]'>
              <span className='absolute z-50 top-[3px] right-[15px] sm:right-[20px] lg:right-[clamp(12px,1.2vw,20px)] font-gotham text-[40px] sm:text-[55px] lg:text-[clamp(38px,3.6vw,70px)] font-bold text-black/10'>
                03
              </span>
              <h3 className='font-gotham font-bold max-w-[80%] sm:max-w-[200px] lg:max-w-[85%] text-[18px] sm:text-[20px] lg:text-[clamp(17px,1.25vw,24px)]'>
                Aan de Slag
              </h3>
              <p className='font-gotham text-[14px] sm:text-[16px] lg:text-[clamp(13px,0.94vw,18px)] max-w-full sm:max-w-[270px] lg:max-w-full mt-2 leading-[1.5]'>
                We starten. Wekelijkse check-ins (elke vrijdag een update). Jij geeft feedback,
                we passen aan. Website live in 2–4 weken, of ads direct actief. We gaan extra ver voor je — zeker als je een
                pilotklant bent.
              </p>
              <div className='bg-[#0CC1FA] rounded-full px-3 py-2 max-w-[190px] flex flex-row gap-2 items-center mt-4'>
                <div className='rounded-full h-2 w-2 bg-white shrink-0'></div>
                <p className='text-white text-[12px] sm:text-[13px] lg:text-[clamp(11px,0.72vw,13px)]'>Hier gebeurt het werk</p>
              </div>
            </div>

            <div className='relative bg-white rounded-3xl py-[30px] px-[20px] sm:py-[40px] sm:px-[25px] lg:py-[clamp(24px,2.6vw,50px)] lg:px-[clamp(18px,1.8vw,30px)]'>
              <span className='absolute z-50 top-[3px] right-[15px] sm:right-[20px] lg:right-[clamp(12px,1.2vw,20px)] font-gotham text-[40px] sm:text-[55px] lg:text-[clamp(38px,3.6vw,70px)] font-bold text-black/10'>
                04
              </span>
              <h3 className='font-gotham font-bold max-w-[80%] sm:max-w-[250px] lg:max-w-[85%] text-[18px] sm:text-[20px] lg:text-[clamp(17px,1.25vw,24px)]'>
                Groei & Aanpassen
              </h3>
              <p className='font-gotham text-[14px] sm:text-[16px] lg:text-[clamp(13px,0.94vw,18px)] max-w-full sm:max-w-[270px] lg:max-w-full mt-2 leading-[1.5]'>
                Maandelijkse rapportage in gewoon Nederlands. We kijken samen wat werkt en wat niet. Werkt het niet zoals verwacht? Dan stoppen we maandelijks opzegbaar, geen gezeur.
              </p>
            </div>

          </div>

          <p className='w-full max-w-[90%] sm:max-w-[700px] lg:max-w-[960px] text-center mx-auto text-white font-gotham text-[14px] sm:text-[16px] lg:text-[clamp(13px,0.94vw,18px)] mt-6 lg:mt-[clamp(20px,2.3vw,45px)] leading-[1.5]'>
            Eerlijk gezegd: We zijn niet het goedkoopste én niet het duurste. We zijn het team dat écht zijn best
            doet voor jou, transparant is over wat we doen, en stopt als het niet werkt.
          </p>

        </div>

      </div>

    </section>
  )
}

export default HowWeWork