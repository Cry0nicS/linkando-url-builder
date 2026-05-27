<script setup lang="ts">
const {headerDesktop, headerMobile} = useNavItems();
</script>
<template>
    <UHeader
        class="h-17.5"
        mode="modal"
        :menu="{transition: true}"
        :ui="{
            body: 'flex justify-center text-2xl'
        }">
        <template #title>
            <ColorScheme
                placeholder="Logo"
                tag="span">
                <ClientOnly>
                    <NuxtLink to="/">
                        <AppLogo class="h-10 w-auto" />
                    </NuxtLink>
                </ClientOnly>
            </ColorScheme>
        </template>

        <UNavigationMenu :items="headerDesktop" />

        <template #right>
            <NavThemeToggle />
            <NavLanguageSelector />
        </template>

        <template #body>
            <UNavigationMenu
                :items="headerMobile"
                orientation="vertical"
                class="-mx-2.5" />
        </template>
    </UHeader>
</template>
