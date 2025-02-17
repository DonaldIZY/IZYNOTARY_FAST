import { defineStore } from 'pinia';

export const useCardStore = defineStore('cardStore', {
  state: () => ({
    selectedData: null, // Stocke les données sélectionnées
  }),
  actions: {
    setSelectedData(data : any) {
      this.selectedData = data;
    },
  },
});
