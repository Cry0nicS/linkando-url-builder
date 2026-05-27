<template>
    <div>
        <UPageHero
            title="Ready to build the future"
            description="Please wait"
            :links="[
                {
                    label: 'Get started',
                    to: '/',
                    target: '_blank',
                    trailingIcon: 'i-lucide-arrow-right',
                    size: 'xl'
                },
                {
                    label: 'Check this out',
                    to: '/',
                    target: '_blank',
                    icon: 'i-lucide-eye',
                    size: 'xl',
                    color: 'neutral',
                    variant: 'subtle'
                }
            ]" />
    </div>
</template>
