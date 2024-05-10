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
        <NuxtLink to="/" class="nav-link" active-class="active-link">Főoldal</NuxtLink>
        <NuxtLink to="/referenciak" class="nav-link translation duration-200" active-class="active-link">Referenciák</NuxtLink>
        <NuxtLink to="/blog" class="nav-link translation duration-200" active-class="active-link">Blog</NuxtLink>
        <NuxtLink to="/landing/landing" class="nav-link translation duration-200" active-class="active-link">Landing</NuxtLink>
        <NuxtLink to="/ajanlatkeres" class="text-white border-transparent bg-black  px-4 py-2.5 rounded-full hover:text-gray-100 text-sm font-semibold">Ajánlatot kérek</NuxtLink>

      </nav>
    </div>

  </header>
</template>

<style scoped>

.nav-link{
  @apply pb-1 text-gray-500 border-transparent border-b-4 hover:text-gray-900 hover:border-b-4 hover:border-amber-400 ;
}
.active-link{
  @apply text-gray-900 border-amber-400 border-b-4;
}

</style>
