import Link from "next/link";

const Footer = () => {
  return (
    <section className="text-white">
      <div className="xl:px-15 md:px-6 px-4">
        <div className="bg-[url(/footer.png)] bg-work bg-center bg-no-repeat w-full h-[553px] px-[9.7%]">
          <div className="pt-[12vh] flex justify-between items-center">
            <div className="max-w-[486px]">
              <img src="/logo.svg" alt="logo" className="w-[294px] h-auto" />
              <p className="font-gotham text-[18px] text-white mt-[2vh] capitalize">
                AI-oplossingen, automatiseringen én online marketing voor lokale
                ondernemers. Meer tijd, meer klanten, meer groei.
              </p>
            </div>

            <div>
              <h3 className="font-monument text-[24px] text-white">Diensten</h3>
              <div className="flex flex-col gap-3 mt-[2vh]">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="9"
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M7.5 4.33008L-4.07833e-07 8.66021L-2.92811e-08 -4.94421e-05L7.5 4.33008Z"
                      fill="white"
                    ></path>
                  </svg>
                  <Link href={"#"} className="font-gotham text-[18px]">
                    AI Automatiseringen
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="9"
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M7.5 4.33008L-4.07833e-07 8.66021L-2.92811e-08 -4.94421e-05L7.5 4.33008Z"
                      fill="white"
                    ></path>
                  </svg>
                  <Link href={"#"} className="font-gotham text-[18px]">
                    AI Chatbots
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="9"
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M7.5 4.33008L-4.07833e-07 8.66021L-2.92811e-08 -4.94421e-05L7.5 4.33008Z"
                      fill="white"
                    ></path>
                  </svg>
                  <Link href={"#"} className="font-gotham text-[18px]">
                    Website Ontwikkeling
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="9"
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M7.5 4.33008L-4.07833e-07 8.66021L-2.92811e-08 -4.94421e-05L7.5 4.33008Z"
                      fill="white"
                    ></path>
                  </svg>
                  <Link href={"#"} className="font-gotham text-[18px]">
                    Online Advertenties (Google & Meta)
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-[-5.4%]">
              <h3 className="font-monument text-[24px] text-white">Contact</h3>

              <div className="flex flex-col gap-4 mt-[2vh]">
                <div className="flex items-center gap-3">
                  <div className="bg-white rounded-full w-[25px] h-[25px] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="10"
                      viewBox="0 0 13 10"
                      fill="none"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        d="M11.4054 0C12.0445 0 12.5852 0.540772 12.5852 1.17987C12.5852 1.57315 12.3886 1.91728 12.0936 2.13851L6.75965 6.14514C6.46468 6.36636 6.09597 6.36636 5.80101 6.14514L0.46703 2.13851C0.172064 1.91728 0 1.57315 0 1.17987C0 0.540772 0.516191 0 1.17987 0H11.4054ZM5.33398 6.78423C5.89933 7.2021 6.66133 7.2021 7.22668 6.78423L12.5852 2.75302V7.86577C12.5852 8.75067 11.8724 9.43893 11.0121 9.43893H1.57315C0.688255 9.43893 0 8.75067 0 7.86577V2.75302L5.33398 6.78423Z"
                        fill="#036DAB"
                      ></path>
                    </svg>
                  </div>
                  <Link href={"#"} className="font-gotham text-[18px]">
                    info@miradaintelligence.nl
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white rounded-full w-[25px] h-[25px] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        d="M13.0851 9.90038L12.4705 12.4867C12.3937 12.8708 12.0864 13.1268 11.7023 13.1268C5.24941 13.1012 0 7.85183 0 1.3989C0 1.01479 0.230462 0.707512 0.614565 0.630691L3.20086 0.0161264C3.55935 -0.0606942 3.94346 0.144161 4.0971 0.47705L5.30062 3.2682C5.42866 3.60109 5.35184 3.98519 5.07016 4.19005L3.68739 5.31675C4.55802 7.08362 5.99201 8.51761 7.78449 9.38824L8.91119 8.00547C9.11604 7.7494 9.50015 7.64697 9.83304 7.77501L12.6242 8.97853C12.9571 9.15778 13.1619 9.54188 13.0851 9.90038Z"
                        fill="#036DAB"
                      ></path>
                    </svg>
                  </div>
                  <Link href={"#"} className="font-gotham text-[18px]">
                    +31 6 4135 3424
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0CC1FA] w-full h-[60px] flex justify-center items-center text-[18px] font-gotham text-white mt-[-5vh]">
          © 2026 Mirada Management B.V. Alle rechten voorbehouden. | KvK:
          42084347
        </div>
      </div>
    </section>
  );
};

export default Footer;
