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
        >
          <template #item="{ item }">
            <tr @click="goToCustomerDetails(item)">
              <td>{{ item.LAST_NAME }}</td>
              <td>{{ item.FIRST_NAME }}</td>
              <td>{{ item.EMAIL }}</td>
              <td>{{ item.PHONE }}</td>
              <td>{{ item.CURRENT_FILES }}</td>
              <td>{{ item.COMPLETED_FILES }}</td>
              <td>{{ item.HANGING_FILES }}</td>
              <td>{{ item.CLOSED_FILES }}</td>
              <td>{{ item.FILES }}</td>
            </tr>
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
const customersHeaders = ref([
  { align: "start", key: "LAST_NAME", title: "Nom" },
  { align: "start", key: "FIRST_NAME", title: "Prénoms" },
  { align: "start", key: "EMAIL", title: "Email" },
  { align: "start", key: "PHONE", title: "Téléphone" },
  { align: "start", key: "CURRENT_FILES", title: "Dossiers en cours" },
  { align: "start", key: "COMPLETED_FILES", title: "Dossiers terminés" },
  { align: "start", key: "HANGING_FILES", title: "Dossiers suspendus" },
  { align: "start", key: "CLOSED_FILES", title: "Dossiers arrêtés" },
  { align: "start", key: "FILES", title: "Total" },
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

const config = useRuntimeConfig();

const loadCustomer = async () => {
  try {
    const fetchedCustomers = await $fetch(
      `${config.public.baseUrl}/customers`
    );

    if (fetchedCustomers) {
      customers.value = fetchedCustomers.map((customer) => ({
        ID: customer.id,
        LAST_NAME: customer.lastName,
        FIRST_NAME: customer.firstName,
        EMAIL: customer.email,
        PHONE: customer.phone,
        CURRENT_FILES: 0,
        COMPLETED_FILES: 0,
        HANGING_FILES: 0,
        CLOSED_FILES: 0,
        FILES: customer.folders.length,
      }));
    }
  } catch (err) {
    console.error("Erreur lors du chargement des clients :", err);
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
