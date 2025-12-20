<script setup>
import { onMounted, ref } from 'vue';

// Props
const props = defineProps({
    projectId: {
        type: Number,
        required: true,
    },
    projectName: {
        type: String,
        default: '',
    },
});

// Emits
const emit = defineEmits(['filesUpdated']);

// Reactive data
const newFile = ref({
    name: '',
    type: 'video',
    date: '',
    badge: '',
    youtube_id: '',
    thumbnail_file: null,
    download_file: null,
    external_link: '',
});

const files = ref([]);
const message = ref('');
const isLoading = ref(false);

// Methods
const loadFiles = async () => {
    try {
        const response = await fetch(`/api/user-project/${props.projectId}`);
        const data = await response.json();

        if (data && data.files) {
            files.value = data.files;
        }

        // Emit event to notify parent
        emit('filesUpdated', files.value);
    } catch (error) {
        console.error('Error loading files', error);
        message.value = '❌ Error loading files: ' + error.message;
    }
};

const handleThumbnailUpload = (event) => {
    newFile.value.thumbnail_file = event.target.files[0];
};

const handleDownloadUpload = (event) => {
    newFile.value.download_file = event.target.files[0];
};

const addNewFile = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute('content');

        // Create FormData for file uploads
        const formData = new FormData();
        formData.append('project_id', props.projectId);
        formData.append('name', newFile.value.name);
        formData.append('type', newFile.value.type);
        formData.append('date', newFile.value.date);
        formData.append('badge', newFile.value.badge);
        formData.append('youtube_id', newFile.value.youtube_id);

        if (newFile.value.thumbnail_file) {
            formData.append('thumbnail_file', newFile.value.thumbnail_file);
        }

        if (newFile.value.download_file) {
            formData.append('download_file', newFile.value.download_file);
        }

        if (newFile.value.external_link) {
            formData.append('external_link', newFile.value.external_link);
        }

        const response = await fetch('/api/user-project/file', {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': csrfToken,
            },
            body: formData,
        });

        let result = {};
        try {
            result = await response.json();
        } catch (e) {
            result.message = await response.text();
        }

        if (response.ok) {
            message.value = '✅ File added successfully!';
            // Reset form
            newFile.value = {
                name: '',
                type: 'video',
                date: '',
                badge: '',
                youtube_id: '',
                thumbnail_file: null,
                download_file: null,
                external_link: '',
            };
            // Reload files
            loadFiles();
        } else {
            if (result.errors) {
                const errorMessages = Object.values(result.errors)
                    .flat()
                    .join(', ');
                message.value = '❌ Validation Error: ' + errorMessages;
            } else {
                message.value =
                    '❌ Error: ' + (result.message || 'Failed to add file');
            }
        }
    } catch (error) {
        message.value = '❌ Network error: ' + error.message;
        console.error('Add file error', error);
    } finally {
        isLoading.value = false;
    }
};

const deleteFile = async (fileId) => {
    if (!confirm('Are you sure you want to delete this file?')) {
        return;
    }

    isLoading.value = true;
    message.value = '';

    try {
        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute('content');

        const response = await fetch(`/api/user-project/file/${fileId}`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': csrfToken,
            },
        });

        let result = {};
        try {
            result = await response.json();
        } catch (e) {
            result.message = await response.text();
        }

        if (response.ok) {
            message.value = '✅ File deleted successfully!';
            loadFiles();
        } else {
            message.value =
                '❌ Error: ' + (result.message || 'Failed to delete file');
        }
    } catch (error) {
        message.value = '❌ Network error: ' + error.message;
        console.error('Delete error', error);
    } finally {
        isLoading.value = false;
    }
};

// Lifecycle
onMounted(() => {
    loadFiles();
});
</script>

<template>
    <div class="space-y-6">
        <!-- Status Message -->
        <div
            v-if="message"
            class="rounded-lg p-4"
            :class="{
                'bg-green-100 text-green-800': message.includes('✅'),
                'bg-red-100 text-red-800': message.includes('❌'),
            }"
        >
            {{ message }}
        </div>

        <!-- Add New File Form -->
        <div
            class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl"
        >
            <div
                class="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white"
            >
                <h2 class="text-2xl font-bold">Ajouter un Fichier</h2>
                <p class="mt-1 text-indigo-100">
                    Add new content to {{ projectName }}
                </p>
            </div>

            <div class="p-6 md:p-8">
                <div class="space-y-6">
                    <div>
                        <label
                            class="mb-1 block text-sm font-medium text-gray-700"
                            >Nom du Fichier *</label
                        >
                        <input
                            v-model="newFile.name"
                            type="text"
                            class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="ex: Timelapse Semaine 4"
                            required
                        />
                    </div>

                    <div>
                        <label
                            class="mb-1 block text-sm font-medium text-gray-700"
                            >Date *</label
                        >
                        <input
                            v-model="newFile.date"
                            type="date"
                            class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label
                            class="mb-1 block text-sm font-medium text-gray-700"
                            >Type *</label
                        >
                        <select
                            v-model="newFile.type"
                            class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        >
                            <option value="video">Vidéo</option>
                            <option value="image">Image</option>
                            <option value="document">Document</option>
                        </select>
                    </div>

                    <div>
                        <label
                            class="mb-1 block text-sm font-medium text-gray-700"
                            >Source du téléchargement</label
                        >

                        <div class="space-y-3">
                            <div>
                                <label class="mb-1 block text-xs text-gray-500"
                                    >Téléverser un fichier</label
                                >
                                <input
                                    type="file"
                                    @change="handleDownloadUpload"
                                    class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                />
                            </div>

                            <div class="relative">
                                <div class="absolute inset-0 flex items-center">
                                    <div
                                        class="w-full border-t border-gray-300"
                                    ></div>
                                </div>
                                <div
                                    class="relative flex justify-center text-sm"
                                >
                                    <span class="bg-white px-2 text-gray-500"
                                        >OU</span
                                    >
                                </div>
                            </div>

                            <div>
                                <label class="mb-1 block text-xs text-gray-500"
                                    >Lien Google Drive / Externe</label
                                >
                                <input
                                    v-model="newFile.external_link"
                                    type="url"
                                    class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    placeholder="https://drive.google.com/file/..."
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label
                            class="mb-1 block text-sm font-medium text-gray-700"
                            >ID YouTube (Pour l'aperçu)</label
                        >
                        <input
                            v-model="newFile.youtube_id"
                            type="text"
                            class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="ex: dQw4w9WgXcQ"
                        />
                        <p class="mt-1 text-xs text-gray-500">
                            Laissez vide si vous ne voulez pas de lecture
                            directe.
                        </p>
                    </div>

                    <div>
                        <label
                            class="mb-1 block text-sm font-medium text-gray-700"
                            >Miniature (Image)</label
                        >
                        <input
                            type="file"
                            accept="image/*"
                            @change="handleThumbnailUpload"
                            class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label
                            class="mb-1 block text-sm font-medium text-gray-700"
                            >Badge</label
                        >
                        <input
                            v-model="newFile.badge"
                            type="text"
                            class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="NEW"
                        />
                    </div>

                    <div class="flex justify-end">
                        <button
                            @click="addNewFile"
                            :disabled="isLoading"
                            class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
                        >
                            {{
                                isLoading
                                    ? 'Ajout en cours...'
                                    : 'Ajouter le Fichier'
                            }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Existing Files -->
        <div
            class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl"
        >
            <div
                class="bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-white"
            >
                <h2 class="text-2xl font-bold">Fichiers du Projet</h2>
                <p class="mt-1 text-green-100">Manage existing content</p>
            </div>

            <div class="p-6 md:p-8">
                <div v-if="files.length > 0" class="space-y-4">
                    <div
                        v-for="file in files"
                        :key="file.id"
                        class="rounded-lg border border-gray-200 p-4"
                    >
                        <div class="flex justify-between">
                            <div>
                                <h3 class="font-bold text-gray-900">
                                    {{ file.name }}
                                </h3>
                                <p class="text-sm text-gray-600 capitalize">
                                    {{ file.type }}
                                </p>
                                <p class="mt-1 text-xs text-gray-500">
                                    {{ file.date }}
                                </p>
                            </div>
                            <div class="text-right">
                                <span
                                    v-if="file.badge"
                                    class="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                                >
                                    {{ file.badge }}
                                </span>
                                <button
                                    @click="deleteFile(file.id)"
                                    class="ml-4 text-sm text-red-600 hover:text-red-800"
                                >
                                    Supprimer
                                </button>
                            </div>
                        </div>

                        <div v-if="file.thumbnail" class="mt-3">
                            <img
                                :src="file.thumbnail"
                                :alt="file.name"
                                class="h-20 w-20 rounded object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div v-else class="py-8 text-center text-gray-500">
                    <p>Aucun fichier trouvé.</p>
                    <p class="mt-2 text-sm">
                        Ajoutez votre premier fichier en utilisant le formulaire
                        ci-dessus.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
