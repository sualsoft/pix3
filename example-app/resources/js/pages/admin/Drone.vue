<script setup lang="ts">
import AdminLayout from '@/layouts/admin/AdminLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';

interface Props {
    title?: string;
}

withDefaults(defineProps<Props>(), {
    title: 'Drone Management',
});

const drones = ref([
    { id: 1, name: 'DJI Mavic 3', model: 'Mavic 3', status: 'Available' },
    { id: 2, name: 'DJI Phantom 4', model: 'Phantom 4 Pro', status: 'In Use' },
    {
        id: 3,
        name: 'Autel Robotics EVO',
        model: 'EVO Nano+',
        status: 'Maintenance',
    },
]);

const deleteDrone = (id: number) => {
    drones.value = drones.value.filter((d) => d.id !== id);
};
</script>

<template>
    <AdminLayout :title="title">
        <Head title="Drone Management" />

        <div class="rounded-lg bg-white p-6 shadow-md">
            <div class="mb-6 flex items-center justify-between">
                <h2 class="text-xl font-semibold">Drone Fleet</h2>
                <button
                    class="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
                >
                    Add New Drone
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
                                Name
                            </th>
                            <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                            >
                                Model
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
                        <tr v-for="drone in drones" :key="drone.id">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900">
                                    {{ drone.name }}
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-500">
                                    {{ drone.model }}
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span
                                    class="inline-flex rounded-full px-2 text-xs leading-5 font-semibold"
                                    :class="{
                                        'bg-green-100 text-green-800':
                                            drone.status === 'Available',
                                        'bg-blue-100 text-blue-800':
                                            drone.status === 'In Use',
                                        'bg-yellow-100 text-yellow-800':
                                            drone.status === 'Maintenance',
                                    }"
                                >
                                    {{ drone.status }}
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
                                    @click="deleteDrone(drone.id)"
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
