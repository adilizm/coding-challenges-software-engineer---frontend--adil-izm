<script setup lang="ts">
import moment from "moment";
import MenuPopper from "./components/MenuPopper.vue";
import WeatherInfo from "./components/WeatherInfo.vue";
import WeatherDetailes from "./components/WeatherDetailes.vue";
import WeatherForcast from "./components/WeatherForcast.vue";
import WeatherAqi from "./components/WeatherAqi.vue";
import { onMounted } from "vue";
import { useWeatherStore } from "./weatherStore";

const weatherStore = useWeatherStore();

onMounted(()=>{
  weatherStore.fetchCity();
})
</script>

<template>
  <div class="weather-container">
    <div class="weather-location">
      <div class="weather-head">
        <h2>{{ weatherStore.getCity }}</h2>
        <div class="lable">
          {{ moment(new Date()).format("dddd, MMMM D, YYYY") }}
        </div>
        <div class="lable">
          {{ moment(new Date()).format("h:mm A") }}
        </div>
      </div>
      <MenuPopper />
    </div>

    <WeatherInfo/>
    <WeatherDetailes/>
    <WeatherAqi/>
    <WeatherForcast />
  
  </div>
</template>

<style>
.weather-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  max-width: 702px;
  border-radius: 24px;
  padding-top: 24px;
  padding-right: 32px;
  padding-bottom: 24px;
  padding-left: 32px;
  gap: 40px;
  margin: auto;
  margin-top: 20px;
}
.weather-location {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: start;
  width: 100%;
}
@media (min-width: 736px) {
  .weather-location {
    flex-direction: row;
  }
}
.weather-head {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2px;
}
.weather-head > h2 {
  margin: 0px;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -1%;
}
.lable {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -1.1%;
  text-align: center;
  color: #525866;
}
</style>
