<script lang="ts" setup></script>

<template>
  <ul class="text-4xl font-semibold mt-12">
    <li>
      <NuxtLink class="hover:bg-neutral-800 font-serif py-6 px-6 block border-b border-neutral-500 border-opacity-50" to="/">
        Főoldal
      </NuxtLink>
    </li>
    <li>
      <NuxtLink class="hover:bg-neutral-800 font-serif py-6 px-6 block border-b border-neutral-500 border-opacity-50"
                to="/blog">Blog
      </NuxtLink>
    </li>
    <li>
      <NuxtLink class="hover:bg-neutral-800 font-serif py-6 px-6 block" to="/ajanlatkeres">Kapcsolat</NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
