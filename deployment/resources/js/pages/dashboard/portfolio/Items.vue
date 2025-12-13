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
    seo_content: '',
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
            seo_content: '',
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

                            <!-- SEO Content Field -->
                            <div class="md:col-span-2">
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                    >Contenu SEO (optionnel)</label
                                >
                                <textarea
                                    v-model="form.seo_content"
                                    rows="4"
                                    class="w-full rounded-lg border p-3 text-gray-600"
                                    placeholder="Ajoutez du contenu supplémentaire pour améliorer le référencement naturel (SEO)..."
                                ></textarea>
                                <p class="mt-1 text-xs text-gray-500">
                                    Ce contenu sera affiché en bas de la page du
                                    projet, avant le pied de page.
                                </p>
                            </div>

                            <!-- Advanced SEO Fields -->
                            <div class="mt-6 md:col-span-2">
                                <h3
                                    class="mb-4 text-lg font-bold text-gray-800"
                                >
                                    Paramètres SEO Avancés
                                </h3>

                                <!-- Meta Tags -->
                                <div
                                    class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label
                                            class="mb-2 block text-sm font-semibold text-gray-700"
                                            >Titre Meta</label
                                        >
                                        <input
                                            v-model="form.meta_title"
                                            type="text"
                                            class="w-full rounded-lg border p-3 text-gray-600"
                                            placeholder="Titre de la page pour les moteurs de recherche"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            class="mb-2 block text-sm font-semibold text-gray-700"
                                            >Mots-clés</label
                                        >
                                        <input
                                            v-model="form.keywords"
                                            type="text"
                                            class="w-full rounded-lg border p-3 text-gray-600"
                                            placeholder="Mots-clés séparés par des virgules"
                                        />
                                    </div>
                                </div>

                                <div class="mb-4">
                                    <label
                                        class="mb-2 block text-sm font-semibold text-gray-700"
                                        >Description Meta</label
                                    >
                                    <textarea
                                        v-model="form.meta_description"
                                        rows="3"
                                        class="w-full rounded-lg border p-3 text-gray-600"
                                        placeholder="Description de la page pour les moteurs de recherche"
                                    ></textarea>
                                </div>

                                <!-- Open Graph -->
                                <div class="mt-4 border-t border-gray-200 pt-4">
                                    <h4
                                        class="text-md mb-3 font-bold text-gray-700"
                                    >
                                        Open Graph (Facebook)
                                    </h4>
                                    <div
                                        class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2"
                                    >
                                        <div>
                                            <label
                                                class="mb-2 block text-sm font-semibold text-gray-700"
                                                >Titre OG</label
                                            >
                                            <input
                                                v-model="form.og_title"
                                                type="text"
                                                class="w-full rounded-lg border p-3 text-gray-600"
                                                placeholder="Titre pour le partage sur Facebook"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                class="mb-2 block text-sm font-semibold text-gray-700"
                                                >Type OG</label
                                            >
                                            <select
                                                v-model="form.og_type"
                                                class="w-full rounded-lg border p-3 text-gray-600"
                                            >
                                                <option value="website">
                                                    Website
                                                </option>
                                                <option value="article">
                                                    Article
                                                </option>
                                                <option value="video">
                                                    Video
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="mb-4">
                                        <label
                                            class="mb-2 block text-sm font-semibold text-gray-700"
                                            >Description OG</label
                                        >
                                        <textarea
                                            v-model="form.og_description"
                                            rows="2"
                                            class="w-full rounded-lg border p-3 text-gray-600"
                                            placeholder="Description pour le partage sur Facebook"
                                        ></textarea>
                                    </div>

                                    <div>
                                        <label
                                            class="mb-2 block text-sm font-semibold text-gray-700"
                                            >Image OG</label
                                        >
                                        <div
                                            class="flex flex-col gap-4 md:flex-row"
                                        >
                                            <div
                                                v-if="form.og_image_preview"
                                                class="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg border-2 border-gray-300"
                                            >
                                                <img
                                                    :src="form.og_image_preview"
                                                    alt="OG Preview"
                                                    class="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div class="flex-1">
                                                <input
                                                    type="file"
                                                    @change="
                                                        handleOgImageChange
                                                    "
                                                    accept="image/*"
                                                    class="w-full rounded-lg border p-3 text-gray-600"
                                                />
                                                <p
                                                    class="mt-1 text-xs text-gray-500"
                                                >
                                                    Image pour le partage sur
                                                    Facebook (PNG, JPG, GIF)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Twitter Card -->
                                <div class="mt-4 border-t border-gray-200 pt-4">
                                    <h4
                                        class="text-md mb-3 font-bold text-gray-700"
                                    >
                                        Twitter Card
                                    </h4>
                                    <div
                                        class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2"
                                    >
                                        <div>
                                            <label
                                                class="mb-2 block text-sm font-semibold text-gray-700"
                                                >Type de carte</label
                                            >
                                            <select
                                                v-model="form.twitter_card"
                                                class="w-full rounded-lg border p-3 text-gray-600"
                                            >
                                                <option value="summary">
                                                    Summary
                                                </option>
                                                <option
                                                    value="summary_large_image"
                                                >
                                                    Summary with Large Image
                                                </option>
                                                <option value="app">App</option>
                                                <option value="player">
                                                    Player
                                                </option>
                                            </select>
                                        </div>
                                        <div>
                                            <label
                                                class="mb-2 block text-sm font-semibold text-gray-700"
                                                >Titre Twitter</label
                                            >
                                            <input
                                                v-model="form.twitter_title"
                                                type="text"
                                                class="w-full rounded-lg border p-3 text-gray-600"
                                                placeholder="Titre pour le partage sur Twitter"
                                            />
                                        </div>
                                    </div>

                                    <div class="mb-4">
                                        <label
                                            class="mb-2 block text-sm font-semibold text-gray-700"
                                            >Description Twitter</label
                                        >
                                        <textarea
                                            v-model="form.twitter_description"
                                            rows="2"
                                            class="w-full rounded-lg border p-3 text-gray-600"
                                            placeholder="Description pour le partage sur Twitter"
                                        ></textarea>
                                    </div>

                                    <div>
                                        <label
                                            class="mb-2 block text-sm font-semibold text-gray-700"
                                            >Image Twitter</label
                                        >
                                        <div
                                            class="flex flex-col gap-4 md:flex-row"
                                        >
                                            <div
                                                v-if="
                                                    form.twitter_image_preview
                                                "
                                                class="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg border-2 border-gray-300"
                                            >
                                                <img
                                                    :src="
                                                        form.twitter_image_preview
                                                    "
                                                    alt="Twitter Preview"
                                                    class="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div class="flex-1">
                                                <input
                                                    type="file"
                                                    @change="
                                                        handleTwitterImageChange
                                                    "
                                                    accept="image/*"
                                                    class="w-full rounded-lg border p-3 text-gray-600"
                                                />
                                                <p
                                                    class="mt-1 text-xs text-gray-500"
                                                >
                                                    Image pour le partage sur
                                                    Twitter (PNG, JPG, GIF)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
