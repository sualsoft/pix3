<script setup>
import CtaSection from '@/components/CtaSection.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
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
