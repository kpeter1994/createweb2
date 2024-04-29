<script lang="ts" setup>
import {ref} from 'vue';

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const config = useRuntimeConfig();

async function sendRequest() {

  await useApiFetch('/sanctum/csrf-cookie')

  const { data, error} = await useApiFetch('/api/send-mail', {
    method: 'POST',
    body: form.value
  });

  return { data, error};
}
</script>

<template>
  <form @submit.prevent="sendRequest">
    <div class="border border-neutral-500 rounded-2xl ">
      <InputComponent v-model="form.name" type="text" label="Név" name="name"></InputComponent>
      <InputComponent v-model="form.email" type="email" label="Email" name="email"></InputComponent>
      <InputComponent v-model="form.phone" type="text" label="Telefonszám" name="phone" ></InputComponent>
      <TextareaComponent v-model="form.message" class="border-none" label="Üzenet" name="message"></TextareaComponent>
    </div>

    <div class="py-3">
      <button type="submit">Elküldöm</button>
    </div>
  </form>
</template>

<style scoped></style>
