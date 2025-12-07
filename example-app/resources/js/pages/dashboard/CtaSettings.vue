<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { onMounted, ref } from 'vue';

// 1. Initialize variable
const ctaData = ref({
    title: '',
    btn_text: '',
    link: '',
});

const message = ref('');
const isLoading = ref(false);

// 2. Fetch data (FIXED)
const fetchLayout = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();

        // FIX: Look in 'data.cta', not 'data.general.cta'
        if (data.cta) {
            ctaData.value = data.cta;
        }
    } catch (error) {
        console.error('Error loading CTA:', error);
        message.value = '❌ Error loading data';
    }
};

// 3. Save function (FIXED)
const saveSettings = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        // FIX: Send to '/api/settings/cta' instead of 'general'
        const response = await fetch('/api/settings/cta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            // FIX: Send data directly, don't wrap it in { cta: ... }
            body: JSON.stringify(ctaData.value),
        });

        if (response.ok) {
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

// 4. Run on page load
onMounted(() => {
    fetchLayout();
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
                        CTA Settings
                    </h1>
                    <p class="mt-2 text-gray-600">
                        Manage your website's call to action section
                    </p>
                </div>

                <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div
                        class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                    >
                        <h2 class="text-2xl font-bold">Edit CTA Settings</h2>
                        <p class="mt-1 opacity-90">
                            Update your call to action section content
                        </p>
                    </div>

                    <form @submit.prevent="saveSettings" class="p-6 md:p-8">
                        <div class="space-y-6">
                            <div>
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                >
                                    Title
                                </label>
                                <input
                                    v-model="ctaData.title"
                                    type="text"
                                    placeholder="Enter CTA title"
                                    class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 placeholder-gray-400 transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                >
                                    Button Text
                                </label>
                                <input
                                    v-model="ctaData.btn_text"
                                    type="text"
                                    placeholder="Enter button text"
                                    class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 placeholder-gray-400 transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-semibold text-gray-700"
                                >
                                    Button Link
                                </label>
                                <input
                                    v-model="ctaData.link"
                                    type="text"
                                    placeholder="Enter button link"
                                    class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 placeholder-gray-400 transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>
                        </div>

                        <div
                            class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end"
                        >
                            <button
                                type="button"
                                @click="fetchLayout"
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
