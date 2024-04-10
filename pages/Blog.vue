<script lang="ts" setup>
</script>

<template>
  <Transition name="slide-fade" appear>
    <main>
      <section id="hero" class="bg-white px-3 bg-grid bg-contain lg:bg-cover overflow-hidden rounded-t-[2rem]">
        <div class="bg-gradient-to-b from-transparent to-white">
          <NavComponent/>
          <div class="max-w-7xl">
            <div class="max-w-2xl mx-auto mt-12">
              <span class="block font-serif">Blog</span>
              <h1 class="font-serif text-5xl text-neutral-950 mt-4 mb-3">The latest articles and news</h1>
              <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptas.</p>

            </div>
          </div>

        </div>

      </section>
      <section class="bg-white pt-20 px-3">
        <div class="max-w-7xl mx-auto">
          <ContentList
              path="/posts"
              :query="{
            draft:false ,
            limit: 5,
            sort: [{date: -1}]
          }" v-slot="{list}">

              <ArticleComponent
                  v-for="post in list"
                  :key="post._path"
                  :title="post.title"
                  :image="post.thumbnail"
                  :slug="post.slug"
                  :description="post.description"/>

          </ContentList>


        </div>

      </section>
    </main>
  </Transition>


</template>

<style scoped></style>
