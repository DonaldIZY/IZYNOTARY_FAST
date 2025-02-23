<template>
  <v-dialog v-model="props.open" max-width="600">
    <v-card>
      <v-form ref="formRef" @update:model-value="validateForm">
        <v-card-title
          ><v-icon>mdi-account-tie-voice</v-icon>
          <span class="title">Créer un vendeur</span></v-card-title
        >
        <v-card-text>
          <p class="indication">
            <span>*</span> Tous les champs sont obligatoires sauf l'email.
          </p>
          <v-row dense>
            <v-col cols="6">
              <v-text-field
                v-model="lastName"
                color="primary"
                label="Nom"
                variant="outlined"
                density="compact"
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
                :rules="validationRules.required"
              ></v-select>
            </v-col>

            <v-col cols="6">
              <v-date-input
                v-model="birthDate"
                color="primary"
                prepend-icon=""
                density="compact"
                label="Date de naissance"
                variant="outlined"
                :max="maxDate"
                :year="new Date(maxDate).getFullYear()"
                :rules="validationRules.required"
              >
              </v-date-input>
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

            <v-col cols="6">
              <v-text-field
                v-model="email"
                color="primary"
                label="Email"
                density="compact"
                variant="outlined"
                :rules="validationRules.email"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                v-model="phone"
                type="number"
                color="primary"
                label="Téléphone"
                density="compact"
                variant="outlined"
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
                    :rules="validationRules.indicNumber"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <required-document
                v-model="imageOfIdentification"
                label="Ajout d'une image de la pièce d'identité"
                icon="mdi-id-card"
                :rules="[validationRules.requiredFile]"
              ></required-document>
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
            color="primary"
            text="Enregistrer"
            variant="flat"
            @click="handleSeller"
            class="text-none"
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

const formRef = ref(null);
const lastName = ref("");
const firstName = ref("");
const gender = ref(null);
const birthDate = ref(null);
const email = ref("");
const phone = ref("");
const maritalStatus = ref(null);
const identification = ref(null);
const identificationNumber = ref("");
const imageOfIdentification = ref(null);
const isFormValid = ref(false);

const resetForm = () => {
  lastName.value = "";
  firstName.value = "";
  gender.value = null;
  birthDate.value = null;
  email.value = "";
  phone.value = "";
  maritalStatus.value = null;
  identification.value = null;
  identificationNumber.value = "";
  imageOfIdentification.value = null;
};

const validateForm = async () => {
  if (formRef.value) {
    const result = await formRef.value.validate(); // Attendre la promesse
    isFormValid.value = result.valid; // Accéder correctement à 'valid'
    console.log('result : ',result);
    console.log('form valide : ',isFormValid.value);
  }
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

const handleSeller = async () => {
  await validateForm(); // Vérifie la validité avant d'envoyer

  const sellerData = new FormData();
  sellerData.append("lastName", lastName.value);
  sellerData.append("firstName", firstName.value);
  sellerData.append("gender", gender.value);
  sellerData.append("birthDate", birthDate.value);
  sellerData.append("email", email.value);
  sellerData.append("phone", phone.value);
  sellerData.append("maritalStatus", maritalStatus.value);
  sellerData.append("identification", identification.value);
  sellerData.append("identificationNumber", identificationNumber.value);
  sellerData.append("imageOfIdentification", imageOfIdentification.value);

  try {
    const data = await $fetch(API_SERVER_URL + `/sellers`, {
      method: "POST",
      body: sellerData,
    });
    console.log("Vendeur créé avec succès.");
    closeModal();
    showTextResultModal.value = "Vendeur créé avec succès !";
    showTypeResultModal.value = "success";
    showResultModal.value = true;
  } catch (error) {
    console.error("Erreur lors de la création du vendeur :", error);
    closeModal();
    showTextResultModal.value = "Erreur lors de la création du vendeur";
    showTypeResultModal.value = "error";
    showResultModal.value = true;
  } finally {
    //Réinitialisation des données du formulaire
    // lastName.value = "";
    // firstName.value = "";
    // gender.value = null;
    // birthDate.value = null;
    // email.value = "";
    // phone.value = "";
    // identification.value = null;
    // maritalStatus.value = null;
    // identificationNumber.value = "";
    // imageOfIdentification.value = null;
  }
};

const closeModal = () => {
  resetForm();
  emit("update:open", false);
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
