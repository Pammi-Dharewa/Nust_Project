import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, "./"),
  },

  css: [
    '~/assets/main.css'
  ],

  modules: [
    "@nuxtjs/tailwindcss",
  ],

  tailwindcss: {},
  app: {
    head: {
      title: 'Nuxt.js Application',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A fully functional Nuxt.js application' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  compatibilityDate: '2025-01-15'
});
