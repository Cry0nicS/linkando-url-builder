import type {NavigationMenuItem} from "@nuxt/ui";
import {computed} from "vue";

export const useNavItems = () => {
    const {t, locale} = useI18n();
    const localePath = useLocalePath();

    const headerDesktop = computed<NavigationMenuItem[]>(() => {
        void locale.value;

        return [
            {
                label: t("pages.home"),
                to: localePath("/"),
                icon: "mdi:home-outline"
            },
            {
                label: t("pages.program"),
                to: localePath("/program"),
                icon: "mdi:clipboard-edit-outline"
            },
            {
                label: t("pages.contact"),
                to: localePath("/privacy/contact"),
                icon: "mdi:email-outline"
            },
            {
                label: t("pages.aboutUs"),
                to: localePath("/about-us"),
                icon: "mdi:card-account-details-outline"
            }
        ];
    });

    const headerMobile = computed<NavigationMenuItem[]>(() => {
        void locale.value;

        return [
            {
                label: t("pages.home"),
                to: localePath("/"),
                icon: "mdi:home-outline"
            },
            {
                label: t("pages.program"),
                to: localePath("/program"),
                icon: "mdi:clipboard-edit-outline"
            },
            {
                label: t("pages.contact"),
                to: localePath("/privacy/contact"),
                icon: "mdi:email-outline"
            },
            {
                label: t("pages.imprint"),
                to: localePath("/privacy/imprint"),
                icon: "mdi:information-outline"
            },
            {
                label: t("pages.privacy"),
                to: localePath("/privacy"),
                icon: "mdi:shield-account-outline"
            },
            {
                label: t("pages.aboutUs"),
                to: localePath("/aboud-us"),
                icon: "mdi:card-account-details-outline"
            }
        ];
    });

    const footer = computed<NavigationMenuItem[]>(() => {
        void locale.value;

        return [
            {
                label: t("pages.program"),
                to: localePath("/program"),
                icon: "mdi:clipboard-edit-outline"
            },
            {
                label: t("pages.contact"),
                to: localePath("/privacy/contact"),
                icon: "mdi:email-outline"
            },
            {
                label: t("pages.aboutUs"),
                to: localePath("/about-us"),
                icon: "mdi:card-account-details-outline"
            },
            {
                label: t("pages.imprint"),
                to: localePath("/privacy/imprint"),
                icon: "mdi:information-outline"
            },
            {
                label: t("pages.privacy"),
                to: localePath("/privacy"),
                icon: "mdi:shield-account-outline"
            }
        ];
    });

    return {footer, headerDesktop, headerMobile};
};
