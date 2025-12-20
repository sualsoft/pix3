<script setup lang="ts">
import { Link, router, usePage } from '@inertiajs/vue3';
import { computed, onMounted, ref, watch } from 'vue';

interface MenuItem {
    name: string;
    href: string;
    dropdown?: boolean | Array<{ name: string; href: string }>;
}

// 1. Get User Data
const page = usePage();
const user = computed(() => page.props.auth?.user || { name: 'Admin' });

const openDropdown = ref<number | null>(null);

const toggleDropdown = (index: number) => {
    openDropdown.value = openDropdown.value === index ? null : index;
};

// 2. Logout Function
const logout = () => {
    router.post('/logout');
};

const isLinkActive = (href: string) => {
    const currentUrl = window.location.pathname;
    if (href !== '#' && href !== '/dashboard') {
        return currentUrl === href || currentUrl.startsWith(href);
    }
    return currentUrl === href;
};

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

// 3. UPDATED MENU ITEMS
const menuItems: MenuItem[] = [
    { name: 'Dashboard', href: '/dashboard', dropdown: false },
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
            { name: 'SEO Content', href: '/dashboard/home/seo' },
        ],
    },
    {
        name: 'Drone',
        href: '/dashboard/drone',
        dropdown: [
            { name: 'Inner Hero', href: '/dashboard/drone/innerhero' },
            { name: 'Detail Section', href: '/dashboard/drone/detailsection' },
            { name: 'Video Section', href: '/dashboard/drone/videosection' },
            { name: 'Page Manager', href: '/dashboard/drone/pagemanager' },
            { name: 'SEO Content', href: '/dashboard/drone/seo' },
        ],
    },
    {
        name: 'Portfolio',
        href: '/dashboard/portfolio',
        dropdown: [
            { name: 'Inner Hero', href: '/dashboard/portfolio/innerhero' },
            { name: 'Portfolio Items', href: '/dashboard/portfolio/items' },
            { name: 'SEO Content', href: '/dashboard/portfolio/seo' },
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
            { name: 'SEO Content', href: '/dashboard/timelapse/seo' },
        ],
    },
    {
        name: 'Contact',
        href: '/dashboard/contact',
        dropdown: [
            { name: 'Inner Hero', href: '/dashboard/contact/innerhero' },
            { name: 'Map', href: '/dashboard/contact/map' },
            { name: 'SEO Content', href: '/dashboard/contact/seo' },
        ],
    },
    { name: 'User', href: '/dashboard/user/' },
    // ADDED SETTING HERE
    { name: 'Settings', href: '/dashboard/setting' },
    { name: 'Projects', href: '/dashboard/projects' },
    { name: 'Main Content', href: '/dashboard/main-content' },
];

onMounted(() => {
    autoOpenDropdown();
});

watch(
    () => usePage().url,
    () => {
        autoOpenDropdown();
    },
);
</script>

<template>
    <div class="flex min-h-screen w-64 flex-col bg-gray-800 text-white">
        <div class="border-b border-gray-700 p-4">
            <h1 class="text-xl font-bold">Admin Panel</h1>
            <div class="mt-4 flex items-center gap-3">
                <div
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-md"
                >
                    {{ user.name ? user.name.charAt(0).toUpperCase() : 'A' }}
                </div>
                <div class="overflow-hidden">
                    <p
                        class="text-xs font-semibold tracking-wider text-gray-400 uppercase"
                    >
                        Hi,
                    </p>
                    <p class="truncate text-sm font-bold text-white">
                        {{ user.name }}
                    </p>
                </div>
            </div>
        </div>

        <nav class="mt-5 flex-1 overflow-y-auto px-2">
            <div
                v-for="(item, index) in menuItems"
                :key="item.name"
                class="mb-1"
            >
                <div
                    v-if="item.dropdown"
                    @click="toggleDropdown(index)"
                    class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                    :class="{
                        'bg-gray-700 font-semibold text-white': isLinkActive(
                            item.href,
                        ),
                    }"
                >
                    <span class="text-sm">{{ item.name }}</span>
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
                    class="block rounded-lg px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                    :class="{
                        'bg-gray-700 font-semibold text-white': isLinkActive(
                            item.href,
                        ),
                    }"
                    @click="openDropdown = null"
                >
                    {{ item.name }}
                </Link>

                <div
                    v-if="item.dropdown && openDropdown === index"
                    class="mt-1 ml-4 border-l-2 border-gray-600 pl-2"
                >
                    <Link
                        v-for="subItem in item.dropdown as Array<{
                            name: string;
                            href: string;
                        }>"
                        :key="subItem.name"
                        :href="subItem.href"
                        class="block rounded-md px-4 py-2 text-sm text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                        :class="{
                            'bg-gray-700 font-medium text-white': isLinkActive(
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

        <div class="border-t border-gray-700 p-4">
            <form @submit.prevent="logout">
                <button
                    type="submit"
                    class="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white shadow-md transition duration-200 hover:bg-red-700"
                >
                    <svg
                        class="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        ></path>
                    </svg>
                    Logout
                </button>
            </form>
        </div>
    </div>
</template>
