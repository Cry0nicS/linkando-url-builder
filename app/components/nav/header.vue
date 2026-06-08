<template>
    <UHeader
        class="h-17.5"
        :toggle="false">
        <template #title>
            <ClientOnly>
                <NuxtLink to="/">
                    <AppLogo class="h-10 w-auto" />
                </NuxtLink>
            </ClientOnly>
        </template>
    </UHeader>
</template>
