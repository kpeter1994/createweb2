<script setup lang="ts">

</script>

<template>
  <p class="subtitle">
    <span>
       <slot></slot>
    </span>
  </p>
</template>

<style scoped>
.subtitle{
  @apply font-bold text-xl mt-12 font-serif !important;
}
</style>