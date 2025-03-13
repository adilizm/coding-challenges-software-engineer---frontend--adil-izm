<template>
    <ul class="detaile-items">
        <li>
            <span class="lable">
                <img src="../assets/Humidity.svg" alt="" srcset="">
                Humidity
            </span>
             <span class="value">40%</span>
        </li>
        <li>
            <span class="lable">
                <img src="../assets/Precipitation.svg" alt="" srcset="">
                Precipitation
            </span>
             <span class="value">15%</span>
        </li>
        <li>
            <span class="lable">
                <img src="../assets/Wind.svg" alt="" srcset="">
                Wind
            </span>
             <span class="value">1 Km/h</span>
        </li>
        <li>
            <span class="lable">
                <img src="../assets/AQI.svg" alt="" srcset="">
                AQI
            </span>
            <span class="value">141</span>
        </li>
    </ul>
</template>

<script setup lang="ts"></script>

<style>
.detaile-items{
    display: flex;
    justify-content: center;
    gap: 4px;
    flex-wrap: wrap;
    column-gap: 56px ;
    margin: 0px;
    padding: 0px;
}
.detaile-items > li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

}
.detaile-items > li > .lable{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
    color: #0E121B;
}
.value{
    color: #0E121B;
    font-weight: 700;
}
@media (min-width: 736px) {
    .detaile-items >li{
        max-width: 46%;
    }
}

</style>