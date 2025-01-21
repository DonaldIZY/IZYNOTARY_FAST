<script setup>  
  const documentToSupply = [
    {text: "CNI du dirigeant", status: "", inputName: "cni"},
    {text: "Extrait d'acte de naissance", status: "", inputName: "rccm"}
  ];
  const documentForClient = [
    {text: "Acte de vente", status: "", inputName: "actedevente"},
    {text: "CMPF", status: "", inputName: "cmpf"}
  ];
</script>


<style scoped>
  .perso {
    width: 100%;
    height: 88%;
    padding: 0 2rem 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-x: auto;
    position: relative;
  }

</style>


<template>
  <div class="perso">
    
    <step-box 
      number="1" 
      title="Fourniture de pièces" 
      status="current" 
      icon="document-file.png" 
      date="17/01/2025" 
      :listOfSubStep="documentToSupply" 
      first={true}
    />
    <step-box 
      number="2" 
      title="Demande auprès de la banque" 
      status="not started" 
      icon="bank.png" 
      date="17/01/2025" 
      :listOfSubStep="[{text: 'Acte de vente', status: '', inputName: 'acte'}]" 
    />
    <step-box 
      number="3" 
      title="Elaboration de la lettre de succession" 
      status="not started" 
      icon="debit-card2.png" 
      date="17/01/2025" 
      :listOfSubStep="[{text: 'Règlement des frais', status: '', inputName: 'reglement'}]" 
    />
    <step-box 
      number="4" 
      title="Signature de la lettre de constitution" 
      status="not started" 
      icon="autograph.png" 
      date="17/01/2025" 
      :listOfSubStep="[{text: 'Déclaration de la succession auprès de la DGI', status: '', inputName: 'signature'}]" 
    />
    <step-box 
      number="5" 
      title="Dépôt auprès de la banque" 
      status="not started" 
      icon="document.png" 
      date="17/01/2025" 
      :listOfSubStep="[{text: 'Dépôt des pièces requises par la banque', status: '', inputName: 'depot'}]" 
    />
    <step-box 
      number="6" 
      title="Livrables" 
      status="not started" 
      icon="letter.png" 
      date="17/01/2025" 
      :listOfSubStep="[{text: 'État des reversements', status: '', inputName: 'acte'}]" 
    />
  </div>
</template>