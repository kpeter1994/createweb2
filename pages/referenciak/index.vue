<script lang="ts" setup>
import InputSwitch from 'primevue/inputswitch';

useHead({
  title: 'Referenciák | Createweb',
  htmlAttrs: {
    lang: 'hu',
  },
  meta: [
    {
      name: "description",
      content: 'Néhány elkészített weboldal referencia',
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

</script>

<template>
  <Transition name="slide-fade" appear>
    <main>
      <section class="bg-white px-3 bg-grid bg-contain lg:bg-cover overflow-hidden rounded-t-[2rem]">
        <div class="bg-gradient-to-b from-transparent to-white">
          <NavComponent/>
          <div class="container mx-auto flex items-center gap-1 pt-6">
            <NuxtLink to="/"><i class="pi pi-home"></i></NuxtLink>
            <i class="pi pi-angle-right"></i>
            <span>Referenciák</span>

          </div>
          <div class="max-w-7xl mx-auto ">
            <div class="max-w-2xl mt-12">
              <span class="block font-serif">Referenciák</span>
              <h1 class="font-serif text-5xl text-neutral-950 mt-4 mb-3">Legutóbbi munkáim</h1>

            </div>
          </div>
        </div>
      </section>

      <section class="bg-white">
        <div class="container mx-auto lg:flex flex-wrap justify-center">

          <ContentList
              path="/referenciak"
              :query="{
            limit: 20,
            sort: [{date: -1}]
          }" v-slot="{list}">

              <ReferenceComponent
                  v-for="reference in list"
                  :key="reference._path"
                  :slug="reference.slug"
              />

          </ContentList>
        </div>


      </section>


    </main>

  </Transition>


</template>

<style scoped></style>