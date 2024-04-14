// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
      include: ['Multiselect', 'Accordion', 'AccordionTab']
    }
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