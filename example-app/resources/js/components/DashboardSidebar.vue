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
        ],
    },
    {
        name: 'Home Page',
        href: '/dashboard/home',
        dropdown: [
            { name: 'Hero Section', href: '/dashboard/home/hero' },
            { name: 'About Section', href: '/dashboard/home/about' },
            { name: 'Services Section', href: '/dashboard/home/services' },
            { name: 'Testimonials', href: '/dashboard/home/testimonials' },
            { name: 'Call to Action', href: '/dashboard/home/cta' },
        ],
    },
    {
        name: 'Timelapse',
        href: '/dashboard/timelapse',
        dropdown: [
            { name: 'Projects List', href: '/dashboard/timelapse/list' },
            { name: 'Add New', href: '/dashboard/timelapse/new' },
            { name: 'Categories', href: '/dashboard/timelapse/categories' },
        ],
    },
    {
        name: 'Drone',
        href: '/dashboard/drone',
        dropdown: [
            { name: 'Drone List', href: '/dashboard/drone/list' },
            { name: 'Add New', href: '/dashboard/drone/new' },
            { name: 'Specifications', href: '/dashboard/drone/specs' },
        ],
    },
    {
        name: 'Portfolio',
        href: '/dashboard/portfolio',
        dropdown: [
            { name: 'Portfolio Items', href: '/dashboard/portfolio/items' },
            { name: 'Add New', href: '/dashboard/portfolio/new' },
            { name: 'Categories', href: '/dashboard/portfolio/categories' },
        ],
    },
    {
        name: 'Contact',
        href: '/dashboard/contact',
        dropdown: [
            { name: 'Messages', href: '/dashboard/contact/messages' },
            { name: 'Form Settings', href: '/dashboard/contact/settings' },
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
