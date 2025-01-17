
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

  const styleObject = {
    "background": props.stepBackgroundColor
  };

  function getImagePathFromStatus(val) {
    if(val == "done") {
      return "check.png";
    }else if(val == "current") {
      return "recycle.png";
    }else{
      return "dash.png";
    }
  }
  
</script>

<template>
  <div v-if="parentDoor == 'not started'" class="stepProgressionIcon" :style="{background: stepBackgroundColor, opacity: 0.5}" >
    <img :src="getImagePathFromStatus(parentDoor)" />
  </div>
  <div v-else="parentDoor" class="stepProgressionIcon" :style="{background: stepBackgroundColor}" >
    <img :src="getImagePathFromStatus(parentDoor)" />
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