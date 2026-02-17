<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

// VERSION IDENTIFIER - Force cache busting
const VERSION = '2026-02-04-fix-1';

// Helper function to check if object is a File (more robust version)
const isFileObject = (obj) => {
    try {
        // Check if it's a File object
        if (obj instanceof File) return true;
        
        // Check constructor name for Vue Proxy objects
        if (obj && typeof obj === 'object') {
            // Handle Vue reactive objects
            if (obj.constructor && obj.constructor.name === 'File') return true;
            
            // Check for Proxy wrapping
            if (obj.__v_raw && obj.__v_raw instanceof File) return true;
        }
        
        return false;
    } catch (error) {
        console.warn('Error checking if object is File:', error);
        return false;
    }
};

// Helper function to get image source (handles both File objects and URLs)
const getImageSource = (imageData) => {
    console.log('getImageSource called with:', typeof imageData, imageData);
    
    if (isFileObject(imageData)) {
        console.log('Creating object URL for File object');
        return URL.createObjectURL(imageData);
    } else if (typeof imageData === 'string') {
        console.log('Using string URL directly:', imageData);
        return imageData;
    } else {
        console.log('Unknown image data type:', typeof imageData, imageData);
        return '';
    }
};

console.log('InnerHero component loaded - Version:', VERSION);

// 1. DATA
const form = ref({
    title: '',
    bg_image: '', // This will hold the URL or the Base64 string
});
const message = ref('');
const isLoading = ref(false);

// 2. LOAD DATA
const loadData = async () => {
    console.log('=== LOAD DATA FUNCTION STARTED ===');
    try {
        console.log('Loading contact hero data...');
        const res = await axios.get('/api/layout', {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            }
        });
        const data = res.data;
        console.log('API Response:', data);

        // Check if contact_hero exists in the response
        if (data.contact_hero) {
            console.log('Contact hero data found:', data.contact_hero);
            form.value.title = data.contact_hero.title || '';
            form.value.bg_image = data.contact_hero.bg_image || '';
            console.log('Form updated with:', form.value);
            console.log('bg_image type after update:', typeof form.value.bg_image);
            console.log('bg_image value after update:', form.value.bg_image);
            console.log('Is File object after update?', isFileObject(form.value.bg_image));
        } else {
            console.log('No contact_hero data found in response');
        }
    } catch (error) {
        console.error('Error loading settings:', error);
    }
    console.log('=== LOAD DATA FUNCTION FINISHED ===');
};

// 3. HANDLE IMAGE UPLOAD (Direct file upload)
const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    console.log('File selected:', file.name, file.size, file.type);
    
    // Store the file object directly (not base64)
    form.value.bg_image = file;
    console.log('File stored for upload:', file);
};

// 4. SAVE SETTINGS
const save = async () => {
    console.log('=== SAVE FUNCTION STARTED ===');
    console.log('Current form state:', form.value);
    console.log('bg_image type:', typeof form.value.bg_image);
    console.log('bg_image value:', form.value.bg_image);
    console.log('Is File object?', isFileObject(form.value.bg_image));
    
    isLoading.value = true;
    message.value = '';
    
    try {
        // Prepare form data for file upload
        const formData = new FormData();
        formData.append('title', form.value.title);
        
        console.log('Preparing image data for upload...');
        
        // Handle image upload
        if (isFileObject(form.value.bg_image)) {
            console.log('Appending File object to form data');
            formData.append('bg_image', form.value.bg_image);
        } else if (form.value.bg_image) {
            console.log('Appending image string to form data:', form.value.bg_image);
            formData.append('bg_image', form.value.bg_image);
        } else {
            console.log('No image data to append');
        }
        
        console.log('Sending request to server...');
        
        // Send as multipart form data for file uploads
        const response = await axios.post(
            '/api/settings/contact-hero',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
        
        console.log('Server response received:', response);
        console.log('Response data:', response.data);

        if (response.data.data) {
            console.log('Updating form with server response...');
            // Update individual fields instead of replacing entire object
            form.value.title = response.data.data.title || form.value.title;
            form.value.bg_image = response.data.data.bg_image || form.value.bg_image;
            console.log('Form after update:', form.value);
            
            // Reload data to ensure consistency
            console.log('Reloading data from server...');
            await loadData();
        }

        message.value = '✅ Header mis à jour avec succès !';
        console.log('=== SAVE FUNCTION COMPLETED SUCCESSFULLY ===');
    } catch (error) {
        console.error('=== SAVE FUNCTION ERROR ===');
        console.error('Error details:', error);
        console.error('Error response:', error.response?.data);
        message.value = '❌ Erreur lors de la sauvegarde.';
    } finally {
        isLoading.value = false;
        console.log('=== SAVE FUNCTION FINISHED ===');
    }
};

onMounted(() => {
    loadData();
});
</script>

<template>
    <DashboardLayout>
        <div
            class="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8"
        >
            <div class="mx-auto max-w-4xl">
                <div class="mb-8 text-center">
                    <h1 class="text-3xl font-bold text-gray-800 md:text-4xl">
                        En-tête de contact
                    </h1>
                    <p class="mt-2 text-gray-600">
                        Modifiez l'image de fond et le titre de la page
                        "Contact".
                    </p>
                </div>

                <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div
                        class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                    >
                        <h2 class="text-2xl font-bold">Paramètres du Hero</h2>
                        <p class="mt-1 opacity-90">
                            C'est la première section que les visiteurs voient.
                        </p>
                    </div>

                    <div class="space-y-8 p-6 md:p-8">
                        <div>
                            <label
                                class="mb-2 block text-sm font-semibold text-gray-700"
                                >Titre principal</label
                            >
                            <input
                                v-model="form.title"
                                type="text"
                                placeholder="ex: Notre Portefeuille"
                                class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 placeholder-gray-400 transition duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />
                        </div>

                        <div>
                            <label
                                class="mb-2 block text-sm font-semibold text-gray-700"
                                >Image de fond</label
                            >

                            <div
                                class="group relative mb-4 h-64 w-full overflow-hidden rounded-xl border-2 border-dashed border-gray-300 bg-gray-50"
                            >
                                <img
                                    v-if="form.bg_image"
                                    :src="getImageSource(form.bg_image)"
                                    class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div
                                    v-else
                                    class="flex h-full w-full flex-col items-center justify-center text-gray-400"
                                >
                                    <svg
                                        class="mb-2 h-12 w-12"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                    <span>Aucune image sélectionnée</span>
                                </div>

                                <div
                                    class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100"
                                >
                                    <label
                                        class="cursor-pointer rounded-lg bg-white px-6 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100"
                                    >
                                        Changer l'image
                                        <input
                                            type="file"
                                            class="hidden"
                                            accept="image/*"
                                            @change="handleImageUpload"
                                        />
                                    </label>
                                </div>
                            </div>
                            <p class="text-xs text-gray-500">
                                Recommandé : 1920x600px ou plus large.
                            </p>
                        </div>

                        <div
                            class="mt-8 flex flex-col items-center justify-end gap-4 border-t border-gray-100 pt-6 sm:flex-row"
                        >
                            <div
                                v-if="message"
                                class="font-bold"
                                :class="
                                    message.includes('✅')
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                "
                            >
                                {{ message }}
                            </div>

                            <button
                                @click="loadData"
                                class="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
                            >
                                Annuler
                            </button>

                            <button
                                @click="save"
                                :disabled="isLoading"
                                class="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-3 font-bold text-white shadow-lg transition hover:from-blue-700 hover:to-indigo-800 disabled:opacity-70"
                            >
                                <svg
                                    v-if="isLoading"
                                    class="mr-2 h-5 w-5 animate-spin"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        class="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        stroke-width="4"
                                    ></circle>
                                    <path
                                        class="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                {{
                                    isLoading ? 'Sauvegarde...' : 'Enregistrer'
                                }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
