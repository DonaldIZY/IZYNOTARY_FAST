<template>
    <v-dialog
        v-model="$props.open"
        max-width="600"
    >
        <v-card
            prepend-icon="mdi-account-edit"
            title="Modifier un utilisateur"
        >
            <v-card-text>

                <v-row dense>
                    <v-col
                        cols="6"
                    >
                        <v-text-field
                                v-model="user.lastName"
                                color="primary"
                                label="Nom"
                                variant="outlined"
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="6"
                    >
                        <v-text-field
                            v-model="user.firstName"
                            color="primary"
                            label="Prénoms"
                            variant="outlined"
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="6"
                    >
                        <v-text-field
                            v-model="user.email"
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
                            v-model="user.roleId"
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
        open: false,
        userData: Object,
    });

    const roles = ref([]);

    const user = reactive({
     });

    const emit = defineEmits(["update:open", "save"]);

    const config = useRuntimeConfig();

    

    const closeModal = () => {
        emit("update:open", false);
    };


    const required = (v) => {
        return !!v || 'Le champ est requis.';
    };

    const emailRule = (v) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Veuillez entrer une adresse email valide.';
    }

    
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

    const handleUser = async () => {

        try {

            const data = await fetch(`${config.public.baseUrl}/users/${user.id}`, {
                method: 'PUT',
                body: user,
            });
            alert('Utilisateur modifié avec succès.');
            closeModal();

        } catch (error) {
            console.error('Erreur lors de la modification de l\'utilisateur :', error);
        }


    };

</script>