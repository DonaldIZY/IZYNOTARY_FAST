<template>
    <div class="ma-4" >
        <back-button title="Création de procédure" goBackTo="/proceduresManagement"/>
    </div>
    <div class="w-full d-flex justify-center">
        <div class="w-75 ma-4 center">
            
            <v-row >

                <v-col cols="4">
                    <v-card
                        class="mx-auto rounded-xl"
                        to="/selling"
                    >
                        <v-img
                            src="~/assets/img/vente.png"
                            class="mb-3 mt-6 mx-6 rounded-lg"
                            cover
                            alt="Procédure de vente"
                        ></v-img>

                        <v-card-title class="my-3 text-center">
                            Vente
                        </v-card-title>
                    </v-card>
                </v-col>

                <v-col cols="4">
                    <v-card
                        class="mx-auto rounded-xl"
                        to=""
                    >
                        <v-img
                            src="~/assets/img/constSoc.png"
                            class="mb-3 mt-6 mx-6 rounded-lg"
                            cover
                            alt="Procédure de constitution de société"
                        ></v-img>

                        <v-card-title class="my-3 text-center">
                            Constitution de société
                        </v-card-title>
                    </v-card>
                </v-col>

                <v-col cols="4">
                    <v-card
                        class="mx-auto rounded-xl"
                        to=""
                    >
                        <v-img
                            src="~/assets/img/modifSoc.png"
                            class="mb-3 mt-6 mx-6 rounded-lg"
                            cover
                            alt="Procédure de modification de société"
                        ></v-img>

                        <v-card-title class="my-3 text-center">
                            Modification de société
                        </v-card-title>
                    </v-card>
                </v-col>

                <v-col cols="4">
                    <v-card
                        class="mx-auto rounded-xl"
                        to=""
                    >
                        <v-img
                            src="~/assets/img/credit.png"
                            class="mb-3 mt-6 mx-6 rounded-lg"
                            cover
                            alt="Procédure de crédit"
                        ></v-img>

                        <v-card-title class="my-3 text-center">
                            Gestion des procédures
                        </v-card-title>
                    </v-card>
                </v-col>

                <v-col cols="4">
                    <v-card
                        class="mx-auto rounded-xl"
                        to=""
                    >
                        <v-img
                            src="~/assets/img/succBienMob.png"
                            class="mb-3 mt-6 mx-6 rounded-lg"
                            cover
                            alt="Procédure de succession de biens mobiliers"
                        ></v-img>

                        <v-card-title class="my-3 text-center">
                            Succession de biens mobiliers
                        </v-card-title>
                    </v-card>
                </v-col>

                <v-col cols="4">
                    <v-card
                        class="mx-auto rounded-xl"
                        to=""
                    >
                        <v-img
                            src="~/assets/img/succBienImmob.png"
                            class="mb-3 mt-6 mx-6 rounded-lg"
                            cover
                            alt="Procédures de succession de biens immobiliers"
                        ></v-img>

                        <v-card-title class="my-3 text-center">
                            Succession de biens immobiliers
                        </v-card-title>
                    </v-card>
                </v-col>
                
            </v-row>

        </div>
    </div>
    
</template>

<script setup>

</script>