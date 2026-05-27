// https://nuxt.com/docs/api/configuration/nuxt-config
import {DEFAULT_LOCALE, i18nPages} from "./shared/utils/constants";

export default defineNuxtConfig({
    colorMode: {
        fallback: "light",
        preference: "system"
    },
    compatibilityDate: "2025-07-15",
    css: ["~/assets/css/main.css"],
    devtools: {enabled: true},
    eslint: {
        config: {
            standalone: false // <--- Required for Antfu ESLint config.
        }
    },
    i18n: {
        // Disable custom route with page components.
        customRoutes: "config",
        defaultLocale: DEFAULT_LOCALE,
        detectBrowserLanguage: {
            cookieKey: "i18n_redirected",
            redirectOn: "root",
            useCookie: true
        },
        langDir: "locales/",
        locales: [
            {code: "en", file: "en.ts", iso: "en-US", name: "English"},
            {code: "de", file: "de.ts", iso: "de-DE", name: "Deutsch"}
        ],
        pages: i18nPages,
        strategy: "prefix_except_default"
    },
    image: {
        format: ["webp"],
        provider: "vercel",
        quality: 80,
        screens: {
            10: 10,
            icon: 20,
            icon2x: 40,
            lg: 1024,
            md: 768,
            sm: 640,
            xl: 1280
        }
    },
    modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/image", "@nuxtjs/i18n", "@nuxtjs/seo"],
    ogImage: {
        enabled: false
    },
    routeRules: {
        "/": {prerender: true}
    },
    runtimeConfig: {
        mailgunBaseUrl: process.env.NUXT_MAILGUN_BASE_URL || "",
        mailgunKey: process.env.NUXT_MAILGUN_KEY || "",
        public: {
            nodeEnv: process.env.NUXT_PUBLIC_NODE_ENV || "development"
        }
    },
    site: {
        description: "Welcome to Blue Desert.",
        name: "Blue desert",
        url: "https://blue-desert.com"
    },
    sitemap: {
        zeroRuntime: true
    },
    typescript: {
        strict: true,
        typeCheck: true
    },
    ui: {
        colorMode: true
    }
});
