<script lang="ts" setup>
const props = defineProps<{
  title: string;
  description: string;
  image: string;
}>();
</script>

<template>
  <div class="md:w-1/2 lg:w-1/3 p-3">
    <div class="p-6 bg-neutral-800 h-full bg-grid3 bg-cover text-white rounded-3xl ring-1 ring-neutral-950/5 transition ">
      <img class="w-12" :src="'/image/services/'+ props.image" :alt="props.title">
      <p class="mt-6 font-semibold">{{props.title}}</p>
      <p class="mt-2">{{props.description}}</p>
    </div>
  </div>
</template>

<style scoped></style>
