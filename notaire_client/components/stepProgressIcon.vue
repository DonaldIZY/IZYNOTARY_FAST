
<script setup>
//images should be in the public directory to be handled easily
  const props = defineProps({
    stepBackgroundColor: {
      type: String,
      required: true
    },
    parentDoor: {
      type: String,
      required: true
    }
  });

  const styleObject = {
    "background": props.stepBackgroundColor
  };

  function getImagePathFromStatus(val) {
    if(val.toLowerCase() == "terminé") {
      return "check.png";
    }else if(val.toLowerCase() == "en cours") {
      return "recycle.png";
    }else if(val.toLowerCase() == "arrêté") {
      return "close.png";
    }else if(val.toLowerCase() == "non débuté") {
      return "dash.png";
    }
  }
  
</script>

<template>
  <div v-if="parentDoor == 'not started'" class="stepProgressionIcon" :style="{background: 'rgb(225, 225, 225)'}" >
    <!-- <img :src="getImagePathFromStatus(parentDoor)" /> -->
  </div>
  <div v-else="parentDoor" class="stepProgressionIcon" :style="{background: stepBackgroundColor}" >
    <img  :src="getImagePathFromStatus(parentDoor)" />
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
    margin: 0.5rem 0 0.9rem;
  }

  .stepProgressionIcon > img {
    width: 1rem;
  }
</style>