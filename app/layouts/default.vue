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

        <NavFooter />
    </div>
</template>
