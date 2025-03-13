<template>
  <div>
    <Popper placement="bottom-end">
      <button>
        <img src="../assets/menu.svg" alt="" />
      </button>
      <template #content>
        <Switchers/>
      </template>
    </Popper>
  </div>
</template>

<script setup lang="ts">
import Switchers from "./Switchers.vue" 
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
