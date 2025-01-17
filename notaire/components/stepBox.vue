
<script setup>
//images should be in the public directory to be handled easily
// status is one of ["not started", "current", "canceled", "suspended", "done"]
  const props = defineProps({
    number: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    progressIcon: {
      type: String,
      required: true
    },
    listOfSubStep: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  });

  function statusToColor(val) {
    if(val == "done") {
      return "green";
    }else if(val == "not started") {
      return "#EAE8E6";
    }else if(val == "current") {
      return "orange";
    }else if(val == "canceled") {
      return "red";
    }else if(val == "suspended") {
      return "orangered";
    }
  }

</script>

<template>
  <div class="stepBox">
    <step-number :stepNumber="number" :stepBackgroundColor="statusToColor(status)" :stepTextColor="status == 'done' ? 'white' : 'black'" />

    <div class="stepText" :style="{borderColor: statusToColor(status)}" >
      <step-icon :stepBackgroundColor="statusToColor(status)" :image-path="icon" :parentDoor="status" />

      <h2>{{ title }}</h2>

      <div class="subStepBox">
        <sub-step 
          v-for="val in listOfSubStep" 
          :text="val.text" 
          :inputName="val.inputName" 
          :status="val.status" 
          :parentDoor="status"
        />
      </div>
      <div class="triangle" :style="{borderTopColor: statusToColor(status)}"></div>
    </div>
    <step-progress-icon :imagePath="progressIcon" :parent-door="status" :stepBackgroundColor="statusToColor(status)" />
    <step-date :date="date" :borderColor="statusToColor(status)" :parentDoor="status" />
  </div>
</template>

<style scoped>
  .stepBox {
    width: clamp(200px, 100%, 280px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .stepText {
    border-width: 5px;
    border-style: solid;
    border-radius: 15px;
    width: 100%;
    padding: 3rem 1rem 0.5rem;
    position: relative;
    margin: 4rem 0 1.7rem;
  }

  .stepText h2 {
    font-size: 1.1rem;
    text-align: center;
  }

  .subStepBox {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    height: 15rem;
  }
  
  .triangle {
    width: 0;
    height: 0;
    border-width: 1.5rem 1.5rem 0 1.5rem;
    border-style: solid;
    border-color: transparent;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, calc(1.5rem + 5px));
  }
</style>