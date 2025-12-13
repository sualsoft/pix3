<script setup lang="ts">
import AdminLayout from '@/layouts/admin/AdminLayout.vue';
import { Head } from '@inertiajs/vue3';

interface Props {
    title?: string;
}

withDefaults(defineProps<Props>(), {
    title: 'Timelapse Details',
});
</script>

<template>
    <AdminLayout :title="title">
        <Head title="Timelapse Details" />

        <div class="rounded-lg bg-white p-6 shadow-md">
            <h2 class="mb-6 text-xl font-semibold">Edit Timelapse Project</h2>

            <form class="space-y-6">
                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Project Title</label
                    >
                    <input
                        type="text"
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter project title"
                        value="Construction Project A"
                    />
                </div>

                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Description</label
                    >
                    <textarea
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        rows="4"
                        placeholder="Enter project description"
                    >
Detailed description of the construction project and timeline.</textarea
                    >
                </div>

                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Project Images</label
                    >
                    <div
                        class="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
                    >
                        <div class="relative">
                            <div
                                class="h-32 w-full rounded-xl border-2 border-dashed bg-gray-200"
                            />
                            <button
                                type="button"
                                class="absolute top-1 right-1 text-red-500 hover:text-red-700"
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
                        <div class="relative">
                            <div
                                class="h-32 w-full rounded-xl border-2 border-dashed bg-gray-200"
                            />
                            <button
                                type="button"
                                class="absolute top-1 right-1 text-red-500 hover:text-red-700"
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
                        <div class="relative">
                            <div
                                class="h-32 w-full rounded-xl border-2 border-dashed bg-gray-200"
                            />
                            <button
                                type="button"
                                class="absolute top-1 right-1 text-red-500 hover:text-red-700"
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
                        <div
                            class="flex h-32 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-gray-300 hover:border-gray-400"
                        >
                            <svg
                                class="h-8 w-8 text-gray-400"
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
                        </div>
                    </div>
                </div>

                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Status</label
                    >
                    <select
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option>draft</option>
                        <option selected>published</option>
                        <option>archived</option>
                    </select>
                </div>

                <div class="pt-4">
                    <button
                        type="submit"
                        class="mr-3 rounded-md bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600"
                    >
                        Save Changes
                    </button>
                    <button
                        type="button"
                        class="rounded-md bg-gray-500 px-6 py-2 text-white transition-colors hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </AdminLayout>
</template>
