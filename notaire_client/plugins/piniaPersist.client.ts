import { defineNuxtPlugin } from '#app';
import { usePinia } from '#imports';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = usePinia();
  pinia.use(piniaPluginPersistedState);
});
