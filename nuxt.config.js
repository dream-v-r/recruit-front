import pkg from './package'
const meta = {
  title: '採用情報 - ドリームビジョン株式会社',
  description: 'ドリームビジョン株式会社の採用情報をご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。'
}

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: meta.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: meta.description },
      { hid: 'description', name: 'og:description', content: meta.description }

    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['ress', '@/assets/scss/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@bazzite/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true
  },
  styleResources: {
    sass: [
      '@/assets/scss/variable.scss',
      '@/assets/scss/mixin.scss'
    ]
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    },
    postcss: [
      require('autoprefixer')({
        grid: true
      })
    ]
  }
}
