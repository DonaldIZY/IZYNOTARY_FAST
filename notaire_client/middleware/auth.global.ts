export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  if (!authStore.isAuthenticated && to.path !== '/login') {
    return navigateTo('/login');
  }

  if(authStore.isAuthenticated && to.path == '/login') {
    return navigateTo('/home');
  }
});