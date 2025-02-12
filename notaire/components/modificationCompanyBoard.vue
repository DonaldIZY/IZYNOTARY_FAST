<template>
  <v-data-table
    :headers="headers"
    :items="modificationCompanies"
    :search="modificationCompaniesSearch"
    no-data-text="Aucune procédure de modification de société."
    hover
    class="customTable2"
    :loading="loading"
  >
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
const props = defineProps({
  companyModificationData: Array,
});

const loading = ref(true);

const modificationCompanies = ref([]);

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
        key: "DRAFTING_OF_STATUTES",
        title: "Rédaction des statuts",
      },
      {
        align: "start",
        key: "SETTLEMENT_OF_FEES",
        title: "Règlement des frais",
      },
      {
        align: "start",
        key: "SIGNATURE_OF_ACTS",
        title: "Signature des actes",
      },
      {
        align: "start",
        key: "SIGNED_DOCUMENT_DEPOSITED",
        title: "Dépôt des actes signés",
      },
      { align: "start", key: "DELIVERABLES", title: "Livrables" },
    ],
  },
  { align: "start", key: "PERCENTAGE", title: "Pourcentage" },
  { align: "start", key: "STATUS", title: "Statut" },
]);

watchEffect(() => {
  console.log("props companyModificationData: ", props.companyModificationData)
  if (props.companyModificationData) {
    props.companyModificationData.forEach((procedure, index) => {
      modificationCompanies.value.push({
        NUM: index + 1,
        CREATE_AT: procedure.createAt.toString(),
        SUPPLY_OF_PARTS: procedure.step.steps[0].status,
        DRAFTING_OF_STATUTES: procedure.step.steps[1].status,
        SETTLEMENT_OF_FEES: procedure.step.steps[2].status,
        SIGNATURE_OF_ACTS: procedure.step.steps[3].status,
        SIGNED_DOCUMENT_DEPOSITED: procedure.step.steps[4].status,
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
