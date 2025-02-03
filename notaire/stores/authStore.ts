import { defineStore } from "pinia";
import { useCookie } from '#app';

export const useAuthStore = defineStore("auth", {
  state: () => ({
    // Use the cookie store to persist the token across sessions
    token: useCookie('access_token').value || null,
  }),

  actions: {
    setToken(newToken: string) {
      useCookie('access_token').value = newToken;
      this.token = newToken;
    },

    clearToken() {
      useCookie('access_token').value = null;
      this.token = null;
    },
  },

  getters: {
    isAuthenticated: (state) => !!state.token,
  },
});
