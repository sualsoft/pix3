<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

// 1. DATA
const items = ref([]);
const message = ref('');
const isLoading = ref(false);
const isEditing = ref(false); // Are we editing?
const editingId = ref(null); // Which ID are we editing?

// 2. FORM
const form = ref({
    title: '',
    category: 'timelapse',
    icon: 'fa-solid fa-camera', // Default icon
    video_url: '',
    content: '',
    thumbnail: null,
    thumbnail_preview: null, // For showing existing image while editing
});

// 3. LOAD LIST
const loadData = async () => {
    try {
        const res = await axios.get('/api/service-pages');
        items.value = res.data;
    } catch (error) {
        console.error(error);
    }
};

// 4. HANDLE FILE
const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        form.value.thumbnail = file;
        // Create local preview
        const reader = new FileReader();
        reader.onload = (e) => (form.value.thumbnail_preview = e.target.result);
        reader.readAsDataURL(file);
    }
};

// 5. EDIT MODE: Load item into form
const editItem = (item) => {
    isEditing.value = true;
    editingId.value = item.id;

    // Fill form
    form.value.title = item.title;
    form.value.category = item.category;
    form.value.icon = item.icon || 'fa-solid fa-camera';
    form.value.video_url = item.video_url;
    form.value.content = item.content;
    form.value.thumbnail_preview = item.thumbnail; // Show current image
    form.value.thumbnail = null; // Reset file input

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const cancelEdit = () => {
    isEditing.value = false;
    editingId.value = null;
    resetForm();
};

const resetForm = () => {
    form.value = {
        title: '',
        category: 'timelapse',
        icon: 'fa-solid fa-camera',
        video_url: '',
        content: '',
        thumbnail: null,
        thumbnail_preview: null,
    };
};

// 6. SAVE FUNCTION (Create OR Update)
const save = async () => {
    isLoading.value = true;
    message.value = '';

    const formData = new FormData();
    formData.append('title', form.value.title);
    formData.append('category', form.value.category);
    formData.append('icon', form.value.icon);
    formData.append('content', form.value.content);
    if (form.value.video_url)
        formData.append('video_url', form.value.video_url);
    if (form.value.thumbnail)
        formData.append('thumbnail', form.value.thumbnail);

    try {
        if (isEditing.value) {
            // UPDATE EXISTING
            await axios.post(
                `/api/service-pages/${editingId.value}`,
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                },
            );
            message.value = '✅ Page mise à jour !';
        } else {
            // CREATE NEW
            await axios.post('/api/service-pages', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            message.value = '✅ Page créée !';
        }

        cancelEdit(); // Reset mode
        loadData(); // Reload list
    } catch (error) {
        message.value = '❌ Erreur de sauvegarde.';
        console.error(error);
    } finally {
        isLoading.value = false;
    }
};

const deleteItem = async (id) => {
    if (!confirm('Supprimer cette page ?')) return;
    try {
        await axios.delete(`/api/service-pages/${id}`);
        loadData();
    } catch (error) {
        alert('Erreur');
    }
};

onMounted(() => loadData());
</script>

<template>
    <DashboardLayout>
        <div
            class="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8"
        >
            <div class="mx-auto max-w-6xl">
                <div class="mb-8 text-center">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Gestionnaire de Pages
                    </h1>
                    <p class="mt-2 text-gray-700">
                        Gérez vos services Drone et Timelapse.
                    </p>
                </div>

                <div
                    class="mb-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
                >
                    <div
                        class="flex items-center justify-between bg-gradient-to-r from-blue-700 to-indigo-800 p-6 text-white"
                    >
                        <h2 class="text-2xl font-bold">
                            {{
                                isEditing ? 'Modifier la Page' : 'Nouvelle Page'
                            }}
                        </h2>
                        <button
                            v-if="isEditing"
                            @click="cancelEdit"
                            class="rounded bg-white/20 px-3 py-1 text-sm hover:bg-white/30"
                        >
                            Annuler l'édition
                        </button>
                    </div>

                    <div class="space-y-6 p-6 md:p-8">
                        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-800"
                                    >Titre de la page</label
                                >
                                <input
                                    v-model="form.title"
                                    type="text"
                                    placeholder="ex: Suivi de Chantier"
                                    class="w-full rounded-lg border-2 border-gray-300 p-3 font-medium text-gray-900 focus:border-blue-600"
                                />
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-800"
                                    >Catégorie</label
                                >
                                <select
                                    v-model="form.category"
                                    class="w-full rounded-lg border-2 border-gray-300 bg-white p-3 font-medium text-gray-900 focus:border-blue-600"
                                >
                                    <option value="timelapse">Timelapse</option>
                                    <option value="drone">Drone</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-800"
                                    >Icône (FontAwesome)</label
                                >
                                <div class="flex gap-2">
                                    <div
                                        class="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-300 bg-gray-100 text-xl text-blue-600"
                                    >
                                        <i :class="form.icon"></i>
                                    </div>
                                    <input
                                        v-model="form.icon"
                                        type="text"
                                        placeholder="ex: fa-solid fa-camera"
                                        class="w-full rounded-lg border-2 border-gray-300 p-3 font-medium text-gray-900 focus:border-blue-600"
                                    />
                                </div>
                                <p class="mt-1 text-xs text-gray-600">
                                    Trouvez des icônes sur
                                    <a
                                        href="https://fontawesome.com/search"
                                        target="_blank"
                                        class="text-blue-600 underline"
                                        >FontAwesome</a
                                    >
                                </p>
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-800"
                                    >Lien YouTube (Optionnel)</label
                                >
                                <input
                                    v-model="form.video_url"
                                    type="text"
                                    placeholder="https://youtube.com/..."
                                    class="w-full rounded-lg border-2 border-gray-300 p-3 font-medium text-gray-900 focus:border-blue-600"
                                />
                            </div>

                            <div class="md:col-span-2">
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-800"
                                    >Image de couverture</label
                                >
                                <div class="flex items-center gap-4">
                                    <div
                                        v-if="form.thumbnail_preview"
                                        class="h-20 w-32 overflow-hidden rounded-lg border border-gray-300 bg-gray-100"
                                    >
                                        <img
                                            :src="form.thumbnail_preview"
                                            class="h-full w-full object-cover"
                                        />
                                    </div>
                                    <input
                                        type="file"
                                        @change="handleFileChange"
                                        class="w-full rounded-lg border-2 border-gray-300 p-3 text-gray-900"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label
                                class="mb-2 block text-sm font-bold text-gray-800"
                                >Contenu de la page</label
                            >
                            <textarea
                                v-model="form.content"
                                rows="8"
                                class="w-full rounded-lg border-2 border-gray-300 p-3 text-sm font-medium text-gray-900 focus:border-blue-600"
                                placeholder="Écrivez votre texte ici..."
                            ></textarea>
                        </div>

                        <div
                            class="flex items-center justify-end gap-4 border-t border-gray-200 pt-6"
                        >
                            <span
                                v-if="message"
                                class="text-lg font-bold"
                                :class="
                                    message.includes('✅')
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                "
                                >{{ message }}</span
                            >

                            <button
                                v-if="isEditing"
                                @click="cancelEdit"
                                class="px-4 py-3 font-bold text-gray-600 hover:text-gray-800"
                            >
                                Annuler
                            </button>

                            <button
                                @click="save"
                                :disabled="isLoading"
                                class="transform rounded-lg bg-blue-600 px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-blue-700"
                            >
                                {{
                                    isLoading
                                        ? 'Sauvegarde...'
                                        : isEditing
                                          ? 'Mettre à jour'
                                          : 'Créer la page'
                                }}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="mb-6 text-2xl font-bold text-gray-900">
                        Pages Existantes ({{ items.length }})
                    </h3>

                    <div
                        class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                    >
                        <div
                            v-for="item in items"
                            :key="item.id"
                            class="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                        >
                            <div
                                class="relative h-40 overflow-hidden bg-gray-100"
                            >
                                <img
                                    :src="
                                        item.thumbnail ||
                                        '/images/default-placeholder.png'
                                    "
                                    class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />
                                <div
                                    class="absolute top-2 right-2 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase shadow-sm backdrop-blur"
                                    :class="
                                        item.category === 'drone'
                                            ? 'text-purple-700'
                                            : 'text-blue-700'
                                    "
                                >
                                    {{ item.category }}
                                </div>
                            </div>

                            <div class="p-5">
                                <div class="mb-3 flex items-center gap-3">
                                    <div
                                        class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600"
                                    >
                                        <i
                                            :class="
                                                item.icon ||
                                                'fa-solid fa-camera'
                                            "
                                        ></i>
                                    </div>
                                    <h4
                                        class="text-lg leading-tight font-bold text-gray-900"
                                    >
                                        {{ item.title }}
                                    </h4>
                                </div>
                                <p class="mb-4 text-xs text-gray-500">
                                    /{{ item.category }}/{{ item.slug }}
                                </p>

                                <div class="flex gap-2 border-t pt-4">
                                    <button
                                        @click="editItem(item)"
                                        class="flex-1 rounded bg-gray-100 py-2 font-bold text-gray-700 transition hover:bg-gray-200"
                                    >
                                        <i
                                            class="fa-solid fa-pen-to-square mr-1"
                                        ></i>
                                        Modifier
                                    </button>
                                    <button
                                        @click="deleteItem(item.id)"
                                        class="rounded bg-red-50 px-4 py-2 font-bold text-red-600 transition hover:bg-red-100"
                                    >
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        v-if="items.length === 0"
                        class="rounded-xl border border-dashed border-gray-300 bg-white py-12 text-center text-gray-500"
                    >
                        Aucune page trouvée. Créez-en une au-dessus !
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
