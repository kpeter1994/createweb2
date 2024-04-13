<script lang="ts" setup>

</script>

<template>
  <header class="py-12 px-3">
    <div class="max-w-7xl mx-auto flex justify-between">
      <NuxtLink to="/" class="flex gap-1.5 items-center">
        <img width="35px" src="../assets/image/logo.svg" alt="">
        <span class="font-semibold text-lg">Create Web</span>
      </NuxtLink>
      <nav class="gap-3 items-center hidden lg:flex">
        <NuxtLink to="/article" class="text-gray-500 hover:text-gray-900">Cikkek</NuxtLink>
        <NuxtLink to="/blog" class="text-gray-500 hover:text-gray-900">Blog</NuxtLink>
        <NuxtLink to="/" class="text-gray-500 hover:text-gray-900">Home</NuxtLink>
        <NuxtLink to="/" class="text-gray-500 hover:text-gray-900">Teszt Blog</NuxtLink>
        <NuxtLink to="/ajanlatkeres" class="text-white bg-black px-4 py-2.5 rounded-full hover:text-gray-100 text-sm font-semibold">Ajánlatot kérek</NuxtLink>
      </nav>
    </div>

  </header>
</template>

<style scoped></style>
