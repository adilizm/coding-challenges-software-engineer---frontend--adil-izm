<template>
  <div class="switcher">
    <ul>
      <li v-for="(option, index) in options" :key="index">
        <label v-if="showLable" for="">{{ option.label }}</label>
        <div class="switchers">
          <button
            v-for="(btn, i) in option.buttons"
            :key="i"
            @click="option.actionChanger(btn.value)"
            :class="{ selected: btn.value == option.value }"
          >
            {{ btn.label }}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { useWeatherStore } from "../weatherStore";

const weatherStore = useWeatherStore();
interface btn {
  label: string;
  value: string | number;
}
interface Option {
  label: string;
  buttons: btn[];
  value: string | number;
  actionChanger: any;
}
withDefaults(
  defineProps<{
    options: Option[];
    showLable?: boolean;
  }>(),
  {
    showLable: true,
  }
);

</script>

<style>
.switcher {
  width: 262px;
  border: 1px #e1e4ea solid;
  border-radius: 8px;
  border-width: 1px;
  padding: 16px;
  gap: 24px;
  background-color: white;
}
.switcher > ul {
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.switchers {
  display: flex;
  justify-content: space-evenly;
}
.switcher > ul > li {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.switcher > ul > li > div {
  background-color: #f5f7fa;
  padding: 4px;
  border-radius: 10px;
}
.switcher > ul > li > div > button {
  background-color: #f5f7fa;
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 6px;
  color: #99a0ae;
  font-family: "Inter", sans-serif;
}
.switcher > ul > li > div > button.selected {
  background-color: white;
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 4px;
  color: black;
  font-weight: 500;
}
</style>
