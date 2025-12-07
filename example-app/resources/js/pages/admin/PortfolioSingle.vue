<script setup lang="ts">
import AdminLayout from '@/layouts/admin/AdminLayout.vue';
import { Head } from '@inertiajs/vue3';

interface Props {
    title?: string;
}

withDefaults(defineProps<Props>(), {
    title: 'Portfolio Details',
});
</script>

<template>
    <AdminLayout :title="title">
        <Head title="Portfolio Details" />

        <div class="rounded-lg bg-white p-6 shadow-md">
            <h2 class="mb-6 text-xl font-semibold">Edit Portfolio Item</h2>

            <form class="space-y-6">
                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Project Title</label
                    >
                    <input
                        type="text"
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter project title"
                    />
                </div>

                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Category</label
                    >
                    <select
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option>Architecture</option>
                        <option>Photography</option>
                        <option>Drone</option>
                        <option>Timelapse</option>
                    </select>
                </div>

                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Description</label
                    >
                    <textarea
                        rows="4"
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter project description"
                    ></textarea>
                </div>

                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Images</label
                    >
                    <div
                        class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
                    >
                        <div class="space-y-1 text-center">
                            <div class="flex text-sm text-gray-600">
                                <label
                                    class="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 hover:text-blue-500"
                                >
                                    <span>Upload images</span>
                                    <input
                                        type="file"
                                        multiple
                                        class="sr-only"
                                    />
                                </label>
                                <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                            </p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end space-x-3 pt-4">
                    <button
                        type="button"
                        class="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        class="rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    </AdminLayout>
</template>
