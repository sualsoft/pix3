<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';

// --- STATE ---
const isPreviewOpen = ref(false);
const selectedFile = ref(null);

// --- MOCK DATA ---
const files = ref([
    {
        name: 'Timelapse Chantier - Semaine 42',
        date: '08 Déc 2025',
        size: '1.2 GB',
        type: 'video',
        badge: '4K VIDEO',
        thumbnail:
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        youtubeId: 'dQw4w9WgXcQ', // Dummy ID
    },
    {
        name: 'Inspection Toiture - Drone Shot 004',
        date: '07 Déc 2025',
        size: '24 MB',
        type: 'image',
        badge: 'DRONE RAW',
        thumbnail:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        fullSize:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    },
    {
        name: 'Vue Aérienne Global - Décembre',
        date: '06 Déc 2025',
        size: '450 MB',
        type: 'video',
        badge: '1080P PREVIEW',
        thumbnail:
            'https://images.unsplash.com/photo-1590644365607-1c5a2e9e3b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        youtubeId: 'LXb3EKWsInQ', // Dummy ID
    },
    {
        name: 'Panorama 360 - Zone Nord',
        date: '05 Déc 2025',
        size: '18 MB',
        type: 'image',
        badge: '360° PHOTO',
        thumbnail:
            'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        fullSize:
            'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    },
]);

// --- METHODS ---
const openPreview = (file) => {
    selectedFile.value = file;
    isPreviewOpen.value = true;
    document.body.style.overflow = 'hidden'; // Stop background scrolling
};

const closePreview = () => {
    isPreviewOpen.value = false;
    selectedFile.value = null;
    document.body.style.overflow = 'auto'; // Restore background scrolling
};
</script>

<template>
    <MainLayout>
        <div class="min-h-screen bg-gray-50 pt-12 font-sans">
            <main class="py-10">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <!--Above section-->
                    <div class="mb-10">
                        <h2 class="text-3xl font-bold text-gray-900">
                            Bonjour, Jean !
                        </h2>
                        <p class="mt-2 text-sm text-gray-500">
                            Aperçu de votre projet "Résidence Les Pins".
                        </p>

                        <div
                            class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            <div
                                class="overflow-hidden rounded-sm border-t-4 border-[#50aceb] bg-white p-6 shadow-sm"
                            >
                                <div class="flex items-center">
                                    <div
                                        class="flex-shrink-0 rounded-full bg-sky-50 p-3"
                                    >
                                        <i
                                            class="fa-solid fa-cloud-arrow-down text-xl text-[#50aceb]"
                                        ></i>
                                    </div>
                                    <div class="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt
                                                class="truncate text-sm font-medium text-gray-500"
                                            >
                                                Fichiers Disponibles
                                            </dt>
                                            <dd
                                                class="text-2xl font-bold text-gray-900"
                                            >
                                                24
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="overflow-hidden rounded-sm border-t-4 border-[#50aceb] bg-white p-6 shadow-sm"
                            >
                                <div class="flex items-center">
                                    <div
                                        class="flex-shrink-0 rounded-full bg-sky-50 p-3"
                                    >
                                        <i
                                            class="fa-solid fa-video text-xl text-[#50aceb]"
                                        ></i>
                                    </div>
                                    <div class="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt
                                                class="truncate text-sm font-medium text-gray-500"
                                            >
                                                Nouveaux Timelapses
                                            </dt>
                                            <dd
                                                class="text-2xl font-bold text-gray-900"
                                            >
                                                2
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End above section-->

                    <div>
                        <div class="mb-6 flex items-center justify-between">
                            <h3 class="text-xl font-bold text-gray-900">
                                Vos Fichiers
                            </h3>
                        </div>

                        <div
                            class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        >
                            <div
                                v-for="(file, index) in files"
                                :key="index"
                                class="group flex flex-col overflow-hidden rounded-sm border border-transparent bg-white shadow-sm transition-all duration-300 hover:border-sky-100 hover:shadow-xl"
                            >
                                <div
                                    @click="openPreview(file)"
                                    class="relative h-48 cursor-pointer overflow-hidden bg-gray-200"
                                >
                                    <img
                                        :src="file.thumbnail"
                                        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    <div
                                        v-if="file.type === 'video'"
                                        class="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30"
                                    >
                                        <div
                                            class="flex h-12 w-12 transform items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110"
                                        >
                                            <i
                                                class="fa-solid fa-play ml-1 text-lg text-[#50aceb]"
                                            ></i>
                                        </div>
                                    </div>

                                    <span
                                        class="absolute top-2 left-2 rounded-sm bg-black/70 px-2 py-1 text-[10px] font-bold tracking-wider text-white uppercase"
                                    >
                                        {{ file.badge }}
                                    </span>
                                </div>

                                <div class="flex flex-1 flex-col p-4">
                                    <div class="mb-2">
                                        <h4
                                            class="truncate text-sm font-bold text-gray-900"
                                            :title="file.name"
                                        >
                                            {{ file.name }}
                                        </h4>
                                        <p class="mt-1 text-xs text-gray-500">
                                            {{ file.date }} • {{ file.size }}
                                        </p>
                                    </div>

                                    <div class="mt-auto flex space-x-2 pt-3">
                                        <button
                                            class="flex flex-1 cursor-pointer items-center justify-center rounded-sm bg-[#50aceb] py-4 text-xs font-bold tracking-wide text-white uppercase transition-colors hover:bg-[#429ad6]"
                                        >
                                            <i
                                                class="fa-solid fa-download mr-2"
                                            ></i>
                                            Télécharger
                                        </button>

                                        <button
                                            @click="openPreview(file)"
                                            class="cursor-pointer rounded-sm bg-gray-100 px-3 text-gray-600 transition-colors hover:bg-gray-200"
                                            title="Aperçu"
                                        >
                                            <i class="fa-solid fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Transition name="fade">
                <div
                    v-if="isPreviewOpen"
                    class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    @click.self="closePreview"
                >
                    <div
                        class="relative flex max-h-[90vh] w-full max-w-6xl flex-col items-center justify-center bg-transparent"
                    >
                        <button
                            @click="closePreview"
                            class="absolute -top-12 right-0 flex items-center text-white transition-colors hover:text-[#50aceb]"
                        >
                            <span
                                class="mr-2 text-sm font-medium tracking-widest uppercase"
                                >Fermer</span
                            >
                            <i class="fa-solid fa-xmark text-3xl"></i>
                        </button>

                        <div
                            v-if="selectedFile && selectedFile.type === 'video'"
                            class="aspect-video w-full overflow-hidden rounded-lg border border-gray-800 bg-black shadow-2xl"
                        >
                            <iframe
                                class="h-full w-full"
                                :src="`https://www.youtube.com/embed/${selectedFile.youtubeId}?autoplay=1`"
                                title="Preview"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>

                        <div
                            v-else-if="
                                selectedFile && selectedFile.type === 'image'
                            "
                            class="overflow-hidden rounded-lg border border-gray-800 shadow-2xl"
                        >
                            <img
                                :src="selectedFile.fullSize"
                                class="max-h-[85vh] w-auto object-contain"
                                alt="Preview"
                            />
                        </div>

                        <div class="mt-4 text-center text-white">
                            <h3 class="text-xl font-bold">
                                {{ selectedFile?.name }}
                            </h3>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </MainLayout>
</template>

<style scoped>
/* Modal Fade Animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
