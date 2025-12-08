<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { onMounted, ref } from 'vue';

const form = ref({ title: '', description: '' });
const message = ref('');
const isLoading = ref(false);

// 1. Load Data
const loadData = async () => {
    try {
        const res = await fetch('/api/layout');
        const data = await res.json();
        if (data.home_about) form.value = data.home_about;
    } catch (error) {
        console.error(error);
    }
};

// 2. Save Data
const save = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const response = await fetch('/api/settings/about', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(form.value),
        });

        if (response.ok) {
            message.value = '✅ Saved Successfully!';
        } else {
            message.value = '❌ Error Saving.';
        }
    } catch (error) {
        message.value = '❌ Network Error';
    } finally {
        isLoading.value = false;
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
                <div class="mb-8 text-center">
                    <h1 class="text-3xl font-bold text-gray-800 md:text-4xl">
                        About Section
                    </h1>
                    <p class="mt-2 text-gray-600">
                        Manage the "Who We Are" text on your homepage.
                    </p>
                </div>

                <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div
                        class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                    >
                        <h2 class="text-2xl font-bold">Edit Content</h2>
                        <p class="mt-1 opacity-90">
                            Update your company description and story.
                        </p>
                    </div>

                    <div class="space-y-6 p-6 md:p-8">
                        <div>
                            <label
                                class="mb-2 block text-sm font-semibold text-gray-700"
                                >Section Title</label
                            >
                            <input
                                v-model="form.title"
                                type="text"
                                class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                placeholder="ex: À propos de nous"
                            />
                        </div>

                        <div>
                            <label
                                class="mb-2 block text-sm font-semibold text-gray-700"
                                >Description</label
                            >
                            <textarea
                                v-model="form.description"
                                rows="8"
                                class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 leading-relaxed text-gray-900 placeholder-gray-400 transition duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                placeholder="Enter your company description here..."
                            ></textarea>
                            <p class="mt-2 text-sm text-gray-500">
                                💡 <strong>Tip:</strong> Press
                                <span class="rounded bg-gray-200 px-1 font-bold"
                                    >Enter</span
                                >
                                to create a new paragraph. The website will
                                automatically space them out.
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
                                Reset
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
                                {{ isLoading ? 'Saving...' : 'Save Changes' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
