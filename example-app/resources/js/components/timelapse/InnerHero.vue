<script setup>
import { onMounted, ref } from 'vue';
const InnerHero = ref({});

const fetchHomeData = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();
        InnerHero.value = data;
    } catch (error) {
        console.error('Error loading home data:', error);
    }
};

onMounted(() => {
    fetchHomeData();
});
</script>

<template>
    <div
        v-if="InnerHero.drone_hero"
        class="hero-section"
        :style="{
            'background-image': `url(${InnerHero.timelapse_hero.bg_image})`,
        }"
    >
        <div class="hero-overlay"></div>

        <div class="hero-content">
            <h2 class="hero-title">{{ InnerHero.timelapse_hero.title }}</h2>
        </div>
    </div>
</template>

<style scoped>
.hero-section {
    position: relative;
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}

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
