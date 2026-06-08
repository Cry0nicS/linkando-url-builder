export default defineNuxtConfig({
    colorMode: false,
    compatibilityDate: "2025-07-15",
    css: ["~/assets/css/main.css"],
    devtools: {enabled: true},
    eslint: {
        config: {
            standalone: false // <--- Required for Antfu ESLint config.
        }
    },
    image: {
        format: ["webp"],
        provider: "ipx",
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
    modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/image"],
    routeRules: {
        "/": {prerender: true}
    },
    typescript: {
        strict: true,
        typeCheck: true
    },
    ui: {
        colorMode: true
    }
});
