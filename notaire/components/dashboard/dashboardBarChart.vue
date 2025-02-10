<template>
  <v-card class="pa-4">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <canvas ref="barChartCanvas"></canvas>
    </v-card-text>
  </v-card>
</template>

<script>
import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default {
  name: "BarChart",
  props: {
    title: {
      type: String,
      default: "Statistiques",
    },
    labels: {
      type: Array,
      required: true,
    },
    datasets: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      new Chart(this.$refs.barChartCanvas, {
        type: "bar",
        data: {
          labels: this.labels,
          datasets: this.datasets,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
.v-card {
  width: 100%;
  max-width: 600px;
  margin: auto;
}

canvas {
  height: 300px !important;
}
</style>
