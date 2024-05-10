<script lang="ts" setup>
import InputSwitch from 'primevue/inputswitch';



</script>

<template>
  <Transition name="slide-fade" appear>
    <main>
      <section class="bg-white px-3 bg-grid bg-contain lg:bg-cover overflow-hidden rounded-t-[2rem]">
        <div class="bg-gradient-to-b from-transparent to-white">
          <NavComponent/>
          <div class="max-w-7xl mx-auto ">
            <div class="max-w-2xl mt-12">
              <span class="block font-serif">Kapcsolat</span>
              <h1 class="font-serif text-5xl text-neutral-950 mt-4 mb-3">Vedd fel velem a kapcsolatot!</h1>
              <p class="text-lg">Kérj egyszerű, vagy részletes ajánlatot!</p>

            </div>
          </div>
        </div>
      </section>

      <section class="bg-white">
        <div class="max-w-7xl mx-auto flex flex-col gap-6 lg:flex-row px-3 pt-6 pb-20">
          <div class="lg:w-1/2">
            <h2 class="font-serif mb-6">Elérhetőségek</h2>
            <div class="flex gap-6 py-6 border-b ">
              <span class="font-semibold">Név</span><p>Kovács Péter</p>
            </div>
            <div class="flex gap-6 py-6 border-b ">
              <span class="font-semibold">Email</span><a class="text-blue-500 underline" href="mailto:info@createweb.hu">info@createweb.hu</a>
            </div>
            <div class="flex gap-6 py-6 border-b ">
              <span class="font-semibold">Telefonszám</span><p><a href="tel:+36204784329">+36 (20) 47 84 329</a></p>
            </div>

          </div>
          <div class="lg:w-1/2">
<!--            <div class="border border-neutral-500 p-1.5 rounded-full inline-flex gap-3  text-sm mb-6">-->
<!--              <Button class="px-3 py-2 bg-black text-white rounded-full">Részletes</Button>-->
<!--              <Button class="px-3 py-2">Egyszerű</Button>-->
<!--            </div>-->


            <SimpleFormComponent/>


          </div>

        </div>
      </section>

    </main>
  </Transition>


</template>

<style scoped></style>
