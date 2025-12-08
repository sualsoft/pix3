<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { onMounted, ref } from 'vue';

const form = ref({ title: '', images: [] });
const message = ref('');
const isLoading = ref(false);

const loadData = async () => {
    try {
        const res = await fetch('/api/layout');
        const data = await res.json();
        if (data.home_gallery) form.value = data.home_gallery;
    } catch (error) {
        console.error(error);
    }
};

// Handle Multiple Files
const handleUpload = (e) => {
    const files = e.target.files;
    if (!files) return;

    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
            // Add new image to the array
            form.value.images.push(e.target.result);
        };
        reader.readAsDataURL(files[i]);
    }
};

const removeImage = (index) => {
    if (confirm('Remove this image?')) form.value.images.splice(index, 1);
};

const save = async () => {
    isLoading.value = true;
    message.value = '';

    try {
        const res = await fetch('/api/settings/gallery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(form.value),
        });

        if (res.ok) {
            const result = await res.json();
            if (result.data) form.value = result.data;
            message.value = '✅ Gallery Saved!';
        } else {
            message.value = '❌ Error Saving.';
        }
    } catch (error) {
        message.value = '❌ Network Error';
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
            <div class="mx-auto max-w-6xl">
                <div class="mb-8 text-center">
                    <h1 class="text-3xl font-bold text-gray-800 md:text-4xl">
                        Gallery Manager
                    </h1>
                    <p class="mt-2 text-gray-600">
                        Manage the photo grid on your homepage.
                    </p>
                </div>

                <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div
                        class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                    >
                        <h2 class="text-2xl font-bold">Edit Photos</h2>
                        <p class="mt-1 opacity-90">
                            Add, remove, or rearrange your gallery images.
                        </p>
                    </div>

                    <div class="space-y-8 p-6 md:p-8">
                        <div>
                            <label
                                class="mb-2 block text-sm font-semibold text-gray-700"
                                >Gallery Title</label
                            >
                            <input
                                v-model="form.title"
                                type="text"
                                class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />
                        </div>

                        <div>
                            <label
                                class="mb-3 block flex justify-between text-sm font-semibold text-gray-700"
                            >
                                <span>Images ({{ form.images.length }})</span>
                                <span class="font-normal text-gray-400"
                                    >Click 'Upload' to add more</span
                                >
                            </label>

                            <div
                                class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5"
                            >
                                <label
                                    class="group flex aspect-square cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-blue-400 hover:bg-blue-50"
                                >
                                    <div
                                        class="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition group-hover:scale-110"
                                    >
                                        <span
                                            class="text-2xl font-bold text-blue-600"
                                            >+</span
                                        >
                                    </div>
                                    <span
                                        class="text-sm font-medium text-gray-500 group-hover:text-blue-600"
                                        >Upload</span
                                    >
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        class="hidden"
                                        @change="handleUpload"
                                    />
                                </label>

                                <div
                                    v-for="(img, index) in form.images"
                                    :key="index"
                                    class="group relative aspect-square overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm"
                                >
                                    <img
                                        :src="img"
                                        class="h-full w-full object-cover"
                                    />

                                    <div
                                        class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100"
                                    >
                                        <button
                                            @click="removeImage(index)"
                                            class="transform rounded-full bg-red-600 p-2 text-white shadow-lg transition hover:scale-110 hover:bg-red-700"
                                            title="Remove Image"
                                        >
                                            <svg
                                                class="h-5 w-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
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
                                Reset
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
                                {{ isLoading ? 'Saving...' : 'Save Gallery' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
