<script setup lang="ts">
defineProps<{
  product: object, // ProductI
}>()
</script>

<template>
  <div class="card text-center">
    <img :src="product.image" alt="product thumbnail" class="thumbnail">
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View details</p>
    </NuxtLink>
  </div>
</template>

<style scoped>
  .thumbnail {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
  }
</style>
