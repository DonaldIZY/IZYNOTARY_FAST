
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
    <input v-if="parentDoor == 'arrêtée' || status == 'false'" disabled="true" :name="inputName" type="checkbox" :style="styleObject" />
    <input v-else-if="status == 'true'" :name="inputName" type="checkbox" :style="styleObject" checked /> 
    <input v-else :name="inputName" type="checkbox" :style="styleObject" />
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
  .subStep {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 10px;
  }

  .subStep p {
    width: 100%;
    min-width: 185px;
    font-size: 0.9rem;
    /* text-wrap: nowrap; */
    overflow-x: hidden;
  }
</style>