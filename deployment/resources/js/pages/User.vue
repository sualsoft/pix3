<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';

// 1. GET LOGGED-IN USER INFO
const page = usePage();
// This grabs the name of the person who is currently logged in (e.g. "Jean Client")
const user = computed(() => page.props.auth?.user);

// 2. RECEIVE DATA (Props from Controller)
const props = defineProps({
    project: {
        type: Object,
        default: () => ({ title: 'Projet' }),
    },
    files: {
        type: Array,
        default: () => [],
    },
    stats: {
        type: Object,
        default: () => ({ total_files: 0, new_timelapses: 0 }),
    },
});

// 3. PREVIEW LOGIC
const isPreviewOpen = ref(false);
const selectedFile = ref(null);

const openPreview = (file) => {
    selectedFile.value = file;
    isPreviewOpen.value = true;
    document.body.style.overflow = 'hidden';
};

const closePreview = () => {
    isPreviewOpen.value = false;
    selectedFile.value = null;
    document.body.style.overflow = 'auto';
};
</script>

<template>
    <MainLayout>
        <div class="min-h-screen bg-gray-50 pt-12 font-sans">
            <main class="py-10">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="mb-10">
                        <h2 class="text-3xl font-bold text-gray-900">
                            Bonjour, {{ user?.name || 'Client' }} !
                        </h2>
                        <p class="mt-2 text-sm text-gray-500">
                            Aperçu de votre projet "{{
                                project?.title || 'Projet'
                            }}".
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
                                                {{ stats?.total_files || 0 }}
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
                                                {{ stats?.new_timelapses || 0 }}
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="mb-6 flex items-center justify-between">
                            <h3 class="text-xl font-bold text-gray-900">
                                Vos Fichiers
                            </h3>
                        </div>

                        <div
                            v-if="files && files.length > 0"
                            class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        >
                            <div
                                v-for="file in files"
                                :key="file.id"
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
                                        >{{ file.badge }}</span
                                    >
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
                                        <a
                                            :href="file.download_url"
                                            target="_blank"
                                            class="flex flex-1 cursor-pointer items-center justify-center rounded-sm bg-[#50aceb] py-4 text-xs font-bold tracking-wide text-white uppercase transition-colors hover:bg-[#429ad6]"
                                        >
                                            <i
                                                class="fa-solid fa-download mr-2"
                                            ></i>
                                            Télécharger
                                        </a>
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

                        <div
                            v-else
                            class="rounded-lg border border-gray-200 bg-white py-12 text-center"
                        >
                            <p class="text-gray-500">Aucun fichier trouvé.</p>
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
                            v-if="
                                selectedFile &&
                                selectedFile.type === 'video' &&
                                selectedFile.youtube_id
                            "
                            class="aspect-video w-full overflow-hidden rounded-lg border border-gray-800 bg-black shadow-2xl"
                        >
                            <iframe
                                class="h-full w-full"
                                :src="`https://www.youtube.com/embed/${selectedFile.youtube_id}?autoplay=1`"
                                title="Preview"
                                frameborder="0"
                                allowfullscreen
                            ></iframe>
                        </div>

                        <div
                            v-else-if="selectedFile"
                            class="overflow-hidden rounded-lg border border-gray-800 shadow-2xl"
                        >
                            <img
                                :src="
                                    selectedFile.download_url ||
                                    selectedFile.thumbnail
                                "
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
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
