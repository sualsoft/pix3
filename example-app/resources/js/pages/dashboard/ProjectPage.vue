<script setup>
import FileManagement from '@/components/FileManagement.vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

// Props - we'll get the project ID from the route or props
const props = defineProps({
    projectId: {
        type: Number,
        required: true,
    },
    project: {
        type: Object,
        required: true,
    },
});

// Reactive data
const projectData = ref(props.project);
const message = ref('');
const isLoading = ref(false);

// Methods
const loadProject = async () => {
    try {
        const response = await fetch(`/api/user-project/${props.projectId}`);
        const data = await response.json();

        if (data) {
            projectData.value = data;
        }
    } catch (error) {
        console.error('Error loading project', error);
        message.value = '❌ Error loading project: ' + error.message;
    }
};

const updateProjectInfo = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute('content');

        const response = await fetch('/api/user-project/info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify({
                client_name: projectData.value.client_name,
                title: projectData.value.title,
            }),
        });

        let result = {};
        try {
            result = await response.json();
        } catch (e) {
            result.message = await response.text();
        }

        if (response.ok) {
            message.value = '✅ Project information updated successfully!';
        } else {
            if (result.errors) {
                const errorMessages = Object.values(result.errors)
                    .flat()
                    .join(', ');
                message.value = '❌ Validation Error: ' + errorMessages;
            } else {
                message.value =
                    '❌ Error: ' +
                    (result.message || 'Failed to update project');
            }
        }
    } catch (error) {
        message.value = '❌ Network error: ' + error.message;
        console.error('Update error', error);
    } finally {
        isLoading.value = false;
    }
};

// Handle files updated event from FileManagement component
const handleFilesUpdated = (files) => {
    // Update the project data with the new files list
    projectData.value.files = files;
};

// Lifecycle
onMounted(() => {
    loadProject();
});
</script>

<template>
    <DashboardLayout>
        <Head :title="projectData.title || 'Project Page'" />

        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-gray-900">
                    Gestion du Projet
                </h1>
                <p class="mt-2 text-gray-600">
                    Manage your project content and files
                </p>
            </div>

            <!-- Status Message -->
            <div
                v-if="message"
                class="mb-6 rounded-lg p-4"
                :class="{
                    'bg-green-100 text-green-800': message.includes('✅'),
                    'bg-red-100 text-red-800': message.includes('❌'),
                }"
            >
                {{ message }}
            </div>

            <!-- Project Info -->
            <div
                class="mb-8 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl"
            >
                <div
                    class="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white"
                >
                    <h2 class="text-2xl font-bold">Informations du Projet</h2>
                </div>

                <div class="p-6 md:p-8">
                    <div class="space-y-6">
                        <div>
                            <label
                                class="mb-1 block text-sm font-medium text-gray-700"
                                >Nom du Client</label
                            >
                            <input
                                v-model="projectData.client_name"
                                type="text"
                                class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                placeholder="Enter client name"
                            />
                        </div>

                        <div>
                            <label
                                class="mb-1 block text-sm font-medium text-gray-700"
                                >Titre du Projet</label
                            >
                            <input
                                v-model="projectData.title"
                                type="text"
                                class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                placeholder="Enter project title"
                            />
                        </div>

                        <div>
                            <label
                                class="mb-1 block text-sm font-medium text-gray-700"
                                >URL du Projet</label
                            >
                            <input
                                type="text"
                                :value="`/user/${projectData.slug || 'project-slug'}`"
                                class="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                readonly
                            />
                            <p class="mt-1 text-xs text-gray-500">
                                This is the public URL for your project page
                            </p>
                        </div>

                        <div class="flex justify-end">
                            <button
                                @click="updateProjectInfo"
                                :disabled="isLoading"
                                class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
                            >
                                {{
                                    isLoading
                                        ? 'Enregistrement...'
                                        : 'Enregistrer les Modifications'
                                }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- File Management Component -->
            <FileManagement
                :project-id="projectId"
                :project-name="projectData.title"
                @files-updated="handleFilesUpdated"
            />
        </div>
    </DashboardLayout>
</template>
