<template>
  <v-layout>
    <v-app-bar density="compact">
      <template v-slot:prepend>
        <v-tooltip text="Accueil" location="bottom">
          <template v-slot:activator="{ props }">
            <img
              class="cursor-pointer navBarLogo"
              src="~/assets/img/Notary.png"
              alt=""
            />
            <v-toolbar-title
              v-bind="props"
              class="cursor-pointer navBarTitle"
              @click="goToHome"
              >IzyNotary</v-toolbar-title
            >
          </template>
        </v-tooltip>
      </template>
      <v-spacer></v-spacer>
      <p class="mx-2 text-overline"></p>
      <avatar-component :name="name" :email="email"></avatar-component>
    </v-app-bar>
    <v-main>
      <NuxtPage />
    </v-main>
  </v-layout>
</template>

<script setup>
const router = useRouter();
const authStore = useAuthStore();

const name = ref("");
const email = ref("");

onMounted(() => {
  name.value = authStore.customerName;
  email.value = authStore.customerEmail;
});

const goToHome = () => {
  router.push("/home");
};
</script>

<style>
html {
  overflow-y: auto;
}

.navBarLogo {
  height: 2.5rem;
  padding: 0;
  margin: 0 0.5rem;
}

.navBarTitle {
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
}

.navBarBtnHome {
  margin-right: 2rem;
}
</style>
