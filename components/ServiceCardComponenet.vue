<script lang="ts" setup>
const props = defineProps<{
  title: string;
  description: string;
  image: string;
}>();
</script>

<template>
  <div class="md:w-1/2 lg:w-1/3 p-3">
    <div class="service-card">
      <img class="w-12" :src="'/image/services/'+ props.image" :alt="props.title">
      <h3>{{props.title}}</h3>
      <p class="mt-2">{{props.description}}</p>
    </div>
  </div>
</template>

<style>
.service-card {
 @apply p-6 bg-neutral-800 h-full bg-grid3 bg-cover text-white rounded-3xl ring-1 ring-neutral-950/5 transition
}

.service-card h3 {
 @apply mt-6 text-xl font-semibold
}
</style>
