<template>
    <v-data-table
        :headers="headers"
        :items="companyFormations"
        :search="companyFormationsSearch"
        no-data-text="Aucune procédure de constitution de société."
        hover
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
                { align: "start", key: "WRITING_DEED_OF_SALE", title: "Rédaction des statuts" },
                { align: "start", key: "SETTLEMENT_OF_FEES", title: "Règlement des frais" },
                { align: "start", key: "SIGNATURE_OF_ACTS", title: "Signature des actes" },
                { align: "start", key: "SIGNED_DOCUMENT_DEPOSITED", title: "Dépôt des actes signés" },
                { align: "start", key: "DELIVERABLES", title: "Livrables" },
            ]
        },
        { align: "start", key: "PERCENTAGE", title: "Pourcentage" },
        { align: "start", key: "STATUS", title: "Statut" },
    ]);
</script>