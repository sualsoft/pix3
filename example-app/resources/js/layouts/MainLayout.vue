<script setup>
import CTA from '@/Components/CTA.vue';
import Footer from '@/Components/Footer.vue';
import Navbar from '@/Components/Navbar.vue';
</script>

<template>
    <div>
        <Navbar />

        <main class="pt-24">
            <slot />
            <CTA />
            <Footer />
        </main>
    </div>
</template>
