<script setup lang="ts">
import AboutUs from '@/components/home/AboutUs.vue';
import Hero from '@/components/home/Hero.vue';
import Services from '@/components/home/Services.vue';
import WhyUs from '@/components/home/Why.vue';
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

        <!--Why section-->
        <WhyUs />

        <!--About section-->
        <AboutUs />
    </MainLayout>
</template>
