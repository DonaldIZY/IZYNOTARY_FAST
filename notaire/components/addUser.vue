<template>
    <v-dialog
        v-model="props.open"
        max-width="600"
    >

        <v-card
            prepend-icon="mdi-account"
            title="Créer un utilisateur"
        >
            <v-card-text >
                <v-row dense>
                    <v-col
                        cols="6"
                    >
                        <v-text-field
                                v-model="lastName"
                                color="primary"
                                label="Nom"
                                variant="outlined"
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="6"
                    >
                        <v-text-field
                            v-model="firstName"
                            color="primary"
                            label="Prénoms"
                            variant="outlined"
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="6"
                    >
                        <v-text-field
                            v-model="email"
                            color="primary"
                            label="Email"
                            variant="outlined"
                            :rules="[required, emailRule]"
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="6"
                    >
                        <v-select
                            v-model="roleId"
                            color="primary"
                            label="Rôle"
                            :items="roles"
                            item-title="NAME"
                            item-value="ID"
                            variant="outlined"
                        ></v-select>
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
                    class="text-none"
                ></v-btn>

                <v-btn
                    color="primary"
                    text="Enregistrer"
                    variant="tonal"
                    @click="handleUser"
                    class="text-none"
                ></v-btn>
            </v-card-actions>
        </v-card>  
    </v-dialog>
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

    const handleUser = () => {
        const userData = {
            
        }
        closeModal();
    };

    const required = (v) => {
        return !!v || 'Le champ est requis.';
    };

    const emailRule = (v) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Veuillez entrer une adresse email valide.';
    }

    const config = useRuntimeConfig();
    const roles = ref(["Bonjour"]);
    const { data: fetchedRoles, error } = useFetch(`${config.public.baseUrl}/roles`);

    onMounted(() => {
        if (fetchedRoles.value) {
            roles.value = fetchedRoles.value.map((role) => ({
                ID: role.id,
                NAME: role.name,
            }));
        } else if (error.value) {
            console.error('Erreur lors du chargement des roles :', error.value);
        }
    });
    
  </script> 