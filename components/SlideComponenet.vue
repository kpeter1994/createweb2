<script lang="ts" setup>

const isPlaying = ref(true)

const pause = () => {
  const sliders = document.querySelectorAll('.slider-track, .slider-track-slower')
  sliders.forEach(slider => {
    if (slider instanceof HTMLElement) {
      slider.style.animationPlayState = 'paused';
    }
  });
  isPlaying.value = false;
}

const play = () => {
  const sliders = document.querySelectorAll('.slider-track, .slider-track-slower')
  sliders.forEach(slider => {
    if (slider instanceof HTMLElement) {
      slider.style.animationPlayState = 'running';
    }
  });
  isPlaying.value = true;
}

const testimonials = ref([
  {
    name: 'Józsa Péter',
    stars: 5,
    text: 'Két éve készítette Péter a weboldalam és azóta rengeteget fejlődött a vállalkozásom. Az Ügyfeleim száma a duplájára nőtt, így most már főállásban tudom csinálni és rengeteg jó ötletet kaptam, hogyan legyen az oldal mindig naprakész. Pétert bármikor keresem, egy órán belül visszahív és egy napon belül elkészíti az apróbb módosításokat. Jó szívvel ajánlom mindenkinek, aki egy, a mai kornak megfelelő weblapot szeretne a vállalkozásának, megfizethető áron! Köszönettel, Józsa Péter https://maganaddiktologia.hu/'
  },
  {
    name: 'Fehér Péter',
    stars: 5,
    text: 'Gyors, precíz,rugalmas! Jó vele dolgozni!'
  },
  {
    name: 'Németh Mihály',
    stars: 5,
    text: 'Nagyon elégedett vagyok a szolgáltatással. Profi, segítőkész, rugalmas. Csak ajánlani tudom! Misi'
  },
  {
    name: 'Dudits Dénes',
    stars: 5,
    text: 'Péter évek óta segíti a munkánkat, aminek köszönhetően egyre több előfizetője van az online önsegítő programunknak. Egy olyan speciális szegmensben, mint a függőségkezelés, különösen is nagy kihívás megtalálni és megszólítani azokat, akiknek szükségük van a szolgáltatásunkra. Ezért Péter tudása, kreativitása, gyorsasága és pontos munkavégzése nélkülözhetetlen számunkra.'
  },
  {
    name: 'Bálint Molnár',
    stars: 5,
    text: 'Csak ajánlani tudom. Gyors, precíz, igényes.'
  },
  {
    name: 'Zsolt Hársfai',
    stars: 5,
    text: 'Ajánlatkérésemre gyorsan reagált. Az elképzeléseimet nem tudtam jól megfogalmazni, mégis remek munkát végzett. A kapcslat tartás, és az egyes fázisok között viszonylag rövid idő telt el. Máskor is hozzá fordulok. Ajánlom mindenkinek, aki valóban minőséget keres.'
  }
])

</script>

<template>
  <div class="
  max-w-7xl
  mt-16
  mx-auto
  h-[49rem]
  max-h-[150vh]
  grid
  grid-col-1
  md:grid-cols-2
  lg:grid-cols-3
  items-start
  gap-8
  overflow-hidden
  relative
  after:absolute
  after:content-['']
  after:h-20
  after:bg-gradient-to-b
  after:from-neutral-50
  after:to-transparent
  after:top-0
  after:left-0
  after:right-0


  before:absolute
  before:content-['']
  before:h-20
  before:bg-gradient-to-t
  before:from-neutral-50
  before:z-10
  before:to-transparent
  before:bottom-0
  before:left-0
  before:right-0
  ">
    <div class="space-y-8 py-4 slider-track">
      <TestimonialCardComponent
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          :name="testimonial.name"
          :stars="testimonial.stars"
          :text="testimonial.text" />
      <TestimonialCardComponent
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          :name="testimonial.name"
          :stars="testimonial.stars"
          :text="testimonial.text" />


    </div>
    <div class="space-y-8 py-4 slider-track-slower">
      <TestimonialCardComponent
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          :name="testimonial.name"
          :stars="testimonial.stars"
          :text="testimonial.text" />
      <TestimonialCardComponent
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          :name="testimonial.name"
          :stars="testimonial.stars"
          :text="testimonial.text" />


    </div>
    <div class="space-y-8 py-4 slider-track">
      <TestimonialCardComponent
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          :name="testimonial.name"
          :stars="testimonial.stars"
          :text="testimonial.text" />
      <TestimonialCardComponent
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          :name="testimonial.name"
          :stars="testimonial.stars"
          :text="testimonial.text" />
    </div>

    <button v-if="isPlaying" @click="pause()" class="absolute bottom-3 z-20 right-3 text-neutral-800 bg-white bg-opacity-40 border flex justify-center items-center rounded-full w-12 h-12"><i class="pi pi-pause text-neutral-800 text-xl"></i></button>
    <button v-if="!isPlaying" @click="play()" class="absolute bottom-3 z-20 right-3 text-neutral-800 bg-white bg-opacity-40 border flex justify-center items-center rounded-full w-12 h-12"><i class="pi pi-play text-neutral-800 text-xl"></i></button>
  </div>
</template>

<style>
.slider-track{
  animation: scroll 30s linear infinite;
}

.slider-track-slower{
  animation: scroll 40s linear infinite;
}

@keyframes scroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}


</style>
