// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@element-plus/nuxt",
    "@nuxtjs/color-mode",
  ],

  srcDir: "src",

  tailwindcss: {
    exposeConfig: true,
    cssPath: "~/assets/css/input.css"
  },

  colorMode: {
    classSuffix: "",
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
  },

  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
});
