<script setup>
import { ref, onMounted } from 'vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';

// 1. Reactive data
const mainContent = ref({
    client_name: '',
    title: ''
});

const newSection = ref({
    name: '',
    type: 'video',
    date: '',
    badge: '',
    youtube_id: '',
    thumbnail_file: null,
    download_file: null,
    external_link: ''
});

const refreshOptions = ref({
    reset_content: false
});

// For creating from template
const templateOptions = ref({
    use_as_template: false
});

const sections = ref([]);
const message = ref('');
const isLoading = ref(false);
const activeTab = ref('content');

// 2. Load main dashboard content
const loadMainContent = async () => {
    try {
        const response = await fetch('/api/dashboard/main-content');
        const data = await response.json();
        
        if (data) {
            mainContent.value.client_name = data.client_name || '';
            mainContent.value.title = data.title || '';
            sections.value = data.files || [];
        }
    } catch (error) {
        console.error('Error loading main content', error);
        message.value = '❌ Error loading content: ' + error.message;
    }
};

// 3. Update main dashboard content
const updateMainContent = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        
        const response = await fetch('/api/dashboard/main-content', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify(mainContent.value)
        });

        let result = {};
        try {
            result = await response.json();
        } catch (e) {
            result.message = await response.text();
        }

        if (response.ok) {
            message.value = '✅ Main content updated successfully!';
        } else {
            if (result.errors) {
                const errorMessages = Object.values(result.errors).flat().join(', ');
                message.value = '❌ Validation Error: ' + errorMessages;
            } else {
                message.value = '❌ Error: ' + (result.message || 'Failed to update content');
            }
        }
    } catch (error) {
        message.value = '❌ Network error: ' + error.message;
        console.error('Update error', error);
    } finally {
        isLoading.value = false;
    }
};

// 4. Add new content section
const addNewSection = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        
        // Create FormData for file uploads
        const formData = new FormData();
        formData.append('name', newSection.value.name);
        formData.append('type', newSection.value.type);
        formData.append('date', newSection.value.date);
        formData.append('badge', newSection.value.badge);
        formData.append('youtube_id', newSection.value.youtube_id);
        
        if (newSection.value.thumbnail_file) {
            formData.append('thumbnail_file', newSection.value.thumbnail_file);
        }
        
        if (newSection.value.download_file) {
            formData.append('download_file', newSection.value.download_file);
        }
        
        if (newSection.value.external_link) {
            formData.append('external_link', newSection.value.external_link);
        }

        const response = await fetch('/api/dashboard/main-section', {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': csrfToken
            },
            body: formData
        });

        let result = {};
        try {
            result = await response.json();
        } catch (e) {
            result.message = await response.text();
        }

        if (response.ok) {
            message.value = '✅ New section added successfully!';
            // Reset form
            newSection.value = {
                name: '',
                type: 'video',
                date: '',
                badge: '',
                youtube_id: '',
                thumbnail_file: null,
                download_file: null,
                external_link: ''
            };
            // Reload content
            loadMainContent();
        } else {
            if (result.errors) {
                const errorMessages = Object.values(result.errors).flat().join(', ');
                message.value = '❌ Validation Error: ' + errorMessages;
            } else {
                message.value = '❌ Error: ' + (result.message || 'Failed to add section');
            }
        }
    } catch (error) {
        message.value = '❌ Network error: ' + error.message;
        console.error('Add section error', error);
    } finally {
        isLoading.value = false;
    }
};

// 5. Handle file inputs
const handleThumbnailUpload = (event) => {
    newSection.value.thumbnail_file = event.target.files[0];
};

const handleDownloadUpload = (event) => {
    newSection.value.download_file = event.target.files[0];
};

// 6. Delete section
const deleteSection = async (sectionId) => {
    if (!confirm('Are you sure you want to delete this section?')) {
        return;
    }

    isLoading.value = true;
    message.value = '';

    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        
        const response = await fetch(`/api/user-project/file/${sectionId}`, {
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
            message.value = '✅ Section deleted successfully!';
            loadMainContent();
        } else {
            message.value = '❌ Error: ' + (result.message || 'Failed to delete section');
        }
    } catch (error) {
        message.value = '❌ Network error: ' + error.message;
        console.error('Delete error', error);
    } finally {
        isLoading.value = false;
    }
};

// 7. Load data when component mounts
onMounted(() => {
    loadMainContent();
});

// 8. Refresh main content with option to clear all
const refreshMainContent = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        
        // Get the main project ID
        const response = await fetch('/api/dashboard/main-content');
        const data = await response.json();
        
        if (!data || !data.id) {
            message.value = '❌ Error: Could not find main project';
            return;
        }
        
        // Prepare refresh data
        const refreshData = {
            client_name: mainContent.value.client_name,
            title: mainContent.value.title,
            slug: 'main-dashboard',
            reset_content: refreshOptions.value.reset_content
        };
        
        const refreshResponse = await fetch(`/api/user-project/${data.id}/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify(refreshData)
        });

        let result = {};
        try {
            result = await refreshResponse.json();
        } catch (e) {
            result.message = await refreshResponse.text();
        }

        if (refreshResponse.ok) {
            message.value = '✅ Main content refreshed successfully!';
            // If we cleared content, reload to show empty state
            if (refreshOptions.value.reset_content) {
                loadMainContent();
            }
        } else {
            if (result.errors) {
                const errorMessages = Object.values(result.errors).flat().join(', ');
                message.value = '❌ Validation Error: ' + errorMessages;
            } else {
                message.value = '❌ Error: ' + (result.message || 'Failed to refresh content');
            }
        }
    } catch (error) {
        message.value = '❌ Network error: ' + error.message;
        console.error('Refresh error', error);
    } finally {
        isLoading.value = false;
    }
};

// 9. Create new page using current content as template
const createFromCurrentTemplate = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        
        // Get the main project ID
        const response = await fetch('/api/dashboard/main-content');
        const data = await response.json();
        
        if (!data || !data.id) {
            message.value = '❌ Error: Could not find main project';
            return;
        }
        
        // Prepare template data
        const templateData = {
            client_name: mainContent.value.client_name + ' (Copy)',
            title: mainContent.value.title + ' (Copy)',
            slug: 'new-page-' + Date.now(),
            template_page_id: data.id
        };
        
        const templateResponse = await fetch('/api/user-project/template', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify(templateData)
        });

        let result = {};
        try {
            result = await templateResponse.json();
        } catch (e) {
            result.message = await templateResponse.text();
        }

        if (templateResponse.ok) {
            message.value = '✅ New page created successfully from current content!';
            // Reload projects to show new page
            loadMainContent();
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
</script>

<template>
    <DashboardLayout>
        <Head title="Main Dashboard Content" />

        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-gray-900">Main Dashboard Content</h1>
                <p class="mt-2 text-gray-600">Manage your main dashboard page content</p>
            </div>

            <!-- Status Message -->
            <div v-if="message" class="mb-6 rounded-lg p-4" :class="{
                'bg-green-100 text-green-800': message.includes('✅'),
                'bg-red-100 text-red-800': message.includes('❌')
            }">
                {{ message }}
            </div>

            <!-- Tabs -->
            <div class="mb-6 border-b border-gray-200">
                <nav class="-mb-px flex space-x-8">
                    <button
                        @click="activeTab = 'content'"
                        :class="[
                            activeTab === 'content' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                        ]"
                    >
                        Main Content
                    </button>
                    <button
                        @click="activeTab = 'sections'"
                        :class="[
                            activeTab === 'sections' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                        ]"
                    >
                        Content Sections
                    </button>
                    <button
                        @click="activeTab = 'add'"
                        :class="[
                            activeTab === 'add' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                        ]"
                    >
                        Add New Section
                    </button>
                </nav>
            </div>

            <!-- Main Content Tab -->
            <div v-show="activeTab === 'content'" class="space-y-6">
                <div class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
                    <div class="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white">
                        <h2 class="text-2xl font-bold">Main Page Information</h2>
                    </div>

                    <div class="p-6 md:p-8">
                        <div class="space-y-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
                                <input
                                    v-model="mainContent.client_name"
                                    type="text"
                                    class="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter client name"
                                />
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Page Title</label>
                                <input
                                    v-model="mainContent.title"
                                    type="text"
                                    class="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter page title"
                                />
                            </div>

                            <div class="flex items-center mb-4">
                                <input
                                    v-model="refreshOptions.reset_content"
                                    type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label class="ml-2 block text-sm text-gray-700">
                                    Clear all existing content when saving
                                </label>
                            </div>

                            <div class="flex justify-end space-x-3">
                                <button
                                    @click="updateMainContent"
                                    :disabled="isLoading"
                                    class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
                                >
                                    {{ isLoading ? 'Saving...' : 'Save Changes' }}
                                </button>
                                <button
                                    @click="refreshMainContent"
                                    :disabled="isLoading"
                                    class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                                >
                                    {{ isLoading ? 'Refreshing...' : 'Refresh Content' }}
                                </button>
                                <button
                                    @click="createFromCurrentTemplate"
                                    :disabled="isLoading"
                                    class="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
                                >
                                    {{ isLoading ? 'Creating...' : 'Use as Template' }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Content Sections Tab -->
            <div v-show="activeTab === 'sections'" class="space-y-6">
                <div class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
                    <div class="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white">
                        <h2 class="text-2xl font-bold">Content Sections</h2>
                        <p class="mt-1 text-indigo-100">Manage existing content sections</p>
                    </div>

                    <div class="p-6 md:p-8">
                        <div v-if="sections.length > 0" class="space-y-4">
                            <div 
                                v-for="section in sections" 
                                :key="section.id"
                                class="rounded-lg border border-gray-200 p-4"
                            >
                                <div class="flex justify-between">
                                    <div>
                                        <h3 class="font-bold text-gray-900">{{ section.name }}</h3>
                                        <p class="text-sm text-gray-600 capitalize">{{ section.type }}</p>
                                        <p class="text-xs text-gray-500 mt-1">{{ section.date }}</p>
                                    </div>
                                    <div class="text-right">
                                        <span v-if="section.badge" class="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                            {{ section.badge }}
                                        </span>
                                        <button
                                            @click="deleteSection(section.id)"
                                            class="ml-4 text-sm text-red-600 hover:text-red-800"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                
                                <div v-if="section.thumbnail" class="mt-3">
                                    <img :src="section.thumbnail" :alt="section.name" class="h-20 w-20 rounded object-cover">
                                </div>
                            </div>
                        </div>
                        <div v-else class="text-center text-gray-500 py-8">
                            <p>No content sections found.</p>
                            <p class="mt-2 text-sm">Add your first section using the "Add New Section" tab.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Add New Section Tab -->
            <div v-show="activeTab === 'add'" class="space-y-6">
                <div class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
                    <div class="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white">
                        <h2 class="text-2xl font-bold">Add New Content Section</h2>
                        <p class="mt-1 text-indigo-100">Create a new section for your dashboard</p>
                    </div>

                    <div class="p-6 md:p-8">
                        <div class="space-y-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Section Name *</label>
                                <input
                                    v-model="newSection.name"
                                    type="text"
                                    class="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter section name"
                                    required
                                />
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Type *</label>
                                <select
                                    v-model="newSection.type"
                                    class="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="video">Video</option>
                                    <option value="image">Image</option>
                                    <option value="document">Document</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                                <input
                                    v-model="newSection.date"
                                    type="date"
                                    class="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Badge</label>
                                <input
                                    v-model="newSection.badge"
                                    type="text"
                                    class="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="e.g., NEW, 4K, HD"
                                />
                            </div>

                            <div v-if="newSection.type === 'video'">
                                <label class="block text-sm font-medium text-gray-700 mb-1">YouTube ID</label>
                                <input
                                    v-model="newSection.youtube_id"
                                    type="text"
                                    class="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter YouTube video ID"
                                />
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Thumbnail Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    @change="handleThumbnailUpload"
                                    class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    {{ newSection.type === 'video' ? 'Video File or Link' : 
                                       newSection.type === 'image' ? 'Image File' : 
                                       'Document File' }}
                                </label>
                                
                                <div class="space-y-3">
                                    <div>
                                        <label class="block text-xs text-gray-500 mb-1">Upload File</label>
                                        <input
                                            type="file"
                                            @change="handleDownloadUpload"
                                            class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                    
                                    <div class="relative">
                                        <div class="absolute inset-0 flex items-center">
                                            <div class="w-full border-t border-gray-300"></div>
                                        </div>
                                        <div class="relative flex justify-center text-sm">
                                            <span class="bg-white px-2 text-gray-500">OR</span>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label class="block text-xs text-gray-500 mb-1">External Link</label>
                                        <input
                                            v-model="newSection.external_link"
                                            type="url"
                                            class="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="https://example.com/file"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end">
                                <button
                                    @click="addNewSection"
                                    :disabled="isLoading"
                                    class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
                                >
                                    {{ isLoading ? 'Adding...' : 'Add Section' }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>

