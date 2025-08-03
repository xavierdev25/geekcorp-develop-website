"use client";

import { useSyncExternalStore } from "react";
import type { Language } from "./index";

export function getCurrentLang(): Language {
    if (typeof window !== "undefined") {
        return (window.localStorage.getItem("lang") as Language) || "es";
    }
    return "es";
}

export function useLang(): Language {
    return useSyncExternalStore(
        (cb) => {
            window.addEventListener("langchange", cb);
            return () => window.removeEventListener("langchange", cb);
        },
        getCurrentLang,
        getCurrentLang
    );
}

export function setLanguage(lang: Language): void {
    if (typeof window !== "undefined") {
        window.localStorage.setItem("lang", lang);
        window.dispatchEvent(new Event("langchange"));
    }
} 