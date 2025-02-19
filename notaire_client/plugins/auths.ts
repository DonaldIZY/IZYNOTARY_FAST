export default defineNuxtPlugin(async (nuxtApp) => {
    const authStore = useAuthStore();
    await authStore.fetchCustomer(); // Initialiser le token depuis les cookies
});