<script setup lang="ts">
import AdminLayout from '@/layouts/admin/AdminLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';

interface Props {
    title?: string;
}

withDefaults(defineProps<Props>(), {
    title: 'Contact Management',
});

const messages = ref([
    {
        id: 1,
        name: 'John Smith',
        email: 'john@example.com',
        subject: 'Project Inquiry',
        date: '2023-06-15',
        status: 'New',
    },
    {
        id: 2,
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        subject: 'Service Question',
        date: '2023-06-14',
        status: 'Replied',
    },
    {
        id: 3,
        name: 'Michael Brown',
        email: 'michael@example.com',
        subject: 'Partnership Opportunity',
        date: '2023-06-12',
        status: 'New',
    },
]);

const deleteMessage = (id: number) => {
    messages.value = messages.value.filter((m) => m.id !== id);
};
</script>

<template>
    <AdminLayout :title="title">
        <Head title="Contact Management" />

        <div class="rounded-lg bg-white p-6 shadow-md">
            <div class="mb-6 flex items-center justify-between">
                <h2 class="text-xl font-semibold">Contact Messages</h2>
                <button
                    class="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
                >
                    Contact Settings
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
                                From
                            </th>
                            <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                            >
                                Subject
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
                        <tr v-for="message in messages" :key="message.id">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900">
                                    {{ message.name }}
                                </div>
                                <div class="text-sm text-gray-500">
                                    {{ message.email }}
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">
                                    {{ message.subject }}
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-500">
                                    {{ message.date }}
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span
                                    class="inline-flex rounded-full px-2 text-xs leading-5 font-semibold"
                                    :class="{
                                        'bg-green-100 text-green-800':
                                            message.status === 'Replied',
                                        'bg-blue-100 text-blue-800':
                                            message.status === 'New',
                                    }"
                                >
                                    {{ message.status }}
                                </span>
                            </td>
                            <td
                                class="px-6 py-4 text-right text-sm font-medium whitespace-nowrap"
                            >
                                <a
                                    href="#"
                                    class="mr-4 text-blue-600 hover:text-blue-900"
                                    >View</a
                                >
                                <button
                                    @click="deleteMessage(message.id)"
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
