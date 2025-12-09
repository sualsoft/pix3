<script setup>
import { onMounted, ref } from 'vue';

const pageData = ref(null);
const isVisible = ref(false);
const targetSection = ref(null);

// 1. Fetch Data
const fetchData = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();

        // Connect to 'drone_detail' key
        if (data.drone_detail) {
            pageData.value = data.drone_detail;
        }
    } catch (error) {
        console.error('Error loading drone details:', error);
    }
};

onMounted(() => {
    fetchData();

    // Animation Observer (Fade in effect)
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                isVisible.value = true;
                observer.unobserve(entry.target);
            }
        },
        { threshold: 0.2 },
    );

    if (targetSection.value) observer.observe(targetSection.value);
});
</script>

<template>
    <section
        ref="targetSection"
        class="overflow-hidden bg-white px-4 py-16 font-sans transition-all duration-1000 ease-out sm:px-6 lg:px-8"
        :class="
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        "
    >
        <div class="mx-auto max-w-7xl">
            <div
                v-if="!pageData"
                class="h-64 animate-pulse rounded bg-gray-100"
            ></div>

            <div
                v-else
                class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24"
            >
                <div
                    class="transition-all delay-200 duration-1000"
                    :class="
                        isVisible
                            ? 'translate-x-0 opacity-100'
                            : '-translate-x-10 opacity-0'
                    "
                >
                    <div class="group mb-8 flex items-center">
                        <span
                            class="mr-4 h-8 w-1.5 bg-[#50aceb] transition-all duration-300 group-hover:h-12 group-hover:bg-sky-400"
                        ></span>
                        <h2
                            class="text-3xl font-bold text-black transition-colors duration-300 group-hover:text-gray-800"
                        >
                            {{ pageData.title }}
                        </h2>
                    </div>

                    <div
                        class="space-y-6 text-justify leading-relaxed whitespace-pre-line text-gray-700"
                    >
                        {{ pageData.description }}
                    </div>
                </div>

                <div
                    class="perspective-1000 relative mt-10 h-[500px] w-full lg:mt-0"
                >
                    <div
                        v-for="(img, index) in pageData.images"
                        :key="index"
                        class="absolute w-3/5 transform cursor-pointer transition-all duration-500 ease-out hover:z-50 hover:scale-110 hover:rotate-0 hover:shadow-2xl"
                        :class="[
                            index === 0 ? 'top-0 right-0 rotate-3' : '',
                            index === 1 ? 'top-1/4 left-1/4 -rotate-2' : '',
                            index === 2 ? 'bottom-0 left-0 rotate-6' : '',
                        ]"
                    >
                        <img
                            v-if="img"
                            :src="img"
                            class="h-auto w-full border-4 border-white shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.perspective-1000 {
    perspective: 1000px;
}
</style>
