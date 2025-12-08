<template>
    <section class="bg-gray-50 px-4 py-16 font-sans sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
            <div class="mb-12 flex items-center">
                <span class="mr-4 h-8 w-1.5 rounded-sm bg-[#50aceb]"></span>
                <h2 class="text-3xl font-bold text-black">
                    Nos services timelapse
                </h2>
            </div>

            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <a
                    v-for="(service, index) in services"
                    :key="index"
                    :href="service.link"
                    class="group relative flex cursor-pointer flex-col items-center overflow-hidden border-b-4 border-transparent bg-white p-10 text-center shadow-sm shadow-[#00000012] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#50aceb] hover:shadow-xl"
                >
                    <div class="mb-6 text-5xl text-[#50aceb]">
                        <i :class="service.icon"></i>
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
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
    {
        title: 'Timelapse Suivi de Chantier',
        icon: 'fa-solid fa-road-barrier', // Alternative: fa-person-digging if barrier not showing
        link: '/services/chantier',
    },
    {
        title: 'Timelapse Événementiel',
        icon: 'fa-regular fa-calendar',
        link: '/services/evenementiel',
    },
    {
        title: 'Notre interface de Suivi Timelapse',
        icon: 'fa-solid fa-chart-line', // Represents dashboard/interface
        link: '/services/interface',
    },
    {
        title: 'Mise en Place d’un Timelapse',
        icon: 'fa-solid fa-clock-rotate-left', // Represents time/clock
        link: '/services/mise-en-place',
    },
    {
        title: 'Mise en Place d’un Timelapse',
        icon: 'fa-solid fa-screwdriver-wrench', // Represents tools/setup
        link: '/services/setup',
    },
]);
</script>
