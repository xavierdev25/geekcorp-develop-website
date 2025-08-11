"use client";
import React from "react";
import Image from "next/image";
import { getI18n } from "@/i18n/index";
import { useLang } from "@/i18n/client";

// Datos de las imágenes para las categorías
const categoryImages = [
  "/assets/clients/payment-clients.webp",
  "/assets/clients/support-clients.webp",
];

// Componente para las tarjetas de categoría
const CategoryCard = ({
  category,
  image,
  alt,
  href,
}: {
  category: { title: string; description: string };
  image: string;
  alt: string;
  href: string;
}) => (
  <a
    className="relative w-full max-w-[400px] h-[180px] rounded-xl bg-primary text-light overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
    href={href}
  >
    <Image src={image} alt={alt} fill className="object-cover opacity-50" />
    <div className="relative z-10 flex h-full w-full items-center justify-center flex-col text-center p-4">
      <span className="font-medium text-xl md:text-2xl mb-2">
        {category.title}
      </span>
      <p className="font-light text-sm md:text-[17px] leading-tight text-center">
        {category.description}
      </p>
    </div>
  </a>
);

function ZoneClients() {
  const lang = useLang();
  const t = getI18n(lang);

  const clientCategories = [
    {
      title: t.zoneClients.support.title,
      description: t.zoneClients.support.description,
      image: "/assets/clients/support-clients.webp",
      alt: t.zoneClients.support.alt,
      href: "https://ticket.geekcorporation.xyz/ostic/",
    },
    {
      title: t.zoneClients.payments.title,
      description: t.zoneClients.payments.description,
      image: "/assets/clients/payment-clients.webp",
      alt: t.zoneClients.payments.alt,
      href: "https://geekcorporation.xyz/pagos/",
    },
  ];

  return (
    <section className="mt-44 px-4 md:px-8">
      <div className="text-deep-blue flex items-center gap-4 md:gap-8 lg:gap-8 justify-center">
        <Image
          src="/decorations/star-services.svg"
          alt={t.zoneClients.decoration.alt}
          width={80}
          height={80}
          className="w-10 md:w-14 hidden md:block"
        />
        <div className="flex flex-col justify-center items-center max-w-[500px] text-center">
          <h2 className="text-2xl md:text-[40px] lg:text-5xl font-black flex justify-center mb-2 text-center leading-none">
            {t.zoneClients.title}
          </h2>
          <p className="text-sm md:text-base lg:text-xl xl:text-2xl font-light leading-none">
            {t.zoneClients.subtitle}
          </p>
        </div>
        <Image
          src="/decorations/star-services.svg"
          alt={t.zoneClients.decoration.alt}
          width={80}
          height={80}
          className="w-10 md:w-14 rotate-180 hidden md:block"
        />
      </div>

      <article className="justify-center items-center flex gap-8 md:gap-18 mt-8 md:mt-14">
        {clientCategories.map((category, index) => (
          <CategoryCard
            key={index}
            category={category}
            image={category.image}
            alt={category.alt}
            href={category.href}
          />
        ))}
      </article>
    </section>
  );
}

export default ZoneClients;
