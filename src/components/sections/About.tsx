"use client";
import { getI18n } from "@/i18n/index";
import { useLang } from "@/i18n/client";
import Image from "next/image";
const About = () => {
  const lang = useLang();
  const t = getI18n(lang);
  const percents = t.about.percents.map((title, idx) => ({
    number: ["0%", "+0", "+0"][idx],
    title,
    class: ["", "", "col-span-2"][idx],
  }));
  const benefits = t.about.benefits.map((b, idx) => ({
    number: (idx + 1).toString(),
    title: b.title,
    description: b.desc,
  }));
  return (
    <section
      id="services"
      className="w-full h-full flex justify-center items-center flex-col text-deep-blue mt-48"
    >
      <div className="flex flex-col  gap-2 justify-center items-center  md:gap-0">
        <Image
          src="/decorations/star-about-1.svg"
          alt="decoración estrella"
          width={40}
          height={40}
          className="w-18 hidden 2xl:block"
        />
        <h2 className="text-3xl md:text-5xl font-black flex justify-center md:mb-4 text-center">
          {t.about.why}
        </h2>
        <Image
          src="/decorations/star-about-3.svg"
          alt="decoración estrella"
          width={40}
          height={40}
          className="w-12 absolute transform translate-x-17/1 hidden 2xl:block"
        />
        <p className="leading-none text-base md:text-2xl text-center px-8">
          {t.about.desc}
        </p>
        <Image
          src="/decorations/star-about-2.svg"
          alt="decoración estrella"
          width={40}
          height={40}
          className="w-13 hidden 2xl:block"
        />
      </div>
      <div className="flex 2xl:flex-row flex-col justify-center items-center 2xl:justify-start 2xl:items-start mt-6 2xl:mt-16">
        <div className="grid grid-cols-2 grid-rows-2 gap-1 md:gap-16 justify-center">
          {percents.map((percent, idx) => (
            <div
              key={idx}
              className={`${percent.class} ${
                idx === 2
                  ? " flex flex-col items-center justify-center"
                  : "justify-center flex-col flex items-center"
              }`}
            >
              <div className="flex flex-col 2xl:flex-row justify-center">
                <div className="h-20 w-20 md:h-36 md:w-36 rounded-full border-1 flex items-center justify-center">
                  <p className="font-bold text-base md:text-xl">
                    {percent.number}
                  </p>
                </div>
              </div>
              <span className="leading-none text-sm md:text-lg flex justify-center items-center text-center mt-4 max-w-[200px] 2xl:max-w-full">
                {percent.title}
              </span>
            </div>
          ))}
        </div>
        <div className="w-[1px] h-[500px] bg-orange justify-start items-start mx-24 hidden 2xl:flex"></div>
        <div className="flex flex-col mt-16 md:mt-0">
          <h2 className="text-3xl md:text-5xl font-black flex justify-center mb-4 mt-0 md:mt-12">
            {t.about.benefitsTitle}
          </h2>
          <div className="flex flex-col gap-12">
            {benefits.map((benefit) => (
              <div
                className="flex flex-row items-center gap-4"
                key={benefit.number}
              >
                <div className="flex px-2 md:px-3 py-4 md:py-6.5 items-center justify-center border-1 rounded-full">
                  <h3 className="text-lg md:text-xl">{benefit.number}</h3>
                </div>
                <div>
                  <span className="font-medium text-base md:text-2xl ">
                    {benefit.title}
                  </span>
                  <p className="font-light text-base md:text-xl leading-none 2xl:w-[650px]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
