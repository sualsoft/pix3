<script setup lang="ts">
import AdminLayout from '@/layouts/admin/AdminLayout.vue';
import { Head } from '@inertiajs/vue3';

interface Props {
    title?: string;
}

withDefaults(defineProps<Props>(), {
    title: 'Drone Details',
});
</script>

<template>
    <AdminLayout :title="title">
        <Head title="Drone Details" />

        <div class="rounded-lg bg-white p-6 shadow-md">
            <h2 class="mb-6 text-xl font-semibold">Edit Drone Information</h2>

            <form class="space-y-6">
                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Drone Name</label
                    >
                    <input
                        type="text"
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter drone name"
                    />
                </div>

                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Model</label
                    >
                    <input
                        type="text"
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter model"
                    />
                </div>

                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Specifications</label
                    >
                    <textarea
                        rows="4"
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter drone specifications"
                    ></textarea>
                </div>

                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Status</label
                    >
                    <select
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option>Available</option>
                        <option>In Use</option>
                        <option>Maintenance</option>
                    </select>
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
