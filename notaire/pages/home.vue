<template>
  <div class="h-100 bg-img">
    <div class="h-10 d-flex align-center">
      <h1 class="text-center w-100">Bienvenue sur IzyNotary</h1>
    </div>

    <div class="d-flex h-90 w-sm-75 w-lg-50 mx-8 align-center">
      <v-row align="start" justify="center">
        <v-col cols="4">
          <v-card
            class="mx-auto rounded-lg hover-card"
            to="/proceduresManagement"
          >
            <v-img
              src="~/assets/img/gest_proc.png"
              class="mb-3 mt-2 mx-2 rounded-lg"
              cover
              alt="Gestion des procédures"
            ></v-img>
            <v-card-title class="titleCardText my-1 text-center">
              Gestion des procédures
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card
            class="mx-auto rounded-lg hover-card"
            to="/customersManagement"
          >
            <v-img
              src="~/assets/img/gest_cli.png"
              class="mb-3 mt-2 mx-2 rounded-lg"
              cover
              alt="Gestion des clients"
            ></v-img>

            <v-card-title class="titleCardText my-1 text-center">
              Gestion des clients
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card class="mx-auto rounded-lg hover-card" to="/dashboard">
            <v-img
              src="~/assets/img/tab_bord.png"
              class="mb-3 mt-2 mx-2 rounded-lg"
              cover
              alt="Tableau de bord"
            ></v-img>

            <v-card-title class="titleCardText my-1 text-center">
              Tableau de bord
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card class="mx-auto rounded-lg hover-card" to="/administration">
            <v-img
              src="~/assets/img/admin.png"
              class="mb-3 mt-2 mx-2 rounded-lg"
              cover
              alt="Administration"
            ></v-img>

            <v-card-title class="titleCardText my-1 text-center">
              Administration
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card disabled class="mx-auto rounded-lg hover-card" to="/settings">
            <v-img
              src="~/assets/img/param.png"
              class="mb-3 mt-2 mx-2 rounded-lg"
              cover
              alt="Paramètres"
            ></v-img>

            <v-card-title class="titleCardText my-1 text-center">
              Paramètres
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.bg-img {
  /*background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));*/
  background-image: url("~/assets/img/home_bg.png");
  background-size: cover;
  background-position: center;
  height: calc(100vh -3.2rem);
}

.h-10 {
  height: 10%;
}

.h-90 {
  height: 90%;
}

.titleCardText {
  font-size: 0.95rem;
}

.hover-card {
  transition: transform 0.25s ease-in-out;
}

.hover-card:hover {
  background-color: #ad1919;
  color: #fff;
  transform: scale(1.1); /* Agrandissement au hover */
  cursor: pointer;
}
</style>
