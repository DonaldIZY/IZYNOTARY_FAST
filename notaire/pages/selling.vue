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
              <div class="d-flex flex-column justify-center">
                <v-form>
                  <v-combobox
                    v-model="sellerId"
                    color="primary"
                    label="Selectionner un vendeur"
                    :items="sellers"
                    item-title="NAME"
                    item-value="ID"
                    variant="outlined"
                    hide-details=""
                    density="compact"
                  ></v-combobox>
                </v-form>
                <v-divider class="my-5">ou</v-divider>
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
            </v-sheet>
          </v-col>
          <v-col cols="12">
            <v-sheet :elevation="4" rounded height="100%" class="pa-4">
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

const openSellerModal = ref(false);

const openConf = ref(false);

const customers = ref([]);
const customerId = ref(null);
const selectedCustomer = ref(null);

const sellers = ref([]);
const sellerId = ref(null);
const selectedSeller = ref(null);

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

const config = useRuntimeConfig();

const loadCustomers = async () => {
  try {
    const fetchCustomers = await $fetch(`${config.public.baseUrl}/customers`);
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
    const fetchSellers = await $fetch(`${config.public.baseUrl}/sellers`);
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

loadCustomers();
loadSellers();

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

watch(sellerId, (newSelectedSeller) => {
  selectedSeller.value = sellers.value.find(
    (seller) => seller.ID === newSelectedSeller.ID
  );

  if (selectedSeller.value) {
    sellerLastName.value = selectedSeller.value.LASTNAME;
    sellerFirstName.value = selectedSeller.value.FIRSTNAME;
    sellerCNINumber.value = selectedSeller.value.IDENTIFICATION_NUMBER;
    sellerGender.value = selectedSeller.value.GENDER;
    sellerMaritalStatus.value = selectedSeller.value.MARITAL_STATUS;
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
  return selectedCustomer.value && selectedSeller.value;
});

const handleProcedure = async () => {
  const procedureData = new FormData();

  const folders = await $fetch(`${config.public.baseUrl}/folders`);

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
  procedureData.append("progression", 1 / 6);
  procedureData.append("status", "En cours");
  procedureData.append("customerId", selectedCustomer.value.ID);
  procedureData.append("sellerId", selectedSeller.value.ID);

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
    const data = await $fetch(`${config.public.baseUrl}/folders/selling`, {
      method: "POST",
      body: procedureData,
    });
    // alert("Procédure créée avec succès.");
    showTextResultModal.value = "Procédure créée avec succès.";
    showTypeResultModal.value = "success";
    open.value = false;
    showResultModal.value = true;
    //resetFields();
  } catch (error) {
    console.error("Erreur lors de la création de la procédure :", error);
    showTextResultModal.value =
      "Erreur lors de la création du procédure. Veuillez réessayer s'il vous plaît!";
    showTypeResultModal.value = "error";
    open.value = false;
    showResultModal.value = true;
  }
};
</script>
