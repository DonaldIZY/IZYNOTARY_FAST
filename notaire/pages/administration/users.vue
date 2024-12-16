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
            hover
        >
        </v-data-table>
    </div>
</template>

<script setup>
    const usersHeaders = ref([
        { align: "start", key: "NUM", title: "N°" },
        { align: "start", key: "LAST_NAME", title: "Nom" },
        { align: "start", key: "FIRST_NAME", title: "Prénoms" },
        { align: "start", key: "EMAIL", title: "Email" },
        { align: "start", key: "CREATE_AT", title: "Date de création" },
        { align: "start", key: "ROLE", title: "Rôle" },
    ]);

    const users = ref([
        {
            NUM: "1",
            LAST_NAME: "Doe",
            FIRST_NAME: "John",
            EMAIL: "john.doe@example.com",
            CREATE_AT: "2022-01-01",
            ROLE: "Administrateur",
        },
        {
            NUM: "2",
            LAST_NAME: "Smith",
            FIRST_NAME: "Jane",
            EMAIL: "jane.smith@example.com",
            CREATE_AT: "2022-02-01",
            ROLE: "Clerc",
        },
        {
            NUM: "3",
            LAST_NAME: "Johnson",
            FIRST_NAME: "Bob",
            EMAIL: "bob.johnson@example.com",
            CREATE_AT: "2022-03-01",
            ROLE: "Notaire",
        },
    ]);

    const usersSearch = ref(null);

    const open = ref(false);

    const toggleModal = () => {
        open.value = !open.value;
    };
</script>