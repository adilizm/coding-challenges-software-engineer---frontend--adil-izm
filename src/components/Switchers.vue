<template>
  <div class="switcher">
    <ul>
      <li>
        <label for="">Temperature</label>
        <div class="switchers">
          <button class="selected">°C</button>
          <button>°F</button>
        </div>
      </li>
      <li>
        <label for="">Measurements</label>
        <div class="switchers">
          <button class="selected">Metric</button>
          <button>Imperial</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" scoped></script>

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
