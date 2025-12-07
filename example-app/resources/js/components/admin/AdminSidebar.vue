<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';

const sidebarOpen = ref(true);

const menuItems = [
    { name: 'General', href: '/admin/general', icon: '⚙️' },
    { name: 'Home Page', href: '/admin/home', icon: '🏠' },
    { name: 'Timelapse', href: '/admin/timelapse', icon: '⏱️' },
    { name: 'Timelapse Single', href: '/admin/timelapse/single', icon: '🎬' },
    { name: 'Drone', href: '/admin/drone', icon: '🚁' },
    { name: 'Drone Single', href: '/admin/drone/single', icon: '📷' },
    { name: 'Portfolio', href: '/admin/portfolio', icon: '💼' },
    { name: 'Portfolio Single', href: '/admin/portfolio/single', icon: '🖼️' },
    { name: 'Contact', href: '/admin/contact', icon: '📞' },
    { name: 'Login', href: '/admin/login', icon: '🔐' },
];

const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
};
</script>

<template>
    <aside
        class="min-h-screen w-64 bg-gray-800 text-white transition-all duration-300"
        :class="{ 'w-20': !sidebarOpen }"
    >
        <div
            class="flex items-center justify-between border-b border-gray-700 p-4"
        >
            <div v-if="sidebarOpen" class="text-xl font-bold">Admin Panel</div>
            <button
                @click="toggleSidebar"
                class="text-gray-400 hover:text-white"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        v-if="sidebarOpen"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                    />
                    <path
                        v-else
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>

        <nav class="mt-5">
            <Link
                v-for="item in menuItems"
                :key="item.name"
                :href="item.href"
                class="flex items-center px-4 py-3 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
            >
                <span class="mr-3 text-lg">{{ item.icon }}</span>
                <span v-if="sidebarOpen">{{ item.name }}</span>
            </Link>
        </nav>
    </aside>
</template>
