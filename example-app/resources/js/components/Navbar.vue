<script setup>
import { Link, router, usePage } from '@inertiajs/vue3';
import { computed, onMounted, ref } from 'vue';

// 1. Get User Data from Inertia
const page = usePage();
const user = computed(() => page.props.auth?.user);

// 2. Data Storage
const navbarLinks = ref([]);
const generalInfo = ref({
    description: '',
    phone: '',
    email: '',
    address: '',
    logo_url: '',
});
const socialLinks = ref([]);
const isMenuOpen = ref(false);

// 3. Methods
const fetchLayout = async () => {
    try {
        const response = await fetch('/api/layout');
        const data = await response.json();

        if (data.navbar) navbarLinks.value = data.navbar;
        if (data.general) generalInfo.value = data.general;
        if (data.social) socialLinks.value = data.social;
    } catch (error) {
        console.error('Error loading layout:', error);
    }
};

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

// Logout Function
const logout = () => {
    router.post('/logout');
};

onMounted(() => {
    fetchLayout();
});
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: all 0.3s ease-in-out;
    max-height: 500px;
    opacity: 1;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
}
</style>

<template>
    <nav
        class="fixed start-0 top-0 z-50 w-full border-b border-gray-800 bg-[#101114]"
    >
        <div
            class="w-full border-b border-gray-800 bg-[#0b0c0f] text-xs text-gray-400"
        >
            <div
                class="mx-auto flex max-w-screen-xl flex-col items-center justify-center px-4 py-2 md:flex-row md:justify-between"
            >
                <div class="flex items-center space-x-4">
                    <a
                        :href="'tel:' + generalInfo.phone"
                        class="group flex items-center space-x-1 transition-colors hover:text-white"
                    >
                        <svg
                            class="h-3 w-3 transition-transform group-hover:scale-110"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.44 2.33.68 3.58.68.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.39 21 3 14.61 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.24 2.46.68 3.58.27.4.21.75-.27 1.11l-2.2 2.2z"
                            />
                        </svg>
                        <span>{{ generalInfo.phone }}</span>
                    </a>
                    <a
                        :href="'mailto:' + generalInfo.email"
                        class="group flex items-center space-x-1 transition-colors hover:text-white"
                    >
                        <svg
                            class="h-3 w-3 transition-transform group-hover:scale-110"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                            />
                        </svg>
                        <span>{{ generalInfo.email }}</span>
                    </a>
                </div>
                <div class="hidden items-center space-x-4 md:flex">
                    <a
                        v-for="(item, index) in socialLinks"
                        :key="index"
                        :href="item.link"
                        target="_blank"
                        class="transition-transform hover:scale-110 hover:text-white"
                    >
                        <i :class="item.icon"></i>
                    </a>
                </div>
            </div>
        </div>

        <div
            class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4"
        >
            <Link
                href="/"
                class="flex items-center space-x-3 transition-opacity hover:opacity-80 rtl:space-x-reverse"
            >
                <img
                    v-if="generalInfo.logo_url"
                    :src="generalInfo.logo_url"
                    class="h-12"
                    alt="Company Logo"
                />
            </Link>

            <div
                class="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse"
            >
                <div v-if="user" class="hidden items-center gap-3 md:flex">
                    <Link
                        href="/dashboard"
                        class="flex items-center gap-2 rounded-sm bg-white px-4 py-2 text-sm font-bold text-[#101114] shadow-xs transition-all duration-300 hover:scale-105 hover:bg-gray-100"
                    >
                        <i class="fa-solid fa-user"></i>
                        {{ user.name }}
                    </Link>

                    <button
                        @click="logout"
                        class="rounded-sm bg-gray-800 p-2 text-white transition-colors hover:bg-red-600"
                        title="Se déconnecter"
                    >
                        <i class="fa-solid fa-right-from-bracket"></i>
                    </button>
                </div>

                <div v-else class="hidden md:block">
                    <template
                        v-for="(item, index) in navbarLinks"
                        :key="'desk-btn-' + index"
                    >
                        <Link
                            v-if="item.is_button"
                            :href="item.link"
                            class="bg-white px-4 py-2 text-sm font-medium text-[#101114] shadow-xs transition-all duration-300 hover:scale-105 hover:bg-gray-100"
                        >
                            {{ item.name }}
                        </Link>
                    </template>
                </div>

                <button
                    @click="toggleMenu"
                    type="button"
                    class="group inline-flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-sm text-gray-900 transition-all hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:outline-none md:hidden"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="h-6 w-6 transition-transform duration-300"
                        :class="{ 'rotate-90': isMenuOpen }"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            v-if="!isMenuOpen"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        <path
                            v-else
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            <transition name="mobile-menu">
                <div
                    v-show="isMenuOpen"
                    class="w-full md:order-1 md:!block md:flex md:!max-h-none md:w-auto md:!opacity-100"
                    id="navbar-sticky"
                >
                    <ul
                        class="mt-4 flex flex-col rounded-lg border border-gray-800 bg-[#16181d] p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 rtl:space-x-reverse"
                    >
                        <li v-for="(item, index) in navbarLinks" :key="index">
                            <Link
                                v-if="!item.is_button"
                                :href="item.link"
                                class="block rounded px-3 py-2 text-gray-300 transition-all hover:translate-x-1 hover:bg-gray-800 hover:text-white md:border-0 md:p-0 md:hover:translate-x-0 md:hover:bg-transparent md:hover:text-blue-400"
                            >
                                {{ item.name }}
                            </Link>
                        </li>

                        <li
                            class="mt-2 border-t border-gray-700 pt-2 md:hidden"
                        >
                            <div v-if="user" class="flex flex-col gap-2">
                                <Link
                                    :href="user.role === 'admin' ? '/dashboard' : (user.projects && user.projects.length > 0 ? '/user/' + user.projects[0].slug : '/')"
                                    class="block w-full rounded-md bg-white px-4 py-2 text-center text-sm font-bold text-[#101114]"
                                >
                                    <i class="fa-solid fa-user mr-2"></i>
                                    {{ user.name }}
                                </Link>
                                <button
                                    @click="logout"
                                    class="block w-full rounded-md bg-red-600 px-4 py-2 text-center text-sm font-bold text-white"
                                >
                                    Se déconnecter
                                </button>
                            </div>

                            <div v-else>
                                <template
                                    v-for="(item, index) in navbarLinks"
                                    :key="'mob-btn-' + index"
                                >
                                    <Link
                                        v-if="item.is_button"
                                        :href="item.link"
                                        class="block w-full rounded-md bg-white px-4 py-3 text-center text-sm font-bold text-[#101114] shadow-md transition-transform hover:scale-[1.02] hover:bg-gray-100"
                                    >
                                        {{ item.name }}
                                    </Link>
                                </template>
                            </div>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </nav>
</template>
