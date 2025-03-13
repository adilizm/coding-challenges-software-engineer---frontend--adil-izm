<script setup lang="ts">
import moment from "moment";
import MenuPopper from "./components/MenuPopper.vue";
</script>

<template>
  <div class="weather-container">
    <div class="weather-card">
      <div class="weather-head">
        <h2>Casablanca</h2>
        <div class="lable">
          {{ moment(new Date()).format("dddd, MMMM D, YYYY") }}
        </div>
        <div class="lable">
          {{ moment(new Date()).format("h:mm A") }}
        </div>
      </div>
      <MenuPopper/>
    </div>
  </div>
</template>

<style>
.weather-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  max-width: 702px;
  width: 100%;
  border-radius: 24px;
  padding-top: 24px;
  padding-right: 32px;
  padding-bottom: 24px;
  padding-left: 32px;
  gap: 40px;
  margin: auto;
  margin-top: 20px;
}
.weather-card {
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
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
