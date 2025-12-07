<script setup lang="ts">
import Hero from '@/components/home/Hero.vue';
import Services from '@/components/home/Services.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Head } from '@inertiajs/vue3';

// Define any props your page might need
interface Props {
    title?: string;
}

withDefaults(defineProps<Props>(), {
    title: 'Home',
});
</script>

<template>
    <MainLayout>
        <Head title="Home" />

        <!-- Head Section -->
        <Hero />

        <!-- Service Section -->
        <Services />
    </MainLayout>
</template>
