<script setup lang="ts">
/* definePageMeta({
  layout: 'products',
}) */

//instead of <NuxtLayout name=...> like below

// fetch the products
const { data: products } = await useFetch('https://fakestoreapi.com/products')

// override the <head> tag content, method 2
useHead({
  title: 'Nuxt Dojo - Merch',
  meta: [
    { name: 'description', content: 'Nuxt 3 merch' }
  ]
})
</script>

<template>
  <div>
    <NuxtLayout name="products">
      <div class="grid grid-cols-4 gap-5">
        <div v-for="product in products">
          <ProductCard :product="product" />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
