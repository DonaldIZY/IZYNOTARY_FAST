<template>
  <v-dialog v-model="props.open" max-width="600">
    <v-card>
      <v-card-title
        ><v-icon>mdi-account-tie-voice</v-icon>
        <span class="title">Créer un vendeur</span></v-card-title
      >
      <v-card-text>
        <v-row dense>
          <v-col cols="6">
            <v-text-field
              v-model="lastName"
              color="primary"
              label="Nom"
              variant="outlined"
              density="compact"
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="firstName"
              color="primary"
              label="Prénoms"
              variant="outlined"
              density="compact"
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
            ></v-select>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="email"
              color="primary"
              label="Email"
              density="compact"
              variant="outlined"
              :rules="[emailRule]"
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="phone"
              color="primary"
              label="Téléphone"
              density="compact"
              variant="outlined"
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
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-file-input
              v-model="imageOfIdentification"
              color="primary"
              density="compact"
              label="Ajout d'une image de la pièce d'identité"
              prepend-icon=""
              prepend-inner-icon="mdi-id-card"
              variant="outlined"
            ></v-file-input>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Annuler"
          variant="plain"
          @click="closeModal"
          class="text-none"
        ></v-btn>

        <v-btn
          color="primary"
          text="Enregistrer"
          variant="tonal"
          @click="handleSeller"
          class="text-none"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

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

const emailRule = (v) => {
  return (
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ||
    "Veuillez entrer une adresse email valide."
  );
};

const emit = defineEmits(["update:open"]);

const config = useRuntimeConfig();

const today = new Date();
const maxDate = new Date(
  today.getFullYear() - 18,
  today.getMonth(),
  today.getDate()
)
   .toISOString()
  .split("T")[0]; // Format ISO pour Vuetify

const handleSeller = async () => {
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
    
    const data = await $fetch(`${config.public.baseUrl}/sellers`, {
      method: "POST",
      body: sellerData,
    });
    alert("Vendeur créé avec succès.");
    closeModal();
  } catch (error) {
    console.error("Erreur lors de la création du vendeur :", error);
  }
};

const closeModal = () => {
  emit("update:open", false);
};
</script>
<style>
  .title {
    font-weight: bold;
    margin-left: 0.5rem;
  }
</style>
