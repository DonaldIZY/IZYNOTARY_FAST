<template>
  <div class="ma-4">
    <back-button
      title="Procédure de constitution de société"
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
              <span style="font-size: 0.8rem; font-style: italic; color: gray">
                Veuillez sélectionner un client existant ou créer un nouveau
                client puis sélectionnez-le dans la liste des clients existants.
              </span>
              <div class="my-3 d-flex justify-center align-center">
                <modal-select-customer
                  v-model="customerId"
                  :items="customers"
                  item-title="NAME"
                  item-value="ID"
                ></modal-select-customer>
                <span class="mx-2">ou</span>
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
              <h4 class="mb-3">Aperçu des informations du client</h4>
              <v-form>
                <v-row>
                  <v-col cols="12" sm="5">
                    <v-text-field
                      v-model="lastName"
                      color="primary"
                      label="Nom"
                      variant="outlined"
                      hide-details
                      readonly
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
                      readonly
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
                      readonly
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
                      readonly
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
                      readonly
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
                label="Casier judiciaire"
                v-model:file="criminalRecord"
              ></required-document>
            </v-col>
            <v-col cols="12">
              <required-document
                label="Contrat de bail"
                v-model:file="lease"
              ></required-document>
            </v-col>
            <v-col cols="12">
              <required-document
                label="Croquis de la situation géographique"
                v-model:file="sketchOfGeoLocation"
              ></required-document>
            </v-col>
            <v-col cols="12">
              <required-document
                label="Fiche à renseigner de la société à constituer"
                v-model:file="formForCompanyFormation"
              ></required-document>
            </v-col>
            <v-col cols="12">
              <required-document
                label="Capital à libérer"
                v-model:file="capitalToBeReleased"
              ></required-document>
            </v-col>
          </v-row>
          <h4 class="mt-5 mb-3">
            Choix du responsable de suivi de la procédure
          </h4>
          <v-row class="d-flex justify-center">
            <v-col cols="12" sm="6"
              ><modal-select-user
                v-model="userId"
                :items="users"
                item-title="NAME"
                item-value="ID"
              ></modal-select-user
            ></v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="userFullName"
                color="primary"
                label="Nom du responsable"
                variant="outlined"
                hide-details
                readonly
                density="compact"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>

  <div class="ma-4 d-flex justify-end">
    <v-btn
      :loading="loading"
      color="primary"
      class="text-none"
      prepend-icon="mdi-content-save-outline"
      :disabled="!isFormValid"
      @click="toggleConfModal"
    >
      Enregistrer la procédure
    </v-btn>
    <confirmation-modal
      text="Voulez vous enregistrer cette procédure de constitution de société ?"
      :open="openConf"
      :submit="handleProcedure"
      @update:open="openConf = $event"
      :loading="loading"
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
import { API_SERVER_URL } from "~/utils/constants";

const showResultModal = ref(false);
const showTextResultModal = ref("");
const showTypeResultModal = ref("");

const open = ref(false);

const openConf = ref(false);

const customers = ref([]);
const customerId = ref(null);
const selectedCustomer = ref(null);

// Nouvelles ref pour le champ "assigné à"
const users = ref([]);
const userId = ref(null);
const selectedUser = ref(null);

const firstName = ref("");
const lastName = ref("");
const birthDate = ref("");
const gender = ref("");
const identificationNumber = ref("");

const customerCNI = ref(null);
const criminalRecord = ref(null);
const lease = ref(null);
const sketchOfGeoLocation = ref(null);
const formForCompanyFormation = ref(null);
const capitalToBeReleased = ref(null);

const loading = ref(false);

const toggleConfModal = () => {
  openConf.value = !openConf.value;
};

const toggleModal = () => {
  open.value = !open.value;
};

const config = useRuntimeConfig();

const loadCustomers = async () => {
  try {
    const fetchCustomers = await $fetch(API_SERVER_URL + `/customers`);
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

const loadUsers = async () => {
  try {
    const fetchUsers = await $fetch(API_SERVER_URL + `/users`);
    if (fetchUsers) {
      users.value = fetchUsers.map((user) => ({
        ID: user.id,
        LASTNAME: user.lastName,
        FIRSTNAME: user.firstName,
        NAME: user.firstName + " " + user.lastName,
        EMAIL: user.email,
      }));
    }
  } catch (err) {
    console.error("Erreur lors du chargement des utilisateurs :", err);
  }
};

loadCustomers();
loadUsers();

watchEffect(() => {
  if (!open.value) {
    loadCustomers();
  }
});

watch(customerId, (newCustomerId) => {
  selectedCustomer.value = customers.value.find(
    (customer) => customer.ID === newCustomerId
  );

  if (selectedCustomer.value) {
    lastName.value = selectedCustomer.value.LASTNAME;
    firstName.value = selectedCustomer.value.FIRSTNAME;
    birthDate.value = new Date(
      selectedCustomer.value.BIRTHDATE
    ).toLocaleDateString();
    gender.value = selectedCustomer.value.GENDER;
    identificationNumber.value = selectedCustomer.value.IDENTIFICATION_NUMBER;
  } else {
    // Réinitialiser si aucun client n'est sélectionné
    lastName.value = "";
    firstName.value = "";
    birthDate.value = "";
    gender.value = "";
    identificationNumber.value = "";
  }
});

const userFullName = ref("");

watch(userId, (newSelectedUserId) => {
  selectedUser.value = users.value.find(
    (user) => user.ID === newSelectedUserId
  );
  if (selectedUser.value) {
    userFullName.value = selectedUser.value.NAME;
  }
});

const resetFields = () => {
  customerId.value = null;
  selectedCustomer.value = null;
  selectedUser.value = null;
  firstName.value = "";
  lastName.value = "";
  birthDate.value = "";
  gender.value = "";
  identificationNumber.value = "";
  customerCNI.value = null;
  criminalRecord.value = null;
  lease.value = null;
  sketchOfGeoLocation.value = null;
  formForCompanyFormation.value = null;
  capitalToBeReleased.value = null;
};

const isFormValid = computed(() => {
  return selectedCustomer.value && selectedUser.value;
});

const handleProcedure = async () => {
  loading.value = true;
  const procedureData = new FormData();

  const folders = await $fetch(API_SERVER_URL + `/folders`);

  var lastId;

  if (folders.length === 0) {
    lastId = 0;
  } else {
    const folderWithMaxId = folders.reduce((maxFolder, currentFolder) => {
      return currentFolder.id > maxFolder.id ? currentFolder : maxFolder;
    });

    lastId = folderWithMaxId.id;
  }

  //const count = folders.length;
  if (isNaN(lastId)) {
    console.error("Erreur : lastId est NaN");
    showTextResultModal.value =
      "Impossible de se connecter à la base de données. Veuillez réessayer s'il vous plaît!";
    showTypeResultModal.value = "error";
    showResultModal.value = true;
    return;
  }

  procedureData.append(
    "folderNum",
    procedureNumGenerator("Constitution de société", lastId)
  );
  procedureData.append("procedureType", "Constitution de société");
  procedureData.append("status", "En cours");
  procedureData.append("customerId", selectedCustomer.value.ID);
  procedureData.append("assignedToId", selectedUser.value.ID);

  const requiredFiles = {
    customerCNI: customerCNI.value,
    criminalRecord: criminalRecord.value,
    lease: lease.value,
    sketchOfGeoLocation: sketchOfGeoLocation.value,
    formForCompanyFormation: formForCompanyFormation.value,
    capitalToBeReleased: capitalToBeReleased.value,
  };

  for (const key in requiredFiles) {
    if (requiredFiles[key]) {
      procedureData.append(`${key}`, requiredFiles[key]);
    }
  }

  console.log("key value : ", procedureData.entries());

  try {
    const data = await $fetch(API_SERVER_URL + `/folders/companyFormation`, {
      method: "POST",
      body: procedureData,
    });

    loading.value = false;
    showTextResultModal.value = "Procédure créée avec succès.";
    showTypeResultModal.value = "success";
    open.value = false;
    showResultModal.value = true;
  } catch (error) {
    console.error("Erreur lors de la création de la procédure :", error);
    loading.value = false;
    showTextResultModal.value =
      "Erreur lors de la création de cette procédure. Veuillez réessayer s'il vous plaît!";
    showTypeResultModal.value = "error";
    open.value = false;
    showResultModal.value = true;
  }
};
</script>
