<script setup>
import { ref } from 'vue'

import FloatLabel from 'primevue/floatlabel';

const showPopup = ref(false)

function closePopup() {
  showPopup.value = false;
}

function checkExitIntent(e) {
  // Implementáld az egérmozgatás alapján történő kilépési szándék felismerését
  // Például, ha az egér a böngésző felső része felé mozog
  if (e.clientY < 10) {
    showPopup.value = true;
  }
}

onMounted(() => {
  document.addEventListener('mouseleave', checkExitIntent);
});

onBeforeUnmount(() => {
  document.removeEventListener('mouseleave', checkExitIntent);
});


</script>

<template>
<Transition name="fade">
  <div v-if="showPopup" class="fixed top-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-lg z-50 flex justify-center items-center p-3">
    <div class="bg-white max-w-2xl p-6 rounded-2xl shadow-2xl relative">
      <button @click="closePopup" class="absolute top-3 right-3">
        <i class="pi pi-times-circle text-xl"></i>
      </button>

      <h2 class="text-4xl font-bold mb-4 font-serif">A vevőid megérdemlik, hogy megismerjék a vállalkozásod nagyszerőségét</h2>
      <p>Kérj egy ingyenes weboldal elemzést</p>
      <div ref="primaryButton" class="mt-6 flex flex-col gap-3">

          <div>
            <label for="">Weboldalad címe</label>
            <input class="border w-full p-1.5 rounded-lg" type="text">
          </div>
          <div class="mt-3">
            <label for="">Email cím</label>
            <input class="border w-full p-1.5 rounded-lg" type="text">
          </div>

          <div>
            <ButtonComponent class="bg-amber-600 text-white hover:bg-amber-400 border-blue-600 font-bold hover:border-blue-500" >Küldés</ButtonComponent>
          </div>


      </div>
    </div>
  </div>
</Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>