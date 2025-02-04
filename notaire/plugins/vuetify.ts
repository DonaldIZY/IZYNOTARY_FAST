// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import { VDateInput } from 'vuetify/labs/VDateInput'
import { fr } from 'vuetify/locale'
import 'vuetify/styles'

const defaultTheme = {
  dark: false,
  colors: {
    background: '#FAFAFA',
    // surface: '#FFFFFF',
    // 'surface-bright': '#FFFFFF',
    // 'surface-light': '#EEEEEE',
    // 'surface-variant': '#424242',
    // 'on-surface-variant': '#EEEEEE',
    primary: '#AD1919',
    // 'primary-darken-1': '#1F5592',
    secondary: '#808080',
    // 'secondary-darken-1': '#018786',
    // error: '#B00020',
    // info: '#2196F3',
    // success: '#4CAF50',
    // warning: '#FB8C00',
  },
  variables: {
    // 'border-color': '#000000',
    // 'border-opacity': 0.12,
    // 'high-emphasis-opacity': 0.87,
    // 'medium-emphasis-opacity': 0.60,
    // 'disabled-opacity': 0.38,
    // 'idle-opacity': 0.04,
    // 'hover-opacity': 0.04,
    // 'focus-opacity': 0.12,
    // 'selected-opacity': 0.08,
    // 'activated-opacity': 0.12,
    // 'pressed-opacity': 0.12,
    // 'dragged-opacity': 0.08,
    // 'theme-kbd': '#212529',
    // 'theme-on-kbd': '#FFFFFF',
    // 'theme-code': '#F5F5F5',
    // 'theme-on-code': '#000000',
  }
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'defaultTheme',
      themes: {
        defaultTheme,
      },
    },
    components: {
      VDateInput,
    },
    // Ajouter la configuration de la langue
    locale: {
      locale: 'fr', // Définir la locale par défaut
      messages: { fr }, // Importer les messages en français
    },
  })
  app.vueApp.use(vuetify)
})
