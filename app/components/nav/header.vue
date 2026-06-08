<template>
    <UHeader
        class="h-17.5"
        mode="modal"
        :menu="{transition: true}"
        :ui="{
            body: 'flex justify-center text-2xl'
        }">
        <template #title>
            <ClientOnly>
                <NuxtLink to="/">
                    <AppLogo class="h-10 w-auto" />
                </NuxtLink>
            </ClientOnly>
        </template>
    </UHeader>
</template>
