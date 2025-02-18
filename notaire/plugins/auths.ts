export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore();
  await authStore.fetchUser(); // Initialiser le token depuis les cookies
});