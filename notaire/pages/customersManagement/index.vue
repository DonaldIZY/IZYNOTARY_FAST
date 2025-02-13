X
<template>
  <div class="ma-4">
    <back-button title="Gestion des clients" goBackTo="/home" />
  </div>
  <div class="ma-4 customerField">
    <div class="d-flex justify-end align-center ga-5">
      <div class="searchField">
        <v-text-field
          color="primary"
          v-model="customersSearch"
          label="Rechercher"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          density="compact"
          hide-details
          clearable
        ></v-text-field>
      </div>
      <div>
        <v-btn
          color="primary"
          prependIcon="mdi-account-tie"
          class="text-none"
          @click="toggleModal"
        >
          Ajouter un client</v-btn
        >
      </div>

      <create-customer-modal :open="open" @update:open="open = $event" />
    </div>

    <div class="mt-4">
      <v-sheet rounded elevation="4">
        <v-data-table
          :headers="customersHeaders"
          :items="customers"
          :search="customersSearch"
          items-per-page-text="Clients par page :"
          item-value="ID"
          class="customTable1"
          density="compact"
          fixed-header
          hover
          :loading="loading"
        >
          <template #item="{ item }">
            <tr @click="goToCustomerDetails(item)">
              <td>{{ item.LAST_NAME }}</td>
              <td>{{ item.FIRST_NAME }}</td>
              <td>{{ item.EMAIL }}</td>
              <td>{{ item.PHONE }}</td>
              <td style="text-align: center">{{ item.CURRENT_FILES }}</td>
              <td style="text-align: center">{{ item.COMPLETED_FILES }}</td>
              <td style="text-align: center">{{ item.HANGING_FILES }}</td>
              <td style="text-align: center">{{ item.CLOSED_FILES }}</td>
              <td style="text-align: center">{{ item.FILES }}</td>
            </tr>
          </template>
          <!-- Slot pour afficher un loader quand la table est vide -->
          <template v-slot:loading>
            <div class="d-flex justify-center my-10">
              <v-progress-circular
                color="red"
                indeterminate
              ></v-progress-circular>
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
              <p>Aucun client trouvé.</p>
            </div>
          </template>
        </v-data-table>
      </v-sheet>
    </div>
  </div>
</template>

<script setup>
import { API_SERVER_URL } from "~/utils/constants";

const loading = ref(true);

const customersHeaders = ref([
  { align: "start", key: "LAST_NAME", title: "Nom" },
  { align: "start", key: "FIRST_NAME", title: "Prénoms" },
  { align: "start", key: "EMAIL", title: "Email" },
  { align: "start", key: "PHONE", title: "Téléphone" },
  { align: "center", key: "CURRENT_FILES", title: "Dossiers en cours" },
  { align: "center", key: "COMPLETED_FILES", title: "Dossiers terminés" },
  { align: "center", key: "HANGING_FILES", title: "Dossiers suspendus" },
  { align: "center", key: "CLOSED_FILES", title: "Dossiers arrêtés" },
  { align: "center", key: "FILES", title: "Total" },
]);

const customers = ref([]);

const customersSearch = ref(null);

const open = ref(false);

const toggleModal = () => {
  open.value = !open.value;
};

const router = useRouter();

const goToCustomerDetails = (customer) => {
  router.push(`/customersManagement/${customer.ID}`);
};

const loadCustomer = async () => {
  try {
    const fetchedCustomers = await $fetch(API_SERVER_URL + `/customers`);

    if (fetchedCustomers) {
      customers.value = fetchedCustomers.map((customer) => ({
        ID: customer.id,
        LAST_NAME: customer.lastName,
        FIRST_NAME: customer.firstName,
        EMAIL: customer.email,
        PHONE: customer.phone,
        CURRENT_FILES: customer.folders.filter(
          (folder) => folder.status === "En cours"
        ).length,
        COMPLETED_FILES: customer.folders.filter(
          (folder) => folder.status === "Terminé"
        ).length,
        HANGING_FILES: customer.folders.filter(
          (folder) => folder.status === "Suspendu"
        ).length,
        CLOSED_FILES: customer.folders.filter(
          (folder) => folder.status === "Arrêté"
        ).length,
        FILES: customer.folders.length,
      }));
    }
    loading.value = false;
  } catch (err) {
    console.error("Erreur lors du chargement des clients :", err);
    loading.value = false;
  }
};

loadCustomer();

watchEffect(() => {
  if (!open.value) {
    loadCustomer();
  }
});
</script>

<style scoped>
@import url("~/assets/css/table.css");

.searchField {
  width: 20rem;
  min-width: 10rem;
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

.customerField {
  padding: 0 1.5rem;
}
</style>
