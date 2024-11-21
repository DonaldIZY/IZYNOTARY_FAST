<template>
    <!-- <header class="w-full h-25 bg-white" style="height: 60px;">
        <img src="~/assets/img/Notary.png" alt="Logo" style="height: 20px;">
    </header> -->
    <v-layout class="h-screen">
        <v-app-bar
            
            prominent
        >
            <template v-slot:prepend>
                <img src="~/assets/img/Notary.png" alt="Logo" style="height: 32px;">
            </template>
            <v-toolbar-title>IzyNotary</v-toolbar-title>
  
            <v-spacer></v-spacer>

            <template>
                <p class="mx-2 text-overline">Chris Fousseni</p>
            </template>
            
            <v-avatar class="mx-2" color="primary">
                <span class="text-h5">CF</span>
            </v-avatar>
        </v-app-bar>
        <v-main class="fill-height" >
            <NuxtPage />
        </v-main>
        
    </v-layout>
    
</template>

<script setup>

</script>