<template>
  <div class="d-flex align-center switch">
    <span class="mr-3">{{ label }}</span>
    <v-switch
      v-model="modelValue"
      :color="color"
      hide-details
      @update:modelValue="onToggle"
    ></v-switch>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, ref } from "vue";

const props = defineProps({
  label: String,
  color: String,
  modelValue: Boolean, // Permet de récupérer la valeur du switch
  onToggle: Function,
});

const emit = defineEmits(["update:modelValue"]);

const modelValue = ref(props.modelValue);
</script>

<style>
.switch {
  justify-content: space-between;
  font-size: 1rem;
}
</style>
