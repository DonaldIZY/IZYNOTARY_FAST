<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});

const tab = defineModel();

const emit = defineEmits(["closeModal", "submit"]);

const procedureData = toRef(props, "data");

const newProcedureData = reactive({
  action: procedureData.value.steps[0].action,
  documents: {},
});

for (const docName of Object.keys(procedureData.value.steps[0].documents)) {
  newProcedureData.documents[docName] = null;
}

console.log(
  "newProcedureData after procedure has been selected: ",
  newProcedureData
);
</script>

<template>
  <v-dialog v-model="props.show" max-width="600">
    <v-card>
      <v-card-title
        class="titleModification d-flex justify-space-between align-center"
      >
        <span
          >Modification de la procédure N°
          <span class="folderNumber">{{ procedureData.folderNum }}</span></span
        >
        <v-btn icon @click="$emit('closeModal')" size="small" variant="text">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-tabs
        v-if="['En cours', 'Terminé'].includes(procedureData.STATUS)"
        v-model="tab"
        color="#ad1919"
      >
        <v-tab
          v-for="step in procedureData.steps.filter((elem) =>
            ['terminé', 'en cours'].includes(elem.status.toLowerCase())
          )"
          :value="step.action"
          class="text-none"
          @click="
            () => {
              newProcedureData.action = step.action;
              newProcedureData.documents = {};
              for (const docName of Object.keys(step.documents)) {
                newProcedureData.documents[docName] = '';
              }
              console.log('newProcedureData : ', newProcedureData);
            }
          "
        >
          {{
            `Étape ${
              procedureData.steps.findIndex(
                (elem) => elem.action == step.action
              ) + 1
            }`
          }}
        </v-tab>
      </v-tabs>

      <v-card-text class="scrollable-content">
        <v-tabs-window
          v-if="['En cours', 'Terminé'].includes(procedureData.STATUS)"
          v-model="tab"
        >
          <v-tabs-window-item
            class="pa-4"
            v-for="step in procedureData.steps.filter((elem) =>
              ['terminé', 'en cours'].includes(elem.status.toLowerCase())
            )"
            :value="step.action"
          >
            <v-row>
              <v-chip
                :style="{ marginBottom: '1rem' }"
                :text="step.action"
              ></v-chip>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-row
                  dense
                  :style="{ gap: '1rem', alignItems: 'top' }"
                  v-for="doc in Object.keys(step.documents)"
                >
                  <v-file-input
                    :name="doc"
                    :label="step.documents[doc].name"
                    variant="outlined"
                    density="compact"
                    color="primary"
                    prepend-icon=""
                    prepend-inner-icon="mdi-paperclip"
                    v-on:update:model-value="
                      (file) => {
                        if (newProcedureData.action == step.action) {
                          newProcedureData.documents[doc] = file;
                        } else {
                          newProcedureData = {
                            action: step.action,
                            documents: { [doc]: file },
                          };
                        }
                        console.log('newProcedureData : ', newProcedureData);
                      }
                    "
                    :disabled="step.documents[doc].path != '' ? true : false"
                  />

                  <required-document-customized
                    v-if="
                      step.documents[doc].path != '' ||
                      newProcedureData.documents[doc]
                    "
                    :label="step.documents[doc].name"
                    :filePath="API_SERVER_URL + step.documents[doc].path"
                    :receivedFile="newProcedureData.documents[doc]"
                  />
                </v-row>
              </v-col>
              <v-col cols="12">
                <h4 class="mt-0 mb-3">Actions supplémentaires</h4>
                <span
                  style="font-size: 0.8rem; font-style: italic; color: gray"
                  v-if="
                    procedureData.steps.find((elem) => elem.action == tab)
                      .status == 'En cours'
                  "
                >
                  Il faut obligatoirement faire un commentaire pour suspendre ou
                  arrêter l'étape.
                </span>
                <v-textarea
                  class="mt-2"
                  color="primary"
                  variant="outlined"
                  density="compact"
                  label="Commentaire"
                  rows="3"
                  hide-details
                  v-model="step.comment" 
                  @update:model-value="(val) => {
                    if(newProcedureData.action == step.action) {
                      newProcedureData.comment = val;
                    }else{
                      newProcedureData.action = step.action;
                      newProcedureData.comment = val;
                    }
                    
                  }"
                />
                <v-btn
                  class="suspendedBtn text-none"
                  v-if="
                    procedureData.steps.find((elem) => elem.action == tab)
                      .status == 'En cours'
                  "
                  color="secondary"
                  text="Suspendre l'étape"
                  variant="tonal"
                  @click="
                    () => {
                      if (
                        newProcedureData.comment &&
                        newProcedureData.comment.trim() != ''
                      ) {
                        newProcedureData.status = 'Suspendu';
                        $emit('submit', {
                          ...newProcedureData,
                          contact: procedureData.customer.phone,
                          folderNum: procedureData.folderNum,
                          procedureType: procedureData.PROCEDURE_TYPE,
                          id: procedureData.stepId,
                        });
                        newProcedureData = {};
                      } else {
                        console.log(
                          'Veuillez ajouter un commentaire pour suspendre la procédure'
                        );
                      }
                    }
                  "
                ></v-btn>
                <v-btn
                  class="stoppedBtn text-none"
                  v-if="
                    procedureData.steps.find((elem) => elem.action == tab)
                      .status == 'En cours'
                  "
                  color="primary"
                  text="Arrêter l'étape"
                  variant="tonal"
                  @click="
                    () => {
                      if (
                        newProcedureData.comment &&
                        newProcedureData.comment.trim() != ''
                      ) {
                        newProcedureData.status = 'Arrêté';
                        $emit('submit', {
                          ...newProcedureData,
                          contact: procedureData.customer.phone,
                          folderNum: procedureData.folderNum,
                          procedureType: procedureData.PROCEDURE_TYPE,
                          id: procedureData.stepId,
                        });
                        newProcedureData = {};
                      } else {
                        console.log(
                          'Veuillez ajouter un commentaire pour arrêter la procédure'
                        );
                      }
                    }
                  "
                ></v-btn>
              </v-col>
            </v-row>
          </v-tabs-window-item>
        </v-tabs-window>

        <v-textarea
          v-if="['Suspendu', 'Arrêté'].includes(procedureData.STATUS)"
          color="primary"
          variant="outlined"
          density="compact"
          label="Commentaire pour reprendre la procédure"
          v-model="
            procedureData.steps.find((elem) =>
              ['Suspendu', 'Arrêté'].includes(elem.status)
            ).comment
          "
          v-on:update:model-value="
            (val) => {
              if (
                newProcedureData.action ==
                procedureData.steps.find((elem) =>
                  ['Suspendu', 'Arrêté'].includes(elem.status)
                ).action
              ) {
                newProcedureData.comment = val;
              } else {
                newProcedureData = {
                  action: procedureData.steps.find((elem) =>
                    ['Suspendu', 'Arrêté'].includes(elem.status)
                  ).action,
                  comment: val,
                };
              }
            }
          "
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
              for (const docName of Object.keys(newProcedureData.documents)) {
                newProcedureData.documents[docName] = null;
              }
            }
          "
          class="text-none"
        ></v-btn>

        <v-btn
          v-if="['En cours', 'Terminé'].includes(procedureData.STATUS)"
          color="primary"
          text="Enregistrer"
          variant="flat"
          @click="
            () => {
              $emit('submit', {
                ...newProcedureData,
                contact: procedureData.customer.phone,
                folderNum: procedureData.folderNum,
                procedureType: procedureData.PROCEDURE_TYPE,
                id: procedureData.stepId,
              });
              newProcedureData = {};
            }
          "
          class="text-none"
        ></v-btn>
        <v-btn
          v-if="['Arrêté', 'Suspendu'].includes(procedureData.STATUS)"
          color="primary"
          text="Continuer la procédure"
          variant="flat"
          @click="
            () => {
              if (
                newProcedureData.comment &&
                newProcedureData.comment.trim() != ''
              ) {
                newProcedureData.status = 'En cours';
                $emit('submit', {
                  ...newProcedureData,
                  contact: procedureData.customer.phone,
                  folderNum: procedureData.folderNum,
                  procedureType: procedureData.PROCEDURE_TYPE,
                  id: procedureData.stepId,
                });
                newProcedureData = {};
              } else {
                console.log(
                  'Veuillez ajouter un commentaire pour continuer la procédure'
                );
              }
            }
          "
          class="text-none"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.titleModification {
  font-weight: bolder;
}

.folderNumber {
  color: #ad1919;
}

.scrollable-content {
  height: 28rem;
  max-height: 30rem;
  overflow-y: auto;
}

.suspendedBtn {
  margin: 1rem 1rem 0 0;
}

.stoppedBtn {
  margin: 1rem 0 0 0;
}
</style>
