// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-content-assets',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
  ],
  content: {
    documentDriven: true
  },
  googleFonts: {
    families: {
      'Courier Prime': {
        wght: [400, 700],
        ital: [400, 700]
      }
    }
  },
  devtools: { enabled: true }
})
