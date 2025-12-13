<script setup>
import Card from '@/components/drone/Card.vue';
import Detail from '@/components/drone/Details.vue';
import InnerHero from '@/components/drone/InnerHero.vue';
import Video from '@/components/drone/Video.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

// Default description
const DEFAULT_DESCRIPTION =
    "PIX3i est une entreprise spécialisée dans les prestations de prises de vue par Drone et le Timelapse, offrant une gamme de services adaptés aux besoins du secteur du bâtiment et de l'immobilier.";

// SEO data
const droneSeo = ref({
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
        if (data.drone_seo) {
            droneSeo.value = {
                content: data.drone_seo.content || '',
                meta_title: data.drone_seo.meta_title || '',
                meta_description:
                    data.drone_seo.meta_description ||
                    data.drone_seo.content ||
                    DEFAULT_DESCRIPTION, // Use content as fallback, then default
                keywords: data.drone_seo.keywords || '',
                og_title: data.drone_seo.og_title || '',
                og_description: data.drone_seo.og_description || '',
                og_image: data.drone_seo.og_image || '',
                og_type: data.drone_seo.og_type || 'website',
                twitter_card:
                    data.drone_seo.twitter_card || 'summary_large_image',
                twitter_title: data.drone_seo.twitter_title || '',
                twitter_description: data.drone_seo.twitter_description || '',
                twitter_image: data.drone_seo.twitter_image || '',
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
            :title="droneSeo.meta_title || 'Drone'"
            :meta-description="droneSeo.meta_description"
        >
            <!-- Additional Meta tags -->
            <meta
                v-if="droneSeo.keywords"
                name="keywords"
                :content="droneSeo.keywords"
            />

            <!-- Open Graph -->
            <meta
                v-if="droneSeo.og_title"
                property="og:title"
                :content="droneSeo.og_title"
            />
            <meta
                v-if="droneSeo.og_description"
                property="og:description"
                :content="droneSeo.og_description"
            />
            <meta
                v-if="droneSeo.og_image"
                property="og:image"
                :content="droneSeo.og_image"
            />
            <meta
                v-if="droneSeo.og_type"
                property="og:type"
                :content="droneSeo.og_type"
            />

            <!-- Twitter Card -->
            <meta
                v-if="droneSeo.twitter_card"
                name="twitter:card"
                :content="droneSeo.twitter_card"
            />
            <meta
                v-if="droneSeo.twitter_title"
                name="twitter:title"
                :content="droneSeo.twitter_title"
            />
            <meta
                v-if="droneSeo.twitter_description"
                name="twitter:description"
                :content="droneSeo.twitter_description"
            />
            <meta
                v-if="droneSeo.twitter_image"
                name="twitter:image"
                :content="droneSeo.twitter_image"
            />
        </Head>

        <!-- Hero Section -->
        <InnerHero />

        <!-- Details Section -->
        <Detail />

        <!--Service section-->
        <Card category="drone" title="Nos services Drone" />

        <!--Video Section-->
        <Video />

        <!--SEO Content Section - REMOVED as per user request-->
    </MainLayout>
</template>
