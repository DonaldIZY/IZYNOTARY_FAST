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
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="firstName"
              color="primary"
              label="Prénoms"
              variant="outlined"
              density="compact"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="email"
              color="primary"
              label="Email"
              variant="outlined"
              :rules="[required, emailRule]"
              density="compact"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="phone"
              color="primary"
              label="Téléphone"
              variant="outlined"
              density="compact"
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
          variant="plain"
          @click="closeModal"
          class="text-none"
        ></v-btn>

        <v-btn
          color="primary"
          text="Enregistrer"
          variant="tonal"
          @click="handleUser"
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
const email = ref("");
const roles = ref([]);
const roleId = ref(null);

const emit = defineEmits(["update:open"]);
const config = useRuntimeConfig();

const resetForm = () => {
  lastName.value = "";
  firstName.value = "";
  email.value = "";
  roleId.value = null;
};

const closeModal = () => {
  resetForm();
  emit("update:open", false);
};

const handleUser = async () => {
  const userData = {
    lastName: lastName.value,
    firstName: firstName.value,
    email: email.value,
    roleId: roleId.value,
  };

  try {
    const data = await $fetch(`${config.public.baseUrl}/users`, {
      method: "POST",
      body: JSON.stringify(userData),
    });
    alert("Utilisateur créé avec succès.");
    closeModal();
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
  }
};

const required = (v) => {
  return !!v || "Le champ est requis.";
};

const emailRule = (v) => {
  return (
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ||
    "Veuillez entrer une adresse email valide."
  );
};

const { data: fetchedRoles, error } = useFetch(
  `${config.public.baseUrl}/roles`
);

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
