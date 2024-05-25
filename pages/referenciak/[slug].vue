<script lang="ts" setup>


useHead({
  title: 'bv',
  htmlAttrs: {
    lang: 'hu',
  },
  meta: [
    {
      name: "description",
      content: 'bvb',
    },
    {
      name: "charset",
      content: "UTF-8",
    }
  ],
  link: [
    {rel: 'icon', type: 'image/ico', href: 'favicon/favicon.ico'},
    {rel: 'apple-touch-icon', sizes: '32x32', href: 'favicon/apple-touch-icon.svg'},

  ]
});

const {slug} = useRoute().params




</script>

<template>
  <Transition name="slide-fade" appear>
    <main>

      <ContentDoc :path="`/referenciak/${slug}`" v-slot="{doc}">

        <section class="bg-white px-3 bg-grid bg-contain lg:bg-cover overflow-hidden rounded-t-[2rem]">
          <div class="bg-gradient-to-b from-transparent to-white">
            <NavComponent/>
          </div>
        </section>
        <section class="bg-white px-4">

          <div class="container mx-auto flex items-center gap-1 pt-6">
            <NuxtLink to="/"><i class="pi pi-home"></i></NuxtLink>
            <i class="pi pi-angle-right"></i>
            <NuxtLink class="text-blue-600" to="/referenciak">Referenciák</NuxtLink>
            <i class="pi pi-angle-right"></i>
            <span>{{slug}}</span>
          </div>

          <div class="flex flex-col lg:flex-row pt-12">
            <div class="lg:w-1/2">
              <div class="max-w-lg mx-auto mb-20">
                <span class="block font-serif">Referenciák</span>
                <h1 class="font-serif text-5xl text-neutral-950 mt-4 mb-3">{{doc.title}}</h1>

                <ul>
                  <li>Design</li>
                  <li>Frontend</li>
                  <li>Backend</li>
                  <li>SEO</li>
                </ul>

<!--                <ButtonComponent class="mt-6 cursor-pointer">Weboldal megtekintése</ButtonComponent>-->


              </div>

              <div>
                <NuxtImg :src="doc.thumbnail" format="webp"
                         sizes="xs: 476px sm: 645px md: 1256px lg:1256px" alt="Referenciák"/>
              </div>


            </div>
            <div class="lg:w-1/2 mb-8">
              <div class="rounded-[2rem] shadow-2xl overflow-hidden">
                <NuxtImg class="w-full" :src="doc.fullImage" format="webp"
                         sizes="xs: 476px sm: 645px md: 1256px lg:1256px" alt="Referenciák"/>
              </div>
            </div>
          </div>
        </section>
      </ContentDoc>


    </main>
  </Transition>


</template>

<style scoped></style>
