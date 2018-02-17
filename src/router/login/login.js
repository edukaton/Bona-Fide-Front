import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Register from '@/pages/login/Register'

Vue.use(Router)

export default [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
]