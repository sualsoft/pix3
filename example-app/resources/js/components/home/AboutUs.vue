<script setup>
import { computed, onMounted, ref } from 'vue';

const aboutData = ref({ title: '', description: '' });
const galleryData = ref({ title: '', images: [] });

// 1. Fetch Data
const fetchLayout = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();

        if (data.home_about) aboutData.value = data.home_about;
        if (data.home_gallery) galleryData.value = data.home_gallery;
    } catch (error) {
        console.error(error);
    }
};

// 2. PARAGRAPH LOGIC: Split the text by "New Line"
const aboutParagraphs = computed(() => {
    if (!aboutData.value.description) return [];
    return aboutData.value.description.split('\n');
});

// 3. LIGHTBOX LOGIC
const isLightboxOpen = ref(false);
const currentImageIndex = ref(0);

const openLightbox = (index) => {
    currentImageIndex.value = index;
    isLightboxOpen.value = true;
    document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
    isLightboxOpen.value = false;
    document.body.style.overflow = 'auto';
};

const nextImage = () => {
    currentImageIndex.value =
        (currentImageIndex.value + 1) % galleryData.value.images.length;
};

const prevImage = () => {
    currentImageIndex.value =
        (currentImageIndex.value - 1 + galleryData.value.images.length) %
        galleryData.value.images.length;
};

onMounted(() => {
    fetchLayout();
});
</script>

<template>
    <section class="overflow-hidden bg-white py-16" v-if="aboutData.title">
        <div class="mx-auto max-w-screen-xl px-4">
            <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
                <div class="flex flex-col">
                    <div class="mb-6 flex items-center">
                        <div class="mr-4 h-8 w-1.5 bg-[#0CB1F1]"></div>
                        <h2 class="text-3xl font-bold text-gray-900">
                            {{ aboutData.title }}
                        </h2>
                    </div>

                    <p
                        v-for="(para, index) in aboutParagraphs"
                        :key="index"
                        class="mb-6 leading-relaxed text-gray-600 last:mb-0"
                    >
                        {{ para }}
                    </p>
                </div>

                <div>
                    <div class="mb-6 flex items-center">
                        <div class="mr-4 h-8 w-1.5 bg-[#0CB1F1]"></div>
                        <h2 class="text-3xl font-bold text-gray-900">
                            {{ galleryData.title }}
                        </h2>
                    </div>

                    <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
                        <div
                            v-for="(img, index) in galleryData.images"
                            :key="index"
                            class="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100"
                            @click="openLightbox(index)"
                        >
                            <img
                                :src="img"
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
                    class="absolute left-4 p-2 text-3xl text-white hover:text-gray-300 md:left-8 md:text-5xl"
                >
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <img
                    :src="galleryData.images[currentImageIndex]"
                    class="max-h-[85vh] max-w-[90vw] rounded-md object-contain shadow-2xl"
                />
                <button
                    @click.stop="nextImage"
                    class="absolute right-4 p-2 text-3xl text-white hover:text-gray-300 md:right-8 md:text-5xl"
                >
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </transition>
    </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
