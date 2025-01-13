<template>
  <div class="d-flex align-center ga-10">
    <!-- Input de fichier -->
    <v-file-input
      :label="label"
      variant="outlined"
      hide-details
      v-model="internalValue"
      accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.txt"
      @change="onFileChange"
    ></v-file-input>

    <!-- Bouton pour afficher le modal -->
    <v-btn
      color="primary"
      @click="toggleModal"
      class="text-none"
      :disabled="!internalValue"
    >
      Aperçu
    </v-btn>

    <!-- Dialog pour prévisualisation -->
    <v-dialog v-model="open" width="50%" class="ma-4">
      <v-card>
        <v-card-title>{{ label }}</v-card-title>
        <v-card-text>
          <!-- Prévisualisation pour différents types de fichiers -->
          <template v-if="fileType === 'image'">
            <img :src="previewContent" alt="Prévisualisation" style="max-width: 100%;" />
          </template>
          <template v-else-if="fileType === 'pdf'">
            <iframe :src="previewContent" style="width: 100%; height: 400px;" frameborder="0"></iframe>
          </template>
          <template v-else-if="fileType === 'text'">
            <pre style="white-space: pre-wrap; max-height: 400px; overflow: auto;">{{ previewContent }}</pre>
          </template>
          <template v-else-if="fileType === 'docx'">
            <div v-html="previewContent"></div>
          </template>
          <template v-else-if="fileType === 'doc'">
            <p>Impossible de prévisualiser le fichier Word (.doc). Vous pouvez le télécharger ci-dessous :</p>
            <a :href="previewContent" download class="v-btn v-btn--outlined primary text-none">
              Télécharger le fichier
            </a>
          </template>
          <template v-else>
            <p>Aucun aperçu disponible pour ce type de fichier.</p>
          </template>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import mammoth from 'mammoth'; // Assurez-vous d'avoir installé mammoth.js : `npm install mammoth`

const props = defineProps({
  modelValue: {
    type: File, // ou [File, null] si vous voulez autoriser null
    default: null,
  },
  label: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const open = ref(false);
const internalValue = ref(props.modelValue); // Valeur interne pour synchroniser avec v-model
const previewContent = ref(null); // Contenu pour la prévisualisation
const fileType = ref(null); // Type de fichier détecté

// Surveiller les changements de la prop modelValue
watch(() => props.modelValue, (newValue) => {
  internalValue.value = newValue;
});

// Surveiller les changements de la valeur interne et émettre l'événement
watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue);
});

// Fonction pour ouvrir/fermer le modal
const toggleModal = () => {
  open.value = !open.value;
};

// Fonction pour gérer les fichiers
const onFileChange = () => {
  // Nettoyer les données précédentes
  if (previewContent.value && fileType.value === 'pdf') {
    URL.revokeObjectURL(previewContent.value); // Révoquer l'URL blob précédente
  }
  previewContent.value = null;
  fileType.value = null;

  if (internalValue.value) {
    const file = internalValue.value;

    // Détecter le type de fichier
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (['jpg', 'jpeg', 'png'].includes(fileExtension)) {
      fileType.value = 'image';
      const reader = new FileReader();
      reader.onload = (e) => {
        previewContent.value = e.target.result;
      };
      reader.readAsDataURL(file);
    } else if (fileExtension === 'pdf') {
      fileType.value = 'pdf';
      previewContent.value = URL.createObjectURL(file);
    } else if (fileExtension === 'txt') {
      fileType.value = 'text';
      const reader = new FileReader();
      reader.onload = (e) => {
        previewContent.value = e.target.result;
      };
      reader.readAsText(file);
    } else if (fileExtension === 'docx') {
      fileType.value = 'docx';
      const reader = new FileReader();
      reader.onload = async (e) => {
        const arrayBuffer = e.target.result;
        try {
          const result = await mammoth.convertToHtml({ arrayBuffer });
          previewContent.value = result.value; // Contenu HTML converti
        } catch (error) {
          console.error('Erreur lors de la lecture du fichier Word :', error);
          previewContent.value = 'Impossible de lire ce fichier Word.';
        }
      };
      reader.readAsArrayBuffer(file); // Lire le fichier en tant que buffer
    } else if (fileExtension === 'doc') {
      fileType.value = 'doc';
      previewContent.value = URL.createObjectURL(file); // Fournit un lien de téléchargement
    } else {
      fileType.value = null;
      previewContent.value = null;
    }
  }
};
</script>
