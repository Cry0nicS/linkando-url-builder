import type {LOCALE_CODES, LOCALE_META} from "../constants";

export type LocaleCodes = (typeof LOCALE_CODES)[number];
export type LocaleMeta = (typeof LOCALE_META)[keyof typeof LOCALE_META];
