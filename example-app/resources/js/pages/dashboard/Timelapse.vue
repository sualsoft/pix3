<script setup lang="ts">
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';

const timelapses = ref([
    {
        id: 1,
        title: 'Construction Project A',
        date: '2023-05-15',
        status: 'Published',
    },
    {
        id: 2,
        title: 'Building Renovation',
        date: '2023-06-22',
        status: 'Draft',
    },
    {
        id: 3,
        title: 'Bridge Construction',
        date: '2023-07-10',
        status: 'Published',
    },
]);

const deleteTimelapse = (id: number) => {
    timelapses.value = timelapses.value.filter((t) => t.id !== id);
};
</script>

<template>
    <DashboardLayout>
        <Head title="Timelapse Management" />

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-xl sm:rounded-lg">
                    <div class="border-b border-gray-200 bg-white p-6 lg:p-8">
                        <div class="flex items-center justify-between">
                            <h1 class="text-2xl font-medium text-gray-900">
                                Timelapse Management
                            </h1>
                            <button
                                class="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                            >
                                Add New Timelapse
                            </button>
                        </div>

                        <p class="mt-4 leading-relaxed text-gray-500">
                            Manage your timelapse projects here.
                        </p>

                        <div class="mt-6">
                            <div class="overflow-x-auto">
                                <table
                                    class="min-w-full divide-y divide-gray-200"
                                >
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th
                                                class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                            >
                                                Title
                                            </th>
                                            <th
                                                class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                            >
                                                Date
                                            </th>
                                            <th
                                                class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                            >
                                                Status
                                            </th>
                                            <th
                                                class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                            >
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        class="divide-y divide-gray-200 bg-white"
                                    >
                                        <tr
                                            v-for="timelapse in timelapses"
                                            :key="timelapse.id"
                                        >
                                            <td
                                                class="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900"
                                            >
                                                {{ timelapse.title }}
                                            </td>
                                            <td
                                                class="px-6 py-4 text-sm whitespace-nowrap text-gray-500"
                                            >
                                                {{ timelapse.date }}
                                            </td>
                                            <td
                                                class="px-6 py-4 text-sm whitespace-nowrap text-gray-500"
                                            >
                                                <span
                                                    :class="
                                                        timelapse.status ===
                                                        'Published'
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-yellow-100 text-yellow-800'
                                                    "
                                                    class="inline-flex rounded-full px-2 text-xs leading-5 font-semibold"
                                                >
                                                    {{ timelapse.status }}
                                                </span>
                                            </td>
                                            <td
                                                class="px-6 py-4 text-sm font-medium whitespace-nowrap"
                                            >
                                                <a
                                                    href="#"
                                                    class="mr-3 text-blue-600 hover:text-blue-900"
                                                    >Edit</a
                                                >
                                                <a
                                                    href="#"
                                                    @click.prevent="
                                                        deleteTimelapse(
                                                            timelapse.id,
                                                        )
                                                    "
                                                    class="text-red-600 hover:text-red-900"
                                                    >Delete</a
                                                >
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
