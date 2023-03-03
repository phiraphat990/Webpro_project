import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomePage.vue') // set home as path '/'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue') // set home as path '/'
    }
    ,
    {
        path: '/signup',
        name: 'Signup',
        component: () => import('../views/Signup.vue') // set home as path '/'
    },
    {
        path: '/allProduct',
        name: 'AllProduct',
        component: () => import('../views/AllProduct.vue') // set home as path '/'
    }
    ,
    {
        path: '/manageAccount',
        name: 'ManageAccount',
        component: () => import('../views/ManageAccount.vue') // set home as path '/'
    },
    {
        path: '/checkOrder',
        name: 'CheckOrder',
        component: () => import('../views/CheckOrder.vue') // set home as path '/'
    },
    {
        path: '/payment',
        name: 'Payment',
        component: () => import('../views/Payment.vue') // set home as path '/'
    },
    {
        path: '/manageProduct',
        name: 'Manageproduct',
        component: () => import('../views/ManageProduct.vue') // set home as path '/'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.Base_URL,
    routes
})

export default router