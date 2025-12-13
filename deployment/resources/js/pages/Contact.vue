<script setup>
import ContactForm from '@/components/contact/ContactForm.vue';
import InnerHero from '@/components/contact/InnerHero.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

// Default description
const DEFAULT_DESCRIPTION =
    "PIX3i est une entreprise spécialisée dans les prestations de prises de vue par Drone et le Timelapse, offrant une gamme de services adaptés aux besoins du secteur du bâtiment et de l'immobilier.";

// SEO data
const contactSeo = ref({
    content: '',
    meta_title: '',
    meta_description: '',
    keywords: '',
    og_title: '',
    og_description: '',
    og_image: '',
    og_type: 'website',
    twitter_card: 'summary_large_image',
    twitter_title: '',
    twitter_description: '',
    twitter_image: '',
});

// Fetch layout data including SEO content
const fetchLayout = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();

        // Set SEO data if available
        if (data.contact_seo) {
            contactSeo.value = {
                content: data.contact_seo.content || '',
                meta_title: data.contact_seo.meta_title || '',
                meta_description:
                    data.contact_seo.meta_description ||
                    data.contact_seo.content ||
                    DEFAULT_DESCRIPTION, // Use content as fallback, then default
                keywords: data.contact_seo.keywords || '',
                og_title: data.contact_seo.og_title || '',
                og_description: data.contact_seo.og_description || '',
                og_image: data.contact_seo.og_image || '',
                og_type: data.contact_seo.og_type || 'website',
                twitter_card:
                    data.contact_seo.twitter_card || 'summary_large_image',
                twitter_title: data.contact_seo.twitter_title || '',
                twitter_description: data.contact_seo.twitter_description || '',
                twitter_image: data.contact_seo.twitter_image || '',
            };
        }
    } catch (error) {
        console.error('Error loading layout:', error);
    }
};

onMounted(() => {
    fetchLayout();
});
</script>

<template>
    <MainLayout>
        <Head
            :title="contactSeo.meta_title || 'Contact'"
            :meta-description="contactSeo.meta_description"
        >
            <!-- Additional Meta tags -->
            <meta
                v-if="contactSeo.keywords"
                name="keywords"
                :content="contactSeo.keywords"
            />

            <!-- Open Graph -->
            <meta
                v-if="contactSeo.og_title"
                property="og:title"
                :content="contactSeo.og_title"
            />
            <meta
                v-if="contactSeo.og_description"
                property="og:description"
                :content="contactSeo.og_description"
            />
            <meta
                v-if="contactSeo.og_image"
                property="og:image"
                :content="contactSeo.og_image"
            />
            <meta
                v-if="contactSeo.og_type"
                property="og:type"
                :content="contactSeo.og_type"
            />

            <!-- Twitter Card -->
            <meta
                v-if="contactSeo.twitter_card"
                name="twitter:card"
                :content="contactSeo.twitter_card"
            />
            <meta
                v-if="contactSeo.twitter_title"
                name="twitter:title"
                :content="contactSeo.twitter_title"
            />
            <meta
                v-if="contactSeo.twitter_description"
                name="twitter:description"
                :content="contactSeo.twitter_description"
            />
            <meta
                v-if="contactSeo.twitter_image"
                name="twitter:image"
                :content="contactSeo.twitter_image"
            />
        </Head>

        <!--Inner Hero-->
        <InnerHero />

        <!--Contact Form (includes map)-->
        <ContactForm />

        <!--SEO Content Section - REMOVED as per user request-->
    </MainLayout>
</template>
