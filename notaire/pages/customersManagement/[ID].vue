<template>
  <div class="ma-4">
    <back-button title="Détails du client" goBackTo="/customersManagement" />
  </div>

  <div class="ma-4 d-flex flex-column align-center ga-3" v-if="customer">
    <v-col cols="12">
      <v-sheet class="infoBox" elevation="4">
        <v-card class="card">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4" lg="3" sm="6">
                <v-text-field
                  v-model="customer.id"
                  color="primary"
                  label="N° Client"
                  variant="outlined"
                  density="compact"
                  hide-details
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" lg="3" sm="6">
                <v-text-field
                  v-model="customer.lastName"
                  color="primary"
                  label="Nom du client"
                  variant="outlined"
                  density="compact"
                  hide-details
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" lg="3" sm="6">
                <v-text-field
                  v-model="customer.firstName"
                  color="primary"
                  label="Prénoms du client"
                  variant="outlined"
                  density="compact"
                  hide-details
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" lg="3" sm="6">
                <v-text-field
                  v-model="customer.gender"
                  color="primary"
                  label="Sexe"
                  variant="outlined"
                  density="compact"
                  hide-details
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" lg="3" sm="6">
                <v-text-field
                  v-model="customer.birthDate"
                  :model-value="formatDateWithoutTime(customer.birthDate)"
                  color="primary"
                  label="Date de naissance"
                  variant="outlined"
                  density="compact"
                  hide-details
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" lg="3" sm="6">
                <v-text-field
                  v-model="customer.identificationNumber"
                  color="primary"
                  label="NNI"
                  variant="outlined"
                  density="compact"
                  hide-details
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" lg="3" sm="6">
                <v-text-field
                  v-model="customer.phone"
                  color="primary"
                  label="Téléphone"
                  variant="outlined"
                  density="compact"
                  hide-details
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" lg="3" sm="6">
                <v-text-field
                  v-model="customer.email"
                  color="primary"
                  label="Email"
                  variant="outlined"
                  density="compact"
                  hide-details
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" lg="3" sm="6">
                <v-text-field
                  v-model="customer.maritalStatus"
                  color="primary"
                  label="Situation matrimoniale"
                  variant="outlined"
                  density="compact"
                  hide-details
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" lg="3" sm="6">
                <v-text-field
                  v-model="customer.createAt"
                  :model-value="formatDate(customer.createAt)"
                  color="primary"
                  label="Date de création"
                  variant="outlined"
                  density="compact"
                  hide-details
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="justify-end">
            <v-btn
              text="Modifier"
              color="secondary"
              variant="tonal"
              prepend-icon="mdi-pencil"
              @click="closeModal"
              class="text-none"
            ></v-btn>
            <v-btn
              text="Supprimer"
              color="primary"
              variant="tonal"
              prepend-icon="mdi-delete"
              @click="closeModal"
              class="text-none"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-sheet>
    </v-col>

    <v-btn-toggle
      v-model="text"
      color="primary"
      divided
      mandatory
      rounded="xl"
      variant="outlined"
    >
      <v-btn value="selling" class="text-none"> Vente </v-btn>

      <v-btn value="companyFormation" class="text-none">
        Constitution de société
      </v-btn>

      <v-btn value="modificationCompany" class="text-none">
        Modification de société
      </v-btn>
      <v-btn value="transferOfMovableProperty" class="text-none">
        Succession de biens mobiliers
      </v-btn>
      <v-btn value="transferOfRealEstate" class="text-none">
        Succession de biens immobiliers
      </v-btn>
      <v-btn disabled value="credit" class="text-none"> Crédit </v-btn>
    </v-btn-toggle>

    <selling-board
      v-if="text == 'selling'"
      :sellingData="sellingData"
    ></selling-board>
    <company-formation-board
      v-else-if="text == 'companyFormation'"
      :companyFormationData="companyFormationData"
    ></company-formation-board>
    <modification-company-board
      v-else-if="text == 'modificationCompany'"
      :companyModificationData="companyModificationData"
    ></modification-company-board>
    <transfer-of-movable-property-board
      v-else-if="text == 'transferOfMovableProperty'"
      :movablePropertyData="movablePropertyData"
    ></transfer-of-movable-property-board>
    <transfer-of-real-estate-board
      v-else-if="text == 'transferOfRealEstate'"
      :realEstateData="realEstateData"
    ></transfer-of-real-estate-board>
  </div>
</template>

<script setup>
import { API_SERVER_URL } from "~/utils/constants";

const text = ref("selling");
const customer = ref("");
const route = useRoute();

const companyFormationData = ref(null);
const companyModificationData = ref(null);
const movablePropertyData = ref(null);
const realEstateData = ref(null);
const sellingData = ref(null);

onMounted(async () => {
  try {
    const customerFetch = await $fetch(
      API_SERVER_URL + `/customers/${route.params.ID}`
    );

    customer.value = customerFetch;

    console.log("datas : ", customer.value);

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
  } catch (err) {
    //error.value = err.message;
    console.error(err);
  }
});
</script>

<style>
.infoBox {
  width: 100%;
  margin: 0 auto;
}
</style>
