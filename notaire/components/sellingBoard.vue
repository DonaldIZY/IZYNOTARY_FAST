<template>

    <v-data-table
        :headers="headers"
        :items="sellings"
        :search="sellingsSearch"
        no-data-text="Aucune procédure de vente."
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
                { align: "start", key: "WRITING_DEED_OF_SALE", title: "Rédaction de l'acte de vente" },
                { align: "start", key: "SETTLEMENT_OF_FEES", title: "Règlement des frais" },
                { align: "start", key: "SIGNATURE_DEED_OF_SALE", title: "Signature de l'acte de vente" },
                { align: "start", key: "SIGNED_DOCUMENT_DEPOSITED", title: "Dépôt de l'acte signé" },
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