<template>
  <v-menu min-width="200px">
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <v-avatar class="avatar" color="secondary">
          <span class="text-h6">{{ getInitials(name) }}</span>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <v-avatar class="avatarMenu" color="secondary">
            <span class="text-h6">{{ getInitials(name) }}</span>
          </v-avatar>
          <h3>{{ name }}</h3>
          <p class="text-caption mt-1">{{ email }}</p>
          <v-divider class="my-2"></v-divider>
          <!-- <v-btn
            variant="text"
            prepend-icon="mdi-account-outline"
            class="text-none"
            rounded="md"
            to="/profile"
          >
            Voir mon profil
          </v-btn> -->
          <v-divider class="my-2"></v-divider>
          <v-btn
            variant="text"
            prepend-icon="mdi-logout"
            class="text-none"
            rounded="md"
            @click="disconnectUser"
          >
            Se déconnecter
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script setup>
const authStore = useAuthStore();

const props = defineProps({
  name: String,
  email: String,
});

const disconnectUser = async () => {
  authStore.logout();
};
</script>

<style>
.avatar {
  margin-right: 1rem;
}

.avatarMenu {
  margin-bottom: 1rem;
}
</style>
