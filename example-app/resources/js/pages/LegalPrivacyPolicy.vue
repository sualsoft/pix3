<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { Head } from '@inertiajs/vue3';

// --- STATIC DATA ---
const page = {
    title: 'Mentions Légales et politique de confidentialité',
    slug: 'mentions-legales',
    thumbnail: '/images/hero-bg-1765171683.png',
    // Content HTML
    content: `
        <h3 class="text-xl font-bold mb-4 mt-6 text-[#0D99FF]">Conformément à la législation en vigueur</h3>

        <h4 class="text-lg font-bold mb-2 text-gray-800">Éditeur du site</h4>
        <p class="mb-6">
            <strong>Nom de l’entreprise :</strong> EURL RDINIO<br>
            <strong>Nom commercial :</strong> Pix3i<br>
            <strong>Adresse du siège :</strong> 950B routes des racines 18230 SAINT DOULCHARD<br>
            <strong>Numéro SIRET :</strong> 942409350<br>
            <strong>RCS :</strong> 18000 BOURGES<br>
            <strong>Forme juridique :</strong> EURL<br>
            <strong>Capital social :</strong> 1000€<br>
            <strong>Responsable de la publication :</strong> Mr RENARD François<br>
            <strong>Adresse e-mail :</strong> <a href="mailto:agence.pix3i@pix3i.com" class="text-blue-600 hover:underline">agence.pix3i@pix3i.com</a><br>
            <strong>Téléphone :</strong> 0667132459
        </p>

        <h4 class="text-lg font-bold mb-2 text-gray-800">Hébergement du site</h4>
        <p class="mb-6">
            <strong>Nom de l’hébergeur :</strong> OVH<br>
            <strong>Adresse :</strong> Siège social : 2 rue Kellermann - 59100 Roubaix - France<br>
            <strong>Téléphone :</strong> 1007<br>
            <strong>Site web :</strong> <a href="https://www.ovh.com" target="_blank" class="text-blue-600 hover:underline">www.ovh.com</a>
        </p>

        <h4 class="text-lg font-bold mb-2 text-gray-800">Propriété intellectuelle</h4>
        <p class="mb-6">
            L’ensemble du contenu du site (textes, images, graphismes, logo, vidéos, etc.) est protégé par le droit d’auteur.<br>
            Toute reproduction, diffusion ou utilisation, même partielle, sans l'autorisation écrite de la société EURL RDINIO est strictement interdite.
        </p>

        <h3 class="text-xl font-bold mb-4 mt-8 text-[#0D99FF]">Politique de confidentialité</h3>

        <p class="mb-4">
            <strong>Collecte des données :</strong><br>
            Nous collectons uniquement les données nécessaires au traitement de vos demandes via notre formulaire de contact, newsletter ou devis : nom, prénom, entreprise, téléphone, adresse e-mail, et contenu du message.
        </p>

        <p class="mb-4">
            <strong>Utilisation des données :</strong><br>
            Vos données ne sont utilisées que dans le cadre de la relation commerciale et ne sont jamais transmises à des tiers sans votre consentement.
        </p>

        <p class="mb-4">
            <strong>Durée de conservation :</strong><br>
            Les données sont conservées pendant 3 ans à compter du dernier contact, sauf obligation légale contraire.
        </p>

        <p class="mb-4">
            <strong>Vos droits :</strong><br>
            Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, de suppression, de limitation et d’opposition.<br>
            Vous pouvez exercer ces droits par e-mail à <a href="mailto:agence.pix3i@pix3i.com" class="text-blue-600 hover:underline">agence.pix3i@pix3i.com</a>.
        </p>

        <p class="mb-6">
            <strong>Sécurité des données :</strong><br>
            Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour garantir un niveau de sécurité adapté.
        </p>

        <h4 class="text-lg font-bold mb-2 text-gray-800">Utilisation des cookies</h4>
        <p class="mb-6">
            Le site utilise des cookies pour améliorer votre expérience de navigation, mesurer l’audience et proposer des contenus adaptés.
            Vous pouvez configurer vos préférences ou refuser les cookies via les paramètres de votre navigateur.
        </p>

        <h4 class="text-lg font-bold mb-2 text-gray-800">Droit applicable</h4>
        <p class="mb-6">
            Le présent site est soumis au droit français.<br>
            En cas de litige, les tribunaux compétents du ressort de BOURGES(18) seront seuls compétents.
        </p>
    `,
};
</script>

<template>
    <MainLayout>
        <Head :title="page.title" />

        <div>
            <section>
                <div
                    class="hero-section"
                    :style="{
                        backgroundImage: `url(${page.thumbnail || '/images/hero-bg-1765171683.png'})`,
                    }"
                >
                    <div class="hero-overlay"></div>
                    <div class="hero-content">
                        <h2 class="hero-title">{{ page.title }}</h2>
                    </div>
                </div>
            </section>

            <section class="mt-12 bg-white font-sans">
                <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div
                        class="mx-auto max-w-5xl space-y-6 border-b-[4px] border-[#0D99FF] bg-gray-50 px-12 py-6 text-justify text-sm leading-relaxed text-gray-700 md:text-base"
                    >
                        <div
                            v-html="page.content"
                            class="prose max-w-none"
                        ></div>
                    </div>
                </div>
            </section>
        </div>
    </MainLayout>
</template>

<style scoped>
.hero-section {
    position: relative;
    width: 100%;
    height: 300px; /* Reduced slightly for text pages */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}
.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
        0,
        0,
        0,
        0.7
    ); /* Slightly darker for better text readability */
    z-index: 1;
}
.hero-content {
    position: relative;
    z-index: 2;
    padding: 0 20px;
    max-width: 800px;
}
.hero-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
    font-family: sans-serif;
}
@media (max-width: 768px) {
    .hero-section {
        height: 250px;
    }
    .hero-title {
        font-size: 1.75rem;
    }
}
/* Typography Overrides */
:deep(.prose h3) {
    margin-top: 2rem;
    margin-bottom: 1rem;
    line-height: 1.3;
}
:deep(.prose h4) {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
}
:deep(.prose p) {
    margin-bottom: 1rem;
}
:deep(.prose strong) {
    color: #1f2937; /* Gray-800 */
    font-weight: 700;
}
:deep(.prose a) {
    word-break: break-all;
}
</style>
