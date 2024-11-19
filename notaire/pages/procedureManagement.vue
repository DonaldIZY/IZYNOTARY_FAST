<template>
    <div class="d-flex align-center ga-4">
        <v-icon icon="mdi-arrow-left" size="36"/>
        <h2>Liste des procédures</h2>
    </div>

    <div>
        <div>
            <v-text-field
                color="primary"
                v-model="projectsSearch"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                hide-details
                single-line
            ></v-text-field>
            <v-data-table
                :headers="projectsHeaders"
                :items="projects"
                :search="projectsSearch"
            >
            </v-data-table>
        </div>
    </div>
    
</template>

<script setup>
    const projectsHeaders = ref([
        { align: "start", key: "NAME", title: "Nom" },
        { align: "center", key: "DESCRIPTION", title: "Description" },
        { align: "center", key: "START_DATE", title: "Date de début" },
        { align: "center", key: "END_DATE", title: "Date de fin" },
        { align: "center", key: "ACTOR", title: "Acteur" },
        { align: "end", key: "STATUS", title: "Statut" },
    ]);

    const projectsSearch = ref(null);
</script>