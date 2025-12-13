<script setup lang="ts">
import AdminLayout from '@/layouts/admin/AdminLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';

interface Props {
    title?: string;
}

withDefaults(defineProps<Props>(), {
    title: 'Portfolio Management',
});

const portfolios = ref([
    {
        id: 1,
        title: 'Commercial Building',
        category: 'Architecture',
        date: '2023-04-15',
    },
    {
        id: 2,
        title: 'Nature Photography',
        category: 'Photography',
        date: '2023-05-22',
    },
    { id: 3, title: 'Urban Landscape', category: 'Drone', date: '2023-06-10' },
]);

const deletePortfolio = (id: number) => {
    portfolios.value = portfolios.value.filter((p) => p.id !== id);
};
</script>

<template>
    <AdminLayout :title="title">
        <Head title="Portfolio Management" />

        <div class="rounded-lg bg-white p-6 shadow-md">
            <div class="mb-6 flex items-center justify-between">
                <h2 class="text-xl font-semibold">Portfolio Items</h2>
                <button
                    class="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
                >
                    Add New Item
                </button>
            </div>

            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="portfolio in portfolios"
                    :key="portfolio.id"
                    class="overflow-hidden rounded-lg border border-gray-200"
                >
                    <div
                        class="h-48 w-full rounded-xl border-2 border-dashed bg-gray-200"
                    />
                    <div class="p-4">
                        <h3 class="text-lg font-semibold">
                            {{ portfolio.title }}
                        </h3>
                        <div class="mt-2 flex items-center justify-between">
                            <span class="text-sm text-gray-500">{{
                                portfolio.category
                            }}</span>
                            <span class="text-sm text-gray-500">{{
                                portfolio.date
                            }}</span>
                        </div>
                        <div class="mt-4 flex justify-end space-x-2">
                            <button class="text-blue-600 hover:text-blue-800">
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
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                @click="deletePortfolio(portfolio.id)"
                                class="text-red-600 hover:text-red-800"
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
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
