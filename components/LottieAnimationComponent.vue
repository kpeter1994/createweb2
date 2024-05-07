<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import lottie from 'lottie-web';
import animationData from '@/assets/animation/growth.json';  // A JSON adatok importálása

const lottieContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  if (lottieContainer.value) {
    lottie.loadAnimation({
      container: lottieContainer.value,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animationData  // Itt használjuk az importált adatokat
    });
  }
});

</script>

<template>
  <div>
    <div ref="lottieContainer" class="w-full h-auto"></div>
  </div>

</template>

<style scoped></style>
