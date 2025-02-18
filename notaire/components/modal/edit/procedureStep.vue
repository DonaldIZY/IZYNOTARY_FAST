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
  loading: {
    type: Boolean
  }
});

const showResultModal = ref(false);
const showTextResultModal = ref("");
const showTypeResultModal = ref("");
const loading = toRef(props, "loading");
const showSuspendedBtn = ref(true);
const showStoppedBtn = ref(true);

console.log('loading : ', loading.value);

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

      <v-card-text class="py-1">
        <v-tabs-window
          v-if="['En cours', 'Terminé'].includes(procedureData.STATUS)"
          v-model="tab"
        >
          <v-tabs-window-item
            class="px-4"
            v-for="step in procedureData.steps.filter((elem) =>
              ['terminé', 'en cours'].includes(elem.status.toLowerCase())
            )"
            :value="step.action"
          >
            <v-row dense>
              <v-sheet class="infoStep">
                <v-col cols="9" class="px-0">
                  <span class="infoStep-text">{{ step.action }}</span>
                </v-col>
                <v-col cols="3" class="infoStep-status px-0">
                  <v-chip
                    density="compact"
                    rounded="md"
                    :text="step.status"
                    :color="getStatusColorIcon(step.status)"
                    variant="flat"
                  ></v-chip>
                </v-col>
              </v-sheet>
              <v-divider></v-divider>
            </v-row>
            <v-row class="scrollable-content">
              <v-col cols="12">
                <p class="mb-5">Documents</p>
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
                <p class="mt-0 mb-3">Actions supplémentaires</p>
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
                  placeholder="Écrivez votre commentaire ici..."
                  rows="3"
                  hide-details
                  v-model="step.comment"
                  @update:model-value="
                    (val) => {
                      if (newProcedureData.action == step.action) {
                        newProcedureData.comment = val;
                      } else {
                        newProcedureData.action = step.action;
                        newProcedureData.comment = val;
                      }
                    }
                  "
                />
                <v-btn
                  :loading="loading"
                  class="suspendedBtn text-none"
                  v-if="
                    procedureData.steps.find((elem) => elem.action == tab)
                      .status == 'En cours' && showSuspendedBtn
                  "
                  color="secondary"
                  text="Suspendre l'étape"
                  variant="tonal"
                  @click="
                    () => {
                      showStoppedBtn = false;
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
                        showTextResultModal =
                          'Veuillez ajouter un commentaire avant de suspendre la procédure.';
                        showTypeResultModal = 'warning';
                        showResultModal = true;
                      }
                    }
                  "
                ></v-btn>
                <v-btn
                  :loading="loading"
                  class="stoppedBtn text-none"
                  v-if="
                    procedureData.steps.find((elem) => elem.action == tab)
                      .status == 'En cours' && showStoppedBtn
                  "
                  color="primary"
                  text="Arrêter l'étape"
                  variant="tonal"
                  @click="
                    () => {
                      showSuspendedBtn = false;
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
                        showTextResultModal = `Veuillez ajouter un commentaire avant d'arrêter la procédure.`;
                        showTypeResultModal = 'warning';
                        showResultModal = true;
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
          :loading="loading"
          v-if="['En cours', 'Terminé'].includes(procedureData.STATUS)"
          color="primary"
          text="Enregistrer"
          variant="flat"
          @click="
            () => {
              showStoppedBtn = false;
              showSuspendedBtn = false;
              $emit('submit', {
                ...newProcedureData,
                contact: procedureData.customer.phone,
                folderNum: procedureData.folderNum,
                procedureType: procedureData.PROCEDURE_TYPE,
                id: procedureData.stepId,
              });
              newProcedureData = {};
              // console.log('loading : ', loading);
            }
          "
          class="text-none" 
          :disabled="newProcedureData.status && (showStoppedBtn || showSuspendedBtn) ? true : false"
        ></v-btn>
        <v-btn
          :loading="loading"
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
    <result-modal-validation
      :text="showTextResultModal"
      :open="showResultModal"
      :type="showTypeResultModal"
      @update:open="showResultModal = $event"
    />
  </v-dialog>
</template>

<style scoped>
.titleModification {
  font-weight: bolder;
}

.folderNumber {
  color: #ad1919;
}

.infoStep {
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
}

.infoStep-text {
  font-size: 0.9rem;
  font-weight: bold;
}

.infoStep-status {
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 0.9rem;
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
