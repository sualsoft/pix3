<script setup>
import { onMounted, ref } from 'vue';

// 1. Initialize empty data bucket
const generalInfo = ref({
    cta: {
        title: '',
        btn_text: '',
        link: '',
    },
});

// 2. Fetch data from Laravel
const fetchLayout = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();

        if (data.general) {
            generalInfo.value = data.general;
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
