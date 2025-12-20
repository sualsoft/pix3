<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { onMounted, ref } from 'vue';

// 1. Form Data
const form = ref({
    client_name: '',
    title: '',
    slug: ''
});

// For editing
const editForm = ref({
    id: null,
    client_name: '',
    title: '',
    slug: ''
});

// For refreshing
const refreshForm = ref({
    id: null,
    client_name: '',
    title: '',
    slug: '',
    reset_content: false
});

// For creating from template
const templateForm = ref({
    client_name: '',
    title: '',
    slug: '',
    template_page_id: null
});

const projects = ref([]);
const message = ref('');
const isLoading = ref(false);
const isEditing = ref(false);

// 2. Load Data from Database
const loadProjects = async () => {
    try {
        // Use the new endpoint to get all projects
        const response = await fetch('/api/user-projects');
        const data = await response.json();
        
        if (data.projects) {
            projects.value = data.projects;
        }
    } catch (error) {
        console.error('Error loading projects', error);
        
        // Fallback to old method if new endpoint doesn't work
        try {
            const fallbackResponse = await fetch('/api/user-project');
            const fallbackData = await fallbackResponse.json();
            if (fallbackData.project) {
                projects.value = [fallbackData.project];
            }
        } catch (fallbackError) {
            console.error('Fallback error', fallbackError);
        }
    }
};

// 3. Create New Project
const createProject = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        
        const response = await fetch('/api/user-project/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify(form.value)
        });

        let result = {};
        try {
            result = await response.json();
        } catch (e) {
            // If JSON parsing fails, use the response text
            result.message = await response.text();
        }

        if (response.ok) {
            message.value = '✅ Project created successfully!';
            // Reset form
            form.value.client_name = '';
            form.value.title = '';
            form.value.slug = '';
            // Reload projects
            loadProjects();
        } else {
            // Handle validation errors
            if (result.errors) {
                const errorMessages = Object.values(result.errors).flat().join(', ');
                message.value = '❌ Validation Error: ' + errorMessages;
            } else {
                message.value = '❌ Error: ' + (result.message || 'Failed to create project');
            }
        }
    } catch (error) {
        message.value = '❌ Network error: ' + error.message;
        console.error('Create error', error);
    } finally {
        isLoading.value = false;
    }
};

// 4. Generate slug from title
const generateSlug = () => {
    if (form.value.title) {
        form.value.slug = form.value.title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
};

// 5. Load data when component mounts
// 5. Start editing a project
const startEditing = (project) => {
    isEditing.value = true;
    editForm.value.id = project.id;
    editForm.value.client_name = project.client_name;
    editForm.value.title = project.title;
    editForm.value.slug = project.slug;
};

// 6. Cancel editing
const cancelEditing = () => {
    isEditing.value = false;
    editForm.value.id = null;
    editForm.value.client_name = '';
    editForm.value.title = '';
    editForm.value.slug = '';
};

// 6.5. Start refreshing a project
const startRefresh = (project) => {
    isEditing.value = false; // Close edit form if open
    refreshForm.value.id = project.id;
    refreshForm.value.client_name = project.client_name;
    refreshForm.value.title = project.title;
    refreshForm.value.slug = project.slug;
    refreshForm.value.reset_content = false;
};

// 6.6. Cancel refreshing
const cancelRefresh = () => {
    refreshForm.value.id = null;
    refreshForm.value.client_name = '';
    refreshForm.value.title = '';
    refreshForm.value.slug = '';
    refreshForm.value.reset_content = false;
};

// 6.7. Start creating from template
const startCreateFromTemplate = (projectId) => {
    templateForm.value.template_page_id = projectId;
    templateForm.value.client_name = '';
    templateForm.value.title = '';
    templateForm.value.slug = '';
};

// 6.8. Cancel template creation
const cancelCreateFromTemplate = () => {
    templateForm.value.template_page_id = null;
    templateForm.value.client_name = '';
    templateForm.value.title = '';
    templateForm.value.slug = '';
};

// 7. Update project
const updateProject = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        
        const response = await fetch(`/api/user-project/${editForm.value.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify(editForm.value)
        });

        let result = {};
        try {
            result = await response.json();
        } catch (e) {
            result.message = await response.text();
        }

        if (response.ok) {
            message.value = '✅ Project updated successfully!';
            cancelEditing();
            loadProjects();
        } else {
            if (result.errors) {
                const errorMessages = Object.values(result.errors).flat().join(', ');
                message.value = '❌ Validation Error: ' + errorMessages;
            } else {
                message.value = '❌ Error: ' + (result.message || 'Failed to update project');
            }
        }
    } catch (error) {
        message.value = '❌ Network error: ' + error.message;
        console.error('Update error', error);
    } finally {
        isLoading.value = false;
    }
};

// 8. Delete project
const deleteProject = async (projectId) => {
    if (!confirm('Are you sure you want to delete this project? This will delete all associated files.')) {
        return;
    }

    isLoading.value = true;
    message.value = '';

    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        
        const response = await fetch(`/api/user-project/${projectId}`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': csrfToken
            }
        });

        let result = {};
        try {
            result = await response.json();
        } catch (e) {
            result.message = await response.text();
        }

        if (response.ok) {
            message.value = '✅ Project deleted successfully!';
            loadProjects();
        } else {
            message.value = '❌ Error: ' + (result.message || 'Failed to delete project');
        }
    } catch (error) {
        message.value = '❌ Network error: ' + error.message;
        console.error('Delete error', error);
    } finally {
        isLoading.value = false;
    }
};

// 8.5. Refresh project with new content
const refreshProject = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        
        const response = await fetch(`/api/user-project/${refreshForm.value.id}/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify(refreshForm.value)
        });

        let result = {};
        try {
            result = await response.json();
        } catch (e) {
            result.message = await response.text();
        }

        if (response.ok) {
            message.value = '✅ Project refreshed successfully!';
            cancelRefresh();
            loadProjects();
        } else {
            if (result.errors) {
                const errorMessages = Object.values(result.errors).flat().join(', ');
                message.value = '❌ Validation Error: ' + errorMessages;
            } else {
                message.value = '❌ Error: ' + (result.message || 'Failed to refresh project');
            }
        }
    } catch (error) {
        message.value = '❌ Network error: ' + error.message;
        console.error('Refresh error', error);
    } finally {
        isLoading.value = false;
    }
};

// 8.6. Create new page from template
const createFromTemplate = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        
        const response = await fetch('/api/user-project/template', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify(templateForm.value)
        });

        let result = {};
        try {
            result = await response.json();
        } catch (e) {
            result.message = await response.text();
        }

        if (response.ok) {
            message.value = '✅ New page created successfully from template!';
            cancelCreateFromTemplate();
            loadProjects();
            
            // Redirect to the new project page
            if (result.project && result.project.id) {
                window.location.href = `/dashboard/project/${result.project.id}`;
            }
        } else {
            if (result.errors) {
                const errorMessages = Object.values(result.errors).flat().join(', ');
                message.value = '❌ Validation Error: ' + errorMessages;
            } else {
                message.value = '❌ Error: ' + (result.message || 'Failed to create page from template');
            }
        }
    } catch (error) {
        message.value = '❌ Network error: ' + error.message;
        console.error('Template creation error', error);
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    loadProjects();
});
</script>

<template>
    <DashboardLayout>
        <div class="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
            <div class="mx-auto max-w-6xl">
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900">Client Projects Management</h1>
                    <p class="mt-2 text-gray-500">
                        Create and manage client projects. Each project will have its own page at <code>/user/{slug}</code>.
                    </p>
                </div>

                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <!-- Create Project Form -->
                    <div class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
                        <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                            <h2 class="text-2xl font-bold">
                                Create New Project
                            </h2>
                        </div>

                        <form @submit.prevent="createProject" class="p-6 md:p-8">
                            <div class="space-y-6">
                                <div>
                                    <label class="mb-2 block text-sm font-semibold text-gray-700">
                                        Client Name *
                                    </label>
                                    <input
                                        v-model="form.client_name"
                                        type="text"
                                        placeholder="Enter client name"
                                        class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        required
                                    />
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-semibold text-gray-700">
                                        Project Title *
                                    </label>
                                    <input
                                        v-model="form.title"
                                        type="text"
                                        placeholder="Enter project title"
                                        @input="generateSlug"
                                        class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        required
                                    />
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-semibold text-gray-700">
                                        URL Slug *
                                    </label>
                                    <input
                                        v-model="form.slug"
                                        type="text"
                                        placeholder="Enter URL slug (e.g., client-project-name)"
                                        class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        required
                                    />
                                    <p class="mt-1 text-xs text-gray-500">
                                        This will be used in the URL: /user/{slug}
                                    </p>
                                </div>
                            </div>

                            <div class="mt-8 flex items-center justify-end gap-4">
                                <button
                                    type="submit"
                                    :disabled="isLoading"
                                    class="transform rounded-lg bg-blue-600 px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-blue-700 disabled:opacity-50"
                                >
                                    {{ isLoading ? 'Creating...' : 'Create Project' }}
                                </button>
                            </div>

                            <div
                                v-if="message"
                                class="mt-4 text-center font-bold"
                                :class="
                                    message.includes('✅')
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                "
                            >
                                {{ message }}
                            </div>
                        </form>
                    </div>

                    <!-- Existing Projects -->
                    <div class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
                        <div class="bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-white">
                            <h2 class="text-2xl font-bold">
                                Existing Projects
                            </h2>
                        </div>

                        <div class="p-6 md:p-8">
                            <!-- Editing Form -->
                            <div v-if="isEditing" class="mb-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                                <h3 class="font-bold text-gray-900 mb-3">Edit Project</h3>
                                <div class="space-y-4">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
                                        <input
                                            v-model="editForm.client_name"
                                            type="text"
                                            class="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                                        <input
                                            v-model="editForm.title"
                                            type="text"
                                            class="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
                                        <input
                                            v-model="editForm.slug"
                                            type="text"
                                            class="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                        <p class="mt-1 text-xs text-gray-500">Current URL: /user/{{ editForm.slug }}</p>
                                    </div>
                                    <div class="flex justify-end space-x-2">
                                        <button
                                            @click="cancelEditing"
                                            class="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            @click="updateProject"
                                            :disabled="isLoading"
                                            class="rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 disabled:opacity-50"
                                        >
                                            {{ isLoading ? 'Updating...' : 'Update Project' }}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Refresh Form -->
                            <div v-if="refreshForm.id" class="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
                                <h3 class="font-bold text-gray-900 mb-3">Refresh Project Content</h3>
                                <p class="text-sm text-gray-600 mb-4">Update project details and optionally clear all existing content.</p>
                                <div class="space-y-4">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
                                        <input
                                            v-model="refreshForm.client_name"
                                            type="text"
                                            class="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                                        <input
                                            v-model="refreshForm.title"
                                            type="text"
                                            class="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
                                        <input
                                            v-model="refreshForm.slug"
                                            type="text"
                                            class="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <p class="mt-1 text-xs text-gray-500">Current URL: /user/{{ refreshForm.slug }}</p>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            v-model="refreshForm.reset_content"
                                            type="checkbox"
                                            class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <label class="ml-2 block text-sm text-gray-700">
                                            Clear all existing content
                                        </label>
                                    </div>
                                    <div class="flex justify-end space-x-2">
                                        <button
                                            @click="cancelRefresh"
                                            class="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            @click="refreshProject"
                                            :disabled="isLoading"
                                            class="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 disabled:opacity-50"
                                        >
                                            {{ isLoading ? 'Refreshing...' : 'Refresh Project' }}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Create from Template Form -->
                            <div v-if="templateForm.template_page_id" class="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
                                <h3 class="font-bold text-gray-900 mb-3">Create New Page from Template</h3>
                                <p class="text-sm text-gray-600 mb-4">Create a new page using the selected project as a template.</p>
                                <div class="space-y-4">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Client Name *</label>
                                        <input
                                            v-model="templateForm.client_name"
                                            type="text"
                                            class="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                            placeholder="Enter client name for new page"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Project Title *</label>
                                        <input
                                            v-model="templateForm.title"
                                            type="text"
                                            class="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                            placeholder="Enter title for new page"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">URL Slug *</label>
                                        <input
                                            v-model="templateForm.slug"
                                            type="text"
                                            class="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                            placeholder="Enter unique slug for new page"
                                            required
                                        />
                                        <p class="mt-1 text-xs text-gray-500">New URL: /user/{{ templateForm.slug }}</p>
                                    </div>
                                    <div class="flex justify-end space-x-2">
                                        <button
                                            @click="cancelCreateFromTemplate"
                                            class="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            @click="createFromTemplate"
                                            :disabled="isLoading"
                                            class="rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 disabled:opacity-50"
                                        >
                                            {{ isLoading ? 'Creating...' : 'Create New Page' }}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Projects List -->
                            <div v-if="projects.length > 0" class="space-y-4">
                                <div 
                                    v-for="project in projects" 
                                    :key="project.id"
                                    class="rounded-lg border border-gray-200 p-4"
                                >
                                    <div class="flex justify-between">
                                        <div>
                                            <h3 class="font-bold text-gray-900">{{ project.title }}</h3>
                                            <p class="text-sm text-gray-600">{{ project.client_name }}</p>
                                            <p class="mt-1 text-xs text-gray-500">
                                                URL: <a :href="`/user/${project.slug || 'default'}`" class="text-blue-600 hover:underline" target="_blank">
                                                    /user/{{ project.slug || 'default' }}
                                                </a>
                                            </p>
                                        </div>
                                        <div class="text-right flex flex-col justify-between">
                                            <span class="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                                {{ project.files_count || 0 }} files
                                            </span>
                                            <div class="mt-2 flex space-x-2">
                                                <a
                                                    :href="`/user/${project.slug}`"
                                                    target="_blank"
                                                    class="text-sm text-green-600 hover:text-green-800"
                                                >
                                                    View Public
                                                </a>
                                                <a
                                                    :href="`/dashboard/project/${project.id}`"
                                                    class="text-sm text-indigo-600 hover:text-indigo-800"
                                                >
                                                    Manage
                                                </a>
                                                <button
                                                    @click="startCreateFromTemplate(project.id)"
                                                    class="text-sm text-teal-600 hover:text-teal-800"
                                                >
                                                    Use as Template
                                                </button>
                                                <button
                                                    @click="startRefresh(project)"
                                                    class="text-sm text-blue-600 hover:text-blue-800"
                                                >
                                                    Refresh
                                                </button>
                                                <button
                                                    @click="startEditing(project)"
                                                    class="text-sm text-purple-600 hover:text-purple-800"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    @click="deleteProject(project.id)"
                                                    class="text-sm text-red-600 hover:text-red-800"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="text-center text-gray-500">
                                <p>No projects found.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
