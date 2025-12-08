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
                            Your browser does not support the video tag.
                        </video>

                        <div
                            class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
                Aucun résultat trouvé pour ces filtres.
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

// 1. Categories (Matching your screenshot)
const categories = [
    'Timelapse',
    'Drone',
    'Timelapse Suivi de Chantier',
    'Timelapse Événementiel',
    'Timelapse Touristique',
];

// 2. State for Active Filters
const activeFilters = ref([]);

// 3. Dummy Data (Replace src with your real images)
// I used unsplash images as placeholders for construction/drone shots
const portfolioItems = [
    {
        id: 1,
        type: 'image',
        category: 'Drone',
        src: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Aerial View',
    },
    {
        id: 2,
        type: 'image',
        category: 'Timelapse Suivi de Chantier',
        src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Construction Site',
    },
    {
        id: 3,
        type: 'image',
        category: 'Timelapse Touristique',
        src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Chateau',
    },
    {
        id: 4,
        type: 'image',
        category: 'Timelapse',
        src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'City Construction',
    },
    {
        id: 5,
        type: 'image',
        category: 'Timelapse Événementiel',
        src: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Event Crowd',
    },
    {
        id: 6,
        type: 'image',
        category: 'Drone',
        src: 'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Solar Panels',
    },
    {
        id: 7,
        type: 'image',
        category: 'Timelapse Suivi de Chantier',
        src: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Roof Work',
    },
    // Example of a video item
    // { id: 8, type: 'video', category: 'Drone', src: 'path_to_video.mp4', title: 'Drone Video' },
];

// 4. Methods

// Check if a category is currently active
const isActive = (category) => {
    return activeFilters.value.includes(category);
};

// Toggle logic: Add to array if not present, remove if present
const toggleFilter = (category) => {
    if (isActive(category)) {
        activeFilters.value = activeFilters.value.filter((c) => c !== category);
    } else {
        activeFilters.value.push(category);
    }
};

// 5. Computed Property for Filtering
const filteredItems = computed(() => {
    // If no filters are selected, show ALL items
    if (activeFilters.value.length === 0) {
        return portfolioItems;
    }

    // If filters are selected, show items that match ANY of the selected categories
    return portfolioItems.filter((item) =>
        activeFilters.value.includes(item.category),
    );
});
</script>

<style scoped>
/* Simple fade animation for the grid items */
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

/* Ensure items leaving happen absolutely so layout doesn't jump */
.fade-leave-active {
    position: absolute;
}
</style>
