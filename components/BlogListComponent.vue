<script lang="ts" setup></script>

<template>
  <div class="flex flex-col lg:flex-row flex-wrap w-full">
    <ContentList
        path="/posts"
        :query="{
        draft:false ,
        limit: 6,
        sort: [{date: -1}]
      }" v-slot="{list}">

      <NuxtLink v-for="post in list"
                :to="'/blog/' + post.slug"
                class="w-full lg:w-1/2">

        <div class="p-3 flex gap-3">

          <div class="overflow-hidden rounded-2xl w-4/12 aspect-[3/2]">
            <NuxtImg class="w-full h-full object-cover" :src="post.thumbnail" :alt="post.title"/>
          </div>

          <div class="w-8/12">
            <p class="text-neutral-950  hover:text-neutral-800 font-serif text-xl lg:text-3xl mb-3 block">
              {{ post.title }}
            </p>


          </div>
        </div>

      </NuxtLink>

    </ContentList>

  </div>
</template>

<style scoped></style>
