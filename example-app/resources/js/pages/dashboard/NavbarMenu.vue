<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { onMounted, ref } from 'vue';

// 1. Variables for the Form
const navbarLinks = ref([
    { name: 'Home', link: '/', is_button: false },
    { name: 'About', link: '/about', is_button: false },
    { name: 'Services', link: '/services', is_button: false },
    { name: 'Contact', link: '/contact', is_button: false },
    { name: 'Login', link: '/login', is_button: true },
]);

const message = ref('');
const isLoading = ref(false);

// 2. Fetch current data when page loads
const loadCurrentData = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();
        if (data.navbar && Array.isArray(data.navbar)) {
            navbarLinks.value = data.navbar;
        }
    } catch (error) {
        console.error('Error loading navbar links:', error);
        message.value = '❌ Error loading data';
    }
};

// 3. Add a new navbar link
const addNavbarLink = () => {
    navbarLinks.value.push({ name: '', link: '', is_button: false });
};

// 4. Remove a navbar link
const removeNavbarLink = (index) => {
    navbarLinks.value.splice(index, 1);
};

// 5. Toggle button status
const toggleButtonStatus = (index) => {
    navbarLinks.value[index].is_button = !navbarLinks.value[index].is_button;
};

// 6. Save function
const saveSettings = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        // Filter out empty links
        const filteredLinks = navbarLinks.value.filter(
            (link) => link.name.trim() !== '' && link.link.trim() !== '',
        );

        const response = await fetch('/api/settings/navbar', {
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
                        Paramètres de la barre de navigation
                    </h1>
                    <p class="mt-2 text-gray-600">
                        Gérez le menu de navigation de votre site web
                    </p>
                </div>

                <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div
                        class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                    >
                        <h2 class="text-2xl font-bold">
                            Modifier la barre de navigation
                        </h2>
                        <p class="mt-1 opacity-90">
                            Mettre à jour vos liens de navigation de barre de
                            navigation
                        </p>
                    </div>

                    <form @submit.prevent="saveSettings" class="p-6 md:p-8">
                        <div class="space-y-6">
                            <div
                                v-for="(link, index) in navbarLinks"
                                :key="index"
                                class="grid grid-cols-1 gap-4 md:grid-cols-12"
                            >
                                <div class="md:col-span-4">
                                    <label
                                        class="mb-2 block text-sm font-semibold text-gray-700"
                                        >Nom du lien</label
                                    >
                                    <input
                                        v-model="link.name"
                                        type="text"
                                        placeholder="Link display name"
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
                                        type="text"
                                        placeholder="/page or https://example.com"
                                        class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 placeholder-gray-400 transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    />
                                </div>

                                <div class="flex items-end md:col-span-3">
                                    <div class="flex items-center">
                                        <button
                                            @click="toggleButtonStatus(index)"
                                            type="button"
                                            class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                                            :class="
                                                link.is_button
                                                    ? 'bg-blue-600'
                                                    : 'bg-gray-200'
                                            "
                                        >
                                            <span
                                                class="pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                                :class="
                                                    link.is_button
                                                        ? 'translate-x-5'
                                                        : 'translate-x-0'
                                                "
                                            >
                                                <span
                                                    class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                                                    :class="
                                                        link.is_button
                                                            ? 'opacity-0 duration-100 ease-out'
                                                            : 'opacity-100 duration-200 ease-in'
                                                    "
                                                >
                                                    <svg
                                                        class="h-3 w-3 text-gray-400"
                                                        fill="none"
                                                        viewBox="0 0 12 12"
                                                    >
                                                        <path
                                                            d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                                <span
                                                    class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                                                    :class="
                                                        link.is_button
                                                            ? 'opacity-100 duration-200 ease-in'
                                                            : 'opacity-0 duration-100 ease-out'
                                                    "
                                                >
                                                    <svg
                                                        class="h-3 w-3 text-blue-600"
                                                        fill="currentColor"
                                                        viewBox="0 0 12 12"
                                                    >
                                                        <path
                                                            d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-5.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                                        />
                                                    </svg>
                                                </span>
                                            </span>
                                        </button>
                                        <span
                                            class="ml-3 text-sm font-medium text-gray-700"
                                            >Style de bouton</span
                                        >
                                    </div>
                                </div>

                                <div class="flex items-end md:col-span-1">
                                    <button
                                        @click="removeNavbarLink(index)"
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
                                    @click="addNavbarLink"
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
                                    Ajouter un lien
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
                                Réinitialiser
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
                                {{
                                    isLoading
                                        ? 'Enregistrement...'
                                        : 'Enregistrer les changements'
                                }}
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
