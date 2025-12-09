<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

// 1. DATA VARIABLES
const items = ref([]); // Stores the portfolio projects
const message = ref('');
const isLoading = ref(false);

// 2. FORM VARIABLE (With safe defaults)
const form = ref({
    title: '',
    category: '',
    type: 'image',
    url: '',
    file: null,
});

// 3. LOAD DATA FUNCTION
const loadData = async () => {
    try {
        // Fetch Portfolio Items
        const res = await axios.get('/api/portfolio');
        items.value = res.data;
    } catch (error) {
        console.error('Error loading data:', error);
    }
};

// 4. SAVE FUNCTION
const save = async () => {
    isLoading.value = true;
    message.value = '';

    const formData = new FormData();
    formData.append('title', form.value.title || 'Sans titre'); // Safety default
    formData.append('category', form.value.category || 'Général');
    formData.append('type', form.value.type);

    if (form.value.type === 'youtube' || form.value.url) {
        formData.append('url', form.value.url || '');
    }
    if (form.value.file) {
        formData.append('file', form.value.file);
    }

    try {
        await axios.post('/api/portfolio', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        message.value = '✅ Projet ajouté !';
        form.value = {
            title: '',
            category: '',
            type: 'image',
            url: '',
            file: null,
        }; // Reset
        loadData(); // Reload list
    } catch (error) {
        message.value = '❌ Erreur de sauvegarde.';
        console.error(error);
    } finally {
        isLoading.value = false;
    }
};

const handleFileChange = (e) => {
    form.value.file = e.target.files[0];
};

const deleteItem = async (id) => {
    if (!confirm('Supprimer ce projet ?')) return;
    try {
        await axios.delete(`/api/portfolio/${id}`);
        loadData();
    } catch (error) {
        alert('Erreur suppression');
    }
};

onMounted(() => {
    loadData();
});
</script>

<template>
    <DashboardLayout>
        <div
            class="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8"
        >
            <div class="mx-auto max-w-6xl">
                <div class="mb-8 text-center">
                    <h1 class="text-3xl font-bold text-gray-800">
                        Gestionnaire de Portefeuille
                    </h1>
                </div>

                <div
                    class="mb-8 overflow-hidden rounded-2xl bg-white shadow-xl"
                >
                    <div
                        class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                    >
                        <h2 class="text-2xl font-bold">Ajouter un projet</h2>
                    </div>

                    <div class="space-y-6 p-6 md:p-8">
                        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                    >Titre</label
                                >
                                <input
                                    v-model="form.title"
                                    type="text"
                                    placeholder="Titre du projet"
                                    class="w-full rounded-lg border p-3 text-gray-600"
                                />
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                    >Catégorie</label
                                >
                                <input
                                    v-model="form.category"
                                    type="text"
                                    placeholder="Drone, Timelapse..."
                                    class="w-full rounded-lg border p-3 text-gray-600"
                                />
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                    >Type</label
                                >
                                <select
                                    v-model="form.type"
                                    class="w-full rounded-lg border p-3 text-gray-600"
                                >
                                    <option value="image">Image</option>
                                    <option value="video">Vidéo</option>
                                    <option value="youtube">YouTube</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                    >Fichier / Lien</label
                                >
                                <input
                                    v-if="form.type === 'youtube'"
                                    v-model="form.url"
                                    type="text"
                                    placeholder="Lien YouTube"
                                    class="w-full rounded-lg border p-3 text-gray-600"
                                />
                                <input
                                    v-else
                                    type="file"
                                    @change="handleFileChange"
                                    class="w-full rounded-lg border p-3 text-gray-600"
                                />
                            </div>
                        </div>

                        <div
                            class="flex items-center justify-end gap-4 border-t pt-4"
                        >
                            <span
                                v-if="message"
                                class="font-bold text-blue-600"
                                >{{ message }}</span
                            >
                            <button
                                @click="save"
                                :disabled="isLoading"
                                class="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
                            >
                                {{
                                    isLoading ? 'Sauvegarde...' : 'Enregistrer'
                                }}
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    v-if="items && items.length > 0"
                    class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <div
                        v-for="item in items"
                        :key="item.id"
                        class="overflow-hidden rounded-xl border bg-white shadow"
                    >
                        <div class="group relative h-48 bg-gray-100">
                            <img
                                v-if="item.type === 'image'"
                                :src="item.src"
                                class="h-full w-full object-cover"
                            />
                            <iframe
                                v-else-if="item.type === 'youtube'"
                                :src="item.src"
                                class="h-full w-full"
                            ></iframe>
                            <video
                                v-else
                                :src="item.src"
                                class="h-full w-full object-cover"
                            ></video>

                            <div
                                class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100"
                            >
                                <button
                                    @click="deleteItem(item.id)"
                                    class="rounded-full bg-red-600 px-4 py-2 font-bold text-white"
                                >
                                    Supprimer
                                </button>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-gray-800">
                                {{ item?.title || 'Sans titre' }}
                            </h3>
                            <span
                                class="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800"
                                >{{ item?.category }}</span
                            >
                        </div>
                    </div>
                </div>

                <div v-else class="py-12 text-center text-gray-500">
                    Aucun projet trouvé. Ajoutez-en un !
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
