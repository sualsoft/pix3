<script setup lang="ts">
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';

interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
}

const services = ref<Service[]>([
    {
        id: 1,
        title: 'Aerial Photography',
        description: 'Professional drone photography services',
        icon: '📷',
    },
    {
        id: 2,
        title: 'Timelapse Videos',
        description: 'Create stunning timelapse videos',
        icon: '⏱️',
    },
    {
        id: 3,
        title: 'Property Inspections',
        description: 'Detailed property inspection services',
        icon: '🏠',
    },
]);

const newService = ref({
    title: '',
    description: '',
    icon: '',
});

const addService = () => {
    if (newService.value.title && newService.value.description) {
        services.value.push({
            id: services.value.length + 1,
            ...newService.value,
        });
        newService.value = { title: '', description: '', icon: '' };
    }
};

const deleteService = (id: number) => {
    services.value = services.value.filter((service) => service.id !== id);
};
</script>

<template>
    <DashboardLayout>
        <Head title="Services Section" />

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-xl sm:rounded-lg">
                    <div class="border-b border-gray-200 bg-white p-6 lg:p-8">
                        <h1 class="text-2xl font-medium text-gray-900">
                            Services Section
                        </h1>

                        <p class="mt-4 leading-relaxed text-gray-500">
                            Manage your services section content here.
                        </p>

                        <div class="mt-6">
                            <h2 class="mb-4 text-lg font-medium text-gray-900">
                                Add New Service
                            </h2>
                            <form
                                @submit.prevent="addService"
                                class="space-y-4 rounded-lg bg-gray-50 p-4"
                            >
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-3"
                                >
                                    <div>
                                        <label
                                            class="mb-1 block text-sm font-medium text-gray-700"
                                            >Title</label
                                        >
                                        <input
                                            v-model="newService.title"
                                            type="text"
                                            class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            placeholder="Service title"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            class="mb-1 block text-sm font-medium text-gray-700"
                                            >Icon (Emoji)</label
                                        >
                                        <input
                                            v-model="newService.icon"
                                            type="text"
                                            class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            placeholder="Service icon"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            class="mb-1 block text-sm font-medium text-gray-700"
                                            >Description</label
                                        >
                                        <input
                                            v-model="newService.description"
                                            type="text"
                                            class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            placeholder="Service description"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        class="rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                                    >
                                        Add Service
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div class="mt-8">
                            <h2 class="mb-4 text-lg font-medium text-gray-900">
                                Current Services
                            </h2>
                            <div
                                class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                            >
                                <div
                                    v-for="service in services"
                                    :key="service.id"
                                    class="flex flex-col rounded-lg border border-gray-200 p-4"
                                >
                                    <div class="mb-3 flex items-center">
                                        <span class="mr-3 text-2xl">{{
                                            service.icon
                                        }}</span>
                                        <h3
                                            class="text-lg font-medium text-gray-900"
                                        >
                                            {{ service.title }}
                                        </h3>
                                    </div>
                                    <p class="flex-grow text-gray-600">
                                        {{ service.description }}
                                    </p>
                                    <div class="mt-4 flex justify-end">
                                        <button
                                            @click="deleteService(service.id)"
                                            class="text-sm text-red-600 hover:text-red-900"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
