<script setup lang="ts">
const colorMode = useColorMode();

const logoSrc = computed(() => {
    return colorMode.value === "dark" ? "/dark-logo.svg" : "/light-logo.svg";
});
</script>

<template>
    <img
        :src="logoSrc"
        alt="Blue Desert Learning and Retreats logo" />
</template>
