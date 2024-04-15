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
      'Montserrat': {
        wght: [300, 400, 600, 800],
        ital: [300, 400, 600, 800]
      },
      'Tac One': {
        wght: [400],
      },
      'DM Mono': {
        wght: [400, 700],
        ital: [400, 700]
      }
    }
  },
  devtools: { enabled: true }
})
