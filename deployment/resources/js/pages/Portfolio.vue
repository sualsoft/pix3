<script setup>
import InnerHero from '@/components/portfolio/InnerHero.vue';
import Items from '@/components/portfolio/Items.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

// Default description
const DEFAULT_DESCRIPTION =
    "PIX3i est une entreprise spécialisée dans les prestations de prises de vue par Drone et le Timelapse, offrant une gamme de services adaptés aux besoins du secteur du bâtiment et de l'immobilier.";

// SEO data
const portfolioSeo = ref({
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
        if (data.portfolio_seo) {
            portfolioSeo.value = {
                content: data.portfolio_seo.content || '',
                meta_title: data.portfolio_seo.meta_title || '',
                meta_description:
                    data.portfolio_seo.meta_description ||
                    data.portfolio_seo.content ||
                    DEFAULT_DESCRIPTION, // Use content as fallback, then default
                keywords: data.portfolio_seo.keywords || '',
                og_title: data.portfolio_seo.og_title || '',
                og_description: data.portfolio_seo.og_description || '',
                og_image: data.portfolio_seo.og_image || '',
                og_type: data.portfolio_seo.og_type || 'website',
                twitter_card:
                    data.portfolio_seo.twitter_card || 'summary_large_image',
                twitter_title: data.portfolio_seo.twitter_title || '',
                twitter_description:
                    data.portfolio_seo.twitter_description || '',
                twitter_image: data.portfolio_seo.twitter_image || '',
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
            :title="portfolioSeo.meta_title || 'Portfolio'"
            :meta-description="portfolioSeo.meta_description"
        >
            <!-- Additional Meta tags -->
            <meta
                v-if="portfolioSeo.keywords"
                name="keywords"
                :content="portfolioSeo.keywords"
            />

            <!-- Open Graph -->
            <meta
                v-if="portfolioSeo.og_title"
                property="og:title"
                :content="portfolioSeo.og_title"
            />
            <meta
                v-if="portfolioSeo.og_description"
                property="og:description"
                :content="portfolioSeo.og_description"
            />
            <meta
                v-if="portfolioSeo.og_image"
                property="og:image"
                :content="portfolioSeo.og_image"
            />
            <meta
                v-if="portfolioSeo.og_type"
                property="og:type"
                :content="portfolioSeo.og_type"
            />

            <!-- Twitter Card -->
            <meta
                v-if="portfolioSeo.twitter_card"
                name="twitter:card"
                :content="portfolioSeo.twitter_card"
            />
            <meta
                v-if="portfolioSeo.twitter_title"
                name="twitter:title"
                :content="portfolioSeo.twitter_title"
            />
            <meta
                v-if="portfolioSeo.twitter_description"
                name="twitter:description"
                :content="portfolioSeo.twitter_description"
            />
            <meta
                v-if="portfolioSeo.twitter_image"
                name="twitter:image"
                :content="portfolioSeo.twitter_image"
            />
        </Head>

        <!--Inner Hero-->
        <InnerHero />

        <!--Portfolio Items-->
        <Items />

        <!--SEO Content Section - REMOVED as per user request-->
    </MainLayout>
</template>
