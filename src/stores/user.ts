// src/stores/user.ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as { name: string } | null,
  }),
  actions: {
    login(userData: { name: string }) {
      this.user = userData
    },
    logout() {
      this.user = null
    },
  },
})
