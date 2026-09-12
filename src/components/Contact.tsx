import React from 'react'

const Contact = () => {
  return (
    <section className='w-full bg-[#F5F9FC] overflow-hidden pt-10 lg:pt-28 pb-16 lg:pb-24'>

      <div className='max-w-content z-10 mx-auto px-4 sm:px-6 lg:px-8'>

        {/* Heading */}
        <div className='max-w-[850px] mx-auto text-center mb-5 lg:mb-9'>
          <h2 className='font-monument text-[28px] sm:text-[34px] lg:text-[40px] text-[#012549] capitalize mb-4'>
            Laten We Kennismaken
          </h2>
          <p className='font-gotham font-[350] text-[15px] sm:text-[17px] lg:text-[18px] text-black  capitalize'>
            Benieuwd wat AI en automatisering voor jouw bedrijf kunnen betekenen? Neem contact op voor een gratis kennismakingsgesprek.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row justify-around items-center gap-10 lg:gap-10'>

          {/* Contact form card */}
          <div className='w-full lg:max-w-[450px] xl:max-w-[630px] bg-white border border-black/10 rounded-3xl px-6 py-8 sm:px-9 sm:pt-10'>
            <h3 className='font-monument text-[18px] sm:text-[20px] font-bold text-[#012549] mb-6'>
              Stuur een Bericht
            </h3>

            <form className='flex flex-col gap-5'>
              <div>
                <label htmlFor='name' className='block font-monument text-[14px] sm:text-[15px] text-black mb-2'>
                  Naam
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Je naam'
                  className='w-full rounded-lg border border-black/15 px-4 py-3 font-gotham text-[14px] sm:text-[15px] text-black placeholder:text-black outline-none focus:border-accent transition-colors'
                />
              </div>

              <div>
                <label htmlFor='email' className='block font-monument text-[14px] sm:text-[15px] font-bold text-black mb-2'>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='je@email.nl'
                  className='w-full rounded-lg border border-black/15 px-4 py-3 font-gotham text-[14px] sm:text-[15px] text-black placeholder:text-black outline-none focus:border-accent transition-colors'
                />
              </div>

              <div>
                <label htmlFor='phone' className='block font-monument text-[14px] sm:text-[15px] font-bold text-black mb-2'>
                  Telefoon (optioneel)
                </label>
                <input
                  id='phone'
                  name='phone'
                  type='tel'
                  placeholder='+31 6 12345678'
                  className='w-full rounded-lg border border-black/15 px-4 py-3 font-gotham text-[14px] sm:text-[15px] text-black placeholder:text-black outline-none focus:border-accent transition-colors'
                />
              </div>

              <div>
                <label htmlFor='message' className='block font-monument text-[14px] sm:text-[15px] text-black mb-2'>
                  Bericht
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  placeholder='Vertel iets over je bedrijf en waar je hulp bij nodig hebt...'
                  className='w-full resize-none rounded-lg border border-black/15 px-4 py-3 font-gotham text-[14px] sm:text-[15px] text-black placeholder:text-black outline-none focus:border-accent transition-colors'
                />
              </div>

              <button
                type='submit'
                className=' w-full rounded-full bg-[#0CC1FA] py-4 font-gotham text-[15px] sm:text-[16px] font-bold text-white transition-colors hover:bg-[#0cc2fad2]'
              >
                Verstuur Bericht
              </button>
            </form>
          </div>

          {/* Image */}
          <div className='w-full lg:w-auto lg:flex-1'>
            <img
              src="/contact.webp"
              alt=""
              className="rounded-2xl w-full h-[260px] sm:h-[360px] md:h-[440px] lg:h-[500px] xl:h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact