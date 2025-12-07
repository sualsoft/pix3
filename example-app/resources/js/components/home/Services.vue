<script setup>
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';
const services = ref([
    {
        title: 'Timelapse',
        description:
            'Capture et valorisation de vos chantiers, vos événements, vos monuments: des solutions efficaces et dynamiques pour communiquer et conserver une mémoire visuelle.',
        image: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2000&auto=format&fit=crop', // Construction crane
        span: 'md:col-span-2',
        link: '/timelapse',
    },
    {
        title: 'Prises de vue aériennes et Audiovisuel',
        description:
            'Valorisation de vos biens immobiliers et suivi de chantier grâce à des prises de vues aériennes en haute définition, idéales pour la documentation et la promotion de projets.',
        image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2000&auto=format&fit=crop', // Drone city view
        span: 'lg:col-span-1',
        link: '/drone',
    },
    {
        title: 'Inspection de systèmes solaires',
        description:
            'Inspections de vos installations photovoltaïques avec des drones équipés de caméras thermiques pour détecter les anomalies et améliorer la performance.',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop', // Solar panels
        span: 'lg:col-span-1',
        link: '/drone',
    },
    {
        title: 'Inspection thermique par drone',
        description:
            "Identification des pertes de chaleur, ponts thermiques et défauts d'isolation grâce à la thermographie, pour améliorer la performance énergétique de vos bâtiments.",
        image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=2000&auto=format&fit=crop', // Thermal/Industrial
        span: 'lg:col-span-1',
        link: '/drone',
    },
    {
        title: 'Constat de sinistre par drone',
        description:
            'Documentation visuelle précise pour faciliter vos démarches auprès des assurances en cas de sinistre, avec des prises de vues aériennes détaillées des dommages.',
        image: 'https://images.unsplash.com/photo-1552951792-74d1a01c40f5?q=80&w=2000&auto=format&fit=crop', // Damaged bridge/flood
        span: 'lg:col-span-1',
        link: '/drone',
    },
    {
        title: 'Inspection technique par drone',
        description:
            "Évaluation de l'état de vos infrastructures difficiles d'accès (toitures, façades, ponts, etc.) de manière rapide, sécurisée et efficace.",
        image: 'https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2000&auto=format&fit=crop', // Bridge inspection
        span: 'lg:col-span-1',
        link: '/drone',
    },
    {
        title: 'Suivi de chantier par drone',
        description:
            "Suivi régulier de l'avancement des travaux sur vos chantiers grâce à des prises de vues aériennes, assurant un contrôle optimal de la qualité et des délais.",
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop', // Construction site
        span: 'lg:col-span-2',
        link: '/drone',
    },
]);
</script>

<template>
    <section class="bg-white py-24">
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
                    <Link :href="item.link" class="absolute inset-0">
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
