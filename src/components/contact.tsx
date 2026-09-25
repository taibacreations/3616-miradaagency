"use client";

import React, { useEffect, useRef, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    bericht: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Dummy AJAX submission — replace with your real endpoint
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulated success — swap this block for an actual fetch() call, e.g.:
          // const res = await fetch("/api/contact", {
          //   method: "POST",
          //   headers: { "Content-Type": "application/json" },
          //   body: JSON.stringify(formData),
          // });
          // if (!res.ok) return reject();
          resolve(true);
        }, 1500);
      });

      setStatus("success");
      setFormData({ naam: "", email: "", telefoon: "", bericht: "" });

      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className=" pt-[8vh] sm:pt-[10vh] lg:pt-[7vh] xl:pt-[12.8vh]">
      <div>
        <div className="max-w-[1560px] mx-auto xl:px-10 md:px-6 px-4">
          <div
            className={`text-center max-w-[848px] mx-auto transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className=" font-bold text-[26px] sm:text-[32px] xl:text-[40px] text-[#012549] tracking-[0.02em] leading-[30px] sm:leading-[38px] xl:leading-[46px]">
              Laten we kennismaken
            </h2>
            <p className=" text-[14px] sm:text-[16px] xl:text-[18px] text-black mt-[1.2vh]">
              Benieuwd wat AI en automatisering voor jouw bedrijf kunnen
              betekenen? Neem contact op voor een gratis kennismakingsgesprek.
            </p>
          </div>

          {/* md+: items-stretch => card aur image wrapper ki height hamesha barabar */}
          <div className="flex flex-col md:flex-row md:items-stretch lg:justify-between gap-8 lg:gap-6 xl:gap-8 mt-[4vh]">
            <div
              className={`bg-white rounded-[24px] w-full lg:w-[480px] xl:w-[560px] 2xl:w-[750px] min-h-[560px] sm:min-h-[600px] xl:min-h-[624px] py-[3vh] px-[6%] sm:px-[5%] lg:px-[3%] xl:px-[2.3%] border border-[#E5E7EB] transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: visible ? "150ms" : "0ms" }}
            >
              <h4 className="font-bold text-[28px] sm:text-[32px] xl:text-[34px] text-[#0A192F]">
                Stuur een bericht
              </h4>

              <form onSubmit={handleSubmit} className="mt-[2.3vh]">
                <div>
                  <label className=" text-[14px] sm:text-[16px] xl:text-[18px] text-black">
                    Naam
                  </label>
                  <input
                    type="text"
                    name="naam"
                    value={formData.naam}
                    onChange={handleChange}
                    placeholder="Je naam"
                    required
                    className="w-full mt-2 border border-[#E5E7EB] rounded-[10px] px-4 py-3 text-[14px] sm:text-[16px] text-[#0A192F] placeholder:text-[#484848]   placeholder:text-[14px] sm:placeholder:text-[16px] outline-none transition-all duration-300 focus:border-[#0CC1FA] focus:ring-2 focus:ring-[#0CC1FA]/20"
                  />
                </div>

                <div className="mt-[1vh]">
                  <label className=" text-[14px] sm:text-[16px] xl:text-[18px] text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="je@email.nl"
                    required
                    className="w-full mt-2 border border-[#E5E7EB] rounded-[10px] px-4 py-3 text-[14px] sm:text-[16px] text-[#0A192F] placeholder:text-[#484848]   placeholder:text-[14px] sm:placeholder:text-[16px] outline-none transition-all duration-300 focus:border-[#0CC1FA] focus:ring-2 focus:ring-[#0CC1FA]/20"
                  />
                </div>

                <div className="mt-[1vh]">
                  <label className="text-[14px] sm:text-[16px] xl:text-[18px] text-black">
                    Telefoon (optioneel)
                  </label>
                  <input
                    type="tel"
                    name="telefoon"
                    value={formData.telefoon}
                    onChange={handleChange}
                    placeholder="+31 6 12345678"
                    className="w-full mt-2 border border-[#E5E7EB] rounded-[10px] px-4 py-3 text-[14px] sm:text-[16px] text-[#0A192F] placeholder:text-[#484848]   placeholder:text-[14px] sm:placeholder:text-[16px] outline-none transition-all duration-300 focus:border-[#0CC1FA] focus:ring-2 focus:ring-[#0CC1FA]/20"
                  />
                </div>

                <div className="mt-[1vh]">
                  <label className="text-[14px] sm:text-[16px] xl:text-[18px] text-black">
                    Bericht
                  </label>
                  <textarea
                    name="bericht"
                    value={formData.bericht}
                    onChange={handleChange}
                    placeholder="Vertel iets over je bedrijf en waar je hulp bij nodig hebt..."
                    required
                    rows={4}
                    className="w-full mt-2 border border-[#E5E7EB] rounded-[10px] px-4 py-3  text-[14px] sm:text-[16px] text-[#0A192F] placeholder:text-[#484848]  placeholder:text-[14px] sm:placeholder:text-[16px] outline-none transition-all duration-300 focus:border-[#0CC1FA] focus:ring-2 focus:ring-[#0CC1FA]/20 resize-none placeholder:max-w-[399px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative overflow-hidden mt-[1.5vh] w-full h-[48px] sm:h-[52px] xl:h-[54px] rounded-[319px] bg-[#0CC1FA] font-semibold text-[15px] md:text-[13px] xl:text-[16px] text-white flex items-center justify-center gap-2 transition-all duration-500 ease-out disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 bg-[#012549] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    {status === "loading" && (
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                    )}
                    {status === "loading"
                      ? "Versturen..."
                      : status === "success"
                        ? "Verstuurd!"
                        : "Verstuur bericht"}
                  </span>
                </button>

                {status === "success" && (
                  <p className="mt-3  text-[13px] sm:text-[14px] text-green-600 text-center">
                    Bedankt! We nemen zo snel mogelijk contact met je op.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-3 text-[13px] sm:text-[14px] text-red-600 text-center">
                    Er ging iets mis. Probeer het later opnieuw.
                  </p>
                )}
              </form>
            </div>

            {/* Image wrapper: mobile par fixed height | md+ par card ke barabar stretch */}
            <div
              className={`relative w-full h-[260px] sm:h-[340px] md:h-auto lg:w-[600px] xl:w-[765px] 2xl:w-[765px] transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: visible ? "300ms" : "0ms" }}
            >
              <img
                src="/contact.png"
                alt="contact"
                className="absolute inset-0 h-full w-full rounded-[24px] object-cover md:object-[right_40%] lg:object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;