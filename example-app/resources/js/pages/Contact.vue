<script setup>
import ContactPage from '@/components/contact/ContactForm.vue';
import InnerHero from '@/components/contact/InnerHero.vue';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
    <MainLayout>
        <!--Inner Hero-->
        <InnerHero />

        <!--Contact Page-->
        <ContactPage />
    </MainLayout>
</template>
