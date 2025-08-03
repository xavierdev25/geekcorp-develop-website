"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useLang, setLanguage } from "@/i18n/client";
import type { Language } from "@/i18n/index";

const LANGS: { code: Language; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

const LangSwitcher = () => {
  const [open, setOpen] = useState(false);
  const lang = useLang();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    setOpen(false);
  };

  // Cerrar dropdown al hacer clic fuera o presionar Esc
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="relative inline-block text-deep-blue" ref={dropdownRef}>
      <button
        id="lang-select-btn"
        className="hover:text-orange transition-colors duration-300 flex items-center gap-1 px-3 py-2 rounded focus:outline-none text-xl"
        type="button"
        onClick={() => setOpen((v) => !v)}
      >
        {LANGS.find((l) => l.code === lang)?.label}
        <Image
          id="lang-dropdown-arrow"
          src="/icons/chevron-down.svg"
          alt="chevron-down"
          width={24}
          height={24}
          className={`w-6 h-6 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          id="lang-dropdown"
          className="absolute top-full left-0 mt-2 w-24 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
        >
          {LANGS.map((l) => (
            <button
              key={l.code}
              className="block w-full text-left px-4 py-2 text-lg hover:bg-gray-50 hover:text-orange transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
              onClick={() => handleLanguageChange(l.code)}
              disabled={lang === l.code}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
