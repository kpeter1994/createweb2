<script lang="ts" setup>

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
    // { rel: 'icon', type: 'image/ico', href: '/favicon.ico' },
    // { rel: 'apple-touch-icon', sizes: '32x32', href: '/apple-touch-icon.svg' },
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
              <div class="max-w-xl mx-auto flex flex-col gap-3 lg:pb-12">
                <span class="text-center text-4xl lg:text-5xl font-serif lg:text-left md:text-5xl xl:text-6xl font-extrabold">Ne engedd, hogy a webodalad a nővekedésed útjába áljon</span>
                <h1 class="text-center lg:text-left xl:text-lg">Ha nem szeretnéd magad a szerencsére bízni, a akkor neked
                  is
                  egy olyan weboldalra van szükséged ami kiszámíthatóságot hoz a vállalkozásod mindennapjaiba. Ne
                  kockáztass! Kérj ajánlatot!</h1>
                <div class="flex justify-center lg:justify-start">
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

      <section id="assets" class="bg-black py-20 rounded-[2rem] text-white">
        <div class="max-w-7xl mx-auto px-6 flex gap-6 items-center mb-6">
          <h2 class="font-serif font-semibold">Technológiák</h2>
          <div class="w-full h-[1px] bg-white bg-opacity-10"></div>
        </div>
        <ul class="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          <li class="flex items-center gap-1.5">
            <img class="w-8 lg:w-12" src="/image/talent/laravel.svg" title="laravel" alt="laravel">
            <span class="lg:text-lg font-bold">Laravel</span>
          </li>
          <li class="flex items-center gap-1.5">
            <img class="w-8 lg:w-12" src="/image/talent/vuejs.svg" title="vuejs" alt="vuejs">
            <span class="lg:text-lg font-bold">Vue</span>
          </li>
          <li class="flex items-center gap-1.5">
            <img class="w-8 lg:w-12" src="/image/talent/nuxt.svg" title="nuxt" alt="nuxt">
            <span class="lg:text-lg font-bold">Nuxt</span>
          </li>
          <li class="flex items-center gap-1.5">
            <img class="w-8 lg:w-12" src="/image/talent/tailwind.svg" title="openai" alt="openai">
            <span class="lg:text-lg font-bold">Tailwind</span>
          </li>
          <li class="flex items-center gap-1.5">
            <img class="w-8 lg:w-12" src="/image/talent/bootstrap.svg" title="Bootstrap" alt="Bootstrap">
            <span class="lg:text-lg font-bold">Bootstrap</span>
          </li>
          <li class="flex items-center gap-1.5">
            <img class="w-8 lg:w-12" src="/image/talent/figma.svg" title="figma" alt="figma">
            <span class="lg:text-lg font-bold">Figma</span>
          </li>
          <li class="flex items-center gap-1.5">
            <img class="w-8 lg:w-12" src="/image/talent/analytics.svg" title="analytics" alt="analytics">
            <span class="lg:text-lg font-bold">Analytics</span>
          </li>
          <li class="flex items-center gap-1.5">
            <img class="w-8 lg:w-12" src="/image/talent/openai.svg" title="openai" alt="openai">
            <span class="lg:text-lg font-bold">OpenAI</span>
          </li>


        </ul>

      </section>

      <section id="method" class="py-28 lg:py-40 bg-white ">
        <div class="max-w-7xl mx-auto px-3">
          <div class="max-w-2xl mb-20">
            <p class="font-semibold font-serif text-3xl lg:text-5xl">Kinek? Mit? Miért? és Hogyan?</p>
            <p class="mt-6 text-lg text-neutral-600">Ne magunknak csináljunk weboldalt, hanem az ügyfeleinknek. Ehez
              viszont
              meg kell válaszólnunk pár kérdést.</p>
          </div>
          <MobilSelectedComponent/>

        </div>

      </section>

      <section id="services" class="bg-neutral-50 py-20 px-3">
        <div class="max-w-2xl mx-auto text-center"><h2 class="font-semibold font-serif text-3xl lg:text-4xl">Hogyan
          tudok
          neked segíteni?</h2>
          <p class="text-lg mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur
            culpa
            doloribus eligendi eos esse in laudantium perspiciatis provident saepe.</p></div>
        <div class="max-w-7xl mx-auto flex mt-16 flex-wrap">
          <ServiceCardComponenet image="ph_user-focus.svg" title="Teszt bejegyzés"
                                 description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum iure"/>
          <ServiceCardComponenet image="fluent-mdl2_design.svg" title="Teszt bejegyzés"
                                 description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum iure"/>
          <ServiceCardComponenet image="material-symbols_developer-mode-tv-outline.svg" title="Teszt bejegyzés"
                                 description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum iure"/>
          <ServiceCardComponenet image="nimbus_marketing.svg" title="Teszt bejegyzés"
                                 description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum iure"/>

        </div>
      </section>

      <section id="quote" class="bg-white bg-grid2 bg-cover bg-center py-40 px-3">
        <div class="max-w-4xl mx-auto">
          <p class="font-serif font-semibold  text-3xl lg:text-4xl text-neutral-800">Az őrültség nem más, mint ugyanazt
            tenni újra és újra, és várni, hogy az eredmény más legyen.</p>
          <div class="flex justify-end ">
            <div class="flex flex-col items-center">
              <img class="w-14" src="/image/rita-mae-brown.png" alt="Rita Mae Brown">
              <span class="text-neutral-500 text-sm">Rita Mae Brown</span>
            </div>

          </div>
        </div>
      </section>

      <section id="testimonial" class="bg-gray-50 py-20 px-3">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="font-semibold font-serif text-3xl lg:text-4xl">Ügyfeleim véleménye</h2>
          <p class="text-lg mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur
            culpa
            doloribus eligendi eos esse in laudantium perspiciatis provident saepe.</p>
        </div>
        <SlideComponenet/>
      </section>

      <section id="references" class="bg-neutral-100 bg-center">
        <div class="flex flex-col lg:flex-row relative">
          <div class="lg:w-1/2 order-2 lg:order-1">
            <NuxtImg src="/image/references.png" sizes="xs:480px sm:768px md:1024px lg:860px xl:960px" alt="references"
                     class="w-full h-full object-cover"></NuxtImg>
          </div>
          <div
              class="w-full py-32 lg:absolute lg:w-2/3 h-full right-0 top-0 bottom-0  order-1 lg:order-2 flex items-center bg-brush bg-cover bg-center lg:bg-left bg-no-repeat">
            <div class="max-w-2xl mx-auto flex flex-col h-full justify-center px-3 relative text-white">
              <h2 class="font-semibold font-serif text-3xl lg:text-4xl text-center lg:text-left">Referenciák</h2>
              <div class="mt-6 flex justify-center">
                <NuxtLink to="/"
                          class="bg-white text-black px-3 py-2.5 rounded-full inline-flex hover:text-gray-900 text-sm font-semibold">
                  Megnézem a referenciákat
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section class="bg-white py-20">
        <div class="max-w-7xl mx-auto p-12 lg:p-20 rounded-[2rem] bg-black text-white">

          <h2 class="font-semibold font-serif text-3xl lg:text-4xl">Kapcsolat</h2>
          <p class="text-lg mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur
            culpa
            doloribus eligendi eos esse in laudantium perspiciatis provident saepe.</p>

        </div>
      </section>
    </main>
  </Transition>


</template>

<style scoped>

</style>
