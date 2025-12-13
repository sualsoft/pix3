<script setup lang="ts">
import AdminLayout from '@/layouts/admin/AdminLayout.vue';
import { Head } from '@inertiajs/vue3';

interface Props {
    title?: string;
}

withDefaults(defineProps<Props>(), {
    title: 'Home Page Editor',
});
</script>

<template>
    <AdminLayout :title="title">
        <Head title="Home Page Editor" />

        <div class="rounded-lg bg-white p-6 shadow-md">
            <h2 class="mb-6 text-xl font-semibold">Home Page Content</h2>

            <form class="space-y-6">
                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Hero Title</label
                    >
                    <input
                        type="text"
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter hero title"
                        value="Welcome to Our Website"
                    />
                </div>

                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Hero Subtitle</label
                    >
                    <textarea
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        rows="2"
                        placeholder="Enter hero subtitle"
                    >
Discover amazing features and services that will transform your experience.</textarea
                    >
                </div>

                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Call to Action Text</label
                    >
                    <input
                        type="text"
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter CTA text"
                        value="Get Started"
                    />
                </div>

                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Featured Services</label
                    >
                    <div class="mt-2 space-y-4">
                        <div class="flex items-center space-x-3">
                            <input
                                type="text"
                                class="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Service title"
                                value="Fast Performance"
                            />
                            <input
                                type="text"
                                class="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Service description"
                                value="Lightning-fast loading times and optimized performance"
                            />
                            <button
                                type="button"
                                class="text-red-500 hover:text-red-700"
                            >
                                <svg
                                    class="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    ></path>
                                </svg>
                            </button>
                        </div>

                        <div class="flex items-center space-x-3">
                            <input
                                type="text"
                                class="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Service title"
                                value="Secure & Reliable"
                            />
                            <input
                                type="text"
                                class="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Service description"
                                value="Enterprise-grade security to keep your data safe"
                            />
                            <button
                                type="button"
                                class="text-red-500 hover:text-red-700"
                            >
                                <svg
                                    class="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    ></path>
                                </svg>
                            </button>
                        </div>

                        <button
                            type="button"
                            class="flex items-center text-blue-500 hover:text-blue-700"
                        >
                            <svg
                                class="mr-1 h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                ></path>
                            </svg>
                            Add Service
                        </button>
                    </div>
                </div>

                <div class="pt-4">
                    <button
                        type="submit"
                        class="rounded-md bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    </AdminLayout>
</template>
