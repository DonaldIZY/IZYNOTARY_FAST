<template>
    <div class="ma-4" >
        <back-button title="Liste des permissions" goBackTo="/home"/>
    </div>
    <div class="ma-4">
        <v-text-field
            color="primary"
            v-model="permissionsSearch"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
        ></v-text-field>
        <v-data-table
            :headers="permissionsHeaders"
            :items="permissions"
            :search="permissionsSearch"
            hover
        >
        </v-data-table>
    </div>
</template>

<script setup>
    const permissionsHeaders = ref([
        { align: "start", key: "NUM", title: "N°" },
        { align: "start", key: "NAME", title: "Nom" },
        { align: "start", key: "DESCRIPTION", title: "Description" },
    ]);

    const permissions = ref([
        {
            NUM: "1",
            NAME: "Permission 1",
            DESCRIPTION: "Description de la permission 1",
        },
        {
            NUM: "2",
            NAME: "Permission 2",
            DESCRIPTION: "Description de la permission 2",
        },
        {
            NUM: "3",
            NAME: "Permission 3",
            DESCRIPTION: "Description de la permission 3",
        },
    ]);

    const permissionsSearch = ref(null);
</script>