<script lang="ts" setup>
</script>

<template>
  <div class="px-3">
    <h2 class="font-serif text-2xl mb-4 mt-12">Ez is érdekelhet</h2>
    <div class="flex flex-col lg:flex-row flex-wrap w-full">
      <NuxtLink to="/blog/meta-tag-seo" class="w-full lg:w-1/3">
        <div class="p-3">
          <div class="overflow-hidden rounded-2xl">
            <NuxtImg class="w-full" src="/image/blog/seo-statisztikak.jpg" alt="optima" />
          </div>
          <div>
            <p class="text-neutral-950 mt-4 hover:text-neutral-800 font-serif text-3xl mb-3 block">
              Meta tag-ek SEO-hoz: A legfontosabb címkék, amiket tudni érdemes
            </p>
            <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptas.</p>
          </div>
        </div>

      </NuxtLink>
      <div class="w-full lg:w-1/3">
        <div class="p-3">
          <div class="overflow-hidden rounded-2xl">
            <NuxtImg class="w-full" src="/image/blog/meta-tag-seo/thumbnail.jpg" alt="optima" />
          </div>
          <div>
            <NuxtLink to="/blog/meta-tag-seo" class="text-neutral-950 mt-4 hover:text-neutral-800 font-serif text-3xl mb-3 block">
              Meta tag-ek SEO-hoz: A legfontosabb címkék, amiket tudni érdemes
            </NuxtLink>
            <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptas.</p>
          </div>
        </div>

      </div>

    </div>
    <div class="mt-6">
      <ButtonComponent class="items-center bg-transparent gap-1.5" to="/blog">Összes blog <i class="pi pi-angle-right"></i></ButtonComponent>
    </div>
  </div>

</template>

<style scoped></style>
