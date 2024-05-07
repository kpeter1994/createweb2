<script lang="ts" setup>

</script>

<template>
  <div class="h-12 lg:hidden"></div>
  <header class="hidden lg:block py-12 px-3">
    <div class="max-w-7xl 2xl:max-w-[95%] mx-auto flex justify-between">
      <NuxtLink to="/" class="flex gap-1.5 items-center">
        <img width="35px" src="../assets/image/logo.svg" alt="createweb.hu">
        <span class="font-semibold text-lg">Createweb</span>
      </NuxtLink>
      <nav class="gap-3 items-center hidden lg:flex font-semibold">
        <NuxtLink to="/" class="pb-1 text-gray-500 hover:text-gray-900 hover:border-b-4 hover:border-amber-400 translation duration-200" active-class="border-amber-300 border-b-4">
          Főoldal
        </NuxtLink>
        <NuxtLink to="/referenciak" class="pb-1 text-gray-500 hover:text-gray-900 hover:border-b-4 hover:border-amber-400 translation duration-200" active-class="border-amber-300 border-b-4">Referenciák</NuxtLink>
        <NuxtLink to="/blog" class="pb-1 text-gray-500 hover:text-gray-900 hover:border-b-4 hover:border-amber-400 translation duration-200" active-class="border-amber-300 border-b-4">Blog</NuxtLink>
        <NuxtLink to="/landing/land" class="pb-1 text-gray-500 hover:text-gray-900 hover:border-b-4 hover:border-amber-400 translation duration-200" active-class="border-amber-300 border-b-4">Landing</NuxtLink>
        <NuxtLink to="/ajanlatkeres" class="text-white bg-black px-4 py-2.5 rounded-full hover:text-gray-100 text-sm font-semibold">Ajánlatot kérek</NuxtLink>
      </nav>
    </div>

  </header>
</template>

<style scoped>


</style>
