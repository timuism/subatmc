// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-simple-robots',
  ],
  content: {
    documentDriven: true
  },
  googleFonts: {
    families: {
      'Courier Prime': {
        wght: [400, 700],
        ital: [400, 700]
      },
      'DM Sans': {
        wght: [100, 200, 300, 400, 500, 600, 700],
        ital: [400, 700]
      },
      'DM Mono': {
        wght: [400, 700],
        ital: [400, 700]
      }
    }
  },
  devtools: { enabled: true }
})
