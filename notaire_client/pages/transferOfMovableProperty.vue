<template>
  <div class="ga-4">
    <back-button
      title="Procédure de succession de biens mobiliers"
      goBackTo="/home"
    />
  </div>

  <v-data-table
    :headers="headers"
    :items="transferOfMovableProperties"
    :search="transferOfMovablePropertiesSearch"
    no-data-text="Aucune procédure de succession de biens mobiliers."
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
          <v-icon :color="getStatusColorIcon(item.REQUEST_TO_BANK)">{{
            getStatusIcon(item.REQUEST_TO_BANK)
          }}</v-icon>
        </td>
        <td style="text-align: center">
          <v-icon
            :color="
              getStatusColorIcon(item.PREPARATION_OF_INCORPORATION_LETTER)
            "
            >{{
              getStatusIcon(item.PREPARATION_OF_INCORPORATION_LETTER)
            }}</v-icon
          >
        </td>
        <td style="text-align: center">
          <v-icon :color="getStatusColorIcon(item.DECLARATION_OF_ESTATE)">{{
            getStatusIcon(item.DECLARATION_OF_ESTATE)
          }}</v-icon>
        </td>
        <td style="text-align: center">
          <v-icon :color="getStatusColorIcon(item.BANK_DEPOSIT)">{{
            getStatusIcon(item.BANK_DEPOSIT)
          }}</v-icon>
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
import { useSelectedDataStore } from "~/stores/selectedDataStore";
import { useCardStore } from "~/stores/cardStore";

const loading = ref(true);
const receiveDatas = ref([]);
const transferOfMovableProperties = ref([]);

const selectedProcedureStore = useSelectedDataStore();
function selectProcedure(val) {
  selectedProcedureStore.defineProcedureId(val);
}

const redirectRegardingProcedure = (procedure) => {
  return "/personalPropertyDetails";
};

onMounted(() => {
  try {
    const store = useCardStore();
    receiveDatas.value = store.selectedData;
    console.log("receiveDatas : ", receiveDatas);

    watchEffect(() => {
      if (receiveDatas.value) {
        receiveDatas.value.forEach((procedure) => {
          transferOfMovableProperties.value.push({
            id: procedure.id,
            NUM: procedure.folderNum,
            CREATE_AT: procedure.createAt.toString(),
            SUPPLY_OF_PARTS: procedure.step.steps[0].status,
            REQUEST_TO_BANK: procedure.step.steps[1].status,
            PREPARATION_OF_INCORPORATION_LETTER: procedure.step.steps[2].status,
            DECLARATION_OF_ESTATE: procedure.step.steps[3].status,
            BANK_DEPOSIT: procedure.step.steps[4].status,
            DELIVERABLES: procedure.step.steps[5].status,
            PERCENTAGE: procedure.progression,
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
        align: "start",
        key: "SUPPLY_OF_PARTS",
        title: "Fourniture des pièces",
      },
      {
        align: "start",
        key: "REQUEST_TO_BANK",
        title: "Demande auprès de la banque",
      },
      {
        align: "start",
        key: "PREPARATION_OF_INCORPORATION_LETTER",
        title: "Élaboration de la lettre de constitution",
      },
      {
        align: "start",
        key: "DECLARATION_OF_ESTATE",
        title: "Déclaration de la succession",
      },
      {
        align: "start",
        key: "BANK_DEPOSIT",
        title: "Dépôt au près de la banque",
      },
      { align: "start", key: "DELIVERABLES", title: "Livrables" },
    ],
  },
  { align: "start", key: "PERCENTAGE", title: "Pourcentage" },
  { align: "start", key: "STATUS", title: "Statut" },
  { align: "center", key: "ACTIONS", title: "Actions", width: "100px" },
]);
</script>

<style>
@import url("~/assets/css/table.css");

.ga-4 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
</style>
