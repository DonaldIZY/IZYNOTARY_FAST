function procedureNumGenerator(type, totalProcedures) {
  const types = {
    "Vente": "VT",
    "Constitution de soci\xE9t\xE9": "CS",
    "Modification de soci\xE9t\xE9": "MS",
    "Succession de biens mobiliers": "SM",
    "Succession de biens immobiliers": "SI"
  };
  if (!types[type]) {
    throw new Error("Type de proc\xE9dure invalide.");
  }
  const date = /* @__PURE__ */ new Date();
  const dateStr = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}`;
  const numero = (totalProcedures + 1).toString().padStart(4, "0");
  return `${types[type]}${dateStr}-${numero}`;
}

export { procedureNumGenerator as p };
//# sourceMappingURL=procedureNumGenerator-C-saErJR.mjs.map
