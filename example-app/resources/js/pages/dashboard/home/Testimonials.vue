<script setup lang="ts">
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';

interface Testimonial {
    id: number;
    name: string;
    position: string;
    company: string;
    content: string;
    avatar: string;
}

const testimonials = ref<Testimonial[]>([
    {
        id: 1,
        name: 'John Smith',
        position: 'Project Manager',
        company: 'Construction Co.',
        content:
            'The aerial photography provided invaluable insights for our project planning.',
        avatar: '',
    },
    {
        id: 2,
        name: 'Sarah Johnson',
        position: 'Real Estate Agent',
        company: 'Prime Properties',
        content:
            'The property videos helped us sell listings 30% faster than average.',
        avatar: '',
    },
]);

const newTestimonial = ref({
    name: '',
    position: '',
    company: '',
    content: '',
});

const addTestimonial = () => {
    if (newTestimonial.value.name && newTestimonial.value.content) {
        testimonials.value.push({
            id: testimonials.value.length + 1,
            ...newTestimonial.value,
            avatar: '',
        });
        newTestimonial.value = {
            name: '',
            position: '',
            company: '',
            content: '',
        };
    }
};

const deleteTestimonial = (id: number) => {
    testimonials.value = testimonials.value.filter(
        (testimonial) => testimonial.id !== id,
    );
};
</script>

<template>
    <DashboardLayout>
        <Head title="Testimonials Section" />

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-xl sm:rounded-lg">
                    <div class="border-b border-gray-200 bg-white p-6 lg:p-8">
                        <h1 class="text-2xl font-medium text-gray-900">
                            Testimonials Section
                        </h1>

                        <p class="mt-4 leading-relaxed text-gray-500">
                            Manage your testimonials section content here.
                        </p>

                        <div class="mt-6">
                            <h2 class="mb-4 text-lg font-medium text-gray-900">
                                Add New Testimonial
                            </h2>
                            <form
                                @submit.prevent="addTestimonial"
                                class="space-y-4 rounded-lg bg-gray-50 p-4"
                            >
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label
                                            class="mb-1 block text-sm font-medium text-gray-700"
                                            >Name</label
                                        >
                                        <input
                                            v-model="newTestimonial.name"
                                            type="text"
                                            class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            placeholder="Client name"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            class="mb-1 block text-sm font-medium text-gray-700"
                                            >Position</label
                                        >
                                        <input
                                            v-model="newTestimonial.position"
                                            type="text"
                                            class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            placeholder="Client position"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            class="mb-1 block text-sm font-medium text-gray-700"
                                            >Company</label
                                        >
                                        <input
                                            v-model="newTestimonial.company"
                                            type="text"
                                            class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            placeholder="Client company"
                                        />
                                    </div>

                                    <div class="md:col-span-2">
                                        <label
                                            class="mb-1 block text-sm font-medium text-gray-700"
                                            >Testimonial</label
                                        >
                                        <textarea
                                            v-model="newTestimonial.content"
                                            rows="3"
                                            class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            placeholder="Client testimonial"
                                        ></textarea>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        class="rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                                    >
                                        Add Testimonial
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div class="mt-8">
                            <h2 class="mb-4 text-lg font-medium text-gray-900">
                                Current Testimonials
                            </h2>
                            <div class="space-y-6">
                                <div
                                    v-for="testimonial in testimonials"
                                    :key="testimonial.id"
                                    class="rounded-lg border border-gray-200 p-6"
                                >
                                    <div class="flex items-start">
                                        <div
                                            class="h-16 w-16 rounded-xl border-2 border-dashed bg-gray-200"
                                        />
                                        <div class="ml-4 flex-1">
                                            <div class="flex justify-between">
                                                <div>
                                                    <h3
                                                        class="text-lg font-medium text-gray-900"
                                                    >
                                                        {{ testimonial.name }}
                                                    </h3>
                                                    <p class="text-gray-600">
                                                        {{
                                                            testimonial.position
                                                        }},
                                                        {{
                                                            testimonial.company
                                                        }}
                                                    </p>
                                                </div>
                                                <button
                                                    @click="
                                                        deleteTestimonial(
                                                            testimonial.id,
                                                        )
                                                    "
                                                    class="text-sm text-red-600 hover:text-red-900"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                            <p
                                                class="mt-3 text-gray-700 italic"
                                            >
                                                "{{ testimonial.content }}"
                                            </p>
                                        </div>
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
