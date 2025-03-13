<template>
  <div class="forcast">
    <Switchers :options="forcastOptions" :showLable="false" />
    <div class="forcast-items">
      <Carousel v-bind="carouselConfig">
        <Slide v-for="slide in 10" :key="slide">
          <div class="forcast-item">
            <span>9:00</span>
            <img src="../assets/Wind.svg" width="24" alt="" srcset="" />
            <strong>19°</strong>
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

const forcastOptions = [
  {
    label: "Forecasts",
    buttons: [
      {
        label: "Hourly Forecast",
        value: "Hourly Forecast",
      },
      {
        label: "7-Day Forecast",
        value: "7-Day Forecast",
      },
    ],
    value: "Hourly Forecast",
  },
];

const carouselConfig = {
  itemsToShow: 4,
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
</style>
