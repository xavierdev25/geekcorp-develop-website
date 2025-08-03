"use client";
import { getI18n } from "@/i18n/index";
import { useLang } from "@/i18n/client";
import Image from "next/image";

const Integrations = () => {
  const lang = useLang();
  const t = getI18n(lang);
  return (
    <section className="w-full h-full flex justify-center items-center flex-col space-y-3 mt-48">
      <div className="flex items-center gap-8 md:gap-4">
        <Image
          src="/decorations/star-services.svg"
          alt="decoración estrella"
          width={40}
          height={40}
          className="w-14 md:w-10 hidden md:block"
        />
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-black text-deep-blue">
          {t.integration.title}
        </h2>
        <Image
          src="/decorations/star-services.svg"
          alt="decoración estrella"
          width={40}
          height={40}
          className="w-14 md:w-10 rotate-180 hidden md:block"
        />
      </div>
      <p className="text-base md:text-xl lg:text-2xl text-center leading-none md:leading-normal font-light text-deep-blue">
        {t.integration.desc}
      </p>
      <button className="bg-deep-blue px-4 md:px-8 py-2 rounded-xl font-bold text-ivory text-base md:text-xl border-1 border-deep-blue hover:bg-transparent hover:text-deep-blue transition-all duration-300 cursor-pointer">
        {t.integration.cta}
      </button>
    </section>
  );
};

export default Integrations;
