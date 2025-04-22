<template>
  <header class="bg-white shadow-sm border-b">
    <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink
        to="/"
        class="flex items-center gap-2 text-blue-600 font-bold text-xl"
      >
        <svg
          class="w-6 h-6 text-blue-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 10H5a1 1 0 000 2h3v3a1 1 0 002 0v-3h3a1 1 0 000-2h-3V7a1 1 0 00-2 0v3z"
          />
        </svg>
        TraoDoiLinhKien
      </RouterLink>

      <!-- Menu nav -->
      <nav class="hidden md:flex gap-8 text-sm font-medium text-gray-700">
        <RouterLink
          to="/"
          class="hover:text-blue-500 transition-colors"
          >Home</RouterLink
        >
        <RouterLink
          to="/san"
          class="hover:text-blue-500 transition-colors"
          >Sàn</RouterLink
        >
        <RouterLink
          to="/blog"
          class="hover:text-blue-500 transition-colors"
          >Blog</RouterLink
        >
        <RouterLink
          v-if="isLoggedIn"
          to="/my-products"
          class="hover:text-blue-500 transition-colors"
          >Sản phẩm của tôi</RouterLink
        >
      </nav>

      <!-- Auth -->
      <div class="flex items-center gap-2">
        <n-button
          v-if="!isLoggedIn"
          type="primary"
          ghost
          size="small"
          @click="router.push('/login')"
        >
          Đăng nhập
        </n-button>

        <n-dropdown
          v-else
          trigger="hover"
          size="small"
          :options="dropdownOptions"
          @select="handleSelect"
        >
          <n-button
            secondary
            size="small"
            >{{ userName }}</n-button
          >
        </n-dropdown>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { NButton, NDropdown } from 'naive-ui'

const router = useRouter()
const userStore = useUserStore()

const isLoggedIn = computed(() => !!userStore.user)
const userName = computed(() => userStore.user?.name || 'Người dùng')

const dropdownOptions = [
  { label: 'Thông tin cá nhân', key: 'profile' },
  { label: 'Đăng xuất', key: 'logout' },
]

function handleSelect(key: string) {
  if (key === 'logout') {
    userStore.logout()
    router.push('/')
  } else if (key === 'profile') {
    router.push('/profile')
  }
}
</script>

<style scoped>
/* Tùy chỉnh thêm nếu muốn, nhưng Tailwind là đủ đẹp rồi */
</style>
