<script lang="ts" setup>

import {Vue3Lottie} from "vue3-lottie";
import Arrow from "assets/animation/arrow.json";
import BigButtonComponent from "~/components/BigButtonComponent.vue";
import Man from "assets/animation/man.json";
import Guarantee from "assets/animation/100Guarantee.json";
import Ads from "assets/animation/ads.json";
import LaptopSliderComponent from "~/components/LaptopSliderComponent.vue";

useHead({
  title: 'Weboldal készítés Kecskemét| Createweb',
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
          <div class="h-12 lg:hidden"></div>
          <header class="hidden lg:block py-12 px-3">
            <div class="max-w-7xl 2xl:max-w-[95%] mx-auto flex justify-between">
              <NuxtLink to="/" class="flex gap-1.5 items-center">
                <img width="35px" src="../../assets/image/logo.svg" alt="createweb.hu">
                <span class="font-semibold text-lg">Createweb</span>
              </NuxtLink>
              <nav class="gap-3 items-center hidden lg:flex font-semibold">
                <NuxtLink to="/ajanlatkeres" class="text-white border-transparent bg-black  px-4 py-2.5 rounded-full hover:text-gray-100 text-sm font-semibold">Ajánlatot kérek</NuxtLink>
              </nav>
            </div>

          </header>


          <div class="max-w-7xl 2xl:max-w-[95%] mx-auto flex flex-col lg:flex-row px-3 pt-6 lg:pt-20">

            <div class="lg:w-6/12 xl:1/3 ">
              <div class="max-w-2xl mx-auto flex flex-col gap-3 lg:pb-12">
                <h1 class="text-center text-4xl xl:text-7xl font-serif lg:text-left md:text-6xl 2xl:text-[80px] font-extrabold">Weboldal készítés Kecskemét</h1>
                <span class="text-center lg:text-left xl:text-lg mt-3">Ne bízd a szerencsére vállalkozásod sikerét! Válassz garanciával biztosított, megbízható weboldalt. Kérj ajánlatot most, és élvezd a stabilitást!</span>
                <div class="flex justify-center lg:justify-start relative">
                  <ButtonComponent to="/ajanlatkeres">Ajánlatot kérek</ButtonComponent>

                </div>
              </div>
            </div>
            <div class="lg:w-6/12 xl:2/3 px-6 pt-6 lg:p-0 ">
              <HeroMobilComponent class="lg:hidden"></HeroMobilComponent>
              <LaptopSliderComponent class="hidden lg:block"></LaptopSliderComponent>
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
              <p v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }" class="font-semibold font-serif text-4xl lg:text-6xl text-center lg:text-left">A vásárlóidnak joguk van megismerni a vállalkozásod értékeit</p>
              <p class="mt-6 text-lg text-neutral-600 text-center lg:text-left">
                A weboldalad az elsődleges platform, ahol bemutathatod kiváló termékeidet, rendkívüli szolgáltatásaidat és hiteles szakértelmedet. Egy jól megtervezett, <strong>garanciával biztosított weboldal</strong> nemcsak informál, hanem inspirál és bizalmat is épít.
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


      <section id="prices" class="bg-white py-20 lg:py-40 px-3 bg-grid2 bg-cover">
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-center mt-6 flex-wrap">
            <div class="md:w-1/2 lg:w-1/3 p-3">
              <div class=" p-6 bg-white rounded-[1rem] border"
                   v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-duration-[1000ms]' }">

                <p class="text-3xl font-serif mb-3">StartBoost <span class="text-xl font-sans">csomag</span></p>
                <h3 class="font-bold mb-3">Landing Page készítés</h3>
                <span class="text-5xl block font-extrabold mb-3 opacity-60">95 000 Ft <span class="text-xl">-tól</span></span>
                <ul class=" space-y-1.5 border-b pb-3">
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Egyedi design</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Mobilbarát kialakítás</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Keresőoptimalizálás (SEO)</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Gyors betöltési sebesség</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Integráció alapvető analitikai eszközökkel (Google Analytics, Facebook Pixel)</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Kontakt űrlapok és CTA gombok beépítése</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>SSL tanúsítvány</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Social média integráció (pl. Facebook, Instagram, LinkedIn)</li>
                </ul>

                <p class="mt-3"><span class="font-semibold">Ideális választás:</span> Kisebb vállalkozások számára, akik gyors és hatékony online jelenlétet szeretnének kialakítani.</p>

                <div class="flex justify-center relative mt-3">
                  <ButtonComponent to="/ajanlatkeres">Ajánlatot kérek</ButtonComponent>
                </div>
              </div>
            </div>
            <div class="md:w-1/2 lg:w-1/3 p-3">
              <div class=" p-6 bg-neutral-900 text-white rounded-[1rem] border"
                   v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out lg:animate-delay-[200ms] animate-duration-[1000ms]' }">

                <p class="text-3xl font-serif mb-3">BizPro <span class="text-xl font-sans">csomag</span></p>
                <h3 class="font-bold mb-3">Céges Weboldal készítés</h3>
                <span class="text-5xl block font-extrabold mb-3 opacity-90">150 000 Ft <span class="text-xl">-tól</span></span>
                <ul class=" space-y-1.5 border-b pb-3">
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Egyedi design</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Mobilbarát kialakítás</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Keresőoptimalizálás (SEO)</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Gyors betöltési sebesség</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Integráció alapvető analitikai eszközökkel (Google Analytics, Facebook Pixel)</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Kontakt űrlapok és CTA gombok beépítése</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>SSL tanúsítvány</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Social média integráció (pl. Facebook, Instagram, LinkedIn)</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Többoldalas struktúra (pl. Főoldal, Rólunk, Szolgáltatások, Kapcsolat)</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Blog modul integrálása</li>

                </ul>

                <p class="mt-3"><span class="font-semibold">Ideális választás:</span> Közepes és nagyvállalkozások számára, akik professzionális és vonzó online megjelenést szeretnének.</p>
                <div class="flex justify-center relative mt-3">
                  <ButtonComponent to="/ajanlatkeres">Ajánlatot kérek</ButtonComponent>
                </div>
              </div>
            </div>
            <div class="md:w-1/2 lg:w-1/3 p-3">
              <div class=" p-6 bg-white rounded-[1rem] border"
                   v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-duration-[1000ms]' }">

                <p class="text-3xl font-serif mb-3">CustomWeb <span class="text-xl font-sans">csomag</span></p>
                <h3 class="font-bold mb-3">Landing Page készítés</h3>
                <span class="text-5xl block font-extrabold mb-3 opacity-60">Egyedi árazás alapján</span>
                <ul class=" space-y-1.5 border-b pb-3">
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Fizetési rendszerek integrációja (pl. PayPal, Stripe)</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>PWA (Progressive Web App) kialakítás</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Időpontfoglaló rendszer beépítése</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Többnyelvű támogatás</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Felhasználói fiókok és bejelentkezési rendszer</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Hírlevél feliratkozási és kampánykezelési rendszer</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Speciális adatbázis kezelés</li>
                  <li><i class="pi pi-arrow-right mr-1.5 opacity-60"></i>Más egyedi fejlesztési igény</li>
                </ul>

                <p class="mt-3"><span class="font-semibold">Ideális választás</span> azok számára, akik teljesen egyedi igényekkel és elképzelésekkel rendelkeznek.</p>

                <div class="flex justify-center relative mt-3">
                  <ButtonComponent to="/ajanlatkeres">Ajánlatot kérek</ButtonComponent>
                </div>
              </div>
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



    </main>
  </Transition>


</template>

<style scoped></style>
