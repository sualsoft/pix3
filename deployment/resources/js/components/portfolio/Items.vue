<template>
    <div class="bg-white px-4 py-12 font-sans sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
            <div class="mb-12">
                <div class="flex flex-wrap justify-center gap-4">
                    <button
                        v-for="category in categories"
                        :key="category"
                        @click="toggleFilter(category)"
                        :class="[
                            'border px-6 py-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-300',
                            isActive(category)
                                ? 'border-[#50aceb] bg-[#50aceb] text-white'
                                : 'border-sky-200 bg-white text-gray-600 hover:border-[#50aceb] hover:text-[#50aceb]',
                        ]"
                    >
                        {{ category }}
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <TransitionGroup name="fade">
                    <div
                        v-for="item in filteredItems"
                        :key="item.id"
                        class="group relative h-64 w-full overflow-hidden bg-gray-100 shadow-sm"
                    >
                        <img
                            v-if="item.type === 'image'"
                            :src="item.src"
                            :alt="item.title"
                            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        <video
                            v-else-if="item.type === 'video'"
                            class="h-full w-full object-cover"
                            controls
                            muted
                        >
                            <source :src="item.src" type="video/mp4" />
                        </video>

                        <iframe
                            v-else-if="item.type === 'youtube'"
                            class="h-full w-full object-cover"
                            :src="item.src"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>

                        <div
                            v-if="item.type !== 'youtube'"
                            class="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        >
                            <span
                                class="border-2 border-white px-4 py-2 font-bold tracking-wider text-white uppercase"
                            >
                                {{ item.category }}
                            </span>
                        </div>
                    </div>
                </TransitionGroup>
            </div>

            <div
                v-if="filteredItems.length === 0"
                class="py-12 text-center text-gray-500"
            >
                Chargement... ou aucun résultat trouvé.
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

const portfolioItems = ref([]);
const activeFilters = ref([]);

// 1. Fetch Data from Laravel
const fetchPortfolio = async () => {
    try {
        const response = await fetch('/api/portfolio'); // Ensure this matches your route
        const data = await response.json();
        portfolioItems.value = data;
    } catch (error) {
        console.error('Error fetching portfolio:', error);
    }
};

onMounted(() => {
    fetchPortfolio();
});

// 2. Compute Unique Categories from the Database items
// This means you don't need to hardcode the list anymore!
const categories = computed(() => {
    const allCategories = portfolioItems.value.map((item) => item.category);
    // This trick removes duplicates:
    return [...new Set(allCategories)];
});

// 3. Filter Logic
const isActive = (category) => activeFilters.value.includes(category);

const toggleFilter = (category) => {
    if (isActive(category)) {
        activeFilters.value = activeFilters.value.filter((c) => c !== category);
    } else {
        activeFilters.value.push(category);
    }
};

const filteredItems = computed(() => {
    if (activeFilters.value.length === 0) {
        return portfolioItems.value;
    }
    return portfolioItems.value.filter((item) =>
        activeFilters.value.includes(item.category),
    );
});
</script>

<style scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

.fade-leave-active {
    position: absolute;
}
</style>
