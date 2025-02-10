<template>
  <v-data-table
    :headers="headers"
    :items="companyFormations"
    :search="companyFormationsSearch"
    no-data-text="Aucune donnée"
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
import { API_SERVER_URL } from "~/utils/constants";

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

const config = useRuntimeConfig();
const route = useRoute();

onMounted(async () => {
  try {
    const response = await fetch(
      API_SERVER_URL + `/customers/${route.params.ID}`
    );
    const data = await response.json();

    console.log(data);

    console.log(data.folders);

    const consSocDatas = data.folders.map((folder) => ({
      num: folder.folderNum,
      proced: folder.procedureType,
      statut: folder.status,
    }));

    console.log(consSocDatas);
    loading.value = false;
  } catch (error) {
    console.error("Erreur lors du chargement des données", error);
    loading.value = false;
  }
});

// const consSocDatas = data.folders.procedureType;

// if (fetchedCustomers) {
//       customers.value = fetchedCustomers.map((customer) => ({
//         ID: customer.id,
//         LAST_NAME: customer.lastName,
//         FIRST_NAME: customer.firstName,
//         EMAIL: customer.email,
//         PHONE: customer.phone,
//         CURRENT_FILES: 0,
//         COMPLETED_FILES: 0,
//         HANGING_FILES: 0,
//         CLOSED_FILES: 0,
//         FILES: customer.folders.length,
//       }));
//     }
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
