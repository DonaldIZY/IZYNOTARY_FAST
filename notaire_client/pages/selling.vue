<template>
  <div class="ga-4">
    <back-button title="Procédure de vente" goBackTo="/home" />
  </div>
  <v-data-table
    :headers="headers"
    :items="sellings"
    :search="sellingsSearch"
    no-data-text="Aucune procédure de vente."
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
const loading = ref(true);
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
        key: "WRITING_DEED_OF_SALE",
        title: "Rédaction de l'acte de vente",
      },
      {
        align: "start",
        key: "SETTLEMENT_OF_FEES",
        title: "Règlement des frais",
      },
      {
        align: "start",
        key: "SIGNATURE_DEED_OF_SALE",
        title: "Signature de l'acte de vente",
      },
      {
        align: "start",
        key: "SIGNED_DOCUMENT_DEPOSITED",
        title: "Dépôt de l'acte signé",
      },
      { align: "start", key: "DELIVERABLES", title: "Livrables" },
    ],
  },
  { align: "start", key: "PERCENTAGE", title: "Pourcentage" },
  { align: "start", key: "STATUS", title: "Statut" },
]);
</script>

<style>
@import url("~/assets/css/table.css");

.ga-4 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
</style>
