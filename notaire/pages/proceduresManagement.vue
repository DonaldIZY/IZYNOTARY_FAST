<template>
    <div class="d-flex align-center ga-4 ma-4" >
        <v-icon icon="mdi-arrow-left" size="36" />
        <h2>Gestion des procédures</h2>
    </div>

    <div class="ma-4">
        <v-row>
            
            <v-col
                cols="12"
                lg="8"
                class="d-flex justify-end"
            >
                <v-btn
                    color="primary"
                    class="text-none"
                >
                    Créer une procédure
                </v-btn>
            </v-col>
        </v-row>
        
        <v-row>
            
            <v-col
                cols="12"
                lg="8"
            >
                
                <v-sheet :elevation="4" rounded class="pa-4">
                    <h4 class="mb-3">Liste des procédures</h4>
                    
                    <v-data-table
                        :headers="proceduresHeaders"
                        :items="filteredProcedures"
                        item-value="NUM"
                    >
                        <template v-slot:item.DETAILS="{ item }">
                                <v-btn
                                    variant="text"
                                    @click="showDetails(item)"
                                    color="primary"
                                >
                                    
                                    voir
                                </v-btn>
                        </template>
                    </v-data-table>
                </v-sheet>
                
            </v-col>

            <v-col
                cols="12"
                lg="4"
            >
                <v-sheet :elevation="4" rounded class="pa-4">
                    <h4 class="mb-3">Recherche avancée</h4>
                    <v-form
                        v-model="form"
                    >
                        <v-row>

                            <v-col
                                cols="12"
                                lg="12"
                                sm="4"
                            >
                                <v-text-field
                                    color="primary"
                                    v-model="searchCNI"
                                    label="Numéro de CNI"
                                    prepend-inner-icon="mdi-id-card"
                                    variant="outlined"
                                    hide-details
                                ></v-text-field>
                            </v-col>

                            <v-col
                                cols="12"
                                lg="12"
                                sm="4"
                            >
                                <v-text-field
                                    color="primary"
                                    v-model="searchNum"
                                    label="Recherche par N°"
                                    prepend-inner-icon="mdi-numeric"
                                    variant="outlined"
                                    hide-details
                                ></v-text-field>
                            </v-col>

                            <v-col
                                cols="12"
                                lg="12"
                                sm="4"
                            >
                                <v-text-field
                                    color="primary"
                                    v-model="searchCustomer"
                                    label="Recherche par client"
                                    prepend-inner-icon="mdi-account"
                                    variant="outlined"
                                    hide-details
                                ></v-text-field>
                            </v-col>

                            <v-col
                                cols="12"
                                sm="4"
                            >
                                <v-text-field
                                    color="primary"
                                    v-model="searchStartDate"
                                    label="Date de début"
                                    prepend-inner-icon="mdi-calendar"
                                    variant="outlined"
                                    hide-details
                                ></v-text-field>
                            </v-col>

                            <v-col
                                cols="12"
                                sm="4"
                            >
                                <v-text-field
                                    color="primary"
                                    v-model="searchEndDate"
                                    label="Date de fin"
                                    prepend-inner-icon="mdi-calendar"
                                    variant="outlined"
                                    hide-details
                                ></v-text-field>
                            </v-col>

                            <v-col
                                cols="12"
                                sm="4"
                            >
                                <v-text-field
                                    color="primary"
                                    v-model="searchStatus"
                                    label="Statut"
                                    prepend-inner-icon="mdi-calendar"
                                    variant="outlined"
                                    hide-details
                                ></v-text-field>
                            </v-col>
                            
                            <v-col
                                cols="12"
                            >
                                <v-btn
                                    color="primary"
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
        </v-row>
    </div>
    
    
</template>

<script setup>
    const proceduresHeaders = ref([
        { align: "center", key: "NUM", title: "N°" },
        { align: "center", key: "CUSTOMER", title: "Client" },
        { align: "center", key: "PROCEDURE_TYPE", title: "Type de procédure" },
        { align: "center", key: "CREATE_BY", title: "Créée par" },
        { align: "center", key: "CREATE_AT", title: "Date de création" },
        { align: "center", key: "STEP", title: "Étape" },
        { align: "center", key: "STATUS", title: "Statut" },
        { align: "center", key: "DETAILS", title: "Détails" },
    ]);

    const procedures = ref([
        {
            NUM: 1,
            CUSTOMER: "Client 1",
            PROCEDURE_TYPE: "Type 1",
            CREATE_BY: "User 1",
            CREATE_AT: "2022-01-01",
            STEP: "Step 1",
            STATUS: "Status 1",
        },
        {
            NUM: 2,
            CUSTOMER: "Client Kouasssi",
            PROCEDURE_TYPE: "Type 2",
            CREATE_BY: "User 2",
            CREATE_AT: "2022-02-01",
            STEP: "Step 2",
            STATUS: "Status 2",
        },
        {
            NUM: 3,
            CUSTOMER: "Kouasssi Client",
            PROCEDURE_TYPE: "Type 2",
            CREATE_BY: "User 2",
            CREATE_AT: "2022-02-01",
            STEP: "Step 2",
            STATUS: "Status 2",
        },
        //...
    ]);

    const searchCNI = ref(null);
    const searchNum = ref(null);
    const searchCustomer = ref(null);
    const searchStartDate = ref(null);
    const searchEndDate = ref(null);
    const searchStatus = ref(null);
    const form = ref(null);

    const filteredProcedures = computed(() => {
        return procedures.value.filter((item) => {
            const matchesCNI = !searchCNI.value || item.NUM.toString().includes(searchCNI.value);
            const matchesNum = !searchNum.value || item.NUM.toString().includes(searchNum.value);
            const matchesCustomer = !searchCustomer.value || item.CUSTOMER.toLowerCase().includes(searchCustomer.value.toLowerCase());
            const matchesStartDate = !searchStartDate.value || new Date(item.CREATE_AT).toISOString().slice(0, 10) >= searchStartDate.value;
            const matchesEndDate = !searchEndDate.value || new Date(item.CREATE_AT).toISOString().slice(0, 10) <= searchEndDate.value;
            const matchesStatus = !searchStatus.value || item.STATUS.toLowerCase
            return matchesCNI && matchesNum && matchesCustomer && matchesStartDate && matchesEndDate && matchesStatus;
        });
    });

    const clearFilters = () => {
        searchCNI.value = null;
        searchNum.value = null;
        searchCustomer.value = null;
        searchStartDate.value = null;
        searchEndDate.value = null;
        searchStatus.value = null;
    };
    
</script>