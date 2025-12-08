<script setup>
import CtaSection from '@/components/CtaSection.vue';
import Footer from '@/Components/Footer.vue';
import Navbar from '@/Components/Navbar.vue';
</script>

<template>
    <div>
        <Navbar />

        <main class="pt-24">
            <slot />
            <CtaSection />
            <Footer />
        </main>
    </div>
</template>
