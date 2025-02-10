<template>
  <div class="ma-4">
    <back-button title="Liste des rôles" goBackTo="/home" />
  </div>
  <div class="ma-4">
    <v-sheet rounded elevation="4">
      <v-data-table
        :headers="rolesHeaders"
        :items="roles"
        :search="rolesSearch"
        class="customTable1"
        density="compact"
        fixed-header
        hover
        hide-default-footer
        :loading="loading"
      >
        <!-- Slot pour afficher un loader quand la table est vide -->
        <template v-slot:loading>
          <div class="d-flex justify-center my-10">
            <v-progress-circular
              color="red"
              indeterminate
            ></v-progress-circular>
          </div>
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
  </div>
</template>

<script setup>
import { API_SERVER_URL } from "~/utils/constants";

const loading = ref(true);

const rolesHeaders = ref([
  { align: "start", key: "NUM", title: "N°" },
  { align: "start", key: "NAME", title: "Nom" },
  { align: "start", key: "DESCRIPTION", title: "Description" },
]);

const roles = ref([]);

const rolesSearch = ref(null);

const config = useRuntimeConfig();

const loadRoles = async () => {
  try {
    const fetchedRoles = await $fetch(API_SERVER_URL + `/roles`);
    if (fetchedRoles) {
      roles.value = fetchedRoles.map((role, index) => ({
        NUM: index + 1,
        NAME: role.name,
        DESCRIPTION: role.description,
      }));
    }
    loading.value = false;
  } catch (err) {
    console.error("Erreur lors du chargement des rôles :", err);
    loading.value = false;
  }
};

loadRoles();
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
</style>
