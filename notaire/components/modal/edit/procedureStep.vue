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
    <v-card >
      <v-card-title>{{ `Modifier l'étape de la procédure ${procedureData.folderNum}` }}</v-card-title>
      <v-tabs v-if="['En cours', 'Terminée'].includes(procedureData.STATUS)" v-model="tab" color="#ad1919">
        <v-tab
          v-for="step in procedureData.steps.filter((elem) =>
            ['terminée', 'en cours'].includes(elem.status.toLowerCase())
          )"
          :value="step.action "
        >
          {{ `Etape ${procedureData.steps.findIndex(elem => elem.action == step.action) + 1}`}}
        </v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-if="['En cours', 'Terminée'].includes(procedureData.STATUS)" v-model="tab">
          <v-tabs-window-item
            v-for="step in procedureData.steps.filter((elem) =>
              ['terminée', 'en cours'].includes(elem.status.toLowerCase())
            )"
            :value="step.action"
          >
            
            <v-chip :style="{marginBottom: '1rem'}" :text="step.action" ></v-chip>
            
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
            <v-text-field color="primary"
              variant="outlined"
              density="compact" 
              label="Commentaire"
              v-model="step.comment" 
              v-on:update:model-value="(val) => {
                console.log('comment : ', val);
                if (newProcedureData.action == step.action) {
                  newProcedureData.comment = val;
                } else {
                  newProcedureData = {action: step.action, comment: val};
                }
                // console.log('new procedure data:', newProcedureData);
              }"
              />
            <v-row justify="end" >
              <v-btn 
              v-if="procedureData.steps.find(elem => elem.action == tab).status == 'En cours'"
          color="orange"
          text="Suspendre"
          variant="flat"
          @click="
            () => {
              if(newProcedureData.comment && newProcedureData.comment.trim() != '') {
                newProcedureData.status = 'Suspendue';
                console.log('procedure data to cancel : ', {...newProcedureData, contact: procedureData.customer.phone,
                folderNum: procedureData.folderNum,
                procedureType: procedureData.PROCEDURE_TYPE,
                id: procedureData.stepId});
                $emit('submit', {
              ...newProcedureData,
              contact: procedureData.customer.phone,
              folderNum: procedureData.folderNum,
              procedureType: procedureData.PROCEDURE_TYPE,
              id: procedureData.stepId,
            });
              }else{
                console.log('Veuillez ajouter un commentaire pour suspendre la procédure');
              }
            }
          "
          class="text-none"
          ></v-btn>
          <v-btn
          v-if="procedureData.steps.find(elem => elem.action == tab).status == 'En cours'"
          color="primary"
          text="Arrêter"
          variant="flat"
          @click="
            () => {
              /*$emit('submit', {
              ...newProcedureData,
              contact: procedureData.customer.phone,
              folderNum: procedureData.folderNum,
              procedureType: procedureData.PROCEDURE_TYPE,
              id: procedureData.stepId,
            })*/
              if(newProcedureData.comment && newProcedureData.comment.trim() != '') {
                newProcedureData.status = 'Arrêtée';
                console.log('procedure data to cancel : ', {...newProcedureData, contact: procedureData.customer.phone,
                folderNum: procedureData.folderNum,
                procedureType: procedureData.PROCEDURE_TYPE,
                id: procedureData.stepId});
                $emit('submit', {
              ...newProcedureData,
              contact: procedureData.customer.phone,
              folderNum: procedureData.folderNum,
              procedureType: procedureData.PROCEDURE_TYPE,
              id: procedureData.stepId,
            });
              }else{
                console.log('Veuillez ajouter un commentaire pour arrêter la procédure');
              }
            
            }
          "
          class="text-none"
          ></v-btn>
        
            </v-row>
          </v-tabs-window-item>
        </v-tabs-window>

        <img v-if="procedureData.STATUS == 'Arrêtée'" :style="{width: '50%', maxWidth: '150px', display: 'block', margin: '0 auto'}" src="/public/sorry.png" />
        <h4 v-if="procedureData.STATUS == 'Arrêtée'" :style="{textAlign: 'center'}">Vous ne pouvez pas modifier une procédure arrêtée</h4>
        <v-text-field 
        v-if="procedureData.STATUS == 'Suspendue'"
        color="primary"
        variant="outlined"
        density="compact" 
        label="Commentaire pour reprendre la procédure"
        v-model="procedureData.steps.find(elem => elem.status == 'Suspendue').comment" 
        v-on:update:model-value="(val) => {
          console.log('suspended step comment : ', val);
          if (newProcedureData.action == procedureData.steps.find(elem => elem.status == 'Suspendue').action) {
            newProcedureData.comment = val;
          } else {
            newProcedureData = {action: procedureData.steps.find(elem => elem.status == 'Suspendue').action, comment: val};
          }
          // console.log('new procedure data:', newProcedureData);
        }"
        />
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
          v-if="['En cours', 'Terminée'].includes(procedureData.STATUS)"
          color="primary"
          text="Enregistrer"
          variant="flat"
          @click="
            $emit('submit', {
              ...newProcedureData,
              contact: procedureData.customer.phone,
              folderNum: procedureData.folderNum,
              procedureType: procedureData.PROCEDURE_TYPE,
              id: procedureData.stepId,
            })
          "
          class="text-none"
        ></v-btn> 
        <v-btn
          v-if="procedureData.STATUS == 'Suspendue'"
          color="primary"
          text="Continuer la procédure"
          variant="flat"
          @click="
            () => {
              if(newProcedureData.comment && newProcedureData.comment.trim() != '') {
                newProcedureData.status = 'En cours';
                $emit('submit', {
              ...newProcedureData,
              contact: procedureData.customer.phone,
              folderNum: procedureData.folderNum,
              procedureType: procedureData.PROCEDURE_TYPE,
              id: procedureData.stepId,
            });
              }else{
                console.log('Veuillez ajouter un commentaire pour continuer la procédure');
              }
            
            }
          "
          class="text-none"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
