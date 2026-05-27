export function useUtils() {
    const colorMode = useColorMode();

    const themedFavicon = computed(() =>
        colorMode.value === "dark" ? "/favicon-light.ico" : "/favicon-dark.ico"
    );

    const themedIcon = computed(() =>
        colorMode.value === "dark" ? "/dark-icon.svg" : "/light-icon.svg"
    );

    return {themedFavicon, themedIcon};
}
