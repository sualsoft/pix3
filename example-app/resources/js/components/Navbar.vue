<script setup>
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Smooth transition for the mobile menu */
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
                        href="tel:+1234567890"
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
                        <span>+33 1 23 45 67 89</span>
                    </a>
                    <a
                        href="mailto:contact@example.com"
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
                        <span>contact@example.com</span>
                    </a>
                </div>

                <div class="hidden items-center space-x-4 md:flex">
                    <a
                        href="#"
                        target="_blank"
                        class="transition-transform hover:scale-110 hover:text-white"
                    >
                        <svg
                            class="h-3.5 w-3.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                            />
                        </svg>
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        class="transition-transform hover:scale-110 hover:text-white"
                    >
                        <svg
                            class="h-3.5 w-3.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                            />
                        </svg>
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        class="transition-transform hover:scale-110 hover:text-white"
                    >
                        <svg
                            class="h-3.5 w-3.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            />
                        </svg>
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
                <img src="/images/logo.png" class="h-12" alt="Company Logo" />
            </Link>

            <div
                class="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse"
            >
                <Link
                    href="/dashboard"
                    class="bg-brand hidden bg-white px-4 py-2 text-sm font-medium text-[#101114] shadow-xs transition-all duration-300 hover:scale-105 hover:bg-gray-100 focus:ring-4 focus:outline-none md:inline-block"
                >
                    Se connecter
                </Link>

                <button
                    @click="toggleMenu"
                    type="button"
                    class="group inline-flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-sm text-gray-900 transition-all hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:outline-none md:hidden"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="h-6 w-6 transition-transform duration-300"
                        :class="{ 'rotate-90': isMenuOpen }"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            v-if="!isMenuOpen"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        <path
                            v-else
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-width="2"
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
                        <li>
                            <Link
                                href="/"
                                class="bg-brand md:text-fg-brand block rounded px-3 py-2 text-white transition-all hover:translate-x-1 md:bg-transparent md:p-0 md:hover:translate-x-0 md:hover:text-blue-400"
                                aria-current="page"
                            >
                                Accueil
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/timelapse"
                                class="block rounded px-3 py-2 text-gray-300 transition-all hover:translate-x-1 hover:bg-gray-800 hover:text-white md:border-0 md:p-0 md:hover:translate-x-0 md:hover:bg-transparent md:hover:text-blue-400"
                            >
                                Timelapse
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/drone"
                                class="block rounded px-3 py-2 text-gray-300 transition-all hover:translate-x-1 hover:bg-gray-800 hover:text-white md:border-0 md:p-0 md:hover:translate-x-0 md:hover:bg-transparent md:hover:text-blue-400"
                            >
                                Drone
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/portfolio"
                                class="block rounded px-3 py-2 text-gray-300 transition-all hover:translate-x-1 hover:bg-gray-800 hover:text-white md:border-0 md:p-0 md:hover:translate-x-0 md:hover:bg-transparent md:hover:text-blue-400"
                            >
                                Portefeuille
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/contact"
                                class="block rounded px-3 py-2 text-gray-300 transition-all hover:translate-x-1 hover:bg-gray-800 hover:text-white md:border-0 md:p-0 md:hover:translate-x-0 md:hover:bg-transparent md:hover:text-blue-400"
                            >
                                Contact
                            </Link>
                        </li>

                        <li class="mt-4 md:hidden">
                            <Link
                                href="/dashboard"
                                class="block w-full rounded-md bg-white px-4 py-3 text-center text-sm font-bold text-[#101114] shadow-md transition-transform hover:scale-[1.02] hover:bg-gray-100"
                            >
                                Se connecter
                            </Link>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </nav>
</template>
