<script setup lang="ts">
const {themedIcon} = useUtils();
const {footer: navItems} = useNavItems();
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
                    src: themedIcon,
                    ui: {
                        image: 'object-fill'
                    }
                }" />
        </ClientOnly>

        <NavFooter>
            <template #navigation>
                <UNavigationMenu :items="navItems" />
            </template>
            <template #social>
                <NavThemeToggle>
                    <template #dark-mode>
                        <span>Light mode</span>
                    </template>
                    <template #light-mode>
                        <span>Dark mode</span>
                    </template>
                </NavThemeToggle>
                <NavLanguageSelector />
            </template>
        </NavFooter>
    </div>
</template>
