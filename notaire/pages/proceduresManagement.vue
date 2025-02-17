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
                  v-model="searchFolderNum"
                  label="Recherche par N° Dossier"
                  prepend-inner-icon="mdi-folder-open"
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
                  :items="[
                    'Vente',
                    'Constitution de société',
                    'Modification de société',
                    'Succession de biens mobiliers',
                    'Succession de biens immobiliers',
                    'Crédit',
                  ]"
                  clearable
                  variant="outlined"
                  density="compact"
                  hide-details
                ></v-select>
              </v-col>

              <v-col cols="12" lg="12" sm="4">
                <v-date-input
                  v-model="searchStartDate"
                  color="primary"
                  prepend-icon=""
                  prepend-inner-icon="mdi-calendar"
                  label="Date de création"
                  variant="outlined"
                  density="compact"
                  :max="new Date()"
                  :year="new Date().getFullYear()"
                  clearable
                  hide-details
                >
                </v-date-input>
              </v-col>

              <v-col cols="12" lg="12" sm="4">
                <v-select
                  v-model="searchStatus"
                  color="primary"
                  label="Statut"
                  prepend-inner-icon="mdi-state-machine"
                  :items="['En cours', 'Suspendu', 'Arrêté', 'Terminé']"
                  clearable
                  variant="outlined"
                  density="compact"
                  hide-details
                ></v-select>
              </v-col>

              <v-col cols="12" lg="12" sm="4">
                <v-text-field
                  color="primary"
                  v-model="searchAssignedTo"
                  label="Responsable"
                  prepend-inner-icon="mdi-account"
                  variant="outlined"
                  density="compact"
                  hide-details
                ></v-text-field>
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
            :sort-by="[{ key: 'CREATE_AT', order: 'desc' }]"
            items-per-page-text="Procédures par page :"
            page-text
            hover
            item-value="NUM"
            class="customTable1"
            density="compact"
            :loading="loading"
            fixed-header
          >
            <!-- Slot pour afficher un loader quand la table est vide -->
            <template v-slot:loading>
              <div class="d-flex justify-center my-10">
                <v-progress-circular
                  color="red"
                  indeterminate
                ></v-progress-circular>
              </div>
            </template>
            <template v-slot:item.PROCEDURE_TYPE="{ item }">
              <v-row no-gutters>
                <v-col class="d-flex">
                  <!-- Icône en fonction du type de procédure -->
                  <v-icon
                    :color="getProcedureTypeColor(item.PROCEDURE_TYPE)"
                    class="mr-2"
                  >
                    mdi-folder-open
                  </v-icon>
                  <!-- Texte de la procédure -->
                  {{ item.PROCEDURE_TYPE }}
                </v-col>
              </v-row>
            </template>
            <template v-slot:item.CREATE_AT="{ item }">
              {{
                new Date(item.CREATE_AT).toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })
              }}
            </template>
            <template v-slot:item.ACTIONS="{ item }">
              <v-btn
                v-if="item.STATUS != 'Terminé'"
                class="actionBtn"
                title="Modifier la procédure"
                color="gray"
                size="x-small"
                density="comfortable"
                icon="mdi-pencil"
                @click="openModal(item)"
              >
              </v-btn>
              <v-btn
                class="actionBtn"
                title="Voir les détails"
                color="blue"
                size="x-small"
                density="comfortable"
                icon="mdi-text-box-outline"
                @click="selectProcedure(item.id)"
                :to="redirectRegardingProcedure(item)"
              >
              </v-btn>
              <v-btn
                class="actionBtn"
                title="Supprimer la procédure"
                color="#ad1919"
                size="x-small"
                density="comfortable"
                icon="mdi-delete"
                @click="
                  () => {
                    toggleConfModal(item);
                    console.log('selectedValue : ', selectedProcedure.value);
                  }
                "
              >
              </v-btn>
            </template>
            <template v-slot:item.STATUS="{ item }">
              <v-chip
                :color="
                  item.STATUS == 'Terminé'
                    ? '#63AD19'
                    : item.STATUS == 'En cours'
                    ? '#FFC300'
                    : item.STATUS == 'Suspendu'
                    ? '#000000'
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
    v-if="Object.keys(selectedProcedure).length > 0"
    :show="dialog"
    @close-modal="closeModal"
    @submit="updateProcedure"
    :data="selectedProcedure"
  />

  <confirmation-with-password
    :text="`Vous êtes sur le point de supprimer la procédure N° ${selectedProcedure.folderNum}`"
    :open="openConf"
    :submit="() => deleteProcedure(selectedProcedure.id)"
    @update:open="openConf = $event"
  ></confirmation-with-password>
  <result-modal-redirection
    :text="showTextResultDeleteModal"
    :open="showResultDeleteModal"
    :type="showTypeResultDeleteModal"
    destination="/proceduresManagement"
    @update:open="showResultDeleteModal = $event"
  />
</template>

<script setup>
import { API_SERVER_URL } from "~/utils/constants";

const loading = ref(true);

const selectedProcedureStore = useSelectedDataStore();

const openConf = ref(false);

const toggleConfModal = (item) => {
  openConf.value = !openConf.value;
  selectedProcedure.value = item;
};

function selectProcedure(val) {
  selectedProcedureStore.defineProcedureId(val);
}

const proceduresHeaders = ref([
  { align: "start", key: "NUM", title: "N°" },
  { align: "start", key: "FOLDERNUM", title: "N° Dossier" },
  { align: "start", key: "CUSTOMER", title: "Client" },
  { align: "start", key: "PROCEDURE_TYPE", title: "Type de procédure" },
  { align: "start", key: "CREATE_AT", title: "Date de création" },
  { align: "start", key: "ASSIGNED_TO", title: "Responsable" },
  { align: "center", key: "PROGRESSION", title: "Progression" },
  { align: "center", key: "STATUS", title: "Statut" },
  { align: "center", key: "ACTIONS", title: "Actions", width: "150px" },
]);

const procedures = ref([]);

const searchAssignedTo = ref(null);
const searchNum = ref(null);
const searchFolderNum = ref(null);
const searchCustomer = ref(null);
const searchStartDate = ref(null);
const searchProcedureType = ref(null);
const searchStatus = ref(null);
const form = ref(null);

const filteredProcedures = computed(() => {
  return procedures.value.filter((item) => {
    const matchesAssignedTo =
      !searchAssignedTo.value ||
      item.ASSIGNED_TO.toLowerCase().includes(
        searchAssignedTo.value.toLowerCase()
      );
    const matchesNum =
      !searchNum.value || item.NUM.toString().includes(searchNum.value);
    const matchesFolderNum =
      !searchFolderNum.value ||
      item.FOLDERNUM.toString().includes(searchFolderNum.value.toUpperCase());
    const matchesCustomer =
      !searchCustomer.value ||
      item.CUSTOMER.toLowerCase().includes(searchCustomer.value.toLowerCase());
    const matchesStartDate =
      !searchStartDate.value ||
      new Date(item.CREATE_AT).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour12: false,
      }) ==
        new Date(searchStartDate.value).toLocaleDateString("fr-FR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour12: false,
        });
    const matchesProcedureType =
      !searchProcedureType.value ||
      item.PROCEDURE_TYPE.toLowerCase().includes(
        searchProcedureType.value.toLowerCase()
      );
    const matchesStatus =
      !searchStatus.value ||
      item.STATUS.toLowerCase().includes(searchStatus.value.toLowerCase());
    return (
      matchesAssignedTo &&
      matchesNum &&
      matchesFolderNum &&
      matchesCustomer &&
      matchesStartDate &&
      matchesProcedureType &&
      matchesStatus
    );
  });
});

const clearFilters = () => {
  searchAssignedTo.value = null;
  searchNum.value = null;
  searchCustomer.value = null;
  searchStartDate.value = null;
  searchProcedureType.value = null;
  searchStatus.value = null;
};

const loadProcedures = async () => {
  try {
    const fetchedProcedures = await $fetch(API_SERVER_URL + `/folders`);

    console.log("fetchedProcedures : ", fetchedProcedures);

    if (fetchedProcedures) {
      procedures.value = fetchedProcedures.map((procedure, index) => ({
        NUM: index + 1,
        FOLDERNUM: procedure.folderNum,
        CUSTOMER:
          procedure.customer.lastName + " " + procedure.customer.firstName,
        PROCEDURE_TYPE: procedure.procedureType,
        CREATE_BY: "",
        CREATE_AT: procedure.createAt,
        PROGRESSION: Math.round(procedure.progression * 100) + "%",
        STATUS: procedure.status,
        steps: procedure.step?.steps,
        customer: procedure.customer,
        id: procedure.id,
        stepId: procedure.step?.id,
        folderNum: procedure.folderNum,
        ASSIGNED_TO:
          procedure.assignedTo.lastName + " " + procedure.assignedTo.firstName,
      }));
    }
    loading.value = false;
  } catch (err) {
    console.error("erreur lors de la reception des procédures : ", err);
    loading.value = false;
  }
};

loadProcedures();

const dialog = ref(false);
const selectedProcedure = ref({});

const openModal = (val) => {
  dialog.value = true;
  selectedProcedure.value = val;
  console.log("selectedValue : ", selectedProcedure.value);
};

const closeModal = () => {
  dialog.value = false;
  selectedProcedure.value = {};
};

const redirectRegardingProcedure = (procedure) => {
  // console.log("procedure details : ", procedure);
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
    Object.keys(val).includes("comment")
      ? dataToSend.append("comment", val.comment)
      : null;
    Object.keys(val).includes("status")
      ? dataToSend.append("status", val.status)
      : null;

    if (val.documents) {
      for (const fileKey of Object.keys(val.documents)) {
        dataToSend.append(fileKey, val.documents[fileKey]);
      }
    }

    const resultOfProcedureUpdate = await $fetch(
      API_SERVER_URL + `/steps/update/${val.id}`,
      {
        method: "PATCH",
        body: dataToSend,
      }
    );
    if (resultOfProcedureUpdate.status) {
      alert("La procédure a été modifiée.");
      loadProcedures();
      closeModal();
    }

    console.log("back response : ", resultOfProcedureUpdate);
  } catch (err) {
    console.error("Erreur lors de la mise à jour de la procédure : ", err);
  }
};

const getProcedureTypeColor = (type) => {
  switch (type.toLowerCase()) {
    case "vente":
      return "#fa9f02";
    case "constitution de société":
      return "#009be3";
    case "modification de société":
      return "#011a8a";
    case "succession de biens mobiliers":
      return "#cf0205";
    case "succession de biens immobiliers":
      return "#02ad07";
    case "crédit":
      return "#fafa02";
    default:
      return "gray";
  }
};

const showResultDeleteModal = ref(false);
const showTextResultDeleteModal = ref("");
const showTypeResultDeleteModal = ref("");

const deleteProcedure = async (id) => {
  console.log(id);
  try {
    await $fetch(API_SERVER_URL + `/folders/${id}`, {
      method: "DELETE",
    });
    procedures.value = [];
    selectedProcedure.value = null;
    showTextResultDeleteModal.value = "Procédure supprimée avec succès !";
    showTypeResultDeleteModal.value = "success";
    showResultDeleteModal.value = true;
  } catch (err) {
    console.error("Erreur lors de la suppression de la procédure :", err);
    showTextResultDeleteModal.value =
      "Erreur lors de la suppression de la procédure.";
    showTypeResultDeleteModal.value = "error";
    showResultDeleteModal.value = true;
  }
};

watch(() => {
  if (showResultDeleteModal.value) {
    loadProcedures(); // Recharger les utilisateurs quand le modal est fermé
  }
});

//Envoi de données dépendant d'un premier envoi (à utiliser pour la suppression)
// const sendFirstRequest = async (data) => {
//   try {
//     // Envoyer la première requête
//     const response1 = await $fetch(API_SERVER_URL + "/route1", {
//       method: "POST",
//       body: data,
//     });

//     console.log("Réponse de la première requête :", response1);

//     // Vérifier la réponse et exécuter la deuxième requête si nécessaire
//     if (response1.success) {
//       const secondData = { id: response1.id, extraInfo: "Autre donnée" };

//       const response2 = await $fetch(API_SERVER_URL + "/route2", {
//         method: "POST",
//         body: secondData,
//       });

//       console.log("Réponse de la deuxième requête :", response2);
//     } else {
//       console.error("Erreur dans la première requête, pas d'envoi à la deuxième route");
//     }
//   } catch (error) {
//     console.error("Erreur lors de l'envoi des requêtes :", error);
//   }
// };
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
.actionBtn {
  margin: 0 0.3rem;
}
</style>
