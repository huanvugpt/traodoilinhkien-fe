<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    <AppHeader />

    <main class="flex-1">
      <div class="max-w-6xl mx-auto px-4 py-8">
        <RouterView />
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>
