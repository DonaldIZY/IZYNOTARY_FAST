<template>
  <v-dialog v-model="props.open" max-width="500">
    <v-card>
      <v-card-title
        ><v-icon>mdi-account-plus</v-icon>
        <span class="title">Créer un utilisateur</span></v-card-title
      >
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-text-field
              v-model="lastName"
              color="primary"
              label="Nom"
              variant="outlined"
              density="compact"
              :rules="validationRules.required"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="firstName"
              color="primary"
              label="Prénoms"
              variant="outlined"
              density="compact"
              :rules="validationRules.required"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="email"
              color="primary"
              label="Email"
              variant="outlined"
              :rules="validationRules.email"
              density="compact"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="phone"
              type="number"
              color="primary"
              label="Téléphone"
              variant="outlined"
              density="compact"
              :rules="validationRules.phone"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-select
              v-model="roleId"
              color="primary"
              label="Rôle"
              :items="roles"
              item-title="NAME"
              item-value="ID"
              variant="outlined"
              density="compact"
              :rules="validationRules.required"
              hide-details
            ></v-select>
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
          @click="handleUser"
          :disabled="!isFormValid"
          class="text-none"
        ></v-btn>
      </v-card-actions>
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
// import rules from
import { validationRules } from '~/utils/validationRules';

const showResultModal = ref(false);
const showTextResultModal = ref("");
const showTypeResultModal = ref("");

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const lastName = ref("");
const firstName = ref("");
const email = ref("");
const phone = ref("");
const roles = ref([]);
const roleId = ref(null);

const emit = defineEmits(["update:open"]);
const config = useRuntimeConfig();

const resetForm = () => {
  lastName.value = "";
  firstName.value = "";
  email.value = "";
  phone.value = "";
  roleId.value = null;
};

const isFormValid = computed(() => {
  return (
    lastName.value &&
    firstName.value &&
    email.value &&
    phone.value &&
    roleId.value
  );
});

const closeModal = () => {
  resetForm();
  emit("update:open", false);
};

const handleUser = async () => {
  const userData = {
    lastName: lastName.value,
    firstName: firstName.value,
    phone: phone.value,
    email: email.value,
    roleId: roleId.value,
  };

  try {
    const data = await $fetch(API_SERVER_URL + `/users`, {
      method: "POST",
      body: JSON.stringify(userData),
    });
    closeModal();
    showTextResultModal.value = "Utilisateur créé avec succès !";
    showTypeResultModal.value = "success";
    showResultModal.value = true;
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
    closeModal();
    showTextResultModal.value = "Erreur lors de la création de l'utilisateur.";
    showTypeResultModal.value = "error";
    showResultModal.value = true;
  } finally {
    //Réinitialisation des données du formulaire
    resetForm();
  }
};

const { data: fetchedRoles, error } = useFetch(API_SERVER_URL + `/roles`);

onMounted(() => {
  if (fetchedRoles.value) {
    roles.value = fetchedRoles.value.map((role) => ({
      ID: role.id,
      NAME: role.name,
    }));
  } else if (error.value) {
    console.error("Erreur lors du chargement des roles :", error.value);
  }
});
</script>
<style>
.title {
  font-weight: bold;
  margin-left: 0.5rem;
}
</style>
