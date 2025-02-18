import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false, // Désactive le SSR pour passer en CSR
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  buildModules: ['@nuxtjs/dotenv'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    //...
  ],
  vite: {
    server: {
      port: 2610,
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
