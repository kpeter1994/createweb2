<script lang="ts" setup>
</script>

<template>
  <div class="bg-black text-neutral-100">
    <div class="container mx-auto lg:flex py-20 px-3 gap-6">

      <div class="lg:w-1/3">
        <div class="flex gap-1.5 items-center">
          <img class="w-12" src="../assets/image/logo.svg" alt="Createweb">
          <span class="text-xl">Createweb</span>
        </div>
        <p class="mt-3">Egyedi weboldal készítés, a legmoderneb technológiákkal</p>
      </div>
      <div class="lg:w-1/3">


        <h2 class="font-serif my-6">Elérhetőségek</h2>
        <div class="flex gap-6 py-3 border-b border-opacity-15">
          <span class="font-semibold">Név</span><p>Kovács Péter</p>
        </div>
        <div class="flex gap-6 py-3 border-b border-opacity-15">
          <span class="font-semibold">Email</span><a class="text-blue-300 underline" href="mailto:info@createweb.hu">info@createweb.hu</a>
        </div>
        <div class="flex gap-6 py-3 border-b border-opacity-15">
          <span class="font-semibold">Telefonszám</span><p><a href="tel:+36204784329">+36 (20) 47 84 329</a></p>
        </div>

      </div>
      <div class="lg:w-1/3 text-lg">
        <h2 class="font-serif my-6">Linkek</h2>
        <ul class="space-y-3 transition">
          <li><NuxtLink class="underline text-blue-300 hover:text-blue-400" to="/">Főoldal</NuxtLink></li>
          <li><NuxtLink class="underline text-blue-300 hover:text-blue-400" to="/referenciak">Referenciák</NuxtLink></li>
          <li><NuxtLink class="underline text-blue-300 hover:text-blue-400" to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink class="underline text-blue-300 hover:text-blue-400" to="/ajanlatkeres">Kapcsolat</NuxtLink></li>
        </ul>

      </div>


    </div>
    <div class="container mx-auto flex justify-between p-3 border-t">
      <div>
        <NuxtLink to="/adatkezelesi" class="underline">Adatkezelési tákékoztató</NuxtLink>
      </div>
      <div>
        ©2024 Createweb
      </div>

    </div>
  </div>
</template>

<style scoped></style>
