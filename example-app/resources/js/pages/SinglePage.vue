<template>
    <MainLayout>
        <!--Hero-->

        <section>
            <div
                class="hero-section"
                style="background-image: url('/images/hero-bg-1765171683.png')"
            >
                <div class="hero-overlay"></div>

                <div class="hero-content">
                    <h2 class="hero-title">This is a Single Page</h2>
                </div>
            </div>
        </section>

        <!--Content-->
        <section class="mt-12 bg-white font-sans">
            <!--Video Section-->
            <div>
                <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div
                        @click="openModal"
                        class="group relative h-80 w-full cursor-pointer overflow-hidden rounded-sm shadow-md md:h-96"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                            alt="Construction Site Aerial"
                            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div
                            class="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50"
                        ></div>

                        <div
                            class="absolute inset-0 flex items-center justify-center"
                        >
                            <div class="flex items-center space-x-3 text-white">
                                <span class="text-lg font-bold tracking-wide"
                                    >Regarder une vidéo</span
                                >
                                <div
                                    class="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 text-black shadow-lg transition-transform duration-300 group-hover:scale-110"
                                >
                                    <i
                                        class="fa-solid fa-play ml-0.5 text-sm"
                                    ></i>
                                </div>
                            </div>
                        </div>
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
                                class="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 hover:text-[#50aceb]"
                            >
                                <i class="fa-solid fa-xmark text-xl"></i>
                            </button>

                            <iframe
                                class="h-full w-full"
                                :src="youtubeUrl"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </Transition>
            </div>

            <!--Content-->
            <div class="mx-auto max-w-7xl px-4 py-16 pt-0 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    <div
                        class="space-y-6 border-b-[4px] border-[#0D99FF] bg-gray-50 px-12 py-6 text-justify text-sm leading-relaxed text-gray-700 md:text-base lg:col-span-2"
                    >
                        <p>
                            Le timelapse chantier est bien plus qu'un simple
                            outil visuel : c'est un véritable atout pour
                            superviser vos chantiers de manière efficace et
                            innovante. Grâce à cette technologie, suivez
                            l'évolution de vos travaux à distance, où que vous
                            soyez, et gardez une vision claire et précise de
                            chaque étape du projet.
                        </p>

                        <div>
                            <span class="font-bold text-black"
                                >Suivi de Chantier</span
                            >
                            Idéal pour les entreprises du bâtiment, les
                            promoteurs immobiliers, et les collectivités:
                            <ul class="mt-2 list-disc space-y-1 pl-5">
                                <li>
                                    <span class="font-semibold"
                                        >Documentation continue :</span
                                    >
                                    Capturez l'évolution de vos projets grâce à
                                    des vidéos timelapse en haute définition
                                    (jusqu'à 6K).
                                </li>
                                <li>
                                    <span class="font-semibold"
                                        >Communication efficace :</span
                                    >
                                    Valorisez vos réalisations auprès des
                                    investisseurs, partenaires et futurs
                                    clients.
                                </li>
                                <li>
                                    <span class="font-semibold"
                                        >Gestion optimisée :</span
                                    >
                                    Suivez vos chantiers en temps réel pour
                                    anticiper les retards et améliorer la
                                    coordination.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <span class="font-bold text-black"
                                >Avantages :</span
                            >
                            <ul class="mt-2 list-disc space-y-1 pl-5">
                                <li>
                                    Suivi visuel en temps réel : Analysez chaque
                                    phase du projet.
                                </li>
                                <li>
                                    Communication améliorée : Partagez des
                                    images captivantes avec vos équipes,
                                    partenaires ou clients.
                                </li>
                                <li>
                                    Optimisation des process qualité/sécurité :
                                    Identifiez rapidement les points à
                                    améliorer.
                                </li>
                            </ul>
                        </div>

                        <p>
                            Adoptez le timelapse pour transformer vos suivis de
                            chantier en une expérience moderne, professionnelle
                            et impactante.
                        </p>
                    </div>

                    <div
                        class="h-fit border-b-[4px] border-[#0D99FF] bg-gray-50 p-6 sm:p-8 lg:col-span-1"
                    >
                        <div class="mb-8">
                            <h3 class="mb-4 text-lg font-bold text-[#0D99FF]">
                                Timelapse
                            </h3>
                            <ul class="space-y-0">
                                <li
                                    v-for="(link, index) in timelapseLinks"
                                    :key="index"
                                    class="border-b border-gray-200 last:border-0"
                                >
                                    <a
                                        href="#"
                                        class="block py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:pl-2 hover:text-[#50aceb]"
                                    >
                                        {{ link }}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="mb-4 text-lg font-bold text-[#0D99FF]">
                                Drone
                            </h3>
                            <ul class="space-y-0">
                                <li
                                    v-for="(link, index) in droneLinks"
                                    :key="index"
                                    class="border-b border-gray-200 last:border-0"
                                >
                                    <a
                                        href="#"
                                        class="block py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:pl-2 hover:text-[#50aceb]"
                                    >
                                        {{ link }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { computed, ref } from 'vue';

//Youtube video
const isModalOpen = ref(false);
const videoId = 'dQw4w9WgXcQ';
const youtubeUrl = computed(() => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
});

const openModal = () => {
    isModalOpen.value = true;
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    isModalOpen.value = false;
    document.body.style.overflow = 'auto';
};

const timelapseLinks = ref([
    'Timelapse Suivi de Chantier',
    'Timelapse Événementiel',
    'Notre interface de Suivi Timelapse',
    'Mise en Place d’un Timelapse',
    'Mise en Place d’un Timelapse', // Repeated in image, keeping faithful to screenshot
]);

const droneLinks = ref([
    'Prises de Vue Aériennes et Audiovisuel',
    'Inspection d’Installation Photovoltaïque',
    'Inspection Thermique par Drone',
    'Constat de Sinistre par Drone',
    'Inspection Technique par Drone',
    'Suivi de Chantier par Drone',
]);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.hero-section {
    position: relative;
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    padding: 0 20px;
    max-width: 800px;
}

.hero-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
    font-family: sans-serif;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .hero-section {
        height: 300px;
    }

    .hero-title {
        font-size: 2rem;
    }
}
</style>
