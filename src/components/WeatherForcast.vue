<template>
  <div class="forcast">
    <Switchers :options="forcastOptions" :showLable="false"  />
    <div v-if="weatherStore.getForecastPeriod == 'hourly'" class="forcast-items">
      <Carousel v-bind="carouselConfig">
        <Slide v-for="slide in weatherStore.getforecastData" :key="slide">
          <div class="forcast-item">
            <span>{{ moment(slide.time).format('H:mm') }}</span>
            <img :src="slide.condition.icon" width="24" alt="" srcset="" />
            <strong v-if="weatherStore.temp_unit == '°C'">{{ slide.temp_c }}°</strong>
            <strong v-else>{{ slide.temp_f }}°</strong>
          </div>
        </Slide>
      </Carousel>
    </div>
    <div v-else class="forcast-items">
      <Carousel  v-bind="carouselConfig">
        <Slide v-for="slide in weatherStore.getforecastData" :key="slide">
          <div class="forcast-item">
            <span :title="moment(slide.date).format('ll')">{{ moment(slide.date).format('ddd') }}</span>
            <img :src="slide.day.condition.icon" width="24" alt="" srcset="" />
            <strong v-if="weatherStore.temp_unit == '°C'">{{ slide.day.avgtemp_c }}°</strong>
            <strong v-else>{{ slide.day.avgtemp_f }}°</strong>
            <strong class="muted" v-if="weatherStore.temp_unit == '°C'">{{ slide.day.mintemp_c }}°</strong>
            <strong class="muted" v-else>{{ slide.day.mintemp_f }}°</strong>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import Switchers from "./Switchers.vue";

import "vue3-carousel/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { computed } from "vue";
import { useWeatherStore } from "../weatherStore";
import moment from "moment";

const weatherStore = useWeatherStore();
const forcastOptions = computed(() => 
  [
    {
      label: "Forecasts",
      buttons: [
        {
          label: "Hourly Forecast",
          value: "hourly",
        },
        {
          label: "7-Day Forecast",
          value: "7day",
        },
      ],
      value: weatherStore.getForecastPeriod,
      actionChanger: weatherStore.updateForecastPeriod,
    },
  ]
);

const carouselConfig = {
  itemsToShow: 4,
  snapAlign:'start',
  wrapAround: true,
  breakpoints: {
    736: {
      itemsToShow: 8,
    },
  },
};
</script>
<style>
.forcast .switcher {
  width: -webkit-fill-available !important;
  padding: 0px !important;
  border: none !important;
}
.forcast-items {
  padding-top: 24px;
}
.forcast-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.muted{
  color: #99A0AE;
}
</style>
