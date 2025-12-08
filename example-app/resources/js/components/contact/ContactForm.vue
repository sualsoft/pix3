<script setup>
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';

// 1. Data Bucket
const pageData = ref({});
const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
});

// 2. Fetch Data (General Info + Map)
const fetchContactData = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();
        pageData.value = data;
    } catch (error) {
        console.error('Error loading contact details:', error);
    }
};

const isSubmitting = ref(false); // To show a loading state
const statusMessage = ref(''); // To show "Success!" message

const submitForm = async () => {
    isSubmitting.value = true;
    statusMessage.value = '';

    try {
        // We send the data to the route we created in Step 3
        const response = await axios.post('/api/contact-send', form.value);

        // If successful
        statusMessage.value = 'Merci ! Votre message a été envoyé.';

        // Clear the form
        form.value = { name: '', email: '', subject: '', message: '' };
    } catch (error) {
        console.error(error);
        statusMessage.value = "Une erreur s'est produite. Veuillez réessayer.";
    } finally {
        isSubmitting.value = false;
    }
};

onMounted(() => {
    fetchContactData();
});
</script>

<template>
    <div class="bg-gray-50 px-4 py-12 font-sans sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div v-if="pageData.general" class="space-y-6 lg:col-span-1">
                    <div class="bg-white p-8 shadow-sm shadow-[#00000003]">
                        <h3 class="mb-4 text-2xl font-bold text-black">
                            Adresse
                        </h3>
                        <p class="text-sm font-bold text-black uppercase">
                            {{ pageData.general.address }}
                        </p>
                    </div>

                    <div class="bg-white p-8 shadow-sm shadow-[#00000003]">
                        <h3 class="mb-4 text-2xl font-bold text-black">
                            Email
                        </h3>
                        <p class="text-sm font-bold text-black">
                            <a
                                :href="'mailto:' + pageData.general.email"
                                class="hover:text-blue-500"
                            >
                                {{ pageData.general.email }}
                            </a>
                        </p>
                    </div>

                    <div class="bg-white p-8 shadow-sm shadow-[#00000003]">
                        <h3 class="mb-4 text-2xl font-bold text-black">
                            Téléphone
                        </h3>
                        <p class="text-sm font-bold text-black">
                            <a
                                :href="'tel:' + pageData.general.phone"
                                class="hover:text-blue-500"
                            >
                                {{ pageData.general.phone }}
                            </a>
                        </p>
                    </div>
                </div>

                <div v-else class="space-y-6 lg:col-span-1">
                    <div
                        class="h-40 animate-pulse bg-white p-8 shadow-sm"
                    ></div>
                    <div
                        class="h-40 animate-pulse bg-white p-8 shadow-sm"
                    ></div>
                    <div
                        class="h-40 animate-pulse bg-white p-8 shadow-sm"
                    ></div>
                </div>

                <div
                    class="bg-white p-8 shadow-sm shadow-[#00000003] lg:col-span-2"
                >
                    <form @submit.prevent="submitForm" class="space-y-6">
                        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <input
                                    type="text"
                                    v-model="form.name"
                                    placeholder="Nom"
                                    class="w-full border border-sky-300 px-4 py-3 text-gray-600 placeholder-gray-400 transition-colors outline-none focus:border-sky-500"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    v-model="form.email"
                                    placeholder="E-mail"
                                    class="w-full border border-sky-300 px-4 py-3 text-gray-600 placeholder-gray-400 transition-colors outline-none focus:border-sky-500"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <input
                                type="text"
                                v-model="form.subject"
                                placeholder="Sujet"
                                class="w-full border border-sky-300 px-4 py-3 text-gray-600 placeholder-gray-400 transition-colors outline-none focus:border-sky-500"
                                required
                            />
                        </div>

                        <div>
                            <textarea
                                v-model="form.message"
                                placeholder="Un message"
                                rows="6"
                                class="w-full resize-none border border-sky-300 px-4 py-3 text-gray-600 placeholder-gray-400 transition-colors outline-none focus:border-sky-500"
                                required
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                :disabled="isSubmitting"
                                class="bg-[#50aceb] px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-[#429ad6] disabled:opacity-50"
                            >
                                {{
                                    isSubmitting
                                        ? 'Envoi en cours...'
                                        : 'Envoyer le message'
                                }}
                            </button>
                        </div>
                        <div
                            v-if="statusMessage"
                            class="mb-4 rounded p-3 text-center"
                            :class="
                                statusMessage.includes('erreur')
                                    ? 'bg-red-100 text-red-700'
                                    : 'bg-green-100 text-green-700'
                            "
                        >
                            {{ statusMessage }}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div
        class="map-container relative h-[450px] w-full overflow-hidden bg-gray-100 shadow-sm"
    >
        <div
            v-if="pageData.contact_map"
            v-html="pageData.contact_map.iframe"
            class="h-full w-full"
        ></div>

        <div
            v-else
            class="flex h-full w-full items-center justify-center text-gray-400"
        >
            Chargement de la carte...
        </div>
    </div>
</template>

<style scoped>
.map-container :deep(iframe) {
    width: 100% !important;
    height: 100% !important;
    border: 0;
}
</style>
