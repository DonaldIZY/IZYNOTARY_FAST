export default defineNuxtPlugin(nuxtApp => {
    const apiBaseUrl = process.env.API_BASE_URL; // Définir l'URL de base ici
  
    nuxtApp.provide('apiBaseUrl', apiBaseUrl); // Fournir l'URL via nuxtApp
  });
  