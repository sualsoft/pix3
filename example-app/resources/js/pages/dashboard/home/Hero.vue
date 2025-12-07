<script setup lang="ts">
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';

interface Props {
    title?: string;
}

withDefaults(defineProps<Props>(), {
    title: 'Hero Section',
});
</script>

<template>
    <DashboardLayout>
        <Head title="Hero Section" />

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-xl sm:rounded-lg">
                    <div class="border-b border-gray-200 bg-white p-6 lg:p-8">
                        <h1 class="text-2xl font-medium text-gray-900">
                            section héros
                        </h1>

                        <p class="mt-4 leading-relaxed text-gray-500">
                            Modifiez ici le contenu de votre section principale.
                        </p>

                        <div class="mt-6">
                            <form class="space-y-6">
                                <div>
                                    <label
                                        class="mb-1 block text-sm font-medium text-gray-700"
                                        >Titre du héros</label
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
                                    <label
                                        class="mb-1 block text-sm font-medium text-gray-700"
                                        >Background Image</label
                                    >
                                    <div
                                        class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
                                    >
                                        <div class="space-y-1 text-center">
                                            <div
                                                class="flex text-sm text-gray-600"
                                            >
                                                <label
                                                    class="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 hover:text-blue-500"
                                                >
                                                    <span>Upload image</span>
                                                    <input
                                                        type="file"
                                                        class="sr-only"
                                                    />
                                                </label>
                                                <p class="pl-1">
                                                    or drag and drop
                                                </p>
                                            </div>
                                            <p class="text-xs text-gray-500">
                                                PNG, JPG, GIF up to 10MB
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        class="mb-1 block text-sm font-medium text-gray-700"
                                        >Call to Action Button Text</label
                                    >
                                    <input
                                        type="text"
                                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="Enter button text"
                                    />
                                </div>

                                <div>
                                    <label
                                        class="mb-1 block text-sm font-medium text-gray-700"
                                        >Call to Action Button Link</label
                                    >
                                    <input
                                        type="text"
                                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="Enter button link"
                                    />
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
