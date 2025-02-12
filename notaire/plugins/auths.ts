export default defineNuxtPlugin((nuxtApp) => {
  const authStore = useAuthStore();
  authStore.initializeToken(); // Initialiser le token depuis les cookies
});