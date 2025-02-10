<template>
    <div class="ma-4">
        <back-button title="Détails du client" goBackTo="/customersManagement" />
    </div>

    <div class="ma-4 d-flex flex-column align-center ga-10" v-if="customer">
        <v-card class="w-100 w-lg-75 w-xl-50">
            <v-card-text>
                <v-row>
                    <v-col cols="4">
                        <div><strong>Nom :</strong> {{ customer.lastName }}</div>
                    </v-col>
                    <v-col cols="4">
                        <div><strong>Email :</strong> {{ customer.email }}</div>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="4">
                        <div><strong>Prénoms :</strong> {{ customer.firstName }}</div>
                    </v-col>
                    <v-col cols="4">
                        <div><strong>Contact :</strong> {{ customer.phone }}</div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <v-btn-toggle v-model="text" color="primary" divided mandatory rounded="xl" variant="outlined">
            <v-btn value="selling" class="text-none">
                Vente
            </v-btn>

            <v-btn value="companyFormation" class="text-none">
                Constitution de société
            </v-btn>

            <v-btn value="modificationCompany" class="text-none">
                Modification de société
            </v-btn>
            <v-btn value="transferOfMovableProperty" class="text-none">
                Succession de biens mobiliers
            </v-btn>
            <v-btn value="transferOfRealEstate" class="text-none">
                Succession de biens immobiliers
            </v-btn>
            <v-btn value="credit" class="text-none">
                Crédit
            </v-btn>
        </v-btn-toggle>

        <selling-board v-if="text == 'selling'"></selling-board>
        <company-formation-board v-else-if="text == 'companyFormation'"></company-formation-board>
        <modification-company-board v-else-if="text == 'modificationCompany'"></modification-company-board>
        <transfer-of-movable-property-board
            v-else-if="text == 'transferOfMovableProperty'"></transfer-of-movable-property-board>
        <transfer-of-real-estate-board v-else-if="text == 'transferOfRealEstate'"></transfer-of-real-estate-board>

    </div>

    <div v-else class="mt-4">
        <v-alert type="error">Client non trouvé</v-alert>
    </div>
</template>

<script setup>
const text = ref("selling");
const customer = ref("");
const route = useRoute();
const config = useRuntimeConfig();

onMounted(async () => {
    try {
        const response = await fetch(`${config.public.baseUrl}/customers/${route.params.ID}`);
        //console.log(response);
        if (!(response.status === 200)) throw new Error('Donnée non trouvée');
        customer.value = await response.json();
        //console.log("customer : ", customer.value);
    } catch (err) {
        //error.value = err.message;
        console.error(err);
    }
});
</script>
