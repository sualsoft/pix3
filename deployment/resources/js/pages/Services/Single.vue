<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { computed, ref } from 'vue';

// 1. Receive Data (With Default Values to prevent crash)
const props = defineProps({
    page: {
        type: Object,
        default: () => null,
    },
    timelapseLinks: {
        type: Array,
        default: () => [],
    },
    droneLinks: {
        type: Array,
        default: () => [],
    },
});

// 2. YouTube Logic
const isModalOpen = ref(false);

const getYoutubeId = (url) => {
    if (!url) return null;
    const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
};

const youtubeUrl = computed(() => {
    if (!props.page || !props.page.video_url) return '';
    const id = getYoutubeId(props.page.video_url);
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : '';
});

const openModal = () => {
    if (props.page && props.page.video_url) {
        isModalOpen.value = true;
        document.body.style.overflow = 'hidden';
    }
};

const closeModal = () => {
    isModalOpen.value = false;
    document.body.style.overflow = 'auto';
};
</script>

<template>
    <MainLayout>
        <Head :title="page ? page.title : 'Chargement...'" />

        <div
            v-if="!page"
            class="flex h-screen w-full items-center justify-center bg-gray-50"
        >
            <div class="text-center">
                <div
                    class="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"
                ></div>
                <p class="text-gray-500">Chargement de la page...</p>
            </div>
        </div>

        <div v-else>
            <section>
                <div
                    class="hero-section"
                    :style="{
                        backgroundImage: `url(${page.thumbnail || '/images/hero-bg-1765171683.png'})`,
                    }"
                >
                    <div class="hero-overlay"></div>
                    <div class="hero-content">
                        <h2 class="hero-title">{{ page.title }}</h2>
                    </div>
                </div>
            </section>

            <section class="mt-12 bg-white font-sans">
                <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div v-if="page.video_url" class="mb-12">
                        <div
                            @click="openModal"
                            class="group relative h-80 w-full cursor-pointer overflow-hidden rounded-sm shadow-md md:h-96"
                        >
                            <img
                                :src="
                                    page.thumbnail ||
                                    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600'
                                "
                                alt="Video Cover"
                                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div
                                class="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50"
                            ></div>
                            <div
                                class="absolute inset-0 flex items-center justify-center"
                            >
                                <div
                                    class="flex items-center space-x-3 text-white"
                                >
                                    <span
                                        class="text-lg font-bold tracking-wide"
                                        >Regarder une vidéo</span
                                    >
                                    <div
                                        class="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 text-black shadow-lg transition-transform duration-300 group-hover:scale-110"
                                    >
                                        <i
                                            class="fa-solid fa-play ml-0.5 text-sm"
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
                        <div
                            class="space-y-6 border-b-[4px] border-[#0D99FF] bg-gray-50 px-12 py-6 text-justify text-sm leading-relaxed text-gray-700 md:text-base lg:col-span-2"
                        >
                            <div
                                v-html="page.content"
                                class="prose max-w-none"
                            ></div>
                        </div>

                        <!-- SEO Content Section -->
                        <div
                            v-if="page.seo_content"
                            class="border-b-[4px] border-[#0D99FF] bg-gray-50 px-12 py-6 text-justify text-sm leading-relaxed text-gray-700 md:text-base lg:col-span-2"
                        >
                            <div
                                v-html="page.seo_content"
                                class="prose max-w-none"
                            ></div>
                        </div>

                        <div
                            class="h-fit border-b-[4px] border-[#0D99FF] bg-gray-50 p-6 sm:p-8 lg:col-span-1"
                        >
                            <div
                                class="mb-8"
                                v-if="
                                    timelapseLinks && timelapseLinks.length > 0
                                "
                            >
                                <h3
                                    class="mb-4 text-lg font-bold text-[#0D99FF]"
                                >
                                    Timelapse
                                </h3>
                                <ul class="space-y-0">
                                    <li
                                        v-for="link in timelapseLinks"
                                        :key="link.id"
                                        class="border-b border-gray-200 last:border-0"
                                    >
                                        <Link
                                            :href="`/timelapse/${link.slug}`"
                                            class="block py-3 text-sm font-medium transition-all duration-200 hover:pl-2 hover:text-[#50aceb]"
                                            :class="
                                                page.slug === link.slug
                                                    ? 'pl-2 font-bold text-[#50aceb]'
                                                    : 'text-gray-700'
                                            "
                                        >
                                            {{ link.title }}
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div v-if="droneLinks && droneLinks.length > 0">
                                <h3
                                    class="mb-4 text-lg font-bold text-[#0D99FF]"
                                >
                                    Drone
                                </h3>
                                <ul class="space-y-0">
                                    <li
                                        v-for="link in droneLinks"
                                        :key="link.id"
                                        class="border-b border-gray-200 last:border-0"
                                    >
                                        <Link
                                            :href="`/drone/${link.slug}`"
                                            class="block py-3 text-sm font-medium transition-all duration-200 hover:pl-2 hover:text-[#50aceb]"
                                            :class="
                                                page.slug === link.slug
                                                    ? 'pl-2 font-bold text-[#50aceb]'
                                                    : 'text-gray-700'
                                            "
                                        >
                                            {{ link.title }}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Transition name="fade">
                <div
                    v-if="isModalOpen"
                    class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    @click.self="closeModal"
                >
                    <div
                        class="relative aspect-video w-full max-w-5xl overflow-hidden rounded-lg bg-black shadow-2xl"
                    >
                        <button
                            @click="closeModal"
                            class="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 hover:text-[#50aceb]"
                        >
                            <i class="fa-solid fa-xmark text-xl"></i>
                        </button>
                        <iframe
                            class="h-full w-full"
                            :src="youtubeUrl"
                            title="YouTube video player"
                            frameborder="0"
                            allow="
                                accelerometer;
                                autoplay;
                                clipboard-write;
                                encrypted-media;
                                gyroscope;
                                picture-in-picture;
                            "
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </Transition>
        </div>
    </MainLayout>
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
@media (max-width: 768px) {
    .hero-section {
        height: 300px;
    }
    .hero-title {
        font-size: 2rem;
    }
}
.prose ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.prose li {
    margin-bottom: 0.5rem;
}
.prose p {
    margin-bottom: 1rem;
}
.prose strong {
    color: black;
    font-weight: 700;
}
</style>
