<script setup>
import { ref } from 'vue';

// État pour gérer l'ouverture/fermeture de la modale vidéo
const isVideoOpen = ref(false);

// ID de la vidéo YouTube extrait de votre lien
const videoId = 'IumYMCllMsM';
</script>

<template>
    <section
        class="relative flex h-[80vh] w-full items-center justify-center bg-cover bg-center"
        style="background-image: url('/images/hero-bg.png')"
    >
        <div class="absolute inset-0 bg-black/40"></div>

        <div class="relative z-10 mx-auto max-w-screen-xl px-4 text-center">
            <h1
                class="font-['Poppins'] text-[32px] leading-tight font-semibold text-white md:text-5xl"
            >
                Valorisez, Inspectez et Optimisez <br class="hidden md:block" />
                avec PIX3i
            </h1>

            <p
                class="mx-auto mt-4 max-w-2xl font-['Poppins'] text-[20px] text-[#C6C6C6]"
            >
                Votre partenaire de confiance pour les prestations drone et
                timelapse à Bourges (18).
            </p>

            <div class="mt-8">
                <button
                    @click="isVideoOpen = true"
                    class="group inline-flex cursor-pointer items-center gap-3 text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
                >
                    <span class="text-lg font-medium">Regarder une vidéo</span>

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

                <div class="aspect-video w-full">
                    <iframe
                        class="h-full w-full"
                        :src="`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
/* Animation simple pour l'apparition de la modale */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
