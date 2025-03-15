<template>
  <div class="combobox-container">
    <Combobox v-model="selectedCity">
      <div class="combobox-wrapper">
        <div class="combobox-input-container">
          <ComboboxInput
            class="combobox-input"
            @input="handelSearch"
            placeholder="Search for a city..."
          />
        </div>
        <TransitionRoot leave="fade-leave" @after-leave="query = ''">
          <ComboboxOptions class="combobox-options" static>
            <ComboboxOption
              v-for="city in waetherstore.getCities"
              :key="city.id"
              :value="city"
              v-slot="{ active, selected }"
            >
              <li :title="city.country" class="combobox-option" :class="{ active, selected }">
                <span class="option-text">
                  {{ city.name }}
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from "@headlessui/vue";
import { ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import { useWeatherStore } from "../weatherStore";
import { useDebounceFn } from "@vueuse/core";

const waetherstore = useWeatherStore();

const selectedCity = ref(null);

const handelSearch = useDebounceFn((e) => {
  waetherstore.searchCity(e.target.value);
}, 1000);

watch(selectedCity, () => {
  waetherstore.setCity(selectedCity.value.name);
});

</script>

<style scoped>
.combobox-container {
  width: 10rem;
}

.combobox-wrapper {
  position: relative;
}

.combobox-input-container {
  position: relative;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px #eae4ea solid;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.combobox-input {
  width: 100%;
  border: none;
  padding: 9px;
  font-size: 0.85rem;
  color: black;
  font-weight: 600;
  outline: none;
}

.combobox-button {
  position: absolute;
  right: 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #777;
}

.combobox-options {
  position: absolute;
  margin-top: 0.25rem;
  max-height: 10rem;
  width: 100%;
  overflow-y: auto;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  font-size: 0.875rem;
  z-index: 10;
}

.no-results {
  padding: 0.5rem 1rem;
  color: #666;
}

.combobox-option {
  cursor: default;
  position: relative;
  display: flex;
  justify-content: start;
  padding: 3px 2px 3px 15px;
}

.option-text {
  display: block;
  font-weight: normal;
}

.selected {
  background-color: #dbdbdb;
  font-weight: bold !important;
}

.combobox-option.active {
  background-color: #008080;
  color: white;
}
</style>
