<script setup>
  const selectedProcedureStore = useSelectedDataStore();
  const stepList = ref([]);

  let procedureID = selectedProcedureStore.getProcedureId;

  const loadProcedures = async () => {
    try {
      const fetchedProcedures = await $fetch(
        `http://serverizynotary.izydr.net/folders`
      );

      console.log("fetchedProcedures : ", fetchedProcedures);

      stepList.value = fetchedProcedures.find(proc => proc.id == procedureID).step.steps;
      console.log("step list : ", stepList.value);
    } catch (err) {
      console.error("Erreur lors du chargement des procédures : ", err);
    }
  };

loadProcedures();
  
</script>


<style scoped>
 

</style>


<template>
  <div class="ma-4" >
      <back-button title="Procédure de succession de biens mobiliers" goBackTo="/proceduresManagement"/>
  </div>
  <personal-property v-if="stepList.length > 0" :stepList="stepList"/>
</template>