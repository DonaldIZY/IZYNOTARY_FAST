<template>
    <div class="d-flex justify-space-between ma-4" >
        <back-button title="Liste des utilisateurs" goBackTo="/home"/>
        <v-btn prependIcon="mdi-plus" color="primary" class="text-none">Ajouter un utilisateur</v-btn>
    </div>

    <div class="ma-4">
        <v-text-field
            color="primary"
            v-model="usersSearch"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
        ></v-text-field>

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
</script>