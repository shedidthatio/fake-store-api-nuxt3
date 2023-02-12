// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],

    app: {
        head: {
            title: 'Fake Store Using Nuxt 3',
            meta: [
                { name: 'description', content: 'Intro to Nuxt 3' }
            ],
            link: [
                {
                    rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
                }
            ]
        }
    },
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
    }
})


