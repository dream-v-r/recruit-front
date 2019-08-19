// import pkg from './package'
import { resolve } from 'path'
const sitePath = /recruit/

const description = 'ドリームビジョン株式会社の採用情報をご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。'

export default {
  mode: 'universal',
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '採用情報 - %s - ドリームビジョン株式会社',
    script: [
      { src: '/recruit/userHeat.js' },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:site_name', property: 'og:site_name', content: '採用情報 - ドリームビジョン株式会社' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'http://www.dream-v.co.jp/recruit/' },
      { hid: 'og:title', property: 'og:title', content: '採用情報 - ドリームビジョン株式会社' },
      { hid: 'og:description', property: 'og:description', content: description },
      { name: 'keywords', content: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,中途採用'}
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
  css: [
    'ress', '@/assets/scss/main.scss',
    'swiper/dist/css/swiper.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/observe-visibility',
    '~plugins/scroll.js',
    { src: '~/plugins/routerOption.js', ssr: false },
    { src: "~plugins/vue-awesome-swiper", ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@bazzite/nuxt-optimized-images',
    ['@nuxtjs/google-analytics', {
      id: 'UA-135026501-1'
    }]
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
          exclude: /(node_modules)/
        })
      }
    },
    postcss: [
      require('autoprefixer')({
        grid: true
      })
    ],

    vendor: [
      'vue-awesome-swiper'
    ]
  },
  generate: {
    dir: resolve(__dirname, `./dist${sitePath}`),
  },
  router: {
    base: process.env.NODE_ENV === 'development' ? '/' : sitePath,
  }
}
