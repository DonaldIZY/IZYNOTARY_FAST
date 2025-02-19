export const validationRules = {
    required: [v => !!v || "Ce champ est requis"],
    email: [
      v => !!v || "Ce champ est requis",
      v => /^(?!.*\.\.)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(v) || "Email invalide"
    ],
    phone: [
      v => !!v || "Ce champ est requis",
      v => /^\d{10}$/.test(v) || "Le numéro doit contenir 10 chiffres",
      v => /^(07|01|05)\d{8}$/.test(v) || "Le numéro doit commencer par 01,05,07"
    ],
    indicNumber: [
      v => !!v || "Ce champ est requis",
      v => /^[A-Za-z0-9 ]{1,15}$/.test(v) || "Le numéro doit contenir 15 caractères au maximum",
    ],
    requiredFile: (v) => (!!v && v.length > 0) || "Un fichier est requis",
  };
