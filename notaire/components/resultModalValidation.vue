<template>
  <v-dialog v-model="props.open" width="400">
    <v-card>
      <v-card-text class="mt-4 text-center">
        <v-icon
          class="mb-6"
          :color="iconColor"
          :icon="iconType"
          size="128"
        ></v-icon>
        <p>{{ text }}</p>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          color="secondary"
          text="Fermer"
          variant="flat"
          @click="closeModal"
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
  text: {
    type: String,
  },
  type: {
    type: String, // Valeur par défaut
    validator: (value) =>
      ["", "success", "error", "info", "warning"].includes(value),
  },
});

const emit = defineEmits(["update:open"]);

const closeModal = () => {
  emit("update:open", false);
};

// Définition des couleurs et icônes dynamiquement
const iconColor = computed(() => {
  return (
    {
      success: "green",
      error: "primary",
      info: "blue",
      warning: "orange",
    }[props.type] || "blue"
  );
});

const iconType = computed(() => {
  return (
    {
      success: "mdi-check-circle-outline",
      error: "mdi-close-circle-outline",
      info: "mdi-information-outline",
      warning: "mdi-alert-outline",
    }[props.type] || "mdi-information-outline"
  );
});
</script>
<style>
.title {
  font-weight: bold;
  margin-left: 0.5rem;
}
</style>
