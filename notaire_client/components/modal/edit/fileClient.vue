<template>
  <v-btn
    class="text-none"
    color="secondary"
    variant="flat"
    size="small"
    icon="mdi-file-upload-outline"
    density="comfortable"
    @click="dialog = true"
  >
  </v-btn>

  <v-dialog
    v-model="dialog"
    v-if="dialog"
    min-width="450"
    max-width="700"
    min-height="250"
    max-height="600"
  >
    <v-card class="card">
      <v-card-title class="title d-flex justify-space-between align-center">
        <span>
          <v-icon>mdi-file-upload-outline</v-icon>
          <span class="title"
            >Fourniture de documents - Procédure N°
            {{ procedureData.folderNum }}
          </span>
        </span>
        <v-btn icon @click="closeModal" size="small" variant="text">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-1 mb-3 scrollable-content">
        <v-row v-for="(doc, key) in stepList[0].documents" :key="key">
          <v-col cols="12" class="d-flex align-center">
            <v-file-input
              class="mr-2"
              :label="doc.name"
              v-model="doc.path"
              prepend-icon=""
              prepend-inner-icon="mdi-paperclip"
              variant="outlined"
              :show-size="doc.path !== ''"
              :disabled="doc.path && doc.allowed ? true : false"
              density="compact"
              hide-details
              @update:modelValue="handleFileChange($event, key)"
            ></v-file-input>
            <v-btn
              class="text-none mr-2"
              size="small"
              variant="tonal"
              color="primary"
              :disabled="doc.path ? false : true"
              @click="
                () => {
                  toggleModal();
                  generateFile(selectedFile);
                }
              "
              >Aperçu
            </v-btn>
            <v-chip
              size="x-small"
              rounded="md"
              variant="flat"
              label
              :color="doc.allowed ? 'green' : doc.disallowed ? 'red' : 'white'"
            >
              {{ doc.allowed ? "Validé" : doc.disallowed ? "Refusé" : "" }}
            </v-chip>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
          class="text-none"
          color="secondary"
          variant="flat"
          text="Annuler"
          @click="closeModal"
        ></v-btn>
        <v-btn
          :loading="loading"
          class="text-none"
          color="primary"
          variant="flat"
          text="Enregistrer"
          :disabled="isSaveDisabled"
          @click="updateProcedure({
                          ...newProcedureData,
                          contact: procedureData.customer.phone,
                          folderNum: procedureData.folderNum,
                          procedureType: procedureData.procedureType,
                          id: procedureData.step.id,
                        })" 
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Dialog pour prévisualisation -->
  <v-dialog v-model="open" :width="dialogWidth" class="ma-4">
    <v-card>
      <v-card-title>
        <v-icon size="small">mdi-file-document-outline</v-icon>
        <span class="title">Aperçu du document</span>
      </v-card-title>
      <v-card-text class="dialog-content">
        <!-- Prévisualisation pour différents types de fichiers -->
        <template v-if="fileType === 'image'">
          <!-- If fileType is image, we can use filePath as it is to show image since it is the online path of an image -->
          <img
            :src="previewContent ?? filePath /*testFilePath*/"
            alt="Prévisualisation"
            style="width: 150px"
          />
        </template>
        <template v-else-if="fileType === 'pdf'">
          <iframe
            :src="previewContent ?? filePath"
            style="width: 100%; height: 400px; border: 3px solid red"
            frameborder="0"
          ></iframe>
          <!-- <v-btn variant="tonal">
            <a
              :href="previewContent ?? filePath /*previewContent*/"
              download
              target="_blank"
              class="v-btn v-btn--outlined primary text-none"
            >
              Cliquer pour voir le fichier
            </a>
          </v-btn> -->
        </template>
        <template v-else-if="fileType === 'txt'">
          <pre
            v-if="previewContent"
            style="white-space: pre-wrap; max-height: 400px; overflow: auto"
            >{{ previewContent }}</pre
          >
          <iframe
            v-else
            :src="filePath"
            style="width: 100%; height: 400px"
            frameborder="0"
          ></iframe>
        </template>
        <template v-else-if="fileType === 'docx'">
          <div v-html="previewContent"></div>
          <!-- <iframe
            :src="previewContent ?? filePath"
            style="width: 100%; height: 400px"
            frameborder="0"
          ></iframe> -->
        </template>
        <template v-else-if="fileType === 'doc'">
          <p>
            Impossible de prévisualiser le fichier Word (.doc). Vous pouvez le
            télécharger ci-dessous :
          </p>
          <a
            :href="previewContent ?? filePath /*previewContent*/"
            download
            class="v-btn v-btn--outlined primary text-none"
          >
            Télécharger le fichier
          </a>
        </template>
        <template v-else>
          <p>Aucun aperçu disponible pour ce type de fichier.</p>
        </template>
      </v-card-text>
      <v-card-actions
        ><v-btn
          class="text-none"
          color="secondary"
          variant="flat"
          @click="toggleModal"
          >Fermer</v-btn
        ></v-card-actions
      >
    </v-card>
  </v-dialog>
  <result-modal-validation
    :text="showTextResultModifyModal"
    :open="showResultModifyModal"
    :type="showTypeResultModifyModal"
    @update:open="showResultModifyModal = $event"
  />
</template>

<script setup>
import * as mammoth from "mammoth";
import { useDisplay } from "vuetify";

const props = defineProps(["id"]);
const procedureId = computed(() => props.id);
const dialog = ref(false);
const procedureData = ref({});
const stepList = ref([]);
const loading = ref(false);
const selectedFile = ref(null);

const showTextResultModifyModal = ref(null);
const showTypeResultModifyModal = ref(null);
const showResultModifyModal = ref(false);

const handleFileChange = (file, key) => {
  if (file) {
    selectedFile.value = file;

    console.log("file : ", file);
    if(!newProcedureData.action) {
      newProcedureData.action = procedureData.value.step.steps[0].action;
    }
    newProcedureData.documents[key] = file;
    console.log("newProcedureData : ", newProcedureData);
    console.log("procedureData : ", procedureData.value);
  }

};

const open = ref(false);
const previewContent = ref(null);
var fileExtension;
const fileType = ref(null);

const toggleModal = () => {
  open.value = !open.value;
};

const generateFile = async (file) => {
  if (file instanceof File) {
    fileExtension = file.name.split(".").pop();
  }
  if (
    ["png", "webp", "jpeg", "jpg", "avi"].includes(fileExtension.toLowerCase())
  ) {
    fileType.value = "image";
  } else {
    fileType.value = fileExtension;
  }

  if (file instanceof File) {
    try {
      if (fileType.value == "image") {
        const reader = new FileReader();
        reader.onload = (e) => {
          previewContent.value = e.target.result;
        };
        reader.readAsDataURL(file);
      } else if (fileType.value === "pdf") {
        previewContent.value = URL.createObjectURL(file);
      } else if (fileType.value === "txt") {
        const reader = new FileReader();
        reader.onload = (e) => {
          previewContent.value = e.target.result;
        };
        reader.readAsText(file);
      } else if (fileType.value == "docx") {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const arrayBuffer = e.target.result;
          const result = await mammoth.convertToHtml({ arrayBuffer });
          previewContent.value = result.value;
        };
        reader.readAsArrayBuffer(file);
      } else if (fileType.value == "doc") {
        previewContent.value = URL.createObjectURL(file);
      } else {
        previewContent.value = "Type de fichier non supporté.";
      }
      console.log("previewContent : ", previewContent.value);
    } catch (error) {
      console.error("Erreur lors de la prévisualisation du fichier :", error);
      previewContent.value = "Erreur lors du traitement du fichier.";
    }
  }

  console.log("fileExtension : ", fileExtension);
  console.log("fileType : ", fileType.value);
};

const loadProcedure = async () => {
  try {
    const fetchedProcedures = await $fetch(API_SERVER_URL + `/folders`);
    procedureData.value = fetchedProcedures.find(
      (proc) => proc.id == procedureId.value
    );

    if (procedureData.value) {
      stepList.value = procedureData.value?.step?.steps || [];
      console.log("Procédure au chargement : ", stepList.value);
    } else {
      console.warn("Aucune procédure trouvée pour cet ID :", procedureId.value);
      stepList.value = [];
    }
  } catch (err) {
    console.error("Erreur lors du chargement des procédures : ", err);
  }
};

watchEffect(() => {
  if (props.id) {
    loadProcedure();
  }
});

const newProcedureData = reactive({
  action: null,//computed(() => procedureData.value?.step?.steps?.[0]?.action || ""),
  documents: {},
});

const closeModal = () => {
  dialog.value = false;
  selectedFile.value = null;

  if (stepList.value.length > 0 && stepList.value[0]?.documents) {
    Object.keys(stepList.value[0].documents).forEach((key) => {
      stepList.value[0].documents[key].path = null;
    });
  }
};

const isSaveDisabled = computed(() => {
  if (!stepList.value.length || !stepList.value[0]?.documents) return true;

  return Object.values(stepList.value[0].documents).every((doc) => !doc.path);
});

const updateProcedure = async (val) => {
  loading.value = true;

  console.log("Procédure à l'enregistrement : ", val);

  try {
    var dataToSend = new FormData();

    dataToSend.append("action", val.action);
    dataToSend.append("folderNum", val.folderNum);
    dataToSend.append("procedureType", val.procedureType);
    dataToSend.append("contact", val.contact);


    if (val.documents && Object.keys(val.documents).length > 0) {
      for (const fileKey of Object.keys(val.documents)) {
        dataToSend.append(fileKey, val.documents[fileKey]);
      }
    }

    const resultOfProcedureUpdate = await $fetch(
      API_SERVER_URL + `/steps/update/${val.id}`,
      {
        method: "PATCH",
        body: dataToSend,
        credentials: "include",
      }
    );

    if (resultOfProcedureUpdate.status) {
      if (val.status) {
        loading.value = false;
        if (val.status == "Suspendu") {
          showTextResultModifyModal.value = "La procédure a été suspendue.";
          showTypeResultModifyModal.value = "info";
          showResultModifyModal.value = true;
        } else if (val.status == "Arrêté") {
          showTextResultModifyModal.value = "La procédure a été arrêtée.";
          showTypeResultModifyModal.value = "info";
          showResultModifyModal.value = true;
        } else if (val.status == "En cours") {
          showTextResultModifyModal.value =
            "La procédure est de nouveau en cours.";
          showTypeResultModifyModal.value = "info";
          showResultModifyModal.value = true;
        } else {
          console.log("erreur ");
        }
      } else {
        loading.value = false;
        showTextResultModifyModal.value = "Procédure modifiée avec succès !";
        showTypeResultModifyModal.value = "success";
        showResultModifyModal.value = true;
      }

      loadProcedure();
      closeModal();
    }
    console.log("back response : ", resultOfProcedureUpdate);
  } catch (err) {
    console.error("Erreur lors de la mise à jour de la procédure : ", err);
  }
};

const display = useDisplay();
const dialogWidth = computed(() => {
  if (display.xs.value) return "90vw"; // Écran très petit
  if (display.sm.value) return "70vw"; // Petit écran
  if (display.md.value) return "80vw"; // Écran moyen
  return "40vw"; // Grand écran
});
</script>

<style scoped>
.title {
  font-size: 1rem;
  font-weight: bold;
  margin-left: 0.5rem;
}

.nameDocument {
  color: #ad1919;
  font-style: italic;
}

.dialog-content {
  margin: 0.8rem;
  flex: 1;
  overflow-y: auto; /* Ajoute un défilement si nécessaire */
}

.scrollable-content {
  height: 28rem;
  max-height: 30rem;
  overflow-y: auto;
}
</style>
