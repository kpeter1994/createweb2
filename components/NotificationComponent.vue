<script lang="ts" setup>

const showNotification1 = ref(false);
const showNotification2 = ref(false);


onMounted(() => {
  const interval = setInterval(() => {
    // Az első értesítés megjelenítése
    showNotification1.value = true;

    // 1 másodperc múlva az második értesítés megjelenítése
    setTimeout(() => {
      showNotification2.value = true;
    }, 1000);

    // 5 másodperc múlva az első értesítés eltüntetése
    setTimeout(() => {
      showNotification1.value = false;
    }, 5000);

    // 6 másodperc múlva (5 másodperc + 1 másodperc) a második értesítés eltüntetése
    setTimeout(() => {
      showNotification2.value = false;
    }, 6000);
  }, 3000); // Az egész ciklus 10 másodpercenként ismétlődik

  // Időzítők megtisztítása a komponens eltávolításakor
  onUnmounted(() => {
    clearInterval(interval);
  });
});

</script>

<template>
  <div class="absolute top-0  left-1 right-1 px-6 pt-14">

    <Transition name="slide-up">
        <div v-if="showNotification1" class="transition-all w-full">
          <div class="bg-black bg-opacity-50 p-3 flex items-center backdrop-blur-2xl relative rounded-xl">
            <div class="flex gap-3 items-center">
              <img class="w-8" src="/image/gmail.svg" alt="">
              <p class="font-semibold text-white">AJÁNLATKÉRÉS</p>
            </div>
            <span class="absolute top-2 right-3 text-white text-sm opacity-60">most</span>
          </div>

        </div>
    </Transition>
    <Transition class="mt-1.5 transition-all" name="slide-up">
        <div v-if="showNotification2" class="transition-all w-full">
          <div class="bg-black bg-opacity-50 p-3 flex items-center backdrop-blur-2xl relative rounded-xl">
            <div class="flex gap-3 items-center">
              <img class="w-8" src="/image/gmail.svg" alt="">
              <p class="font-semibold text-white">AJÁNLATKÉRÉS</p>
            </div>
            <span class="absolute top-2 right-3 text-white text-sm opacity-60">most</span>
          </div>

        </div>
    </Transition>

  </div>
</template>

<style scoped>


</style>
