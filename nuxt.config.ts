// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [["@nuxtjs/tailwindcss", { viewer: false }]],
  runtimeConfig: {
    databaseUrl: "",
  },
});
