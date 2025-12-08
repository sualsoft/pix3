<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

const features = ref([]);
const isLoading = ref(false);
const message = ref('');

// MODAL STATE
const isModalOpen = ref(false);
const editingIndex = ref(-1);
const modalForm = ref({
    title: '',
    description: '',
    icon: 'fa-solid fa-star', // Default icon
});

// 1. Fetch Data
const fetchLayout = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();
        if (data.home_why) {
            features.value = data.home_why;
        }
    } catch (error) {
        console.error('Error loading data:', error);
    }
};

// 2. Open Modal
const openModal = (index = -1) => {
    editingIndex.value = index;
    message.value = '';

    if (index === -1) {
        // Add New
        modalForm.value = {
            title: '',
            description: '',
            icon: 'fa-solid fa-check',
        };
    } else {
        // Edit Existing
        modalForm.value = { ...features.value[index] };
    }
    isModalOpen.value = true;
};

// 3. Save Item (Local)
const saveItem = () => {
    if (editingIndex.value === -1) {
        features.value.push({ ...modalForm.value });
    } else {
        features.value[editingIndex.value] = { ...modalForm.value };
    }
    isModalOpen.value = false;
};

// 4. Delete Item
const deleteItem = (index) => {
    if (confirm('Delete this feature?')) {
        features.value.splice(index, 1);
    }
};

// 5. Save to DB
const saveAllSettings = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const response = await fetch('/api/settings/why', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(features.value),
        });

        if (response.ok) {
            message.value = '✅ Saved Successfully!';
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
        <Head title="Features Manager" />

        <div
            class="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8"
        >
            <div class="mx-auto max-w-7xl">
                <div class="mb-8 text-center">
                    <h1 class="text-3xl font-bold text-gray-800">
                        Pourquoi PIX3i Manager
                    </h1>
                    <p class="mt-2 text-gray-600">
                        Gérer les fiches de fonctionnalités (icônes et texte).
                    </p>
                </div>

                <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div
                        class="flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                    >
                        <h2 class="text-2xl font-bold">Features List</h2>
                        <button
                            @click="openModal(-1)"
                            class="rounded-lg bg-white px-4 py-2 font-bold text-blue-600 shadow transition hover:bg-gray-100"
                        >
                            + Ajouter une fonctionnalité
                        </button>
                    </div>

                    <div class="p-6 md:p-8">
                        <div
                            v-if="features.length > 0"
                            class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                        >
                            <div
                                v-for="(item, index) in features"
                                :key="index"
                                class="group relative rounded-xl border bg-gray-50 p-6 text-center shadow-sm transition hover:shadow-md"
                            >
                                <div
                                    class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600"
                                >
                                    <i :class="item.icon" class="text-xl"></i>
                                </div>

                                <h3
                                    class="mb-2 text-lg font-bold text-gray-800"
                                >
                                    {{ item.title }}
                                </h3>
                                <p class="line-clamp-3 text-sm text-gray-600">
                                    {{ item.description }}
                                </p>

                                <div class="mt-4 flex justify-center gap-2">
                                    <button
                                        @click="openModal(index)"
                                        class="rounded bg-blue-100 px-3 py-1 text-sm text-blue-700 hover:bg-blue-200"
                                    >
                                        Modifier
                                    </button>
                                    <button
                                        @click="deleteItem(index)"
                                        class="rounded bg-red-100 px-3 py-1 text-sm text-red-700 hover:bg-red-200"
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div v-else class="py-12 text-center text-gray-500">
                            Aucune fonctionnalité trouvée.
                        </div>

                        <div
                            class="mt-8 flex items-center justify-end gap-4 border-t pt-6"
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
                                @click="saveAllSettings"
                                :disabled="isLoading"
                                class="rounded-lg bg-blue-600 px-8 py-3 font-bold text-white shadow hover:bg-blue-700 disabled:opacity-50"
                            >
                                {{
                                    isLoading ? 'Saving...' : 'Save All Changes'
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
                class="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
                <div
                    class="flex items-center justify-between border-b bg-gray-100 px-6 py-4 text-gray-600"
                >
                    <h3 class="text-lg font-bold">
                        {{
                            editingIndex === -1
                                ? 'Ajouter une fonctionnalité'
                                : 'Modifier une fonctionnalité'
                        }}
                    </h3>
                    <button
                        @click="isModalOpen = false"
                        class="text-2xl text-gray-500"
                    >
                        &times;
                    </button>
                </div>

                <div class="space-y-4 p-6">
                    <div>
                        <label
                            class="mb-1 block text-sm font-bold text-gray-700"
                            >Titre</label
                        >
                        <input
                            v-model="modalForm.title"
                            type="text"
                            class="w-full rounded-lg border px-3 py-2 text-gray-600 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            class="mb-1 block text-sm font-bold text-gray-700"
                        >
                            Classe d'icône (<a
                                href="https://fontawesome.com/search?o=r&m=free"
                                target="_blank"
                                class="text-blue-500 underline"
                                >FontAwesome</a
                            >)
                        </label>
                        <div class="flex gap-2">
                            <input
                                v-model="modalForm.icon"
                                type="text"
                                class="w-full rounded-lg border px-3 py-2 text-gray-600 focus:ring-2 focus:ring-blue-500"
                                placeholder="fa-solid fa-star"
                            />
                            <div
                                class="flex h-10 w-10 items-center justify-center rounded border bg-gray-100 text-gray-600"
                            >
                                <i :class="modalForm.icon"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            class="mb-1 block text-sm font-bold text-gray-700"
                            >Description</label
                        >
                        <textarea
                            v-model="modalForm.description"
                            rows="3"
                            class="w-full rounded-lg border px-3 py-2 text-gray-600 focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                </div>

                <div
                    class="flex justify-end gap-3 border-t bg-gray-50 px-6 py-4"
                >
                    <button
                        @click="isModalOpen = false"
                        class="rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-200"
                    >
                        Annuler
                    </button>
                    <button
                        @click="saveItem"
                        class="rounded-lg bg-blue-600 px-6 py-2 font-bold text-white hover:bg-blue-700"
                    >
                        Fait
                    </button>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
