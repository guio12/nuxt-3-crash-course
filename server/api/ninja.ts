export default defineEventHandler(async (event) => {
  // handle query params
  //const { name } = getQuery(event)

  // handle post data
  //const { age } = await readBody(event)

  // API call with private key
  const { data } = await $fetch(
    'https://api.currencyapi.com/v3/latest?apikey=cur_live_uI7kIoOhJxzFi9LvlgR8xQ3B20CNiKILkIL7OymX'
  )
  // we use $fetch instead of useFetch because we're in a BE context

  return data
})
