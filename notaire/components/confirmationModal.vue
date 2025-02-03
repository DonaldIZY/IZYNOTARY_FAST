<template>
  <v-dialog v-model="props.open" width="500">
    <v-card prepend-icon="mdi-information-outline" title="Confirmation">
      <v-card-text class="ma-4 text-center">
        <p>{{ text }}</p>
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
          text="Valider"
          variant="tonal"
          @click="submitModal"
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
    default: "",
  },
  submit: {
    type: Function,
    default: () => {},
  },
});

const emit = defineEmits(["update:open"]);

const closeModal = () => {
  emit("update:open", false);
};

const submitModal = () => {
  props.submit();
  emit("update:open", false);
};
</script>
