<script setup lang="ts">
const slots = useSlots();
</script>

<template>
    <UFooter>
        <template
            v-if="slots.left"
            #left>
            <slot name="left" />
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
