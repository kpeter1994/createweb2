<script lang="ts" setup>

import {Vue3Lottie} from "vue3-lottie";
import Arrow from "assets/animation/arrow.json";
import BigButtonComponent from "~/components/BigButtonComponent.vue";
import Man from "assets/animation/man.json";
import Guarantee from "assets/animation/100Guarantee.json";
import Ads from "assets/animation/ads.json";

useHead({
  title: 'Weboldal készítés garanciával| Createweb',
  htmlAttrs: {
    lang: 'hu',
  },
  meta: [
    {
      name: "description",
      content: 'Egyedi céges weoldal készítés, marketingtervezés és tartalommarketing szolgáltatások.',
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
      <section id="hero" class="bg-white bg-grid bg-contain lg:bg-cover overflow-hidden rounded-t-[2rem]">
        <div class="bg-gradient-to-l from-transparent to-white">
          <NavComponent/>


          <div class="max-w-7xl 2xl:max-w-[95%] mx-auto flex flex-col lg:flex-row px-3 pt-6 lg:pt-20">

            <div class="lg:w-6/12 xl:1/3 ">
              <div class="max-w-2xl mx-auto flex flex-col gap-3 lg:pb-12">
                <h1 class="text-center text-4xl xl:text-7xl font-serif lg:text-left md:text-6xl 2xl:text-[80px] font-extrabold">Weboldal készítés garanciával</h1>
                <span class="text-center lg:text-left xl:text-lg mt-3">Ne bízd a szerencsére vállalkozásod sikerét! Válassz garanciával biztosított, megbízható weboldalt. Kérj ajánlatot most, és élvezd a stabilitást!</span>
                <div class="flex justify-center lg:justify-start relative">
                  <ButtonComponent to="/ajanlatkeres">Ajánlatot kérek</ButtonComponent>

                </div>
              </div>
            </div>
            <div class="lg:w-6/12 xl:2/3 px-6 pt-6 lg:p-0 ">
              <HeroMobilComponent class="lg:hidden"></HeroMobilComponent>
              <HeroLaptopComponent class="hidden lg:block"></HeroLaptopComponent>
            </div>

          </div>

        </div>

      </section>

      <AssetsComponent/>

      <section id="method" class="py-20 lg:py-40 bg-white overflow-hidden">
        <div class="container mx-auto px-3 flex flex-col lg:flex-row gap-6 transition-all ">

          <div class="lg:w-1/2">
            <client-only>
              <div class="flex">
                <Vue3Lottie
                    :animation-data="Ads"
                    :width="500"
                />
              </div>

            </client-only>
          </div>
          <div class="lg:w-1/2">
            <div class="max-w-2xl mb-20">
              <p v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }" class="font-semibold font-serif text-3xl lg:text-5xl text-center lg:text-left">A vásárlóidnak joguk van megismerni a céged nagyszerűségét</p>
              <p class="mt-6 text-lg text-neutral-600 text-center lg:text-left">
                A vállalkozásod egyedi története és értékei különlegessé teszik, amit fontos, hogy vevőid is megismerjenek. A weboldalad az elsődleges platform, ahol bemutathatod kiváló termékeidet, rendkívüli szolgáltatásaidat és hiteles szakértelmedet. Egy jól megtervezett, <strong>garanciával biztosított weboldal</strong> nemcsak informál, hanem inspirál és bizalmat épít.
              </p>
              <p class="mt-6 text-lg text-neutral-600 text-center lg:text-left">
                A digitális világban az első benyomás döntő fontosságú. Egy professzionális weboldal segít kiemelkedni a versenytársak közül és hitelességet sugároz. Mutasd be sikereidet, elégedett ügyfelek visszajelzéseit és vállalkozásod értékeit, hogy a vevőid megértsék és értékeljék a munkádat, és már az első pillanattól kezdve elnyerd a bizalmukat.

              </p>

              <div class="flex justify-center lg:justify-start relative mt-6">
                <ButtonComponent to="/ajanlatkeres">Ajánlatot kérek</ButtonComponent>

              </div>
            </div>
          </div>

        </div>

      </section>



      <section id="services" class="bg-neutral-50 py-20 lg:py-40 px-3">
        <div class="max-w-2xl mx-auto text-center">

          <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[200ms] animate-duration-[1000ms]' }"
              class="font-semibold font-serif text-3xl lg:text-4xl">
            Miben tudok neked segíteni?
          </h2>

          <p class="text-lg mt-6 text-neutral-600">
            Landing page, céges weboldal, weboldal felújítás, referenciaoldal vagy webáruház készítésében, hogy online jelenléted professzionális és vonzó legyen.
          </p>


        </div>
        <div class="max-w-7xl mx-auto flex justify-center mt-16 flex-wrap">
          <ServiceCardComponenet v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-duration-[1000ms]' }"
                                 image="icon-park-solid_landing.svg" title="Landing page készítés"
                                 description="Érje el célját gyorsan és hatékonyan egy jól megtervezett landing page segítségével."/>

          <ServiceCardComponenet v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[200ms] animate-duration-[1000ms]' }"
                                 image="fluent-mdl2_website.svg" title="Céges weboldal készítés"
                                 description="Mutassa be vállalkozását professzionálisan és vonzóan egy modern céges weboldalon."/>

          <ServiceCardComponenet v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[400ms] animate-duration-[1000ms]' }"
                                 image="fluent-mdl2_design.svg" title="Weboldal felújítás"
                                 description="Frissítse meglévő weboldalát, hogy az megfeleljen a legújabb trendeknek."/>

          <ServiceCardComponenet v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[200ms] animate-duration-[1000ms]' }"
                                 image="gg_website.svg" title="Referenciaoldal készítés"
                                 description="Tüntesse fel legjobb munkáit egy áttekinthető és vonzó referenciaoldalon."/>

          <ServiceCardComponenet v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[400ms] animate-duration-[1000ms]' }"
                                 image="icon-park-solid_shopping.svg" title="Webáruház készítés"
                                 description="Növelje online eladásait egy felhasználóbarát és biztonságos webáruházzal."/>

        </div>
      </section>


      <section id="method" class="py-20 lg:py-40 bg-white overflow-hidden">
        <div class="container mx-auto px-3 flex flex-col lg:flex-row gap-6 transition-all ">

          <div class="lg:w-1/2">
            <client-only>
              <div class="flex">
                <Vue3Lottie
                    :animation-data="Man"
                    :width="500"
                />
              </div>

            </client-only>
          </div>
          <div class="lg:w-1/2">
            <div class="max-w-2xl mb-20">
              <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }"
                 class="font-semibold font-serif text-3xl lg:text-5xl text-center lg:text-left">Egy hatékony weboldal jellemzői</h2>
              <ul class="mt-6 text-xl space-y-3">
                <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i><strong>Személyre szabott:</strong> Egyedi igényekre szabva</li>
                <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i><strong>Responszív:</strong> Minden eszközön tökéletes megjelenés</li>
                <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i><strong>SEO optimalizált:</strong> Jobb láthatóság a keresőmotorokban</li>
                <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i><strong>Modern design:</strong> Letisztult és vonzó megjelenés</li>
                <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i><strong>Átlátható:</strong> Könnyen navigálható</li>
                <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i><strong>Gyors</strong>: Gyors betöltési idő a jobb felhasználói élményért</li>
                <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i><strong>Felhasználóbarát:</strong> Intuitív felhasználói élmény </li>
                <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i><strong>Beépített weboldal analitika:</strong> Teljesítmény nyomon követése és elemzése</li>

              </ul>

              <div class="flex justify-center lg:justify-start relative mt-6">
                <ButtonComponent to="/ajanlatkeres">Ajánlatot kérek</ButtonComponent>

              </div>
            </div>
          </div>


        </div>

      </section>

      <section id="guarantee" class="py-20 lg:py-40 bg-amber-50 relative">
        <img class="w-full absolute left-0 right-0 top-0" src="/image/trap.svg" alt="weboldal készítés">
        <img class="w-full absolute bottom-0 scale-y-[-1]" src="/image/trap.svg" alt="elválsztó">
        <div class="container mx-auto px-3 flex flex-col lg:flex-row gap-6 transition-all ">

          <div class="lg:w-1/3">
            <client-only>
              <div class="flex">
                <Vue3Lottie
                    :animation-data="Guarantee"
                    :width="500"
                />
              </div>

            </client-only>
          </div>
          <div class="lg:w-1/2 flex items-center">
            <div class="max-w-2xl mb-20">
              <p v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }" class="font-semibold font-serif text-3xl lg:text-5xl text-center lg:text-left">100%-os pénzvisszafizetési garancia</p>
              <p class="mt-6 text-lg text-neutral-600 text-center lg:text-left">
                Vállalom, hogy az általam készített weboldalak teljes mértékben megfelelnek az igényeidnek, és garantálom a minőséget. Ha nem vagy elégedett, visszafizetem a teljes összeget. Bízz bennem, és biztosítsd vállalkozásod online sikerét!
              </p>


              <div class="flex justify-center lg:justify-start relative mt-6">
                <ButtonComponent to="/ajanlatkeres">Ajánlatot kérek</ButtonComponent>

              </div>
            </div>
          </div>

        </div>

      </section>

      <section class="bg-white py-20 lg:py-40 px-3 ">
        <div class="max-w-7xl mx-auto">
          <div class="max-w-2xl">

            <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[200ms] animate-duration-[1000ms]' }"
                class="font-semibold font-serif text-3xl lg:text-4xl">
              A weboldal készítés folyamata
            </h2>

            <p class="text-lg mt-6 text-neutral-600">
              Egy professzionális weboldal az online siker alapja. Célom, hogy alapos kutatással, részletes tervezéssel, egyedi dizájnnal és modern fejlesztéssel olyan weboldalt hozzak létre, amely kiemelkedik a versenytársak közül. Bízd rám a weboldalad teljes körű kialakítását és karbantartását, hogy te csak az üzletedre koncentrálhass.
            </p>


          </div>
          <div class="flex justify-center mt-16 flex-wrap">
            <div class="md:w-1/2 lg:w-1/3 p-6"
                 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-duration-[1000ms]' }">
              <span class="text-5xl block font-extrabold mb-3 opacity-60">01</span>
              <h3 class="text-2xl font-serif mb-3 border-b-2">Célmeghatározás</h3>
              <p>
                Meghatározzuk a weboldalad célját és célközönségét, hogy az megfelelően szolgálja az üzleti igényeidet.
              </p>
            </div>
            <div class="md:w-1/2 lg:w-1/3 p-6"
            v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[200ms] animate-duration-[1000ms]' }">
              <span class="text-5xl block font-extrabold mb-3 opacity-60">02</span>
              <h3 class="text-2xl font-serif mb-3 border-b-2">Kutatás és Tervezés</h3>
              <p>
                Elvégzünk egy alapos piackutatást, és részletes tervet készítünk a weboldalad szerkezetéről, funkcióiról és dizájnjáról.
              </p>
            </div>
            <div class="md:w-1/2 lg:w-1/3 p-6"
            v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[400ms] animate-duration-[1000ms]' }">
              <span class="text-5xl block font-extrabold mb-3 opacity-60">03</span>
              <h3 class="text-2xl font-serif mb-3 border-b-2"> Tartalomkészítés</h3>
              <p>
                Meghatározzuk a weboldalad célját és célközönségét, hogy az megfelelően szolgálja az üzleti igényeidet.
              </p>
            </div>
            <div class="md:w-1/2 lg:w-1/3 p-6"
            v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-duration-[1000ms]' }">
              <span class="text-5xl block font-extrabold mb-3 opacity-60">04</span>
              <h3 class="text-2xl font-serif mb-3 border-b-2">Design és Fejlesztés</h3>
              <p>
                Megtervezzük a letisztult, felhasználóbarát dizájnt, majd fejlesztjük a weboldalt modern technológiák alkalmazásával.
              </p>
            </div>
            <div class="md:w-1/2 lg:w-1/3 p-6"
            v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[400ms] animate-duration-[1000ms]' }">
              <span class="text-5xl block font-extrabold mb-3 opacity-60">05</span>
              <h3 class="text-2xl font-serif mb-3 border-b-2">Tesztelés és Finomítás</h3>
              <p>
                Teszteljük a weboldalt különböző eszközökön és böngészőkben, hogy minden hibát kijavítsunk és biztosítsuk a gördülékeny működést.
              </p>
            </div>
            <div class="md:w-1/2 lg:w-1/3 p-6"
            v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[600ms] animate-duration-[1000ms]' }">
              <span class="text-5xl block font-extrabold mb-3 opacity-60">06</span>
              <h3 class="text-2xl font-serif mb-3 border-b-2">Indítás és Karbantartás</h3>
              <p>
                Elindítjuk a weboldalt, majd rendszeresen frissítjük és karbantartjuk, hogy hosszú távon is hatékonyan működjön.
              </p>
            </div>

          </div>
        </div>

      </section>


      <section id="testimonial" class="bg-gray-50 py-20 lg:py-40 px-3">
        <div class="max-w-2xl mx-auto text-center">
          <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[200ms] animate-duration-[1000ms]' }"
              class="font-semibold font-serif text-3xl lg:text-4xl">Ügyfeleim véleménye</h2>

        </div>
        <client-only>
          <SlideComponenet/>
        </client-only>
      </section>


      <section id="references" class="bg-neutral-100 bg-center ">
        <div class="flex flex-col lg:flex-row relative">
          <div class="lg:w-1/2 order-2 lg:order-1">
            <NuxtImg src="/image/references.png" sizes="xs:480px sm:768px md:1024px lg:860px xl:960px" alt="references"
                     class="w-full h-full object-cover"></NuxtImg>
          </div>
          <div
              class="w-full py-32 lg:absolute lg:w-2/3 h-full right-0 top-0 bottom-0  order-1 lg:order-2 flex items-center bg-brush bg-cover bg-center lg:bg-left bg-no-repeat">
            <div class="max-w-2xl mx-auto flex flex-col h-full justify-center px-3 relative text-white">
              <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[200ms] animate-duration-[1000ms]' }" class="font-semibold font-serif text-3xl lg:text-4xl text-center lg:text-left">Referenciák</h2>
              <div class="mt-6 flex justify-center">
                <NuxtLink to="/referenciak"
                          class="bg-white text-black px-3 py-2.5 rounded-full inline-flex hover:text-gray-900 text-sm font-semibold">
                  Megnézem a referenciákat
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section class="bg-white py-20 lg:py-40">
        <div class="max-w-7xl mx-auto">
          <div class="mx-3">
            <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out lg:animate-delay-[400ms] animate-duration-[1000ms]' }"
                class="font-semibold font-serif text-3xl lg:text-4xl">Blog</h2>
          </div>

          <BlogListComponent class="mt-12"/>

        </div>
      </section>
    </main>
  </Transition>


</template>

<style scoped></style>
