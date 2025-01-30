<script setup >
  const props = defineProps({
    show: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      // required: true
    }
  });

  const tab = defineModel(); 

  const emit = defineEmits(["closeModal", "submit"]);

  const procedureData = toRef(props, "data");
  
</script>

<template>

  <v-dialog v-model="props.show" max-width="900" :persistent="true" >
    <v-card title="Modifier l'étape de la procédure" >
      <v-tabs
      v-model="tab" 
      color="#ad1919"
    >
      <v-tab v-for="step in procedureData.steps.filter(elem => ['terminée', 'en cours'].includes(elem.status.toLowerCase()))" :value="step.action"  > {{ step.action }} </v-tab>

    </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab" >
          <v-tabs-window-item v-for="step in procedureData.steps.filter(elem => ['terminée', 'en cours'].includes(elem.status.toLowerCase()))" :value="step.action">
            <v-file-input v-for="doc in Object.keys(step.documents)" name="test" :label="doc" variant="outlined" prepend-inner-icon="mdi-file" />
          </v-tabs-window-item>
        </v-tabs-window>

        
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              text="Annuler"
              variant="plain"
              @click="$emit('closeModal')"
              class="text-none"
          ></v-btn>

          <v-btn
              color="primary"
              text="Enregistrer"
              variant="tonal"
              @click="$emit('submit', procedureData)"
              class="text-none"
          ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>
