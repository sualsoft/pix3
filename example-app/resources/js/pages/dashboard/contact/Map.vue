<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

// 1. DATA
const form = ref({
    iframe: '', // This holds the <iframe...> code
});
const message = ref('');
const isLoading = ref(false);

// 2. LOAD DATA
const loadData = async () => {
    try {
        const res = await axios.get('/api/layout');
        const data = res.data;

        // Check if data exists before assigning
        if (data.contact_map && data.contact_map.iframe) {
            form.value.iframe = data.contact_map.iframe;
        }
    } catch (error) {
        console.error('Error loading map settings:', error);
    }
};

// 3. SAVE FUNCTION
const save = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        await axios.post('/api/settings/contact-map', form.value);
        message.value = '✅ Carte mise à jour !';
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
                        Gestionnaire de Carte
                    </h1>
                    <p class="mt-2 text-gray-600">
                        Modifiez la carte Google Maps de votre page contact.
                    </p>
                </div>

                <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div
                        class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                    >
                        <h2 class="text-2xl font-bold">Code d'intégration</h2>
                        <p class="mt-1 opacity-90">
                            Collez le code HTML fourni par Google Maps ici.
                        </p>
                    </div>

                    <div class="space-y-8 p-6 md:p-8">
                        <div
                            class="rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800"
                        >
                            <strong class="mb-2 block text-blue-900"
                                ><i class="fa-solid fa-circle-info mr-1"></i>
                                Comment obtenir le code ?</strong
                            >
                            <ol
                                class="ml-5 list-decimal space-y-1 text-blue-700"
                            >
                                <li>
                                    Allez sur <b>Google Maps</b> et trouvez
                                    votre adresse.
                                </li>
                                <li>
                                    Cliquez sur <b>Partager</b> →
                                    <b>Intégrer une carte</b>.
                                </li>
                                <li>Cliquez sur "Copier le contenu HTML".</li>
                                <li>Collez le code ci-dessous.</li>
                            </ol>
                        </div>

                        <div>
                            <label
                                class="mb-2 block text-sm font-semibold text-gray-700"
                                >Code Iframe</label
                            >
                            <textarea
                                v-model="form.iframe"
                                rows="5"
                                placeholder='<iframe src="https://www.google.com/maps/embed?..." ...></iframe>'
                                class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-mono text-xs text-gray-700 placeholder-gray-400 transition duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 md:text-sm"
                            ></textarea>
                        </div>

                        <div v-if="form.iframe" class="animate-fade-in">
                            <label
                                class="mb-2 block text-sm font-semibold text-gray-700"
                                >Aperçu en direct</label
                            >
                            <div
                                class="h-[350px] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm"
                            >
                                <div
                                    v-html="form.iframe"
                                    class="h-full w-full [&>iframe]:h-full [&>iframe]:w-full"
                                ></div>
                            </div>
                        </div>

                        <div
                            class="mt-8 flex flex-col items-center justify-end gap-4 border-t border-gray-100 pt-6 sm:flex-row"
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

                            <div class="flex gap-4">
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
                                        isLoading
                                            ? 'Sauvegarde...'
                                            : 'Enregistrer la carte'
                                    }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>

<style scoped>
/* Keyframe animation for smoother preview appearance */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
}
</style>
