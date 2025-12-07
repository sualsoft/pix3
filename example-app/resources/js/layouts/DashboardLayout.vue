<script setup lang="ts">
import DashboardSidebar from '@/components/DashboardSidebar.vue';
</script>

<template>
    <div class="flex h-screen">
        <DashboardSidebar />
        <main class="flex-1 overflow-y-auto p-6">
            <slot />
        </main>
    </div>
</template>
