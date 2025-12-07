<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { onMounted, ref } from 'vue';

// 1. Variables for the Form
const form = ref({
    phone: '',
    email: '',
    address: '',
    description: '',
    logo_url: '',
    // Add CTA data
    cta: {
        title: '',
        btn_text: '',
        link: '',
    },
});

const message = ref('');
const isLoading = ref(false);
const logoPreview = ref(null);
const logoFile = ref(null);

// 2. Fetch current data when page loads
const loadCurrentData = async () => {
    const response = await fetch('/api/layout');
    const data = await response.json();
    if (data.general) {
        form.value = data.general;
        if (data.general.logo_url) {
            logoPreview.value = data.general.logo_url;
        }
    }
};

// 3. Handle logo file selection
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

// 4. Save function with file upload
const saveSettings = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        let logoUrl = form.value.logo_url;

        // If a new file is selected, upload it first
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
            } else {
                throw new Error('Failed to upload logo');
            }
        }

        // Save the settings with the logo URL
        const settingsData = {
            ...form.value,
            logo_url: logoUrl,
        };

        const response = await fetch('/api/settings/general', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(settingsData),
        });

        if (response.ok) {
            message.value = '✅ Saved Successfully!';
            // Update the form with the new logo URL
            form.value.logo_url = logoUrl;
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
                        General Settings
                    </h1>
                    <p class="mt-2 text-gray-600">
                        Manage your website's general information
                    </p>
                </div>

                <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div
                        class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                    >
                        <h2 class="text-2xl font-bold">
                            Edit General Information
                        </h2>
                        <p class="mt-1 opacity-90">
                            Update your site's contact details and description
                        </p>
                    </div>

                    <form @submit.prevent="saveSettings" class="p-6 md:p-8">
                        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div class="md:col-span-2">
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                >
                                    Phone Number
                                </label>
                                <div class="relative">
                                    <div
                                        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-gray-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        v-model="form.phone"
                                        type="tel"
                                        placeholder="Enter phone number"
                                        class="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pr-4 pl-10 text-gray-800 placeholder-gray-400 transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    />
                                </div>
                            </div>

                            <div class="md:col-span-2">
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                >
                                    Email Address
                                </label>
                                <div class="relative">
                                    <div
                                        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-gray-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                            />
                                            <path
                                                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        v-model="form.email"
                                        type="email"
                                        placeholder="Enter email address"
                                        class="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pr-4 pl-10 text-gray-800 placeholder-gray-400 transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    />
                                </div>
                            </div>

                            <div class="md:col-span-2">
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                >
                                    Address
                                </label>
                                <div class="relative">
                                    <div
                                        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-gray-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        v-model="form.address"
                                        type="text"
                                        placeholder="Enter full address"
                                        class="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pr-4 pl-10 text-gray-800 placeholder-gray-400 transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    />
                                </div>
                            </div>

                            <div class="md:col-span-2">
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                >
                                    Logo
                                </label>
                                <div class="flex flex-col gap-6 sm:flex-row">
                                    <!-- Logo Preview -->
                                    <div class="flex-shrink-0">
                                        <div
                                            class="flex h-32 w-32 items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-gray-50"
                                        >
                                            <img
                                                v-if="logoPreview"
                                                :src="logoPreview"
                                                alt="Logo preview"
                                                class="h-full w-full object-contain"
                                            />
                                            <svg
                                                v-else
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-12 w-12 text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <!-- Upload Controls -->
                                    <div class="flex-grow">
                                        <div class="flex items-start space-x-4">
                                            <label
                                                class="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:outline-none hover:text-blue-500"
                                            >
                                                <span
                                                    class="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-2 text-white shadow hover:from-blue-700 hover:to-indigo-800"
                                                    >Select Image</span
                                                >
                                                <input
                                                    @change="handleLogoUpload"
                                                    type="file"
                                                    accept="image/*"
                                                    class="sr-only"
                                                />
                                            </label>
                                            <button
                                                v-if="
                                                    logoFile ||
                                                    (form.logo_url && !logoFile)
                                                "
                                                @click="
                                                    () => {
                                                        logoFile = null;
                                                        logoPreview =
                                                            form.logo_url ||
                                                            null;
                                                    }
                                                "
                                                type="button"
                                                class="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                        <p class="mt-2 text-sm text-gray-500">
                                            PNG, JPG, GIF up to 2MB
                                        </p>
                                        <div
                                            v-if="logoFile"
                                            class="mt-2 text-sm text-gray-600"
                                        >
                                            Selected: {{ logoFile.name }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="md:col-span-2">
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                >
                                    Description
                                </label>
                                <textarea
                                    v-model="form.description"
                                    rows="5"
                                    placeholder="Enter site description"
                                    class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 placeholder-gray-400 transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                ></textarea>
                                <p class="mt-1 text-sm text-gray-500">
                                    Briefly describe your company or website
                                </p>
                            </div>
                        </div>

                        <!-- Add CTA Settings Component -->
                        <div class="mt-8">
                            <h3 class="mb-4 text-lg font-medium text-gray-900">
                                Call to Action Settings
                            </h3>
                            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div>
                                    <label
                                        class="mb-1 block text-sm font-medium text-gray-700"
                                    >
                                        CTA Title
                                    </label>
                                    <input
                                        v-model="form.cta.title"
                                        type="text"
                                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="Enter CTA title"
                                    />
                                </div>

                                <div>
                                    <label
                                        class="mb-1 block text-sm font-medium text-gray-700"
                                    >
                                        Button Text
                                    </label>
                                    <input
                                        v-model="form.cta.btn_text"
                                        type="text"
                                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="Enter button text"
                                    />
                                </div>

                                <div class="md:col-span-2">
                                    <label
                                        class="mb-1 block text-sm font-medium text-gray-700"
                                    >
                                        Button Link
                                    </label>
                                    <input
                                        v-model="form.cta.link"
                                        type="text"
                                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="Enter button link"
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end"
                        >
                            <button
                                type="button"
                                @click="loadCurrentData"
                                class="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition duration-200 hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 focus:outline-none"
                            >
                                Reset
                            </button>
                            <button
                                type="submit"
                                :disabled="isLoading"
                                class="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 font-medium text-white shadow-lg transition duration-200 hover:from-blue-700 hover:to-indigo-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                                :class="{
                                    'cursor-not-allowed opacity-75': isLoading,
                                }"
                            >
                                <svg
                                    v-if="isLoading"
                                    class="mr-2 h-5 w-5 animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
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
                                {{ isLoading ? 'Saving...' : 'Save Changes' }}
                            </button>
                        </div>

                        <div
                            v-if="message"
                            class="mt-6 rounded-lg p-4 text-center font-semibold"
                            :class="
                                message.includes('✅')
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-red-100 text-red-700'
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
