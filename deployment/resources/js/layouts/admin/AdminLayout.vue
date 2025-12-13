<script setup lang="ts">
interface Props {
    title?: string;
}

withDefaults(defineProps<Props>(), {
    title: 'Admin Panel',
});
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <header class="bg-white shadow">
            <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 class="text-2xl font-bold tracking-tight text-gray-900">
                    {{ title }}
                </h1>
            </div>
        </header>
        <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <slot />
            </div>
        </main>
    </div>
</template>
