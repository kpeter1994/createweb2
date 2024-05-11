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
              <span class="block font-serif">Referenciák</span>
              <h1 class="font-serif text-5xl text-neutral-950 mt-4 mb-3">Legutóbbi munkáim</h1>

            </div>
          </div>
        </div>
      </section>

      <section>
        <ReferenceComponent project="optima" :imageNumber="3"/>
        <ReferenceComponent project="addkonz" :imageNumber="4"/>
        <ReferenceComponent project="ujitsvelunk" :imageNumber="4"/>
        <ReferenceComponent project="szabadabban" :imageNumber="4"/>
        <ReferenceComponent project="ertekbecslo" :imageNumber="4"/>
      </section>



    </main>

  </Transition>


</template>

<style scoped></style>