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
    <div class="lg:w-[30%] relative">
      <NuxtLink :to="'/blog/' + props.slug">
        <NuxtImg :src="props.image" :alt="props.title" sizes="sm:460px md:768px lg:380px" class="w-full aspect-[6/4] object-cover rounded-2xl   " />
      </NuxtLink>
    </div>
    <div class="lg:w-[70%] flex flex-col justify-between">
      <div>
        <NuxtLink :to="'/blog/' + props.slug" class="text-neutral-950 hover:text-neutral-800 font-serif text-3xl mb-6 block">
          {{props.title}}
        </NuxtLink>
        <p>{{props.description}}</p>
      </div>

      <div class="mt-3">
        <ButtonComponent class="bg-transparent" :to="'/blog/' + props.slug"><i class="pi pi-book mr-1.5"></i>Elolvasom</ButtonComponent>
      </div>


    </div>

  </article>
</template>

<style scoped></style>
