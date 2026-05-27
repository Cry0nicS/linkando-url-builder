<script setup lang="ts">
import * as locales from "@nuxt/ui/locale";
import {extractLocaleIso} from "#shared/utils/helpers";

const {themedFavicon} = useUtils();
const {locale} = useI18n();

const lang = computed(() => locales[locale.value].code);

useHead({
    meta: [{name: "viewport", content: "width=device-width, initial-scale=1"}],
    link: [{rel: "icon", href: "/favicon.ico"}],
    htmlAttrs: {
        lang: "en"
    }
});

const title = "Blue Desert";
const description = "Learning & Retreats";

useSeoMeta({
    ogLocale: () => extractLocaleIso(locale.value),
    ogType: "website",
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
    twitterCard: "summary_large_image"
});

useHead({
    link: [{rel: "icon", href: themedFavicon}],
    htmlAttrs: {
        lang
    }
});
</script>

<template>
    <UApp :locale="locales[locale]">
        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>
