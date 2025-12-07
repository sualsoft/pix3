<script setup lang="ts">
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <DashboardLayout>
        <Head title="Home Page Editor" />

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-xl sm:rounded-lg">
                    <div class="border-b border-gray-200 bg-white p-6 lg:p-8">
                        <h1 class="text-2xl font-medium text-gray-900">
                            Home Page Editor
                        </h1>

                        <p class="mt-4 leading-relaxed text-gray-500">
                            Edit your home page content here.
                        </p>

                        <div class="mt-6">
                            <form class="space-y-6">
                                <div>
                                    <label
                                        class="mb-1 block text-sm font-medium text-gray-700"
                                        >Hero Title</label
                                    >
                                    <input
                                        type="text"
                                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="Enter hero title"
                                    />
                                </div>

                                <div>
                                    <label
                                        class="mb-1 block text-sm font-medium text-gray-700"
                                        >Hero Subtitle</label
                                    >
                                    <input
                                        type="text"
                                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="Enter hero subtitle"
                                    />
                                </div>

                                <div>
                                    <label
                                        class="mb-1 block text-sm font-medium text-gray-700"
                                        >Hero Description</label
                                    >
                                    <textarea
                                        rows="3"
                                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="Enter hero description"
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        class="rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
