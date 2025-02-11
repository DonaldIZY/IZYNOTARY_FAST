<template>
  <v-row>
    <v-card class="cardStat">
      <v-card-text>
        <v-row>
          <v-col class="sheetStatCol">
            <v-sheet
              class="sheet"
              :color="iconBackgroundColor"
              elevation="2"
              rounded="lg"
            >
              <v-icon class="sheetIcon" :color="iconColor">{{ icon }}</v-icon>
            </v-sheet>
          </v-col>
          <v-col class="sheetStatNumber">
            <div class="text-h4 font-weight-light">{{ text }}</div>
            <div class="font-weight-light">{{ subText }}</div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script setup>
const props = defineProps({
  icon: String,
  iconBackgroundColor: {
    type: String,
    default: "#ffffff",
  },
  iconColor: {
    type: String,
    default: "#00000",
  },
  title: String,
  text: {
    type: String,
    default: "XXXXX",
  },
  subText: {
    type: String,
    default: "Items",
  },
});
</script>

<style>
.cardStat {
  margin: 0.15rem;
  width: 100%;
  max-width: 30rem;
  min-width: 15rem;
}

.sheetStatCol {
  display: flex;
  align-items: center;
}

.sheet {
  height: 6rem;
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sheetStatNumber {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: end;
}

.sheetIcon {
  font-size: 2.5rem;
}
</style>
