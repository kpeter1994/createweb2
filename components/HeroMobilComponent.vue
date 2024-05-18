<script lang="ts" setup>

import Guarantee from "assets/animation/Guarantee.json";

const Time = () => {
  const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
  const time = new Date().toLocaleTimeString([], options);
  return { time };
};
</script>

<template>
  <div>
    <div class="overflow-hidden relative mx-auto max-w-[380px] h-[490px] bg-white rounded-t-[60px]">
      <div class="p-6 relative w-full mx-auto bg-gray-50 rounded-t-[60px]">
        <div class="flex justify-between items-center px-3">
          <span class="block text-sm ml-2">{{Time().time}}</span>
          <div class="flex gap-1">
            <img src="/image/mobil/MobileSignal.svg" alt="jelerősség">
            <img src="/image/mobil/Wifi.svg" alt="wifi">
            <img src="/image/mobil/Battery.svg" alt="töltötség">
          </div>
        </div>
        <div class="mt-20 bg-white shadow pt-20 rounded-t-[1rem] flex pb-40">
          <client-only>
            <div class="flex w-full justify-center">
              <Vue3Lottie
                  :animation-data="Guarantee"
                  :width="230"
              />
            </div>

          </client-only>
        </div>
        <NotificationComponent />


      </div>

      <img class="absolute top-0 w-full pointer-events-none" src="/image/iphone.svg"  alt="weboldal fejlesztés" />
    </div>
  </div>
</template>

<style scoped></style>
