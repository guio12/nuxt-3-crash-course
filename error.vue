<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

const handleClearError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="card mt-7 max-w-sm mx-auto text-center">
    <p class="mt-7 text-7xl font-bold">{{ error?.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7">{{ error?.message }}</p>
    <button class="btn my-7" @click="handleClearError">Go Home...</button>
  </div>
</template>

<style scoped></style>
