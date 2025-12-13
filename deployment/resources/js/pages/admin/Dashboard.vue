<script setup lang="ts">
import AdminLayout from '@/layouts/admin/AdminLayout.vue';
import { Head } from '@inertiajs/vue3';

interface Props {
    title?: string;
}

withDefaults(defineProps<Props>(), {
    title: 'Admin Dashboard',
});
</script>

<template>
    <AdminLayout :title="title">
        <Head title="Admin Dashboard" />

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div class="rounded-lg bg-white p-6 shadow-md">
                <h2 class="mb-4 text-xl font-semibold">Statistics</h2>
                <div class="space-y-4">
                    <div class="flex justify-between">
                        <span>Total Users</span>
                        <span class="font-bold">1,245</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Total Projects</span>
                        <span class="font-bold">324</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Pending Tasks</span>
                        <span class="font-bold">24</span>
                    </div>
                </div>
            </div>

            <div class="rounded-lg bg-white p-6 shadow-md">
                <h2 class="mb-4 text-xl font-semibold">Recent Activity</h2>
                <ul class="space-y-3">
                    <li class="flex items-start">
                        <div class="mr-3 rounded-full bg-blue-100 p-2">
                            <span class="text-blue-600">📝</span>
                        </div>
                        <div>
                            <p class="font-medium">New project created</p>
                            <p class="text-sm text-gray-500">2 hours ago</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <div class="mr-3 rounded-full bg-green-100 p-2">
                            <span class="text-green-600">✅</span>
                        </div>
                        <div>
                            <p class="font-medium">Task completed</p>
                            <p class="text-sm text-gray-500">5 hours ago</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <div class="mr-3 rounded-full bg-yellow-100 p-2">
                            <span class="text-yellow-600">⚠️</span>
                        </div>
                        <div>
                            <p class="font-medium">System update required</p>
                            <p class="text-sm text-gray-500">1 day ago</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="rounded-lg bg-white p-6 shadow-md">
                <h2 class="mb-4 text-xl font-semibold">Quick Actions</h2>
                <div class="grid grid-cols-2 gap-4">
                    <button
                        class="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
                    >
                        Add User
                    </button>
                    <button
                        class="rounded-md bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
                    >
                        New Project
                    </button>
                    <button
                        class="rounded-md bg-purple-500 px-4 py-2 text-white transition-colors hover:bg-purple-600"
                    >
                        View Reports
                    </button>
                    <button
                        class="rounded-md bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600"
                    >
                        System Settings
                    </button>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
