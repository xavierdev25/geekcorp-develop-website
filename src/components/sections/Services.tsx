"use client";
import Image from "next/image";
import { getI18n } from "@/i18n/index";
import { useLang } from "@/i18n/client";
const ICONS = [
  "/icons/services/mobile.svg",
  "/icons/services/computer.svg",
  "/icons/services/clip.svg",
  "/icons/services/box.svg",
];

const Services = () => {
  const lang = useLang();
  const t = getI18n(lang);
  return (
    <section className="flex gap-8 justify-center items-center mt-44 ">
      <article
        id="services"
        className="w-full h-full flex justify-center items-center relative bg-sky flex-col text-deep-blue py-16 md:py-10 space-y-8 rounded-[60px] md:rounded-[50px] xl:rounded-[60px] px-4 md:px-0"
      >
        <div className="flex justify-center flex-col items-center py-3">
          <div className="flex items-center gap-8">
            <Image
              src="/decorations/star-services.svg"
              alt="decoración estrella"
              width={40}
              height={40}
              className="w-14 hidden md:block"
            />
            <h2 className="text-3xl sm:text-5xl font-black">
              {t.services.title}
            </h2>
            <Image
              src="/decorations/star-services.svg"
              alt="decoración estrella"
              width={40}
              height={40}
              className="w-14 rotate-180 hidden md:block"
            />
          </div>
          <p className="text-base sm:text-2xl md:text-3xl text-center font-medium md:mt-4 sm:mt-2 ">
            {t.services.subtitle}
          </p>
        </div>
        <div className="flex gap-4 flex-col  lg:px-52 text-[#51ADEC]">
          {t.services.list.map((text, idx) => {
            const iconSrc = ICONS[idx];
            return (
              <div
                key={idx}
                className="flex bg-light items-center justify-center py-2.5 gap-3 px-8 rounded-full"
              >
                {iconSrc && (
                  <Image
                    src={iconSrc}
                    alt={text}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
                    width={32}
                    height={32}
                  />
                )}
                <span className="font-medium text-[13px] sm:text-lg  leading-none">
                  {text}
                </span>
              </div>
            );
          })}
        </div>
      </article>
      <article className="flex justify-center items-center max-w-[380px] rounded-[60px] h-[480px] relative p-8 bg-primary">
        <img
          src="/assets/image-service-ai.webp"
          className="absolute z-0 opacity-50 rounded-[60px]"
          alt=""
        />
        <div className="flex flex-col z-10 text-light justify-between h-full">
          <div>
            <span className="font-bold text-[36px] leading-none">
              Desarrollo y entrenamiento de IA
            </span>
            <p className="text-lg leading-none">
              Incluso con la aplicación más pequeña (sea cual sea la plataforma)
              o un servicio web que tenga miles de líneas de códigos y cientos
              de algoritmos para funcionar, el departamento de Calidad y Pruebas
              Automatizadas son vitales para la industria.
            </p>
          </div>
          <button className="bg-deep-blue rounded-[16px] py-2.5 text-xl font-medium items-center justify-center">
            Más información
          </button>
        </div>
      </article>
    </section>
  );
};

export default Services;
