<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

// 1. DATA
const form = ref({
    title: '',
    bg_image: '', // This will hold the URL or the Base64 string
});
const message = ref('');
const isLoading = ref(false);

// 2. LOAD DATA
const loadData = async () => {
    try {
        const res = await axios.get('/api/layout');
        const data = res.data;

        // Check if portfolio_hero exists in the response
        if (data.contact_hero) {
            form.value.title = data.contact_hero.title || '';
            form.value.bg_image = data.contact_hero.bg_image || '';
        }
    } catch (error) {
        console.error('Error loading settings:', error);
    }
};

// 3. HANDLE IMAGE UPLOAD (Convert to Base64)
// Your controller expects Base64 for the Hero section settings
const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        form.value.bg_image = e.target.result; // This sets the preview AND the data to send
    };
    reader.readAsDataURL(file);
};

// 4. SAVE SETTINGS
const save = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        // We send JSON because we are sending Base64 strings, not raw files
        const response = await axios.post(
            '/api/settings/contact-hero',
            form.value,
        );

        if (response.data.data) {
            // Update form with the clean URL returned from server
            form.value = response.data.data;
        }

        message.value = '✅ Header mis à jour avec succès !';
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
                        En-tête de contact
                    </h1>
                    <p class="mt-2 text-gray-600">
                        Modifiez l'image de fond et le titre de la page
                        "Contact".
                    </p>
                </div>

                <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div
                        class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                    >
                        <h2 class="text-2xl font-bold">Paramètres du Hero</h2>
                        <p class="mt-1 opacity-90">
                            C'est la première section que les visiteurs voient.
                        </p>
                    </div>

                    <div class="space-y-8 p-6 md:p-8">
                        <div>
                            <label
                                class="mb-2 block text-sm font-semibold text-gray-700"
                                >Titre principal</label
                            >
                            <input
                                v-model="form.title"
                                type="text"
                                placeholder="ex: Notre Portefeuille"
                                class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 placeholder-gray-400 transition duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />
                        </div>

                        <div>
                            <label
                                class="mb-2 block text-sm font-semibold text-gray-700"
                                >Image de fond</label
                            >

                            <div
                                class="group relative mb-4 h-64 w-full overflow-hidden rounded-xl border-2 border-dashed border-gray-300 bg-gray-50"
                            >
                                <img
                                    v-if="form.bg_image"
                                    :src="form.bg_image"
                                    class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div
                                    v-else
                                    class="flex h-full w-full flex-col items-center justify-center text-gray-400"
                                >
                                    <svg
                                        class="mb-2 h-12 w-12"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                    <span>Aucune image sélectionnée</span>
                                </div>

                                <div
                                    class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100"
                                >
                                    <label
                                        class="cursor-pointer rounded-lg bg-white px-6 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100"
                                    >
                                        Changer l'image
                                        <input
                                            type="file"
                                            class="hidden"
                                            accept="image/*"
                                            @change="handleImageUpload"
                                        />
                                    </label>
                                </div>
                            </div>
                            <p class="text-xs text-gray-500">
                                Recommandé : 1920x600px ou plus large.
                            </p>
                        </div>

                        <div
                            class="mt-8 flex flex-col items-center justify-end gap-4 border-t border-gray-100 pt-6 sm:flex-row"
                        >
                            <div
                                v-if="message"
                                class="font-bold"
                                :class="
                                    message.includes('✅')
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                "
                            >
                                {{ message }}
                            </div>

                            <button
                                @click="loadData"
                                class="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
                            >
                                Annuler
                            </button>

                            <button
                                @click="save"
                                :disabled="isLoading"
                                class="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-3 font-bold text-white shadow-lg transition hover:from-blue-700 hover:to-indigo-800 disabled:opacity-70"
                            >
                                <svg
                                    v-if="isLoading"
                                    class="mr-2 h-5 w-5 animate-spin"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        class="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        stroke-width="4"
                                    ></circle>
                                    <path
                                        class="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                {{
                                    isLoading ? 'Sauvegarde...' : 'Enregistrer'
                                }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
