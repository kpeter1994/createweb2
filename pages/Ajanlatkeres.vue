<script lang="ts" setup></script>

<template>
  <Transition name="slide-fade" appear>
    <main>
      <section class="bg-white px-3 bg-grid bg-contain lg:bg-cover overflow-hidden rounded-t-[2rem]">
        <div class="bg-gradient-to-b from-transparent to-white">
          <NavComponent/>
          <div class="max-w-7xl">
            <div class="max-w-2xl mx-auto mt-12">
              <span class="block font-serif">Kapcsolat</span>
              <h1 class="font-serif text-5xl text-neutral-950 mt-4 mb-3">The latest articles and news</h1>
              <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptas.</p>

            </div>
          </div>

        </div>

      </section>

    </main>
  </Transition>


</template>

<style scoped></style>
