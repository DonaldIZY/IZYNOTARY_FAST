<template>
    <div class="ma-4">
        <back-button title="Détails du client" goBackTo="/customersManagement" />
    </div>
    
    <div class="ma-4 d-flex flex-column align-center ga-10" v-if="customer">
        <v-card
            class="w-100 w-lg-75 w-xl-50"
        >
            <v-card-text>
                <v-row>
                    <v-col
                        cols="4"
                    >
                        <div><strong>Nom :</strong> {{ customer.LAST_NAME }}</div>
                    </v-col>
                    <v-col
                        cols="4"
                    >
                        <div><strong>Email :</strong> {{ customer.EMAIL }}</div>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col
                        cols="4"
                    >
                        <div><strong>Prénoms :</strong> {{ customer.FIRST_NAME }}</div>
                    </v-col>
                    <v-col
                    cols="4"
                    >
                        <div><strong>Contact :</strong> {{ customer.CONTACT }}</div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <v-btn-toggle
            v-model="text"
            color="primary"
            divided
            mandatory
            rounded="xl"
            variant="outlined"
        >
            <v-btn
                value="selling"
                class="text-none"
            >
                Vente
            </v-btn>

            <v-btn
                value="companyFormation"
                class="text-none"
            >
                Constitution de société
            </v-btn>

            <v-btn
                value="modificationCompany"
                class="text-none"
            >
                Modification de société
            </v-btn>
            <v-btn
                value="transferOfMovableProperty"
                class="text-none"
            >
                Succession de biens mobiliers
            </v-btn>
            <v-btn
                value="transferOfRealEstate"
                class="text-none"
            >
                Succession de biens immobiliers
            </v-btn>
            <v-btn
                value="credit"
                class="text-none"
            >
                Crédit
            </v-btn>
        </v-btn-toggle>

        <selling-board v-if="text=='selling'"></selling-board>
        <company-formation-board v-else-if="text=='companyFormation'"></company-formation-board>
        <modification-company-board v-else-if="text=='modificationCompany'"></modification-company-board>
        <transfer-of-movable-property-board v-else-if="text=='transferOfMovableProperty'"></transfer-of-movable-property-board>
        <transfer-of-real-estate-board v-else-if="text=='transferOfRealEstate'"></transfer-of-real-estate-board>

    </div>
    
    <div v-else class="mt-4">
        <v-alert type="error">Client non trouvé</v-alert>
    </div>
</template>

<script setup>
    const text = ref("selling");
    const route = useRoute();
    const customerId = parseInt(route.params.ID);
    // Simulation de récupération des données, à remplacer par un appel API
    const customers = [
        {
            ID: 1,
            LAST_NAME: "Smith",
            FIRST_NAME: "John",
            EMAIL: "john.smith@example.com",
            CONTACT: "0123456789",
            CURRENT_FILES: 6,
            COMPLETED_FILES: 3,
            HANGING_FILES: 2,
            CLOSED_FILES: 1,
            FILES: 12,
        },
        {
            ID: 2,
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
            ID: 3,
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
    ];

    // Utilisation de computed pour récupérer le client en fonction de l'ID
    const customer = computed(() => customers.find((c) => c.ID === customerId));

</script>
