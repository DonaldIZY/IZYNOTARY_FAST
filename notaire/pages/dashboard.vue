<template>
  <div class="dashboard">
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="3">
        <v-row class="pa-2">
          <v-col cols="12" sm="6" md="6" lg="12"
            ><dashboard-stats-card
              iconBackgroundColor="#1b57b3"
              icon="mdi-folder-open-outline"
              iconColor="#ffffff"
              subText="Procédures"
            ></dashboard-stats-card>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="12"
            ><dashboard-stats-card
              iconBackgroundColor="#07913a"
              icon="mdi-account-tie-outline"
              iconColor="#ffffff"
              subText="Clients"
            ></dashboard-stats-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="5">
        <dashboard-bar-chart
          title="Répartition des procédures par type"
          :labels="chartLabels"
          :datasets="chartDatasets"
        />
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4">
        <dashboard-pie-chart
          title="Répartition des procédures par statut"
          :labels="chartLabels"
          :datasets="chartDatasets"
          :legend="true"
          legendPosition="right"
        />
      </v-col>
    </v-row>
    <v-row> </v-row>
  </div>
</template>

<script setup>
const loadProcedures = async () => {
  try {
    const allStats = await $fetch(API_SERVER_URL + `/stats`);
    if (allStats) {
    }
  } catch (err) {
    console.error("erreur lors de la reception des procédures : ", err);
  }
};
loadProcedures();

const chartLabels = [
  "Vente",
  "Constitution de société",
  "Modification de société",
  "Succession de biens immobiliers",
  "Succession de biens mobiliers",
  "Crédit",
];
const chartDatasets = [
  {
    // label: "Ventes",
    data: [10, 20, 30, 25, 40, 50],
    backgroundColor: "rgba(75, 192, 192, 0.2)",
    borderColor: "rgba(75, 192, 192, 1)",
    borderWidth: 1,
  },
];
</script>

<style>
.dashboard {
  width: 100%;
  height: 100%;
  padding: 1rem;
  margin: 0;
  background-color: whitesmoke;
  overflow: auto;
}
</style>
