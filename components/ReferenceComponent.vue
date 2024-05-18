<script lang="ts" setup>
import Galleria from 'primevue/galleria';

interface Image {
  itemImageSrc: string;
  thumbnailImageSrc: string;
}

const props = defineProps({
  slug: {
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
    itemImageSrc: `/image/references/${props.slug}/${i}.jpg`,
    thumbnailImageSrc: `/image/references/${props.slug}/${i}.jpg`
  });
}



;
</script>

<template>
  <div class="bg-white relative after:content-[''] after:absolute after:h-1/2 after:w-full after:bottom-0 after:bg-neutral-50">
    <div class="max-w-2xl mx-auto flex flex-col gap-6 px-3 pt-6">
      <div class="relative z-10">
        <NuxtImg loading="lazy" @click="displayBasic = true" :src="`/image/references/${props.slug}/${props.slug}-hero.png`" format="webp" sizes="xs: 476px sm: 650px" :alt="props.slug" />

        <div class="flex justify-center mb-20">
          <NuxtLink :to="'/referenciak/' + props.slug" class="ml-4">
            <ButtonComponent class="cursor-pointer bg-white">Részletek</ButtonComponent>
          </NuxtLink>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped></style>
