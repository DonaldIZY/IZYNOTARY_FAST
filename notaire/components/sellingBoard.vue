<template>
    <v-data-table
        :headers="sellingsHeaders"
        :items="users"
        :search="usersSearch"
        hover
    >
    </v-data-table>
</template>

<script setup>
    const sellingsHeaders = ref([
        { align: "start", key: "NUM", title: "N° du dossier" },
        { align: "start", key: "CREATE_AT", title: "Date de création" },
        { 
            align: "center",
            title: "Niveau d'avancement",
            children: [
                { align: "start", key: "NUM", title: "Fourniture des pièces" },
                { align: "start", key: "CREATE_AT", title: "Rédaction de l'acte de vente" },
                { align: "start", key: "NUM", title: "Règlement des frais" },
                { align: "start", key: "CREATE_AT", title: "Signature de l'acte de vente" },
                { align: "start", key: "NUM", title: "Dépôt de l'acte signé" },
                { align: "start", key: "CREATE_AT", title: "Livrables" },
            ]
        },
        { align: "start", key: "PERCENTAGE", title: "Pourcentage" },
        { align: "start", key: "STATUS", title: "Statut" },
    ]);
</script>