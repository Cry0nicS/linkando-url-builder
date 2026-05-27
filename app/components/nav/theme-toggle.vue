<script setup>
const colorMode = useColorMode();

const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set(_isDark) {
        colorMode.preference = _isDark ? "dark" : "light";
    }
});
</script>

<template>
    <ClientOnly v-if="!colorMode?.forced">
        <UButton
            :icon="isDark ? 'mdi:white-balance-sunny' : 'mdi:weather-night'"
            color="neutral"
            variant="ghost"
            size="xl"
            @click="isDark = !isDark" />

        <template #fallback>
            <div class="size-8" />
        </template>
    </ClientOnly>
</template>
