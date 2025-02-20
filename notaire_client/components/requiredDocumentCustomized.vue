<template>
  <div class="ga-4">
    <!-- Input de fichier -->
    <!-- <v-file-input
      :label="label"
      variant="outlined"
      hide-details
      v-model="file"
      accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.txt"
      @change="onFileChange"
      density="compact"
    ></v-file-input> -->

    <!-- Bouton pour afficher le modal -->
    <v-btn
      color="primary"
      @click="
        () => {
          toggleModal();
          generateFile();
        }
      "
      class="text-none"
      variant="tonal"
      :disabled="false /*!file*/"
    >
      Aperçu
    </v-btn>

    <!-- Dialog pour prévisualisation -->
    <v-dialog v-model="open" :width="dialogWidth" class="ma-4">
      <v-card>
        <v-card-title>
          <v-icon size="small">mdi-file-document-outline</v-icon>
          <span class="title"
            >Apercu du document -
            <span class="nameDocument">{{ label }}</span></span
          >
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
            <!-- <iframe
              :src="previewContent ?? filePath"
              style="width: 100%; height: 400px; border: 3px solid red"
              frameborder="0"
            ></iframe> -->
            <v-btn variant="tonal">
              <a
                :href="previewContent ?? filePath /*previewContent*/"
                download
                target="_blank"
                class="v-btn v-btn--outlined primary text-none"
              >
                Cliquer pour voir le fichier
              </a>
            </v-btn>
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
            <!-- <div v-html="previewContent"></div> -->
            <iframe
              :src="previewContent ?? filePath"
              style="width: 100%; height: 400px"
              frameborder="0"
            ></iframe>
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
  </div>
</template>

<script setup>
import * as mammoth from "mammoth";
import { useDisplay } from "vuetify";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    // required: true,
  },
  receivedFile: {
    type: File,
  },
});

const emit = defineEmits(["update:file"]);

const open = ref(false);
// const file = ref(null);
const previewContent = ref(null);
var fileExtension;
const fileType = ref(null);

const toggleModal = () => {
  open.value = !open.value;
};

const generateFile = async () => {
  console.log("filePath : ", props.filePath);

  console.log("receivedFile : ", props.receivedFile);

  if (props.receivedFile instanceof File) {
    fileExtension = props.receivedFile.name.split(".")[1];
  } else {
    fileExtension = props.filePath.split("/").pop().split(".")[1];
  }

  if (["png", "webp", "jpeg", "jpg", "avi"].includes(fileExtension)) {
    fileType.value = "image";
  } else {
    fileType.value = fileExtension;
  }

  if (props.receivedFile instanceof File) {
    try {
      if (fileType.value == "image") {
        const reader = new FileReader();
        reader.onload = (e) => {
          previewContent.value = e.target.result;
        };
        reader.readAsDataURL(props.receivedFile);
      } else if (fileType.value === "pdf") {
        previewContent.value = URL.createObjectURL(props.receivedFile);
      } else if (fileType.value === "txt") {
        const reader = new FileReader();
        reader.onload = (e) => {
          previewContent.value = e.target.result;
        };
        reader.readAsText(props.receivedFile);
      } else if (fileType.value == "docx") {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const arrayBuffer = e.target.result;
          const result = await mammoth.convertToHtml({ arrayBuffer });
          previewContent.value = result.value;
        };
        reader.readAsArrayBuffer(props.receivedFile);
      } else if (fileType.value == "doc") {
        previewContent.value = URL.createObjectURL(props.receivedFile);
      } else {
        previewContent.value = "Type de fichier non supporté.";
      }
      console.log("previewContent : ", previewContent.value);
      // emit("update:file", props.receivedFile);
    } catch (error) {
      console.error("Erreur lors de la prévisualisation du fichier :", error);
      previewContent.value = "Erreur lors du traitement du fichier.";
    }
  }

  // if(fileExtension == "pdf") {

  // }else if(["docx", "doc"].includes(fileExtension)) {
  // // reader.onload = async (e) => {
  // //   const arrayBuffer = e.target.result;
  // //   const result = await mammoth.convertToHtml({ arrayBuffer });
  // //   previewContent.value = result.value;
  // // };
  // }else if(fileExtension == "txt") {
  //   let result = await fetch(props.filePath);
  //   previewContent.value = await result.text();
  // }

  console.log("fileExtension : ", fileExtension);
  console.log("fileType : ", fileType.value);

  /*let result = await fetch(props.filePath);
  let resultToBlob = await result.blob();

  let fileName = props.filePath.split("/").pop().split(".")[0];
  file.value = new File([resultToBlob], fileName, {type: resultToBlob.type});
  const reader = new FileReader();*/
  // fileType.value = resultToBlob.type.split("/")[0];

  // previewContent.value = new File([resultToBlob], fileName, {type: resultToBlob.type});

  // console.log("resultToBlob : ", resultToBlob);
  // console.log("previewContent : ", previewContent.value);
};

const onFileChange = async () => {
  if (previewContent.value && fileType.value === "pdf") {
    URL.revokeObjectURL(previewContent.value);
  }
  previewContent.value = null;
  fileType.value = null;

  if (file.value) {
    const selectFile = file.value;
    const fileExtension = selectFile.name.split(".").pop().toLowerCase();

    try {
      if (["jpg", "jpeg", "png"].includes(fileExtension)) {
        fileType.value = "image";
        const reader = new FileReader();
        reader.onload = (e) => {
          previewContent.value = e.target.result;
        };
        reader.readAsDataURL(selectFile);
      } else if (fileExtension === "pdf") {
        fileType.value = "pdf";
        previewContent.value = URL.createObjectURL(selectFile);
      } else if (fileExtension === "txt") {
        fileType.value = "text";
        const reader = new FileReader();
        reader.onload = (e) => {
          previewContent.value = e.target.result;
        };
        reader.readAsText(selectFile);
      } else if (fileExtension === "docx") {
        fileType.value = "docx";
        const reader = new FileReader();
        reader.onload = async (e) => {
          const arrayBuffer = e.target.result;
          const result = await mammoth.convertToHtml({ arrayBuffer });
          previewContent.value = result.value;
        };
        reader.readAsArrayBuffer(selectFile);
      } else if (fileExtension === "doc") {
        fileType.value = "doc";
        previewContent.value = URL.createObjectURL(selectFile);
      } else {
        fileType.value = null;
        previewContent.value = "Type de fichier non supporté.";
      }

      emit("update:file", selectFile);
    } catch (error) {
      console.error("Erreur lors de la prévisualisation du fichier :", error);
      previewContent.value = "Erreur lors du traitement du fichier.";
    }

    // emit("update:file", file.value);
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

<style>
.title {
  font-size: 1rem;
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
</style>
