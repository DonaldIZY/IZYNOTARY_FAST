// import { defineStore } from 'pinia';
// import Cookie from 'js-cookie';
// import { jwtDecode } from 'jwt-decode';

// export const useAuthStore = defineStore('auth', {
//     state: () => ({
//         token: null as string | null,
//         userId: null as number | null,
//         userName: null as string | null,
//         userEmail: null as string | null,
//         userRole: null as string | null
//     }),

//     actions: {

//         setToken(token: string) {
//             this.token = token;
//             const decoded = jwtDecode(token) as { userId: number, userName: string, userEmail: string, userRole: string };
//             this.userId = decoded.userId;
//             this.userName = decoded.userName;
//             this.userEmail = decoded.userEmail; // Assuming email is a field in the JWT payload. Replace with the actual field name.
//             this.userRole = decoded.userRole;
//             Cookie.set('auth_token', token, { expires: 1 }); // Stocker le token dans un cookie (valable 1 jour)
//         },

//         clearToken() {
//             this.token = null;
//             this.userId = null;
//             this.userName = null;
//             this.userEmail = null;  // Assuming email is a field in the JWT payload. Replace with the actual field name.
//             this.userRole = null;
//             Cookie.remove('auth_token'); // Supprimer le cookie
//         },

//         initializeToken() {
//             const token = Cookie.get('auth_token');
//             if (token) {
//                 const decoded = jwtDecode(token) as { userId: number, userName: string, userEmail: string, userRole: string };
//                 this.token = token;
//                 this.userId = decoded.userId;
//                 this.userName = decoded.userName;
//                 this.userEmail = decoded.userEmail; // Assuming email is a field in the JWT payload. Replace with the actual field name.
//                 this.userRole = decoded.userRole;
//             }
//         },

//     },
// });