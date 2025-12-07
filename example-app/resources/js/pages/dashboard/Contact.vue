<script setup lang="ts">
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';

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
    <DashboardLayout>
        <Head title="Contact Management" />

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-xl sm:rounded-lg">
                    <div class="border-b border-gray-200 bg-white p-6 lg:p-8">
                        <div class="flex items-center justify-between">
                            <h1 class="text-2xl font-medium text-gray-900">
                                Contact Management
                            </h1>
                            <button
                                class="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                            >
                                Add New Message
                            </button>
                        </div>

                        <p class="mt-4 leading-relaxed text-gray-500">
                            Manage your contact messages here.
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
                                                Name
                                            </th>
                                            <th
                                                class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                            >
                                                Email
                                            </th>
                                            <th
                                                class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                            >
                                                Subject
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
                                            v-for="message in messages"
                                            :key="message.id"
                                        >
                                            <td
                                                class="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900"
                                            >
                                                {{ message.name }}
                                            </td>
                                            <td
                                                class="px-6 py-4 text-sm whitespace-nowrap text-gray-500"
                                            >
                                                {{ message.email }}
                                            </td>
                                            <td
                                                class="px-6 py-4 text-sm whitespace-nowrap text-gray-500"
                                            >
                                                {{ message.subject }}
                                            </td>
                                            <td
                                                class="px-6 py-4 text-sm whitespace-nowrap text-gray-500"
                                            >
                                                {{ message.date }}
                                            </td>
                                            <td
                                                class="px-6 py-4 text-sm whitespace-nowrap text-gray-500"
                                            >
                                                <span
                                                    :class="
                                                        message.status === 'New'
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-blue-100 text-blue-800'
                                                    "
                                                    class="inline-flex rounded-full px-2 text-xs leading-5 font-semibold"
                                                >
                                                    {{ message.status }}
                                                </span>
                                            </td>
                                            <td
                                                class="px-6 py-4 text-sm font-medium whitespace-nowrap"
                                            >
                                                <a
                                                    href="#"
                                                    class="mr-3 text-blue-600 hover:text-blue-900"
                                                    >View</a
                                                >
                                                <a
                                                    href="#"
                                                    @click.prevent="
                                                        deleteMessage(
                                                            message.id,
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
