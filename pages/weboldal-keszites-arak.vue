<script lang="ts" setup>
useHead({
  title: 'Weboldal készítés árak 2024 | Createweb',
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
      <section class="bg-white px-3 bg-grid bg-contain lg:bg-cover overflow-hidden rounded-t-[2rem]">
        <div class="bg-gradient-to-b from-transparent to-white">
          <NavComponent/>
          <div class="max-w-7xl mx-auto ">
            <div class="max-w-2xl mt-12">
              <span class="block font-serif">Árak</span>
              <h1 class="font-serif text-5xl text-neutral-950 mt-4 mb-3">Weboldal készítés árak 2024</h1>

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

    </main>
  </Transition>


</template>

<style scoped></style>
