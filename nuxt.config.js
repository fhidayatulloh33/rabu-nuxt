export default {
  server:{
    port: 4000,
    host: '0.0.0.0'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rabu-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // PWA Configuration: https://go.nuxtjs.dev/config-pwa
  pwa: {
    meta : "my pwa",
    author : "fajar",
  },
  manifest : {
    name : "fajarApp",
    short_name : "fajarApp",
    lang : "en",
  },
  icon:{
    source: '~/static/icon.jpeg',
    fileName: 'icon.jpeg',
  }

}



