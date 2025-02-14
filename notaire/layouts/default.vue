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
      <!-- <v-btn
        v-if="route.path !== '/home'"
        text="Aller à l'accueil"
        color="secondary"
        variant="tonal"
        class="text-none navBarBtnHome"
        @click="goToHome"
      ></v-btn> -->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            color="secondary"
            variant="outlined"
            class="text-none navBarBtnHome"
            v-bind="props"
            ><v-icon size="x-large">mdi-menu</v-icon></v-btn
          >
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in itemsOfMenu"
            :key="index"
            :to="!item.disabled ? item.route : ''"
            :disabled="item.disabled"
            color="primary"
          >
            <v-list-item-title
              ><v-icon class="mr-2 mb-1" size="small">{{ item.icon }}</v-icon
              >{{ item.text }}</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
      <avatar-component :name="name" :email="email"></avatar-component>
    </v-app-bar>
    <v-main class="fill-height">
      <NuxtPage />
      <v-footer></v-footer>
    </v-main>
  </v-layout>
</template>

<script setup>
const router = useRouter();
const authStore = useAuthStore();

const itemsOfMenu = [
  { text: "Accueil", route: "/home", icon: "mdi-home" },
  {
    text: "Gestion des procédures",
    route: "/proceduresManagement",
    icon: "mdi-folder-cog",
    disabled: false,
  },
  {
    text: "Gestion des clients",
    route: "/customersManagement",
    icon: "mdi-account-cog",
    disabled: false,
  },
  {
    text: "Tableau de bord",
    route: "/dashboard",
    icon: "mdi-view-dashboard",
    disabled: false,
  },
  {
    text: "Administration",
    route: "/administration",
    icon: "mdi-office-building-cog",
    disabled: false,
  },
  { text: "Paramètres", route: "/settings", icon: "mdi-cog", disabled: true },
];

const name = ref("");
const email = ref("");

onMounted(() => {
  name.value = authStore.userName;
  email.value = authStore.userEmail;
});

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
