<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

// DATA
const files = ref([]);
const message = ref('');
const isLoading = ref(false);

// FORM STATE
const uploadMode = ref('upload'); // 'upload' or 'link'

// FILE FORM
const fileForm = ref({
    name: '',
    date: new Date().toISOString().slice(0, 10),
    type: 'video', // video or image
    badge: 'NEW',
    youtube_id: '',
    external_link: '',
    thumbnail_file: null,
    download_file: null,
});

// LOAD DATA
const loadData = async () => {
    try {
        const res = await axios.get('/api/user-project');
        files.value = res.data.files;
    } catch (error) {
        console.error(error);
    }
};

// HANDLERS
const handleThumbnail = (e) =>
    (fileForm.value.thumbnail_file = e.target.files[0]);
const handleDownload = (e) =>
    (fileForm.value.download_file = e.target.files[0]);

// ADD FILE FUNCTION
const addFile = async () => {
    isLoading.value = true;
    const formData = new FormData();

    formData.append('name', fileForm.value.name);
    formData.append('date', fileForm.value.date);
    formData.append('type', fileForm.value.type);
    formData.append('badge', fileForm.value.badge);
    if (fileForm.value.youtube_id)
        formData.append('youtube_id', fileForm.value.youtube_id);

    if (uploadMode.value === 'link') {
        formData.append('external_link', fileForm.value.external_link);
    } else {
        if (fileForm.value.download_file)
            formData.append('download_file', fileForm.value.download_file);
    }

    if (fileForm.value.thumbnail_file)
        formData.append('thumbnail_file', fileForm.value.thumbnail_file);

    try {
        await axios.post('/api/user-project/file', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        message.value = '✅ Fichier ajouté !';
        loadData();

        // Reset specific fields
        fileForm.value.name = '';
        fileForm.value.youtube_id = '';
        fileForm.value.external_link = '';
    } catch (e) {
        message.value = '❌ Erreur ajout fichier';
        console.error(e);
    } finally {
        isLoading.value = false;
    }
};

const deleteFile = async (id) => {
    if (!confirm('Supprimer ce fichier ?')) return;
    await axios.delete(`/api/user-project/file/${id}`);
    loadData();
};

onMounted(() => loadData());
</script>

<template>
    <DashboardLayout>
        <div
            class="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8"
        >
            <div class="mx-auto max-w-6xl">
                <div class="mb-8 text-center">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Espace Client
                    </h1>
                    <p class="mt-2 text-gray-500">
                        Gérez les fichiers téléchargeables pour votre client.
                    </p>
                </div>

                <div
                    class="mb-8 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl"
                >
                    <div
                        class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                    >
                        <h2 class="flex items-center gap-2 text-xl font-bold">
                            <i class="fa-solid fa-file-circle-plus"></i> Ajouter
                            un Fichier
                        </h2>
                    </div>
                    <div class="space-y-6 p-8">
                        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <div>
                                <label
                                    class="mb-2 block text-xs font-bold text-gray-500 uppercase"
                                    >Nom du Fichier</label
                                >
                                <input
                                    v-model="fileForm.name"
                                    type="text"
                                    placeholder="ex: Timelapse Semaine 4"
                                    class="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label
                                    class="mb-2 block text-xs font-bold text-gray-500 uppercase"
                                    >Date</label
                                >
                                <input
                                    v-model="fileForm.date"
                                    type="date"
                                    class="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label
                                    class="mb-2 block text-xs font-bold text-gray-500 uppercase"
                                    >Type</label
                                >
                                <select
                                    v-model="fileForm.type"
                                    class="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-700 focus:border-blue-500"
                                >
                                    <option value="video">Vidéo</option>
                                    <option value="image">
                                        Image / Document
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div
                            class="rounded-xl border border-gray-200 bg-gray-50 p-6"
                        >
                            <label
                                class="mb-4 block text-xs font-bold text-gray-500 uppercase"
                                >Source du téléchargement</label
                            >

                            <div class="mb-4 flex gap-4">
                                <label
                                    class="flex cursor-pointer items-center gap-2"
                                >
                                    <input
                                        type="radio"
                                        v-model="uploadMode"
                                        value="upload"
                                        class="text-blue-600 focus:ring-blue-500"
                                    />
                                    <span
                                        class="text-sm font-medium text-gray-700"
                                        >Téléverser un fichier</span
                                    >
                                </label>
                                <label
                                    class="flex cursor-pointer items-center gap-2"
                                >
                                    <input
                                        type="radio"
                                        v-model="uploadMode"
                                        value="link"
                                        class="text-blue-600 focus:ring-blue-500"
                                    />
                                    <span
                                        class="text-sm font-medium text-gray-700"
                                        >Lien Google Drive / Externe</span
                                    >
                                </label>
                            </div>

                            <div
                                v-if="uploadMode === 'link'"
                                class="animate-fade-in"
                            >
                                <input
                                    v-model="fileForm.external_link"
                                    type="text"
                                    placeholder="https://drive.google.com/..."
                                    class="w-full rounded-lg border border-blue-300 bg-blue-50 p-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-200"
                                />
                                <p class="mt-1 text-xs text-gray-500">
                                    Collez le lien de partage ici.
                                </p>
                            </div>

                            <div v-else class="animate-fade-in">
                                <input
                                    type="file"
                                    @change="handleDownload"
                                    class="block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div v-if="fileForm.type === 'video'">
                                <label
                                    class="mb-2 block text-xs font-bold text-gray-500 uppercase"
                                    >ID YouTube (Pour l'aperçu)</label
                                >
                                <div class="flex items-center gap-2">
                                    <div
                                        class="flex h-10 w-10 items-center justify-center rounded bg-red-100 text-red-600"
                                    >
                                        <i class="fa-brands fa-youtube"></i>
                                    </div>
                                    <input
                                        v-model="fileForm.youtube_id"
                                        type="text"
                                        placeholder="ex: dQw4w9WgXcQ"
                                        class="w-full rounded-lg border border-gray-300 p-3 text-gray-700"
                                    />
                                </div>
                                <p class="mt-1 text-xs text-gray-400">
                                    Laissez vide si vous ne voulez pas de
                                    lecture directe.
                                </p>
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-xs font-bold text-gray-500 uppercase"
                                    >Miniature (Image)</label
                                >
                                <input
                                    type="file"
                                    @change="handleThumbnail"
                                    class="block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-200"
                                />
                            </div>
                        </div>

                        <div class="flex items-end gap-4">
                            <div class="w-1/3">
                                <label
                                    class="mb-2 block text-xs font-bold text-gray-500 uppercase"
                                    >Badge</label
                                >
                                <input
                                    v-model="fileForm.badge"
                                    type="text"
                                    placeholder="ex: 4K"
                                    class="w-full rounded-lg border border-gray-300 p-3 text-gray-700"
                                />
                            </div>
                            <div
                                class="flex flex-1 items-center justify-end gap-4"
                            >
                                <span
                                    v-if="message"
                                    class="animate-pulse font-bold text-blue-600"
                                    >{{ message }}</span
                                >
                                <button
                                    @click="addFile"
                                    :disabled="isLoading"
                                    class="transform rounded-lg bg-blue-600 px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-blue-700"
                                >
                                    {{
                                        isLoading
                                            ? 'Ajout...'
                                            : 'Ajouter le Fichier'
                                    }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
                >
                    <div
                        class="flex items-center justify-between border-b border-gray-100 bg-gray-50 p-6"
                    >
                        <h3 class="text-xl font-bold text-gray-800">
                            Fichiers du Projet ({{ files.length }})
                        </h3>
                    </div>
                    <div
                        class="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3"
                    >
                        <div
                            v-for="file in files"
                            :key="file.id"
                            class="group flex gap-4 rounded-xl border border-gray-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-md"
                        >
                            <div
                                class="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100"
                            >
                                <img
                                    :src="file.thumbnail"
                                    class="h-full w-full object-cover"
                                />
                                <div
                                    v-if="file.type === 'video'"
                                    class="absolute inset-0 flex items-center justify-center bg-black/30"
                                >
                                    <i
                                        class="fa-solid fa-play text-xs text-white"
                                    ></i>
                                </div>
                            </div>

                            <div
                                class="flex min-w-0 flex-1 flex-col justify-between"
                            >
                                <div>
                                    <h4
                                        class="truncate text-sm font-bold text-gray-900"
                                        :title="file.name"
                                    >
                                        {{ file.name }}
                                    </h4>
                                    <p class="mt-1 text-xs text-gray-500">
                                        {{ file.date }}
                                    </p>
                                </div>
                                <div
                                    class="mt-2 flex items-end justify-between"
                                >
                                    <span
                                        class="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-gray-600 uppercase"
                                        >{{ file.badge }}</span
                                    >
                                    <button
                                        @click="deleteFile(file.id)"
                                        class="text-gray-400 transition hover:text-red-500"
                                    >
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-5px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
