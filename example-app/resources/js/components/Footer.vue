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
                        src="/images/logo.png"
                        alt="PIX3i Logo"
                        class="mb-4 h-12"
                    />
                    <p class="text-left text-black">
                        PIX3i garantit des prestations conformes et sécurisées
                        grâce à ses télépilotes certifiés CATS, formés pour
                        intervenir en zones réglementées. Grâce à ses
                        technologies avancées, PIX3i offre une vision précise et
                        une analyse approfondie des projets, optimisant la
                        gestion des sinistres et des travaux du bâtiment.
                    </p>
                </div>

                <div class="md:col-span-1">
                    <h4 class="mb-4 font-semibold text-black">
                        Pages juridiques
                    </h4>
                    <ul class="space-y-2 text-gray-600">
                        <li>
                            <a href="#" class="hover:text-gray-700"
                                >Conditions générales</a
                            >
                        </li>
                        <li>
                            <a href="#" class="hover:text-gray-700"
                                >Politique de confidentialité</a
                            >
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
                                href="callto:0667132459"
                                class="text-blue-500 underline hover:text-blue-600"
                                >0667132459</a
                            >
                        </p>
                        <p class="mb-2">Adresse : 18230 SAINT DOULCHARD.</p>
                        <p class="mb-2">
                            Email:
                            <a
                                href="mailto:agence.pix3i@gmail.com"
                                class="text-blue-500 underline hover:text-blue-600"
                                >agence.pix3i@gmail.com</a
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
