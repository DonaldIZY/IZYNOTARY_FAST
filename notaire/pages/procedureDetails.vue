<script setup>
  const listOfStep = [{text: "Certificat de localisation", status: "done", inputName: "certifLocal"}, {text: "Attestation de situation fiscale", status: "done", inputName: "certifLocal"}, {text: "Etat foncier", status: "done", inputName: "certifLocal"}, {text: "Titre de propriété", status: "done", inputName: "certifLocal"}];
  const listOfCanceledStep = [{text: "Certificat de localisation", status: "none", inputName: "certifLocal"}, {text: "Attestation de situation fiscale", status: "done", inputName: "certifLocal"}, {text: "Etat foncier", status: "done", inputName: "certifLocal"}, {text: "Titre de propriété", status: "done", inputName: "certifLocal"}];
</script>


<style scoped>
  .perso {
    /* width: 100%; */
    height: 88%;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem; 
  }

</style>


<template>
  <div class="ma-4" >
      <back-button title="Nom de la procédure" goBackTo="/home"/>
  </div>
  
  <div class="ma-4 perso">
    <!-- <div class="stepBox">
       <step-number stepNumber="1" stepBackgroundColor="green" stepTextColor="white" />

      <div class="stepText" >
        <step-icon stepBackgroundColor="green" image-path="document-file.png" />

        <h2>Fourniture des pièces</h2>

        <div class="subStepBox">
          <sub-step 
            v-for="val in listOfStep" 
            :text="val.text" 
            :inputName="val.inputName" 
            :status="val.status" 
          />
        </div>
        <div class="triangle"></div>
      </div>
      <step-progress-icon imagePath="check.png" stepBackgroundColor="green" />
      <step-date date="16/01/2025" borderColor="green" />
    </div> -->
    <step-box 
      number="1" 
      title="titre 1" 
      status="done" 
      icon="signature.png" 
      progressIcon="check-list.png" 
      date="17/01/2025" 
      :listOfSubStep="listOfStep" 
    />
    <step-box 
      number="2" 
      title="titre 2" 
      status="current" 
      icon="document-file.png" 
      progressIcon="check-list.png" 
      date="17/01/2025" 
      :listOfSubStep="listOfCanceledStep" 
    />
    <step-box 
      number="3" 
      title="titre 3" 
      status="suspended" 
      icon="salary.png" 
      progressIcon="check-list.png" 
      date="17/01/2025" 
      :listOfSubStep="listOfStep" 
    />
    <step-box 
      number="4" 
      title="titre 4" 
      status="canceled" 
      icon="document2.png" 
      progressIcon="check-list.png" 
      date="17/01/2025" 
      :listOfSubStep="listOfStep" 
    />
    <step-box 
      number="5" 
      title="titre 5" 
      status="not started" 
      icon="document.png" 
      progressIcon="check-list.png" 
      date="17/01/2025" 
      :listOfSubStep="listOfStep" 
    />
    <step-box 
      number="6" 
      title="titre 6" 
      status="not started" 
      icon="document.png" 
      progressIcon="check-list.png" 
      date="17/01/2025" 
      :listOfSubStep="listOfStep" 
    />

  </div>
</template>