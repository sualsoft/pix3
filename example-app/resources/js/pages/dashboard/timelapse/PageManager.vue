<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

// 1. DATA
const items = ref([]);
const message = ref('');
const isLoading = ref(false);
const isEditing = ref(false);
const editingId = ref(null);

// Reference for scrolling
const formTop = ref(null);

// 2. FORM
const form = ref({
    title: '',
    category: 'timelapse',
    sort_order: 0,
    icon: 'fa-solid fa-camera',
    video_url: '',
    content: '',
    thumbnail: null,
    thumbnail_preview: null, // Holds the URL for preview
});

// 3. LOAD LIST
const loadData = async () => {
    try {
        const res = await axios.get('/api/service-pages');
        items.value = res.data;
    } catch (error) {
        console.error(error);
    }
};

// 4. HANDLE FILE (Preview Logic)
const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        form.value.thumbnail = file;
        // Create local preview immediately
        const reader = new FileReader();
        reader.onload = (e) => (form.value.thumbnail_preview = e.target.result);
        reader.readAsDataURL(file);
    }
};

const handleOgImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        form.value.og_image = file;
        // Create local preview immediately
        const reader = new FileReader();
        reader.onload = (e) => (form.value.og_image_preview = e.target.result);
        reader.readAsDataURL(file);
    }
};

const handleTwitterImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        form.value.twitter_image = file;
        // Create local preview immediately
        const reader = new FileReader();
        reader.onload = (e) =>
            (form.value.twitter_image_preview = e.target.result);
        reader.readAsDataURL(file);
    }
};

// 5. EDIT MODE (With Auto-Scroll and Image Preview)
const editItem = (item) => {
    isEditing.value = true;
    editingId.value = item.id;

    // Fill form with database data
    form.value.title = item.title;
    form.value.category = item.category;
    form.value.sort_order = item.sort_order || 0;
    form.value.icon = item.icon || 'fa-solid fa-camera';
    form.value.video_url = item.video_url;
    form.value.content = item.content;
    form.value.seo_content = item.seo_content || '';
    form.value.meta_title = item.meta_title || '';
    form.value.meta_description = item.meta_description || '';
    form.value.keywords = item.keywords || '';
    form.value.og_title = item.og_title || '';
    form.value.og_description = item.og_description || '';
    form.value.og_image = null;
    form.value.og_image_preview = item.og_image;
    form.value.og_type = item.og_type || 'website';
    form.value.twitter_card = item.twitter_card || 'summary';
    form.value.twitter_title = item.twitter_title || '';
    form.value.twitter_description = item.twitter_description || '';
    form.value.twitter_image = null;
    form.value.twitter_image_preview = item.twitter_image;

    // SHOW EXISTING THUMBNAIL
    // We set the preview to the URL coming from the database
    form.value.thumbnail_preview = item.thumbnail;
    form.value.thumbnail = null; // Reset actual file input since we haven't picked a new one yet

    // AUTO SCROLL TO FORM
    if (formTop.value) {
        formTop.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const cancelEdit = () => {
    isEditing.value = false;
    editingId.value = null;
    resetForm();
};

const resetForm = () => {
    form.value = {
        title: '',
        category: 'timelapse',
        sort_order: 0,
        icon: 'fa-solid fa-camera',
        video_url: '',
        content: '',
        seo_content: '',
        meta_title: '',
        meta_description: '',
        keywords: '',
        og_title: '',
        og_description: '',
        og_image: null,
        og_image_preview: null,
        og_type: 'website',
        twitter_card: 'summary',
        twitter_title: '',
        twitter_description: '',
        twitter_image: null,
        twitter_image_preview: null,
        thumbnail: null,
        thumbnail_preview: null,
    };
};

// 6. SAVE FUNCTION
const save = async () => {
    isLoading.value = true;
    message.value = '';

    const formData = new FormData();
    formData.append('title', form.value.title);
    formData.append('category', form.value.category);
    formData.append('sort_order', form.value.sort_order);
    formData.append('icon', form.value.icon);
    formData.append('content', form.value.content);
    if (form.value.video_url)
        formData.append('video_url', form.value.video_url);

    // Only append file if user selected a NEW one
    if (form.value.thumbnail) {
        formData.append('thumbnail', form.value.thumbnail);
    }

    // Only append OG image if user selected a NEW one
    if (form.value.og_image) {
        formData.append('og_image', form.value.og_image);
    }

    // Only append Twitter image if user selected a NEW one
    if (form.value.twitter_image) {
        formData.append('twitter_image', form.value.twitter_image);
    }

    try {
        if (isEditing.value) {
            await axios.post(
                `/api/service-pages/${editingId.value}`,
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                },
            );
            message.value = '✅ Page mise à jour !';
        } else {
            await axios.post('/api/service-pages', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            message.value = '✅ Page créée !';
        }

        cancelEdit();
        loadData();
    } catch (error) {
        message.value = '❌ Erreur de sauvegarde.';
        console.error(error);
    } finally {
        isLoading.value = false;
    }
};

const deleteItem = async (id) => {
    if (!confirm('Supprimer cette page ?')) return;
    try {
        await axios.delete(`/api/service-pages/${id}`);
        loadData();
    } catch (error) {
        alert('Erreur');
    }
};

onMounted(() => loadData());
</script>

<template>
    <DashboardLayout>
        <div
            class="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8"
        >
            <div class="mx-auto max-w-6xl">
                <div class="mb-8 text-center" ref="formTop">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Gestionnaire de Pages
                    </h1>
                    <p class="mt-2 text-gray-700">
                        Gérez vos services Drone et Timelapse.
                    </p>
                </div>

                <div
                    class="mb-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl transition-all duration-500"
                    :class="
                        isEditing
                            ? 'scale-[1.01] transform ring-4 ring-blue-300'
                            : ''
                    "
                >
                    <div
                        class="flex items-center justify-between bg-gradient-to-r from-blue-700 to-indigo-800 p-6 text-white"
                    >
                        <h2 class="flex items-center gap-2 text-2xl font-bold">
                            <i
                                v-if="isEditing"
                                class="fa-solid fa-pen-to-square"
                            ></i>
                            <i v-else class="fa-solid fa-plus-circle"></i>
                            {{
                                isEditing ? 'Modifier la Page' : 'Nouvelle Page'
                            }}
                        </h2>
                        <button
                            v-if="isEditing"
                            @click="cancelEdit"
                            class="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/30"
                        >
                            Annuler l'édition
                        </button>
                    </div>

                    <div class="space-y-6 p-6 md:p-8">
                        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-800"
                                    >Titre de la page</label
                                >
                                <input
                                    v-model="form.title"
                                    type="text"
                                    placeholder="ex: Suivi de Chantier"
                                    class="w-full rounded-lg border-2 border-gray-300 p-3 font-medium text-gray-900 transition focus:border-blue-600"
                                />
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-800"
                                    >Catégorie</label
                                >
                                <select
                                    v-model="form.category"
                                    class="w-full rounded-lg border-2 border-gray-300 bg-white p-3 font-medium text-gray-900 transition focus:border-blue-600"
                                >
                                    <option value="timelapse">Timelapse</option>
                                    <option value="drone">Drone</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-800"
                                    >Ordre d'affichage</label
                                >
                                <input
                                    v-model="form.sort_order"
                                    type="number"
                                    min="0"
                                    class="w-full rounded-lg border-2 border-gray-300 p-3 font-medium text-gray-900 transition focus:border-blue-600"
                                    placeholder="0"
                                />
                                <p class="mt-1 text-xs text-gray-500">
                                    Ordre d'affichage (0 = premier)
                                </p>
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-800"
                                    >Icône</label
                                >
                                <div class="flex gap-2">
                                    <div
                                        class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 text-xl text-blue-600 shadow-sm"
                                    >
                                        <i :class="form.icon"></i>
                                    </div>
                                    <input
                                        v-model="form.icon"
                                        type="text"
                                        placeholder="ex: fa-solid fa-camera"
                                        class="w-full rounded-lg border-2 border-gray-300 p-3 font-medium text-gray-900 transition focus:border-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-800"
                                    >Lien YouTube</label
                                >
                                <input
                                    v-model="form.video_url"
                                    type="text"
                                    placeholder="https://youtube.com/..."
                                    class="w-full rounded-lg border-2 border-gray-300 p-3 font-medium text-gray-900 transition focus:border-blue-600"
                                />
                            </div>

                            <div class="md:col-span-2">
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-800"
                                    >Image de couverture</label
                                >

                                <div
                                    class="flex flex-col items-start gap-6 md:flex-row"
                                >
                                    <div
                                        class="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-gray-100 md:w-1/3"
                                    >
                                        <img
                                            v-if="form.thumbnail_preview"
                                            :src="form.thumbnail_preview"
                                            class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                        />
                                        <div
                                            v-else
                                            class="p-4 text-center text-gray-400"
                                        >
                                            <i
                                                class="fa-regular fa-image mb-2 text-3xl"
                                            ></i>
                                            <p class="text-xs">Aucune image</p>
                                        </div>
                                    </div>

                                    <div class="w-full flex-1">
                                        <p
                                            class="mb-2 text-sm text-gray-600"
                                            v-if="isEditing"
                                        >
                                            L'image actuelle est affichée à
                                            gauche. Téléchargez-en une nouvelle
                                            seulement si vous souhaitez la
                                            remplacer.
                                        </p>
                                        <input
                                            type="file"
                                            @change="handleFileChange"
                                            accept="image/*"
                                            class="w-full rounded-lg border-2 border-gray-300 bg-white p-3 text-gray-700 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-bold file:text-blue-700 hover:file:bg-blue-100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label
                                class="mb-2 block text-sm font-bold text-gray-800"
                                >Contenu de la page</label
                            >
                            <textarea
                                v-model="form.content"
                                rows="8"
                                class="w-full rounded-lg border-2 border-gray-300 p-3 text-sm font-medium text-gray-900 focus:border-blue-600"
                                placeholder="Écrivez votre texte ici..."
                            ></textarea>
                        </div>

                        <!-- SEO Content Field -->
                        <div>
                            <label
                                class="mb-2 block text-sm font-bold text-gray-800"
                                >Contenu SEO (optionnel)</label
                            >
                            <textarea
                                v-model="form.seo_content"
                                rows="4"
                                class="w-full rounded-lg border-2 border-gray-300 p-3 text-sm font-medium text-gray-900 focus:border-blue-600"
                                placeholder="Ajoutez du contenu supplémentaire pour améliorer le référencement naturel (SEO)..."
                            ></textarea>
                            <p class="mt-1 text-xs text-gray-500">
                                Ce contenu sera affiché en bas de page, avant le
                                pied de page, pour améliorer le SEO.
                            </p>
                        </div>

                        <!-- Advanced SEO Fields -->
                        <div class="mt-6">
                            <h3 class="mb-4 text-lg font-bold text-gray-800">
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
                                        class="w-full rounded-lg border-2 border-gray-300 p-3 font-medium text-gray-900 transition focus:border-blue-600"
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
                                        class="w-full rounded-lg border-2 border-gray-300 p-3 font-medium text-gray-900 transition focus:border-blue-600"
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
                                    class="w-full rounded-lg border-2 border-gray-300 p-3 text-sm font-medium text-gray-900 focus:border-blue-600"
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
                                            class="w-full rounded-lg border-2 border-gray-300 p-3 font-medium text-gray-900 transition focus:border-blue-600"
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
                                            class="w-full rounded-lg border-2 border-gray-300 p-3 font-medium text-gray-900 transition focus:border-blue-600"
                                        >
                                            <option value="website">
                                                Website
                                            </option>
                                            <option value="article">
                                                Article
                                            </option>
                                            <option value="video">Video</option>
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
                                        class="w-full rounded-lg border-2 border-gray-300 p-3 text-sm font-medium text-gray-900 focus:border-blue-600"
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
                                                @change="handleOgImageChange"
                                                accept="image/*"
                                                class="w-full rounded-lg border-2 border-gray-300 p-3 font-medium text-gray-900 transition focus:border-blue-600"
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
                                            class="w-full rounded-lg border-2 border-gray-300 p-3 font-medium text-gray-900 transition focus:border-blue-600"
                                        >
                                            <option value="summary">
                                                Summary
                                            </option>
                                            <option value="summary_large_image">
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
                                            class="w-full rounded-lg border-2 border-gray-300 p-3 font-medium text-gray-900 transition focus:border-blue-600"
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
                                        class="w-full rounded-lg border-2 border-gray-300 p-3 text-sm font-medium text-gray-900 focus:border-blue-600"
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
                                            v-if="form.twitter_image_preview"
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
                                                class="w-full rounded-lg border-2 border-gray-300 p-3 font-medium text-gray-900 transition focus:border-blue-600"
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

                        <div
                            class="flex items-center justify-end gap-4 border-t border-gray-200 pt-6"
                        >
                            <span
                                v-if="message"
                                class="animate-pulse text-lg font-bold"
                                :class="
                                    message.includes('✅')
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                "
                                >{{ message }}</span
                            >

                            <button
                                @click="save"
                                :disabled="isLoading"
                                class="flex transform items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105 hover:from-blue-700 hover:to-indigo-800 disabled:scale-100 disabled:opacity-70"
                            >
                                <i
                                    v-if="isLoading"
                                    class="fa-solid fa-spinner animate-spin"
                                ></i>
                                {{
                                    isLoading
                                        ? 'Sauvegarde...'
                                        : isEditing
                                          ? 'Mettre à jour'
                                          : 'Créer la page'
                                }}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <h3
                        class="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900"
                    >
                        <i class="fa-solid fa-layer-group text-blue-600"></i>
                        Pages Existantes ({{ items.length }})
                    </h3>

                    <div
                        class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                    >
                        <div
                            v-for="item in items"
                            :key="item.id"
                            class="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                        >
                            <div
                                class="relative h-48 overflow-hidden bg-gray-100"
                            >
                                <img
                                    :src="
                                        item.thumbnail ||
                                        '/images/hero-bg-1765171683.png'
                                    "
                                    class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />

                                <div
                                    class="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent"
                                ></div>

                                <div
                                    class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase shadow-sm backdrop-blur"
                                    :class="
                                        item.category === 'drone'
                                            ? 'text-purple-700'
                                            : 'text-blue-700'
                                    "
                                >
                                    <i
                                        :class="
                                            item.category === 'drone'
                                                ? 'fa-solid fa-plane-up'
                                                : 'fa-solid fa-clock'
                                        "
                                    ></i>
                                    {{ item.category }}
                                </div>
                            </div>

                            <div class="p-5">
                                <div class="mb-3 flex items-start gap-4">
                                    <div
                                        class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 text-xl text-blue-600 shadow-sm"
                                    >
                                        <i
                                            :class="
                                                item.icon ||
                                                'fa-solid fa-camera'
                                            "
                                        ></i>
                                    </div>
                                    <div>
                                        <h4
                                            class="mb-1 text-lg leading-tight font-bold text-gray-900"
                                        >
                                            {{ item.title }}
                                        </h4>
                                        <p
                                            class="inline-block rounded bg-gray-100 px-1 font-mono text-xs text-gray-500"
                                        >
                                            /{{ item.slug }}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    class="mt-4 flex gap-2 border-t border-gray-100 pt-4"
                                >
                                    <button
                                        @click="editItem(item)"
                                        class="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-50 py-2.5 font-bold text-blue-700 transition hover:bg-blue-100"
                                    >
                                        <i
                                            class="fa-solid fa-pen-to-square"
                                        ></i>
                                        Modifier
                                    </button>
                                    <button
                                        @click="deleteItem(item.id)"
                                        class="rounded-lg bg-red-50 px-4 py-2.5 font-bold text-red-600 transition hover:bg-red-100"
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
