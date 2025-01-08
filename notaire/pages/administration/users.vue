<template>
    <div class="d-flex justify-space-between ma-4" >
        <back-button title="Liste des utilisateurs" goBackTo="/home"/>
        <v-btn prependIcon="mdi-plus" color="primary" class="text-none" @click="toggleModal">Ajouter un utilisateur</v-btn>
        <add-user :open="open" @update:open="open = $event"/>
    </div>

    <div class="ma-4">
        <v-data-table
            :headers="usersHeaders"
            :items="users"
            :search="usersSearch"
            no-data-text="Aucun utilisateur trouvé."
            items-per-page-text="Utilisateurs par page :"
             
            hover
        >
        </v-data-table>
    </div>
</template>

<script setup>

    // Références
    const usersHeaders = ref([
        { align: "start", key: "NUM", title: "N°" },
        { align: "start", key: "LAST_NAME", title: "Nom" },
        { align: "start", key: "FIRST_NAME", title: "Prénoms" },
        { align: "start", key: "EMAIL", title: "Email" },
        { align: "start", key: "CREATE_AT", title: "Date de création" },
        { align: "start", key: "ROLE", title: "Rôle" },
    ]);

    const users = ref([]);

    const usersSearch = ref(null);

    const open = ref(false);

    const toggleModal = () => {
        open.value = !open.value;
    };

    const config = useRuntimeConfig();

    const loadUsers = async () => {
        try {
            const fetchedUsers = await $fetch(`${config.public.baseUrl}/users`);
            if (fetchedUsers) {
                users.value = fetchedUsers.map((user, index) => ({
                    NUM: index + 1,
                    LAST_NAME: user.lastName,
                    FIRST_NAME: user.firstName,
                    EMAIL: user.email,
                    CREATE_AT: new Date(user.createAt).toLocaleDateString(),
                    ROLE: user.role.name,
                }));
            }
        } catch (err) {
            console.error('Erreur lors du chargement des utilisateurs :', err);
        }
    };

    loadUsers();

    watchEffect(() => {
        if (!open.value) {
            loadUsers(); // Recharger les utilisateurs quand le modal est fermé
        }
    });

    //const { data: fetchedUsers, error } = useFetch(`${config.public.baseUrl}/users`);

    // onMounted(() => {
    //     if (fetchedUsers.value) {
    //         users.value = fetchedUsers.value.map((user, index) => ({
    //             NUM: index + 1,
    //             LAST_NAME: user.lastName,
    //             FIRST_NAME: user.firstName,
    //             EMAIL: user.email,
    //             CREATE_AT: new Date(user.createAt).toLocaleDateString(),
    //             ROLE: user.role.name,
    //         }));
    //     } else if (error.value) {
    //         console.error('Erreur lors du chargement des utilisateurs :', error.value);
    //     }
    // });
    
    // watchEffect(() => {
    //     if (fetchedUsers.value) {
    //         users.value = fetchedUsers.value.map((user, index) => ({
    //             NUM: index + 1,
    //             LAST_NAME: user.lastName,
    //             FIRST_NAME: user.firstName,
    //             EMAIL: user.email,
    //             CREATE_AT: new Date(user.createAt).toLocaleDateString(),
    //             ROLE: user.role.name,
    //         }));
    //     } else if (error.value) {
    //         console.error('Erreur lors du chargement des utilisateurs :', error.value);
    //     }
    // });
    
</script>