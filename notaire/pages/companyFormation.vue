<template>
    <div class="ma-4" >
        <back-button title="Procédure de constitution de société" goBackTo="/addProcedure"/>
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
                            <v-form>
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
                    <h4 class="mb-3">Documents requis pour la constitution de société</h4>
                    <v-row>

                        <v-col
                            cols="12"
                        >
                            
                            <required-document label="CNI du client" v-model:file="customerCNI"></required-document>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            
                            <required-document label="Casier judiciaire" v-model:file="criminalRecord"></required-document>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            
                            <required-document label="Bail" v-model:file="lease"></required-document>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            
                            <required-document label="Croquis de la situation géographique" v-model:file="sketchOfGeoLocation"></required-document>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            
                            <required-document label="Fiche à renseigner de la société à constituer" v-model:file="formForCompanyFormation"></required-document>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            
                            <required-document label="Capital à libérer" v-model:file="capitalToBeReleased"></required-document>
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
        <confirmation-modal text="Voulez vous enregistrer la procédure de constitution de société ?" :open="openConf" @update:open="openConf = $event"></confirmation-modal>
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
    const criminalRecord = ref(null);
    const lease = ref(null);
    const sketchOfGeoLocation = ref(null);
    const formForCompanyFormation = ref(null);
    const capitalToBeReleased = ref(null);
    
    const toggleConfModal = () => {
        openConf.value = !openConf.value;
    };

    const toggleModal = () => {
        open.value = !open.value;
    };

    const config = useRuntimeConfig();

    const testUrl = "http://serverizynotary.izydr.net";

    const loadCustomers = async () => {
        try {
            const fetchCustomers = await $fetch(`${testUrl/*config.public.baseUrl*/}/customers`);
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
        criminalRecord.value = null;
        lease.value = null;
        sketchOfGeoLocation.value = null;
        formForCompanyFormation.value = null;
        capitalToBeReleased.value = null;


    };

    const handleProcedure = async () => {

        const procedureData = new FormData();
    
        const folders = await $fetch(`${testUrl/*config.public.baseUrl*/}/folders`);

        const count = folders.length;
        if (isNaN(count)) {
            console.error("Erreur : count est NaN");
            return;
        }

        procedureData.append('folderNum',  procedureNumGenerator('Constitution de société', count));
        procedureData.append('procedureType', 'Constitution de société');
        procedureData.append('progression', 1/6);
        procedureData.append('status', 'En cours');
        procedureData.append('customerId', selectedCustomer.value.ID);
        
        const requiredFiles = {
            customerCNI: customerCNI.value,
            criminalRecord: criminalRecord.value,
            lease: lease.value,
            sketchOfGeoLocation: sketchOfGeoLocation.value,
            formForCompanyFormation: formForCompanyFormation.value,
            capitalToBeReleased: capitalToBeReleased.value
        };

        for (const key in requiredFiles) {
            if (requiredFiles[key]) {
                procedureData.append(`${key}`, requiredFiles[key]);
            }
        }
        
        try {
            const data = await $fetch(`${testUrl/*config.public.baseUrl*/}/folders/companyFormation`, {
                method: 'POST',
                body: procedureData
            });
            alert('Procédure créée avec succès.');
            // resetFields();
            
        } catch (error) {
            console.error('Erreur lors de la création de la procédure :', error);
        }
        
    };
</script>