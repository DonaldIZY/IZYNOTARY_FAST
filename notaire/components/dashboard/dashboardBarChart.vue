<script setup>
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

import { onMounted, ref, watch } from "vue";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const props = defineProps({
  title: {
    type: String,
    default: "Titre du graphique",
  },
  labels: {
    type: Array,
    required: true,
  },
  datasets: {
    type: Array,
    required: true,
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
  legend: {
    type: Boolean,
    default: false,
  },
  legendPosition: {
    type: String,
    default: "bottom",
  },
  backgroundColor: {
    type: String,
    default: "#36A2EB50",
  },
  borderColor: {
    type: String,
    default: "#36A2EB",
  },
  borderWidth: {
    type: Number,
    default: 1,
  },
});

const barChartCanvas = ref(null);
let chartInstance = null;

const createChart = () => {
  if (chartInstance) {
    chartInstance.destroy(); // Détruire l'ancien graphique avant d'en créer un nouveau
  }
  chartInstance = new Chart(barChartCanvas.value, {
    type: "bar",

    data: {
      labels: props.labels,
      datasets: [
        {
          data: props.datasets || [],
          backgroundColor: props.backgroundColor,
          borderColor: props.borderColor,
          borderWidth: props.borderWidth,
        },
      ],
    },
    options: {
      indexAxis: props.horizontal ? "y" : "x", // Permet d'afficher les barres horizontalement
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: props.legend ? true : false,
          position: props.legendPosition,
        },
      },
    },
  });
};

onMounted(() => {
  createChart();
});

// Regénérer le graphique si labels ou datasets changent
watch([() => props.labels, () => props.datasets], createChart, { deep: true });
</script>

<template>
  <v-card class="pa-2">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <canvas ref="barChartCanvas"></canvas>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.v-card {
  width: 100%;
  height: 100%;
  margin: 0;
}

canvas {
  max-height: 10rem;
  min-height: 8rem;
  width: 100%;
  height: 100% !important;
}
</style>
