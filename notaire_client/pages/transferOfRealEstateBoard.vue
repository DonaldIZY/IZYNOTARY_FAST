<template>
  <back-button
    title="Procédure de succession de biens immobiliers"
    goBackTo="/home"
  />
  <v-data-table
    :headers="headers"
    :items="transferOfRealEstates"
    :search="transferOfRealEstatesSearch"
    no-data-text="Aucune procédure de succession de biens immobiliers."
    hover
    class="customTable2"
  >
  </v-data-table>
</template>

<script setup>
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
        key: "SETTLEMENT_OF_FEES",
        title: "Règlement des frais",
      },
      {
        align: "start",
        key: "VALUATION_OF_INDIVIDUAL_PROPERTIES",
        title: "Évaluation des différents biens immobiliers",
      },
      {
        align: "start",
        key: "DECLARATION_OF_ESTATE",
        title: "Déclaration de la succession",
      },
      {
        align: "start",
        key: "PREPARATION_OF_REAL_ESTATE_CERTIFICATE",
        title: "Établissement de l'attestation immobilière",
      },
      {
        align: "start",
        key: "DEPOSIT_OF_REAL_ESTATE_CERTIFICATE",
        title: "Dépôt de l'attestation immobilière",
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
</style>
