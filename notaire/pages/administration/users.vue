<template>
  <div class="d-flex justify-space-between ma-4">
    <back-button title="Liste des utilisateurs" goBackTo="/home" />
    <v-btn
      prependIcon="mdi-account-plus-outline"
      color="primary"
      class="text-none"
      @click="toggleModal"
      >Ajouter un utilisateur</v-btn
    >
    <modal-add-user :open="open" @update:open="open = $event" />
  </div>

  <div class="ma-4">
    <v-sheet rounded elevation="4">
      <v-data-table
        :headers="usersHeaders"
        :items="users"
        :search="usersSearch"
        items-per-page-text="Utilisateurs par page :"
        page-text
        class="customTable1"
        density="compact"
        fixed-header
        hover
      >
        <template v-slot:item.ROLE="{ item }">
          {{ item.ROLE.name }}
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn
            class="actionBtn"
            title="Modifier"
            color="gray"
            size="x-small"
            density="comfortable"
            icon="mdi-pencil"
            @click="toggleEditModal(item)"
          ></v-btn>
          <v-btn
            class="actionBtn"
            title="Supprimer"
            color="#ad1919"
            size="x-small"
            density="comfortable"
            icon="mdi-delete"
            @click="toggleConfModal(item)"
          ></v-btn>
          <v-btn
            class="actionBtn"
            title="Réinitialiser le mot de passe"
            color="green"
            size="x-small"
            density="comfortable"
            icon="mdi-lock-reset"
            @click="toggleConfModal(item)"
            disabled
          ></v-btn>
        </template>
        <!-- Slot personnalisé pour l'affichage quand il n'y a pas de données -->
        <template #no-data>
          <div class="no-data-container">
            <v-img
              src="~/assets/img/tableIcon_nodata.png"
              height="80"
              width="80"
              class="mb-3"
              alt="Aucune donnée"
            ></v-img>
            <p>Aucune donnée</p>
          </div>
        </template>
      </v-data-table>
    </v-sheet>
    <modal-edit-user
      :open="openEdit"
      :userData="selectedUser"
      @update:open="openEdit = $event"
      @userUpdated="loadUsers"
    />
    <confirmation-modal
      text="Vous êtes sur le point de supprimer cet utilisateur. Souhaiteriez-vous continuer?"
      :open="openConf"
      @update:open="openConf = $event"
      :submit="() => deleteUser(selectedUser.ID)"
    />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

// Références
const usersHeaders = ref([
  { align: "start", key: "NUM", title: "N°" },
  { align: "start", key: "LAST_NAME", title: "Nom" },
  { align: "start", key: "FIRST_NAME", title: "Prénoms" },
  { align: "start", key: "EMAIL", title: "Email" },
  { align: "start", key: "CREATE_AT", title: "Date de création" },
  { align: "start", key: "ROLE", title: "Rôle" },
  { align: "start", key: "actions", title: "Actions" },
]);
const users = ref([]);
const usersSearch = ref(null);
const open = ref(false);
const openConf = ref(false);
const openEdit = ref(false);
const selectedUser = ref(null);

const toggleModal = () => {
  open.value = !open.value;
};

const toggleConfModal = (item) => {
  selectedUser.value = item;
  openConf.value = !openConf.value;
};

const toggleEditModal = (item) => {
  selectedUser.value = item;
  openEdit.value = !openEdit.value;
};

const loadUsers = async () => {
  try {
    const fetchedUsers = await $fetch(`http://serverizynotary.izydr.net/users`);
    if (fetchedUsers) {
      users.value = fetchedUsers.map((user, index) => ({
        NUM: index + 1,
        ID: user.id,
        LAST_NAME: user.lastName,
        FIRST_NAME: user.firstName,
        EMAIL: user.email,
        CREATE_AT: new Date(user.createAt).toLocaleDateString(),
        ROLE: user.role,
      }));
    }
  } catch (err) {
    console.error("Erreur lors du chargement des utilisateurs :", err);
  }
};

loadUsers();

watchEffect(() => {
  if (!open.value) {
    loadUsers(); // Recharger les utilisateurs quand le modal est fermé
  }
});

const deleteUser = async (id) => {
  try {
    await $fetch(`http://serverizynotary.izydr.net/users/${id}`, {
      method: "DELETE",
    });
    alert("Utilisateur supprimé avec succès!");
    const updatedUsers = users.value.filter((user) => user.ID !== id);
    users.value = updatedUsers;
    selectedUser.value = null;
  } catch (err) {
    console.error("Erreur lors de la suppression de l'utilisateur :", err);
  }
};
</script>

<style scoped>
@import url("~/assets/css/table.css");

.no-data-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  text-align: center;
  font-size: 16px;
}

.actionBtn {
  margin: 0 0.3rem;
}
</style>
