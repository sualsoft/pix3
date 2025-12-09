<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { usePage } from '@inertiajs/vue3';
import axios from 'axios';
import { onMounted, ref } from 'vue';

// 1. PROFILE DATA
const page = usePage();
const profileForm = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

// 2. NEW ADMIN DATA
const adminForm = ref({
    name: '',
    email: '',
    password: '',
});

const message = ref('');
const errorMessage = ref('');
const isLoading = ref(false);

// Load current user data on mount
onMounted(() => {
    const user = page.props.auth.user;
    if (user) {
        profileForm.value.name = user.name;
        profileForm.value.email = user.email;
    }
});

// 3. UPDATE PROFILE
const updateProfile = async () => {
    isLoading.value = true;
    message.value = '';
    errorMessage.value = '';

    try {
        await axios.post('/api/settings/profile', profileForm.value);
        message.value = '✅ Profil mis à jour avec succès !';
        // Clear password fields
        profileForm.value.password = '';
        profileForm.value.password_confirmation = '';
    } catch (error) {
        console.error(error);
        errorMessage.value =
            '❌ Erreur : Vérifiez les champs (mot de passe min 8 caractères).';
    } finally {
        isLoading.value = false;
    }
};

// 4. CREATE ADMIN
const createAdmin = async () => {
    isLoading.value = true;
    message.value = '';
    errorMessage.value = '';

    try {
        await axios.post('/api/settings/new-admin', adminForm.value);
        message.value = '✅ Nouvel administrateur ajouté !';
        // Reset form
        adminForm.value = { name: '', email: '', password: '' };
    } catch (error) {
        console.error(error);
        errorMessage.value = '❌ Erreur : Email déjà utilisé ou invalide.';
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
    <DashboardLayout>
        <div
            class="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8"
        >
            <div class="mx-auto max-w-5xl">
                <div class="mb-8 text-center">
                    <h1 class="text-3xl font-bold text-gray-900">Paramètres</h1>
                    <p class="mt-2 text-gray-600">
                        Gérez votre profil et les accès administrateurs.
                    </p>
                </div>

                <div
                    v-if="message"
                    class="mb-6 rounded-lg bg-green-100 p-4 text-center font-bold text-green-700 shadow-sm"
                >
                    {{ message }}
                </div>
                <div
                    v-if="errorMessage"
                    class="mb-6 rounded-lg bg-red-100 p-4 text-center font-bold text-red-700 shadow-sm"
                >
                    {{ errorMessage }}
                </div>

                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div
                        class="h-fit overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl"
                    >
                        <div
                            class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white"
                        >
                            <h2
                                class="flex items-center gap-2 text-xl font-bold"
                            >
                                <i class="fa-solid fa-user-gear"></i> Mon Profil
                            </h2>
                        </div>
                        <div class="space-y-5 p-8">
                            <div>
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-700"
                                    >Nom</label
                                >
                                <input
                                    v-model="profileForm.name"
                                    type="text"
                                    class="w-full rounded-lg border p-3 text-gray-500 transition focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-700"
                                    >Email</label
                                >
                                <input
                                    v-model="profileForm.email"
                                    type="email"
                                    class="w-full rounded-lg border p-3 text-gray-500 transition focus:border-blue-500"
                                />
                            </div>

                            <hr class="my-4 border-gray-200" />
                            <p
                                class="text-xs font-bold text-gray-500 uppercase"
                            >
                                Changer le mot de passe (Optionnel)
                            </p>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-700"
                                    >Nouveau mot de passe</label
                                >
                                <input
                                    v-model="profileForm.password"
                                    type="password"
                                    placeholder="********"
                                    class="w-full rounded-lg border p-3 text-gray-500 transition focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-700"
                                    >Confirmer mot de passe</label
                                >
                                <input
                                    v-model="profileForm.password_confirmation"
                                    type="password"
                                    placeholder="********"
                                    class="w-full rounded-lg border p-3 text-gray-500 transition focus:border-blue-500"
                                />
                            </div>

                            <button
                                @click="updateProfile"
                                :disabled="isLoading"
                                class="w-full transform rounded-lg bg-blue-600 py-3 font-bold text-white shadow-md transition hover:scale-[1.02] hover:bg-blue-700"
                            >
                                {{
                                    isLoading
                                        ? 'Sauvegarde...'
                                        : 'Mettre à jour mon profil'
                                }}
                            </button>
                        </div>
                    </div>

                    <div
                        class="h-fit overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl"
                    >
                        <div
                            class="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white"
                        >
                            <h2
                                class="flex items-center gap-2 text-xl font-bold"
                            >
                                <i class="fa-solid fa-user-shield"></i> Ajouter
                                un Admin
                            </h2>
                        </div>
                        <div class="space-y-5 p-8">
                            <p
                                class="rounded border border-purple-100 bg-purple-50 p-3 text-sm text-gray-600"
                            >
                                <i class="fa-solid fa-circle-info mr-1"></i>
                                Cet utilisateur aura un
                                <strong>accès complet</strong> à ce tableau de
                                bord (CMS).
                            </p>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-700"
                                    >Nom de l'admin</label
                                >
                                <input
                                    v-model="adminForm.name"
                                    type="text"
                                    placeholder="ex: Marc Directeur"
                                    class="w-full rounded-lg border p-3 text-gray-500 transition focus:border-purple-500"
                                />
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-700"
                                    >Email de connexion</label
                                >
                                <input
                                    v-model="adminForm.email"
                                    type="email"
                                    placeholder="marc@pix3i.com"
                                    class="w-full rounded-lg border p-3 text-gray-500 transition focus:border-purple-500"
                                />
                            </div>

                            <div>
                                <label
                                    class="mb-2 block text-sm font-bold text-gray-700"
                                    >Mot de passe provisoire</label
                                >
                                <input
                                    v-model="adminForm.password"
                                    type="password"
                                    placeholder="********"
                                    class="w-full rounded-lg border p-3 text-gray-500 transition focus:border-purple-500"
                                />
                            </div>

                            <button
                                @click="createAdmin"
                                :disabled="isLoading"
                                class="w-full transform rounded-lg bg-purple-600 py-3 font-bold text-white shadow-md transition hover:scale-[1.02] hover:bg-purple-700"
                            >
                                {{
                                    isLoading
                                        ? 'Création...'
                                        : "Créer l'administrateur"
                                }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
