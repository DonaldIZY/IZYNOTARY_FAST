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
              :text="procedure_total"
              subText="Procédures"
            ></dashboard-stats-card>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="12"
            ><dashboard-stats-card
              iconBackgroundColor="#07913a"
              icon="mdi-account-tie-outline"
              iconColor="#ffffff"
              :text="customer_total"
              subText="Clients"
            ></dashboard-stats-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="5">
        <dashboard-bar-chart
          title="Répartition des procédures par type"
          :labels="procedure_by_type_keys"
          :datasets="procedure_by_type_values"
          :horizontal="true"
        />
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4">
        <dashboard-pie-chart
          title="Répartition des procédures par statut"
          :labels="procedure_by_status_keys"
          :datasets="procedure_by_status_values"
          :legend="true"
          legendPosition="right"
        />
      </v-col>
    </v-row>
    <v-row> </v-row>
  </div>
</template>

<script setup>
var procedureStats = reactive({});
const procedure_total = ref(0);

const procedure_by_type_keys = ref([]);
const procedure_by_type_values = ref([]);

const procedure_by_status_keys = ref([]);
const procedure_by_status_values = ref([]);

var customerStats = reactive({});
const customer_total = ref(0);

const loadStats = async () => {
  try {
    const allStats = await $fetch(API_SERVER_URL + `/stats`);
    if (allStats) {
      procedureStats = allStats.procedure;
      procedure_total.value = procedureStats.totalFolders;

      customerStats = allStats.customer;
      customer_total.value = customerStats.totalCustomers;

      procedure_by_type_keys.value = [
        ...Object.keys(procedureStats.foldersByProcedureType),
      ];
      procedure_by_type_values.value = [
        ...Object.values(procedureStats.foldersByProcedureType),
      ];

      procedure_by_status_keys.value = [
        ...Object.keys(procedureStats.foldersByStatus),
      ];
      procedure_by_status_values.value = [
        ...Object.values(procedureStats.foldersByStatus),
      ];

      console.log(
        "procedure_by_status_keys : ",
        procedure_by_status_keys.value
      );
      console.log(
        "procedure_by_status_values : ",
        procedure_by_status_values.value
      );
    }
  } catch (err) {
    console.error("erreur lors de la reception des procédures : ", err);
  }
};

loadStats();
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
