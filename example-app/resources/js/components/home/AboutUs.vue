<script setup>
import { ref } from 'vue';

// 1. DATA: Text Content
const aboutData = {
    title: 'À propos de nous',
    paragraph1:
        'PIX3i s’engage à fournir des prestations de qualité, en respectant les réglementations en vigueur. Les télépilotes, titulaires du CATS, sont formés pour intervenir dans les zones réglementées et urbaines, garantissant ainsi la sécurité et la conformité des missions réalisées.',
    paragraph2:
        'En intégrant des technologies avancées, PIX3i permet à ses clients de bénéficier d’une vision précise et d’une compréhension approfondie de leurs projets, tout en optimisant la gestion des sinistres et des travaux dans le bâtiment.',
};

// 2. DATA: Images for the Gallery (I used placeholders matching your thermal/drone theme)
const galleryImages = ref([
    'https://images.unsplash.com/photo-1564513294021-d1c9533f81e6?q=80&w=800&auto=format&fit=crop', // Normal House
    'https://images.unsplash.com/photo-1599557022207-6b80155b414e?q=80&w=800&auto=format&fit=crop', // Thermal House 1 (Simulated)
    'https://plus.unsplash.com/premium_photo-1661962360580-2a544747768e?q=80&w=800&auto=format&fit=crop', // Thermal House 2
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop', // Solar Panels
    'https://images.unsplash.com/photo-1622543925917-091a13e2f520?q=80&w=800&auto=format&fit=crop', // Solar Panels Wide
    'https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=800&auto=format&fit=crop', // Thermal Roof
]);

// 3. LIGHTBOX LOGIC
const isLightboxOpen = ref(false);
const currentImageIndex = ref(0);

const openLightbox = (index) => {
    currentImageIndex.value = index;
    isLightboxOpen.value = true;
    document.body.style.overflow = 'hidden'; // Stop scrolling background
};

const closeLightbox = () => {
    isLightboxOpen.value = false;
    document.body.style.overflow = 'auto'; // Re-enable scrolling
};

const nextImage = () => {
    // Loop back to start if at the end
    currentImageIndex.value =
        (currentImageIndex.value + 1) % galleryImages.value.length;
};

const prevImage = () => {
    // Loop to end if at the start
    currentImageIndex.value =
        (currentImageIndex.value - 1 + galleryImages.value.length) %
        galleryImages.value.length;
};
</script>

<template>
    <section class="overflow-hidden bg-white py-16">
        <div class="mx-auto max-w-screen-xl px-4">
            <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
                <div class="flex flex-col">
                    <div class="mb-6 flex items-center">
                        <div class="mr-4 h-8 w-1.5 bg-[#0CB1F1]"></div>
                        <h2 class="text-3xl font-bold text-gray-900">
                            {{ aboutData.title }}
                        </h2>
                    </div>

                    <p class="mb-6 leading-relaxed text-gray-600">
                        {{ aboutData.paragraph1 }}
                    </p>
                    <p class="leading-relaxed text-gray-600">
                        {{ aboutData.paragraph2 }}
                    </p>
                </div>

                <div>
                    <div class="mb-6 flex items-center">
                        <div class="mr-4 h-8 w-1.5 bg-[#0CB1F1]"></div>
                        <h2 class="text-3xl font-bold text-gray-900">
                            Prises de vue
                        </h2>
                    </div>

                    <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
                        <div
                            v-for="(img, index) in galleryImages"
                            :key="index"
                            class="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100"
                            @click="openLightbox(index)"
                        >
                            <img
                                :src="img"
                                alt="Gallery image"
                                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div
                                class="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100"
                            >
                                <i
                                    class="fa-solid fa-magnifying-glass-plus text-2xl text-white"
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <transition name="fade">
            <div
                v-if="isLightboxOpen"
                class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
                @click.self="closeLightbox"
            >
                <button
                    @click="closeLightbox"
                    class="absolute top-6 right-6 text-4xl text-white hover:text-gray-300 focus:outline-none"
                >
                    &times;
                </button>

                <button
                    @click.stop="prevImage"
                    class="absolute left-4 p-2 text-3xl text-white hover:text-gray-300 focus:outline-none md:left-8 md:text-5xl"
                >
                    <i class="fa-solid fa-chevron-left"></i>
                </button>

                <img
                    :src="galleryImages[currentImageIndex]"
                    class="max-h-[85vh] max-w-[90vw] rounded-md object-contain shadow-2xl"
                />

                <button
                    @click.stop="nextImage"
                    class="absolute right-4 p-2 text-3xl text-white hover:text-gray-300 focus:outline-none md:right-8 md:text-5xl"
                >
                    <i class="fa-solid fa-chevron-right"></i>
                </button>

                <div
                    class="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1 font-medium text-white"
                >
                    {{ currentImageIndex + 1 }} / {{ galleryImages.length }}
                </div>
            </div>
        </transition>
    </section>
</template>

<style scoped>
/* Simple Fade Animation for Lightbox */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
