<template>
    <div class="ma-4" >
        <back-button title="Procédure de succession de biens immobiliers" goBackTo="/addProcedure"/>
    </div>

    <div class="ma-4">
        <v-row>
            <v-col
                cols="6"
            >
                <v-row>
                    <v-col cols="4">
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
                                    ></v-select>
                                </v-form>
                                <v-divider>ou</v-divider>
                                <v-btn color="primary" class="text-none align-self-center mt-5" @click="toggleModal">Créer le client</v-btn>
                                <create-customer-modal :open="open" @update:open="open = $event" />
                            </div>
                            
                        </v-sheet>
                    </v-col>

                    <v-col cols="8">
                        <v-sheet 
                            :elevation="4" 
                            rounded
                            height="100%"
                            class="pa-4"
                        >
                            <h4 class="mb-3">Aperçu informations du client</h4>
                            <v-form
                                v-model="form"
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
              </v-col>
              <v-col
                cols="6"
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
                            class="d-flex align-center "

                        >
                            
                            <v-text-field
                                color="primary"
                                label="CNI des ayants droit"
                                variant="outlined"
                                hide-details
                                
                            ></v-text-field>
                            <v-checkbox-btn class="justify-end" color="#63AD19"></v-checkbox-btn>
                        
                        </v-col>
                        <v-col
                            cols="12"
                            class="d-flex align-center"
                        >
                            
                            <v-text-field
                                color="primary"
                                label="CNI du donateur"
                                variant="outlined"
                                hide-details
                            ></v-text-field>
                            <v-checkbox-btn class="justify-end" color="#63AD19"></v-checkbox-btn>
                            
                        </v-col>
                        <v-col
                            cols="12"
                            class="d-flex align-center"
                        >
                            
                            <p>
                                Extrait d'acte de naissance des ayants droits
                            </p>
                            <v-checkbox-btn class="justify-end" color="#63AD19"></v-checkbox-btn>
                             
                        </v-col>
                    </v-row>    
                        
                        
                </v-sheet>
              </v-col>
        </v-row>
    </div>
</template>

<script setup>
    const open = ref(false);

    const toggleModal = () => {
        open.value = !open.value;
    };
</script>