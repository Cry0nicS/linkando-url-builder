<script setup lang="ts">
import type {FormSubmitEvent, RadioGroupItem} from "@nuxt/ui";
import {z} from "zod";

const schema = z.object({
    owner: z.enum(["ronny", "ingo", "ronald"], {
        error: "Please select an owner."
    }),
    firstName: z.string().trim().min(1, "First name is required."),
    lastName: z.string().trim().min(1, "Last name is required.")
});

type FormState = z.output<typeof schema>;

const state = reactive<Partial<FormState>>({
    owner: undefined,
    firstName: undefined,
    lastName: undefined
});

const ownerItems = ref<RadioGroupItem[]>([
    {
        label: "Ronny Koppitz",
        description: "Generate a link for Ronny Koppitz.",
        value: "ronny"
    },
    {
        label: "Ingo Bollow",
        description: "Generate a link for Ingo Bollow.",
        value: "ingo"
    },
    {
        label: "Ronald Krahl",
        description: "Generate a link for Ronald Krahl.",
        value: "ronald"
    }
]);

const ownerBaseUrls: Record<FormState["owner"], string> = {
    ronny: "https://ronny-koppitz-ergo.linkando.com/webplay?id=jaehrliche-pruefung-ronny-koppitz",
    ingo: "https://ronny-koppitz-ergo.linkando.com/webplay?id=jaehrliche-pruefung-ingo-bollow",
    ronald: "https://ronny-koppitz-ergo.linkando.com/webplay?id=jaehrliche-pruefung-ronald-krahl"
};

const toast = useToast();
const generatedUrl = ref("");

const hasGeneratedUrl = computed(() => generatedUrl.value.length > 0);

function buildCustomUrl(data: FormState) {
    const url = new URL(ownerBaseUrls[data.owner]);

    url.searchParams.set("f_Vorname", data.firstName);
    url.searchParams.set("f_Nachname", data.lastName);

    return url.toString();
}

async function onSubmit(event: FormSubmitEvent<FormState>) {
    generatedUrl.value = buildCustomUrl(event.data);

    toast.add({
        title: "Link generated",
        description: "The personalized URL is ready to copy.",
        color: "success"
    });
}

async function copyGeneratedUrl() {
    if (!generatedUrl.value) {
        return;
    }

    await navigator.clipboard.writeText(generatedUrl.value);

    toast.add({
        title: "Copied",
        description: "The URL has been copied to your clipboard.",
        color: "success"
    });
}

function resetForm() {
    state.owner = undefined;
    state.firstName = undefined;
    state.lastName = undefined;
    generatedUrl.value = "";
}
</script>

<template>
    <UForm
        :schema="schema"
        :state="state"
        class="space-y-6"
        @submit="onSubmit">
        <UFormField
            label="Owner"
            name="owner"
            required
            description="Choose which personalized Linkando base URL should be used.">
            <URadioGroup
                v-model="state.owner"
                :items="ownerItems"
                variant="card"
                :ui="{
                    fieldset: 'grid gap-3 sm:grid-cols-3',
                    item: 'items-start'
                }" />
        </UFormField>

        <div class="grid gap-4 sm:grid-cols-2">
            <UFormField
                label="First Name"
                name="firstName"
                required>
                <UInput
                    v-model="state.firstName"
                    placeholder="Max"
                    size="lg"
                    class="w-full" />
            </UFormField>

            <UFormField
                label="Last Name"
                name="lastName"
                required>
                <UInput
                    v-model="state.lastName"
                    placeholder="Mustermann"
                    size="lg"
                    class="w-full" />
            </UFormField>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
            <UButton
                type="submit"
                size="lg"
                icon="i-lucide-link">
                Generate Link
            </UButton>

            <UButton
                type="button"
                color="neutral"
                variant="soft"
                size="lg"
                icon="i-lucide-refresh-cw"
                @click="resetForm">
                Reset Form
            </UButton>
        </div>

        <UAlert
            v-if="hasGeneratedUrl"
            color="success"
            variant="subtle"
            title="Your personalized URL is ready"
            description="Copy this link and send it to the customer."
            icon="i-lucide-check-circle">
            <template #description>
                <div class="mt-4 space-y-3">
                    <UInput
                        :model-value="generatedUrl"
                        readonly
                        size="lg"
                        class="w-full" />

                    <div class="flex flex-col gap-2 sm:flex-row">
                        <UButton
                            type="button"
                            color="success"
                            icon="i-lucide-copy"
                            @click="copyGeneratedUrl">
                            Copy Link
                        </UButton>

                        <UButton
                            type="button"
                            color="neutral"
                            variant="ghost"
                            icon="i-lucide-refresh-cw"
                            @click="resetForm">
                            Generate another link
                        </UButton>
                    </div>
                </div>
            </template>
        </UAlert>
    </UForm>
</template>
