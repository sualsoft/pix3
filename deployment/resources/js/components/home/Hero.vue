<script setup>
import { computed, onMounted, ref } from 'vue';

const pageData = ref({});
const isVideoOpen = ref(false);

// 1. Fetch Data
const fetchHomeData = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();
        pageData.value = data;
    } catch (error) {
        console.error('Error loading home data:', error);
    }
};

// 2. Computed Property to extract YouTube ID from the database link
const currentVideoId = computed(() => {
    const url = pageData.value.home_hero?.video_link;
    if (!url) return '';

    // Regular expression to find the ID (works for youtube.com and youtu.be)
    const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
});

onMounted(() => {
    fetchHomeData();
});
</script>

<template>
    <section
        v-if="pageData.home_hero"
        class="relative flex h-[100vh] w-full items-center justify-center bg-cover bg-center"
        :style="{ 'background-image': `url(${pageData.home_hero.bg_image})` }"
    >
        <div class="absolute inset-0 bg-black/40"></div>

        <div class="relative z-10 mx-auto max-w-screen-xl px-4 text-center">
            <h1
                class="font-['Poppins'] text-[32px] leading-tight font-semibold text-white md:text-5xl"
            >
                {{ pageData.home_hero.title }}
            </h1>

            <p
                class="mx-auto mt-4 max-w-2xl font-['Poppins'] text-[20px] text-[#C6C6C6]"
            >
                {{ pageData.home_hero.description }}
            </p>

            <div class="mt-8">
                <button
                    @click="isVideoOpen = true"
                    class="group inline-flex cursor-pointer items-center gap-3 text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
                >
                    <span class="text-lg font-medium">
                        {{ pageData.home_hero.btn_text }}
                    </span>

                    <img
                        src="/images/icons/play-btn.png"
                        alt="Play button"
                        class="ml-1 h-5 w-5"
                    />
                </button>
            </div>
        </div>
    </section>

    <Transition name="fade">
        <div
            v-if="isVideoOpen"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            @click="isVideoOpen = false"
        >
            <div
                class="relative w-full max-w-4xl overflow-hidden rounded-lg shadow-2xl"
                @click.stop
            >
                <button
                    @click="isVideoOpen = false"
                    class="absolute -top-10 right-0 text-white hover:text-gray-300 md:top-0 md:-right-10"
                >
                    <svg
                        class="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>

                <div class="aspect-video w-full" v-if="currentVideoId">
                    <iframe
                        class="h-full w-full"
                        :src="`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&rel=0`"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
                <div v-else class="p-4 text-center text-white">
                    Video link not found.
                </div>
            </div>
        </div>
    </Transition>
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
