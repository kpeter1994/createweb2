<script lang="ts" setup>

</script>

<template>
  <Transition name="slide-fade" appear>
    <ContentDoc :path="`/other/adatkezelesi`" v-slot="{doc}">
    <main>
      <section id="hero" class="bg-white bg-grid bg-contain lg:bg-cover overflow-hidden rounded-t-[2rem]">
        <div class="bg-gradient-to-b from-transparent to-white">
          <NavComponent/>
          <div class="max-w-2xl mx-auto">
            <h1 class="font-serif text-5xl text-center text-neutral-950 mt-4 mb-6">Adatkezelési Nyilatkozat</h1>
          </div>
        </div>

      </section>
      <section class="bg-white">

        <div class="max-w-4xl mx-auto px-3 content pb-20">
          <ContentRenderer :value="doc"/>
        </div>

      </section>




    </main>
    </ContentDoc>
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
