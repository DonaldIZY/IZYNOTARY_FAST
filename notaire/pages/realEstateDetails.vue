<script setup>
  const selectedProcedureStore = useSelectedDataStore();
  const stepList = ref([]);
  const procedureNum = ref("Procédure de succession de biens immobiliers");

let procedureID = selectedProcedureStore.getProcedureId;

const loadProcedures = async () => {
  try {
    const fetchedProcedures = await $fetch(
      `http://serverizynotary.izydr.net/folders`
    );

    console.log("fetchedProcedures : ", fetchedProcedures);

      let procedureData = fetchedProcedures.find(proc => proc.id == procedureID);
      procedureNum.value = procedureNum.value + " : N°" + procedureData.folderNum;
      stepList.value = procedureData.step.steps;
      console.log("step list : ", stepList.value);
    } catch (err) {
      console.error("Erreur lors du chargement des procédures : ", err);
    }
  };

loadProcedures();
</script>

<style scoped></style>

<template>
  <div class="ma-4" >
      <back-button v-if="stepList.length > 0" :title="procedureNum" goBackTo="/proceduresManagement"/>
  </div>
  <real-estate v-if="stepList.length > 0" :stepList="stepList" />
</template>
