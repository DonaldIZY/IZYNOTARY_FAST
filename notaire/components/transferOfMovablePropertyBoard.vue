<template>
    <v-data-table
        :headers="headers"
        :items="transferOfMovableProperties"
        :search="transferOfMovablePropertiesSearch"
        no-data-text="Aucune procédure de succession de biens mobiliers."
        hover
        class="customTable2"
    >
    </v-data-table>
</template>

<script setup>
    const headers = ref([
        { align: "start", key: "NUM", title: "N° du dossier" },
        { align: "start", key: "CREATE_AT", title: "Date de création" },
        { 
            align: "center",
            title: "Niveau d'avancement",
            children: [
                { align: "start", key: "SUPPLY_OF_PARTS", title: "Fourniture des pièces" },
                { align: "start", key: "REQUEST_TO_BANK", title: "Demande auprès de la banque" },
                { align: "start", key: "PREPARATION_OF_INCORPORATION_LETTER", title: "Élaboration de la lettre de constitution" },
                { align: "start", key: "DECLARATION_OF_ESTATE", title: "Déclaration de la succession" },
                { align: "start", key: "BANK_DEPOSIT", title: "Dépôt au près de la banque" },
                { align: "start", key: "DELIVERABLES", title: "Livrables" },
            ]
        },
        { align: "start", key: "PERCENTAGE", title: "Pourcentage" },
        { align: "start", key: "STATUS", title: "Statut" },
    ]);
</script>

<style>
@import url("~/assets/css/table.css");
</style>