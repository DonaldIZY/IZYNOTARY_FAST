<template>
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
const transferOfMovableProperties = ref([]);

const props = defineProps({
  movablePropertyData: Array,
});

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
        key: "REQUEST_TO_BANK",
        title: "Demande auprès de la banque",
      },
      {
        align: "center",
        key: "PREPARATION_OF_INCORPORATION_LETTER",
        title: "Élaboration de la lettre de constitution",
      },
      {
        align: "center",
        key: "DECLARATION_OF_ESTATE",
        title: "Déclaration de la succession",
      },
      {
        align: "center",
        key: "BANK_DEPOSIT",
        title: "Dépôt au près de la banque",
      },
      { align: "center", key: "DELIVERABLES", title: "Livrables" },
    ],
  },
  { align: "center", key: "PERCENTAGE", title: "Pourcentage" },
  { align: "center", key: "STATUS", title: "Statut" },
]);

watchEffect(() => {
  console.log("props mobileProprietyData: ", props.movablePropertyData);
  if (props.movablePropertyData) {
    props.movablePropertyData.forEach((procedure, index) => {
      transferOfMovableProperties.value.push({
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
