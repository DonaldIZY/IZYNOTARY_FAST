<template>
  <div class="ma-4">
    <back-button title="Procédure de vente" goBackTo="/addProcedure" />
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
        <v-row>
          <v-col cols="12">
            <v-sheet :elevation="4" rounded height="100%" class="pa-2">
              <h4 class="mb-3">Sélection du vendeur</h4>
              <span style="font-size: 0.8rem; font-style: italic; color: gray">
                Veuillez sélectionner un vendeur existant ou créer un nouveau
                vendeur puis sélectionnez-le dans la liste des vendeurs
                existants.
              </span>
              <div class="my-3 d-flex justify-center align-center">
                <modal-select-seller
                  v-model="sellerId"
                  :items="sellers"
                  item-title="NAME"
                  item-value="ID"
                ></modal-select-seller>
                <span class="mx-2">ou</span>
                <v-btn
                  color="#252c61"
                  class="text-none align-self-center"
                  prepend-icon="mdi-account-tie-voice"
                  @click="toggleSellerModal"
                  >Créer un vendeur</v-btn
                >
                <create-seller-modal
                  :open="openSellerModal"
                  @update:open="openSellerModal = $event"
                />
              </div>
              <h4 class="mb-3">Aperçu des informations du vendeur</h4>
              <v-row>
                <v-col cols="12" sm="5">
                  <v-text-field
                    v-model="sellerLastName"
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
                    v-model="sellerFirstName"
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
                    v-model="sellerCNINumber"
                    color="primary"
                    label="Numéro de la CNI"
                    variant="outlined"
                    hide-details
                    readonly
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3">
                  <v-text-field
                    v-model="sellerGender"
                    color="primary"
                    label="Sexe"
                    variant="outlined"
                    hide-details
                    readonly
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="sellerMaritalStatus"
                    color="primary"
                    label="Situation matrimoniale"
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
      </v-col>
      <v-col cols="12" lg="7">
        <v-sheet :elevation="4" rounded height="100%" class="pa-4">
          <h4 class="mb-3">Documents requis pour initier la procédure</h4>
          <v-row>
            <v-col cols="12">
              <required-document
                label="CNI du vendeur"
                v-model:file="sellerCNI"
              ></required-document>
            </v-col>
            <v-col cols="12">
              <required-document
                label="CNI du conjoint"
                v-model:file="partnerCNI"
              ></required-document>
            </v-col>
            <v-col cols="12">
              <required-document
                label="Extrait d'acte de naissance ou de mariage"
                v-model:file="certificateOfBirthOrMarriage"
              ></required-document>
            </v-col>
            <v-col cols="12">
              <required-document
                label="Facture de CIE ou SODECI"
                v-model:file="CIEOrSODECIInvoice"
              ></required-document>
            </v-col>
            <v-col cols="12">
              <required-document
                label="Attestation de situation fiscale"
                v-model:file="taxStatusCertificate"
              ></required-document>
            </v-col>
            <v-col cols="12">
              <required-document
                label="Titre de propriété (copie du titre foncier, ACD ...)"
                v-model:file="titleDeed"
              ></required-document>
            </v-col>
            <v-col cols="12">
              <required-document
                label="État foncier"
                v-model:file="landRegistry"
              ></required-document>
            </v-col>
            <v-col cols="12">
              <required-document
                label="Certificat de localisation"
                v-model:file="certificateOfLocation"
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
      color="primary"
      class="text-none"
      prepend-icon="mdi-content-save-outline"
      :disabled="!isFormValid"
      @click="toggleConfModal"
    >
      Enregistrer la procédure
    </v-btn>
    <confirmation-modal
      text="Voulez-vous enregistrer cette procédure de vente ?"
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

const openSellerModal = ref(false);

const openConf = ref(false);

const customers = ref([]);
const customerId = ref(null);
const selectedCustomer = ref(null);

const sellers = ref([]);
const sellerId = ref(null);
const selectedSeller = ref(null);

// Nouvelles ref pour le champ "assigné à"
const users = ref([]);
const userId = ref(null);
const selectedUser = ref(null);

const userFullName = ref("");

const firstName = ref("");
const lastName = ref("");
const birthDate = ref("");
const gender = ref("");
const identificationNumber = ref("");

const sellerLastName = ref("");
const sellerFirstName = ref("");
const sellerCNINumber = ref("");
const sellerGender = ref("");
const sellerMaritalStatus = ref("");

const sellerCNI = ref(null);
const partnerCNI = ref(null);
const certificateOfBirthOrMarriage = ref(null);
const CIEOrSODECIInvoice = ref(null);
const taxStatusCertificate = ref(null);
const titleDeed = ref(null);
const landRegistry = ref(null);
const certificateOfLocation = ref(null);

const loading = ref(false);

const router = useRouter();

const toggleConfModal = () => {
  openConf.value = !openConf.value;
};

const toggleModal = () => {
  open.value = !open.value;
};

const toggleSellerModal = () => {
  openSellerModal.value = !openSellerModal.value;
};

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

const loadSellers = async () => {
  try {
    const fetchSellers = await $fetch(API_SERVER_URL + `/sellers`);
    if (fetchSellers) {
      sellers.value = fetchSellers.map((seller) => ({
        ID: seller.id,
        LASTNAME: seller.lastName,
        FIRSTNAME: seller.firstName,
        NAME: seller.lastName + " " + seller.firstName,
        IDENTIFICATION_NUMBER: seller.identificationNumber,
        MARITAL_STATUS: seller.maritalStatus,
        GENDER: seller.gender,
      }));
    }
  } catch (err) {
    console.error("Erreur lors du chargement des vendeurs :", err);
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
loadSellers();
loadUsers();

watchEffect(() => {
  if (!open.value) {
    loadCustomers();
  }
});

watchEffect(() => {
  if (!openSellerModal.value) {
    loadSellers();
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

watch(sellerId, (newSelectedSellerId) => {
  selectedSeller.value = sellers.value.find(
    (seller) => seller.ID === newSelectedSellerId
  );

  if (selectedSeller.value) {
    sellerLastName.value = selectedSeller.value.LASTNAME;
    sellerFirstName.value = selectedSeller.value.FIRSTNAME;
    sellerCNINumber.value = selectedSeller.value.IDENTIFICATION_NUMBER;
    sellerGender.value = selectedSeller.value.GENDER;
    sellerMaritalStatus.value = selectedSeller.value.MARITAL_STATUS;
  }
});

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
  sellerLastName.value = "";
  sellerFirstName.value = "";
  sellerGender.value = "";
  sellerMaritalStatus.value = "";
  sellerCNINumber.value = "";
  sellerCNI.value = null;
  partnerCNI.value = null;
  certificateOfBirthOrMarriage.value = null;
  CIEOrSODECIInvoice.value = null;
  taxStatusCertificate.value = null;
  titleDeed.value = null;
  landRegistry.value = null;
  certificateOfLocation.value = null;

  router.push("/proceduresManagement");
};

const isFormValid = computed(() => {
  return selectedCustomer.value && selectedSeller.value && selectedUser.value;
});

const handleProcedure = async () => {
  loading.value = true;
  const procedureData = new FormData();

  const folders = await $fetch(API_SERVER_URL + `/folders`);

  const count = folders.length;
  if (isNaN(count)) {
    console.error("Erreur : count est NaN");
    showTextResultModal.value =
      "Impossible de se connecter à la base de données. Veuillez réessayer s'il vous plaît!";
    showTypeResultModal.value = "error";
    showResultModal.value = true;
    return;
  }

  procedureData.append("folderNum", procedureNumGenerator("Vente", count));
  procedureData.append("procedureType", "Vente");
  procedureData.append("status", "En cours");
  procedureData.append("customerId", selectedCustomer.value.ID);
  procedureData.append("sellerId", selectedSeller.value.ID);
  procedureData.append("assignedToId", selectedUser.value.ID);

  const requiredFiles = {
    sellerCNI: sellerCNI.value,
    partnerCNI: partnerCNI.value,
    certificateOfBirthOrMarriage: certificateOfBirthOrMarriage.value,
    CIEOrSODECIInvoice: CIEOrSODECIInvoice.value,
    taxStatusCertificate: taxStatusCertificate.value,
    titleDeed: titleDeed.value,
    landRegistry: landRegistry.value,
    certificateOfLocation: certificateOfLocation.value,
  };

  for (const key in requiredFiles) {
    if (requiredFiles[key]) {
      procedureData.append(`${key}`, requiredFiles[key]);
    }
  }

  try {
    const data = await $fetch(API_SERVER_URL + `/folders/selling`, {
      method: "POST",
      body: procedureData,
    });
    // alert("Procédure créée avec succès.");
    loading.value = false;
    showTextResultModal.value = "Procédure créée avec succès.";
    showTypeResultModal.value = "success";
    open.value = false;
    showResultModal.value = true;
    //resetFields();
  } catch (error) {
    console.error("Erreur lors de la création de la procédure :", error);
    loading.value = false;
    showTextResultModal.value =
      "Erreur lors de la création du procédure. Veuillez réessayer s'il vous plaît!";
    showTypeResultModal.value = "error";
    open.value = false;
    showResultModal.value = true;
  }
};
</script>
