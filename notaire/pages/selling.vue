<template>
    <div class="ma-4" >
        <back-button title="Procédure de vente" goBackTo="/addProcedure"/>
    </div>

    <div class="ma-4">
        <v-row>
            <v-col
                cols="12"
                lg="6"
            >
                <v-row>
                    <v-col 
                        cols="12"
                        sm="4"
                    >
                        <v-sheet 
                            :elevation="4" 
                            rounded
                            height="100%"
                            class="pa-4"
                        >
                            <h4 class="mb-3">Informations du client</h4>
                            <div class="d-flex flex-column justify-center">
                                <v-form>
                                    <v-select
                                        color="primary"
                                        label="Selectionner un client"
                                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                                        variant="outlined"
                                        hide-details=""
                                    ></v-select>
                                </v-form>
                                <v-divider class="my-5">ou</v-divider>
                                <v-btn color="primary" class="text-none align-self-center" @click="toggleModal">Créer le client</v-btn>
                                <create-customer-modal :open="open" @update:open="open = $event" />
                            </div>
                            
                        </v-sheet>
                    </v-col>

                    <v-col 
                        cols="12"
                        sm="8"
                    >
                        <v-sheet 
                            :elevation="4" 
                            rounded
                            height="100%"
                            class="pa-4"
                        >
                            <h4 class="mb-3">Aperçu informations du client</h4>
                            <v-form
                                
                            >
                                <v-row>

                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-text-field
                                            color="primary"
                                            label="Nom"
                                            variant="outlined"
                                            hide-details
                                        ></v-text-field>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-text-field
                                            color="primary"
                                            label="CNI"
                                            variant="outlined"
                                            hide-details
                                        ></v-text-field>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        sm="5"
                                    >
                                        <v-text-field
                                            color="primary"
                                            label="Prénom"
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
                                            label="Sexe"
                                            variant="outlined"
                                            hide-details
                                        ></v-text-field>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        sm="3"
                                    >
                                        <v-text-field
                                            color="primary"
                                            label="Age"
                                            variant="outlined"
                                            hide-details
                                        ></v-text-field>
                                    </v-col>

                                </v-row>
                                
                            </v-form>
                        </v-sheet>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-sheet 
                            :elevation="4" 
                            rounded
                            height="100%"
                            class="pa-4"
                        >
                            <h4 class="mb-3">Informations du vendeur</h4>
                            <v-row>

                                <v-col 
                                    cols="12"
                                    sm="4"
                                >
                                    <v-text-field
                                        color="primary"
                                        label="Nom"
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
                                        label="Prénoms"
                                        variant="outlined"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                                <v-col 
                                    cols="12"
                                    sm="4"
                                >
                                    <v-select
                                        label="Sexe"
                                        :items="['Homme', 'Femme']"
                                        variant="outlined"
                                        hide-details
                                    ></v-select>
                                </v-col>
                                <v-col 
                                    cols="12"
                                    sm="4"
                                >
                                    <v-text-field
                                        color="primary"
                                        label="Situation matrimoniale"
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
                                        label="Numéro de la CNI"
                                        variant="outlined"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                    
                            </v-row>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-col>
            <v-col
                cols="12"
                lg="6"
            >
                <v-sheet 
                    :elevation="4" 
                    rounded
                    height="100%"
                    class="pa-4"
                >
                    <h4 class="mb-3">Documents requis pour la vente</h4>
                    <v-row>

                        <v-col
                            cols="12"
                        >
                            
                            <required-document label="CNI du vendeur"></required-document>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            
                            <required-document label="CNI du conjoint"></required-document>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            
                            <required-document label="Extrait d'acte de naissance ou de mariage"></required-document>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            
                            <required-document label="Facture de CIE ou SODECI"></required-document>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            
                            <required-document label="Attestation de situation fiscale"></required-document>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            
                            <required-document label="Titre de propriété (copie du titre foncier, ACD ...)"></required-document>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            
                            <required-document label="État foncier"></required-document>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            
                            <required-document label="Certificat de localisation"></required-document>
                        </v-col>
                    </v-row>
                        
                </v-sheet>
            </v-col>
        </v-row>
        
        
    </div>

    <div class="ma-4 d-flex justify-end">
        <v-btn
            color="primary"
            class="text-none"
            @click="toggleConfModal"
        >
            Enregistrer la procédure
        </v-btn>
        <confirmation-modal text="Voulez vous enregistrer la procédure de vente ?" :open="openConf" @update:open="openConf = $event"></confirmation-modal>
    </div>
    
    
</template>

<script setup>

    const open = ref(false);

    const openConf = ref(false);
    
    const toggleConfModal = () => {
        openConf.value = !openConf.value;
    };

    const toggleModal = () => {
        open.value = !open.value;
    };

</script>