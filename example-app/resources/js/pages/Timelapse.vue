<script setup>
import InnerHero from '@/components/timelapse/InnerHero.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <div>
        <Head title="Timelapse" />

        <!-- Hero Section -->
        <InnerHero />

        <!-- Services Section -->
        <section class="bg-white py-20">
            <div class="container mx-auto px-4">
                <div class="mb-16 text-center">
                    <h2
                        class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
                    >
                        Our Timelapse Services
                    </h2>
                    <p class="mx-auto max-w-2xl text-lg text-gray-600">
                        This is service
                    </p>
                </div>

                <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div
                        class="rounded-lg bg-gray-50 p-8 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div
                            class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500"
                        >
                            <svg
                                class="h-8 w-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                ></path>
                            </svg>
                        </div>
                        <h3 class="mb-3 text-xl font-bold">
                            Construction Timelapse
                        </h3>
                        <p class="text-gray-600">
                            Documenting construction projects from
                            groundbreaking to completion.
                        </p>
                    </div>

                    <div
                        class="rounded-lg bg-gray-50 p-8 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div
                            class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500"
                        >
                            <svg
                                class="h-8 w-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                ></path>
                            </svg>
                        </div>
                        <h3 class="mb-3 text-xl font-bold">Event Coverage</h3>
                        <p class="text-gray-600">
                            Capturing special events and festivals with
                            timelapse techniques.
                        </p>
                    </div>

                    <div
                        class="rounded-lg bg-gray-50 p-8 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div
                            class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500"
                        >
                            <svg
                                class="h-8 w-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                ></path>
                            </svg>
                        </div>
                        <h3 class="mb-3 text-xl font-bold">
                            Nature & Landscapes
                        </h3>
                        <p class="text-gray-600">
                            Showcasing the beauty of nature through seasonal
                            timelapses.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section class="bg-gray-50 py-20">
            <div class="container mx-auto px-4">
                <div class="mb-16 text-center">
                    <h2
                        class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
                    >
                        Featured Timelapse Projects
                    </h2>
                    <p class="mx-auto max-w-2xl text-lg text-gray-600">
                        This is portfolio
                    </p>
                </div>

                <div
                    class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    <div
                        class="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
                    >
                        <div
                            class="flex h-64 items-center justify-center bg-gray-300"
                        >
                            <span class="text-gray-500">Timelapse Image 1</span>
                        </div>
                        <div class="p-6">
                            <h3 class="mb-2 text-xl font-bold">
                                Skyscraper Construction
                            </h3>
                            <p class="mb-4 text-gray-600">
                                6-month construction timelapse of downtown
                                high-rise.
                            </p>
                            <button
                                class="font-medium text-blue-600 hover:text-blue-800"
                            >
                                View Project →
                            </button>
                        </div>
                    </div>

                    <div
                        class="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
                    >
                        <div
                            class="flex h-64 items-center justify-center bg-gray-300"
                        >
                            <span class="text-gray-500">Timelapse Image 2</span>
                        </div>
                        <div class="p-6">
                            <h3 class="mb-2 text-xl font-bold">
                                Bridge Building
                            </h3>
                            <p class="mb-4 text-gray-600">
                                Complete construction process of the new river
                                bridge.
                            </p>
                            <button
                                class="font-medium text-blue-600 hover:text-blue-800"
                            >
                                View Project →
                            </button>
                        </div>
                    </div>

                    <div
                        class="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
                    >
                        <div
                            class="flex h-64 items-center justify-center bg-gray-300"
                        >
                            <span class="text-gray-500">Timelapse Image 3</span>
                        </div>
                        <div class="p-6">
                            <h3 class="mb-2 text-xl font-bold">
                                Seasonal Nature
                            </h3>
                            <p class="mb-4 text-gray-600">
                                Year-long transformation of mountain landscape.
                            </p>
                            <button
                                class="font-medium text-blue-600 hover:text-blue-800"
                            >
                                View Project →
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mt-12 text-center">
                    <button
                        class="rounded-full bg-blue-600 px-8 py-3 font-bold text-white transition duration-300 hover:bg-blue-700"
                    >
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>
