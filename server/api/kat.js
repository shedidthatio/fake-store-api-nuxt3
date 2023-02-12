export default defineEventHandler(async (event) => {

    // // Handle wuery params
    // const { name } = getQuery(event)

    // // Handle post data 
    // const { age } = await readBody(event)

    // api call with private key
    const { currencyKey } = useRuntimeConfig()

    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`)

    return data
})