import {defineStore} from 'pinia'
export const useUserStore = defineStore('users', {
    state: () => ({
        users: [
            {username: 'Sara', email: 'sara@gmail.com', password: '123'},
        ],
        currentUser:{

        }
    }),
    getters: {
        getUser: (state) => state.users,
        getCurrentUser: (state) => state.currentUser
    },
    actions: {
        setCurrentUser(user) {
            this.currentUser = user
        }
    },
    persist:true,
});