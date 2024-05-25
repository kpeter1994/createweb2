<script lang="ts" setup>
import Guarantee from '@/assets/animation/Guarantee.json'
</script>

<template>
  <div class="relative flex justify-center items-center">
    <div class="absolute top-2 bottom-6 w-[80%] left-1/2 right-1/2 -translate-x-1/2 mx-auto bg-cover bg-white rounded-lg pt-1 px-2 overflow-hidden">
<!--      <MiniWebsiteComponent/>-->
      <div class="w-full h-full relative ">
        <NuxtImg src="/image/landing/laptop.jpg" alt="" class="w-full" />


      </div>
    </div>
    <img class="w-full relative pointer-events-none" src="/assets/image/laptop.svg" alt="">

  </div>
</template>

<style scoped>
@keyframes moveUpDown {
  0% {
    transform: translateY(0);
  }
  90% {
    transform: translateY(-2500px); /* Adjust the value as needed */
  }
  100% {
    transform: translateY(0);
  }
}

.moving-image {
  animation: moveUpDown 20s linear infinite;
  animation-delay: 1s; /* Set the delay time as needed */
}
</style>
