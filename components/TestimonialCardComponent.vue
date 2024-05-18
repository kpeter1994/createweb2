<script lang="ts" setup>

const props = defineProps({
  name: String,
  stars: Number,
  text: String,
})
</script>

<template>
  <div aria-hidden="true" class="testimonial-card">
    <img  src="/image/flat-color-icons_google.svg" alt="google">
    <span>{{props.name}}</span>
    <div class="flex gap-1 mb-4">
      <StarComponent v-for="n in props.stars"  class="w-6 fill-yellow-500" />

    </div>
    <p>{{props.text}}</p>
  </div>
</template>

<style>
.testimonial-card{
  @apply rounded-3xl bg-white p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 relative;
}

.testimonial-card img{
  @apply absolute right-3 top-3 w-8;
}

.testimonial-card span{
  @apply font-serif text-lg font-semibold block mb-3;
}
</style>
