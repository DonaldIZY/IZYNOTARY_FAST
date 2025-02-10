<template>
  <div class="dashboard">
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" sm="6" lg="12"
            ><dashboard-stats-card
              iconBackgroundColor="#1b57b3"
              icon="mdi-folder-open-outline"
              iconColor="#ffffff"
              subText="Procédures"
            ></dashboard-stats-card>
          </v-col>
          <v-col cols="12" sm="6" lg="12"
            ><dashboard-stats-card
              iconBackgroundColor="#07913a"
              icon="mdi-account-tie-outline"
              iconColor="#ffffff"
              subText="Clients"
            ></dashboard-stats-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-container> </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script setup></script>

<style>
.dashboard {
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: whitesmoke;
}
</style>
