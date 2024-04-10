<script lang="ts" setup>
const props = defineProps<{
  title: string
  description: string
  image: string
  slug: string
}>()
</script>

<template>
  <article class="flex flex-col lg:flex-row gap-6 pt-16 border-t mb-16 group">
    <div class="lg:w-[30%] ">
      <NuxtLink :to="props.slug">
        <img class="w-full aspect-[6/4] object-cover rounded-2xl saturate-0 contrast-150 group-hover:saturate-100 group-hover:contrast-100 transition-all" :src="props.image" :alt="props.title">
      </NuxtLink>
    </div>
    <div class="lg:w-[70%]">
      <NuxtLink :to="props.slug" class="text-neutral-950 hover:text-neutral-800 font-serif text-3xl mb-6 block">
        {{props.title}}
      </NuxtLink>
      <p>{{props.description}}</p>
      <NuxtLink :to="props.slug"
                class="bg-black mt-6 text-white px-4 py-2.5 rounded-full inline-flex hover:text-gray-100 text-sm font-semibold">
        Elolvasom
      </NuxtLink>

    </div>

  </article>
</template>

<style scoped></style>
