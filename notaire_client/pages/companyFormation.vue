<template>
  <div class="ma-4">
    <back-button
      title="Procédure de constitution de société"
      goBackTo="/home"
    />
  </div>
  <div class="ma-4">
    <v-data-table
      :headers="headers"
      :items="companyFormations"
      no-data-text="Aucune procédure de constitution de société."
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
            <v-icon :color="getStatusColorIcon(item.WRITING_DEED_OF_SALE)">{{
              getStatusIcon(item.WRITING_DEED_OF_SALE)
            }}</v-icon>
          </td>
          <td style="text-align: center">
            <v-icon :color="getStatusColorIcon(item.SETTLEMENT_OF_FEES)">{{
              getStatusIcon(item.SETTLEMENT_OF_FEES)
            }}</v-icon>
          </td>
          <td style="text-align: center">
            <v-icon :color="getStatusColorIcon(item.SIGNATURE_OF_ACTS)">{{
              getStatusIcon(item.SIGNATURE_OF_ACTS)
            }}</v-icon>
          </td>
          <td style="text-align: center">
            <v-icon
              :color="getStatusColorIcon(item.SIGNED_DOCUMENT_DEPOSITED)"
              >{{ getStatusIcon(item.SIGNED_DOCUMENT_DEPOSITED) }}</v-icon
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
              size="small"
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
  </div>
</template>

<script setup>
import { useCardStore } from "~/stores/cardStore";
import { useSelectedDataStore } from "~/stores/selectedDataStore";
const loading = ref(true);

const receiveDatas = ref([]);
const companyFormations = ref([]);

const selectedProcedureStore = useSelectedDataStore();
function selectProcedure(val) {
  selectedProcedureStore.defineProcedureId(val);
}

const redirectRegardingProcedure = (procedure) => {
  return "/companyIncorporationDetails";
};

onMounted(() => {
  try {
    const store = useCardStore();
    receiveDatas.value = store.selectedData;

    watchEffect(() => {
      if (receiveDatas.value) {
        receiveDatas.value.forEach((procedure) => {
          companyFormations.value.push({
            id: procedure.id,
            NUM: procedure.folderNum,
            CREATE_AT: procedure.createAt.toString(),
            SUPPLY_OF_PARTS: procedure.step.steps[0]?.status,
            WRITING_DEED_OF_SALE: procedure.step.steps[1].status,
            SETTLEMENT_OF_FEES: procedure.step.steps[2].status,
            SIGNATURE_OF_ACTS: procedure.step.steps[3].status,
            SIGNED_DOCUMENT_DEPOSITED: procedure.step.steps[4].status,
            DELIVERABLES: procedure.step.steps[5].status,
            PERCENTAGE: parseFloat(procedure.progression),
            STATUS: procedure.status,
          });
        });
        loading.value = false;
      }
    });
  } catch (error) {
    console.error("Erreur de parsing des données :", error);
  }
});

const headers = ref([
  { align: "start", key: "NUM", title: "N° du dossier" },
  { align: "start", key: "CREATE_AT", title: "Date de création" },
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
        key: "WRITING_DEED_OF_SALE",
        title: "Rédaction des statuts",
      },
      {
        align: "center",
        key: "SETTLEMENT_OF_FEES",
        title: "Règlement des frais",
      },
      {
        align: "center",
        key: "SIGNATURE_OF_ACTS",
        title: "Signature des actes",
      },
      {
        align: "center",
        key: "SIGNED_DOCUMENT_DEPOSITED",
        title: "Dépôt des actes signés",
      },
      { align: "center", key: "DELIVERABLES", title: "Livrables" },
    ],
  },
  { align: "center", key: "PERCENTAGE", title: "Pourcentage" },
  { align: "center", key: "STATUS", title: "Statut" },
  { align: "center", key: "ACTIONS", title: "Actions", width: "100px" },
]);
</script>

<style>
@import url("~/assets/css/table.css");

.ga-4 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

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
