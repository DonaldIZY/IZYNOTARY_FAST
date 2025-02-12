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
              v-model="user.lastName"
              color="primary"
              label="Nom"
              variant="outlined"
              density="compact"
              :rules="validationRules.required"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="user.firstName"
              color="primary"
              label="Prénoms"
              variant="outlined"
              density="compact"
              :rules="validationRules.required"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="user.email"
              color="primary"
              label="Email"
              variant="outlined"
              :rules="validationRules.email"
              density="compact"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="user.phone"
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
              v-model="user.roleId"
              color="primary"
              label="Rôle"
              :items="roles"
              item-title="NAME"
              item-value="ID"
              variant="outlined"
              density="compact"
              hide-details
              :rules="validationRules.required"
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
          class="text-none"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { API_SERVER_URL } from "~/utils/constants";

const props = defineProps({
  open: Boolean,
  userData: Object, // Données de l'utilisateur à modifier
});

const emit = defineEmits(["update:open"]);

const config = useRuntimeConfig();
const roles = ref([]);

const user = reactive({
  id: null,
  lastName: "",
  firstName: "",
  email: "",
  phone: "",
  roleId: null,
});

// Met à jour `user` lorsque `userData` change
watchEffect(() => {
  if (props.userData) {
    user.id = props.userData.ID;
    user.lastName = props.userData.LAST_NAME;
    user.firstName = props.userData.FIRST_NAME;
    user.email = props.userData.EMAIL;
    user.phone = props.userData.PHONE;
    user.roleId = props.userData.ROLE?.id;
  }
});

// Récupération des rôles
const { data: fetchedRoles, error } = useFetch(API_SERVER_URL + `/roles`);

watchEffect(() => {
  if (fetchedRoles.value) {
    roles.value = fetchedRoles.value.map((role) => ({
      ID: role.id,
      NAME: role.name,
    }));
  } else if (error.value) {
    console.error("Erreur lors du chargement des rôles :", error.value);
  }
});

// Fermeture du modal
const closeModal = () => {
  emit("update:open", false);
};

// Enregistrement des modifications
const handleUser = async () => {
  try {
    const response = await fetch(API_SERVER_URL + `/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) throw new Error("Erreur lors de la modification");

    alert("Utilisateur modifié avec succès.");
    emit("userUpdated");
    closeModal();
  } catch (error) {
    console.error("Erreur lors de la modification de l'utilisateur :", error);
  }
};
</script>
<style>
.title {
  font-weight: bold;
  margin-left: 0.5rem;
}
</style>
