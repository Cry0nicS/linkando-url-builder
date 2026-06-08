<script setup lang="ts">
const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
    <div class="flex min-h-svh flex-col">
        <NavHeader />

        <UMain class="grow">
            <UContainer>
                <slot />
            </UContainer>
        </UMain>

        <ClientOnly>
            <USeparator
                orientation="horizontal"
                :avatar="{
                    src: '/favicon.ico',
                    loading: 'lazy'
                }" />
        </ClientOnly>

        <NavFooter>
            <template #navigation>
                <p class="text-muted text-sm">Copyright © {{ currentYear }}</p>
            </template>
        </NavFooter>
    </div>
</template>
