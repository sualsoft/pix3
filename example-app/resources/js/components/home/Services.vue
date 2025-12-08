<script setup>
import { Link } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

// 1. Initialize empty array
const services = ref([]);

// 2. Fetch Data from Backend
const fetchServices = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();

        // If data exists in DB, use it
        if (data.home_services) {
            services.value = data.home_services;
        }
    } catch (error) {
        console.error('Error loading services:', error);
    }
};

onMounted(() => {
    fetchServices();
});
</script>

<template>
    <section v-if="services.length > 0" class="bg-white py-24">
        <div class="mx-auto max-w-screen-xl px-4">
            <div class="mb-6 flex items-center">
                <div class="mr-4 h-8 w-1.5 bg-[#0CB1F1]"></div>
                <h2 class="text-3xl font-bold text-gray-900">
                    Voici nos services clés
                </h2>
            </div>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div
                    v-for="(item, index) in services"
                    :key="index"
                    class="group relative h-[300px] cursor-pointer overflow-hidden shadow-lg md:h-[350px]"
                    :class="item.span"
                >
                    <Link :href="item.link || '#'" class="absolute inset-0">
                        <div
                            class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            :style="{ backgroundImage: `url(${item.image})` }"
                        ></div>

                        <div
                            class="absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/50"
                        ></div>

                        <div
                            class="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center text-white"
                        >
                            <h3
                                class="text-xl font-bold tracking-wide uppercase md:text-2xl"
                            >
                                {{ item.title }}
                            </h3>

                            <div class="my-4 h-1 w-12 bg-[#0cb1f1]"></div>

                            <p
                                class="max-w-lg text-sm leading-relaxed text-gray-200 md:text-base"
                            >
                                {{ item.description }}
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
</template>
