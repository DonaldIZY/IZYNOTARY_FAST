<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  data: {
    type: Object,
    // required: true
  },
});

const tab = defineModel();

const emit = defineEmits(["closeModal", "submit"]);

const procedureData = toRef(props, "data");


  console.log("procedureData : ", procedureData);

  const newProcedureData = reactive({}); 
  
</script>

<template>
  <v-dialog v-model="props.show" max-width="900" :persistent="true">
    <v-card title="Modifier l'étape de la procédure">
      <v-tabs v-model="tab" color="#ad1919">
        <v-tab
          v-for="step in procedureData.steps.filter((elem) =>
            ['terminée', 'en cours'].includes(elem.status.toLowerCase())
          )"
          :value="step.action"
        >
          {{ step.action }}
        </v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item
            v-for="step in procedureData.steps.filter((elem) =>
              ['terminée', 'en cours'].includes(elem.status.toLowerCase())
            )"
            :value="step.action"
          >
            <v-file-input
              v-for="doc in Object.keys(step.documents)"
              :name="doc"
              :label="step.documents[doc].name"
              variant="outlined"
              prepend-inner-icon="mdi-file"
              v-on:update:model-value="
                (file) => {
                  // newProcedureData[]
                  
                  if (newProcedureData.action == step.action) {
                    newProcedureData.documents[doc] = file;
                  } else {
                    newProcedureData = {
                      action: step.action,
                      documents: { [doc]: file },
                    };
                  }
                  // console.log('FILE :', file);
                  
                }
              " 
              :disabled="step.documents[doc].path != '' ? true : false"
            />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Annuler"
          color="secondary"
          variant="flat"
          @click="
            () => {
              $emit('closeModal');
              newProcedureData = {};
            }
          "
          class="text-none"
        ></v-btn>


          <v-btn
              color="primary"
              text="Enregistrer"
              variant="tonal"
              @click="$emit('submit', {...newProcedureData, contact: procedureData.customer.phone, folderNum: procedureData.folderNum, procedureType: procedureData.PROCEDURE_TYPE, id: procedureData.stepId })"
              class="text-none"
          ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
