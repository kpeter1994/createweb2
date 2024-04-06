<script lang="ts" setup>
import Chart from "primevue/chart";

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'A konkurensed',
      data: [60, 45, 50, 40, 30, 20, 50, 30, 20, 40, 60, 70],
      fill: false,
      borderColor: 'rgb(141,141,141)',
      tension: 0.2
    },
    {
      label: 'A te vállakozásod',
      data: [35, 40, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
      fill: false,
      borderColor: 'rgb(196,244,73)',
      tension: 0.2
    }
  ]
}

const Time = () => {
  const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
  const time = new Date().toLocaleTimeString([], options);
  return { time };
};
</script>

<template>
  <div>
    <div class="overflow-hidden relative mx-auto max-w-[380px] h-[490px] bg-white ">
      <div class="p-6 relative w-full mx-auto bg-gray-50 rounded-t-[60px]">
        <div class="flex justify-between items-center px-3">
          <span class="block text-sm ml-2">{{Time().time}}</span>
          <div class="flex gap-1">
            <img src="/image/mobil/MobileSignal.svg" alt="jelerősség">
            <img src="/image/mobil/Wifi.svg" alt="wifi">
            <img src="/image/mobil/Battery.svg" alt="töltötség">
          </div>
        </div>
        <div class="mt-20 bg-white shadow pt-10 rounded-t-[1rem]">
          <span class="block text-center font-semibold text-gray-600">Az oldalad eredményei</span>
          <Chart class="mt-6 w-full h-[400px]" type="line" :data="chartData"  />
        </div>
        <NotificationComponent />


      </div>

      <img class="absolute top-0 w-full pointer-events-none" src="/image/iphone.svg"  alt="weboldal fejlesztés" />
    </div>
  </div>
</template>

<style scoped></style>
