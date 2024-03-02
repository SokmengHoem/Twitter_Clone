
import {createRouter, createWebHistory} from 'vue-router'

//import your components
import HomeVue from '@/views/Home.vue'
import LoginPageVue from '@/views/LoginPage.vue'
import ProfileVue from '@/components/Profile.vue'


const routes = [
    
    {path: '/', component:LoginPageVue},
    {path: '/home', component:HomeVue},
    {path: '/profile', component:ProfileVue},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router