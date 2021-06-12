import { NuxtConfig } from "@nuxt/types"

const config: NuxtConfig = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "my-editune",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "初心者向け、Visual Studio Code の設定ファイルジェネレーター"
      },
      { hid: "og:site_name", property: "og:site_name", content: "my-editune" },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "https://myeditune.com/" },
      {
        hid: "og:description",
        property: "og:description",
        content: "初心者向け、Visual Studio Code の設定ファイルジェネレーター"
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://raw.githubusercontent.com/yasudanaoya/my-editune/36892faabb0105219622b592502a66808aa34933/assets/images/logo.svg"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "@/assets/styles/application.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/composition-api",
    "@/plugins/element-ui",
    "@/plugins/vue-highlightjs"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://typescript.nuxtjs.org/ja
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/google-gtag"
  ],

  // https://github.com/nuxt-community/google-gtag-module?
  "google-gtag": {
    id: "G-0E5FY8C386",
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker: {
        domains: ["domain.com", "domain.org"]
      }
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false // disable if you don't want to track each page route with router.afterEach(...).
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  typescript: {
    typeCheck: {
      eslint: {
        files: "./**/*.{ts,js,vue}"
      },
      typescript: {
        memoryLimit: 4096
      }
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
    transpile: [/^element-ui/]
  }
}

export default config
