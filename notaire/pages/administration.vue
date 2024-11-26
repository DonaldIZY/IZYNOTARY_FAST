<template>
    <div
        class="d-flex justify-center my-4"
    >
        <v-btn-toggle
            v-model="text"
            color="primary"
            divided
            mandatory
            variant="outlined"
        >
            <v-btn
                value="users"
                to="/administration/users"
                class="text-none"
            >
                Utilisateurs
            </v-btn>

            <v-btn
                value="roles"
                to="/administration/roles"
                class="text-none"
            >
                Rôles
            </v-btn>

            <v-btn
                value="permissions"
                to="/administration/permissions"
                class="text-none"
            >
                Permissions
            </v-btn>
        </v-btn-toggle>
    </div>
    <div>
        <NuxtPage :page-key="(route) => route.fullPath" />
    </div>
    
</template>

<script setup>
    const text = ref("users");

    const router = useRouter();
    const route = useRoute();

    watch(
        () => route.path, // on surveille la route actuelle
        (newPath) => {
        // Si l'utilisateur est sur "/administration" sans sous-page active
        if (newPath === '/administration') {
            router.push('/administration/users');
        }
        },
        { immediate: true } // déclencher immédiatement lors du montage
    );
</script>