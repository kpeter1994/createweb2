<script lang="ts" setup>
const props = defineProps<{
  title: string
  description: string
  image: string
  slug: string
}>()
</script>

<template>
  <article class="flex flex-col lg:flex-row gap-6 pt-16 border-t mb-16 ">
    <div class="lg:w-[30%] relative after:absolute after:top-0 after:pointer-events-none after:bottom-0 after:left-0 after:right-0 after:bg-amber-300 after:rounded-2xl after:mix-blend-multiply group-hover:after:opacity-0 after:content-[''] duration-300">
      <NuxtLink :to="props.slug">
        <NuxtImg :src="props.image" :alt="props.title" sizes="sm:460px md:768px lg:380px" class="w-full aspect-[6/4] object-cover rounded-2xl saturate-0 contrast-200 " />
      </NuxtLink>
    </div>
    <div class="lg:w-[70%]">
      <NuxtLink :to="props.slug" class="text-neutral-950 hover:text-neutral-800 font-serif text-3xl mb-6 block">
        {{props.title}}
      </NuxtLink>
      <p>{{props.description}}</p>
      <div class="mt-3">
        <ButtonComponent :to="props.slug">Elolvasom</ButtonComponent>
      </div>


    </div>

  </article>
</template>

<style scoped></style>
