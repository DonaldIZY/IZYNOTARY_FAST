<template>
  <v-card class="mx-auto" max-width="250" link>
    <v-img
      height="200px"
      :src="img"
      class="mb-2 mt-4 mx-4"
      :alt="title"
    ></v-img>

    <v-card-title class="my-2">
      {{ title }}
    </v-card-title>
  </v-card>
</template>

<script setup>
const props = defineProps({
  img: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
});
</script>
