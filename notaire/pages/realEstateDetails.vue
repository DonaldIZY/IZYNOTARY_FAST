<script setup>
const config = useRuntimeConfig();
const formatDate = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  return date
    .toLocaleString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // Format 24h
    })
    .replace(",", "");
};

const selectedProcedureStore = useSelectedDataStore();
const stepList = ref([]);
const procedureNum = ref("Procédure de succession de biens immobiliers");
const procedureGeneralInfo = ref({
  lastname: "",
  firstname: "",
  numClient: "",
  phone: "",
  gender: "",
  maritalStatus: "",
  folderNum: "",
  createAt: "",
  updateAt: "",
  createBy: "",
  progression: "",
  status: "",
});

let procedureID = selectedProcedureStore.getProcedureId;

const loadProcedures = async () => {
  try {
    const fetchedProcedures = await $fetch(
      `http://serverizynotary.izydr.net/folders`
    );

    // console.log("fetchedProcedures : ", fetchedProcedures);

    let procedureData = fetchedProcedures.find(
      (proc) => proc.id == procedureID
    );
    procedureNum.value = procedureNum.value + " : N°" + procedureData.folderNum;
    stepList.value = procedureData.step.steps;
    console.log("step list : ", stepList.value);

    procedureGeneralInfo.value = {
      lastname: procedureData.customer.lastName,
      firstname: procedureData.customer.firstName,
      numClient: procedureData.customer.id,
      phone: procedureData.customer.phone,
      gender: procedureData.customer.gender,
      maritalStatus: procedureData.customer.maritalStatus,
      folderNum: procedureData.folderNum,
      createAt: formatDate(procedureData.createAt),
      updateAt: formatDate(procedureData.updateAt),
      createBy: "",
      progression: Math.round(procedureData.progression * 100),
      status: procedureData.status,
    };
  } catch (err) {
    console.error("Erreur lors du chargement des procédures : ", err);
  }
};

loadProcedures();

// Fonction computed pour changer la couleur en fonction de la progression
const progressColor = computed(() => {
  if (procedureGeneralInfo.value.progression < 30) {
    return "red";
  } else if (procedureGeneralInfo.value.progression < 49) {
    return "orange";
  } else if (procedureGeneralInfo.value.progression < 69) {
    return "yellow";
  } else {
    return "green";
  }
});

// Définition des couleurs en fonction du statut
const statusColor = computed(() => {
  switch (procedureGeneralInfo.value.status.toLowerCase()) {
    case "terminée":
      return "#63AD19"; // Bleu pour "en cours"
    case "suspendue":
      return "#B734EB"; // Orange pour "suspendu"
    case "en cours":
      return "#FFC300"; // Rouge pour "arrêté"
    default:
      return "#AD1919"; // Couleur par défaut
  }
});
</script>

<template>
  <div class="ma-4">
    <back-button
      v-if="stepList.length > 0"
      :title="procedureNum"
      goBackTo="/proceduresManagement"
    />
  </div>
  <v-row>
    <v-col cols="12">
      <v-sheet class="infoBox" elevation="4">
        <v-card class="card">
          <v-card-title class="card-title">Informations générales</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4" lg="3" sm="6">
                <v-text-field
                  v-model="procedureGeneralInfo.numClient"
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
                  v-model="procedureGeneralInfo.lastname"
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
                  v-model="procedureGeneralInfo.firstname"
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
                  v-model="procedureGeneralInfo.phone"
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
                  v-model="procedureGeneralInfo.gender"
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
                  v-model="procedureGeneralInfo.maritalStatus"
                  color="primary"
                  label="Situation matrimoniale"
                  variant="outlined"
                  density="compact"
                  hide-details
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4" lg="3" sm="6">
                <v-text-field
                  v-model="procedureGeneralInfo.folderNum"
                  color="primary"
                  label="N° Procédure"
                  variant="outlined"
                  density="compact"
                  hide-details
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" lg="3" sm="6">
                <v-text-field
                  v-model="procedureGeneralInfo.createAt"
                  color="primary"
                  label="Date de création de la procédure"
                  variant="outlined"
                  density="compact"
                  hide-details
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" lg="3" sm="6">
                <v-text-field
                  v-model="procedureGeneralInfo.createBy"
                  color="primary"
                  label="Créée par"
                  variant="outlined"
                  density="compact"
                  hide-details
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" lg="3" sm="6">
                <v-text-field
                  v-model="procedureGeneralInfo.updateAt"
                  color="primary"
                  label="Date de dernière modification"
                  variant="outlined"
                  density="compact"
                  hide-details
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" lg="3" sm="6">
                <span style="font-size: small">Progression</span>
                <v-progress-linear
                  v-model="procedureGeneralInfo.progression"
                  rounded="sm"
                  :color="progressColor"
                  height="20"
                >
                  <strong>{{ procedureGeneralInfo.progression }}%</strong>
                </v-progress-linear>
              </v-col>
              <v-col cols="12" md="4" lg="3" sm="6">
                <v-chip size="x-large" variant="elevated" :color="statusColor">
                  {{ procedureGeneralInfo.status }}
                </v-chip>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-col>
    <v-col cols="12">
      <v-sheet class="stepsBox" elevation="4">
        <v-card class="card">
          <v-card-title class="card-title">Détails des étapes </v-card-title>
          <v-card-text>
            <real-estate v-if="stepList.length > 0" :stepList="stepList" />
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<style scoped>
.infoBox {
  width: 95%;
  margin: 0 auto;
}

.stepsBox {
  width: 95%;
  margin: 0 auto;
}

.card {
  height: 100%;
  margin-bottom: 0rem;
}

.card-title {
  margin-bottom: 1rem;
}

/* .disabledInput {
  color: gray;
} */
</style>
