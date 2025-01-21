
<script setup>
  const props = defineProps({
    stepNumber: {
      type: Number,
      required: true
    },
    stepBackgroundColor: {
      type: String,
      required: true
    },
    stepTextColor: {
      type: String,
      required: true
    }
  });

</script>

<template>
  <div class="stepNumber" :style="{background: stepBackgroundColor, color: stepTextColor}" >{{ stepNumber }}</div>
</template>

<style scoped>
  .stepNumber {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 500;
    font-size: 1.2rem;
  }

</style>
