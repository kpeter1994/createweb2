<script lang="ts" setup>

import Article from "~/pages/Article.vue";

const {slug} = useRoute().params

const content: any = ref(null);
const toc: any = ref(null);

onMounted(() => {
  if (content.value) {
    const headers = content.value.querySelectorAll('h2, h3');
    const tocList = toc.value.querySelector('.toc-list');

    headers.forEach(header => {
      const id = header.textContent.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/\s+/g, '-');
      header.id = id;

      const tocItem = document.createElement('li');
      const tocLink = document.createElement('a');
      tocLink.href = `#${id}`;
      tocLink.textContent = header.textContent;
      tocLink.className = header.tagName.toLowerCase() === 'h2' ? 'font-bold block text-blue-500 underline' : 'ml-4 block text-blue-500';

      tocItem.appendChild(tocLink);
      tocList.appendChild(tocItem);
    });
  }
});
</script>

<template>
  <Transition name="slide-fade" appear>
    <main>
      <article>
        <ContentDoc :path="`/posts/${slug}`" v-slot="{doc}">
          <section id="hero" class="bg-white bg-grid bg-contain lg:bg-cover overflow-hidden rounded-t-[2rem]">
            <div class="bg-gradient-to-b from-transparent to-white">
              <NavComponent/>
              <div class="max-w-2xl mx-auto">
                <span class="block text-center">{{ slug }}</span>
                <h1 class="font-serif text-5xl text-center text-neutral-950 mt-4 mb-3">{{ doc.title }}</h1>
              </div>
            </div>

          </section>

          <section class="bg-white text-lg text-neutral-800">
            <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
              <div class="lg:w-3/12 border-r px-3">
                <div ref="toc" class="sticky top-20">
                  <span class="font-bold mb-3 font-serif">Tartalomjegyzék</span>
                  <ul class="max-w-md space-y-2 list-inside transition-all text-sm 2xl:text-base toc-list"></ul>
                </div>

              </div>
              <div ref="content" class="lg:w-8/12 pt-12 px-3 content">

                <ContentRenderer :value="doc"/>

              </div>
              <div class="hidden xl:block xl:w-3/12 ">
                <div>
                  <img class="w-[70px]" src="/image/profil2.png" alt="">
                  <span class="font-serif text-center text-sm">Kovács Péter</span>
                  <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dolorem
                    id
                    incidunt laboriosam
                    laborum libero magni non quae rem?</p>
                </div>

                <div class="mt-20 sticky top-20">
                  <BlogSubscribeComponent/>
                </div>

              </div>
            </div>

          </section>
        </ContentDoc>
      </article>
    </main>
  </Transition>

</template>

<style scoped></style>
