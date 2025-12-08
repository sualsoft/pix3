<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { onMounted, ref } from 'vue';

const services = ref([]);
const isLoading = ref(false);
const message = ref('');

// MODAL STATE
const isModalOpen = ref(false);
const editingIndex = ref(-1);
const imageInputType = ref('upload'); // 'upload' or 'url'

const modalForm = ref({
    title: '',
    description: '',
    link: '',
    image: '',
    span: 'lg:col-span-1',
});

// 1. Fetch Data
const fetchLayout = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();
        if (data.home_services) {
            services.value = data.home_services;
        }
    } catch (error) {
        console.error('Error loading data:', error);
    }
};

// 2. Open Modal
const openModal = (index = -1) => {
    editingIndex.value = index;
    message.value = ''; // Clear messages

    if (index === -1) {
        // ADD NEW
        modalForm.value = {
            title: '',
            description: '',
            link: '/drone',
            image: '',
            span: 'lg:col-span-1',
        };
        imageInputType.value = 'upload';
    } else {
        // EDIT EXISTING
        modalForm.value = { ...services.value[index] };
        // Detect if current image is a URL or a File path to set the tab correctly
        if (modalForm.value.image.startsWith('http')) {
            imageInputType.value = 'url';
        } else {
            imageInputType.value = 'upload';
        }
    }
    isModalOpen.value = true;
};

// 3. Handle File Upload
const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            modalForm.value.image = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

// 4. Save Item (To Local List)
const saveItem = () => {
    if (editingIndex.value === -1) {
        services.value.push({ ...modalForm.value });
    } else {
        services.value[editingIndex.value] = { ...modalForm.value };
    }
    isModalOpen.value = false;
};

// 5. Delete Item
const deleteItem = (index) => {
    if (confirm('Are you sure you want to delete this service?')) {
        services.value.splice(index, 1);
    }
};

// 6. Save ALL to Database
const saveAllSettings = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const response = await fetch('/api/settings/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(services.value),
        });

        if (response.ok) {
            const result = await response.json();
            services.value = result.data; // Update with clean URLs from server
            message.value = '✅ All Services Saved!';
        } else {
            message.value = '❌ Error Saving.';
        }
    } catch (error) {
        console.error(error);
        message.value = '❌ Network Error';
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    fetchLayout();
});
</script>

<template>
    <DashboardLayout>
        <div
            class="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8"
        >
            <div class="mx-auto max-w-7xl">
                <div class="mb-8 text-center">
                    <h1 class="text-3xl font-bold text-gray-800 md:text-4xl">
                        Gestion des Services
                    </h1>
                    <p class="mt-2 text-gray-600">
                        Gestion des cartes dans votre section Services
                    </p>
                </div>

                <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div
                        class="flex flex-col items-center justify-between gap-4 bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white sm:flex-row"
                    >
                        <div>
                            <h2 class="text-2xl font-bold">
                                Liste des Services
                            </h2>
                            <p class="mt-1 opacity-90">
                                Services actifs actuels
                            </p>
                        </div>
                        <button
                            @click="openModal(-1)"
                            class="flex items-center gap-2 rounded-lg bg-white px-6 py-2 font-bold text-blue-600 shadow transition hover:bg-gray-100"
                        >
                            <span class="text-xl">+</span> Ajouter un service
                        </button>
                    </div>

                    <div class="p-6 md:p-8">
                        <div
                            v-if="services.length > 0"
                            class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                        >
                            <div
                                v-for="(service, index) in services"
                                :key="index"
                                class="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                            >
                                <div
                                    class="relative mb-4 h-40 w-full overflow-hidden rounded-lg border bg-gray-100"
                                >
                                    <img
                                        :src="service.image"
                                        class="h-full w-full object-cover"
                                        alt="Service Image"
                                    />
                                    <span
                                        class="absolute top-2 right-2 rounded bg-black/60 px-2 py-1 text-[10px] text-white"
                                    >
                                        {{
                                            service.span === 'lg:col-span-1'
                                                ? 'Standard'
                                                : 'Wide'
                                        }}
                                    </span>
                                </div>

                                <div class="flex-grow">
                                    <h3
                                        class="mb-2 text-lg font-bold text-gray-900"
                                    >
                                        {{ service.title }}
                                    </h3>
                                    <p
                                        class="line-clamp-3 text-sm leading-relaxed text-gray-600"
                                    >
                                        {{ service.description }}
                                    </p>
                                </div>

                                <div
                                    class="mt-5 flex gap-3 border-t border-gray-100 pt-4"
                                >
                                    <button
                                        @click="openModal(index)"
                                        class="flex-1 rounded-lg bg-blue-50 py-2 font-semibold text-blue-600 transition hover:bg-blue-100"
                                    >
                                        Editer
                                    </button>
                                    <button
                                        @click="deleteItem(index)"
                                        class="flex-1 rounded-lg bg-red-50 py-2 font-semibold text-red-600 transition hover:bg-red-100"
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div
                            v-else
                            class="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 py-16 text-center text-gray-500"
                        >
                            <p class="text-lg">Aucun service trouvé.</p>
                            <p class="text-sm">
                                Cliquez sur « Ajouter un service » pour en créer
                                un.
                            </p>
                        </div>

                        <div
                            class="mt-8 flex flex-col items-center justify-end gap-4 border-t pt-6 sm:flex-row"
                        >
                            <span
                                v-if="message"
                                class="rounded-lg px-4 py-2 font-bold"
                                :class="
                                    message.includes('✅')
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                "
                            >
                                {{ message }}
                            </span>

                            <button
                                @click="saveAllSettings"
                                :disabled="isLoading"
                                class="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-3 font-bold text-white shadow-lg transition hover:opacity-90 disabled:opacity-50 sm:w-auto"
                            >
                                {{
                                    isLoading
                                        ? 'Économie...'
                                        : 'Enregistrer Toutes Les Modifications'
                                }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            v-if="isModalOpen"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        >
            <div
                class="flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
                <div
                    class="flex items-center justify-between border-b bg-gray-100 px-6 py-4"
                >
                    <h3 class="text-xl font-bold text-gray-800">
                        {{
                            editingIndex === -1
                                ? 'Ajouter un nouveau service'
                                : 'Editer le service'
                        }}
                    </h3>
                    <button
                        @click="isModalOpen = false"
                        class="text-2xl text-gray-500 transition hover:text-gray-800"
                    >
                        &times;
                    </button>
                </div>

                <div class="space-y-5 overflow-y-auto p-6">
                    <div>
                        <label
                            class="mb-1 block text-sm font-bold text-gray-700"
                            >Titre du service</label
                        >
                        <input
                            v-model="modalForm.title"
                            type="text"
                            class="w-full rounded-lg border border-gray-300 px-4 py-2 text-black outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label
                            class="mb-2 block text-sm font-bold text-gray-700"
                            >Image du service</label
                        >

                        <div class="mb-3 flex border-b border-gray-200">
                            <button
                                @click="imageInputType = 'upload'"
                                class="px-4 py-2 text-sm font-medium transition"
                                :class="
                                    imageInputType === 'upload'
                                        ? 'border-b-2 border-blue-600 text-blue-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                "
                            >
                                Télécharger le fichier
                            </button>
                            <button
                                @click="imageInputType = 'url'"
                                class="px-4 py-2 text-sm font-medium transition"
                                :class="
                                    imageInputType === 'url'
                                        ? 'border-b-2 border-blue-600 text-blue-600'
                                        : 'text-black hover:text-gray-700'
                                "
                            >
                                URL de l'image
                            </button>
                        </div>

                        <div
                            v-if="imageInputType === 'upload'"
                            class="flex items-center gap-4"
                        >
                            <input
                                type="file"
                                @change="handleImageUpload"
                                accept="image/*"
                                class="text-sm text-black file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                            />
                        </div>
                        <div v-else>
                            <input
                                v-model="modalForm.image"
                                type="text"
                                placeholder="https://example.com/image.jpg"
                                class="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-black outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div
                            v-if="modalForm.image"
                            class="mt-3 h-32 w-full overflow-hidden rounded-lg border bg-gray-100"
                        >
                            <img
                                :src="modalForm.image"
                                class="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            class="mb-1 block text-sm font-bold text-gray-700"
                            >Taille de la carte</label
                        >
                        <select
                            v-model="modalForm.span"
                            class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-black outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="lg:col-span-1">
                                Standard (1 Column)
                            </option>
                            <option value="md:col-span-2">
                                Large (2 Columns)
                            </option>
                        </select>
                    </div>

                    <div>
                        <label
                            class="mb-1 block text-sm font-bold text-gray-700"
                            >Description</label
                        >
                        <textarea
                            v-model="modalForm.description"
                            rows="4"
                            class="w-full rounded-lg border border-gray-300 px-4 py-2 text-black outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <div>
                        <label
                            class="mb-1 block text-sm font-bold text-gray-700"
                            >Lien du bouton</label
                        >
                        <input
                            v-model="modalForm.link"
                            type="text"
                            placeholder="/drone"
                            class="w-full rounded-lg border border-gray-300 px-4 py-2 text-black outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div
                    class="flex justify-end gap-3 border-t bg-gray-50 px-6 py-4"
                >
                    <button
                        @click="isModalOpen = false"
                        class="rounded-lg px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-200"
                    >
                        Annuler
                    </button>
                    <button
                        @click="saveItem"
                        class="rounded-lg bg-blue-600 px-5 py-2 font-bold text-white transition hover:bg-blue-700"
                    >
                        Enregistrer le service
                    </button>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
