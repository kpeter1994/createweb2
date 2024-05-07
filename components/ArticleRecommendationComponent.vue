<script lang="ts" setup>
const props = defineProps<{
  tags: Array<string>
}>()
</script>

<template>
  <div class="px-3">
    <h2 class="font-serif text-2xl mb-4 mt-12">Ez is érdekelhet</h2>
    <div class="flex flex-col lg:flex-row flex-wrap w-full">
      <ContentList
          path="/posts"
          :query="{
        draft:false ,
        limit: 3,
        where: {
          slug: {
            $ne: $route.params.slug
          },
          tags: {
            $in: props.tags
          }
        },
        sort: [{date: -1}]
      }" v-slot="{list}">

        <NuxtLink v-for="post in list"
                  :to="'/blog/' + post.slug"
                  class="w-full lg:w-1/3">

          <div class="p-3">

            <div class="overflow-hidden rounded-2xl">
              <NuxtImg class="w-full" :src="post.thumbnail" :alt="post.title"/>
            </div>

            <div>
              <p class="text-neutral-950 mt-4 hover:text-neutral-800 font-serif text-3xl mb-3 block">
                {{ post.title }}
              </p>

              <p class="">{{ post.description }}</p>

            </div>
          </div>

        </NuxtLink>

      </ContentList>

    </div>
    <div class="mt-6">
      <ButtonComponent class="items-center bg-transparent gap-1.5" to="/blog">Összes cikk <i
          class="pi pi-angle-right"></i></ButtonComponent>
    </div>
  </div>

</template>

<style scoped></style>
