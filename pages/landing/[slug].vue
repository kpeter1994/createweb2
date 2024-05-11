<script lang="ts" setup>

import {Vue3Lottie} from "vue3-lottie";
import Man from "assets/animation/man.json";
import Attracting from "assets/animation/Attracting.json";
import Ads from "assets/animation/ads.json";
import target from "assets/animation/target.json";
import theam from "assets/animation/theam.json";
import BigButtonComponent from "~/components/BigButtonComponent.vue";

const {slug} = useRoute().params

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



</script>

<template>
  <Transition name="slide-fade" appear>

      <main>

        <ContentDoc :path="`/landing/landing`" v-slot="{doc}">

        <section id="hero" class="bg-gradient-to-b from-amber-100 to-white  bg-contain lg:bg-cover overflow-hidden rounded-t-[2rem]">
          <div class="bg-gradient-to-l from-transparent to-white">
            <div class="h-12 lg:hidden"></div>
            <header class="hidden lg:block py-12 px-3">
              <div class="max-w-7xl 2xl:max-w-[95%] mx-auto flex justify-between">

                <NuxtLink to="/" class="flex gap-1.5 items-center">
                  <img width="35px" src="../../assets/image/logo.svg" alt="createweb.hu">
                  <span class="font-semibold text-lg">Createweb</span>
                </NuxtLink>

              </div>

            </header>


            <div class="max-w-7xl 2xl:max-w-[95%] mx-auto flex flex-col lg:flex-row px-3 pt-6 lg:pt-20">

              <div class="lg:w-6/12 xl:1/3 ">
                <div class="max-w-3xl mx-auto flex flex-col gap-3 lg:pb-6">
                  <h1 v-if="doc.subtitle" class="uppercase text-lg font-bold text-amber-500 text-center lg:text-left">{{doc.subtitle}}</h1>
                  <span class="text-center text-4xl xl:text-5xl font-serif lg:text-left md:text-5xl 2xl:text-7xl font-extrabold">{{doc.title}}</span>
                  <p class="text-center lg:text-left xl:text-lg" v-html="doc.description"></p>
                  <div class="flex justify-center lg:justify-start relative">
                    <BigButtonComponent class="mt-6" to="/ajanlatkeres">{{doc.ctaButton}}</BigButtonComponent>
                  </div>
                </div>
              </div>
              <div class="lg:w-6/12 xl:2/3 px-6 pt-6 lg:p-0 ">
                <client-only>
                  <div class="flex scale-x-[-1]">
                    <Vue3Lottie
                        :animation-data="Ads"
                        :width="500"
                    />
                  </div>

                </client-only>
              </div>

            </div>

          </div>

        </section>


        <section class="py-6 lg:py-40 bg-amber-50 overflow-hidden relative">
          <img class="w-full absolute left-0 right-0 top-0" src="/image/trap.svg" alt="weboldal készítés">

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
                <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }" class="font-semibold font-serif text-3xl lg:text-5xl text-center lg:text-left">{{doc.sections.first.title}}</h2>
                <p v-for="parag in doc.sections.first.contents"
                   v-html="parag"
                   class="mt-6 text-lg text-neutral-600 text-center leading-relaxed lg:text-xl lg:text-left"></p>

              </div>
            </div>
          </div>

          <img class="w-full absolute bottom-0 scale-y-[-1]" src="/image/trap.svg" alt="elválsztó">

        </section>

        <section  class="py-20 lg:py-20 bg-white overflow-hidden relative">

          <div v-animateonscroll="{ enterClass: 'animate-fade-left animate-ease-out' }" class="container mx-auto px-3 transition-all ">

            <div class="flex flex-col lg:flex-row gap-6">
              <div class="lg:w-1/2">

                <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }"
                    class="font-semibold font-serif text-3xl lg:text-5xl text-center lg:text-left mb-12">
                  {{doc.sections.second.title}}
                </h2>
                <p v-for="parag in doc.sections.second.contents"
                   v-html="parag"
                   class="mt-6 lg:text-xl text-neutral-600 text-center leading-relaxed lg:text-left"></p>
                <div class="flex justify-center lg:justify-start relative">
                  <BigButtonComponent class="mt-6" to="/ajanlatkeres">{{doc.ctaButton}}</BigButtonComponent>
                </div>

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


        <section class="bg-amber-50 py-20 lg:py-20 px-3 relative overflow-hidden">

          <img class="w-full absolute left-0 right-0 top-0 " src="/image/trap.svg" alt="">


          <div class="w-full container mx-auto lg:py-40 flex flex-col lg:flex-row flex-wrap">
            <div class="max-w-2xl">
              <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }" class="font-semibold font-serif text-3xl lg:text-5xl text-center lg:text-left mb-12">{{doc.sections.third.title}}</h2>

            </div>
            <div class="lg:w-2/3 flex flex-col lg:flex-row flex-wrap">
              <div v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }"
                   v-for="card in doc.sections.third.contents"
                   class="lg:w-1/2 p-3">

                <div class="p-6 bg-white rounded-2xl border h-full relative">
                  <i class="text-8xl absolute top-3 right-3 opacity-10" :class="card.icon"></i>
                  <h3 class="font-semibold font-serif text-2xl relative z-10">{{card.title}}</h3>
                  <p class="mt-3 lg:text-lg text-neutral-600 relative z-10" v-html="card.description"></p>
                </div>

              </div>

            </div>
            <div class="lg:w-1/3 p-6">
              <client-only>
                <div class="flex scale-x-[-1]">
                  <Vue3Lottie
                      :animation-data="Man"

                  />
                </div>

              </client-only>
            </div>

          </div>

        </section>

          <section class="bg-amber-50 relative lg:pb-40">
<!--            <img class="w-full absolute left-0 right-0 bottom-0 scale-y-[-1]" src="/image/trap.svg" alt="">-->
            <div class=" container mx-auto flex flex-col lg:flex-row">
              <div class="lg:w-1/3 p-6">
                <img class="w-full" src="/image/dudits-denes.png" alt="Dudits Dénes">
              </div>
              <div class="lg:w-1/2 p-6">
                <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }"
                    class="font-semibold font-serif text-3xl lg:text-7xl text-center lg:text-left mb-12">
                  Régi álmom vált valóra
                </h2>
                <p class="mt-3 lg:text-lg text-neutral-600 relative z-10">Régi álmom vált valóra, amikor létrehoztam az Optima Online függőség kezeléssel foglalkozó platformot. Mindig is szerettem volna, ha a több mint 20 éves tapasztalatomat, amit a függőségkezelés területén szereztem több emberrel is megoszthatom. A terület specifikussága miatt azonban nagy kihívást jelentett elérni azokat, akiket a program érinthet. A Google nem engedélyezi a függőséggel kapcsolatos kulcsszavakra történő hirdetést, és a Facebookon is nehezen lehet célozni.</p>
                <p class="mt-3 lg:text-lg text-neutral-600 relative z-10">Ezen nehézségek miatt kerestem fel Pétert, hogy megvitassuk, hogyan tudnánk elérni több embert, akik érintettek lehetnek a témában. Péter kidolgozott egy stratégiát, amelynek lényege, hogy összegyűjtjük azokat a témákat, kérdéseket és problémákat, amelyek érdekesek lehetnek a függőséggel küzdők számára, ezeket blog formájában közzétesszük és innen tereljük át őket egy landing oldalra, amely bemutatja az Optima előnyeit. Másrészt, az oldalon elhelyezett Facebook követő linknek köszönhetően már könnyebben elérhetem őket Facebook-kampányokkal is. Ennek a stratégiának köszönhetően dinamikusan nő az új regisztráltak száma az oldalon, így sokkal több érintett tudja igénybe venni ezt a lehetőséget.</p>
                <div class="flex justify-center lg:justify-start relative mb-6">
                  <BigButtonComponent class="mt-6" to="/ajanlatkeres">Én is ajánlatot kérek</BigButtonComponent>
                </div>
              </div>

              <img class="w-full absolute left-0 scale-y-[-1] right-0 bottom-0 " src="/image/trap.svg" alt="">

            </div>
          </section>

          <section  class="py-20 lg:py-20  bg-white overflow-hidden relative">



            <div v-animateonscroll="{ enterClass: 'animate-fade-left animate-ease-out' }" class="container mx-auto px-3 transition-all ">

              <div class="flex flex-col lg:flex-row gap-6">
                <div class="lg:w-1/2">

                  <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }"
                      class="font-semibold font-serif text-3xl lg:text-5xl text-center lg:text-left mb-12">
                    {{doc.sections.fourth.title}}
                  </h2>
                  <p v-for="parag in doc.sections.fourth.contents"
                     v-html="parag"
                     class="mt-6 lg:text-xl text-neutral-600 text-center leading-relaxed lg:text-left"></p>
                  <div class="flex justify-center lg:justify-start relative">
                    <BigButtonComponent class="mt-6" to="/ajanlatkeres">{{doc.ctaButton}}</BigButtonComponent>
                  </div>

                </div>
                <div class="lg:w-1/2">
                  <client-only>
                    <div class="flex scale-x-[-1]">
                      <Vue3Lottie
                          :animation-data="theam"
                          :width="500"
                      />
                    </div>

                  </client-only>
                </div>
              </div>

            </div>

          </section>

        </ContentDoc>

      </main>



  </Transition>


</template>

<style>
.p-accordion-tab{
  @apply border-l-4 border-amber-400
}
</style>
