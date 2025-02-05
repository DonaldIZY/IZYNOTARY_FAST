<template>
  <div class="ma-4">
    <back-button
      title="Procédure de succession de biens mobiliers"
      goBackTo="/addProcedure"
    />
  </div>

  <div class="ma-2">
    <v-row>
      <v-col cols="12" lg="5">
        <v-row>
          <v-col cols="12">
            <v-sheet :elevation="4" rounded height="100%" class="pa-2">
              <h4 class="mb-3">Sélection du client</h4>
              <div class="d-flex flex-column justify-center">
                <v-form>
                  <v-combobox
                    v-model="customerId"
                    color="primary"
                    label="Selectionner un client"
                    :items="customers"
                    item-title="NAME"
                    item-value="ID"
                    variant="outlined"
                    hide-details
                    density="compact"
                  ></v-combobox>
                </v-form>
                <v-divider class="my-5">ou</v-divider>
                <v-btn
                  color="primary"
                  class="text-none align-self-center"
                  prepend-icon="mdi-account-tie"
                  @click="toggleModal"
                  >Créer un client</v-btn
                >
                <create-customer-modal
                  :open="open"
                  @update:open="open = $event"
                />
              </div>
            </v-sheet>
          </v-col>

          <v-col cols="12">
            <v-sheet :elevation="4" rounded height="100%" class="pa-2">
              <h4 class="mb-3">Aperçu informations du client</h4>
              <v-form>
                <v-row>
                  <v-col cols="12" sm="5">
                    <v-text-field
                      v-model="lastName"
                      color="primary"
                      label="Nom"
                      variant="outlined"
                      hide-details
                      disabled
                      density="compact"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="7">
                    <v-text-field
                      v-model="firstName"
                      color="primary"
                      label="Prénoms"
                      variant="outlined"
                      hide-details
                      disabled
                      density="compact"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="5">
                    <v-text-field
                      v-model="identificationNumber"
                      color="primary"
                      label="CNI"
                      variant="outlined"
                      hide-details
                      disabled
                      density="compact"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="birthDate"
                      color="primary"
                      label="Date de naissance"
                      variant="outlined"
                      hide-details
                      disabled
                      density="compact"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="3">
                    <v-text-field
                      v-model="gender"
                      color="primary"
                      label="Sexe"
                      variant="outlined"
                      hide-details
                      disabled
                      density="compact"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="7">
        <v-sheet :elevation="4" rounded height="100%" class="pa-4">
          <h4 class="mb-3">Documents requis pour initier la procédure</h4>
          <v-row>
            <v-col cols="12">
              <required-document
                label="CNI du client"
                v-model:file="customerCNI"
              ></required-document>
            </v-col>
            <v-col cols="12">
              <required-document
                label="Extrait d'acte de naissance"
                v-model:file="birthCertificate"
              ></required-document>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>

  <div class="ma-4 d-flex justify-end">
    <v-btn
      color="primary"
      class="text-none"
      prepend-icon="mdi-content-save-outline"
      :disabled="!isFormValid"
      @click="toggleConfModal"
    >
      Enregistrer la procédure
    </v-btn>
    <confirmation-modal
      text="Voulez-vous enregistrer cette procédure de succession de biens mobiliers ?"
      :open="openConf"
      :submit="handleProcedure"
      @update:open="openConf = $event"
    ></confirmation-modal>
    <result-modal-redirection
      :text="showTextResultModal"
      :open="showResultModal"
      :type="showTypeResultModal"
      destination="/proceduresManagement"
      @update:open="showResultModal = $event"
    />
  </div>
</template>

<script setup>
const showResultModal = ref(false);
const showTextResultModal = ref("");
const showTypeResultModal = ref("");

const open = ref(false);

const openConf = ref(false);

const customers = ref([]);

const customerId = ref(null);

const selectedCustomer = ref(null);

const firstName = ref("");
const lastName = ref("");
const birthDate = ref("");
const gender = ref("");
const identificationNumber = ref("");

const customerCNI = ref(null);
const birthCertificate = ref(null);

const toggleConfModal = () => {
  openConf.value = !openConf.value;
};

const toggleModal = () => {
  open.value = !open.value;
};

const config = useRuntimeConfig();

const testUrl = "http://serverizynotary.izydr.net";

const loadCustomers = async () => {
  try {
    const fetchCustomers = await $fetch(
      `${testUrl /*config.public.baseUrl*/}/customers`
    );
    if (fetchCustomers) {
      customers.value = fetchCustomers.map((customer) => ({
        ID: customer.id,
        LASTNAME: customer.lastName,
        FIRSTNAME: customer.firstName,
        NAME: customer.lastName + " " + customer.firstName,
        IDENTIFICATION_NUMBER: customer.identificationNumber,
        BIRTHDATE: customer.birthDate,
        GENDER: customer.gender,
      }));
    }
  } catch (err) {
    console.error("Erreur lors du chargement des clients :", err);
  }
};

loadCustomers();

watchEffect(() => {
  if (!open.value) {
    loadCustomers();
  }
});

watch(customerId, (newSelectedCustomer) => {
  selectedCustomer.value = customers.value.find(
    (customer) => customer.ID === newSelectedCustomer.ID
  );

  if (selectedCustomer.value) {
    lastName.value = selectedCustomer.value.LASTNAME;
    firstName.value = selectedCustomer.value.FIRSTNAME;
    birthDate.value = new Date(
      selectedCustomer.value.BIRTHDATE
    ).toLocaleDateString();
    gender.value = selectedCustomer.value.GENDER;
    identificationNumber.value = selectedCustomer.value.IDENTIFICATION_NUMBER;
  }
});

const resetFields = () => {
  customerId.value = null;
  selectedCustomer.value = null;
  firstName.value = "";
  lastName.value = "";
  birthDate.value = "";
  gender.value = "";
  identificationNumber.value = "";
  customerCNI.value = null;
  birthCertificate.value = null;
};

const isFormValid = computed(() => {
  return selectedCustomer.value;
});

const handleProcedure = async () => {
  const procedureData = new FormData();

  const folders = await $fetch(`${testUrl /*config.public.baseUrl*/}/folders`);

  const count = folders.length;
  if (isNaN(count)) {
    console.error("Erreur : count est NaN");
    showTextResultModal.value =
      "Impossible de se connecter à la base de données. Veuillez réessayer s'il vous plaît!";
    showTypeResultModal.value = "error";
    showResultModal.value = true;
    return;
  }

  procedureData.append(
    "folderNum",
    procedureNumGenerator("Succession de biens mobiliers", count)
  );
  procedureData.append("procedureType", "Succession de biens mobiliers");
  procedureData.append("progression", 1 / 5);
  procedureData.append("status", "En cours");
  procedureData.append("customerId", selectedCustomer.value.ID);

  const requiredFiles = {
    customerCNI: customerCNI.value,
    birthCertificate: birthCertificate.value,
  };

  for (const key in requiredFiles) {
    if (requiredFiles[key]) {
      procedureData.append(`${key}`, requiredFiles[key]);
    }
  }

  try {
    const date = await $fetch(
      `${testUrl /*config.public.baseUrl*/}/folders/transferOfMovableProperty`,
      {
        method: "POST",
        body: procedureData,
      }
    );
    showTextResultModal.value = "Procédure créée avec succès.";
    showTypeResultModal.value = "success";
    open.value = false;
    showResultModal.value = true;
  } catch (error) {
    console.error("Erreur lors de la création de la procédure :", error);
    showTextResultModal.value =
      "Erreur lors de la création de cette procédure. Veuillez réessayer s'il vous plaît!";
    showTypeResultModal.value = "error";
    open.value = false;
    showResultModal.value = true;
  }
};
</script>
