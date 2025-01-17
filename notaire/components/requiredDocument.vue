<template>
  <div class="d-flex align-center ga-10">
    <!-- Input de fichier -->
    <v-file-input
      :label="label"
      variant="outlined"
      hide-details
      v-model="file"
      accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.txt"
      @change="onFileChange"
    ></v-file-input>

    <!-- Bouton pour afficher le modal -->
    <v-btn
      color="primary"
      @click="toggleModal"
      class="text-none"
      :disabled="!file"
    >
      Aperçu
    </v-btn>

    <!-- Dialog pour prévisualisation -->
    <v-dialog
      v-model="open"
      width="50%"
      class="ma-4"
    >
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

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
  });

  const emit = defineEmits(['update:file']);

  const open = ref(false);
  const file = ref(null);
  const previewContent = ref(null);
  const fileType = ref(null);

  const toggleModal = () => {
    open.value = !open.value;
  };

  const onFileChange = async () => {
    if (previewContent.value && fileType.value === 'pdf') {
      URL.revokeObjectURL(previewContent.value);
    }
    previewContent.value = null;
    fileType.value = null;

    if (file.value) {
      const selectFile = file.value;
      const fileExtension = selectFile.name.split('.').pop().toLowerCase();

      try {
        if (['jpg', 'jpeg', 'png'].includes(fileExtension)) {
          fileType.value = 'image';
          const reader = new FileReader();
          reader.onload = (e) => {
            previewContent.value = e.target.result;
          };
          reader.readAsDataURL(selectFile);
        } else if (fileExtension === 'pdf') {
          fileType.value = 'pdf';
          previewContent.value = URL.createObjectURL(file);
        } else if (fileExtension === 'txt') {
          fileType.value = 'text';
          const reader = new FileReader();
          reader.onload = (e) => {
            previewContent.value = e.target.result;
          };
          reader.readAsText(selectFile);
        } else if (fileExtension === 'docx') {
          fileType.value = 'docx';
          const reader = new FileReader();
          reader.onload = async (e) => {
            const arrayBuffer = e.target.result;
            const result = await mammoth.convertToHtml({ arrayBuffer });
            previewContent.value = result.value;
          };
          reader.readAsArrayBuffer(selectFile);
        } else if (fileExtension === 'doc') {
          fileType.value = 'doc';
          previewContent.value = URL.createObjectURL(selectFile);
        } else {
          fileType.value = null;
          previewContent.value = 'Type de fichier non supporté.';
        }

        emit('update:file', selectFile);
      } catch (error) {
        console.error('Erreur lors de la prévisualisation du fichier :', error);
        previewContent.value = 'Erreur lors du traitement du fichier.';
      }

      emit('update:file', file.value)
    
    }
  };
</script>
