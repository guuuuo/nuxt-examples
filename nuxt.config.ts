// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: { transpile: ["vue-toastification"] },
  css: ["~/assets/css/main.css", "vue-toastification/dist/index.css"],
  extends: ["unibase-layer"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  routeRules: {
    '/blog/**': { ssr: true },
    '/products/**': { ssr: true },
    '/checkout/**': { ssr: false }
  }
});
