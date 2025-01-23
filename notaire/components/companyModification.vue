<script setup>
  const listOfStep = [{text: "Certificat de localisation", status: "done", inputName: "certifLocal"}, {text: "Attestation de situation fiscale", status: "done", inputName: "certifLocal"}, {text: "Etat foncier", status: "done", inputName: "certifLocal"}, {text: "Titre de propriété", status: "done", inputName: "certifLocal"}];
  
  const documentToSupply = [
    {text: "CNI du dirigeant", status: "", inputName: "cni"},
    {text: "RCCM de la société", status: "", inputName: "rccm"},
    {text: "Statut", status: "", inputName: "status"},
    {text: "DNSV", status: "", inputName: "dnsv"}
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
      :number="1" 
      title="Fourniture de pièces" 
      status="current" 
      icon="document-file.png" 
      date="17/01/2025" 
      :listOfSubStep="documentToSupply" 
      :first="true"
    />
    <step-box 
      :number="2" 
      title="Redaction des status" 
      status="not started" 
      icon="policy.png" 
      date="17/01/2025" 
      :listOfSubStep="[{text: 'Rédaction des actes modificatifs', status: '', inputName: 'redaction'}]" 
    />
    <step-box 
      :number="3" 
      title="Règlement des frais" 
      status="not started" 
      icon="debit-card2.png" 
      date="17/01/2025" 
      :listOfSubStep="[{text: 'Règlement des frais', status: '', inputName: 'reglement'}]" 
    />
    <step-box 
      :number="4" 
      title="Signature des actes" 
      status="not started" 
      icon="autograph.png" 
      date="17/01/2025" 
      :listOfSubStep="[{text: 'actes modificatifs signés à la DGI', status: '', inputName: 'signature'}]" 
    />
    <step-box 
      :number="5" 
      title="Dépôt de l'acte signé" 
      status="not started" 
      icon="document.png" 
      date="17/01/2025" 
      :listOfSubStep="[{text: 'Dépôt au des actes modificatifs signés à la DGI', status: '', inputName: 'depot'}]" 
    />
    <step-box 
      :number="6" 
      title="Livrables" 
      status="not started" 
      icon="letter.png" 
      date="17/01/2025" 
      :listOfSubStep="[{text: 'actes', status: '', inputName: 'acte'}]" 
    />
  </div>
</template>