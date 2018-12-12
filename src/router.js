import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
        },
        {
            path : '/fullPage',
            component : () => import(/* webpackChunkName: "FullPage" */'@/views/FullPage')
        },
        {
            path : '/async',
            component : () => import(/* webpackChunkName: "FullPage" */'@/views/Async')
        },
        {
            path:'/',
            component : () => import('@/views/Index/index'),
        },
        {
            path : '*',
            component : () => import( '@/views/Login/index')
        }
    ]
})