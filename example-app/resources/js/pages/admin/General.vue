<script setup lang="ts">
import AdminLayout from '@/layouts/admin/AdminLayout.vue';
import { Head } from '@inertiajs/vue3';

interface Props {
    title?: string;
}

withDefaults(defineProps<Props>(), {
    title: 'General Settings',
});
</script>

<template>
    <AdminLayout :title="title">
        <Head title="General Settings" />

        <div class="rounded-lg bg-white p-6 shadow-md">
            <h2 class="mb-6 text-xl font-semibold">General Settings</h2>

            <form class="space-y-6">
                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Site Name</label
                    >
                    <input
                        type="text"
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter site name"
                        value="My Website"
                    />
                </div>

                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Site Description</label
                    >
                    <textarea
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        rows="3"
                        placeholder="Enter site description"
                    >
A professional website for showcasing projects and services.</textarea
                    >
                </div>

                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Contact Email</label
                    >
                    <input
                        type="email"
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter contact email"
                        value="contact@example.com"
                    />
                </div>

                <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700"
                        >Timezone</label
                    >
                    <select
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option>
                            (UTC-12:00) International Date Line West
                        </option>
                        <option>(UTC-11:00) Midway Island, Samoa</option>
                        <option selected>
                            (UTC-08:00) Pacific Time (US & Canada)
                        </option>
                        <option>(UTC-07:00) Mountain Time (US & Canada)</option>
                        <option>(UTC-06:00) Central Time (US & Canada)</option>
                        <option>(UTC-05:00) Eastern Time (US & Canada)</option>
                    </select>
                </div>

                <div class="flex items-center">
                    <input
                        type="checkbox"
                        id="maintenance-mode"
                        class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked
                    />
                    <label
                        for="maintenance-mode"
                        class="ml-2 block text-sm text-gray-700"
                    >
                        Enable Maintenance Mode
                    </label>
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
