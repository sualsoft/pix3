<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '', // Required by Laravel
    terms: false,
});

const handleRegister = () => {
    form.post('/register', {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <Head title="S'inscrire" />

    <div class="flex min-h-screen font-sans">
        <div class="relative hidden bg-black lg:flex lg:w-1/2">
            <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Team working on plans"
                class="absolute inset-0 h-full w-full object-cover opacity-60"
            />

            <div
                class="relative z-10 flex w-full flex-col justify-between p-12 text-white"
            >
                <div class="text-3xl font-extrabold tracking-tight">
                    <a href="/">PIX3i</a>
                </div>
                <div class="mb-10">
                    <h3 class="mb-4 text-2xl font-bold">
                        Rejoignez l'avenir du suivi de chantier.
                    </h3>
                    <ul class="space-y-4 text-lg text-gray-200">
                        <li class="flex items-center">
                            <i
                                class="fa-solid fa-check mr-3 text-[#50aceb]"
                            ></i>
                            Accès illimité aux timelapses
                        </li>
                        <li class="flex items-center">
                            <i
                                class="fa-solid fa-check mr-3 text-[#50aceb]"
                            ></i>
                            Rapports de drone en 4K
                        </li>
                        <li class="flex items-center">
                            <i
                                class="fa-solid fa-check mr-3 text-[#50aceb]"
                            ></i>
                            Support prioritaire 24/7
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div
            class="flex flex-1 flex-col justify-center bg-white px-4 py-12 sm:px-6 lg:w-1/2 lg:flex-none xl:px-24"
        >
            <div class="mx-auto w-full max-w-sm lg:w-96">
                <div class="mb-8 text-center lg:hidden">
                    <h1 class="text-3xl font-extrabold text-black">PIX3i</h1>
                </div>

                <div class="text-left">
                    <h2 class="text-3xl font-bold text-gray-900">
                        Créer un compte
                    </h2>
                    <p class="mt-2 text-sm text-gray-600">
                        Déjà membre ?
                        <Link
                            href="/login"
                            class="font-medium text-[#50aceb] transition-colors hover:text-sky-600"
                        >
                            Connectez-vous ici
                        </Link>
                    </p>
                </div>

                <div class="mt-8">
                    <form @submit.prevent="handleRegister" class="space-y-6">
                        <div>
                            <label
                                class="block text-sm font-medium text-gray-700"
                                >Nom complet</label
                            >
                            <div class="mt-1">
                                <input
                                    type="text"
                                    v-model="form.name"
                                    required
                                    class="w-full border border-sky-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors outline-none focus:border-sky-500"
                                    placeholder="Jean Dupont"
                                />
                            </div>
                            <div
                                v-if="form.errors.name"
                                class="mt-1 text-xs text-red-500"
                            >
                                {{ form.errors.name }}
                            </div>
                        </div>

                        <div>
                            <label
                                class="block text-sm font-medium text-gray-700"
                                >Adresse e-mail</label
                            >
                            <div class="mt-1">
                                <input
                                    type="email"
                                    v-model="form.email"
                                    required
                                    class="w-full border border-sky-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors outline-none focus:border-sky-500"
                                    placeholder="vous@entreprise.com"
                                />
                            </div>
                            <div
                                v-if="form.errors.email"
                                class="mt-1 text-xs text-red-500"
                            >
                                {{ form.errors.email }}
                            </div>
                        </div>

                        <div>
                            <label
                                class="block text-sm font-medium text-gray-700"
                                >Mot de passe</label
                            >
                            <div class="mt-1">
                                <input
                                    type="password"
                                    v-model="form.password"
                                    required
                                    class="w-full border border-sky-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors outline-none focus:border-sky-500"
                                    placeholder="Minimum 8 caractères"
                                />
                            </div>
                            <div
                                v-if="form.errors.password"
                                class="mt-1 text-xs text-red-500"
                            >
                                {{ form.errors.password }}
                            </div>
                        </div>

                        <div>
                            <label
                                class="block text-sm font-medium text-gray-700"
                                >Confirmer le mot de passe</label
                            >
                            <div class="mt-1">
                                <input
                                    type="password"
                                    v-model="form.password_confirmation"
                                    required
                                    class="w-full border border-sky-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors outline-none focus:border-sky-500"
                                    placeholder="Répétez le mot de passe"
                                />
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="flex h-5 items-center">
                                <input
                                    id="terms"
                                    v-model="form.terms"
                                    type="checkbox"
                                    required
                                    class="h-4 w-4 cursor-pointer rounded border-gray-300 text-[#50aceb] focus:ring-[#50aceb]"
                                />
                            </div>
                            <div class="ml-2 text-sm">
                                <label for="terms" class="text-gray-600">
                                    J'accepte les
                                    <a
                                        href="#"
                                        class="font-medium text-[#50aceb] hover:text-sky-600"
                                        >Conditions</a
                                    >
                                    et la
                                    <a
                                        href="#"
                                        class="font-medium text-[#50aceb] hover:text-sky-600"
                                        >Politique de confidentialité</a
                                    >.
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                :disabled="form.processing"
                                class="flex w-full justify-center rounded-sm border border-transparent bg-[#50aceb] px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-[#429ad6] focus:ring-2 focus:ring-[#50aceb] focus:ring-offset-2 focus:outline-none disabled:opacity-50"
                            >
                                {{
                                    form.processing
                                        ? 'Inscription...'
                                        : "S'inscrire"
                                }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
