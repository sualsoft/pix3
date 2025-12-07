<script setup>
import { ref } from 'vue';

const features = ref([
    {
        title: 'Expertise Reconnue',
        description:
            'Avec PIX3i, vous bénéficiez d’une expertise reconnue dans le domaine des services par drone pour le BTP et l’immobilier.',
        icon: 'fa-solid fa-certificate', // Badge/Certificate icon
    },
    {
        title: 'Solutions Innovantes',
        description:
            'Nous mettons à votre disposition des solutions innovantes pour optimiser vos projets et améliorer la gestion de vos inspections.',
        icon: 'fa-solid fa-lightbulb', // Lightbulb icon
    },
    {
        title: 'Télépilotes Certifiés',
        description:
            'Nos télépilotes certifiés sont formés pour garantir la sécurité et la conformité des missions en zones réglementées.',
        icon: 'fa-solid fa-user-shield', // User with shield/certification
    },
    {
        title: 'Gain de Temps',
        description:
            'Nos services par drone permettent de gagner un temps précieux dans l’inspection et la documentation de vos projets.',
        icon: 'fa-solid fa-clock', // Clock icon
    },
    {
        title: 'Réduction des Coûts',
        description:
            'L’utilisation de drones réduit les coûts d’inspection en éliminant le besoin de matériel lourd ou de structures temporaires.',
        icon: 'fa-solid fa-euro-sign', // Euro currency icon
    },
    {
        title: 'Sécurité Optimisée',
        description:
            'L’inspection par drone minimise les risques pour les équipes techniques, surtout dans les zones difficiles d’accès.',
        icon: 'fa-solid fa-shield-halved', // Shield icon
    },
    {
        title: 'Accompagnement Personnalisé',
        description:
            'Nous vous accompagnons tout au long de vos projets de construction et immobilier pour répondre à vos besoins spécifiques.',
        icon: 'fa-solid fa-handshake', // Handshake icon
    },
]);
</script>

<template>
    <section class="bg-gray-50 py-16">
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
                    class="group border-b-4 border-transparent bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#0cb1f1] hover:shadow-2xl"
                >
                    <div class="mb-6 inline-flex items-center justify-center">
                        <i
                            :class="item.icon"
                            class="text-4xl text-[#0cb1f1]"
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
