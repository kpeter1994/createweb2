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

  modules: [
    "@nuxt/image",
    "nuxt-primevue",
    "@nuxt/content",
    "@stefanobartoletti/nuxt-social-share",
    "nuxt-og-image",
    "@dargmuesli/nuxt-cookie-control",
  ],
  site: {
    url: 'https://createweb.hu',
  },
  cookieControl: {
    barPosition: 'bottom-full',
    closeModalOnClickOutside: true,
    locales: ['hu'],
    localeTexts: {
      hu: {
        save: 'Mentés',
        acceptAll: 'Elfogad',
        declineAll: 'Elutasít',
        manageCookies: 'Sütik kezelése',
      }
    },
    targetCookieIds: ['xmpl_a', 'xmpl_b'],
    cookies: {
      necessary: [{
        name: 'Default Cookies',
        description: 'Ezek a sütik szükségesek a weboldal megfelelő működéséhez.',
        cookies: ['cookie_control_consent', 'cookie_control_enabled']
      }],
      optional: [{
        name: 'Analytics',
        description: 'These cookies are necessary for the website to function properly.',
        cookies: ['cookie_control_consent', 'cookie_control_enabled']
      }],
    }
  },
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