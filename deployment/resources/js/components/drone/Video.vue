<script setup>
import { onMounted, ref } from 'vue';

// Data
const videos = ref([]);
const sectionTitle = ref('Vidéos Aériennes');
const isModalOpen = ref(false);
const currentVideoId = ref('');

// 1. Fetch Data
const fetchData = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();

        // Connect to 'drone_videos' key
        if (data.drone_videos) {
            sectionTitle.value = data.drone_videos.title;
            videos.value = data.drone_videos.videos;
        }
    } catch (error) {
        console.error(error);
    }
};

// Modal Logic
const openModal = (id) => {
    currentVideoId.value = id;
    isModalOpen.value = true;
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    isModalOpen.value = false;
    currentVideoId.value = '';
    document.body.style.overflow = 'auto';
};

onMounted(() => fetchData());
</script>

<template>
    <section class="bg-white px-4 py-16 font-sans sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
            <div class="mb-10 flex items-center">
                <span class="mr-4 h-8 w-1.5 rounded-sm bg-[#50aceb]"></span>
                <h2 class="text-3xl font-bold text-black">
                    {{ sectionTitle }}
                </h2>
            </div>

            <div
                v-if="videos.length === 0"
                class="grid grid-cols-1 gap-6 md:grid-cols-3"
            >
                <div
                    v-for="n in 3"
                    :key="n"
                    class="aspect-video animate-pulse rounded-sm bg-gray-100"
                ></div>
            </div>

            <div v-else class="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
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
                        <div
                            class="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#50aceb]"
                        >
                            <i
                                class="fa-solid fa-play ml-1 text-xl text-[#50aceb] transition-colors duration-300 group-hover:text-white"
                            ></i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center">
                <a
                    href="/portfolio"
                    class="group flex items-center text-lg font-medium text-[#50aceb] transition-colors hover:text-sky-600"
                >
                    Plus de vidéos
                    <i
                        class="fa-solid fa-arrow-right ml-3 transform transition-transform duration-300 group-hover:translate-x-2"
                    ></i>
                </a>
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
        </div>
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
