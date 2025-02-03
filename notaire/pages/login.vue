<template>
<<<<<<< HEAD
  <div class="d-flex fill-height">
    <!-- Section Gauche -->
    <div class="w-100 d-none d-sm-none d-md-flex bg-img"></div>
=======

    <div class="d-flex fill-height">
        <!-- Section Gauche -->
        <div class="w-100 d-none d-sm-none d-md-flex bg-img">
>>>>>>> 32826a4dc40420ca44ca15955260cbde89d24ccb

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

<<<<<<< HEAD
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
=======
        <!-- Section Droite -->
        <div class="w-100 d-flex flex-column align-center justify-center">
            <v-card class="px-6 py-8 w-100 bg-background" max-width="450" variant="flat">
                <div class="w-100 d-flex justify-center">
                    <img class="w-25" src="~/assets/img/Notary.png" alt="">
                </div>

                <v-card-title class="text-center font-weight-bold text-h5">
                    Connexion
                </v-card-title>

                <v-form v-model="form" @submit.prevent="onSubmit">
                    <v-text-field v-model="email" :readonly="loading" :rules="[required, emailRule]" color="primary"
                        label="Email" placeholder="Entrer votre email" variant="outlined" clearable
                        class="mb-2"></v-text-field>

                    <v-text-field v-model="password" :readonly="loading"
                        :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :rules="[required, passwordRule]"
                        :type="show ? 'text' : 'password'" color="primary" label="Mot de passe"
                        placeholder="Entrer votre mot de passe" variant="outlined" clearable
                        @click:append-inner="show = !show"></v-text-field>
>>>>>>> 32826a4dc40420ca44ca15955260cbde89d24ccb

          <br />

<<<<<<< HEAD
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
    </div>
  </div>

  <!-- Modal -->
  <v-dialog v-model="showModal" persistent max-width="400">
    <v-card>
      <v-card-title class="headline">{{ modalTitle }}</v-card-title>

      <v-card-text class="textModal"
        ><v-icon class="mb-3" color="#ad1919" :size="80"
          >mdi-close-circle-outline</v-icon
        >
        <p>{{ modalText }}</p></v-card-text
      >
      <v-card-actions>
        <v-btn
          color="#808080"
          variant="elevated"
          class="text-none"
          @click="showModal = false"
          >Fermer</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
=======
                    <v-btn :disabled="!form" :loading="loading" color="primary" size="large" type="submit"
                        variant="elevated" class="text-none" block>
                        Se connecter
                    </v-btn>
                </v-form>
            </v-card>
        </div>
    </div>

>>>>>>> 32826a4dc40420ca44ca15955260cbde89d24ccb
</template>

<script setup>
// References
const form = ref(false);
const email = ref("");
const password = ref("");
const loading = ref(false);
const show = ref(false);
const showModal = ref(false); // Contrôle l'affichage du modal
const modalTitle = ref(""); // Titre du modal
const modalText = ref(""); // Contenu du modal

<<<<<<< HEAD
// Rules
const required = (v) => {
  return !!v || "Le champ est obligatoire.";
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
    "Veuillez entrer un mot de passe ayant au moins huit (8) caractères, un chiffre, une lettre minuscule, une lettre majuscule; un caractère spécial."
  );
};

const config = useRuntimeConfig();
const authStore = useAuthStore();

// Router
const router = useRouter();

const onSubmit = async () => {
  // if (!form.value) return

  loading.value = true;
  showModal.value = false; // Fermer le modal avant la requête

  try {
    const testUrl = "http://serverizynotary.izydr.net";
    const data = await $fetch(
      `${testUrl /*config.public.baseUrl*/}/auth/login`,
      {
        method: "POST",
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      }
    );

    if (data?.accessToken) {
      // Stocker le token, par exemple dans localStorage ou Vuex/Pinia
      console.log(data.accessToken);
      authStore.setToken(data.accessToken);

      // Rediriger vers une autre page
      router.push("/home");
    }
  } catch (error) {
    console.error("Erreur de connexion :", error);
    modalTitle.value = "Erreur de connexion";
    modalText.value = "Veuillez vérifier vos informations.";
  } finally {
    loading.value = false;
    showModal.value = true; // Afficher le modal avec le résultat
  }
};

definePageMeta({
  layout: "",
});
=======
// References
const form = ref(false);
const email = ref('');
const password = ref('');
const loading = ref(false);
const show = ref(false);

// Rules
const required = (v) => {
    return !!v || 'Le champ est requis.';
};

const emailRule = (v) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Veuillez entrer une adresse email valide.';
}

const passwordRule = (v) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/.test(v) || 'Veuillez entrer un mot de passe compris de 8 caractères avec au moins un chiffre, une minuscule, une majuscule et un caractère spéciale.';
}


const config = useRuntimeConfig();
const authStore = useAuthStore();

// Router
const router = useRouter();

const onSubmit = async () => {

    // if (!form.value) return
    loading.value = true;

    try {
        const testUrl = "http://serverizynotary.izydr.net";
        const data = await $fetch(`${config.public.baseUrl}/auth/login`, {
            method: 'POST',
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            }),
            credentials: 'include', // Important pour envoyer les cookies
        });


        if (data.message === "Connexion réussie") {
            //authStore.fetchUser(); // Vérifier si l'utilisateur est connecté
            // Rediriger vers une autre page
            router.push("/home");
        }

    } catch (error) {
        console.error('Erreur de connexion :', error);
        alert('Échec de la connexion. Veuillez vérifier vos informations.');
    } finally {
        loading.value = false;
    }

};


definePageMeta({
    layout: '',
})

>>>>>>> 32826a4dc40420ca44ca15955260cbde89d24ccb
</script>

<style scoped>
.bg-img {
<<<<<<< HEAD
  /*background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));*/
  background-image: url("~/assets/img/bck_img.jpg");
  background-size: cover;
  background-position: center;
  /* height: 100vh; */
  /* display: flex; */
  /* justify-content: center;
        align-items: center; */
}

.headline {
  font-weight: bold;
}

.textModal {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
=======
    /*background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));*/
    background-image: url('~/assets/img/bck_img.jpg');
    background-size: cover;
    background-position: center;
    /* height: 100vh; */
    /* display: flex; */
    /* justify-content: center;
        align-items: center; */

}
</style>
>>>>>>> 32826a4dc40420ca44ca15955260cbde89d24ccb
