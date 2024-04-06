<script lang="ts" setup></script>

<template>
  <div class="max-w-sm mx-auto relative rounded-[100px]">
    <div class="absolute bg-gray-100 top-1 left-1 right-1 bottom-1 rounded-[80px] overflow-hidden px-4 ">
      <div class="flex justify-between items-center px-3 absolute  top-6 left-3 right-3">
        <span class="block text-sm ml-2">14:14</span>
        <div class="flex gap-1">
          <img src="/image/mobil/MobileSignal.svg" alt="jelerősség">
          <img src="/image/mobil/Wifi.svg" alt="wifi">
          <img src="/image/mobil/Battery.svg" alt="töltötség">
        </div>
      </div>
      <slot>

      </slot>
    </div>
    <img class="w-full relative pointer-events-none" src="/image/iphone.svg" alt="weboldal fejlesztés">
  </div>
</template>

<style scoped></style>
