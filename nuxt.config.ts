// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appUrl: process.env.NUXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
      apiBaseUrl: process.env.NUXT_PUBLIC_API_URL ?? 'http://localhost:8000',
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image", "nuxt-primevue", "@nuxt/content"],
  primevue: {
    components: {
      include: ['Multiselect', 'Accordion', 'AccordionTab', 'AnimateOnScroll']
    },
    directives: {
        include: ['AnimateOnScroll']
    },
  },
  image: {
    format: ['webp'],
    dir: 'public',
  },
  content: {
    markdown: {
      anchorLinks: false
    },
  },
  target: 'static',

})