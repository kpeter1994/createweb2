<script lang="ts" setup>

import {Vue3Lottie} from "vue3-lottie";
import Man from "assets/animation/man.json";
import Attracting from "assets/animation/Attracting.json";
import target from "assets/animation/target.json";
import BigButtonComponent from "~/components/BigButtonComponent.vue";


useHead({
  title: 'Céges Weboldal készítés | Createweb',
  htmlAttrs: {
    lang: 'hu',
  },
  meta: [
    {
      name: "description",
      content: 'Ha nem szeretnéd magad a szerencsére bízni, a akkor neked is egy olyan weboldalra van szükséged ami kiszámíthatóságot hoz a vállalkozásod mindennapjaiba. Ne kockáztass! Kérj ajánlatot!',
    },
    {
      name: "charset",
      content: "UTF-8",
    }
  ],
  link: [
     { rel: 'icon', type: 'image/ico', href: 'favicon/favicon.ico' },
     { rel: 'apple-touch-icon', sizes: '32x32', href: 'favicon/apple-touch-icon.svg' },

  ]
});

const lists = ref([
  {
    title: 'Világos célkitűzés',
    description: 'A landing oldalnak egyértelműen kell kommunikálnia a célját. Minden elem az oldalon – szöveg, képek, formák, hívások az akcióra (CTA-k) – ennek a célkitűzésnek kell, hogy szolgáljon, minimalizálva azokat az elemeket, amelyek eltéríthetik a felhasználók figyelmét.',
    isOpen: false,
  },
  {
    title: 'Egyszerű és tiszta',
    description: 'A design legyen letisztult és rendezett. A túl sok zavaró elem vagy információ elvonhatja a figyelmet a fő üzenetről. Az egyszerű, lényegre törő tartalom és design segít fenntartani a látogatók figyelmét.',
    isOpen: false,
  },
  {
    title: 'Gyors betöltési sebesség',
    description: 'A gyors betöltési idő elengedhetetlen, mivel a lassú oldalak csökkentik a felhasználói élményt és növelik a visszafordulási arányt. Optimalizálj minden képet és tartalmat a lehető leggyorsabb betöltés érdekében.',
    isOpen: false,
  },
  {
    title: 'Mobilbarát',
    description: 'Az oldalnak reszponzívnak kell lennie, mivel ma már töbségében mobil eszközöket használnak böngészésre. A mobilbarát design növeli a felhasználói élményt és segíti a konverziókat.',
    isOpen: false,
  },
  {
    title: 'Erős cselekvésre ösztönzés (CTA)',
    description: 'A CTA gombjai legyenek jól látható helyen, és egyértelmű üzeneteket közvetítsenek, mint például „Regisztrálj most”, „Töltsd le ingyen”, vagy „Kérj ajánlatot”. Ezeknek könnyen észrevehetőnek és megkülönböztethetőnek kell lenniük az oldalon.',
    isOpen: false,
  },


]);

</script>

<template>
  <Transition name="slide-fade" appear>
    <main>

      <section id="hero" class="bg-gradient-to-b from-amber-100 to-white  bg-contain lg:bg-cover overflow-hidden rounded-t-[2rem]">
        <div class="bg-gradient-to-l from-transparent to-white">
          <NavComponent/>


          <div class="max-w-7xl 2xl:max-w-[95%] mx-auto flex flex-col lg:flex-row px-3 pt-6 lg:pt-20">

            <div class="lg:w-6/12 xl:1/3 ">
              <div class="max-w-2xl mx-auto flex flex-col gap-3 lg:pb-6">
                <h1 class="uppercase text-lg font-bold text-amber-500">Céges weboldal készítés</h1>
                <span class="text-center text-4xl xl:text-5xl font-serif lg:text-left md:text-5xl 2xl:text-7xl font-extrabold">Egy jól megtervezett landing oldal az üzleti sikereid apalja lehet</span>
                <p class="text-center lg:text-left xl:text-lg">Ha nem szeretnéd magad a szerencsére bízni, akkor neked
                  is
                  egy olyan weboldalra van szükséged ami kiszámíthatóságot hoz a vállalkozásod mindennapjaiba.</p>
                <div class="flex justify-center lg:justify-start relative">
                  <BigButtonComponent class="mt-6" to="/ajanlatkeres">Ajánlatot kérek</BigButtonComponent>
                </div>
              </div>
            </div>
            <div class="lg:w-6/12 xl:2/3 px-6 pt-6 lg:p-0 ">
              <client-only>
                <div class="flex scale-x-[-1]">
                  <Vue3Lottie
                      :animation-data="Man"
                      :width="500"
                  />
                </div>

              </client-only>
            </div>

          </div>

        </div>

      </section>


      <section class="py-20 lg:py-40 bg-amber-50 overflow-hidden relative">
        <img class="w-full absolute top-0" src="/image/trap.svg" alt="">

        <div v-animateonscroll="{ enterClass: 'animate-fade-left animate-ease-out' }" class="container mx-auto px-3 flex flex-col lg:flex-row gap-6 pt-20 transition-all ">
          <div class="lg:w-1/2">
            <client-only>
              <div class="flex scale-x-[-1]">
                <Vue3Lottie
                    :animation-data="Attracting"
                    :width="500"
                />
              </div>

            </client-only>
          </div>
          <div class="lg:w-1/2">
            <div class="max-w-2xl mb-40">
              <p v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }" class="font-semibold font-serif text-3xl lg:text-5xl text-center lg:text-left">Szeretnéd, ha többé nem kellene aggódnod az ügyfélszerzés miatt?</p>
              <p class="mt-6 text-lg text-neutral-600 text-center lg:text-left">
                Az ügyfélszerzés már nem jelent nehézséget, ha vállalkozásod stratégiai marketing szemléletre épül. A gyors és hirtelen ügyfélszerzés helyett átgondoltabb, egymásra épülő marketingeszközöket alkalmazva elérhetjük, hogy az üzleti növekedésed egy stabil és fenntartható mederbe terelődjön, így segítve elérni üzleti céljaidat.
              </p>
              <p class="mt-6 text-lg text-neutral-600 text-center lg:text-left">
                Egy ügyféleszerző folyamat kiépítése időigényes feladat lehet, viszont hosszútávon olyan előnyöket jelent, amivel nem képes versenyezni az a konkurensed, akinek a marketing eszköztára kimerül a fizetett hirdetéseknél.
              </p>
            </div>
          </div>
        </div>

        <img class="w-full absolute bottom-0 scale-y-[-1]" src="/image/trap.svg" alt="">

      </section>

      <section  class="py-20 lg:py-20 bg-white overflow-hidden relative">

        <div v-animateonscroll="{ enterClass: 'animate-fade-left animate-ease-out' }" class="container mx-auto px-3 transition-all ">
          <div>
            <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }"
                class="font-semibold font-serif text-3xl lg:text-5xl text-center mb-12">
              Milyen egy jó landing oldal?
            </h2>
          </div>
          <div class="flex flex-col lg:flex-row gap-6">
            <div class="lg:w-1/2 flex justify-center items-center">
              <Accordion class="w-full" :activeIndex="0">
                <AccordionTab
                    v-for="list in lists"
                    class="text-xl"
                >
                  <template #header>
                    <span class="text-2xl">{{list.title}}</span>
                  </template>
                  <p class="m-0">
                    {{list.description}}
                  </p>
                </AccordionTab>

              </Accordion>
            </div>
            <div class="lg:w-1/2">
              <client-only>
                <div class="flex scale-x-[-1]">
                  <Vue3Lottie
                      :animation-data="target"
                      :width="500"
                  />
                </div>

              </client-only>
            </div>
          </div>

        </div>

      </section>

      <section  class="bg-neutral-50 py-20 lg:py-40 px-3">
        <div class="max-w-2xl mx-auto text-center">

          <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[200ms] animate-duration-[1000ms]' }"
              class="font-semibold font-serif text-3xl lg:text-4xl">
            Milyen egy jó landing oldal?
          </h2>



        </div>

      </section>

      <section class="bg-white bg-center py-20 lg:py-40 px-3">
        <div class="max-w-3xl mx-auto shadow-2xl bg-white p-12 rounded-2xl">
          <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[200ms] animate-duration-[1000ms]' }"
              class="font-semibold font-serif text-3xl lg:text-4xl text-center mb-12">Kérj ingyenes konzultációt</h2>
          <SimpleFormComponent/>

        </div>
      </section>


    </main>
  </Transition>


</template>

<style>
.p-accordion-tab{
  @apply border-l-4 border-amber-400
}
</style>
