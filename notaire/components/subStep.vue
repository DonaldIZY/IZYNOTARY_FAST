
<script setup>
//images should be in the public directory to be handled easily
  const props = defineProps({
    text: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    inputName: {
      type: String,
      required: true
    },
    parentDoor: {
      type: String,
      required: true
    }
  });

  const styleObject = {
    "accentColor": "green"
  };
</script>

<template>
  <div class="subStep">
    <input v-if="parentDoor == 'not started' || status == 'none'" disabled="true" :name="inputName" type="checkbox" :style="styleObject" />
    <input v-else-if="status == 'done'" :name="inputName" type="checkbox" :style="styleObject" checked /> 
    <input v-else :name="inputName" type="checkbox" :style="styleObject" />
    <span>{{ text }}</span>
  </div>
</template>

<style scoped>
  .subStep {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .subStep span {
    font-size: 0.9rem;
  }
</style>