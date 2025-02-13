// Définition de la fonction pour récupérer l'image
export const getStatusIcon = (status) => {
    switch (status) {
      case "Terminé":
        return "mdi-check-bold"; // Image pour "completed"
      case "Suspendu":
        return "mdi-alert-outline"; // Image pour "pending"
      case "Arrêté":
        return "mdi-close-thick"; // Image pour "rejected"
      case "En cours":
        return "mdi-sync"; // Image pour "in_progress"
      default:
        return "mdi-minus-thick"; // Image par défaut
    }
  };

  export const getStatusColorIcon = (status) => {
    switch (status) {
      case "Terminé":
        return "#63AD19";
      case "Suspendu":
        return "#000000";
      case "Arrêté":
        return "#AD1919";
      case "En cours":
        return "#FFC300";
      default:
        return "grey";
    }
  }