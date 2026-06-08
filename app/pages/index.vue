<template>
    <div>
        <UPageHero
            title="Generiere eine personalisierte Linkando-URL"
            description="Wähle den Inhaber aus, gib den Kundennamen ein und kopiere dann den generierten Link."
            :ui="{container: 'max-w-6xl'}" />
        <UCard
            id="contact-form"
            variant="soft"
            class="mx-auto max-w-3xl"
            :ui="{
                root: 'ring ring-default/70 shadow-sm',
                body: 'space-y-6'
            }">
            <template #header>
                <div class="space-y-1">
                    <p class="text-primary text-sm font-medium">Link-Generator</p>
                </div>
            </template>

            <Form />
        </UCard>
    </div>
</template>
