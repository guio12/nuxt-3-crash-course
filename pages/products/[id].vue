<script setup lang="ts">
/* definePageMeta({
  layout: 'products',
}) */

//instead of <NuxtLayout name=...> like below

const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`

// fetch the product
const { data: product } = await useFetch(uri)

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
    fatal: true, // check the doc
  })
}
</script>

<template>
  <div>
    <!-- Override the <head> tag content, method 1 -->
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"></Meta>
    </Head>

    <NuxtLayout name="products">
      <ProductDetails :product="product" />
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
