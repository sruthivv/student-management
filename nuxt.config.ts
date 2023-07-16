// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@invictus.codes/nuxt-vuetify',
    'nuxt-icon',
    // '@nuxtjs/axios'
  ],
  // axios:{
  //   baseURL:'/'
  // },
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true ,
      useIconCDN: true,

      /* vite-plugin-vuetify options */
      styles:true ,
      autoImport: true,
    }
  },
 


})
