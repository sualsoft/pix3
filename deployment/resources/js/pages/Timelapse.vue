<script setup>
import Card from '@/components/timelapse/Card.vue';
import Detail from '@/components/timelapse/Detail.vue';
import InnerHero from '@/components/timelapse/InnerHero.vue';
import Video from '@/components/timelapse/Video.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

// Default description
const DEFAULT_DESCRIPTION =
    "PIX3i est une entreprise spécialisée dans les prestations de prises de vue par Drone et le Timelapse, offrant une gamme de services adaptés aux besoins du secteur du bâtiment et de l'immobilier.";

// SEO data
const timelapseSeo = ref({
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
        if (data.timelapse_seo) {
            timelapseSeo.value = {
                content: data.timelapse_seo.content || '',
                meta_title: data.timelapse_seo.meta_title || '',
                meta_description:
                    data.timelapse_seo.meta_description ||
                    data.timelapse_seo.content ||
                    DEFAULT_DESCRIPTION, // Use content as fallback, then default
                keywords: data.timelapse_seo.keywords || '',
                og_title: data.timelapse_seo.og_title || '',
                og_description: data.timelapse_seo.og_description || '',
                og_image: data.timelapse_seo.og_image || '',
                og_type: data.timelapse_seo.og_type || 'website',
                twitter_card:
                    data.timelapse_seo.twitter_card || 'summary_large_image',
                twitter_title: data.timelapse_seo.twitter_title || '',
                twitter_description:
                    data.timelapse_seo.twitter_description || '',
                twitter_image: data.timelapse_seo.twitter_image || '',
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
            :title="timelapseSeo.meta_title || 'Timelapse'"
            :meta-description="timelapseSeo.meta_description"
        >
            <!-- Additional Meta tags -->
            <meta
                v-if="timelapseSeo.keywords"
                name="keywords"
                :content="timelapseSeo.keywords"
            />

            <!-- Open Graph -->
            <meta
                v-if="timelapseSeo.og_title"
                property="og:title"
                :content="timelapseSeo.og_title"
            />
            <meta
                v-if="timelapseSeo.og_description"
                property="og:description"
                :content="timelapseSeo.og_description"
            />
            <meta
                v-if="timelapseSeo.og_image"
                property="og:image"
                :content="timelapseSeo.og_image"
            />
            <meta
                v-if="timelapseSeo.og_type"
                property="og:type"
                :content="timelapseSeo.og_type"
            />

            <!-- Twitter Card -->
            <meta
                v-if="timelapseSeo.twitter_card"
                name="twitter:card"
                :content="timelapseSeo.twitter_card"
            />
            <meta
                v-if="timelapseSeo.twitter_title"
                name="twitter:title"
                :content="timelapseSeo.twitter_title"
            />
            <meta
                v-if="timelapseSeo.twitter_description"
                name="twitter:description"
                :content="timelapseSeo.twitter_description"
            />
            <meta
                v-if="timelapseSeo.twitter_image"
                name="twitter:image"
                :content="timelapseSeo.twitter_image"
            />
        </Head>

        <!-- Hero Section -->
        <InnerHero />

        <!-- Details Section -->
        <Detail />

        <!--Service section-->
        <Card category="timelapse" title="Nos services Timelapse" />

        <!--Video Section-->
        <Video />

        <!--SEO Content Section - REMOVED as per user request-->
    </MainLayout>
</template>
