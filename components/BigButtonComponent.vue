<script lang="ts" setup>
const props = defineProps<{
  to: string
}>()
</script>

<template>
  <NuxtLink :to="props.to" class="btn bg-amber-300 px-4 border border-black py-2.5 text-xl rounded-full inline-flex items-center text-sm font-semibold transition-all duration-300 no-underline">
    <slot></slot>
  </NuxtLink>
</template>

<style scoped>

.btn {
  @apply text-black no-underline;
}

.btn:hover {
  @apply text-black no-underline;
  box-shadow: 0 8px black;
  transform: translateY(-8px);
}
</style>
