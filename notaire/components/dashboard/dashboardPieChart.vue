<script setup>
import { ArcElement, Chart, Legend, PieController, Tooltip } from "chart.js";
import { onMounted, ref, watch } from "vue";

Chart.register(PieController, ArcElement, Tooltip, Legend);

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
  backgroundColors: {
    type: Array,
    default: () => ["#FF6384", "#36A2EB", "#FFCE56"],
  },
  borderColor: {
    type: String,
    default: "#ffffff",
  },
  borderWidth: {
    type: Number,
    default: 1,
  },
  legend: {
    type: Boolean,
    default: true,
  },
  legendPosition: {
    type: String,
    default: "bottom",
  },
});

const pieChartCanvas = ref(null);
let chartInstance = null;

const createChart = () => {
  if (chartInstance) {
    chartInstance.destroy();
  }
  const total = props.datasets.reduce((sum, value) => sum + value, 0);
  chartInstance = new Chart(pieChartCanvas.value, {
    type: "pie",
    data: {
      labels: props.labels,
      datasets: [
        {
          data: props.datasets || [],
          backgroundColor: props.backgroundColors,
          borderColor: props.borderColor,
          borderWidth: props.borderWidth,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: props.legend,
          position: props.legendPosition,
        },
        // datalabels: {
        //   color: "#ad1919",
        //   anchor: "end",
        //   align: "start",
        //   formatter: (value) => {
        //     const percentage = ((value / total) * 100).toFixed(2);
        //     return `${percentage}%`;
        //   },
        // },
        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              const value = tooltipItem.raw;
              const percentage = ((value / total) * 100).toFixed(0);
              return `${tooltipItem.label}: ${value} (${percentage}%)`;
            },
          },
        },
      },
    },
  });
};

onMounted(() => {
  createChart();
});

watch([() => props.labels, () => props.datasets], createChart, { deep: true });
</script>

<template>
  <v-card class="pa-2 card">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <canvas ref="pieChartCanvas"></canvas>
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
  max-height: 12rem;
  min-height: 8rem;
  width: 100%;
  height: 100% !important;
}
</style>
