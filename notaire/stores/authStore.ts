import { defineStore } from 'pinia';
import { API_SERVER_URL } from "~/utils/constants";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        userId: null as number | null,
        userName: null as string | null,
        userEmail: null as string | null,
        userRole: null as string | null,
        isAuthenticated: false
    }),

    actions: {

        async fetchUser() {
            try {
                const data = await $fetch<{ userId: number, userName: string, userEmail: string, userRole: string }>(`${API_SERVER_URL}/auth/me/user`, { credentials: 'include' });

                if (data) {
                    this.userId = data.userId;
                    this.userName = data.userName;
                    this.userEmail = data.userEmail;
                    this.userRole = data.userRole;
                    this.isAuthenticated = true;
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des infos utilisateur', error);
                this.clearUser();
            }
        },

        async login(credentials: { email: string, password: string }) {
            try {
                const router = useRouter();
                const data = await $fetch(`${API_SERVER_URL}/auth/login/user`, {
                    method: 'POST',
                    body: credentials,
                    credentials: 'include', // Nécessaire pour envoyer/recevoir les cookies HTTP-Only
                });

                if (data) {
                    await this.fetchUser(); // Récupère les infos utilisateur après connexion
                    router.push("/home");
                    return { success: true, message: "Connexion réussie" };
                }
            } catch (error) {
                console.error('Erreur de connexion', error);
                return { success: false, message: error?.data?.message || "Une erreur est survenue lors de la connexion." };
            }
        },

        async logout() {
            const router = useRouter();

            await $fetch(`${API_SERVER_URL}/auth/logout/user`, { method: 'POST', credentials: 'include' });
            this.clearUser();

            router.push("/login");
        },

        clearUser() {
            this.userId = null;
            this.userName = null;
            this.userEmail = null;
            this.userRole = null;
            this.isAuthenticated = false;
        }

    },
});