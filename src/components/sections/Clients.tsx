"use client";
import Image from "next/image";
import { getI18n } from "@/i18n/index";
import { useLang } from "@/i18n/client";

const Clients = () => {
  const lang = useLang();
  const t = getI18n(lang);
  return (
    <section
      id="clients"
      className="w-full h-full flex justify-center items-center flex-col space-y-8 mt-48"
    >
      <div className="flex items-center gap-14 md:gap-8">
        <Image
          src="/decorations/star-services.svg"
          alt="decoración estrella"
          width={40}
          height={40}
          className="w-14 hidden md:block"
        />
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-deep-blue">
          {t.clients.title}
        </h1>
        <Image
          src="/decorations/star-services.svg"
          alt="decoración estrella"
          width={40}
          height={40}
          className="w-14 rotate-180 hidden md:block "
        />
      </div>
      <div className="flex gap-12 flex-col md:flex-row justify-center items-center">
        <Image
          src="/assets/client-1.webp"
          alt="Client 1"
          width={120}
          height={60}
        />
        <Image
          src="/assets/client-2.webp"
          alt="Client 2"
          width={120}
          height={60}
        />
        <Image
          src="/assets/client-3.webp"
          alt="Client 3"
          width={120}
          height={60}
        />
      </div>
    </section>
  );
};

export default Clients;
