<template>
  <div>
    <Popper placement="bottom-end">
      <button>
        <img src="../assets/menu.svg" alt="" />
      </button>
      <template #content>
        <Switchers :options="menuOptions" />
      </template>
    </Popper>
  </div>
</template>

<script setup lang="ts">
import Switchers from "./Switchers.vue";
import { useWeatherStore } from "../weatherStore";

const weatherStore = useWeatherStore();

const menuOptions = [
  {
    label: "Temperature",
    buttons: [
      {
        label: "°C",
        value: "°C",
      },
      {
        label: "°F",
        value: "°F",
      },
    ],
    value: weatherStore.getTempUnit,
  },
  {
    label: "Measurements",
    buttons: [
      {
        label: "Metric",
        value: "Metric",
      },
      {
        label: "Imperial",
        value: "Imperial",
      },
    ],
    value: "Imperial",
  },
];
</script>
<style scoped>
button {
  border-radius: 8px;
  border-width: 1px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px #eae4ea solid;
}
</style>
