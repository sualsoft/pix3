<script setup>
import Card from '@/components/drone/Card.vue';
import Detail from '@/components/drone/Details.vue';
import InnerHero from '@/components/drone/InnerHero.vue';
import Video from '@/components/drone/Video.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <MainLayout>
        <Head title="Drone" />

        <!-- Hero Section -->
        <InnerHero />

        <!-- Details Section -->
        <Detail />

        <!--Service section-->
        <Card />

        <!--Video Section-->
        <Video />
    </MainLayout>
</template>
