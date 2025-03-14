<template>
    <div class="aqi">
        <div>
            <span class="lable">AQI</span>
            <span class="lable tooltip">300
                <img src="../assets/info.svg" alt="" srcset="">
            </span>
        </div>
        <div class="aqi-bar">
            <div class="fill" :style="`width:${(weatherstore.getAQI * 100 )/300}%;background-color:${weatherstore.getAqiColor}`"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '../weatherStore';

const weatherstore = useWeatherStore();

</script>

<style scoped>
.aqi{
    display: flex;
    flex-direction: column;
    gap:6px;
}
.aqi >div{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.tooltip{
    display: flex;
    align-items: center;
}
.aqi-bar{
    position: relative;
    background-color: #E1E4EA;
    height: 6px;
    border-radius: 6px;
}
.fill{
    border-radius: 6px;
    height: 6px;
}
.lable{
    color: black;
}

</style>