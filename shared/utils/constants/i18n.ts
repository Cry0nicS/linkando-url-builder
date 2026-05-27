import type {NuxtI18nOptions} from "@nuxtjs/i18n";
import type {LocaleCodes} from "../types";

/**
 * Mapping of route names (not file paths) to their localized paths.
 * E.g. pages/privacy/imprint.vue -> route name: 'privacy-imprint'
 */
export const i18nPages = {
    "privacy/index": {
        en: "/privacy",
        de: "/datenschutz"
    },
    "privacy/imprint": {
        en: "/privacy/imprint",
        de: "/privacy/impressum"
    },
    "privacy/contact": {
        en: "/privacy/contact",
        de: "/privacy/kontakt"
    }
} as const satisfies NuxtI18nOptions["pages"];

export const LOCALE_CODES = ["en", "de"] as const;
export const DEFAULT_LOCALE: LocaleCodes = "en";

export const LOCALE_META = {
    en: {
        name: "English",
        code: "en",
        iso: "en-US"
    },
    de: {
        name: "Deutsch",
        code: "de",
        iso: "de-DE"
    }
} as const;
