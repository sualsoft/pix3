<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { onMounted, ref } from 'vue';

// 1. Variables for the Form
const socialLinks = ref([
    { media: 'facebook', icon: 'fa-brands fa-facebook-f', link: '' },
    { media: 'twitter', icon: 'fa-brands fa-twitter', link: '' },
    { media: 'instagram', icon: 'fa-brands fa-instagram', link: '' },
    { media: 'linkedin', icon: 'fa-brands fa-linkedin-in', link: '' },
    { media: 'youtube', icon: 'fa-brands fa-youtube', link: '' },
]);

const message = ref('');
const isLoading = ref(false);

// 2. Fetch current data when page loads
const loadCurrentData = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();
        if (data.social && Array.isArray(data.social)) {
            // Map existing data to our structure
            socialLinks.value = socialLinks.value.map((defaultLink) => {
                const existingLink = data.social.find(
                    (link) => link.media === defaultLink.media,
                );
                return existingLink
                    ? { ...defaultLink, link: existingLink.link }
                    : defaultLink;
            });
        }
    } catch (error) {
        console.error('Error loading social links:', error);
        message.value = '❌ Error loading data';
    }
};

// 3. Add a new social link
const addSocialLink = () => {
    socialLinks.value.push({ media: '', icon: '', link: '' });
};

// 4. Remove a social link
const removeSocialLink = (index) => {
    socialLinks.value.splice(index, 1);
};

// 5. Save function
const saveSettings = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        // Filter out empty links
        const filteredLinks = socialLinks.value.filter(
            (link) => link.link.trim() !== '',
        );

        const response = await fetch('/api/settings/social', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(filteredLinks),
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
                        Social Links Settings
                    </h1>
                    <p class="mt-2 text-gray-600">
                        Manage your website's social media links
                    </p>
                </div>

                <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div
                        class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                    >
                        <h2 class="text-2xl font-bold">Edit Social Links</h2>
                        <p class="mt-1 opacity-90">
                            Update your social media profiles
                        </p>
                    </div>

                    <form @submit.prevent="saveSettings" class="p-6 md:p-8">
                        <div class="space-y-6">
                            <div
                                v-for="(link, index) in socialLinks"
                                :key="index"
                                class="grid grid-cols-1 gap-4 md:grid-cols-12"
                            >
                                <div class="md:col-span-3">
                                    <label
                                        class="mb-2 block text-sm font-semibold text-gray-700"
                                        >Platform</label
                                    >
                                    <select
                                        v-model="link.media"
                                        class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    >
                                        <option value="">
                                            Select Platform
                                        </option>
                                        <option value="facebook">
                                            Facebook
                                        </option>
                                        <option value="twitter">Twitter</option>
                                        <option value="instagram">
                                            Instagram
                                        </option>
                                        <option value="linkedin">
                                            LinkedIn
                                        </option>
                                        <option value="youtube">YouTube</option>
                                        <option value="pinterest">
                                            Pinterest
                                        </option>
                                        <option value="tiktok">TikTok</option>
                                    </select>
                                </div>

                                <div class="md:col-span-4">
                                    <label
                                        class="mb-2 block text-sm font-semibold text-gray-700"
                                        >Icon Class</label
                                    >
                                    <input
                                        v-model="link.icon"
                                        type="text"
                                        placeholder="Font Awesome class (e.g. fa-brands fa-facebook-f)"
                                        class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 placeholder-gray-400 transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    />
                                </div>

                                <div class="md:col-span-4">
                                    <label
                                        class="mb-2 block text-sm font-semibold text-gray-700"
                                        >URL</label
                                    >
                                    <input
                                        v-model="link.link"
                                        type="url"
                                        placeholder="https://example.com"
                                        class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 placeholder-gray-400 transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    />
                                </div>

                                <div class="flex items-end md:col-span-1">
                                    <button
                                        @click="removeSocialLink(index)"
                                        type="button"
                                        class="mb-1 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600 transition duration-200 hover:bg-red-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="flex justify-between pt-4">
                                <button
                                    @click="addSocialLink"
                                    type="button"
                                    class="flex items-center rounded-lg border border-blue-600 px-4 py-2 font-medium text-blue-600 transition duration-200 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="mr-2 h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    Add Link
                                </button>
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
