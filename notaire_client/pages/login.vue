<template>
  <div class="d-flex fill-height">
    <!-- Section Gauche -->
    <div class="w-100 d-none d-sm-none d-md-flex bg-img"></div>

    <!-- Section Droite -->
    <div class="w-100 d-flex flex-column align-center justify-center">
      <v-card
        class="px-6 py-8 w-100 bg-background"
        max-width="450"
        variant="flat"
      >
        <div class="w-100 d-flex justify-center">
          <img class="w-25" src="~/assets/img/Notary.png" alt="" />
        </div>

        <v-card-title class="text-center font-weight-bold text-h5">
          Connexion
        </v-card-title>

        <v-form v-model="form" @submit.prevent="onSubmit">
          <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required, emailRule]"
            color="primary"
            label="Email"
            placeholder="Entrer votre email"
            variant="outlined"
            clearable
            class="mb-2"
            @click:append-inner="show = !show"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :readonly="loading"
            :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[required, passwordRule]"
            :type="show ? 'text' : 'password'"
            color="primary"
            label="Mot de passe"
            placeholder="Entrer votre mot de passe"
            variant="outlined"
            clearable
            @click:append-inner="show = !show"
          ></v-text-field>

          <br />

          <v-btn
            :disabled="!form"
            :loading="loading"
            color="primary"
            size="large"
            type="submit"
            variant="elevated"
            class="text-none"
            block
          >
            Se connecter
          </v-btn>
        </v-form>
      </v-card>
      <result-modal-validation
        :text="showTextResultModal"
        :open="showResultModal"
        :type="showTypeResultModal"
        @update:open="showResultModal = $event"
      />
    </div>
  </div>
</template>

<script setup>

const showResultModal = ref(false);
const showTextResultModal = ref("");
const showTypeResultModal = ref("");

const form = ref(false);
const email = ref(null);
const password = ref(null);
const loading = ref(false);
const show = ref(false);

const router = useRouter();
// Rules
const required = (v) => {
  return !!v || "Le champ est requis.";
};

const emailRule = (v) => {
  return (
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ||
    "Veuillez entrer une adresse email valide."
  );
};

const passwordRule = (v) => {
  return (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/.test(v) ||
    "Veuillez entrer un mot de passe compris de 8 caractères avec au moins un chiffre, une minuscule, une majuscule et un caractère spéciale."
  );
};

const config = useRuntimeConfig();

const onSubmit = async () => {
  // if (!form.value) return

  loading.value = true;

  try {
    const data = await $fetch(`${config.public.baseUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (data?.accessToken) {
      // Stocker le token, par exemple dans localStorage ou Vuex/Pinia
    //   authStore.setToken(data.accessToken);

      // Rediriger vers une autre page
      router.push("/home");
    }
  } catch (error) {
    console.error("Erreur de connexion :", error);
    // alert("Échec de la connexion. Veuillez vérifier vos informations.");
    showTextResultModal.value =
      "Échec de la connexion. Veuillez vérifier vos informations.";
    showTypeResultModal.value = "error";
    showResultModal.value = true;
  } finally {
    loading.value = false;
  }
};


definePageMeta({
  layout: "",
});
</script>

<style scoped>
.bg-img {
  /*background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));*/
  background-image: url("~/assets/img/bck_img.jpg");
  background-size: cover;
  background-position: center;
  /* height: 100vh; */
  /* display: flex; */
  /* justify-content: center;
        align-items: center; */
}
</style>
