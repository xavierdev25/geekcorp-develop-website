"use client";
import React from "react";
import Image from "next/image";
import { getI18n } from "@/i18n/index";
import { useLang } from "@/i18n/client";

// Datos de las imágenes para las categorías
const categoryImages = [
  "/assets/category/callcenter-category.webp",
  "/assets/category/apps-category.webp",
  "/assets/category/mobile-category.webp",
  "/assets/category/powerbi-category.webp",
  "/assets/category/design-category.webp",
];

// Componente para las tarjetas de categoría
const CategoryCard = ({
  category,
  image,
  alt,
}: {
  category: { title: string; description: string };
  image: string;
  alt: string;
}) => (
  <div className="relative w-full max-w-[400px] h-[180px] rounded-xl bg-primary text-light overflow-hidden ">
    <Image src={image} alt={alt} fill className="object-cover opacity-50" />
    <div className="relative z-10 flex h-full w-full items-center justify-center flex-col text-center p-4">
      <span className="font-medium text-xl md:text-2xl mb-2">
        {category.title}
      </span>
      <p className="font-light text-sm md:text-[17px] leading-tight text-center">
        {category.description}
      </p>
    </div>
  </div>
);

function Category() {
  const lang = useLang();
  const t = getI18n(lang);

  return (
    <section className="mt-44 px-4 md:px-8">
      <div className="text-deep-blue flex items-center gap-4 md:gap-8 lg:gap-12 justify-center">
        <Image
          src="/decorations/star-services.svg"
          alt="decoración estrella"
          width={80}
          height={80}
          className="w-10 md:w-14 hidden md:block"
        />
        <div className="flex flex-col justify-center items-center max-w-[850px] text-center">
          <h2 className="text-2xl md:text-[40px] lg:text-5xl font-black flex justify-center md:mb-4 text-center leading-none">
            {t.category.title}
          </h2>
          <p className="text-sm md:text-base lg:text-xl xl:text-2xl font-light leading-none mt-2 md:mt-4">
            {t.category.subtitle}
          </p>
        </div>
        <Image
          src="/decorations/star-services.svg"
          alt="decoración estrella"
          width={80}
          height={80}
          className="w-10 md:w-14 rotate-180 hidden md:block"
        />
      </div>

      <article className="justify-center items-center flex flex-col gap-8 md:gap-12 mt-8 md:mt-14">
        {/* Primera fila - 2 tarjetas */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-18 w-full justify-center">
          {t.category.categories.slice(0, 2).map((category, index) => (
            <CategoryCard
              key={index}
              category={category}
              image={categoryImages[index] || ""}
              alt={category.title}
            />
          ))}
        </div>

        {/* Segunda fila - 2 tarjetas */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-18 w-full justify-center">
          {t.category.categories.slice(2, 4).map((category, index) => (
            <CategoryCard
              key={index + 2}
              category={category}
              image={categoryImages[index + 2] || ""}
              alt={category.title}
            />
          ))}
        </div>

        {/* Tercera fila - 1 tarjeta centrada */}
        <div className="flex justify-center w-full">
          {t.category.categories[4] && categoryImages[4] && (
            <CategoryCard
              category={t.category.categories[4]}
              image={categoryImages[4]}
              alt={t.category.categories[4].title}
            />
          )}
        </div>
      </article>
    </section>
  );
}

export default Category;
