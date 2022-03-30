export default {
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {href:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", 
      rel:"stylesheet", 
      integrity:"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3", 
      crossorigin:"anonymous"}
    ],
    script: [
      { src:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js", 
        integrity:"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p", 
        crossorigin:"anonymous"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
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



