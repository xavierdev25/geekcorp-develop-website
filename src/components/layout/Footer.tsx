"use client";
import Image from "next/image";
import { getI18n } from "@/i18n/index";
import { useLang } from "@/i18n/client";

const Footer = () => {
  const lang = useLang();
  const t = getI18n(lang);

  const socials = [
    {
      id_social: "instagram",
      icon_social: "/icons/socials/footer/instagram.svg",
      alt_social: "instagram",
      href_social: "https://www.instagram.com/geekcorp.pe/",
    },
    {
      id_social: "whatsapp",
      icon_social: "/icons/socials/footer/whatsapp.svg",
      alt_social: "whatsapp",
      href_social: "https://wa.me/51966761455",
    },
    {
      id_social: "telegram",
      icon_social: "/icons/socials/footer/telegram.svg",
      alt_social: "telegram",
      href_social: "https://t.me/geekcorp_pe",
    },
    {
      id_social: "facebook",
      icon_social: "/icons/socials/footer/facebook.svg",
      alt_social: "facebook",
      href_social: "https://www.facebook.com/geekcorp.pe/",
    },
    {
      id_social: "tiktok",
      icon_social: "/icons/socials/footer/tiktok.svg",
      alt_social: "tiktok",
      href_social: "https://www.tiktok.com/@geekcorp.pe",
    },
  ];

  return (
    <footer className="bg-deep-blue px-16 py-12 flex flex-col md:flex-row items-center justify-between">
      <div className="space-y-4 flex flex-col xl:flex-row items-center md:items-start">
        <Image
          src="/assets/logo-footer.webp"
          alt="logo"
          width={120}
          height={40}
          className="w-auto h-10"
        />
        <span className="text-sky italic">{t.footer.slogan}</span>
      </div>
      <div id="socials" className="flex gap-6 mt-12 md:mt-0">
        {socials.map((social) => (
          <a
            key={social.id_social}
            href={social.href_social}
            id={social.id_social}
          >
            <Image
              src={social.icon_social}
              alt={social.alt_social}
              width={32}
              height={32}
              className="w-8 h-8"
              style={{ color: "#FFFFFF" }}
            />
          </a>
        ))}
      </div>
      <div className="flex flex-col xl:flex-row xl:justify-end items-center md:items-end mt-12 md:mt-0">
        <span className="font-medium text-white text-lg text-center md:text-left">
          {t.footer.location}
        </span>
        <span className="text-sky font-medium text-lg">{t.footer.phones}</span>
        <span className="mt-4 font-light text-white text-sm text-center md:text-left">
          {t.footer.copyright}
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
