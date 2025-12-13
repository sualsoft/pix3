<script setup>
import { onMounted, ref } from 'vue';

// 1. Initialize empty array
const features = ref([]);

// 2. Fetch Data from Backend
const fetchFeatures = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();

        // If data exists in DB, use it
        if (data.home_why) {
            features.value = data.home_why;
        }
    } catch (error) {
        console.error('Error loading features:', error);
    }
};

onMounted(() => {
    fetchFeatures();
});
</script>

<template>
    <section v-if="features.length > 0" class="bg-gray-50 py-16">
        <div class="mx-auto max-w-screen-xl px-4">
            <div class="mb-6 flex items-center">
                <div class="mr-4 h-8 w-1.5 bg-[#0CB1F1]"></div>
                <h2 class="text-3xl font-bold text-gray-900">
                    Pourquoi choisir PIX3i?
                </h2>
            </div>

            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="(item, index) in features"
                    :key="index"
                    class="group rounded-xl border-b-4 border-transparent bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#0cb1f1] hover:shadow-2xl"
                >
                    <div
                        class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-50"
                    >
                        <i
                            :class="item.icon"
                            class="text-3xl text-[#0cb1f1]"
                        ></i>
                    </div>

                    <h3 class="mb-4 text-xl font-bold text-gray-900">
                        {{ item.title }}
                    </h3>

                    <p class="leading-relaxed text-gray-600">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
