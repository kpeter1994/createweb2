<script lang="ts" setup>

const props = defineProps({
  name: String,
  stars: Number,
  text: String,
})
</script>

<template>
  <div class="rounded-3xl bg-white p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50">
    <span class="font-serif text-lg font-semibold block mb-3">{{props.name}}</span>
    <div class="flex gap-1 mb-4">
      <StarComponent v-for="n in props.stars"  class="w-6 fill-yellow-500" />

    </div>
    <p>{{props.text}}</p>
  </div>
</template>

<style scoped></style>
