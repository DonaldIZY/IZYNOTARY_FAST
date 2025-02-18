import { defineStore } from "pinia";

export const useSelectedDataStore = defineStore("selectedData", {
  state: () => ({
    procedureId: <null | number>null,
  }),

  getters: {
    getProcedureId: (state) => state.procedureId,
  },

  actions: {
    defineProcedureId(val: number) {
      this.procedureId = val;
    },
  },
  persist: true, // Permet de garder les données après un refresh
});
