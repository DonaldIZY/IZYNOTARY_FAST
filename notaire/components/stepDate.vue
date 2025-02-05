<script setup >

  const props = defineProps({
    date: {
      type: String,
      required: true
    },
    borderColor: {
      type: String,
      required: true
    },
    parentDoor: { //["non débuté", "en cours", "suspendue", "arrêtée", "terminée"]
      type: String,
      required: true
    }
  });

</script>

<style scoped>
  .stepDate {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6rem 1.5rem;
    gap: 0.8rem;
    border-width: 5px;
    border-radius: 10px;
    border-style: solid;
  }

  .stepDate img {
    width: 1.5rem;
  }

  .stepDate span {
    font-size: 0.9rem;
  }
</style>

<template>
  <div v-if="parentDoor == 'non débuté'" class="stepDate" :style="{borderColor: borderColor, opacity: 0.5}">
    <img src="../assets/img/calendarfilled.png" />
    <span>""</span>
  </div>
  <div v-else class="stepDate" :style="{borderColor: borderColor}">
    <img src="../assets/img/calendarfilled.png" />
    <span >""</span>
  </div>
</template>