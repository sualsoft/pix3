<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { onMounted, ref, watch } from 'vue';

interface MenuItem {
    name: string;
    href: string;
    dropdown?: boolean | Array<{ name: string; href: string }>;
}

const openDropdown = ref<number | null>(null);

const toggleDropdown = (index: number) => {
    openDropdown.value = openDropdown.value === index ? null : index;
};

// Check if a link is active
const isLinkActive = (href: string) => {
    const currentUrl = window.location.pathname;
    // For dropdown items, check if the current URL starts with the href
    if (href !== '#' && href !== '/dashboard') {
        return currentUrl === href || currentUrl.startsWith(href);
    }
    // For main items, exact match
    return currentUrl === href;
};

// Auto-open dropdown based on current URL
const autoOpenDropdown = () => {
    const currentUrl = window.location.pathname;

    menuItems.forEach((item, index) => {
        if (item.dropdown && Array.isArray(item.dropdown)) {
            const hasActiveChild = item.dropdown.some(
                (subItem) =>
                    currentUrl.startsWith(
                        subItem.href.replace(/\/[^/]+$/, ''),
                    ) || currentUrl === subItem.href,
            );

            if (hasActiveChild) {
                openDropdown.value = index;
            }
        }
    });
};

const menuItems: MenuItem[] = [
    {
        name: 'Dashboard',
        href: '/dashboard',
        dropdown: false,
    },
    {
        name: 'General',
        href: '/dashboard/general',
        dropdown: [
            { name: 'General Settings', href: '/dashboard/general' },
            { name: 'Social Links', href: '/dashboard/social-links' },
            { name: 'Footer Menu', href: '/dashboard/footer-menu' },
            { name: 'Navbar Menu', href: '/dashboard/navbar-menu' },
            { name: 'CTA Settings', href: '/dashboard/general/cta' },
        ],
    },
    {
        name: 'Home Page',
        href: '/dashboard/home',
        dropdown: [
            { name: 'Hero Section', href: '/dashboard/home/hero' },
            { name: 'Services Section', href: '/dashboard/home/services' },
            { name: 'Why Pix3 Section', href: '/dashboard/home/why-pix3' },
            { name: 'Gallery Section', href: '/dashboard/home/gallery' },
            { name: 'About Section', href: '/dashboard/home/about' },
        ],
    },
    {
        name: 'Timelapse',
        href: '/dashboard/timelapse',
        dropdown: [
            { name: 'Inner Hero', href: '/dashboard/timelapse/innerhero' },
            {
                name: 'Detail Section',
                href: '/dashboard/timelapse/detailsection',
            },
            {
                name: 'Video Section',
                href: '/dashboard/timelapse/videosection',
            },
            { name: 'Page Manager', href: '/dashboard/timelapse/pagemanager' },
        ],
    },
    {
        name: 'Drone',
        href: '/dashboard/drone',
        dropdown: [
            { name: 'Inner Hero', href: '/dashboard/drone/innerhero' },
            {
                name: 'Detail Section',
                href: '/dashboard/drone/detailsection',
            },
            {
                name: 'Video Section',
                href: '/dashboard/drone/videosection',
            },
            { name: 'Page Manager', href: '/dashboard/drone/pagemanager' },
        ],
    },
    {
        name: 'Portfolio',
        href: '/dashboard/portfolio',
        dropdown: [
            { name: 'Inner Hero', href: '/dashboard/portfolio/innerhero' },
            { name: 'Portfolio Items', href: '/dashboard/portfolio/items' },
        ],
    },
    {
        name: 'Contact',
        href: '/dashboard/contact',
        dropdown: [
            { name: 'Inner Hero', href: '/dashboard/contact/innerhero' },
            { name: 'Map', href: '/dashboard/contact/map' },
        ],
    },
];

// Run on component mount
onMounted(() => {
    autoOpenDropdown();
});

// Watch for page changes
watch(
    () => usePage().url,
    () => {
        autoOpenDropdown();
    },
);
</script>

<template>
    <div class="min-h-screen w-64 bg-gray-800 text-white">
        <div class="border-b border-gray-700 p-4">
            <h1 class="text-xl font-bold">Admin Panel</h1>
        </div>

        <nav class="mt-5">
            <div v-for="(item, index) in menuItems" :key="item.name">
                <div
                    v-if="item.dropdown"
                    @click="toggleDropdown(index)"
                    class="flex cursor-pointer items-center justify-between px-4 py-3 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                    :class="{
                        'bg-gray-700 text-white': isLinkActive(item.href),
                    }"
                >
                    <span>{{ item.name }}</span>
                    <svg
                        class="h-4 w-4 transition-transform duration-200"
                        :class="{ 'rotate-180': openDropdown === index }"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </div>

                <Link
                    v-else
                    :href="item.href"
                    class="block px-4 py-3 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                    :class="{
                        'bg-gray-700 text-white': isLinkActive(item.href),
                    }"
                    @click="openDropdown = null"
                >
                    {{ item.name }}
                </Link>

                <div
                    v-if="item.dropdown && openDropdown === index"
                    class="ml-4 rounded bg-gray-900"
                >
                    <Link
                        v-for="subItem in item.dropdown as Array<{
                            name: string;
                            href: string;
                        }>"
                        :key="subItem.name"
                        :href="subItem.href"
                        class="block px-4 py-2 text-sm text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                        :class="{
                            'bg-gray-700 text-white': isLinkActive(
                                subItem.href,
                            ),
                        }"
                        @click="openDropdown = null"
                    >
                        {{ subItem.name }}
                    </Link>
                </div>
            </div>
        </nav>
    </div>
</template>
