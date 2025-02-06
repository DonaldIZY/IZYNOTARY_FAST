<script setup>
//images should be in the public directory to be handled easily
// status is one of ["not started", "current", "canceled", "suspended", "done"]
const props = defineProps({
  number: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  listOfSubStep: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  first: {
    type: Boolean,
    required: false,
  },
});

console.log("PROPS : ", props);

function statusToColor(val) {
  if (val.toLowerCase() == "terminée") {
    return "green";
  } else if (val.toLowerCase() == "non débuté") {
    return "#EAE8E6";
  } else if (val.toLowerCase() == "en cours") {
    return "orange";
  } else if (val.toLowerCase() == "arrêtée") {
    return "red";
  } else if (val.toLowerCase() == "suspendue") {
    return "purple";
  }
}
</script>

<template>
  <div class="stepBox">
    <step-number
      :stepNumber="number"
      :stepBackgroundColor="statusToColor(status)"
      :stepTextColor="status != 'non débuté' ? 'white' : 'black'"
    />

    <div class="stepText" :style="{ borderColor: statusToColor(status) }">
      <step-icon
        :stepBackgroundColor="statusToColor(status)"
        :image-path="icon"
        :parentDoor="status"
      />

      <h2>{{ title }}</h2>

      <div class="subStepBox">
        <sub-step
          v-for="val in listOfSubStep"
          :text="val[1].name"
          :inputName="val[0]"
          :status="val[1].filled.toString()"
          :parentDoor="status"
        />
      </div>
      <div
        class="triangle"
        :style="{ borderTopColor: statusToColor(status) }"
      ></div>
    </div>
    <div class="line"></div>
    <div v-if="!first" class="arrow"></div>
    <step-progress-icon
      :parent-door="status"
      :stepBackgroundColor="statusToColor(status)"
    />
    <step-date
      :date="date"
      :borderColor="statusToColor(status)"
      :parentDoor="status"
    />
  </div>
</template>

<style scoped>
.stepBox {
  width: clamp(250px, 100%, 300px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0.6rem;
  /* border: 1px solid red; */
  position: relative;
}

.stepText {
  border-width: 5px;
  border-style: solid;
  border-radius: 15px;
  width: 100%;
  padding: 3rem 1rem 0.5rem;
  position: relative;
  margin: 3.25rem 0 1.7rem;
}

.stepText h2 {
  width: 100%;
  font-size: 0.9rem;
  text-align: center;
  /* text-wrap: nowrap; */
  overflow: hidden;
  line-height: 1.3rem;
  height: 4rem;
}

.subStepBox {
  padding: 1rem 0;
  display: flex;
  width: 100%;
  height: 15rem;
  flex-direction: column;
  gap: 1.2rem;
  overflow-y: auto;
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

.line {
  width: 100%;
  height: 1px;
  background: black;
  position: absolute;
  left: 0;
  top: 81%;
  z-index: -2;
}

.arrow {
  width: 1px;
  height: 1px;
  background: black;
  position: absolute;
  left: 44%;
  top: 81%;
  z-index: -2;
  transform: rotate(45deg);
}

.arrow::after,
.arrow::before {
  content: "";
  display: block;
  background: black;
  position: absolute;
  right: 0;
  top: 0;
}

.arrow::before {
  width: 0.6rem;
  height: 1px;
}

.arrow::after {
  width: 1px;
  height: 0.6rem;
}
</style>
