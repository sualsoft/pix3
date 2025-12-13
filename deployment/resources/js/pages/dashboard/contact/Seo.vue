<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

// 1. DATA
const form = ref({
    content: '',
    meta_title: '',
    meta_description: '',
    keywords: '',
    og_title: '',
    og_description: '',
    og_image: null,
    og_image_preview: '',
    og_type: 'website',
    twitter_card: 'summary_large_image',
    twitter_title: '',
    twitter_description: '',
    twitter_image: null,
    twitter_image_preview: '',
});

const message = ref('');
const isLoading = ref(false);

// Handle file input changes for OG image
const handleOgImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        form.value.og_image = file;
        form.value.og_image_preview = URL.createObjectURL(file);
    }
};

// Handle file input changes for Twitter image
const handleTwitterImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        form.value.twitter_image = file;
        form.value.twitter_image_preview = URL.createObjectURL(file);
    }
};

// 2. LOAD DATA
const loadData = async () => {
    try {
        const res = await axios.get('/api/layout');
        const data = res.data;

        // Check if contact_seo exists in the response
        if (data.contact_seo) {
            form.value.content = data.contact_seo.content || '';
            form.value.meta_title = data.contact_seo.meta_title || '';
            form.value.meta_description =
                data.contact_seo.meta_description || '';
            form.value.keywords = data.contact_seo.keywords || '';
            form.value.og_title = data.contact_seo.og_title || '';
            form.value.og_description = data.contact_seo.og_description || '';
            form.value.og_image_preview = data.contact_seo.og_image || '';
            form.value.og_type = data.contact_seo.og_type || 'website';
            form.value.twitter_card =
                data.contact_seo.twitter_card || 'summary_large_image';
            form.value.twitter_title = data.contact_seo.twitter_title || '';
            form.value.twitter_description =
                data.contact_seo.twitter_description || '';
            form.value.twitter_image_preview =
                data.contact_seo.twitter_image || '';
        }
    } catch (error) {
        console.error('Error loading settings:', error);
    }
};

// 3. SAVE SETTINGS
const save = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const formData = new FormData();

        // Append all form fields
        formData.append('content', form.value.content || '');
        formData.append('meta_title', form.value.meta_title || '');
        formData.append('meta_description', form.value.meta_description || '');
        formData.append('keywords', form.value.keywords || '');
        formData.append('og_title', form.value.og_title || '');
        formData.append('og_description', form.value.og_description || '');
        formData.append('og_type', form.value.og_type || 'website');
        formData.append(
            'twitter_card',
            form.value.twitter_card || 'summary_large_image',
        );
        formData.append('twitter_title', form.value.twitter_title || '');
        formData.append(
            'twitter_description',
            form.value.twitter_description || '',
        );

        // Append image files if they exist
        if (form.value.og_image instanceof File) {
            formData.append('og_image', form.value.og_image);
        } else if (form.value.og_image_preview) {
            // If we have a preview but no file, it means we're keeping the existing image
            formData.append('og_image', form.value.og_image_preview);
        }

        if (form.value.twitter_image instanceof File) {
            formData.append('twitter_image', form.value.twitter_image);
        } else if (form.value.twitter_image_preview) {
            // If we have a preview but no file, it means we're keeping the existing image
            formData.append('twitter_image', form.value.twitter_image_preview);
        }

        const response = await axios.post(
            '/api/settings/contact-seo',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },
        );

        message.value =
            response.data.message || '✅ Contenu SEO mis à jour avec succès !';

        // Reload data to get the new image URLs
        await loadData();
    } catch (error) {
        console.error(error);
        message.value = '❌ Erreur lors de la sauvegarde.';
    } finally {
        isLoading.value = false;
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
            <div class="mx-auto max-w-4xl">
                <div class="mb-8 text-center">
                    <h1 class="text-3xl font-bold text-gray-800 md:text-4xl">
                        Contenu SEO de la page Contact
                    </h1>
                    <p class="mt-2 text-gray-600">
                        Modifiez le contenu supplémentaire pour améliorer le
                        référencement naturel de la page Contact.
                    </p>
                </div>

                <div
                    class="overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
                >
                    <div
                        class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                    >
                        <h2 class="text-2xl font-bold">
                            <i class="fa-solid fa-chart-line mr-2"></i>
                            Contenu SEO
                        </h2>
                        <p class="mt-2 text-blue-100">
                            Ce contenu sera affiché en bas de la page Contact,
                            avant le pied de page.
                        </p>
                    </div>

                    <div class="p-6 md:p-8">
                        <div class="mb-6">
                            <label
                                class="mb-2 block text-sm font-bold text-gray-800"
                                >Contenu SEO</label
                            >
                            <textarea
                                v-model="form.content"
                                rows="8"
                                class="w-full rounded-lg border-2 border-gray-300 p-3 text-sm font-medium text-gray-900 focus:border-blue-600"
                                placeholder="Ajoutez du contenu supplémentaire pour améliorer le référencement naturel (SEO) de la page Contact..."
                            ></textarea>
                            <p class="mt-1 text-xs text-gray-500">
                                Ce contenu peut inclure des mots-clés
                                pertinents, des informations détaillées sur vos
                                services de contact, ou tout autre contenu utile
                                pour les moteurs de recherche.
                            </p>
                        </div>

                        <!-- Advanced SEO Fields -->
                        <div class="mt-8">
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
                            class="flex flex-col items-center justify-end gap-4 border-t border-gray-100 pt-6 sm:flex-row"
                        >
                            <div
                                v-if="message"
                                class="flex items-center font-bold"
                                :class="
                                    message.includes('✅')
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                "
                            >
                                {{ message }}
                            </div>

                            <button
                                @click="save"
                                :disabled="isLoading"
                                class="flex transform items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105 hover:from-blue-700 hover:to-indigo-800 disabled:scale-100 disabled:opacity-70"
                            >
                                <i
                                    v-if="isLoading"
                                    class="fa-solid fa-spinner animate-spin"
                                ></i>
                                <span v-else>
                                    <i class="fa-solid fa-save mr-2"></i>
                                    Sauvegarder
                                </span>
                                <span v-if="isLoading">Sauvegarde...</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
