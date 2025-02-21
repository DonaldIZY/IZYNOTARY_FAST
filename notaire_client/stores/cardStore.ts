import { defineStore } from "pinia";

export const useCardStore = defineStore("cardStore", {
  state: () => ({
    selectedData: [], // Stocke les données sélectionnées
  }),
  actions: {
    setSelectedData(data: any) {
      this.selectedData = data;
    },
  },
  persist: true, // Permet de garder les données après un refresh
});
