<template>
    <!-- <header class="w-full h-25 bg-white" style="height: 60px;">
        <img src="~/assets/img/Notary.png" alt="Logo" style="height: 20px;">
    </header> -->
    <v-layout class="h-screen">
        <v-app-bar
            prominent
        >
            <template v-slot:prepend>
                <img class="cursor-pointer" src="~/assets/img/Notary.png" alt="Logo" style="height: 32px;" @click="goToHome">
            </template>
            <v-toolbar-title class="cursor-pointer" @click="goToHome">IzyNotary</v-toolbar-title>
  
            <v-spacer></v-spacer>

            
            <p class="mx-2 text-overline">Chris Fousseni</p>
            
            
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

    const router = useRouter();

    const goToHome = () => {
        router.push("/home");
    };
</script>