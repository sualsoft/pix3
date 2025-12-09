<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const form = ref({
    title: '',
    videos: [],
});
const message = ref('');
const isLoading = ref(false);

const loadData = async () => {
    try {
        const res = await axios.get('/api/layout');
        if (res.data.timelapse_videos) {
            form.value = res.data.timelapse_videos;
        }
    } catch (e) {
        console.error(e);
    }
};

// Helper: Extract YouTube ID from URL
const extractId = (url) => {
    const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : url;
};

// Update ID when user pastes link
const updateVideoId = (index, event) => {
    form.value.videos[index].youtubeId = extractId(event.target.value);
};

// Handle Thumbnail
const handleThumb = (e, index) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) =>
            (form.value.videos[index].thumbnail = e.target.result);
        reader.readAsDataURL(file);
    }
};

// Add/Remove Logic
const addVideo = () => {
    form.value.videos.push({
        youtubeId: '',
        thumbnail: '',
        alt: 'Nouvelle vidéo',
    });
};
const removeVideo = (index) => {
    form.value.videos.splice(index, 1);
};

const save = async () => {
    isLoading.value = true;
    try {
        await axios.post('/api/settings/timelapse-videos', form.value);
        message.value = '✅ Vidéos sauvegardées !';
    } catch (e) {
        message.value = '❌ Erreur.';
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => loadData());
</script>

<template>
    <DashboardLayout>
        <div
            class="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8"
        >
            <div class="mx-auto max-w-5xl">
                <div class="mb-8 text-center">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Vidéos Timelapse
                    </h1>
                    <p class="text-gray-600">
                        Gérez la grille de vidéos "Notre portefeuille".
                    </p>
                </div>

                <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div
                        class="flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                    >
                        <h2 class="text-xl font-bold">Liste des Vidéos</h2>
                        <button
                            @click="addVideo"
                            class="rounded bg-white/20 px-3 py-1 text-sm font-bold hover:bg-white/30"
                        >
                            + Ajouter
                        </button>
                    </div>

                    <div class="space-y-6 p-8">
                        <div>
                            <label class="mb-2 block font-bold text-gray-700"
                                >Titre de la section</label
                            >
                            <input
                                v-model="form.title"
                                type="text"
                                class="w-full rounded-lg border p-3 text-gray-600"
                            />
                        </div>

                        <div class="space-y-4">
                            <div
                                v-for="(video, index) in form.videos"
                                :key="index"
                                class="flex flex-col items-start gap-4 rounded-xl border bg-gray-50 p-4 md:flex-row"
                            >
                                <div
                                    class="h-24 w-full flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 md:w-32"
                                >
                                    <img
                                        v-if="video.thumbnail"
                                        :src="video.thumbnail"
                                        class="h-full w-full object-cover"
                                    />
                                    <div
                                        v-else
                                        class="flex h-full w-full items-center justify-center text-xs text-gray-400"
                                    >
                                        No Image
                                    </div>
                                </div>

                                <div class="w-full flex-1 space-y-3">
                                    <div
                                        class="grid grid-cols-1 gap-3 md:grid-cols-2"
                                    >
                                        <div>
                                            <label
                                                class="text-xs font-bold text-gray-500 uppercase"
                                                >YouTube Link/ID</label
                                            >
                                            <input
                                                :value="video.youtubeId"
                                                @input="
                                                    (e) =>
                                                        updateVideoId(index, e)
                                                "
                                                type="text"
                                                class="w-full rounded border p-2 text-sm text-gray-600"
                                                placeholder="Paste YouTube link here"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                class="text-xs font-bold text-gray-500 uppercase"
                                                >Titre Alt</label
                                            >
                                            <input
                                                v-model="video.alt"
                                                type="text"
                                                class="w-full rounded border p-2 text-sm text-gray-600"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            class="text-xs font-bold text-gray-500 uppercase"
                                            >Changer Miniature</label
                                        >
                                        <input
                                            type="file"
                                            @change="
                                                (e) => handleThumb(e, index)
                                            "
                                            class="w-full text-sm"
                                        />
                                    </div>
                                </div>

                                <button
                                    @click="removeVideo(index)"
                                    class="p-2 text-red-500 hover:text-red-700"
                                >
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>

                        <div
                            class="flex items-center justify-end gap-4 border-t pt-6"
                        >
                            <span
                                v-if="message"
                                class="font-bold text-green-600"
                                >{{ message }}</span
                            >
                            <button
                                @click="save"
                                :disabled="isLoading"
                                class="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white"
                            >
                                {{ isLoading ? '...' : 'Sauvegarder' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
