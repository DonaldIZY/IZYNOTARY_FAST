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

    <selling-board v-if="text == 'selling'"></selling-board>
    <company-formation-board
      v-else-if="text == 'companyFormation'"
    ></company-formation-board>
    <modification-company-board
      v-else-if="text == 'modificationCompany'"
    ></modification-company-board>
    <transfer-of-movable-property-board
      v-else-if="text == 'transferOfMovableProperty'"
    ></transfer-of-movable-property-board>
    <transfer-of-real-estate-board
      v-else-if="text == 'transferOfRealEstate'"
    ></transfer-of-real-estate-board>
  </div>
</template>

<script setup>
import { API_SERVER_URL } from "~/utils/constants";
import { formatDate, formatDateWithoutTime } from "~/utils/formatDate";

const text = ref("selling");
const customer = ref("");
const route = useRoute();

onMounted(async () => {
  try {
    const response = await fetch(
      API_SERVER_URL + `/customers/${route.params.ID}`
    );
    //console.log(response);
    if (!(response.status === 200)) throw new Error("Donnée non trouvée");
    customer.value = await response.json();
  } catch (err) {
    //error.value = err.message;
    console.error(err);
  }
});
</script>

<style>
.infoBox {
  width: 95%;
  margin: 0 auto;
}
</style>
