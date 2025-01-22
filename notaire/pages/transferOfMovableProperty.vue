<template>
    <div class="ma-4" >
        <back-button title="Procédure de succession de biens mobiliers" goBackTo="/addProcedure"/>
    </div>

    <div class="ma-4">
        <v-row>
            <v-col
                cols="12"
                lg="6"
            >
                <v-row>
                    <v-col 
                        cols="12"
                        sm="4"
                    >
                        <v-sheet 
                            :elevation="4" 
                            rounded
                            height="100%"
                            class="pa-4"
                        >
                            <h4 class="mb-3">Informations du client</h4>
                            <div class="d-flex flex-column justify-center">
                                <v-form>
                                    <v-combobox
                                        v-model="customerId"
                                        color="primary"
                                        label="Selectionner un client"
                                        :items="customers"
                                        item-title="NAME"
                                        item-value="ID"
                                        variant="outlined"
                                        hide-details
                                    ></v-combobox>
                                </v-form>
                                <v-divider class="my-5">ou</v-divider>
                                <v-btn color="primary" class="text-none align-self-center" @click="toggleModal">Créer le client</v-btn>
                                <create-customer-modal :open="open" @update:open="open = $event" />
                            </div>
                            
                        </v-sheet>
                    </v-col>

                    <v-col 
                        cols="12"
                        sm="8"
                    >
                        <v-sheet 
                            :elevation="4" 
                            rounded
                            height="100%"
                            class="pa-4"
                        >
                            <h4 class="mb-3">Aperçu informations du client</h4>
                            <v-form
                            >
                                <v-row>

                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-text-field
                                            v-model="lastName"
                                            color="primary"
                                            label="Nom"
                                            variant="outlined"
                                            hide-details
                                            disabled
                                        ></v-text-field>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-text-field
                                            v-model="identificationNumber"
                                            color="primary"
                                            label="CNI"
                                            variant="outlined"
                                            hide-details
                                            disabled
                                        ></v-text-field>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        sm="5"
                                    >
                                        <v-text-field
                                            v-model="firstName"
                                            color="primary"
                                            label="Prénom"
                                            variant="outlined"
                                            hide-details
                                            disabled
                                        ></v-text-field>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        sm="3"
                                    >
                                        <v-text-field
                                            v-model="gender"
                                            color="primary"
                                            label="Sexe"
                                            variant="outlined"
                                            hide-details
                                            disabled
                                        ></v-text-field>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        sm="4"
                                    >
                                        <v-text-field
                                            v-model="birthDate"
                                            color="primary"
                                            label="Date de naissance"
                                            variant="outlined"
                                            hide-details
                                            disabled
                                        ></v-text-field>
                                    </v-col>

                                </v-row>
                                
                            </v-form>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-col>
            <v-col
                cols="12"
                lg="6"
            >
                <v-sheet 
                    :elevation="4" 
                    rounded
                    height="100%"
                    class="pa-4"
                >
                    <h4 class="mb-3">Documents requis pour la vente</h4>      
                    <v-row>

                        <v-col
                            cols="12"
                        >
                            
                            <required-document label="CNI du client" v-model:file="customerCNI"></required-document>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            
                            <required-document label="Extrait d'acte de naissance" v-model:file="birthCertificate"></required-document>
                        </v-col>

                    </v-row>  
                        
                </v-sheet>
            </v-col>
        </v-row>
    </div>

    <div class="ma-4 d-flex justify-end">
        <v-btn
            color="primary"
            class="text-none"
            @click="handleProcedure"
        >
            Enregistrer la procédure
        </v-btn>
        <confirmation-modal text="Voulez vous enregistrer la procédure de succession de biens mobiliers ?" :open="openConf" @update:open="openConf = $event"></confirmation-modal>
    </div>
</template>

<script setup>

    const open = ref(false);

    const openConf = ref(false);

    const customers = ref([]);

    const customerId = ref(null);

    const selectedCustomer = ref(null);

    const firstName = ref('');
    const lastName = ref('');
    const birthDate = ref('');
    const gender = ref('');
    const identificationNumber = ref('');

    const customerCNI = ref(null);
    const birthCertificate = ref(null);
    
    const toggleConfModal = () => {
        openConf.value = !openConf.value;
    };

    const toggleModal = () => {
        open.value = !open.value;
    };

    const config = useRuntimeConfig();

    const loadCustomers = async () => {
        try {
            const fetchCustomers = await $fetch(`${config.public.baseUrl}/customers`);
            if (fetchCustomers) {
                customers.value = fetchCustomers.map((customer) => ({
                    ID: customer.id,
                    LASTNAME: customer.lastName,
                    FIRSTNAME: customer.firstName,
                    NAME: customer.lastName+" " + customer.firstName,
                    IDENTIFICATION_NUMBER: customer.identificationNumber,
                    BIRTHDATE: customer.birthDate,
                    GENDER: customer.gender,
                }));
            }
        } catch (err) {
            console.error('Erreur lors du chargement des clients :', err);
        }
    };
    
    loadCustomers();

    watchEffect(() => {
        if (!open.value) {
            loadCustomers();
        }
    });

    watch(customerId, (newSelectedCustomer) => {
        selectedCustomer.value = customers.value.find(customer => customer.ID === newSelectedCustomer.ID);

        if (selectedCustomer.value) {
            lastName.value = selectedCustomer.value.LASTNAME;
            firstName.value = selectedCustomer.value.FIRSTNAME;
            birthDate.value = new Date(selectedCustomer.value.BIRTHDATE).toLocaleDateString();
            gender.value = selectedCustomer.value.GENDER;
            identificationNumber.value = selectedCustomer.value.IDENTIFICATION_NUMBER;
        }
    });

    const resetFields = () => {
        customerId.value = null;
        selectedCustomer.value = null;
        firstName.value = '';
        lastName.value = '';
        birthDate.value = '';
        gender.value = '';
        identificationNumber.value = '';
        customerCNI.value = null;
        birthCertificate.value = null;
    };

    const handleProcedure = async () => {

        const procedureData = new FormData();

        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
        const year = today.getFullYear();

        const formattedDate = `${day}${month}${year}`;

        procedureData.append('folderNum',  'CS-'+formattedDate );
        procedureData.append('procedureType', 'Succession de biens mobiliers');
        procedureData.append('progression', 1/5);
        procedureData.append('status', 'En cours');
        procedureData.append('customerId', selectedCustomer.value.ID);

        const requiredFiles = {
            customerCNI: customerCNI.value,
            birthCertificate: birthCertificate.value
        };

        for (const key in requiredFiles) {
            if (requiredFiles[key]) {
                procedureData.append(`requiredFiles[${key}]`, requiredFiles[key]);
            }
        }

        try {
            const date = await $fetch(`${config.public.baseUrl}/folders/transferOfMovableProperty`, {
                method: 'POST',
                body: procedureData
            });
            alert('Procédure créée avec succès.');
            resetFields();
            
        } catch (error) {
            console.error('Erreur lors de la création de la procédure :', error);
        }

    };
</script>