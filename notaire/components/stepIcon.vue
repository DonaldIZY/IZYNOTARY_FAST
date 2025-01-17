
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
    },
    parentDoor: {
      type: String,
      required: true
    }
  });

  // const styleObject = {
  //   "borderColor": props.stepBackgroundColor,
  //   "background": props.stepBackgroundColor
  // };
  
</script>

<template>
  <div class="stepIcon" :style="{background: stepBackgroundColor, borderColor: 'white'}" >
    <img v-if="parentDoor == 'not started'" :src="imagePath" style="opacity:0.5" />
    <img v-else="parentDoor == 'not started'" :src="imagePath" />
  </div>
</template>

<style scoped>
  .stepIcon {
    width: 5rem;
    height: 5rem;
    border-width: 4px;
    border-style: solid;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 0 7px gray;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -55%);
  }

  .stepIcon > img {
    /* display: block; */
    width: 2.5rem;
  }

</style>