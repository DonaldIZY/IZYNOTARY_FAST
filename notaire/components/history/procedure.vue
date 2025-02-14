<template>
  <div class="text-center mr-1">
    <v-btn
      class="text-none mr-1"
      color="primary"
      variant="tonal"
      @click="dialog = true"
    >
      <v-icon class="mr-2">mdi-list-box-outline</v-icon>
      <span class="d-none d-sm-inline">{{ text }}</span>
    </v-btn>

    <v-dialog
      v-model="dialog"
      min-width="450"
      max-width="700"
      min-height="250"
      max-height="600"
    >
      <v-card
        class="card"
        prepend-icon="mdi-list-box-outline"
        title="Historique"
      >
        <v-card-text>Historique complète de la procédure</v-card-text>
        <v-card-actions
          ><v-btn color="primary" text="Ok" @click="dialog = false"></v-btn
        ></v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  default: "Titre du bouton",
});

const dialog = ref(false);
</script>

<style scoped></style>
