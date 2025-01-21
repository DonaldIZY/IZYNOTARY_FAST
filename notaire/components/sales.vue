<script setup>
  const listOfStep = [{text: "Certificat de localisation", status: "done", inputName: "certifLocal"}, {text: "Attestation de situation fiscale", status: "done", inputName: "certifLocal"}, {text: "Etat foncier", status: "done", inputName: "certifLocal"}, {text: "Titre de propriété", status: "done", inputName: "certifLocal"}];
  const listOfCanceledStep = [{text: "Certificat de localisation", status: "none", inputName: "certifLocal"}, {text: "Attestation de situation fiscale", status: "done", inputName: "certifLocal"}, {text: "Etat foncier", status: "done", inputName: "certifLocal"}, {text: "Titre de propriété", status: "done", inputName: "certifLocal"}];
  const documentToSupply = [
    {text: "CNI du vendeur", status: "", inputName: ""},
    {text: "Extrait d’acte de naissance ou extrait d’acte de mariage si le vendeur est marié", status: "", inputName: ""},
    {text: "CNI du conjoint", status: "", inputName: ""},
    {text: "Titre de Propriété ", status: "", inputName: ""},
    {text: "État Foncier", status: "", inputName: ""},
    {text: "Certificat de Localisation", status: "", inputName: ""}
  ];
  const documentForClient = [
    {text: "Acte de vente", status: "", inputName: ""},
    {text: "CMPF", status: "", inputName: ""}
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
      title="Rédaction de l'acte de vente" 
      status="not started" 
      icon="signature1.png" 
      date="17/01/2025" 
      :listOfSubStep="[{text: 'Rédaction de l\'acte de vente', status: '', inputName: 'redaction'}]" 
    />
    <step-box 
      number="3" 
      title="Règlement des frais" 
      status="not started" 
      icon="debit-card2.png" 
      date="17/01/2025" 
      :listOfSubStep="listOfCanceledStep" 
    />
    <step-box 
      number="4" 
      title="Signature de l'acte de vente (par l'acquéreur et le vendeur)" 
      status="not started" 
      icon="autograph.png" 
      date="17/01/2025" 
      :listOfSubStep="[{text: 'Signature de l\'acte de vente', status: '', inputName: 'redaction'}]" 
    />
    <step-box 
      number="5" 
      title="Dépôt de l'acte signé" 
      status="not started" 
      icon="document.png" 
      date="17/01/2025" 
      :listOfSubStep="listOfStep" 
    />
    <step-box 
      number="6" 
      title="Livrables" 
      status="not started" 
      icon="letter.png" 
      date="17/01/2025" 
      :listOfSubStep="listOfStep" 
    />
  </div>
</template>