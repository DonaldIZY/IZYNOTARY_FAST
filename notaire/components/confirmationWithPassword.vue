<template>
  <v-dialog v-model="props.open" width="500">
    <v-card>
      <v-card-title
        ><v-icon>mdi-alert-circle-outline</v-icon>
        <span class="title">Confirmation</span></v-card-title
      >
      <v-card-text class="ma-4 text-center">
        <p>{{ text }}</p>
        <br>
        <p>Veuillez entrer votre mot de passe:</p>
        <v-text-field variant="outlined" color="primary" class="passwordInput" label="Mot de passe" prepend-inner-icon="mdi-lock-outline" density="compact" hide-details></v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="secondary"
          text="Non"
          variant="flat"
          @click="closeModal"
          class="text-none"
        ></v-btn>
        <v-btn
          color="primary"
          text="Oui"
          variant="flat"
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

<style>
.title {
  font-weight: bold;
  margin-left: 0.5rem;
}

.passwordInput{
  margin-top: 1rem;
}
</style>
