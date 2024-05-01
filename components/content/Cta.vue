<script lang="ts" setup>
</script>

<template>
  <div class="rounded-3xl my-20 border lg:flex bg-amber-100">
    <div class="p-6 lg:w-3/5 flex flex-col gap-3 justify-center">
      <div>
        <span class="text-2xl block font-extrabold mb-3 font-serif">Szeretnéd, ha a weboldalad magasba repítené a vállakozásod?</span>
        <span class="text-base block">Weboldalad az első benyomás, amit ügyfeleid látnak. Segítek, hogy ez lenyűgöző legyen! </span>
      </div>

      <div class="mt-3">
        <ButtonComponent class="no-underline" to="/ajanlatkeres">Ajánlatot kérek</ButtonComponent>
      </div>
    </div>

    <div class="lg:w-2/5 lg:p-6 flex justify-center items-center">
      <img class="w-full" src="/image/cta1.svg" alt="sikeres weboldal">
    </div>

  </div>
</template>

<style scoped></style>
