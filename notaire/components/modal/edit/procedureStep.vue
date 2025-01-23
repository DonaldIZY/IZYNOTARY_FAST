<script setup >
  const props = defineProps({
    show: {
      type: Boolean,
      required: true
    },
    // procedureData: {
    //   type: Object,
    //   required: true
    // }
  });



</script>

<template>

  <v-dialog v-model="props.show" max-width="600" >
    <v-card title="Modifier l'étape de la procédure" >
      <v-card-text>

        <v-file-input name="test" label="Sélectionnez le fichier pour cette étape" variant="outlined" prepend-inner-icon="mdi-file">

        </v-file-input>
      </v-card-text>
      <v-divider></v-divider>

<v-card-actions>
    <v-spacer></v-spacer>

    <v-btn
        text="Annuler"
        variant="plain"
        @click="$emit('close-modal')"
        class="text-none"
    ></v-btn>

    <v-btn
        color="primary"
        text="Enregistrer"
        variant="tonal"
        @click="$emit('submit')"
        class="text-none"
    ></v-btn>
</v-card-actions>
    </v-card>
  </v-dialog>

</template>
