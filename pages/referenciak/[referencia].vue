<script lang="ts" setup>
import InputSwitch from 'primevue/inputswitch';



</script>

<template>
  <Transition name="slide-fade" appear>
    <main>
      <section class="bg-white px-3 bg-grid bg-contain lg:bg-cover overflow-hidden rounded-t-[2rem]">
        <div class="bg-gradient-to-b from-transparent to-white">
          <NavComponent/>
        </div>
      </section>
      <section class="bg-white">
        <div class="flex pt-12">
          <div class="w-1/2">
            <div class="max-w-lg mx-auto mb-40">
              <span class="block font-serif">Referenciák</span>
              <h1 class="font-serif text-5xl text-neutral-950 mt-4 mb-3">szabadabban.hu</h1>

              <ul>
                <li>Design</li>
                <li>Frontend</li>
                <li>Backend</li>
                <li>SEO</li>
              </ul>

              <ButtonComponent class="mt-6 cursor-pointer">Weboldal megtekintése</ButtonComponent>


            </div>

            <div>
              <NuxtImg src="/image/references/szabadabban/szabadabban-hero.png" format="webp" sizes="xs: 476px sm: 645px md: 1256px lg:1256px" alt="Referenciák" />
            </div>


          </div>
          <div class="w-1/2">
            <div class="rounded-[2rem] shadow-2xl overflow-hidden h-[1500px]">
              <NuxtImg class="w-full" src="/image/references/addkonz/addkonz-teljes.jpg" format="webp" sizes="xs: 476px sm: 645px md: 1256px lg:1256px" alt="Referenciák" />
            </div>
          </div>
        </div>
      </section>





    </main>
  </Transition>


</template>

<style scoped></style>
