<template>
    <div class="ma-4" >
        <back-button title="Procédure de vente" goBackTo="/addProcedure"/>
    </div>

    <div class="ma-4">
        <v-row>
            <v-col
                cols="6"
            >
                <v-row>
                    <v-col cols="4">
                        <v-sheet 
                            :elevation="4" 
                            rounded
                            height="100%"
                        >
                            1
                        </v-sheet>
                    </v-col>
                    <v-col cols="8">
                        <v-sheet 
                            :elevation="4" 
                            rounded
                            height="100%"
                        >
                            2
                        </v-sheet>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-sheet 
                            :elevation="4" 
                            rounded
                            height="100%"
                        >
                            3
                        </v-sheet>
                    </v-col>
                </v-row>
              </v-col>
              <v-col
                cols="6"
              >
                <v-sheet 
                    :elevation="4" 
                    rounded
                    height="100%"
                >
                    4
                </v-sheet>
              </v-col>
        </v-row>
    </div>
</template>

<script setup>

</script>