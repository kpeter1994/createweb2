<script lang="ts" setup>
const open = ref(false);
import ScrollTop from 'primevue/scrolltop';

</script>
<template>
  <div class="bg-black pt-3 ">

    <header class="bg-black text-white lg:hidden">

      <div class="flex px-6 justify-between items-center absolute top-6 w-full">
        <NuxtLink to="/" class="flex gap-1.5 items-center">
          <img width="35px" src="../assets/image/logo.svg" alt="createweb.hu">
          <span :class="open ? 'text-white' : 'text-neutral-900' " class="font-semibold text-lg">Createweb</span>
        </NuxtLink>
        <button :class="open ? 'text-white' : 'text-neutral-900' " @click="open = !open">
          <i class="pi pi-times text-lg"></i>
        </button>
      </div>

      <ul v-if="open" class="text-4xl font-semibold mt-12">
        <li>
          <NuxtLink @click="open = !open"
              class="hover:bg-neutral-800 font-serif py-6 px-6 block border-b border-neutral-500 border-opacity-50"
              to="/">
            Főoldal
          </NuxtLink>
        </li>
        <li>
          <NuxtLink @click="open = !open"
              class="hover:bg-neutral-800 font-serif py-6 px-6 block border-b border-neutral-500 border-opacity-50"
              to="/blog">Blog
          </NuxtLink>
        </li>
        <li>
          <NuxtLink @click="open = !open" class="hover:bg-neutral-800 font-serif py-6 px-6 block" to="/ajanlatkeres">Kapcsolat</NuxtLink>
        </li>
      </ul>


    </header>

    <slot/>
    <ScrollTop class="bg-amber-400" />

  </div>


</template>

<style scoped>

</style>
