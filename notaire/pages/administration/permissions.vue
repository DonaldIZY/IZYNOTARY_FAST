<template>
  <div class="ma-4">
    <back-button title="Liste des permissions" goBackTo="/home" />
  </div>
  <div class="ma-4">
    <v-sheet rounded elevation="4">
      <v-data-table
        :headers="permissionsHeaders"
        :items="permissions"
        :search="permissionsSearch"
        no-data-text="Aucune permission trouvée."
        class="customTable1"
        density="compact"
        fixed-header
        hide-default-footer
        hover
      >
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
const permissionsHeaders = ref([
  { align: "start", key: "NUM", title: "N°" },
  { align: "start", key: "NAME", title: "Nom" },
  { align: "start", key: "DESCRIPTION", title: "Description" },
]);

const permissions = ref([]);

const permissionsSearch = ref(null);

const config = useRuntimeConfig();

const loadPermissions = async () => {
  try {
    const fetchedPermissions = await $fetch(
      `${config.public.baseUrl}/permissions`
    );
    if (fetchedPermissions) {
      permissions.value = fetchedPermissions.map((permission, index) => ({
        NUM: index + 1,
        NAME: permission.name,
        DESCRIPTION: permission.description,
      }));
    }
  } catch (err) {
    console.error("Erreur lors du chargement des permissions :", err);
  }
};

loadPermissions();
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
