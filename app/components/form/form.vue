<script setup lang="ts">
import type {FormSubmitEvent, RadioGroupItem} from "@nuxt/ui";
import {z} from "zod";
import GeneratedContentPanel from "~/components/form/generated-content-panel.vue";

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

const ownerNames: Record<FormState["owner"], string> = {
    ronny: "Ronny Koppitz",
    ingo: "Ingo Bollow",
    ronald: "Ronald Krahl"
};

const ownerBaseUrls: Record<FormState["owner"], string> = {
    ronny: "https://ronny-koppitz-ergo.linkando.com/webplay?id=jaehrliche-pruefung-ronny-koppitz",
    ingo: "https://ronny-koppitz-ergo.linkando.com/webplay?id=jaehrliche-pruefung-ingo-bollow",
    ronald: "https://ronny-koppitz-ergo.linkando.com/webplay?id=jaehrliche-pruefung-ronald-krahl"
};

const toast = useToast();

const generatedUrl = ref("");
const generatedEmail = ref("");

const hasGeneratedResult = computed(
    () => generatedUrl.value.length > 0 && generatedEmail.value.length > 0
);

function buildCustomUrl(data: FormState) {
    const url = new URL(ownerBaseUrls[data.owner]);

    url.searchParams.set("f_Vorname", data.firstName);
    url.searchParams.set("f_Nachname", data.lastName);

    return url.toString();
}

function buildEmailTemplate(data: FormState, link: string) {
    return `Hallo ${data.firstName} ${data.lastName},

Ihre Lebenssituation kann sich verändern – und genau deshalb ist eine regelmäßige Prüfung Ihrer bestehenden Absicherung sinnvoll.

Ich möchte Sie daher bitten, das kurze Formular zur jährlichen Prüfung auszufüllen. Das dauert nur ca. 5 Minuten und Sie benötigen dafür keine Unterlagen.

Hier können Sie direkt starten:

${link}

Mit Ihren Angaben helfen Sie mir, Ihre aktuelle Situation besser einzuschätzen und zu prüfen, ob Ihre Absicherung weiterhin gut zu Ihnen passt.

Vielen Dank für Ihre Unterstützung.

Freundliche Grüße
${ownerNames[data.owner]}`;
}

async function onSubmit(event: FormSubmitEvent<FormState>) {
    generatedUrl.value = buildCustomUrl(event.data);
    generatedEmail.value = buildEmailTemplate(event.data, generatedUrl.value);

    toast.add({
        title: "Content generated",
        description: "The email template and personalized URL are ready to copy.",
        color: "success"
    });
}

async function copyToClipboard(value: string, title: string, description: string) {
    if (!value) {
        return;
    }

    await navigator.clipboard.writeText(value);

    toast.add({
        title,
        description,
        color: "success"
    });
}

function copyGeneratedUrl() {
    return copyToClipboard(
        generatedUrl.value,
        "Link copied",
        "The URL has been copied to your clipboard."
    );
}

function copyGeneratedEmail() {
    return copyToClipboard(
        generatedEmail.value,
        "Email copied",
        "The email template has been copied to your clipboard."
    );
}

function resetForm() {
    state.owner = undefined;
    state.firstName = undefined;
    state.lastName = undefined;
    generatedUrl.value = "";
    generatedEmail.value = "";
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
                Generate Content
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

        <GeneratedContentPanel
            v-if="hasGeneratedResult"
            :generated-email="generatedEmail"
            :generated-url="generatedUrl"
            @copy-email="copyGeneratedEmail"
            @copy-url="copyGeneratedUrl"
            @reset="resetForm" />
    </UForm>
</template>
