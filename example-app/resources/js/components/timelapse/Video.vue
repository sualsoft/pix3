<template>
    <section class="bg-white px-4 py-16 font-sans sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
            <div class="mb-10 flex items-center">
                <span class="mr-4 h-8 w-1.5 rounded-sm bg-[#50aceb]"></span>
                <h2 class="text-3xl font-bold text-black">
                    Notre portefeuille
                </h2>
            </div>

            <div class="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div
                    v-for="(video, index) in videos"
                    :key="index"
                    class="group relative aspect-video cursor-pointer overflow-hidden rounded-sm border-4 border-transparent transition-all duration-300 hover:border-[#50aceb]"
                    @click="openModal(video.youtubeId)"
                >
                    <img
                        :src="video.thumbnail"
                        :alt="video.alt"
                        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div
                        class="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40"
                    ></div>

                    <div
                        class="absolute inset-0 flex items-center justify-center"
                    >
                        <div class="relative flex items-center justify-center">
                            <span
                                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75 duration-1000"
                                style="animation-duration: 2s"
                            ></span>

                            <div
                                class="relative flex h-16 w-16 transform items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#50aceb]"
                            >
                                <i
                                    class="fa-solid fa-play ml-1 text-xl text-[#50aceb] transition-colors duration-300 group-hover:text-white"
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center">
                <a
                    href="/portfolio"
                    class="group flex items-center text-lg font-medium text-[#50aceb] transition-colors hover:text-sky-600"
                >
                    Plus d'articles
                    <i
                        class="fa-solid fa-arrow-right ml-3 transform transition-transform duration-300 group-hover:translate-x-2"
                    ></i>
                </a>
            </div>
        </div>

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
                        class="absolute top-4 right-4 z-10 text-white transition-colors hover:text-[#50aceb]"
                    >
                        <i class="fa-solid fa-xmark text-3xl"></i>
                    </button>

                    <iframe
                        class="h-full w-full"
                        :src="`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </Transition>
    </section>
</template>

<script setup>
import { ref } from 'vue';

// State for Modal
const isModalOpen = ref(false);
const currentVideoId = ref('');

// Video Data (Replace thumbnails and Youtube IDs with real data)
// Thumbnails: Using standard YouTube thumbnail URL format: https://img.youtube.com/vi/[ID]/maxresdefault.jpg
const videos = ref([
    {
        youtubeId: 'MPE6_FbzJPub093u', // Replace with real ID
        thumbnail:
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Construction Site 1',
    },
    {
        youtubeId: 'LXb3EKWsInQ', // Replace with real ID
        thumbnail:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Construction Site 2',
    },
    {
        youtubeId: 'tgbNymZ7vqY', // Replace with real ID
        thumbnail:
            'https://images.unsplash.com/photo-1590644365607-1c5a2e9e3b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Construction Site 3',
    },
]);

// Methods
const openModal = (id) => {
    currentVideoId.value = id;
    isModalOpen.value = true;
    // Optional: Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    isModalOpen.value = false;
    currentVideoId.value = ''; // Stop video
    document.body.style.overflow = 'auto';
};
</script>

<style scoped>
/* Modal Transition Animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
