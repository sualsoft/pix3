<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const form = ref({
    title: '',
    description: '',
    images: ['', '', ''], // Array for 3 images
});
const message = ref('');
const isLoading = ref(false);
const imageFiles = ref([null, null, null]); // Store actual file objects

const loadData = async () => {
    try {
        const res = await axios.get('/api/layout');
        if (res.data.drone_detail) {
            form.value = res.data.drone_detail;
            while (form.value.images.length < 3) form.value.images.push('');
        }
    } catch (e) {
        console.error(e);
    }
};

const handleImage = (e, index) => {
    const file = e.target.files[0];
    if (file) {
        imageFiles.value[index] = file; // Store the actual file
        const reader = new FileReader();
        reader.onload = (e) => (form.value.images[index] = e.target.result);
        reader.readAsDataURL(file);
    }
};

// Remove image
const removeImage = (index) => {
    form.value.images[index] = '';
    imageFiles.value[index] = null;
};

// Add new image slot (if we want to allow more than 3)
const addImageSlot = () => {
    if (form.value.images.length < 6) {
        // Limit to 6 images
        form.value.images.push('');
        imageFiles.value.push(null);
    }
};

// Remove image slot
const removeImageSlot = (index) => {
    if (form.value.images.length > 1) {
        // Keep at least one slot
        form.value.images.splice(index, 1);
        imageFiles.value.splice(index, 1);
    }
};

const save = async () => {
    isLoading.value = true;
    message.value = '';
    try {
        // Create FormData to handle file uploads
        const formData = new FormData();
        formData.append('title', form.value.title || '');
        formData.append('description', form.value.description || '');

        // Append images - if they're files, upload them; if they're URLs, keep them
        for (let i = 0; i < form.value.images.length; i++) {
            if (imageFiles.value[i]) {
                // New file to upload
                formData.append(`images[${i}]`, imageFiles.value[i]);
            } else if (
                form.value.images[i] &&
                form.value.images[i].startsWith('http')
            ) {
                // Existing URL - just pass the URL
                formData.append(`images[${i}]`, form.value.images[i]);
            } else if (
                form.value.images[i] &&
                form.value.images[i].startsWith('/images/')
            ) {
                // Existing local image - just pass the path
                formData.append(`images[${i}]`, form.value.images[i]);
            } else {
                // Empty or invalid - send empty string
                formData.append(`images[${i}]`, '');
            }
        }

        await axios.post('/api/settings/drone-detail', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        message.value = '✅ Détails Drone sauvegardés !';
        // Reload data to get updated image URLs
        await loadData();
    } catch (e) {
        console.error(e);
        message.value = '❌ Erreur lors de la sauvegarde.';
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => loadData());
</script>

<template>
    <DashboardLayout>
        <div
            class="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8"
        >
            <div class="mx-auto max-w-5xl">
                <div class="mb-8 text-center">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Détails Drone
                    </h1>
                    <p class="text-gray-600">
                        Modifiez le texte et les 3 images de la page Drone.
                    </p>
                </div>

                <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div
                        class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                    >
                        <h2 class="text-xl font-bold">Contenu de la section</h2>
                    </div>

                    <div class="space-y-6 p-8">
                        <div>
                            <label class="mb-2 block font-bold text-gray-700"
                                >Titre Principal</label
                            >
                            <input
                                v-model="form.title"
                                type="text"
                                class="w-full rounded-lg border p-3 text-gray-500"
                                placeholder="Entrez le titre principal"
                            />
                        </div>

                        <div>
                            <label class="mb-2 block font-bold text-gray-700"
                                >Description</label
                            >
                            <textarea
                                v-model="form.description"
                                rows="6"
                                class="w-full rounded-lg border p-3 text-gray-500"
                                placeholder="Entrez la description"
                            ></textarea>
                        </div>

                        <div>
                            <div class="mb-4 flex items-center justify-between">
                                <label class="block font-bold text-gray-700"
                                    >Images Flottantes</label
                                >
                                <button
                                    v-if="form.images.length < 6"
                                    @click="addImageSlot"
                                    type="button"
                                    class="rounded bg-green-500 px-3 py-1 text-sm text-white hover:bg-green-600"
                                >
                                    Ajouter Image
                                </button>
                            </div>

                            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <div
                                    v-for="(img, index) in form.images"
                                    :key="index"
                                    class="space-y-2"
                                >
                                    <div
                                        class="group relative h-40 overflow-hidden rounded-lg border bg-gray-100"
                                    >
                                        <img
                                            v-if="img"
                                            :src="img"
                                            class="h-full w-full object-cover"
                                        />
                                        <div
                                            v-else
                                            class="flex h-full items-center justify-center text-gray-400"
                                        >
                                            Aucune image
                                        </div>

                                        <!-- Remove button overlay -->
                                        <button
                                            v-if="img"
                                            @click="removeImage(index)"
                                            type="button"
                                            class="absolute top-2 right-2 rounded-full bg-red-500 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-red-600"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-4 w-4"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="flex gap-2">
                                        <input
                                            type="file"
                                            @change="
                                                (e) => handleImage(e, index)
                                            "
                                            class="w-full text-sm"
                                            accept="image/*"
                                        />
                                        <button
                                            v-if="form.images.length > 1"
                                            @click="removeImageSlot(index)"
                                            type="button"
                                            class="rounded bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600"
                                        >
                                            Suppr.
                                        </button>
                                    </div>

                                    <span
                                        class="text-xs font-bold text-gray-500"
                                        >Image {{ index + 1 }}</span
                                    >
                                </div>
                            </div>
                        </div>

                        <div
                            class="flex items-center justify-end gap-4 border-t pt-6"
                        >
                            <span
                                v-if="message"
                                class="font-bold"
                                :class="
                                    message.includes('✅')
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                "
                                >{{ message }}</span
                            >
                            <button
                                @click="save"
                                :disabled="isLoading"
                                class="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 disabled:opacity-50"
                            >
                                {{
                                    isLoading
                                        ? 'Enregistrement...'
                                        : 'Sauvegarder'
                                }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
