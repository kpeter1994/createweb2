<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },

});
</script>

<template>
  <div class="py-6">
    <NuxtImg :src="props.src" sizes="xs:480px sm:768px md:1024px lg:860px xl:960px"
             :alt="props.alt"
             :title="props.alt"
             class="w-full h-full object-cover"></NuxtImg>
  </div>


</template>

<style scoped>

</style>