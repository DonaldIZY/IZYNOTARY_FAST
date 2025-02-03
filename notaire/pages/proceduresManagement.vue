<template>
  <div class="ma-4">
    <back-button title="Gestion des procédures" goBackTo="/home" />
  </div>

  <div class="ma-4">
    <v-row>
      <v-col cols="12" class="d-flex justify-end">
        <v-btn
          color="primary"
          class="text-none"
          prependIcon="mdi-folder-plus-outline"
          to="/addProcedure"
        >
          Créer une procédure
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" lg="3">
        <v-sheet :elevation="3" rounded class="pa-2">
          <h4 class="mb-3">Recherche avancée</h4>
          <v-form v-model="form">
            <v-row>
              <v-col cols="12" lg="12" sm="4">
                <v-text-field
                  color="primary"
                  v-model="searchNum"
                  label="Recherche par N°"
                  prepend-inner-icon="mdi-numeric"
                  variant="outlined"
                  density="compact"
                  hide-details
                ></v-text-field>
              </v-col>

              <v-col cols="12" lg="12" sm="4">
                <v-text-field
                  color="primary"
                  v-model="searchCustomer"
                  label="Recherche par client"
                  prepend-inner-icon="mdi-account"
                  variant="outlined"
                  density="compact"
                  hide-details
                ></v-text-field>
              </v-col>

              <v-col cols="12" lg="12" sm="4">
                <v-select
                  v-model="searchProcedureType"
                  color="primary"
                  label="Type de procédure"
                  prepend-inner-icon="mdi-folder-open-outline"
                  chips
                  :items="[
                    'Vente',
                    'Constitution de société',
                    'Modification de société',
                    'Succession de biens mobiliers',
                    'Succession de biens immobiliers',
                    'Crédit',
                  ]"
                  multiple
                  clearable
                  variant="outlined"
                  density="compact"
                  hide-details
                ></v-select>
              </v-col>

              <v-col cols="12" lg="12" sm="6">
                <v-text-field
                  color="primary"
                  v-model="searchStartDate"
                  type="date"
                  label="Date de création"
                  prepend-inner-icon="mdi-calendar"
                  variant="outlined"
                  density="compact"
                  hide-details
                >
                </v-text-field>
              </v-col>

              <v-col cols="12" lg="12" sm="6">
                <v-select
                  v-model="searchStatus"
                  color="primary"
                  label="Statut"
                  prepend-inner-icon="mdi-state-machine"
                  :items="['En cours', 'Suspendu', 'Arrêté']"
                  chips
                  multiple
                  clearable
                  variant="outlined"
                  density="compact"
                  hide-details
                ></v-select>
              </v-col>

              <v-col cols="12">
                <v-btn
                  color="primary"
                  prependIcon="mdi-restart"
                  block
                  @click="clearFilters"
                  class="text-none"
                >
                  Réinitialiser
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-sheet>
      </v-col>

      <v-col cols="12" lg="9">
        <v-sheet :elevation="4" rounded class="pa-2">
          <h4 class="mb-3">Liste des procédures</h4>
          <v-data-table
            :headers="proceduresHeaders"
            :items="filteredProcedures"
            items-per-page-text="Procédures par page :"
            page-text
            hover
            item-value="NUM"
            class="customTable1"
            density="compact"
            fixed-header
          >
            <template v-slot:item.ACTIONS="{ item }">
              <v-btn
                variant="text"
                @click=""
                color="primary text-none"
                :to="redirectRegardingProcedure(item)"
              >
                Voir
              </v-btn>
              <v-btn
                variant="text"
                color="primary text-none"
                @click="openModal(item)"
              >
                Modifier
              </v-btn>
            </template>
            <template v-slot:item.STATUS="{ item }">
              <v-chip
                :color="
                  item.STATUS == 'Terminée'
                    ? '#63AD19'
                    : item.STATUS == 'En cours'
                    ? '#FFC300'
                    : '#AD1919'
                "
                :text="item.STATUS"
                size="small"
                variant="flat"
                label
              ></v-chip>
            </template>
            <!-- Slot personnalisé pour l'affichage quand il n'y a pas de données -->
            <template #no-data>
              <div class="no-data-container">
                <v-img
                  src="~/assets/img/tableIcon_nodata.png"
                  height="80"
                  width="80"
                  class="mb-3"
                  alt="Aucune donnée"
                ></v-img>
                <p>Aucune donnée</p>
              </div>
            </template>
          </v-data-table>
        </v-sheet>
      </v-col>
    </v-row>
  </div>

  <modal-edit-procedureStep
    :show="dialog"
    @close-modal="closeModal"
    @submit="updateProcedure"
    :data="selectedProcedure"
  />
</template>

<script setup>
const testUrl = /*"http://localhost:8000"*/ "http://serverizynotary.izydr.net";

const proceduresHeaders = ref([
  { align: "start", key: "NUM", title: "N°" },
  { align: "start", key: "CUSTOMER", title: "Client" },
  { align: "start", key: "PROCEDURE_TYPE", title: "Type de procédure" },
  { align: "start", key: "CREATE_BY", title: "Créée par" },
  { align: "start", key: "CREATE_AT", title: "Date de création" },
  { align: "start", key: "PROGRESSION", title: "Progression" },
  { align: "center", key: "STATUS", title: "Statut" },
  { align: "center", key: "ACTIONS", title: "Actions" },
]);

const procedures = ref([]);

const searchCNI = ref(null);
const searchNum = ref(null);
const searchCustomer = ref(null);
const searchStartDate = ref(null);
const searchProcedureType = ref(null);
const searchStatus = ref(null);
const form = ref(null);

const filteredProcedures = computed(() => {
  return procedures.value.filter((item) => {
    const matchesCNI =
      !searchCNI.value || item.NUM.toString().includes(searchCNI.value);
    const matchesNum =
      !searchNum.value || item.NUM.toString().includes(searchNum.value);
    const matchesCustomer =
      !searchCustomer.value ||
      item.CUSTOMER.toLowerCase().includes(searchCustomer.value.toLowerCase());
    const matchesStartDate =
      !searchStartDate.value ||
      new Date(item.CREATE_AT).toISOString().slice(0, 10) >=
        searchStartDate.value;
    const matchesProcedureType =
      !searchProcedureType.value ||
      new Date(item.CREATE_AT).toISOString().slice(0, 10) <=
        searchProcedureType.value;
    const matchesStatus = !searchStatus.value || item.STATUS.toLowerCase;
    return (
      matchesCNI &&
      matchesNum &&
      matchesCustomer &&
      matchesStartDate &&
      matchesProcedureType &&
      matchesStatus
    );
  });
});

const clearFilters = () => {
  searchCNI.value = null;
  searchNum.value = null;
  searchCustomer.value = null;
  searchStartDate.value = null;
  searchProcedureType.value = null;
  searchStatus.value = null;
};

const loadProcedures = async () => {
  try {
    const fetchedProcedures = await $fetch(
      `${testUrl /*config.public.baseUrl*/}/folders`
    );

    console.log("fetchedProcedures : ", fetchedProcedures);

    if (fetchedProcedures) {
      procedures.value = fetchedProcedures.map((procedure, index) => ({
        NUM: index + 1,
        CUSTOMER:
          procedure.customer.lastName + " " + procedure.customer.firstName,
        PROCEDURE_TYPE: procedure.procedureType,
        CREATE_BY: "",
        CREATE_AT: new Date(procedure.createAt).toLocaleDateString(),
        PROGRESSION: procedure.progression * 100 + "%",
        STATUS: procedure.status,
        steps: procedure.step.steps,
        customer: procedure.customer,
        id: procedure.id,
        folderNum: procedure.folderNum,
      }));
    }
  } catch (err) {
    console.error("Erreur lors du chargement des procédures : ", err);
  }
};

loadProcedures();

const dialog = ref(false);
const selectedProcedure = ref({});

const openModal = (val) => {
  dialog.value = true;
  /*if (val.PROCEDURE_TYPE.trim().toLowerCase() == "constitution de société") {
         selectedProcedure.value = fakeCompanyIncorporation;  
     }else if (val.PROCEDURE_TYPE.trim().toLowerCase() == "vente") {
         selectedProcedure.value = fakeSales;
     }else{
         selectedProcedure.value = {};
         dialog.value = false;
     }*/
  selectedProcedure.value = val;
  console.log("selectedValue : ", selectedProcedure.value);
};

const closeModal = () => {
  dialog.value = false;
  // selectedProcedure.value = {};
};

const redirectRegardingProcedure = (procedure) => {
  console.log("procedure details : ", procedure);
  let type = procedure.PROCEDURE_TYPE;

  if (type.toLowerCase() == "constitution de société") {
    return "/companyIncorporationDetails";
  } else if (type.toLowerCase() == "modification de société") {
    return "/companyModificationDetails";
  } else if (type.toLowerCase() == "succession de biens immobiliers") {
    return "/realEstateDetails";
  } else if (type.toLowerCase() == "succession de biens mobiliers") {
    return "/personalPropertyDetails";
  } else if (type.toLowerCase() == "vente") {
    return "/salesDetails";
  }
};

const updateProcedure = async (val) => {
  try {
    console.log("data to send before change to formadata : ", val);

    var dataToSend = new FormData();

    dataToSend.append("action", val.action);
    dataToSend.append("folderNum", val.folderNum);
    dataToSend.append("procedureType", val.procedureType);
    dataToSend.append("contact", val.contact);

    for (const fileKey of Object.keys(val.documents)) {
      dataToSend.append(fileKey, val.documents[fileKey]);
    }

    // for(const [key, value] of dataToSend.entries()) {
    //     console.log(key, value);
    // }

    const resultOfProcedureUpdate = await $fetch(
      `${testUrl /*config.public.baseUrl*/}/steps/update/${val.id}`,
      {
        method: "PATCH",
        //   headers: {"Content-Type": "application/json"},
        cors: "no-cors",
        body: dataToSend,
      }
    );

    console.log("back response : ", resultOfProcedureUpdate);
  } catch (err) {
    console.error("Erreur lors de la mise à jour de la procédure : ", err);
  }
};
</script>

<style scoped>
@import url("~/assets/css/table.css");

.no-data-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  text-align: center;
  font-size: 16px;
}
</style>
