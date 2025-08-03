import type { SocialMedia } from "@/types";

export const SOCIAL_MEDIA: SocialMedia[] = [
    {
        id_social: "instagram",
        icon_social: "/icons/socials/header/instagram.svg",
        alt_social: "instagram",
        href: "https://instagram.com/geekcorp",
    },
    {
        id_social: "whatsapp",
        icon_social: "/icons/socials/header/whatsapp.svg",
        alt_social: "whatsapp",
        href: "https://wa.me/1234567890",
    },
    {
        id_social: "telegram",
        icon_social: "/icons/socials/header/telegram.svg",
        alt_social: "telegram",
        href: "https://t.me/geekcorp",
    },
    {
        id_social: "facebook",
        icon_social: "/icons/socials/header/facebook.svg",
        alt_social: "facebook",
        href: "https://facebook.com/geekcorp",
    },
    {
        id_social: "tiktok",
        icon_social: "/icons/socials/header/tiktok.svg",
        alt_social: "tiktok",
        href: "https://tiktok.com/@geekcorp",
    },
];

export const CLIENT_ACCESS_IDS = ["portal", "dashboard", "reports", "support", "drive-cloud"] as const;
export const CLIENT_ACCESS_HREFS = [
    "/portal-cliente",
    "/dashboard",
    "/reportes",
    "/soporte",
    "/drive-cloud",
] as const;
