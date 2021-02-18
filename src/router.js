import { createRouter, createWebHistory } from 'vue-router'
import Nav from './components/Nav.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import Profile from './components/Profile.vue'
import Reset from './components/Reset.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:Nav
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/signup',
            component:SignUp
        },
        {
            path:'/reset',
            component:Reset
        },
        {
            path:'/profile',
            component:Profile
        }
    ]
})

export default router