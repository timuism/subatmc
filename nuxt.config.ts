// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-simple-robots',
    'nuxt-gtag'
  ],
  content: {
    documentDriven: true
  },
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-Q2CPXLEMMZ'
  },
  googleFonts: {
    families: {
      'Athiti': {
        wght: [200, 300, 400, 500, 600, 700, 800],
        ital: [200, 300, 400, 500, 600, 700, 800],
      },
    }
  },
  devtools: { enabled: true }
})