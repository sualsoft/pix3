<script setup>
import { Head, useForm } from '@inertiajs/vue3';

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const handleLogin = () => {
    // FIX: Use string '/login', NOT route('login')
    form.post('/login', {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Se connecter" />

    <div class="flex min-h-screen font-sans">
        <div class="relative hidden bg-black lg:flex lg:w-1/2">
            <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Timelapse Architecture"
                class="absolute inset-0 h-full w-full object-cover opacity-60"
            />
            <div
                class="relative z-10 flex w-full flex-col justify-between p-12 text-white"
            >
                <div class="text-3xl font-extrabold tracking-tight">
                    <a href="/">PIX3i</a>
                </div>
                <div class="mb-10">
                    <blockquote class="text-xl leading-relaxed font-medium">
                        "Grâce à PIX3i, nous avons pu suivre l'évolution de
                        notre chantier en temps réel."
                    </blockquote>
                    <div class="mt-4 flex items-center">
                        <div class="font-bold text-[#50aceb]">Jean DuPont</div>
                    </div>
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
                    <h2 class="text-3xl font-bold text-gray-900">Bon retour</h2>
                </div>

                <div class="mt-8">
                    <form @submit.prevent="handleLogin" class="space-y-6">
                        <div>
                            <label
                                for="email"
                                class="block text-sm font-medium text-gray-700"
                                >Email</label
                            >
                            <div class="mt-1">
                                <input
                                    id="email"
                                    type="email"
                                    v-model="form.email"
                                    required
                                    class="w-full border border-sky-300 px-4 py-3 text-gray-500 outline-none focus:border-sky-500"
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
                                for="password"
                                class="block text-sm font-medium text-gray-700"
                                >Mot de passe</label
                            >
                            <div class="mt-1">
                                <input
                                    id="password"
                                    type="password"
                                    v-model="form.password"
                                    required
                                    class="w-full border border-sky-300 px-4 py-3 text-gray-500 outline-none focus:border-sky-500"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                :disabled="form.processing"
                                class="flex w-full justify-center bg-[#50aceb] px-4 py-3 text-sm font-medium text-white hover:bg-[#429ad6] disabled:opacity-50"
                            >
                                {{
                                    form.processing
                                        ? 'Connexion...'
                                        : 'Se connecter'
                                }}
                            </button>
                        </div>
                    </form>

                    <div class="mt-6 text-center">
                        <a
                            href="/register"
                            class="font-medium text-[#50aceb] hover:text-sky-600"
                            >Créer un compte</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
