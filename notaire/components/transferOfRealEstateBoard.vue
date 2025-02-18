<template>
  <v-data-table
    :headers="headers"
    :items="transferOfRealEstates"
    :search="transferOfRealEstatesSearch"
    no-data-text="Aucune procédure de succession de biens immobiliers."
    hover
    class="customTable2"
    :loading="loading"
  >
    <template #item="{ item }">
      <tr>
        <td>{{ item.NUM }}</td>
        <td>{{ formatDate(item.CREATE_AT) }}</td>
        <td style="text-align: center">
          <v-icon :color="getStatusColorIcon(item.SUPPLY_OF_PARTS)">{{
            getStatusIcon(item.SUPPLY_OF_PARTS)
          }}</v-icon>
        </td>
        <td style="text-align: center">
          <v-icon :color="getStatusColorIcon(item.SETTLEMENT_OF_FEES)">{{
            getStatusIcon(item.SETTLEMENT_OF_FEES)
          }}</v-icon>
        </td>
        <td style="text-align: center">
          <v-icon
            :color="getStatusColorIcon(item.VALUATION_OF_INDIVIDUAL_PROPERTIES)"
            >{{
              getStatusIcon(item.VALUATION_OF_INDIVIDUAL_PROPERTIES)
            }}</v-icon
          >
        </td>
        <td style="text-align: center">
          <v-icon :color="getStatusColorIcon(item.DECLARATION_OF_ESTATE)">{{
            getStatusIcon(item.DECLARATION_OF_ESTATE)
          }}</v-icon>
        </td>
        <td style="text-align: center">
          <v-icon
            :color="
              getStatusColorIcon(item.PREPARATION_OF_REAL_ESTATE_CERTIFICATE)
            "
            >{{
              getStatusIcon(item.PREPARATION_OF_REAL_ESTATE_CERTIFICATE)
            }}</v-icon
          >
        </td>
        <td style="text-align: center">
          <v-icon
            :color="getStatusColorIcon(item.DEPOSIT_OF_REAL_ESTATE_CERTIFICATE)"
            >{{
              getStatusIcon(item.DEPOSIT_OF_REAL_ESTATE_CERTIFICATE)
            }}</v-icon
          >
        </td>
        <td style="text-align: center">
          <v-icon :color="getStatusColorIcon(item.DELIVERABLES)">{{
            getStatusIcon(item.DELIVERABLES)
          }}</v-icon>
        </td>
        <td style="text-align: center">
          {{ Math.round(item.PERCENTAGE * 100) }}%
        </td>
        <td style="text-align: center">
          <v-chip
            size="small"
            variant="flat"
            :color="getStatusColorIcon(item.STATUS)"
            >{{ item.STATUS }}</v-chip
          >
        </td>
        <td style="text-align: center">
          <v-btn
            class="actionBtn"
            title="Voir les détails"
            color="blue"
            size="x-small"
            density="comfortable"
            icon="mdi-text-box-outline"
            @click="selectProcedure(item.id)"
            :to="redirectRegardingProcedure(item)"
          >
          </v-btn>
        </td>
      </tr>
    </template>
    <!-- Slot pour afficher un loader quand la table est vide -->
    <template v-slot:loading>
      <div class="d-flex justify-center my-10">
        <v-progress-circular color="red" indeterminate></v-progress-circular>
      </div>
    </template>
    <!-- Slot personnalisé pour l'affichage quand il n'y a pas de données -->
    <template #no-data>
      <div class="no-data-container">
        <v-img
          src="~/assets/img/tableIcon_nodata.png"
          height="80"
          width="80"
          class="mb-3"
          alt="Aucune donnée"
        ></v-img>
        <p>Aucune donnée</p>
      </div>
    </template>
  </v-data-table>
</template>

<script setup>
const transferOfRealEstates = ref([]);

const props = defineProps({
  realEstateData: Array,
});

const selectedProcedureStore = useSelectedDataStore();
function selectProcedure(val) {
  selectedProcedureStore.defineProcedureId(val);
}

const redirectRegardingProcedure = (procedure) => {
  return "/realEstateDetails";
};

const loading = ref(true);
const headers = ref([
  { align: "center", key: "NUM", title: "N° du dossier" },
  { align: "center", key: "CREATE_AT", title: "Date de création" },
  {
    align: "center",
    title: "Niveau d'avancement",
    children: [
      {
        align: "center",
        key: "SUPPLY_OF_PARTS",
        title: "Fourniture des pièces",
      },
      {
        align: "center",
        key: "SETTLEMENT_OF_FEES",
        title: "Règlement des frais",
      },
      {
        align: "center",
        key: "VALUATION_OF_INDIVIDUAL_PROPERTIES",
        title: "Évaluation des différents biens immobiliers",
      },
      {
        align: "center",
        key: "DECLARATION_OF_ESTATE",
        title: "Déclaration de la succession",
      },
      {
        align: "center",
        key: "PREPARATION_OF_REAL_ESTATE_CERTIFICATE",
        title: "Établissement de l'attestation immobilière",
      },
      {
        align: "center",
        key: "DEPOSIT_OF_REAL_ESTATE_CERTIFICATE",
        title: "Dépôt de l'attestation immobilière",
      },
      { align: "center", key: "DELIVERABLES", title: "Livrables" },
    ],
  },
  { align: "center", key: "PERCENTAGE", title: "Pourcentage" },
  { align: "center", key: "STATUS", title: "Statut" },
  { align: "center", key: "ACTIONS", title: "Actions", width: "100px" },
]);

watchEffect(() => {
  console.log("props realEstateData: ", props.realEstateData);
  if (props.realEstateData) {
    props.realEstateData.forEach((procedure, index) => {
      transferOfRealEstates.value.push({
        id: procedure.id,
        NUM: index + 1,
        CREATE_AT: procedure.createAt.toString(),
        SUPPLY_OF_PARTS: procedure.step.steps[0].status,
        SETTLEMENT_OF_FEES: procedure.step.steps[1].status,
        VALUATION_OF_INDIVIDUAL_PROPERTIES: procedure.step.steps[2].status,
        DECLARATION_OF_ESTATE: procedure.step.steps[3].status,
        PREPARATION_OF_REAL_ESTATE_CERTIFICATE: procedure.step.steps[4].status,
        DEPOSIT_OF_REAL_ESTATE_CERTIFICATE: procedure.step.steps[5].status,
        DELIVERABLES: procedure.step.steps[6].status,
        PERCENTAGE: procedure.progression,
        STATUS: procedure.status,
      });
    });
    loading.value = false;
  }
});
</script>

<style>
@import url("~/assets/css/table.css");

.no-data-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  text-align: center;
  font-size: 16px;
}
</style>
