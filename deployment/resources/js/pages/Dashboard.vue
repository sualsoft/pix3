<script setup lang="ts">
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';

interface Props {
    auth: {
        user: Object;
    };
}

defineProps<Props>();
</script>

<template>
    <DashboardLayout>
        <Head title="Dashboard" />

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-xl sm:rounded-lg">
                    <div class="border-b border-gray-200 bg-white p-6 lg:p-8">
                        <h1 class="text-2xl font-medium text-gray-900">
                            Dashboard
                        </h1>

                        <p class="mt-4 leading-relaxed text-gray-500">
                            This is your application dashboard. You can add your
                            content here.
                        </p>

                        <div
                            class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                        >
                            <div class="rounded-lg bg-blue-50 p-6">
                                <h2 class="text-lg font-medium text-gray-900">
                                    Statistics
                                </h2>
                                <p class="mt-2 text-gray-600">
                                    View your application statistics
                                </p>
                            </div>

                            <div class="rounded-lg bg-green-50 p-6">
                                <h2 class="text-lg font-medium text-gray-900">
                                    Settings
                                </h2>
                                <p class="mt-2 text-gray-600">
                                    Manage your application settings
                                </p>
                            </div>

                            <div class="rounded-lg bg-yellow-50 p-6">
                                <h2 class="text-lg font-medium text-gray-900">
                                    Reports
                                </h2>
                                <p class="mt-2 text-gray-600">
                                    Generate and view reports
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
