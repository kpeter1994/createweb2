<script lang="ts" setup>

useHead({
  title: 'Cikkek SEO, marketing és design témákban ',
  htmlAttrs: {
    lang: 'hu',
  },
  meta: [
    {
      name: "description",
      content: 'Optimalizált SEO cikkek, innovatív marketingstratégiák és kreatív design ötletek a hatékony kommunikációért',
    },
    {
      name: "charset",
      content: "UTF-8",
    }
  ],
  link: [
    { rel: 'icon', type: 'image/ico', href: 'favicon/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '32x32', href: 'favicon/apple-touch-icon.svg' },
  ]
});
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
              <h1 class="font-serif text-5xl text-neutral-950 mt-4 mb-3">Cikkek SEO, marketing és design témákban</h1>
              <p class="text-lg">Bővítsd ismereteidet SEO, marketing és design témákban: friss ötletek és stratégiák a sikerhez.</p>

            </div>
          </div>

        </div>

      </section>
      <section class="bg-white pt-20 px-3">
        <div class="max-w-7xl mx-auto flex flex-col lg:flex-row">
          <div class="lg:w-2/12 order-2 lg:order-1">
            <span class="block font-serif mb-3">Témák</span>
            <ul class="space-y-2">
              <li>SEO</li>
              <li>Marketing</li>
              <li>Hírdetés</li>
              <li>Design</li>
              <li>SEO</li>
            </ul>
          </div>
          <div class="lg:w-10/12 order-1 lg:order-2 pb-20">
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


        </div>

      </section>
    </main>
  </Transition>


</template>

<style scoped></style>
