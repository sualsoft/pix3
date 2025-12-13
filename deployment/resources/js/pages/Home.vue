<script setup lang="ts">
import AboutUs from '@/components/home/AboutUs.vue';
import Hero from '@/components/home/Hero.vue';
import Services from '@/components/home/Services.vue';
import WhyUs from '@/components/home/Why.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

// Define any props your page might need
interface Props {
    title?: string;
}

// Default description
const DEFAULT_DESCRIPTION =
    "PIX3i est une entreprise spécialisée dans les prestations de prises de vue par Drone et le Timelapse, offrant une gamme de services adaptés aux besoins du secteur du bâtiment et de l'immobilier.";

// SEO data
const homeSeo = ref({
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

withDefaults(defineProps<Props>(), {
    title: 'Home',
});

// Fetch layout data including SEO content
const fetchLayout = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();

        // Set SEO data if available
        if (data.home_seo) {
            homeSeo.value = {
                content: data.home_seo.content || '',
                meta_title: data.home_seo.meta_title || '',
                meta_description:
                    data.home_seo.meta_description ||
                    data.home_seo.content ||
                    DEFAULT_DESCRIPTION, // Use content as fallback, then default
                keywords: data.home_seo.keywords || '',
                og_title: data.home_seo.og_title || '',
                og_description: data.home_seo.og_description || '',
                og_image: data.home_seo.og_image || '',
                og_type: data.home_seo.og_type || 'website',
                twitter_card:
                    data.home_seo.twitter_card || 'summary_large_image',
                twitter_title: data.home_seo.twitter_title || '',
                twitter_description: data.home_seo.twitter_description || '',
                twitter_image: data.home_seo.twitter_image || '',
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
            :title="homeSeo.meta_title || 'Home'"
            :meta-description="homeSeo.meta_description"
        >
            <!-- Additional Meta tags -->
            <meta
                v-if="homeSeo.keywords"
                name="keywords"
                :content="homeSeo.keywords"
            />

            <!-- Open Graph -->
            <meta
                v-if="homeSeo.og_title"
                property="og:title"
                :content="homeSeo.og_title"
            />
            <meta
                v-if="homeSeo.og_description"
                property="og:description"
                :content="homeSeo.og_description"
            />
            <meta
                v-if="homeSeo.og_image"
                property="og:image"
                :content="homeSeo.og_image"
            />
            <meta
                v-if="homeSeo.og_type"
                property="og:type"
                :content="homeSeo.og_type"
            />

            <!-- Twitter Card -->
            <meta
                v-if="homeSeo.twitter_card"
                name="twitter:card"
                :content="homeSeo.twitter_card"
            />
            <meta
                v-if="homeSeo.twitter_title"
                name="twitter:title"
                :content="homeSeo.twitter_title"
            />
            <meta
                v-if="homeSeo.twitter_description"
                name="twitter:description"
                :content="homeSeo.twitter_description"
            />
            <meta
                v-if="homeSeo.twitter_image"
                name="twitter:image"
                :content="homeSeo.twitter_image"
            />
        </Head>

        <!-- Head Section -->
        <Hero />

        <!-- Service Section -->
        <Services />

        <!--Why section-->
        <WhyUs />

        <!--About section-->
        <AboutUs />

        <!--SEO Content Section - REMOVED as per user request-->
    </MainLayout>
</template>
