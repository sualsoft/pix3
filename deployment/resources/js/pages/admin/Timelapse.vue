<script setup lang="ts">
import AdminLayout from '@/layouts/admin/AdminLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';

interface Props {
    title?: string;
}

withDefaults(defineProps<Props>(), {
    title: 'Timelapse Management',
});

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
    <AdminLayout :title="title">
        <Head title="Timelapse Management" />

        <div class="rounded-lg bg-white p-6 shadow-md">
            <div class="mb-6 flex items-center justify-between">
                <h2 class="text-xl font-semibold">Timelapse Projects</h2>
                <button
                    class="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
                >
                    Add New Timelapse
                </button>
            </div>

            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                            >
                                Title
                            </th>
                            <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                            >
                                Date
                            </th>
                            <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                            >
                                Status
                            </th>
                            <th
                                scope="col"
                                class="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                        <tr v-for="timelapse in timelapses" :key="timelapse.id">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900">
                                    {{ timelapse.title }}
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-500">
                                    {{ timelapse.date }}
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span
                                    class="inline-flex rounded-full px-2 text-xs leading-5 font-semibold"
                                    :class="
                                        timelapse.status === 'Published'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-yellow-100 text-yellow-800'
                                    "
                                >
                                    {{ timelapse.status }}
                                </span>
                            </td>
                            <td
                                class="px-6 py-4 text-right text-sm font-medium whitespace-nowrap"
                            >
                                <a
                                    href="#"
                                    class="mr-4 text-blue-600 hover:text-blue-900"
                                    >Edit</a
                                >
                                <button
                                    @click="deleteTimelapse(timelapse.id)"
                                    class="text-red-600 hover:text-red-900"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </AdminLayout>
</template>
