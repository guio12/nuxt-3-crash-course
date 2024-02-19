<script setup lang="ts">
/* const { data } = await useFetch('/api/ninja?name=mario', {
  method: 'post',
  body: { age: 30 }
}) */

const { data } = await useFetch('/api/currency/GBP')
</script>

<template>
  <div>
    <NuxtLayout>
      <div>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ex explicabo
          quasi dicta sint voluptatem est vero rerum nihil delectus nobis
          voluptatum exercitationem, quos expedita? Explicabo optio esse
          laboriosam beatae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ex explicabo
          quasi dicta sint voluptatem est vero rerum nihil delectus nobis
          voluptatum exercitationem, quos expedita? Explicabo optio esse
          laboriosam beatae.
        </p>
        <div>{{ data }}</div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
