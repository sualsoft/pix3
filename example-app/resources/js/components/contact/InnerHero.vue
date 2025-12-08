<script setup>
// We define 'props' so you can pass different data to this component
defineProps({
    title: {
        type: String,
        required: true,
        default: 'Nous Contacter',
    },

    backgroundImage: {
        type: String,
        default: '/images/hero-bg-1765171683.png',
    },
});
</script>

<template>
    <div
        class="hero-section"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
        <div class="hero-overlay"></div>

        <div class="hero-content">
            <h2 class="hero-title">{{ title }}</h2>
        </div>
    </div>
</template>

<style scoped>
.hero-section {
    position: relative;
    width: 100%;
    height: 400px; /* You can adjust the height here */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}

/* This creates the dark tint over the image */
.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    padding: 0 20px;
    max-width: 800px;
}

.hero-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
    font-family: sans-serif;
}

.hero-subtitle {
    font-size: 1.1rem;
    font-weight: 400;
    opacity: 0.9;
    font-family: sans-serif;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .hero-section {
        height: 300px;
    }

    .hero-title {
        font-size: 2rem;
    }
}
</style>
