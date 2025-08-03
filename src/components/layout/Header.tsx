"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import LangSwitcher from "./LangSwitcher";
import { getI18n } from "@/i18n/index";
import { useLang } from "@/i18n/client";
import {
  SOCIAL_MEDIA,
  CLIENT_ACCESS_IDS,
  CLIENT_ACCESS_HREFS,
} from "@/constants";
import type { ClientAccessOption } from "@/types";

const Header = () => {
  const lang = useLang();
  const t = getI18n(lang);
  const [clientAccessOpen, setClientAccessOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const clientAccessOptions: ClientAccessOption[] =
    t.header.clientAccessOptions.map((label, idx) => {
      const id = CLIENT_ACCESS_IDS[idx];
      const href = CLIENT_ACCESS_HREFS[idx];

      if (!id || !href) {
        console.warn(`Missing client access option at index ${idx}`);
        return {
          id: `fallback-${idx}`,
          label,
          href: "#",
        };
      }

      return {
        id,
        label,
        href,
      };
    });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const dropdownBtn = document.getElementById("client-access-btn");
      const dropdown = document.getElementById("client-access-dropdown");
      const mobileMenu = document.getElementById("mobile-menu");
      const mobileMenuBtn = document.getElementById("mobile-menu-btn");

      if (
        dropdownBtn &&
        dropdown &&
        !dropdownBtn.contains(target) &&
        !dropdown.contains(target)
      ) {
        setClientAccessOpen(false);
      }
      if (
        mobileMenu &&
        mobileMenuBtn &&
        !mobileMenu.contains(target) &&
        !mobileMenuBtn.contains(target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    // Cerrar dropdown al presionar Escape
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setClientAccessOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      id="header"
      className="flex justify-between items-center z-50 sticky pt-8 w-full"
    >
      <a href="/" id="logo">
        <Image
          src="/assets/logo-header.webp"
          alt="logo"
          width={120}
          height={48}
          className="w-auto h-12 lg:h-10 object-contain"
          priority
        />
      </a>
      {/* Botón hamburguesa solo en móviles */}
      <button
        id="mobile-menu-btn"
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 ml-2 focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Abrir menú"
      >
        <span
          className={`block w-7 h-1 bg-deep-blue rounded transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`block w-7 h-1 bg-deep-blue rounded my-1 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block w-7 h-1 bg-deep-blue rounded transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>
      {/* Menú principal: oculto en móviles, visible en md+ */}
      <div
        id="menu"
        className="space-x-10 text-xl  text-deep-blue hidden lg:flex"
      >
        <a className="hover:text-orange transition-colors duration-300" href="">
          {t.header.home}
        </a>
        <a className="hover:text-orange transition-colors duration-300" href="">
          {t.header.about}
        </a>
        <a className="hover:text-orange transition-colors duration-300" href="">
          {t.header.services}
        </a>
        <div className="relative inline-block">
          <button
            id="client-access-btn"
            className="hover:text-orange transition-colors duration-300 flex items-center gap-1"
            onClick={(e) => {
              e.preventDefault();
              setClientAccessOpen(!clientAccessOpen);
            }}
          >
            {t.header.clientAccess}
            <Image
              id="dropdown-arrow"
              src="/icons/chevron-down.svg"
              alt="chevron-down"
              width={24}
              height={24}
              className={`w-6 h-6 transition-transform duration-300 ${
                clientAccessOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            id="client-access-dropdown"
            className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 transform ${
              clientAccessOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }`}
          >
            {clientAccessOptions.map((option) => (
              <a
                key={option.id}
                href={option.href}
                className="block px-4 py-3 text-lg text-deep-blue hover:bg-gray-50 hover:text-orange transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
              >
                {option.label}
              </a>
            ))}
          </div>
        </div>
        <a className="hover:text-orange transition-colors duration-300" href="">
          {t.header.contact}
        </a>
      </div>
      {/* Menú móvil: visible solo en móviles */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 lg:hidden transition-all duration-300 ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        <nav
          className={`absolute top-0 right-0 w-64 h-full bg-white shadow-lg flex flex-col pt-24 px-8 space-y-6 text-lg text-deep-blue transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Botón X para cerrar el menú */}
          <button
            className="absolute top-4 right-4 text-4xl text-deep-blue focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            &times;
          </button>
          <a
            className="hover:text-orange transition-colors duration-300"
            href=""
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.header.home}
          </a>
          <a
            className="hover:text-orange transition-colors duration-300"
            href=""
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.header.about}
          </a>
          <a
            className="hover:text-orange transition-colors duration-300"
            href=""
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.header.services}
          </a>
          <div className="relative">
            <button
              className="hover:text-orange transition-colors duration-300 flex items-center gap-1 w-full"
              onClick={() => setClientAccessOpen(!clientAccessOpen)}
            >
              {t.header.clientAccess}
              <Image
                src="/icons/chevron-down.svg"
                alt="chevron-down"
                width={24}
                height={24}
                className={`w-6 h-6 transition-transform duration-300 ${clientAccessOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`absolute left-0 mt-2 w-48 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 transform z-50 ${
                clientAccessOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {clientAccessOptions.map((option) => (
                <a
                  key={option.id}
                  href={option.href}
                  className="block px-4 py-3 text-lg text-deep-blue hover:bg-gray-50 hover:text-orange transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {option.label}
                </a>
              ))}
            </div>
          </div>
          <a
            className="hover:text-orange transition-colors duration-300"
            href=""
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.header.contact}
          </a>
          <div className="flex gap-6 pt-4">
            {SOCIAL_MEDIA.map((social) => (
              <a
                key={social.id_social}
                href={social.href || "#"}
                id={social.id_social}
              >
                <Image
                  src={social.icon_social}
                  alt={social.alt_social}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  style={{ color: "#335A83" }}
                />
              </a>
            ))}
          </div>
          <div className="pt-4">
            <LangSwitcher />
          </div>
        </nav>
      </div>
      {/* Redes sociales y selector de idioma: ocultos en móviles, visibles en md+ */}
      <div id="socials" className="hidden xl:flex gap-6">
        {SOCIAL_MEDIA.map((social) => (
          <a
            key={social.id_social}
            href={social.href || "#"}
            id={social.id_social}
          >
            <Image
              src={social.icon_social}
              alt={social.alt_social}
              width={24}
              height={24}
              className="w-6 h-6"
              style={{ color: "#335A83" }}
            />
          </a>
        ))}
      </div>
      <div className="relative inline-block text-deep-blue hidden lg:block">
        <LangSwitcher />
      </div>
    </header>
  );
};

export default Header;
