<template>
  <v-dialog v-model="$props.open" max-width="500">
    <v-card>
      <v-card-title
        ><v-icon>mdi-account-edit</v-icon>
        <span class="title">Modifier un client</span></v-card-title
      >
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-text-field
              v-model="customer.lastName"
              color="primary"
              label="Nom"
              variant="outlined"
              density="compact"
              :rules="validationRules.required"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="customer.firstName"
              color="primary"
              label="Prénoms"
              variant="outlined"
              density="compact"
              :rules="validationRules.required"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="customer.identificationNumber"
              color="primary"
              label="Numéro de la CNI"
              variant="outlined"
              density="compact"
              :rules="validationRules.required"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-date-input
              v-model="customer.birthDate"
              color="primary"
              prepend-icon=""
              label="Date de naissance"
              variant="outlined"
              density="compact"
              clearable
              :rules="validationRules.required"
            >
            </v-date-input>
          </v-col>
          <v-col cols="12">
            <v-select
              v-model="customer.maritalStatus"
              color="primary"
              label="Situation matrimoniale"
              :items="['Marié', 'Célibataire', 'Divorcé', 'Veuf']"
              variant="outlined"
              density="compact"
              :rules="validationRules.required"
            ></v-select>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="customer.email"
              color="primary"
              label="Email"
              variant="outlined"
              :rules="validationRules.email"
              density="compact"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="customer.phone"
              type="number"
              color="primary"
              label="Téléphone"
              variant="outlined"
              density="compact"
              :rules="validationRules.phone"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Annuler"
          variant="flat"
          color="secondary"
          @click="closeModal"
          class="text-none"
        ></v-btn>

        <v-btn
          :loading="loading"
          color="primary"
          text="Enregistrer"
          variant="flat"
          @click="handleCustomer"
          class="text-none"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <result-modal-redirection
    :text="showTextResultModal"
    :open="showResultModal"
    :type="showTypeResultModal"
    destination="/customersManagement"
    @update:open="showResultModal = $event"
  />
</template>

<script setup>
import { API_SERVER_URL } from "~/utils/constants";

const showResultModal = ref(false);
const showTextResultModal = ref("");
const showTypeResultModal = ref("");
const loading = ref(false);

const props = defineProps({
  open: Boolean,
  customerData: Object, // Données de l'utilisateur à modifier
});

const emit = defineEmits(["update:open"]);

const customer = reactive({
  id: null,
  lastName: "",
  firstName: "",
  email: "",
  phone: "",
  maritalStatus: "",
  birthDate: "",
  identificationNumber: "",
});

// Met à jour `user` lorsque `userData` change
watchEffect(() => {
  if (props.customerData) {
    customer.id = props.customerData.id;
    customer.lastName = props.customerData.lastName;
    customer.firstName = props.customerData.firstName;
    customer.email = props.customerData.email;
    customer.phone = props.customerData.phone;
    customer.maritalStatus = props.customerData.maritalStatus;
    customer.birthDate = props.customerData.birthDate;
    customer.identificationNumber = props.customerData.identificationNumber;
  }
});

// Fermeture du modal
const closeModal = () => {
  emit("update:open", false);
};

// Enregistrement des modifications
const handleCustomer = async () => {
  loading.value = true;
  try {
    const response = await fetch(API_SERVER_URL + `/customers/${customer.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });
    loading.value = false;
    emit("userUpdated");
    showTextResultModal.value = "Client modifié avec succès !";
    showTypeResultModal.value = "success";
    closeModal();
    showResultModal.value = true;
  } catch (error) {
    loading.value = false;
    console.error("Erreur lors de la modification de l'utilisateur :", error);
    showTextResultModal.value = "Erreur lors de la modification du client.";
    showTypeResultModal.value = "error";
    closeModal();
    showResultModal.value = true;
  }
};
</script>
<style>
.title {
  font-weight: bold;
  margin-left: 0.5rem;
}
</style>
