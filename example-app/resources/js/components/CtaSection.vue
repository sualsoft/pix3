<script setup>
import { onMounted, ref } from 'vue';

// 1. Initialize with default structure
const generalInfo = ref({
    cta: {
        title: '',
        btn_text: '',
        link: '',
    },
});

const fetchLayout = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();

        // 2. Load General Info (Phone, Email, etc.)
        if (data.general) {
            generalInfo.value = data.general;
        }

        // 3. THE FIX: Manually attach the CTA data
        // The controller sends it as 'home_cta', so we grab it from there.
        if (data.home_cta) {
            generalInfo.value.cta = data.home_cta;
        }
        // Fallback: If you saved it as just 'cta'
        else if (data.cta) {
            generalInfo.value.cta = data.cta;
        }
    } catch (error) {
        console.error('Error loading CTA:', error);
    }
};

onMounted(() => {
    fetchLayout();
});
</script>

<template>
    <div
        v-if="generalInfo.cta"
        class="cta flex justify-center gap-4 bg-[linear-gradient(to_bottom,#ffffff_50%,#f7f7f7_50%)] py-12"
    >
        <div
            class="w-full bg-[#0CB1F1] px-4 py-12 text-center md:w-2/3 md:px-32"
        >
            <h2 class="text-[40px] font-semibold text-white">
                {{ generalInfo.cta.title }}
            </h2>

            <p class="pt-12">
                <a
                    :href="generalInfo.cta.link"
                    class="bg-[#e6e6e6] px-12 py-4 text-black transition duration-300 hover:bg-[#fff] hover:text-[#0CB1F1]"
                >
                    {{ generalInfo.cta.btn_text }}
                </a>
            </p>
        </div>
    </div>
</template>

<style scoped>
.cta {
    font-family: 'Poppins', sans-serif;
}
</style>
