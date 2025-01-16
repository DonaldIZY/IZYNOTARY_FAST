
<script setup>
//images should be in the public directory to be handled easily
  const props = defineProps({
    imagePath: {
      type: String,
      required: true
    },
    stepBackgroundColor: {
      type: String,
      required: true
    }
  });

  const styleObject = {
    "background": props.stepBackgroundColor
  };
  
</script>

<template>
  <div class="stepProgressionIcon" :style="styleObject" >
    <img :src="imagePath" />
  </div>
</template>

<style scoped>
  .stepProgressionIcon {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 0.5rem 0;
  }

  .stepProgressionIcon > img {
    width: 1rem;
  }

</style>