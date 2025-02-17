<script setup>
const props = defineProps({
  stepList: {
    type: Array,
  },
});

const stepList = toRef(props.stepList);
</script>

<style scoped>
.perso {
  width: 100%;
  height: 100%;
  padding: 0 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  position: relative;
}
</style>

<template>
  <div class="perso">
    <step-box
      :number="1"
      :title="stepList[0].action"
      :status="stepList[0].status.toLowerCase()"
      icon="document-file.png"
      date="17/01/2025"
      :listOfSubStep="Object.entries(stepList[0].documents)"
      :first="true"
    />
    <step-box
      :number="2"
      :title="stepList[1].action"
      :status="stepList[1].status.toLowerCase()"
      icon="policy.png"
      date="17/01/2025"
      :listOfSubStep="Object.entries(stepList[1].documents)"
    />
    <step-box
      :number="3"
      :title="stepList[2].action"
      :status="stepList[2].status.toLowerCase()"
      icon="debit-card2.png"
      date="17/01/2025"
      :listOfSubStep="Object.entries(stepList[2].documents)"
    />
    <step-box
      :number="4"
      :title="stepList[3].action"
      :status="stepList[3].status.toLowerCase()"
      icon="autograph.png"
      date="17/01/2025"
      :listOfSubStep="Object.entries(stepList[3].documents)"
    />
    <step-box
      :number="5"
      :title="stepList[4].action"
      :status="stepList[4].status.toLowerCase()"
      icon="document.png"
      date="17/01/2025"
      :listOfSubStep="Object.entries(stepList[4].documents)"
    />
    <step-box
      :number="6"
      :title="stepList[5].action"
      :status="stepList[5].status.toLowerCase()"
      icon="letter.png"
      date="17/01/2025"
      :listOfSubStep="Object.entries(stepList[5].documents)"
    />
  </div>
</template>
