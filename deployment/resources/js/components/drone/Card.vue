<script setup>
import { Link } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

// 1. Accept the category as a prop (e.g., "timelapse" or "drone")
const props = defineProps({
    category: {
        type: String,
        default: 'drone',
    },
    title: {
        type: String,
        default: 'Nos services',
    },
});

// 2. Data Storage
const services = ref([]);
const isLoading = ref(true);

// 3. Fetch Data Automatically
const fetchServices = async () => {
    try {
        // We ask the API for only this specific category
        const response = await fetch(
            `/api/service-pages?category=${props.category}`,
        );
        const data = await response.json();
        services.value = data;
    } catch (error) {
        console.error('Error fetching services:', error);
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    fetchServices();
});
</script>

<template>
    <section class="bg-gray-50 px-4 py-16 font-sans sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
            <div class="mb-12 flex items-center">
                <span class="mr-4 h-8 w-1.5 rounded-sm bg-[#50aceb]"></span>
                <h2 class="text-3xl font-bold text-black">
                    {{ title }}
                </h2>
            </div>

            <div
                v-if="isLoading"
                class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
                <div
                    v-for="n in 3"
                    :key="n"
                    class="h-64 animate-pulse rounded-sm bg-gray-200"
                ></div>
            </div>

            <div
                v-else-if="services.length === 0"
                class="py-10 text-center text-gray-500"
            >
                Aucun service trouvé pour le moment.
            </div>

            <div
                v-else
                class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
                <Link
                    v-for="service in services"
                    :key="service.id"
                    :href="`/${service.category}/${service.slug}`"
                    class="group relative flex cursor-pointer flex-col items-center overflow-hidden border-b-4 border-transparent bg-white p-10 text-center shadow-sm shadow-[#00000012] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#50aceb] hover:shadow-xl"
                >
                    <div class="mb-6 text-5xl text-[#50aceb]">
                        <i :class="service.icon || 'fa-solid fa-camera'"></i>
                    </div>

                    <h3 class="mb-8 text-xl font-bold text-black">
                        {{ service.title }}
                    </h3>

                    <div
                        class="mt-auto flex items-center text-sm font-medium text-[#50aceb] transition-colors group-hover:text-sky-600"
                    >
                        Apprendre encore plus
                        <i
                            class="fa-solid fa-arrow-right ml-3 transform transition-transform duration-300 group-hover:translate-x-2"
                        ></i>
                    </div>
                </Link>
            </div>
        </div>
    </section>
</template>
