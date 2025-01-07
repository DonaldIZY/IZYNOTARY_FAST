<template>
    <div class="ma-4" >
        <back-button title="Liste des rôles" goBackTo="/home"/>
    </div>
    <div class="ma-4">
        <v-text-field
            color="primary"
            v-model="rolesSearch"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
        ></v-text-field>
        <v-data-table
            :headers="rolesHeaders"
            :items="roles"
            :search="rolesSearch"
            no-data-text="Aucun rôle trouvé."
            items-per-page-text="Rôles par page :"
            hover
        >
        </v-data-table>
    </div>
</template>

<script setup>
    const rolesHeaders = ref([
        { align: "start", key: "NUM", title: "N°" },
        { align: "start", key: "NAME", title: "Nom" },
        { align: "start", key: "DESCRIPTION", title: "Description" },
    ]);

    const roles = ref([]);

    const rolesSearch = ref(null);

    const config = useRuntimeConfig();

    const { data: fetchedRoles, error } = useFetch(`${config.public.baseUrl}/roles`);

    onMounted(() => {
        if (fetchedRoles.value) {
            roles.value = fetchedRoles.value.map((role, index) => ({
                NUM: index + 1,
                NAME: role.name,
                DESCRIPTION: role.description,
            }));
        } else if (error.value) {
            console.error('Erreur lors du chargement des roles :', error.value);
        }
    });
</script>