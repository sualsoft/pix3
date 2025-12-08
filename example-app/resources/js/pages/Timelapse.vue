<script setup>
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <div>
        <Head title="Timelapse" />

        <!-- Hero Section -->
        <section class="relative py-20 md:py-32 bg-gradient-to-r from-blue-500 to-indigo-700 text-white">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl md:text-6xl font-bold mb-6">Timelapse Projects</h1>
                <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">This is hero</p>
                <div class="flex justify-center">
                    <button class="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300">
                        View Our Work
                    </button>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Timelapse Services</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto text-lg">
                        This is service
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Construction Timelapse</h3>
                        <p class="text-gray-600">Documenting construction projects from groundbreaking to completion.</p>
                    </div>
                    
                    <div class="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Event Coverage</h3>
                        <p class="text-gray-600">Capturing special events and festivals with timelapse techniques.</p>
                    </div>
                    
                    <div class="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Nature & Landscapes</h3>
                        <p class="text-gray-600">Showcasing the beauty of nature through seasonal timelapses.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Timelapse Projects</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto text-lg">
                        This is portfolio
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                        <div class="h-64 bg-gray-300 flex items-center justify-center">
                            <span class="text-gray-500">Timelapse Image 1</span>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Skyscraper Construction</h3>
                            <p class="text-gray-600 mb-4">6-month construction timelapse of downtown high-rise.</p>
                            <button class="text-blue-600 font-medium hover:text-blue-800">
                                View Project →
                            </button>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                        <div class="h-64 bg-gray-300 flex items-center justify-center">
                            <span class="text-gray-500">Timelapse Image 2</span>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Bridge Building</h3>
                            <p class="text-gray-600 mb-4">Complete construction process of the new river bridge.</p>
                            <button class="text-blue-600 font-medium hover:text-blue-800">
                                View Project →
                            </button>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                        <div class="h-64 bg-gray-300 flex items-center justify-center">
                            <span class="text-gray-500">Timelapse Image 3</span>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Seasonal Nature</h3>
                            <p class="text-gray-600 mb-4">Year-long transformation of mountain landscape.</p>
                            <button class="text-blue-600 font-medium hover:text-blue-800">
                                View Project →
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-12">
                    <button class="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>