import { defineStore } from 'pinia';
import { API_SERVER_URL } from "~/utils/constants";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        customerId: null as number | null,
        customerName: null as string | null,
        customerEmail: null as string | null,
        isAuthenticated: false
    }),

    actions: {

        async fetchCustomer() {
            try {
                const data = await $fetch<{ customerId: number, customerName: string, customerEmail: string }>(`${API_SERVER_URL}/auth/me/customer`, { credentials: 'include' });

                if (data) {
                    this.customerId = data.customerId;
                    this.customerName = data.customerName;
                    this.customerEmail = data.customerEmail;
                    this.isAuthenticated = true;
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des infos client', error);
                this.clearCustomer();
            }
        },

        async login(credentials: { email: string, password: string }) {
            try {
                const router = useRouter();
                const data = await $fetch(`${API_SERVER_URL}/auth/login/customer`, {
                    method: 'POST',
                    body: credentials,
                    credentials: 'include', // Nécessaire pour envoyer/recevoir les cookies HTTP-Only
                });

                if (data) {
                    await this.fetchCustomer(); // Récupère les infos utilisateur après connexion
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

            await $fetch(`${API_SERVER_URL}/auth/logout/customer`, { method: 'POST', credentials: 'include' });
            this.clearCustomer();

            router.push("/login");
        },

        clearCustomer() {
            this.customerId = null;
            this.customerName = null;
            this.customerEmail = null;
            this.isAuthenticated = false;
        }

    },
});