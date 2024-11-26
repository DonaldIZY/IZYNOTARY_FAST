<template>
    <div class="ma-4" >
        <back-button title="Liste des rôles" goBackTo="/home"/>
    </div>
    <div class="ma-4">
        <v-text-field
            color="primary"
            v-model="rolesSearch"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
        ></v-text-field>
        <v-data-table
            :headers="rolesHeaders"
            :items="roles"
            :search="rolesSearch"
            hover
        >
        </v-data-table>
    </div>
</template>

<script setup>
    const rolesHeaders = ref([
        { align: "start", key: "NUM", title: "N°" },
        { align: "start", key: "NAME", title: "Nom" },
        { align: "start", key: "DESCRIPTION", title: "Description" },
    ]);

    const roles = ref([
        {
            NUM: "1",
            NAME: "Administrateur",
            DESCRIPTION: "A tout le droit sur l'application",
        },
        {
            NUM: "2",
            NAME: "Clerc",
            DESCRIPTION: "Accès limité à certaines fonctionnalités",
        },
        {
            NUM: "3",
            NAME: "Notaire",
            DESCRIPTION: "Accès restreint aux données personnelles",
        }
    ]);

    const rolesSearch = ref(null);
</script>