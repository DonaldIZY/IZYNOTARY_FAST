import { defineStore } from 'pinia';
import Cookie from 'js-cookie';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null as string | null,
    }),

    actions: {

        setToken(token: string) {
            this.token = token;
            Cookie.set('auth_token', token, { expires: 1 }); // Stocker le token dans un cookie (valable 1 jour)
        },

        clearToken() {
            this.token = null;
            Cookie.remove('auth_token'); // Supprimer le cookie
        },

        initializeToken() {
            const token = Cookie.get('auth_token');
            if (token) {
              this.token = token;
            }
        },

    },
});