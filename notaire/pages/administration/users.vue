<template>
    <div class="d-flex justify-space-between ma-4" >
        <back-button title="Liste des utilisateurs" goBackTo="/home"/>
        <v-btn prependIcon="mdi-plus" color="primary" class="text-none" @click="toggleModal">Ajouter un utilisateur</v-btn>
        <modal-add-user :open="open" @update:open="open = $event"/>
    </div>

    <div class="ma-4">
        <v-data-table
            :headers="usersHeaders"
            :items="users"
            :search="usersSearch"
            no-data-text="Aucun utilisateur trouvé."
            items-per-page-text="Utilisateurs par page :"
            page-text
            hover
        >
            <template v-slot:item.ROLE="{ item }">
                {{ item.ROLE.name }}
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon
                    class="me-2"
                    size="small"
                    color="primary"
                    @click="toggleEditModal(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    class="me-2"
                    size="small"
                    color="primary"
                    @click="toggleConfModal(item)"
                >
                    mdi-delete
                </v-icon>
                <v-icon
                    size="small"
                    color="primary"
                    @click="changePassword(item)"
                >
                    mdi-lock-reset
                </v-icon>
            </template>
        </v-data-table>
        <modal-edit-user :open="openEdit" :userData="selectedUser" @update:open="openEdit = $event" />
        <confirmation-modal text="Vous allez supprimer un utilisateur. Continuer?" :open="openConf" @update:open="openConf = $event" :submit="() => deleteUser(selectedUser.ID)"/>
    </div>
</template>

<script setup>

    const config = useRuntimeConfig();

    // Références
    const usersHeaders = ref([
        { align: "start", key: "NUM", title: "N°" },
        { align: "start", key: "LAST_NAME", title: "Nom" },
        { align: "start", key: "FIRST_NAME", title: "Prénoms" },
        { align: "start", key: "EMAIL", title: "Email" },
        { align: "start", key: "CREATE_AT", title: "Date de création" },
        { align: "start", key: "ROLE", title: "Rôle" },
        { align: "start", key: "actions", title: "Actions" },
    ]);
    const users = ref([]);
    const usersSearch = ref(null);
    const open = ref(false);
    const openConf = ref(false);
    const openEdit = ref(false);
    const selectedUser = ref(null);

    const toggleModal = () => {
        open.value = !open.value;
    };

    const toggleConfModal = (item) => {
        selectedUser.value = item; 
        openConf.value = !openConf.value;
    };

    const toggleEditModal = (item) => {
        selectedUser.value = item;
        openEdit.value =!openEdit.value;
    };

    const loadUsers = async () => {
        try {
            const fetchedUsers = await $fetch(`${config.public.baseUrl}/users`);
            if (fetchedUsers) {
                users.value = fetchedUsers.map((user, index) => ({
                    NUM: index + 1,
                    ID: user.id,
                    LAST_NAME: user.lastName,
                    FIRST_NAME: user.firstName,
                    EMAIL: user.email,
                    CREATE_AT: new Date(user.createAt).toLocaleDateString(),
                    ROLE: user.role,
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

    const deleteUser = async (id) => {
        try {
            console.log(id);
            await $fetch(`${config.public.baseUrl}/users/${id}`, {
                method: 'DELETE',
            });
            alert("Utilisateur supprimé avec succès!");
            const updatedUsers = users.value.filter(user => user.ID !== id);
            users.value = updatedUsers;
            selectedUser.value = null;
        } catch (err) {
            console.error('Erreur lors de la suppression de l\'utilisateur :', err);
        }
    };
    
</script>