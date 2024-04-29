<script lang="ts" setup>
const props = defineProps<{
  message: string;
}>();

const message = props.message;

const typedText = ref<string>("");
let currentIndex = 0;

const typeEffect = () => {
  if (currentIndex < message.length) {
    typedText.value += message.charAt(currentIndex);
    currentIndex++;
    setTimeout(typeEffect, 70); // Állítsd be az időzítést igény szerint
  }
};

onMounted(() => {
  typeEffect();
});
</script>

<template>
    <p>{{ typedText }}</p>
</template>

<style scoped></style>
