import React from 'react'

const chevron = (
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
<path d="M7.5 4.33008L-4.07833e-07 8.66021L-2.92811e-08 -4.94421e-05L7.5 4.33008Z" fill="white"></path>
</svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
<circle cx="12.9119" cy="12.9119" r="12.9119" fill="white"></circle>
<path d="M18.0245 8.19238C18.6636 8.19238 19.2044 8.73315 19.2044 9.37225C19.2044 9.76554 19.0077 10.1097 18.7128 10.3309L13.3788 14.3375C13.0838 14.5587 12.7151 14.5587 12.4201 14.3375L7.08617 10.3309C6.7912 10.1097 6.61914 9.76554 6.61914 9.37225C6.61914 8.73315 7.13533 8.19238 7.79901 8.19238H18.0245ZM11.9531 14.9766C12.5185 15.3945 13.2805 15.3945 13.8458 14.9766L19.2044 10.9454V16.0582C19.2044 16.9431 18.4915 17.6313 17.6312 17.6313H8.1923C7.3074 17.6313 6.61914 16.9431 6.61914 16.0582V10.9454L11.9531 14.9766Z" fill="#036DAB"></path>
</svg>
)

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
<circle cx="12.9119" cy="12.9119" r="12.9119" fill="white"></circle>
<path d="M19.4464 16.249L18.8319 18.8353C18.7551 19.2194 18.4478 19.4755 18.0637 19.4755C11.6107 19.4499 6.36133 14.2005 6.36133 7.74753C6.36133 7.36343 6.59179 7.05614 6.97589 6.97932L9.56219 6.36476C9.92068 6.28794 10.3048 6.49279 10.4584 6.82568L11.6619 9.61683C11.79 9.94972 11.7132 10.3338 11.4315 10.5387L10.0487 11.6654C10.9194 13.4323 12.3533 14.8662 14.1458 15.7369L15.2725 14.3541C15.4774 14.098 15.8615 13.9956 16.1944 14.1236L18.9855 15.3272C19.3184 15.5064 19.5233 15.8905 19.4464 16.249Z" fill="#036DAB"></path>
</svg>
)

const services = [
  'AI Automatiseringen',
  'AI Chatbots',
  'Website Ontwikkeling',
  'Online Advertenties (Google & Meta)',
]

export const Footer = () => {
  return (
    <section className="w-full bg-[#F5F9FC] pb-0">
      <footer className="relative max-w-[1790px] mx-auto overflow-hidden rounded-t-[30px] sm:rounded-t-[40px] lg:rounded-t-[50px] bg-gradient-to-br from-[#04142B] via-[#0B3D6B] to-[#012549] lg:bg-none">

        {/* Ratio spacer locks the desktop bg image to its real ratio — swap 41.4583% for your footer.webp's actual ratio if different */}
        <div className="hidden lg:block w-full pt-[35%] xl:pt-[28%]" />

        <img
          src="/footer.webp"
          alt=""
          className="hidden lg:block absolute inset-0 z-0 h-full w-full object-center"
        />

        {/* Main content */}
        <div className="relative z-10 lg:absolute lg:inset-0 max-w-content mx-auto px-6 sm:px-8 py-[50px] sm:py-[60px] lg:py-0 flex flex-col justify-center items-center">

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr_1fr] lg:grid-cols-[1.6fr_1.2fr_1fr] gap-10 sm:gap-8 md:gap-14 lg:gap-20 xl:gap-24">

            {/* LEFT */}
            <div className="md:max-w-[480px]">
              <img src="/flogo.webp" alt="Mirada Agency" className="h-auto w-[160px] sm:w-[180px] lg:w-[294px]" />

              <p className="mt-5 font-gotham text-[14px] font-[325] sm:text-[15px] md:text-[12px] xl:text-[18px] leading-[1.6] text-white capitalize">
                AI-Oplossingen, Automatiseringen en Online Marketing voor lokale ondernemers. Meer tijd, meer klanten, meer groei.
              </p>
            </div>

            {/* MIDDLE */}
            <div className=''>
              <h3 className="font-monument text-[18px] sm:text-[20px] xl:text-[24px]  font-bold text-white lg:pt-6 xl:pt-7">
                Diensten
              </h3>

              <ul className="mt-4 flex flex-col gap-3">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-2">
                    {chevron}
                    <span className="font-gotham text-[14px] sm:text-[15px] md:text-[12px] xl:text-[18px] text-white">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT */}
            <div>
              <h3 className="font-monument text-[18px] sm:text-[20px] xl:text-[24px] font-bold text-white lg:pt-6 xl:pt-7">
                Contact
              </h3>

              <div className="mt-4 flex flex-col gap-4">
                <a href="mailto:info@miradaintelligence.nl" className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center">
                    <MailIcon />
                  </span>
                  <span className="font-gotham xl:text-[18px] text-[14px] sm:text-[15px] md:text-[12px] text-white break-all">
                    Info@Miradaintelligence.NL
                  </span>
                </a>

                <a href="tel:+31641353424" className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center">
                    <PhoneIcon />
                  </span>
                  <span className="font-gotham text-[14px] sm:text-[15px] md:text-[12px] xl:text-[18px] text-white">
                    +31 6 4135 3424
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 bg-[#0CC1FA] py-4 text-center px-4">
          <p className="font-gotham text-[12px] sm:text-[14px] text-white">
            © 2026 Mirada Management B.V. Alle Rechten Voorbehouden. | KvK: 42084347
          </p>
        </div>

      </footer>
    </section>
  )
}