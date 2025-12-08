<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { onMounted, ref } from 'vue';

// 1. Form Data (Removed CTA)
const form = ref({
    phone: '',
    email: '',
    address: '',
    description: '',
    logo_url: '',
});

const message = ref('');
const isLoading = ref(false);
const logoPreview = ref(null);
const logoFile = ref(null);

// 2. Load Data from Database
const loadCurrentData = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();

        // Map database values to the form
        if (data.general) {
            form.value.phone = data.general.phone || '';
            form.value.email = data.general.email || '';
            form.value.address = data.general.address || '';
            form.value.description = data.general.description || '';
            form.value.logo_url = data.general.logo_url || '';

            if (data.general.logo_url) {
                logoPreview.value = data.general.logo_url;
            }
        }
    } catch (error) {
        console.error('Error loading data', error);
    }
};

// 3. Handle Logo Selection
const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        logoFile.value = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            logoPreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

// 4. Save Function
const saveSettings = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        let logoUrl = form.value.logo_url;

        // Step A: Upload Logo (if a new file is selected)
        if (logoFile.value) {
            const formData = new FormData();
            formData.append('logo', logoFile.value);

            const uploadResponse = await fetch('/api/settings/upload-logo', {
                method: 'POST',
                body: formData,
            });

            if (uploadResponse.ok) {
                const uploadData = await uploadResponse.json();
                logoUrl = uploadData.logo_url;
            }
        }

        // Step B: Save General Info
        const finalData = {
            ...form.value,
            logo_url: logoUrl,
        };

        const response = await fetch('/api/settings/general', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(finalData),
        });

        if (response.ok) {
            message.value = '✅ Saved Successfully!';
            form.value.logo_url = logoUrl; // Update local variable
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
    loadCurrentData();
});
</script>

<template>
    <DashboardLayout>
        <div
            class="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8"
        >
            <div class="mx-auto max-w-6xl">
                <div class="mb-8 text-center">
                    <h1 class="text-3xl font-bold text-gray-800 md:text-4xl">
                        Paramètres généraux
                    </h1>
                    <p class="mt-2 text-gray-600">
                        Gérez les informations de contact de votre site web
                    </p>
                </div>

                <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div
                        class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                    >
                        <h2 class="text-2xl font-bold">
                            Modifier les informations
                        </h2>
                    </div>

                    <form @submit.prevent="saveSettings" class="p-6 md:p-8">
                        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div class="md:col-span-2">
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                    >Numéro de téléphone</label
                                >
                                <input
                                    v-model="form.phone"
                                    type="tel"
                                    class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>

                            <div class="md:col-span-2">
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                    >E-mail</label
                                >
                                <input
                                    v-model="form.email"
                                    type="email"
                                    class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>

                            <div class="md:col-span-2">
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                    >Adresse</label
                                >
                                <input
                                    v-model="form.address"
                                    type="text"
                                    class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>

                            <div class="md:col-span-2">
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                    >Logo</label
                                >
                                <div class="flex items-center gap-4">
                                    <div
                                        class="flex h-20 w-20 items-center justify-center overflow-hidden rounded border bg-gray-50"
                                    >
                                        <img
                                            v-if="logoPreview"
                                            :src="logoPreview"
                                            class="h-full w-full object-contain"
                                        />
                                        <span
                                            v-else
                                            class="text-xs text-gray-400"
                                            >No Logo</span
                                        >
                                    </div>
                                    <input
                                        type="file"
                                        @change="handleLogoUpload"
                                        accept="image/*"
                                        class="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                                    />
                                </div>
                                <p class="mt-1 text-sm text-gray-500">
                                    Téléchargements dans le dossier public
                                </p>
                            </div>

                            <div class="md:col-span-2">
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                    >Description</label
                                >
                                <textarea
                                    v-model="form.description"
                                    rows="3"
                                    class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                ></textarea>
                            </div>
                        </div>

                        <div class="mt-8 flex justify-end">
                            <button
                                type="submit"
                                :disabled="isLoading"
                                class="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-blue-700 disabled:opacity-50"
                            >
                                {{
                                    isLoading
                                        ? 'Économie...'
                                        : 'Enregistrer les paramètres'
                                }}
                            </button>
                        </div>

                        <div
                            v-if="message"
                            class="mt-4 text-center font-bold"
                            :class="
                                message.includes('✅')
                                    ? 'text-green-600'
                                    : 'text-red-600'
                            "
                        >
                            {{ message }}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
