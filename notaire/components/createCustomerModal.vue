<template>
  <v-dialog v-model="props.open" max-width="600">
    <v-card>
      <v-card-title
        ><v-icon>mdi-account-tie</v-icon>
        <span class="title">Créer un client</span></v-card-title
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
              label="Date de naissance"
              variant="outlined"
              density="compact"
              :max="maxDate"
              :year="new Date(maxDate).getFullYear()"
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
              :rules="[emailRule]"
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="phone"
              color="primary"
              label="Téléphone"
              variant="outlined"
              density="compact"
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
          @click="handleCustomer"
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

const handleCustomer = async () => {
  const customerData = new FormData();

  customerData.append("lastName", lastName.value);
  customerData.append("firstName", firstName.value);
  customerData.append("gender", gender.value);
  customerData.append("birthDate", birthDate.value);
  customerData.append("email", email.value);
  customerData.append("phone", phone.value);
  customerData.append("identification", identification.value);
  customerData.append("identificationNumber", identificationNumber.value);
  customerData.append("imageOfIdentification", imageOfIdentification.value);

  console.log(customerData.get("imageOfIdentification"));
  try {
    const data = await $fetch(
      `${config.public.baseUrl}/customers`,
      {
        method: "POST",
        body: customerData,
      }
    );
    alert("Client créé avec succès.");
    closeModal();
  } catch (error) {
    console.error("Erreur lors de la création du client :", error);
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
