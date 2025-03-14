<template>
  <div class="weather-info">
    <div class="temperature-main">
      <img :src="weatherstore.getConditionIcon" />
      <div class="temperature">{{ weatherstore.getTemperature }} {{ weatherstore.getTempUnit }}</div>
    </div>
    <div class="temp-detailes">
      <div class="temp-description">{{ weatherstore.getConditionText }}</div>
      <span class="temp-feeling">Feels like {{ weatherstore.getFeelingLike }}{{ weatherstore.getTempUnit }}</span>
    </div>
  </div>
</template>

<script setup>
import { useWeatherStore } from '../weatherStore';


const weatherstore = useWeatherStore()

</script>
<style>
.weather-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.weather-info > div > img {
  width: 110px;
}
.temperature {
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: -1%;
  color: #0e121b;
}
.temp-detailes {
  text-align: center;
}
.temp-description {
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0%;
  text-align: center;
}
.temp-feeling {
  font-family: Inter;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -1.1%;
  text-align: right;
  color: #525866;
}

@media (min-width: 736px) {
  .weather-info {
    flex-direction: row;
    justify-content: space-between;
  }
  .weather-info > div > img {
    width: 74px;
  }

  .temperature-main{
    display: flex;
    gap:16px
  }

}
</style>
