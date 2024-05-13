<script lang="ts" setup>
import Man from "assets/animation/man.json";
import {Vue3Lottie} from "vue3-lottie";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

});
</script>

<template>
  <div class="rounded-3xl my-20 border lg:flex bg-amber-100">
    <div class="p-6 lg:w-3/5 flex flex-col gap-3 justify-center">
      <div>
        <span class="text-2xl block font-extrabold mb-3 font-serif">{{props.title}}</span>
        <span class="text-base block">{{props.description}}</span>
      </div>

      <div class="mt-3">
        <ButtonComponent class="no-underline" rel="nofollow" to="/ajanlatkeres">Ajánlatot kérek</ButtonComponent>
      </div>
    </div>

    <div class="lg:w-2/5 lg:p-6 flex justify-center items-center">
<!--      <img class="w-full" src="/image/cta1.svg" alt="sikeres weboldal">-->
      <client-only>
        <div class="flex scale-x-[-1]">
          <Vue3Lottie
              :animation-data="Man"

          />
        </div>

      </client-only>
    </div>

  </div>
</template>

<style scoped></style>
