<script lang="ts" setup>

const selectedCities = ref();
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);

const selectedQuestion = ref(0);

const select = (index: number) => {
  selectedQuestion.value = index;
  console.log(selectedQuestion.value);
};

const questionContent = [
  {
    title: 'Ki az ügyfelünk?',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio doloribus, ducimus et Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio doloribus, ducimus et'
  },
  {
    title: 'Mit akar az ügyfelünk?',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio doloribus, ducimus et Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio doloribus, ducimus et'
  },
  {
    title: 'Hogyan tudjuk meggyözni, hogy minket vállsszon?',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio doloribus, ducimus et Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio doloribus, ducimus et'
  }
];

</script>

<template>
  <div class="flex flex-col lg:flex-row">
    <div class="lg:w-1/2">
      <MobilComponent>
        <Transition name="list">
          <div v-if="selectedQuestion === 0" class="mt-20 bg-white shadow-2xl pt-6 rounded-t-3xl h-full">
            <p class="font-bold mb-3 text-center text-neutral-700 text-lg">Ki az ügyfelünk?</p>
            <img class="w-full lg:max-w-[300px] mx-auto" src="../public/image/kinek.svg" alt="">
            <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select Cities"
                         :maxSelectedLabels="3" class="w-full md:w-20rem" />
          </div>
        </Transition>
        <Transition name="list">
          <div v-if="selectedQuestion === 1" class="mt-20 bg-white shadow-2xl pt-6 rounded-t-3xl h-full">
            <p class="font-bold mb-3 text-center text-neutral-700 text-lg">Mit akar az ügyfelünk?</p>
            <img class="w-full lg:max-w-[300px] mx-auto" src="../public/image/mit.svg" alt="">
          </div>
        </Transition>
        <Transition name="list">
          <div v-if="selectedQuestion === 2" class="mt-20 bg-white shadow-2xl pt-6 rounded-t-3xl h-full">
            <p class="font-bold mb-3 text-center text-neutral-700 text-lg">Ki az ügyfelünk?</p>
            <img class="w-full lg:max-w-[300px] mx-auto" src="../public/image/hogyan.svg" alt="">
          </div>
        </Transition>

      </MobilComponent>
    </div>

    <div class="lg:w-1/2 flex flex-col gap-8 relative">
      <div class="mb-6">

        <div class="inline-flex gap-6 relative">
          <div class="h-[1px] w-full absolute top-[50%] bottom-[50%] right-0 left-0 bg-neutral-950/5"></div>

          <span @click="select(0)" :class="selectedQuestion === 0 ? 'bg-green-500 ' : 'bg-white' " class="inline-flex relative cursor-pointer  w-8 h-8 justify-center items-center rounded-full ring-1 ring-neutral-950/5">1</span>
          <span @click="select(1)" :class="selectedQuestion === 1 ? 'bg-green-500 ' : 'bg-white' " class="inline-flex relative cursor-pointer  w-8 h-8 justify-center items-center rounded-full ring-1 ring-neutral-950/5">2</span>
          <span @click="select(2)" :class="selectedQuestion === 2 ? 'bg-green-500 ' : 'bg-white' " class="inline-flex relative cursor-pointer  w-8 h-8 justify-center items-center rounded-full ring-1 ring-neutral-950/5">3</span>
        </div>

      </div>


      <div @click="select(index)"
           v-for="(question, index) in questionContent"
           :key="index"
           :class="selectedQuestion === index ? 'text-white' : '' "
           class="rounded-3xl p-6 ring-1 ring-neutral-950/5 transition cursor-pointer relative">
        <Transition name="fade">
          <div v-if="selectedQuestion === index"
             class="bg-neutral-800 absolute  inset-0 rounded-3xl " ></div>
        </Transition>
        <div class="relative z-10">
          <span class="font-serif text-lg font-semibold block mb-3">{{question.title}}</span>
          <p>{{question.body}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


</style>
