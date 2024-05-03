<script lang="ts" setup>

import Article from "~/pages/article.vue";
import Chip from 'primevue/chip';
import {useDateFormatter} from "~/composables/useDateFormatter";


const {slug} = useRoute().params

const content: any = ref(null);
const toc: any = ref(null);

defineOgImageComponent('NuxtSeo' )


onMounted(() => {
  if (content.value) {
    const headers = content.value.querySelectorAll('h2, h3') as NodeListOf<HTMLElement>; // Casting to NodeListOf<HTMLElement>
    const tocList = toc.value.querySelector('.toc-list') as HTMLElement; // Ensure tocList is HTMLElement

    headers.forEach((header: HTMLElement) => { // Explicitly declaring header as HTMLElement
      const id = header.textContent?.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/\s+/g, '-') || '';
      header.id = id;

      const tocItem = document.createElement('li');
      const tocLink = document.createElement('a');
      tocLink.href = `#${id}`;
      tocLink.textContent = header.textContent;
      tocLink.className = header.tagName.toLowerCase() === 'h2' ? 'font-bold text-blue-500 hover:text-blue-400 block bg-opacity-50 underline p-1' : 'ml-4 block text-blue-500 hover:text-blue-400';

      tocItem.appendChild(tocLink);
      tocList.appendChild(tocItem);
    });
  }
});


useHead({
  title: 'Céges Weboldal készítés | Createweb',
  htmlAttrs: {
    lang: 'hu',
  },
  meta: [
    {
      name: "description",
      content: 'Ha nem szeretnéd magad a szerencsére bízni, a akkor neked is egy olyan weboldalra van szükséged ami kiszámíthatóságot hoz a vállalkozásod mindennapjaiba. Ne kockáztass! Kérj ajánlatot!',
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
      <article>
        <ContentDoc :path="`/posts/${slug}`" v-slot="{doc}">
          <section id="hero" class="bg-white bg-grid bg-contain lg:bg-cover overflow-hidden rounded-t-[2rem]">
            <div class="bg-gradient-to-b from-transparent to-white">
              <NavComponent/>
              <div class="max-w-2xl mx-auto px-3">
                <div class="flex gap-1 justify-center flex-wrap">
                  <Chip v-for="tag in doc.tags" :label="tag" />
                </div>

                <h1 class="font-serif text-3xl lg:text-5xl text-center text-neutral-950 mt-4 pb-6">{{ doc.title }}</h1>
              </div>
            </div>

          </section>

          <section class="bg-white text-neutral-800">
            <div class="container mx-auto flex flex-col lg:flex-row gap-6">
              <div class="lg:w-3/12 border-r px-3 pb-20">

                <div ref="toc" class="sticky top-3 2xl:top-20 h-[800px] overflow-y-auto px-1">
                  <span class="font-bold mb-3 font-serif block"><i class="pi pi-book mr-1.5 opacity-70"></i>Tartalomjegyzék</span>
                  <ul class="max-w-md space-y-2 list-inside transition-all text-sm 2xl:text-base toc-list"></ul>
                </div>

              </div>
              <div ref="content" class="lg:w-8/12 lg:pt-12 px-3 content pb-20">

                <span class="font-semibold text-gray-500 "><i class="pi pi-calendar-clock mr-1.5 opacity-70"></i>Frissítve: <time :datetime="doc.date">{{useDateFormatter(doc.date)}}</time></span>
                <ContentRenderer :value="doc"/>

              </div>
              <div class="hidden xl:block xl:w-3/12 ">
                <div>
                  <NuxtImg src="image/profil2.png" sizes="sm: width: 70px" alt="Kovács Péter" class="object-cover"/>
                  <span class="font-serif mb-1.5 block">Kovács Péter</span>
                  <p class="text-sm">Több mint négy éve foglalkozom webhelytervezéssel, webfejlesztéssel és online marketinggel. A BGE-n tanultam gazdálkodást és menedzsmentet, majd később a webfejlesztéssel és webdesignnal kezdtem foglalkozni, hogy ezeket az ismereteket egy közös rendszerbe tudjam ötvözni.</p>
                </div>


                <div class="mt-20 sticky top-20">
                  <div class="flex gap-3 mb-8 items-center">
                    <span>Megosztás:</span>
                    <SocialShare class="rounded-full p-1" network="facebook" :label="false"  />
                    <SocialShare network="twitter" :label="false" />
                  </div>

                  <BlogSubscribeComponent/>
                </div>

              </div>
            </div>


          </section>

          <section class="bg-neutral-50">
            <div class="container mx-auto flex">
              <div class="lg:w-8/12 mx-auto">
                <ArticleRecommendationComponent class="my-20"></ArticleRecommendationComponent>
              </div>
            </div>
          </section>
        </ContentDoc>
      </article>
    </main>
  </Transition>

</template>

<style>

.content h2 {
  @apply font-serif text-2xl mb-4 mt-12;
}
.content h3 {
  @apply  text-xl mb-4 mt-12 font-serif;
}
.content img {
  @apply w-full mb-8 rounded-[2rem];
}
.content p {
  @apply mb-3 text-lg leading-relaxed;
}

.content ul{
  @apply list-disc list-inside space-y-1.5 ml-6 mt-1.5 mb-3;
}
.content ol{
  @apply list-decimal list-outside space-y-1.5 ml-6 mt-1.5 mb-3;
}
.content li{
  @apply ml-3;
}

.content blockquote {
  @apply border-l-8 pl-6 my-12 text-2xl font-semibold opacity-90;
}

.content a {
  @apply underline text-blue-500;
}

.content a:hover {
  @apply text-blue-600 transition-all duration-300
}

.content .cta-btn{
  @apply  no-underline transition-all duration-300;
}

.content .cta-btn:hover{
  @apply bg-amber-300
}
</style>
