import es from "./es.json";
import en from "./en.json";

export type Language = "es" | "en";
export type Translation = typeof es;

export function getI18n(lang?: Language): Translation {
    if (typeof window !== "undefined") {
        lang = (window.localStorage.getItem("lang") as Language) || "es";
    } else {
        lang = lang || "es";
    }
    return lang === "en" ? en : es;
}

// Re-export client functions for convenience
export { useLang, setLanguage, getCurrentLang } from "./client"; 