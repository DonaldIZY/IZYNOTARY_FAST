<template>
  <v-card class="pa-2 card">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <canvas ref="pieChartCanvas"></canvas>
    </v-card-text>
  </v-card>
</template>

<script>
import {
  ArcElement,
  Chart,
  Legend,
  PieController,
  Title,
  Tooltip,
} from "chart.js";

// Enregistrement des composants nécessaires pour un Pie Chart
Chart.register(PieController, ArcElement, Tooltip, Legend, Title);

export default {
  props: {
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
    legend: {
      type: Boolean,
      default: true, // Affichage de la légende par défaut
    },
    legendPosition: {
      type: String,
      default: "bottom", // Affichage de la légende par défaut
    },
  },
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      new Chart(this.$refs.pieChartCanvas, {
        type: "pie",
        data: {
          labels: this.labels,
          datasets: this.datasets,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: this.legend,
              position: this.legendPosition,
            },
            tooltip: {
              enabled: true,
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
