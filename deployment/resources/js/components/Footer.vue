<script setup>
import { onMounted, ref } from 'vue';

const footerLinks = ref([]);

const generalInfo = ref({
    description: '',
    phone: '',
    email: '',
    address: '',
});

const fetchLayout = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();

        if (data.general) {
            generalInfo.value = data.general;
        }
        if (data.footer) footerLinks.value = data.footer;
    } catch (error) {
        console.error('Error loading footer:', error);
    }
};

onMounted(() => {
    fetchLayout();
});
</script>

<style scoped>
footer {
    font-family: 'Poppins', sans-serif;
    background-color: #f7f7f7;
    color: #fff;
    padding: 20px 0;
}
</style>
<template>
    <!-- Footer Section -->
    <footer class="py-12 text-black">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
                <div class="md:col-span-2">
                    <img
                        :src="generalInfo.logo_url"
                        alt="PIX3i Logo"
                        class="mb-4 h-12"
                    />
                    <p class="text-left text-black">
                        {{ generalInfo.description }}
                    </p>
                </div>

                <div class="md:col-span-1">
                    <h4 class="mb-4 font-semibold text-black">
                        Pages juridiques
                    </h4>
                    <ul class="space-y-2 text-gray-600">
                        <li v-for="(item, index) in footerLinks">
                            <a :href="item.link" class="hover:text-gray-700">{{
                                item.name
                            }}</a>
                        </li>
                    </ul>
                </div>

                <div class="md:col-span-1">
                    <h4 class="mb-4 font-semibold text-black">
                        Contactez-nous
                    </h4>
                    <address class="text-gray-600 not-italic">
                        <p class="mb-2">
                            Téléphone:
                            <a
                                :href="'tel:' + generalInfo.phone"
                                class="text-blue-500 underline hover:text-blue-600"
                                >{{ generalInfo.phone }}</a
                            >
                        </p>
                        <p class="mb-2">Adresse : {{ generalInfo.address }}.</p>
                        <p class="mb-2">
                            Email:
                            <a
                                :href="'mailto:' + generalInfo.email"
                                class="text-blue-500 underline hover:text-blue-600"
                                >{{ generalInfo.email }}</a
                            >
                        </p>
                    </address>
                </div>
            </div>
            <div
                class="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500"
            >
                <p class="text-[10px]">
                    &copy; 2023 - {{ new Date().getFullYear() }} PIX3i. Tous
                    droits réservés.
                </p>
                <p class="text-[10px]">
                    Conçu et développé par <a
                        href="https://sual-soft.com"
                        target="_blank"
                        class="text-blue-500 underline hover:text-blue-600"
                        >S U A L Soft</a
                    >
                </p>
            </div>
        </div>
    </footer>
</template>
