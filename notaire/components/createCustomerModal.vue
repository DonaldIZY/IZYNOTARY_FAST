<template>
  <v-dialog v-model="props.open" max-width="600">
    <v-card>
      <v-form ref="formRef" @update:model-value="validateForm">
        <v-card-title
          ><v-icon>mdi-account-tie</v-icon>
          <span class="title">Créer un client</span></v-card-title
        >
        <v-card-text>
          <p class="indication">
            <span>*</span> Tous les champs sont obligatoires.
          </p>
          <v-row dense>
            <v-col cols="6">
              <v-text-field
                v-model="lastName"
                color="primary"
                label="Nom"
                variant="outlined"
                density="compact"
                clearable
                :rules="validationRules.required"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                v-model="firstName"
                color="primary"
                label="Prénoms"
                variant="outlined"
                density="compact"
                clearable
                :rules="validationRules.required"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-select
                v-model="gender"
                color="primary"
                label="Sexe"
                :items="['Homme', 'Femme']"
                variant="outlined"
                density="compact"
                clearable
                :rules="validationRules.required"
              ></v-select>
            </v-col>

            <v-col cols="6">
              <v-date-input
                v-model="birthDate"
                color="primary"
                prepend-icon=""
                label="Date de naissance"
                variant="outlined"
                density="compact"
                :max="maxDate"
                :year="new Date(maxDate).getFullYear()"
                clearable
                :rules="validationRules.required"
              >
              </v-date-input>
            </v-col>

            <v-col cols="6">
              <v-text-field
                v-model="email"
                color="primary"
                label="Email"
                variant="outlined"
                density="compact"
                clearable
                :rules="validationRules.email"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                v-model="phone"
                type="number"
                color="primary"
                label="Téléphone"
                variant="outlined"
                density="compact"
                clearable
                :rules="validationRules.phone"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-select
                v-model="identification"
                color="primary"
                label="Pièce d'identité"
                density="compact"
                :items="['CNI', 'Passeport']"
                variant="outlined"
                clearable
                :rules="validationRules.required"
              ></v-select>
            </v-col>

            <v-col cols="6">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="identificationNumber"
                    color="primary"
                    density="compact"
                    label="Numéro de la pièce d'identité"
                    variant="outlined"
                    clearable
                    :rules="validationRules.indicNumber"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="6">
              <v-select
                v-model="maritalStatus"
                color="primary"
                label="Situation matrimoniale"
                :items="['Marié', 'Célibataire', 'Divorcé', 'Veuf']"
                variant="outlined"
                density="compact"
                :rules="validationRules.required"
              ></v-select>
            </v-col>

            <v-col cols="12">
              <required-document
                v-model="imageOfIdentification"
                label="Ajout d'une image de la pièce d'identité"
                icon="mdi-id-card"
                :rules="[validationRules.requiredFile]"
              ></required-document>
            </v-col>

            <v-col cols="12">
              <v-checkbox
                label="Octroyer un espace client"
                color="primary"
                v-model="platformAccess"
                hide-details
                density="compact"
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Annuler"
            color="secondary"
            variant="flat"
            @click="closeModal"
            class="text-none"
          ></v-btn>

          <v-btn
            :loading="loading"
            color="primary"
            class="text-none"
            text="Enregistrer"
            variant="flat"
            @click="handleCustomer"
            :disabled="!isFormValid"
          ></v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
  <result-modal-validation
    :text="showTextResultModal"
    :open="showResultModal"
    :type="showTypeResultModal"
    @update:open="showResultModal = $event"
  />
</template>

<script setup>
import { computed } from "vue";
import { API_SERVER_URL } from "~/utils/constants";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const showResultModal = ref(false);
const showTextResultModal = ref("");
const showTypeResultModal = ref("");

const loading = ref(false);

const formRef = ref(null);
const lastName = ref("");
const firstName = ref("");
const gender = ref(null);
const birthDate = ref(null);
const email = ref("");
const phone = ref("");
const identification = ref(null);
const identificationNumber = ref("");
const imageOfIdentification = ref(null);
const maritalStatus = ref(null);
const platformAccess = ref(false);
const isFormValid = ref(false);

const resetForm = () => {
  lastName.value = "";
  firstName.value = "";
  gender.value = null;
  birthDate.value = null;
  email.value = "";
  phone.value = "";
  identification.value = null;
  identificationNumber.value = "";
  imageOfIdentification.value = null;
  maritalStatus.value = null;
  platformAccess.value = false;
};


const validateForm = async () => {
  if (formRef.value) {
    const result = await formRef.value.validate(); // Attendre la promesse
    isFormValid.value = result.valid; // Accéder correctement à 'valid'
    console.log('result : ',result);
    console.log('form valide : ',isFormValid.value);
  }
};

const closeModal = () => {
  resetForm();
  emit("update:open", false);
};

const emit = defineEmits(["update:open"]);

const today = new Date();
const maxDate = new Date(
  today.getFullYear() - 18,
  today.getMonth(),
  today.getDate()
)
  .toISOString()
  .split("T")[0]; // Format ISO pour Vuetify

const handleCustomer = async () => {

  await validateForm();

  loading.value = true;

  const customerData = new FormData();

  customerData.append("lastName", lastName.value);
  customerData.append("firstName", firstName.value);
  customerData.append("gender", gender.value);
  customerData.append("birthDate", birthDate.value);
  customerData.append("email", email.value);
  customerData.append("phone", phone.value);
  customerData.append("maritalStatus", maritalStatus.value);
  customerData.append("identification", identification.value);
  customerData.append("identificationNumber", identificationNumber.value);
  customerData.append("imageOfIdentification", imageOfIdentification.value);
  customerData.append("platformAccess", platformAccess.value);

  console.log("customerData : ", customerData);

  try {
    const data = await $fetch(API_SERVER_URL + `/customers`, {
      method: "POST",
      body: customerData,
    });
    loading.value = false;
    showTextResultModal.value = "Client créé avec succès !";
    showTypeResultModal.value = "success";

    closeModal();
    showResultModal.value = true;
  } catch (error) {
    loading.value = false;
    console.error("Erreur lors de la création du client :", error);
    showTextResultModal.value = "Erreur lors de la création du client";
    showTypeResultModal.value = "error";
    closeModal();
    showResultModal.value = true;
  } finally {
    //Réinitialisation des données du formulaire
    lastName.value = "";
    firstName.value = "";
    gender.value = null;
    birthDate.value = null;
    email.value = "";
    phone.value = "";
    identification.value = null;
    maritalStatus.value = null;
    identificationNumber.value = "";
    imageOfIdentification.value = null;
  }
};
</script>

<style>
.title {
  font-weight: bold;
  margin-left: 0.5rem;
}

.indication {
  font-size: 0.8rem;
  font-style: italic;
  margin-top: 0;
  margin-bottom: 1rem;
  color: gray;
}

.indication > span {
  color: #ad1919;
}
</style>
