import React from "react";

const ServiceSection = () => {
  return (
    <section className="w-full bg-[#F5F9FC] lg:min-h-[90vh]">
      <div className="max-w-content mx-auto px-6 py-16 sm:px-8 sm:py-20 lg:py-29">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8">
          <h2 className="max-w-[500px] font-monument text-[28px] capitalize leading-9 tracking-wide text-[#012549] sm:text-[32px] sm:leading-10 lg:text-[40px] lg:leading-12">
            Waar we jouw bedrijf mee laten groeien
          </h2>
          <p className="max-w-[540px] font-gotham text-[16px] leading-6 sm:text-[18px] sm:leading-5">
            Geen vage marketingpraat, wel keiharde systemen die voor regionaal rendement werken.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 lg:gap-9">
          {/* Card 1 */}
          <div className="relative pb-[60px]">
            <div className="relative w-full overflow-hidden rounded-[24px]">
              <img
                src="/s1.webp"
                alt=""
                className="h-[260px] w-full object-cover md:h-[380px] lg:h-[430px]"
              />

              <div className="absolute right-4 top-4 hover:rounded-full hover:border hover:border-[#C3C3C3]">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="white" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <circle cx="15" cy="15" r="15" fill="white"></circle>
                  <path d="M19.75 11C19.75 10.5858 19.4142 10.25 19 10.25L12.25 10.25C11.8358 10.25 11.5 10.5858 11.5 11C11.5 11.4142 11.8358 11.75 12.25 11.75H18.25V17.75C18.25 18.1642 18.5858 18.5 19 18.5C19.4142 18.5 19.75 18.1642 19.75 17.75L19.75 11ZM11 19L11.5303 19.5303L19.5303 11.5303L19 11L18.4697 10.4697L10.4697 18.4697L11 19Z" fill="black"></path>
                </svg>
              </div>
            </div>

            {/* Overlay Text Card */}
            <div className="absolute bottom-[3px] left-1/2 w-[375px] max-w-[90%] -translate-x-1/2 rounded-2xl bg-white px-6 py-6 shadow-xl xl:px-[35px] xl:py-[35px]">
              <h5 className="mb-1.5 font-gotham text-[17px] font-bold leading-6 xl:text-[20px]">
                High-Converting Websites
              </h5>
              <p className="font-gotham text-[15px] leading-snug xl:text-[18px] sm:leading-none">
                Wij bouwen loeistrakke, pixel-perfecte websites die specifiek zijn ontworpen...
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative pb-[60px]">
            <div className="relative w-full overflow-hidden rounded-[24px]">
              <img
                src="/s2.webp"
                alt=""
                className="h-[260px] w-full object-cover md:h-[380px] lg:h-[430px]"
              />

              <div className="absolute right-4 top-4 hover:rounded-full hover:border hover:border-[#C3C3C3]">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="white" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <circle cx="15" cy="15" r="15" fill="white"></circle>
                  <path d="M19.75 11C19.75 10.5858 19.4142 10.25 19 10.25L12.25 10.25C11.8358 10.25 11.5 10.5858 11.5 11C11.5 11.4142 11.8358 11.75 12.25 11.75H18.25V17.75C18.25 18.1642 18.5858 18.5 19 18.5C19.4142 18.5 19.75 18.1642 19.75 17.75L19.75 11ZM11 19L11.5303 19.5303L19.5303 11.5303L19 11L18.4697 10.4697L10.4697 18.4697L11 19Z" fill="black"></path>
                </svg>
              </div>
            </div>

            {/* Overlay Text Card */}
            <div className="absolute bottom-[3px] left-1/2 w-[375px] max-w-[90%] -translate-x-1/2 rounded-2xl bg-white px-6 py-6 shadow-xl lg:px-[20px] xl:px-[35px] xl:py-[35px]">
              <h5 className="mb-1.5 font-gotham text-[17px] font-bold leading-6 xl:text-[20px]">
                AI &amp; Workflow Automation
              </h5>
              <p className="font-gotham text-[15px] leading-snug xl:text-[18px] sm:leading-none">
                Eliminate repetitive manual work in your business. We build smart AI workflows and...
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative pb-[60px]">
            <div className="relative w-full overflow-hidden rounded-[24px]">
              <img
                src="/s3.webp"
                alt=""
                className="h-[260px] w-full object-cover md:h-[380px] lg:h-[430px]"
              />

              <div className="absolute right-4 top-4 hover:rounded-full hover:border hover:border-[#C3C3C3]">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="white" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <circle cx="15" cy="15" r="15" fill="white"></circle>
                  <path d="M19.75 11C19.75 10.5858 19.4142 10.25 19 10.25L12.25 10.25C11.8358 10.25 11.5 10.5858 11.5 11C11.5 11.4142 11.8358 11.75 12.25 11.75H18.25V17.75C18.25 18.1642 18.5858 18.5 19 18.5C19.4142 18.5 19.75 18.1642 19.75 17.75L19.75 11ZM11 19L11.5303 19.5303L19.5303 11.5303L19 11L18.4697 10.4697L10.4697 18.4697L11 19Z" fill="black"></path>
                </svg>
              </div>
            </div>

            {/* Overlay Text Card */}
            <div className="absolute bottom-[3px] left-1/2 w-[375px] max-w-[90%] -translate-x-1/2 rounded-2xl bg-white px-6 py-6 shadow-xl xl:px-[35px] xl:py-[35px]">
              <h5 className="mb-1.5 font-gotham text-[17px] font-bold leading-6  xl:text-[20px]">
                Regional Marketing &amp; Retargeting
              </h5>
              <p className="font-gotham text-[15px] leading-snug xl:text-[18px] sm:leading-none">
                We drive targeted traffic to your business via strategic...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;