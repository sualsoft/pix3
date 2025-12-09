<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const form = ref({
    title: '',
    description: '',
    images: ['', '', ''],
});
const message = ref('');
const isLoading = ref(false);

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
        const reader = new FileReader();
        reader.onload = (e) => (form.value.images[index] = e.target.result);
        reader.readAsDataURL(file);
    }
};

const save = async () => {
    isLoading.value = true;
    try {
        await axios.post('/api/settings/drone-detail', form.value);
        message.value = '✅ Détails Drone sauvegardés !';
    } catch (e) {
        message.value = '❌ Erreur.';
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
                            ></textarea>
                        </div>

                        <div>
                            <label class="mb-4 block font-bold text-gray-700"
                                >Images Flottantes (3 requises)</label
                            >
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
                                            Vide
                                        </div>
                                    </div>
                                    <input
                                        type="file"
                                        @change="(e) => handleImage(e, index)"
                                        class="w-full text-sm"
                                    />
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
                                class="font-bold text-green-600"
                                >{{ message }}</span
                            >
                            <button
                                @click="save"
                                :disabled="isLoading"
                                class="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white"
                            >
                                {{ isLoading ? '...' : 'Sauvegarder' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
