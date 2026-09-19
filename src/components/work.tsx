"use client";

import { useEffect, useRef, useState } from "react";


function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}


const Work = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  const cardsRef = useRef<HTMLDivElement>(null);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

const card1 = useInView<HTMLDivElement>();
const card2 = useInView<HTMLDivElement>();
const card3 = useInView<HTMLDivElement>();
const card4 = useInView<HTMLDivElement>();

  const cardBase =
    "bg-white w-full h-auto rounded-[13px] relative px-6 py-5 md:h-full 2xl:block 2xl:w-[322px] 2xl:h-[359px] 2xl:px-7 2xl:py-0 transition-all duration-700 ease-out";

  const cardAnim = (visible: boolean) =>
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";

  return (
    <section id="work" className="bg-white">
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-15">
        <div
          ref={headerRef}
          className={`bg-white text-center pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 2xl:pt-[6vh] transition-all duration-700 ease-out ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-monument font-extrabold text-[26px] sm:text-[32px] xl:text-[40px] text-[#012549] tracking-[0.02em] leading-[34px] sm:leading-[40px] xl:leading-[46px]">
            Hoe We Samenwerken
          </h2>

          <p className="font-gotham text-[14px] xl:text-[18px] text-black mt-3 md:mt-4 2xl:mt-[1.2vh] max-w-[609px] mx-auto leading-[22.8px]">
            Geen verborgen stappen. Geen weken wachten op een antwoord. Vier
            stappen, helder en transparant.
          </p>
        </div>

        <div
          className="work-bg relative rounded-[28px] lg:rounded-none overflow-hidden lg:overflow-visible 
          bg-gradient-to-br from-[#01152b] via-[#0a2f52] to-[#124a7d] 
          lg:bg-[url(/work.png)] lg:bg-cover lg:bg-center lg:bg-no-repeat 
          px-8 sm:px-8 md:px-12 lg:px-16 xl:px-10 2xl:px-50 
          pt-10 sm:pt-14 md:pt-16 lg:pt-28 xl:pt-24 2xl:pt-[17vh] 
          pb-10 sm:pb-14 md:pb-16 lg:pb-24 xl:pb-24 2xl:pb-[15vh] 
          mt-8 md:mt-10 2xl:mt-0"
        >
          <img
            src="/work-vector.png"
            alt="vector"
            className="hidden lg:block absolute left-0 bottom-0"
          />

          <div
            ref={cardsRef}
            className="max-w-[1500px] mx-auto
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4
              gap-6
              items-start md:items-stretch

              2xl:flex 2xl:flex-row
              2xl:justify-between
              2xl:items-center
              2xl:gap-0
            "
          >
            {/* Card 01 */}
            <div
               ref={card1.ref}
  className={`${cardBase} ${cardAnim(card1.visible)}`}
  style={{ transitionDelay: card1.visible ? "0ms" : "0ms" }}
            >
              <div>
                <p className="font-gotham text-[32px] sm:text-[40px] xl:text-[48px] 2xl:text-[55px] font-extrabold text-[#0000001A] absolute right-2 xl:right-3 top-1 2xl:top-auto">
                  01
                </p>

                <h3 className="font-gotham font-extrabold text-[16px] sm:text-[18px] xl:text-[20px] 2xl:text-[24px] text-black leading-[22px] sm:leading-[24px] xl:leading-[26px] 2xl:leading-[28px] 2xl:pt-12.5 pr-10">
                  Kennismaking
                  <br />
                  (30 min, gratis)
                </h3>

                <p className="font-gotham text-[14px] xl:text-[18px] leading-[149%] text-[#012549] capitalize mt-3 2xl:mt-[1vh]">
                  Jij vertelt wat je wilt bereiken. Je krijgt eerlijk advies —
                  ook als we denken dat je het zelf kunt of dat er een
                  goedkopere optie is. Geen salespraat, geen druk. Gewoon een
                  open gesprek.
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div  ref={card2.ref}
  className={`${cardBase} ${cardAnim(card2.visible)}`}
  style={{ transitionDelay: card2.visible ? "120ms" : "0ms" }}>
              <div>
                <p className="font-gotham text-[32px] sm:text-[40px] xl:text-[48px] 2xl:text-[55px] font-extrabold text-[#0000001A] absolute right-2 xl:right-3 top-1 2xl:top-auto">
                  02
                </p>

                <h3 className="font-gotham font-extrabold text-[16px] sm:text-[18px] xl:text-[20px] 2xl:text-[24px] text-black leading-[22px] sm:leading-[24px] xl:leading-[26px] 2xl:leading-[28px] 2xl:pt-12.5 pr-10">
                  Offerte & Plan
                </h3>

                <p className="font-gotham text-[14px] xl:text-[18px] leading-[149%] text-[#012549] capitalize mt-3 2xl:mt-[1vh]">
                  Je ontvangt een heldere offerte. Concrete tijdlijn.
                  Transparante prijzen. Jij beslist rustig, we sturen je echt
                  niet drie keer achter elkaar een mailtje.
                </p>
              </div>
            </div>

            {/* Card 03 */}
            <div ref={card3.ref}
  className={`${cardBase} ${cardAnim(card3.visible)}`}
  style={{ transitionDelay: card3.visible ? "240ms" : "0ms" }}>
              <div>
                <p className="font-gotham text-[32px] sm:text-[40px] xl:text-[48px] 2xl:text-[55px] font-extrabold text-[#0000001A] absolute right-2 xl:right-3 top-1 2xl:top-auto">
                  03
                </p>

                <h3 className="font-gotham font-extrabold text-[16px] sm:text-[18px] xl:text-[20px] 2xl:text-[24px] text-black leading-[22px] sm:leading-[24px] xl:leading-[26px] 2xl:leading-[28px] 2xl:pt-12.5 pr-10">
                  Aan de Slag
                </h3>

                <p className="font-gotham text-[14px] xl:text-[18px] leading-[149%] text-[#012549] capitalize mt-3 2xl:mt-[1vh]">
                  We starten. Wekelijkse check-ins (elke vrijdag een update).
                  Jij geeft feedback, we passen aan. Website live in 2–4
                  weken, of ads direct actief. We gaan extra ver voor je —
                  zeker als je een pilotklant bent.
                </p>

                <h5 className="bg-[#0CC1FA] w-[175px] h-[26px] rounded-full text-white text-[12px] sm:text-[13px] font-semibold flex gap-2 justify-center items-center mt-3 2xl:mt-[1vh]">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  Hier gebeurt het werk
                </h5>
              </div>
            </div>

            {/* Card 04 */}
            <div ref={card4.ref}
  className={`${cardBase} ${cardAnim(card4.visible)}`}
  style={{ transitionDelay: card4.visible ? "360ms" : "0ms" }}>
              <div>
                <p className="font-gotham text-[32px] sm:text-[40px] xl:text-[48px] 2xl:text-[55px] font-extrabold text-[#0000001A] absolute right-2 xl:right-3 top-1 2xl:top-auto">
                  04
                </p>

                <h3 className="font-gotham font-extrabold text-[16px] sm:text-[18px] xl:text-[20px] 2xl:text-[24px] text-black leading-[22px] sm:leading-[24px] xl:leading-[26px] 2xl:leading-[28px] 2xl:pt-12.5 pr-10">
                  Groei & Aanpassen
                </h3>

                <p className="font-gotham text-[14px] xl:text-[18px] leading-[149%] text-[#012549] capitalize mt-3 2xl:mt-[1vh]">
                  Maandelijkse rapportage in gewoon Nederlands. We kijken
                  samen wat werkt en wat niet. Werkt het niet zoals verwacht?
                  Dan stoppen we maandelijks opzegbaar, geen gezeur.
                </p>
              </div>
            </div>
          </div>

          <p
            className={`font-gotham text-[14px] xl:text-[18px] text-white mt-8 md:mt-4 xl:mt-10 2xl:mt-[5vh] max-w-[960px] mx-auto text-center capitalize leading-[22.8px] transition-all duration-700 ease-out ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: cardsVisible ? "480ms" : "0ms" }}
          >
            Eerlijk gezegd: We zijn niet het goedkoopste én niet het duurste.
            We zijn het team dat écht zijn best doet voor jou, transparant is
            over wat we doen, en stopt als het niet werkt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;