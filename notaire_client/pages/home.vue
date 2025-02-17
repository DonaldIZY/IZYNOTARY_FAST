<template>
  <div class="justify-center ga-4">
    <h1>Bienvenue sur votre espace client</h1>
  </div>
  <div class="w-full d-flex justify-center">
    <div class="w-75 ma-2 center">
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card class="mx-auto rounded-lg hover-card" to="/selling">
            <v-img
              src="~/assets/img/vente.png"
              class="mb-2 mt-2 mx-2 rounded-lg"
              cover
              alt="Procédure de vente"
            ></v-img>
            <v-card-title class="my-1 text-center titleCardText">
              Vente
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-card
            class="mx-auto rounded-lg hover-card"
            :to="'/companyFormation'"
          @click="setSelectedData(companyFormationData)"
          >
            <v-img
              src="~/assets/img/constSoc.png"
              class="mb-2 mt-2 mx-2 rounded-lg"
              cover
              alt="Procédure de constitution de société"
            ></v-img>
            <v-card-title class="my-1 text-center titleCardText">
              Constitution de société
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-card
            class="mx-auto rounded-lg hover-card"
            to="/modificationCompany"
          >
            <v-img
              src="~/assets/img/modifSoc.png"
              class="mb-2 mt-2 mx-2 rounded-lg"
              cover
              alt="Procédure de modification de société"
            ></v-img>
            <v-card-title class="my-1 text-center titleCardText">
              Modification de société
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-card
            class="mx-auto rounded-lg hover-card"
            to="/transferOfMovableProperty"
          >
            <v-img
              src="~/assets/img/succBienMob.png"
              class="mb-2 mt-2 mx-2 rounded-lg"
              cover
              alt="Procédure de succession de biens mobiliers"
            ></v-img>
            <v-card-title class="my-1 text-center titleCardText">
              Succession de biens mobiliers
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-card
            class="mx-auto rounded-lg hover-card"
            to="/transferOfRealEstate"
          >
            <v-img
              src="~/assets/img/succBienImmob.png"
              class="mb-2 mt-2 mx-2 rounded-lg"
              cover
              alt="Procédures de succession de biens immobiliers"
            ></v-img>
            <v-card-title class="my-1 text-center titleCardText">
              Succession de biens immobiliers
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-card class="mx-auto rounded-lg hover-card" to="" disabled>
            <v-img
              src="~/assets/img/credit.png"
              class="mb-2 mt-2 mx-2 rounded-lg"
              cover
              alt="Procédure de crédit"
            ></v-img>
            <v-card-title class="my-1 text-center titleCardText">
              Crédit
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { useCardStore } from '~/stores/cardStore';

const companyFormationData = ref([]);
const companyModificationData = ref([]);
const movablePropertyData = ref([]);
const realEstateData = ref([]);
const sellingData = ref([]);

const store = useCardStore();

const setSelectedData = (data) => {
  store.setSelectedData(data);
};

onMounted(async () => {
  try {
    const customerFetch = await $fetch(API_SERVER_URL + `/customers/2`);

    console.log("datas : ", customerFetch);

    companyFormationData.value = customerFetch.folders.filter(
      (procedure) => procedure.procedureType == "Constitution de société"
    );
    companyModificationData.value = customerFetch.folders.filter(
      (procedure) => procedure.procedureType == "Modification de société"
    );
    movablePropertyData.value = customerFetch.folders.filter(
      (procedure) => procedure.procedureType == "Succession de biens mobiliers"
    );
    realEstateData.value = customerFetch.folders.filter(
      (procedure) =>
        procedure.procedureType == "Succession de biens immobiliers"
    );
    sellingData.value = customerFetch.folders.filter(
      (procedure) => procedure.procedureType == "Vente"
    );

    console.log("companyFormationData : ", companyFormationData);
    console.log("companyModificationData : ", companyModificationData);
    console.log("movablePropertyData : ", movablePropertyData);
    console.log("realEstateData : ", realEstateData);
    console.log("sellingData : ", sellingData);
  } catch (err) {
    //error.value = err.message;
    console.error(err);
  }
});
</script>

<style scoped>
.ga-4 {
  text-align: center;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
}

.titleCardText {
  font-size: 0.95rem;
}

.hover-card {
  transition: transform 0.25s ease-in-out;
}

.hover-card:hover {
  background-color: #ad1919;
  color: #fff;
  transform: scale(1.05); /* Agrandissement au hover */
  cursor: pointer;
}
</style>
