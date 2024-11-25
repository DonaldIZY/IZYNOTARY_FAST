<template>
    <div class="pa-4 text-center">
      <v-dialog
        v-model="props.open"
        max-width="600"
      >
  
        <v-card
          prepend-icon="mdi-handshake"
          title="Créer un client"
          
        >
          <v-card-text >
            <v-row dense>
              <v-col
                cols="6"
              >
                <v-text-field
                  label="Nom"
                  variant="outlined"
                ></v-text-field>
              </v-col>
  
              <v-col
                cols="6"
              >
                <v-text-field
                  label="Prénoms"
                  variant="outlined"
                ></v-text-field>
              </v-col>
  
              <v-col
                cols="6"
              >
                <v-select
                    label="Sexe"
                    :items="['Homme', 'Femme']"
                    variant="outlined"
                ></v-select>
              </v-col>
  
              <v-col
                cols="6"
              >
                <v-text-field
                  label="Age"
                  variant="outlined"
                ></v-text-field>
              </v-col>
  
              <v-col
                cols="6"
              >
                <v-select
                    label="Pièce d'identité"
                    :items="['CNI', 'Passeport']"
                    variant="outlined"
                ></v-select>
              </v-col>
              <v-col
                cols="6"
              >
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      label="Numéro de la pièce d'identité"
                      variant="outlined"
                    ></v-text-field>
                    
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-file-input 
                        label="Ajouter une image de la CNI"
                        prepend-icon="mdi-id-card"
                        variant="outlined"
                    ></v-file-input>
                    
                  </v-col>
                </v-row>
              </v-col>
              
              
  
              
            </v-row>
  
            
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
              text="Annuler"
              variant="plain"
              @click="closeModal"
            ></v-btn>
  
            <v-btn
              color="primary"
              text="Enregistrer"
              variant="tonal"
              @click="closeModal"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>

  <script setup>
    const props = defineProps({
        open: {
          type: Boolean,
          default: false,
        },
    });

    const emit = defineEmits(['update:open']);

    const closeModal = () => {
        emit('update:open', false);
    };
  </script>