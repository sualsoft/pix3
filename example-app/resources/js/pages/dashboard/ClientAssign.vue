<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

// Reactive data
const projects = ref([]);
const users = ref([]);
const message = ref('');
const isLoading = ref(false);

// Form data for assigning users to projects
const assignForm = ref({
    project_id: '',
    user_id: '',
    new_user_name: '',
    new_user_email: '',
    new_user_password: '',
});

const assignedUsers = ref([]);

// Load projects and users
const loadData = async () => {
    try {
        // Load projects
        const projectsResponse = await fetch('/api/user-projects');
        let projectsData = {};
        if (projectsResponse.ok) {
            projectsData = await projectsResponse.json();
            projects.value = projectsData.projects || [];
        } else {
            // Handle error response
            const projectsResponseClone = projectsResponse.clone();
            try {
                const errorData = await projectsResponseClone.json();
                console.error('Error loading projects:', errorData);
            } catch (jsonError) {
                // If JSON parsing fails, try to get text content
                try {
                    const textContent = await projectsResponseClone.text();
                    console.error('Error loading projects:', textContent);
                } catch (textError) {
                    console.error('Response parsing error for projects');
                }
            }
            projects.value = [];
        }

        // Load users
        const usersResponse = await fetch('/api/users');
        let usersData = {};
        if (usersResponse.ok) {
            usersData = await usersResponse.json();
            users.value = usersData.users || [];
        } else {
            // Handle error response
            const usersResponseClone = usersResponse.clone();
            try {
                const errorData = await usersResponseClone.json();
                console.error('Error loading users:', errorData);
            } catch (jsonError) {
                // If JSON parsing fails, try to get text content
                try {
                    const textContent = await usersResponseClone.text();
                    console.error('Error loading users:', textContent);
                } catch (textError) {
                    console.error('Response parsing error for users');
                }
            }
            users.value = [];
        }
    } catch (error) {
        console.error('Error loading data', error);
        message.value = '❌ Error loading data: ' + error.message;
    }
};

// Assign existing user to project
const assignUserToProject = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute('content');

        const response = await fetch('/api/client-assign/assign-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify(assignForm.value),
        });

        // Check response status first and clone the response if needed
        let result = {};
        if (response.ok) {
            result = await response.json();
        } else {
            // Clone the response to read it multiple times if needed
            const responseClone = response.clone();
            try {
                result = await responseClone.json();
            } catch (e) {
                // If JSON parsing fails (e.g., server returned HTML error page), try to get text content
                try {
                    const textContent = await responseClone.text();
                    // Check if the content looks like HTML (starts with <!DOCTYPE or <html>)
                    if (textContent.trim().startsWith('<!DOCTYPE') || textContent.trim().startsWith('<html')) {
                        result.message = 'Server error occurred';
                    } else {
                        result.message = textContent;
                    }
                } catch (textError) {
                    result.message = 'Response parsing error';
                }
            }
        }

        if (response.ok) {
            message.value = '✅ User assigned to project successfully!';
            // Reset form
            assignForm.value.user_id = '';
            // Reload assigned users
            loadAssignedUsers(assignForm.value.project_id);
        } else {
            if (result.errors) {
                const errorMessages = Object.values(result.errors)
                    .flat()
                    .join(', ');
                message.value = '❌ Validation Error: ' + errorMessages;
            } else {
                message.value =
                    '❌ Error: ' +
                    (result.message || 'Failed to assign user to project');
            }
        }
    } catch (error) {
        message.value = '❌ Network error: ' + error.message;
        console.error('Assign error', error);
    } finally {
        isLoading.value = false;
    }
};

// Create new user and assign to project
const createAndAssignUser = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute('content');

        const response = await fetch('/api/client-assign/create-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify(assignForm.value),
        });

        // Check response status first and clone the response if needed
        let result = {};
        if (response.ok) {
            result = await response.json();
        } else {
            // Clone the response to read it multiple times if needed
            const responseClone = response.clone();
            try {
                result = await responseClone.json();
            } catch (e) {
                // If JSON parsing fails (e.g., server returned HTML error page), try to get text content
                try {
                    const textContent = await responseClone.text();
                    // Check if the content looks like HTML (starts with <!DOCTYPE or <html>)
                    if (textContent.trim().startsWith('<!DOCTYPE') || textContent.trim().startsWith('<html')) {
                        result.message = 'Server error occurred';
                    } else {
                        result.message = textContent;
                    }
                } catch (textError) {
                    result.message = 'Response parsing error';
                }
            }
        }

        if (response.ok) {
            message.value =
                '✅ New user created and assigned to project successfully!';
            // Reset form
            assignForm.value.new_user_name = '';
            assignForm.value.new_user_email = '';
            assignForm.value.new_user_password = '';
            // Reload users and assigned users
            loadData();
            loadAssignedUsers(assignForm.value.project_id);
        } else {
            if (result.errors) {
                const errorMessages = Object.values(result.errors)
                    .flat()
                    .join(', ');
                message.value = '❌ Validation Error: ' + errorMessages;
            } else {
                message.value =
                    '❌ Error: ' +
                    (result.message || 'Failed to create and assign user');
            }
        }
    } catch (error) {
        message.value = '❌ Network error: ' + error.message;
        console.error('Create user error', error);
    } finally {
        isLoading.value = false;
    }
};

// Load assigned users for a project
const loadAssignedUsers = async (projectId) => {
    if (!projectId) {
        assignedUsers.value = [];
        return;
    }

    try {
        const response = await fetch(
            `/api/client-assign/project/${projectId}/users`,
        );
        
        // Check if response is ok before trying to parse JSON
        if (response.ok) {
            const data = await response.json();
            assignedUsers.value = data.users || [];
        } else {
            // Handle error response
            const responseClone = response.clone();
            try {
                const errorData = await responseClone.json();
                console.error('Error loading assigned users:', errorData);
            } catch (jsonError) {
                // If JSON parsing fails, try to get text content
                try {
                    const textContent = await responseClone.text();
                    // Check if the content looks like HTML (starts with <!DOCTYPE or <html>)
                    if (textContent.trim().startsWith('<!DOCTYPE') || textContent.trim().startsWith('<html')) {
                        console.error('Server error occurred while loading assigned users');
                    } else {
                        console.error('Error loading assigned users:', textContent);
                    }
                } catch (textError) {
                    console.error('Response parsing error while loading assigned users');
                }
            }
        }
    } catch (error) {
        console.error('Network error loading assigned users', error);
    }
};

// Watch for project selection changes
const watchProjectSelection = () => {
    // This would be implemented with Vue's watch functionality
    // For now, we'll call it manually when project changes
};

// Lifecycle
onMounted(() => {
    loadData();
});
</script>

<template>
    <DashboardLayout>
        <Head title="Client Assignment" />

        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-gray-900">
                    Client Assignment
                </h1>
                <p class="mt-2 text-gray-600">
                    Assign users to projects and manage client access
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

            <!-- Client Assignment Form -->
            <div
                class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl"
            >
                <div
                    class="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white"
                >
                    <h2 class="text-2xl font-bold">
                        Assign Clients to Projects
                    </h2>
                    <p class="mt-1 text-indigo-100">
                        Manage which users have access to which projects
                    </p>
                </div>

                <div class="p-6 md:p-8">
                    <div class="space-y-6">
                        <!-- Project Selection -->
                        <div>
                            <label
                                class="mb-1 block text-sm font-medium text-gray-700"
                                >Select Project *</label
                            >
                            <select
                                v-model="assignForm.project_id"
                                @change="
                                    loadAssignedUsers(assignForm.project_id)
                                "
                                class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            >
                                <option value="">Choose a project</option>
                                <option
                                    v-for="project in projects"
                                    :key="project.id"
                                    :value="project.id"
                                >
                                    {{ project.title }} ({{
                                        project.client_name
                                    }})
                                </option>
                            </select>
                        </div>

                        <!-- Assign Existing User Section -->
                        <div class="border-t border-gray-200 pt-6">
                            <h3 class="mb-4 text-lg font-medium text-gray-900">
                                Assign Existing User
                            </h3>

                            <div>
                                <label
                                    class="mb-1 block text-sm font-medium text-gray-700"
                                    >Select User</label
                                >
                                <select
                                    v-model="assignForm.user_id"
                                    class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                >
                                    <option value="">Choose a user</option>
                                    <option
                                        v-for="user in users"
                                        :key="user.id"
                                        :value="user.id"
                                    >
                                        {{ user.name }} ({{ user.email }})
                                    </option>
                                </select>
                            </div>

                            <div class="mt-4">
                                <button
                                    @click="assignUserToProject"
                                    :disabled="
                                        isLoading ||
                                        !assignForm.project_id ||
                                        !assignForm.user_id
                                    "
                                    class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
                                >
                                    {{
                                        isLoading
                                            ? 'Assigning...'
                                            : 'Assign User to Project'
                                    }}
                                </button>
                            </div>
                        </div>

                        <!-- Divider -->
                        <div class="relative">
                            <div class="absolute inset-0 flex items-center">
                                <div
                                    class="w-full border-t border-gray-300"
                                ></div>
                            </div>
                            <div class="relative flex justify-center text-sm">
                                <span class="bg-white px-2 text-gray-500"
                                    >OR</span
                                >
                            </div>
                        </div>

                        <!-- Create New User Section -->
                        <div class="border-t border-gray-200 pt-6">
                            <h3 class="mb-4 text-lg font-medium text-gray-900">
                                Create New User and Assign
                            </h3>

                            <div class="space-y-4">
                                <div>
                                    <label
                                        class="mb-1 block text-sm font-medium text-gray-700"
                                        >User Name *</label
                                    >
                                    <input
                                        v-model="assignForm.new_user_name"
                                        type="text"
                                        class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                        placeholder="Enter user's full name"
                                    />
                                </div>

                                <div>
                                    <label
                                        class="mb-1 block text-sm font-medium text-gray-700"
                                        >Email Address *</label
                                    >
                                    <input
                                        v-model="assignForm.new_user_email"
                                        type="email"
                                        class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                        placeholder="Enter user's email address"
                                    />
                                </div>

                                <div>
                                    <label
                                        class="mb-1 block text-sm font-medium text-gray-700"
                                        >Password *</label
                                    >
                                    <input
                                        v-model="assignForm.new_user_password"
                                        type="password"
                                        class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                        placeholder="Enter a strong password"
                                    />
                                </div>
                            </div>

                            <div class="mt-4">
                                <button
                                    @click="createAndAssignUser"
                                    :disabled="
                                        isLoading ||
                                        !assignForm.project_id ||
                                        !assignForm.new_user_name ||
                                        !assignForm.new_user_email ||
                                        !assignForm.new_user_password
                                    "
                                    class="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
                                >
                                    {{
                                        isLoading
                                            ? 'Creating...'
                                            : 'Create User and Assign to Project'
                                    }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Assigned Users Table -->
            <div
                class="mt-8 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl"
            >
                <div
                    class="bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-white"
                >
                    <h2 class="text-2xl font-bold">Assigned Users</h2>
                    <p class="mt-1 text-green-100">
                        Users assigned to projects
                    </p>
                </div>

                <div class="p-6 md:p-8">
                    <div
                        v-if="assignedUsers.length > 0"
                        class="overflow-x-auto"
                    >
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                    >
                                        User Name
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                    >
                                        Assigned Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr
                                    v-for="user in assignedUsers"
                                    :key="user.id"
                                >
                                    <td
                                        class="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900"
                                    >
                                        {{ user.name }}
                                    </td>
                                    <td
                                        class="px-6 py-4 text-sm whitespace-nowrap text-gray-500"
                                    >
                                        {{ user.email }}
                                    </td>
                                    <td
                                        class="px-6 py-4 text-sm whitespace-nowrap text-gray-500"
                                    >
                                        Assigned
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div v-else class="py-8 text-center text-gray-500">
                        <p>No users assigned to this project yet.</p>
                        <p class="mt-2 text-sm">
                            Select a project and assign users above.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
