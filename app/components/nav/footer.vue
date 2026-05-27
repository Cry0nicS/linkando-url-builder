<script setup lang="ts">
const slots = useSlots();

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
    <UFooter>
        <template #left>
            <p class="text-muted text-sm">Copyright © {{ currentYear }}</p>
        </template>
        <template
            v-if="slots.navigation"
            #default>
            <slot name="navigation" />
        </template>
        <template
            v-if="slots.social"
            #right>
            <slot name="social" />
        </template>
    </UFooter>
</template>
