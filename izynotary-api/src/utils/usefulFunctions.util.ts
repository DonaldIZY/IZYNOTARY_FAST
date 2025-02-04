export const translateFieldNameToFrench = function(val: string) {
  if(["customerCNI", "customerCNI"].includes(val)) {
    return "CNI du client";
  }else if(val == "criminalRecord") {
    return "Casier judiciaire";
  }else if(val == "lease") {
    return "Bail";
  }else if(val == "sketchOfGeoLocation") {
    return "Croquis de la situation géographique";
  }else if(val == "formForCompanyFormation") {
    return "Fiche à renseigner de la société à consulter";
  }else if(val == "capitalToBeReleased") {
    return "Capital à libérer";
  }else if(val == "writingTheStatus") {
    return "Rédaction des status";
  }else if(val == "paymentOfFees") {
    return "Règlement des frais";
  }else if(val == "documentsSigned") {
    return "Actes signés";
  }else if(val == "depositOfDocumentsSigned") {
    return "Dépôt des Actes";
  }else if(val == "acts") {
    return "Actes";
  }else if(val == "RCCM") {
    return "RCCM";
  }else if(val == "status") {
    return "Statut";
  }else if(val == "DNSV") {
    return "DNSV";
  }else if(val == "birthCertificate") {
    return "Extrait d'acte de naissance";
  }else if(val == "deedOfSale") {
    return "Acte de vente";
  }else if(val == "feeSettlement") {
    return "Règlements des frais";
  }else if(["declarationOfTheEstate", "statementOfTheSuccession"].includes(val)) {
    return "Déclaration de la succession auprès de la DGI";
  }else if(val == "depositOfRequiredDocuments") {
    return "Dépôt des pièces requises par la banque";
  }else if(val == "statusOfRepayments") {
    return "État des reversements";
  }else if(val == "cniOfTheDonor") {
    return "CNI du donateur";
  }else if(val == "birthCertificateOfTheRightsHolders") {
    return "Extrait d'acte de naissance";
  }else if(val == "evaluationOfDifferentRealEstate") {
    return "Évaluation des différents biens immobiliers";
  }else if(val == "RealEstateAttestation") {
    return "Établissement de l'attestation immobilière";
  }else if(val == "depositOfRealEstateCertificate") {
    return "Dépôt de l'attestation immobilière auprès de la DGI";
  }else if(val == "statusOfRepayments") {
    return "État des reversements";
  }else{
    return val;
  }
}