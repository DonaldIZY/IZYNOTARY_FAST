<template>
    <div class="ma-4" >
        <back-button title="Liste des permissions" goBackTo="/home"/>
    </div>
    <div class="ma-4">
        <v-text-field
            color="primary"
            v-model="permissionsSearch"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
        ></v-text-field>
        <v-data-table
            :headers="permissionsHeaders"
            :items="permissions"
            :search="permissionsSearch"
            no-data-text="Aucune permission trouvé."
            items-per-page-text="Permissions par page :"
            hover
        >
        </v-data-table>
    </div>
</template>

<script setup>
    const permissionsHeaders = ref([
        { align: "start", key: "NUM", title: "N°" },
        { align: "start", key: "NAME", title: "Nom" },
        { align: "start", key: "DESCRIPTION", title: "Description" },
    ]);

    const permissions = ref([]);

    const permissionsSearch = ref(null);

    const config = useRuntimeConfig();

    const loadPermissions = async () => {
        try {
            const fetchedPermissions = await $fetch(`${config.public.baseUrl}/permissions`);
            if (fetchedPermissions) {
                permissions.value = fetchedPermissions.map((permission, index) => ({
                    NUM: index + 1,
                    NAME: permission.name,
                    DESCRIPTION: permission.description,
                }));
            }
        } catch (err) {
            console.error('Erreur lors du chargement des permissions :', err);
        }
    };

    loadPermissions();
 
</script>