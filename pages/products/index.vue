<template>
  <div>
    <div class='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      <div v-for='p in products'>
        <ProductCard :product='p' />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products',
})
// fetch products
const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
  title: 'Merch | Nuxt 3',
  meta: [
    { name: 'description', content: 'Merch on Nuxt 3 project' }
  ]
})
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 32px;
}

p {
  margin-bottom: 20px 0;
}
</style>
