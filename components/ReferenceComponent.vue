<script lang="ts" setup>
import Galleria from 'primevue/galleria';

interface Image {
  itemImageSrc: string;
  thumbnailImageSrc: string;
}

const props = defineProps({
  project: {
    type: String,
    default: 'defaultProject'
  },
  imageNumber: {
    type: Number,
    default: 5
  }
});

const displayBasic = ref(false);
const images = ref<Image[]>([]);

for (let i = 1; i <= props.imageNumber; i++) {
  images.value.push({
    itemImageSrc: `/image/references/${props.project}/${i}.jpg`,
    thumbnailImageSrc: `/image/references/${props.project}/${i}.jpg`
  });
}

const responsiveOptions = ref([
  {
    breakpoint: '1500px',
    numVisible: 5
  },
  {
    breakpoint: '1024px',
    numVisible: 3
  },
  {
    breakpoint: '768px',
    numVisible: 2
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
]);


;
</script>

<template>
  <div class="bg-white relative after:content-[''] after:absolute after:h-1/2 after:w-full after:bottom-0 after:bg-neutral-50">
    <div class="max-w-7xl mx-auto flex flex-col gap-6 px-3 pt-6">
      <div class="relative z-10">
        <NuxtImg loading="lazy" @click="displayBasic = true" :src="`/image/references/${props.project}/${props.project}-hero.png`" format="webp" sizes="xs: 476px sm: 645px md: 1256px lg:1256px" :alt="props.project" />

        <div class="flex justify-center mb-20">
          <ButtonComponent @click="displayBasic = true" class="bg-white cursor-pointer">Részletek</ButtonComponent>
          <NuxtLink :to="`/referenciak/${props.project}`" class="ml-4">
            <ButtonComponent class="cursor-pointer">Weboldal megtekintése</ButtonComponent>
          </NuxtLink>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped></style>
