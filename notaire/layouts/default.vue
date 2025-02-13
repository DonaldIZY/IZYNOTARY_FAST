<template>
  <v-layout class="h-screen">
    <v-app-bar prominent>
      <template v-slot:prepend>
        <v-tooltip text="Accueil" location="bottom">
          <template v-slot:activator="{ props }">
            <img
              v-bind="props"
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
      <v-btn
        v-if="route.path !== '/home'"
        text="Aller à l'accueil"
        color="secondary"
        variant="tonal"
        class="text-none navBarBtnHome"
        @click="goToHome"
      ></v-btn>
      <avatar-component
        :name="name"
        :email="email"
      ></avatar-component>
    </v-app-bar>
    <v-main class="fill-height">
      <NuxtPage />
      <v-footer></v-footer>
    </v-main>
  </v-layout>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();

const name = ref("");
const email = ref("");

onMounted(() => {
  name.value = authStore.userName;
  email.value = authStore.userEmail;
});

// watch(authStore, () => {
//   name.value = authStore.userName;
//   email.value = authStore.userEmail;
// });
const goToHome = () => {
  router.push("/home");
};
</script>

<style>
.navBarLogo {
  height: 3.2rem;
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
