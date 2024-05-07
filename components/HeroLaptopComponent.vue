<script lang="ts" setup>
import Man from '@/assets/animation/man.json'
</script>

<template>
  <div class="relative flex justify-center items-center">
    <div class="absolute top-2 bottom-6 w-[80%] left-1/2 right-1/2 -translate-x-1/2 mx-auto bg-cover bg-white rounded-lg pt-1 px-2 overflow-hidden">
<!--      <MiniWebsiteComponent/>-->
      <div class="w-full h-full  bg-cover bg-hero flex justify-center items-center relative p-6">
<!--        <div class="max-w-sm">-->
<!--          <p class="text-4xl text-center font-extrabold">Mi kell egy sikeres weboldalhoz?</p>-->
<!--          <p class="text-center mt-4">Kérj egy ingyenes weboldal elemzést</p>-->
<!--          <div class="flex justify-center mt-6">-->
<!--            <ButtonComponent class="bg-transparent" to="/ajanlatkeres">Ajánlatot kérek</ButtonComponent>-->
<!--          </div>-->
<!--        </div>-->
        <client-only>
          <div class="flex scale-x-[-1]">
            <Vue3Lottie
                :animation-data="Man"
                :height="300"
                :width="300"
            />
          </div>

        </client-only>
      </div>
    </div>
    <img class="w-full relative pointer-events-none" src="/assets/image/laptop.svg" alt="">

  </div>
</template>

<style scoped></style>
