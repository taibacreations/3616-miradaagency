import React from 'react'
import Button from './ui/Button'

const Cta = () => {
  return (
    <section className="w-full bg-white pt-[40px] pb-10 sm:pt-[50px] sm:pb-12 lg:pt-[60px] xl:pb-0">
      <div className="mx-auto max-w-content px-3 xl:px-8">

        {/* Image + content wrapper */}
        <div className="relative overflow-hidden rounded-[18px] min-h-[230px] sm:min-h-[270px] md:min-h-0">

          {/* Background Image */}
          <img
            src="/cta.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover md:static md:inset-auto md:h-auto md:w-full md:object-contain"
          />

          {/* Text over Image */}
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="px-4 max-w-[240px] sm:px-5 sm:max-w-[300px] md:px-5 md:max-w-[550px] lg:px-10 lg:max-w-[600px] xl:max-w-[790px] xl:px-18">

              <h3 className="font-gotham text-white font-bold text-[13px] sm:text-[15px] md:text-[18px] xl:text-[24px] pb-2 sm:pb-3 md:pb-4 leading-snug">
                Klaar voor meetbaar resultaat?
              </h3>

              <p className="font-gotham text-white text-[9px] sm:text-[10.5px] md:text-[15px] xl:text-[20px] pb-3 sm:pb-4 md:pb-4 xl:pb-6 capitalize leading-relaxed">
                Claim je gratis Pixel- & Conversiescan en ontdek binnen 24 uur waar de digitale lead-lekken van jouw onderneming zitten. Geen verplichtingen.
              </p>

              <Button
                href="#gratis-scan" variant="primary" className="px-3 py-2 text-[10px] sm:text-[12px] sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:pl-[25px] lg:pr-[12px] lg:py-[12px]" icon
              >
                Claim Gratis Scan
              </Button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cta