import type {LocaleCodes, LocaleMeta} from "#shared/utils/types";
import {LOCALE_META} from "#shared/utils/constants";

/**
 * Extracts and returns the locale code from a locale identifier or a locale metadata object.
 *
 * @param locale - The locale identifier (`LocaleCodes`) or locale metadata object (`LocaleMeta`).
 * @returns The locale code as a `LocaleCodes` string.
 */
export function extractLocaleCode(locale: LocaleCodes | LocaleMeta): LocaleCodes {
    return (typeof locale === "string" ? locale : locale.code) as LocaleCodes;
}

/**
 * Extracts and returns the ISO code for a given locale.
 *
 * @param locale - The locale code (`LocaleCodes`).
 * @returns The ISO code string (e.g., "en-US", "de-DE").
 */
export function extractLocaleIso(locale: LocaleCodes): string {
    return LOCALE_META[locale].iso;
}
