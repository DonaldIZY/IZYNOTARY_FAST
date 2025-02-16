<template>
  <v-dialog v-model="dialog" max-width="400">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        @click="dialog = true"
        class="text-none"
        variant="tonal"
        color="secondary"
        prepend-icon="mdi-cursor-default-click-outline"
        block
      >
        Sélectionner un responsable de suivi
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="d-flex justify-space-between align-center">
        <div>
          <v-icon class="mr-1">mdi-cursor-default-click-outline</v-icon>
          <span class="title">Sélectionner un responsable de suivi</span>
        </div>
        <v-btn icon @click="dialog = false" size="small" variant="text">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <!-- Champ de recherche -->
        <v-text-field
          v-model="searchQuery"
          label="Rechercher un agent"
          density="compact"
          variant="outlined"
          prepend-inner-icon="mdi-magnify"
          color="primary"
          clearable
          hide-details
        ></v-text-field>
        <div class="card-text">
          <!-- Si la liste est vide, afficher une image et un texte -->
          <div v-if="filteredItems.length === 0" class="empty-state">
            <span>
              <v-img
                src="~/assets/img/tableIcon_nodata.png"
                height="80"
                width="80"
                class="mb-3"
                alt="Aucune donnée"
              ></v-img>
              <span>Aucun agent trouvé</span>
            </span>
          </div>
          <!-- Sinon, afficher la liste des clients -->
          <v-list v-else>
            <v-list-item
              v-for="item in filteredItems"
              :key="item[itemValue]"
              @click="selectItem(item)"
              density="compact"
            >
              <v-list-item-title>{{ item[itemTitle] }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
const open = ref(false);

const searchQuery = ref("");

const props = defineProps({
  modelValue: [String, Number],
  items: Array,
  itemTitle: {
    type: String,
  },
  itemValue: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);
const dialog = ref(false);

const selectItem = (item) => {
  emit("update:modelValue", item[props.itemValue]);
  dialog.value = false;
};

// Filtrer les items en fonction de la recherche
const filteredItems = computed(() => {
  if (!searchQuery.value) return props.items;
  return props.items.filter((item) =>
    item[props.itemTitle]
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())
  );
});
</script>

<style>
.title {
  font-weight: bold;
  margin-left: 0.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
}

.card-text {
  height: 24rem;
  max-height: 30rem; /* Définir une hauteur maximale */
  overflow-y: auto; /* Rendre la div scrollable */
}

/* Style pour l'état vide */
.empty-state {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #666;
  height: 100%;
}

.empty-state > span {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
