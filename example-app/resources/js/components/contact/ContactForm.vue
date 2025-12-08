<template>
    <div class="bg-gray-50 px-4 py-12 font-sans sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div class="space-y-6 lg:col-span-1">
                    <div class="bg-white p-8 shadow-sm shadow-[#00000003]">
                        <h3 class="mb-4 text-2xl font-bold text-black">
                            Adresse
                        </h3>
                        <p class="text-sm font-bold text-black">
                            18230 SAINT DOULCHARD
                        </p>
                    </div>

                    <div class="bg-white p-8 shadow-sm shadow-[#00000003]">
                        <h3 class="mb-4 text-2xl font-bold text-black">
                            Email
                        </h3>
                        <p class="text-sm font-bold text-black">
                            agence.pix3i@gmail.com
                        </p>
                    </div>

                    <div class="bg-white p-8 shadow-sm shadow-[#00000003]">
                        <h3 class="mb-4 text-2xl font-bold text-black">
                            Téléphone
                        </h3>
                        <p class="text-sm font-bold text-black">0667132459</p>
                    </div>
                </div>

                <div
                    class="bg-white p-8 shadow-sm shadow-[#00000003] lg:col-span-2"
                >
                    <form @submit.prevent="submitForm" class="space-y-6">
                        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <input
                                    type="text"
                                    v-model="form.name"
                                    placeholder="Nom"
                                    class="w-full border border-sky-300 px-4 py-3 text-gray-600 placeholder-gray-400 transition-colors outline-none focus:border-sky-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    v-model="form.email"
                                    placeholder="E-mail"
                                    class="w-full border border-sky-300 px-4 py-3 text-gray-600 placeholder-gray-400 transition-colors outline-none focus:border-sky-500"
                                />
                            </div>
                        </div>

                        <div>
                            <input
                                type="text"
                                v-model="form.subject"
                                placeholder="Sujet"
                                class="w-full border border-sky-300 px-4 py-3 text-gray-600 placeholder-gray-400 transition-colors outline-none focus:border-sky-500"
                            />
                        </div>

                        <div>
                            <textarea
                                v-model="form.message"
                                placeholder="Un message"
                                rows="6"
                                class="w-full resize-none border border-sky-300 px-4 py-3 text-gray-600 placeholder-gray-400 transition-colors outline-none focus:border-sky-500"
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                class="bg-[#50aceb] px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-[#429ad6]"
                            >
                                Envoyer le message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div
        class="h-[450px] w-full overflow-hidden rounded-lg bg-gray-100 shadow-sm"
    >
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45086.04298603893!2d2.3144612425280484!3d47.111907478589494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fa9580793bba75%3A0x1c0dc8da8809c700!2s18230%20Saint-Doulchard%2C%20France!5e1!3m2!1sen!2slk!4v1765180281192!5m2!1sen!2slk"
            class="h-full w-full border-0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
});

const submitForm = () => {
    console.log('Form submitted:', form);
    // Add your API call logic here
};
</script>
