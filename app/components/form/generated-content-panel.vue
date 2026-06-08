<script setup lang="ts">
defineProps<{
    generatedEmail: string;
    generatedUrl: string;
}>();

const emit = defineEmits<{
    copyEmail: [];
    copyUrl: [];
    reset: [];
}>();
</script>

<template>
    <div class="space-y-4">
        <UAlert
            color="success"
            variant="subtle"
            title="Email template is ready"
            icon="i-lucide-mail-check">
            <template #description>
                <div class="mt-4 space-y-3">
                    <UTextarea
                        :model-value="generatedEmail"
                        readonly
                        autoresize
                        :rows="12"
                        size="lg"
                        class="w-full font-mono text-sm" />

                    <UButton
                        type="button"
                        color="success"
                        icon="i-lucide-copy"
                        @click="emit('copyEmail')">
                        Copy Email Text
                    </UButton>
                </div>
            </template>
        </UAlert>

        <UAlert
            color="primary"
            variant="subtle"
            title="Personalized URL is ready"
            icon="i-lucide-link">
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
                            color="primary"
                            icon="i-lucide-copy"
                            @click="emit('copyUrl')">
                            Copy Link
                        </UButton>

                        <UButton
                            type="button"
                            color="neutral"
                            variant="ghost"
                            icon="i-lucide-refresh-cw"
                            @click="emit('reset')">
                            Generate another link
                        </UButton>
                    </div>
                </div>
            </template>
        </UAlert>
    </div>
</template>
