import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuth = create(
    persist((set) => ({
        user: null,
        token: null,
        isAuthenticated: false,
        // forgottedEmail: '',

        login: (user, token) => {
            set({
                user, 
                token, 
                isAuthenticated: true
            })
        },

        logout: () => {
            set({
                user: null,
                token: null,
                isAuthenticated: false
            })
        },

        // forgotEmail: (email) => {
        //     set({
        //         forgottedEmail: email
        //     })
        // }
    }), {
        name: 'auth-data'
    })
)

export default useAuth