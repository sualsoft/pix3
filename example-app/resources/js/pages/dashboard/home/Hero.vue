<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

// 1. Data Structure matches your Seeder keys
const heroData = ref({
    title: '',
    description: '',
    btn_text: '',
    video_link: '',
    bg_image: '',
});

const message = ref('');
const isLoading = ref(false);

// 2. Fetch Data
const fetchLayout = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();

        // Load 'home_hero' data
        if (data.home_hero) {
            heroData.value = data.home_hero;
        }
    } catch (error) {
        console.error('Error loading data:', error);
    }
};

// 3. Handle Image Upload (Convert file to Base64 for preview & upload)
const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            // Set the base64 string to the variable
            heroData.value.bg_image = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

// 4. Save Data
const saveSettings = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const response = await fetch('/api/settings/hero', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(heroData.value),
        });

        if (response.ok) {
            const result = await response.json();
            // Update local data with the clean URL returned from server
            if (result.data) heroData.value = result.data;
            message.value = '✅ Saved Successfully!';
        } else {
            message.value = '❌ Error Saving.';
        }
    } catch (error) {
        console.error(error);
        message.value = '❌ Network Error';
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    fetchLayout();
});
</script>

<template>
    <DashboardLayout>
        <Head title="Hero Settings" />

        <div
            class="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8"
        >
            <div class="mx-auto max-w-6xl">
                <div class="mb-8 text-center">
                    <h1 class="text-3xl font-bold text-gray-800 md:text-4xl">
                        Section Héros
                    </h1>
                    <p class="mt-2 text-gray-600">
                        Gérez la bannière principale en haut de votre site web
                    </p>
                </div>

                <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div
                        class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                    >
                        <h2 class="text-2xl font-bold">
                            Modifier le contenu du héros
                        </h2>
                        <p class="mt-1 opacity-90">
                            Mettez à jour le titre, le lien vidéo et l'image de
                            fond.
                        </p>
                    </div>

                    <form
                        @submit.prevent="saveSettings"
                        class="space-y-6 p-6 md:p-8"
                    >
                        <div>
                            <label
                                class="mb-2 block text-sm font-semibold text-gray-700"
                                >Titre principal</label
                            >
                            <input
                                v-model="heroData.title"
                                type="text"
                                class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                                placeholder="ex: Valorisez, Inspectez..."
                            />
                        </div>

                        <div>
                            <label
                                class="mb-2 block text-sm font-semibold text-gray-700"
                                >Description</label
                            >
                            <textarea
                                v-model="heroData.description"
                                rows="3"
                                class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                                placeholder="ex: Votre partenaire de confiance..."
                            ></textarea>
                        </div>

                        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                    >Texte du bouton</label
                                >
                                <input
                                    v-model="heroData.btn_text"
                                    type="text"
                                    class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                                    placeholder="ex: Regarder une vidéo"
                                />
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                    >Lien vidéo YouTube</label
                                >
                                <input
                                    v-model="heroData.video_link"
                                    type="text"
                                    class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                                    placeholder="https://youtube.com/watch?v=..."
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                class="mb-2 block text-sm font-semibold text-gray-700"
                                >Image d'arrière-plan</label
                            >

                            <div v-if="heroData.bg_image" class="mb-4">
                                <img
                                    :src="heroData.bg_image"
                                    class="h-48 w-full rounded-lg border border-gray-200 object-cover shadow-md"
                                    alt="Preview"
                                />
                            </div>

                            <div
                                class="flex justify-center rounded-lg border-2 border-dashed border-gray-300 px-6 py-8 transition hover:bg-gray-50"
                            >
                                <div class="text-center">
                                    <div
                                        class="flex justify-center text-sm text-gray-600"
                                    >
                                        <label
                                            class="relative cursor-pointer rounded-md font-medium text-blue-600 focus-within:outline-none hover:text-blue-500"
                                        >
                                            <span
                                                >Téléverser une image (nouveau
                                                fichier)</span
                                            >
                                            <input
                                                type="file"
                                                class="sr-only"
                                                accept="image/*"
                                                @change="handleImageUpload"
                                            />
                                        </label>
                                    </div>
                                    <p class="mt-2 text-xs text-gray-500">
                                        PNG, JPG, GIF jusqu'à 5Mo
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            class="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-end"
                        >
                            <div
                                v-if="message"
                                class="font-semibold"
                                :class="
                                    message.includes('✅')
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                "
                            >
                                {{ message }}
                            </div>

                            <button
                                type="button"
                                @click="fetchLayout"
                                class="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
                            >
                                Réinitialiser
                            </button>

                            <button
                                type="submit"
                                :disabled="isLoading"
                                class="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 font-medium text-white shadow-lg transition hover:from-blue-700 hover:to-indigo-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70"
                            >
                                <span v-if="isLoading" class="mr-2 animate-spin"
                                    >⚪</span
                                >
                                {{
                                    isLoading
                                        ? 'Économie...'
                                        : 'Enregistrer les modifications'
                                }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
