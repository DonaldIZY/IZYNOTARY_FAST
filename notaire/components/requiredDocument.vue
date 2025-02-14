<template>
  <div class="d-flex align-center ga-2">
    <!-- Input de fichier -->
    <v-file-input
      :label="label"
      color="primary"
      variant="outlined"
      hide-details
      v-model="file"
      accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.txt"
      @change="onFileChange"
      prepend-icon=""
      :prepend-inner-icon="icon"
      density="compact"
    ></v-file-input>

    <!-- Bouton pour afficher le modal -->
    <v-btn
      color="primary"
      @click="toggleModal"
      class="text-none"
      variant="tonal"
      :disabled="!file"
    >
      Aperçu
    </v-btn>

    <!-- Dialog pour prévisualisation -->
    <v-dialog v-model="open" :width="dialogWidth" class="ma-4">
      <v-card>
        <v-card-title>
          <v-icon size="small">mdi-file-document-outline</v-icon>
          <span class="title"
            >Aperçu du document -
            <span class="nameDocument">{{ label }}</span></span
          >
        </v-card-title>
        <v-card-text class="dialog-content">
          <!-- Prévisualisation pour différents types de fichiers -->
          <template v-if="fileType === 'image'">
            <img
              :src="previewContent"
              alt="Prévisualisation"
              style="max-width: 100%"
            />
          </template>
          <template v-else-if="fileType === 'pdf'">
            <iframe
              :src="previewContent"
              style="width: 100%; height: 400px"
              frameborder="0"
            ></iframe>
          </template>
          <template v-else-if="fileType === 'text'">
            <pre
              style="white-space: pre-wrap; max-height: 400px; overflow: auto"
              >{{ previewContent }}</pre
            >
          </template>
          <template v-else-if="fileType === 'docx'">
            <div v-html="previewContent"></div>
          </template>
          <template v-else-if="fileType === 'doc'">
            <p>
              Impossible de prévisualiser le fichier Word (.doc). Vous pouvez le
              télécharger ci-dessous :
            </p>
            <a
              :href="previewContent"
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
  icon: {
    type: String,
    default: "mdi-paperclip",
  },
});

const emit = defineEmits(["update:file"]);

const open = ref(false);
const file = ref(null);
const previewContent = ref(null);
const fileType = ref(null);

const toggleModal = () => {
  open.value = !open.value;
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
