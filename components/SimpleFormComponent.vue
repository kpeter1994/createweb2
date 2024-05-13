<script lang="ts" setup>
import {ref} from 'vue';
import SendMail from "assets/animation/SendMail.json";
const sended = ref(false);

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const config = useRuntimeConfig();

async function sendRequest() {

  sended.value = true;

  await useApiFetch('/sanctum/csrf-cookie')


  const { data, error} = await useApiFetch('/api/send-mail', {
    method: 'POST',
    body: form.value
  });

  console.log(data, error);
  return { data, error};
}

</script>

<template>
  <client-only v-if="sended">
    <div class="flex p-6">
      <Vue3Lottie
          :animation-data="SendMail"
          :loop="false"
      />
    </div>

  </client-only>
  <form v-if="!sended" @submit.prevent="sendRequest">
    <div class="border border-neutral-500 rounded-2xl ">
      <InputComponent required v-model="form.name" type="text" label="Név" name="name"></InputComponent>
      <InputComponent required v-model="form.email" type="email" label="Email" name="email"></InputComponent>
      <InputComponent v-model="form.phone" type="text" label="Telefonszám" name="phone" ></InputComponent>
      <TextareaComponent v-model="form.message" class="border-none" label="Üzenet" name="message"></TextareaComponent>
    </div>

    <div class="py-3">

      <div class="mb-3">
        <input id="check" type="checkbox" required> <label for="check" class="inline">Elolvastam és elfogadom az <NuxtLink to="/adatkezelesi" class="text-blue-500 underline">Adatkezelesi tájékoztatót</NuxtLink></label>
      </div>
      <button type="submit" class="btn bg-amber-300 px-4 border border-black py-2.5 rounded-full inline-flex items-center text-sm font-semibold transition-all duration-300 no-underline">Elküldöm</button>
    </div>
  </form>
</template>

<style scoped>
.btn {
  @apply text-black no-underline;
}

.btn:hover {
  @apply text-black no-underline;
  box-shadow: 0 5px black;
  transform: translateY(-5px);
}
</style>
