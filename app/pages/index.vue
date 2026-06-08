<template>
    <div>
        <UPageHero
            title="Generate a personalized Linkando URL"
            description="Select the owner, enter the customer name, then copy the generated link."
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
                    <p class="text-primary text-sm font-medium">Link Generator</p>
                </div>
            </template>

            <Form />
        </UCard>
    </div>
</template>
