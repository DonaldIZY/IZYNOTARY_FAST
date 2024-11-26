<template>
    <div class="ma-4" >
        <back-button title="Gestion des clients" goBackTo="/home"/>
    </div>
    <div class="ma-4">

        <div class="d-flex justify-end align-center ga-4">
            <v-btn color="primary" prependIcon="mdi-plus" class="text-none"> Ajouter un client</v-btn>
            <v-text-field
                color="primary"
                v-model="customersSearch"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                hide-details
                single-line
            ></v-text-field>
        </div>
        

        <v-data-table
            :headers="customersHeaders"
            :items="customers"
            :search="customersSearch"
            hover
        >
        </v-data-table>
    </div>
</template>

<script setup>
    const customersHeaders = ref([
        { align: "start", key: "LAST_NAME", title: "Nom" },
        { align: "start", key: "FIRST_NAME", title: "Prénoms" },
        { align: "start", key: "EMAIL", title: "Email" },
        { align: "start", key: "CONTACT", title: "Contact" },
        { align: "start", key: "CURRENT_FILES", title: "Dossiers en cours" },
        { align: "start", key: "COMPLETED_FILES", title: "Dossiers terminés" },
        { align: "start", key: "HANGING_FILES", title: "Dossiers suspendus" },
        { align: "start", key: "CLOSED_FILES", title: "Dossiers arrêtés" },
        { align: "start", key: "FILES", title: "Dossiers" },
    ]);

    const customers = ref([
        {
            LAST_NAME: "Smith",
            FIRST_NAME: "John",
            EMAIL: "john.smith@example.com",
            CONTACT: "0123456789",
            CURRENT_FILES: 5,
            COMPLETED_FILES: 3,
            HANGING_FILES: 2,
            CLOSED_FILES: 1,
            FILES: 12,
        },
        {
            LAST_NAME: "Johnson",
            FIRST_NAME: "Jane",
            EMAIL: "jane.johnson@example.com",
            CONTACT: "9876543210",
            CURRENT_FILES: 7,
            COMPLETED_FILES: 5,
            HANGING_FILES: 3,
            CLOSED_FILES: 0,
            FILES: 15,
        },
        {
            LAST_NAME: "Doe",
            FIRST_NAME: "Michael",
            EMAIL: "michael.doe@example.com",
            CONTACT: "1234567890",
            CURRENT_FILES: 1,
            COMPLETED_FILES: 0,
            HANGING_FILES: 0,
            CLOSED_FILES: 1,
            FILES: 2,
        },
    ]);

    const customersSearch = ref(null);
</script>