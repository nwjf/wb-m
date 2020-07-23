import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/test',
        name: 'Test',
        component: () => import('@/views/test')
    },
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/index')
    },
    {
        path: '/flash',
        name: 'Flash',
        component: () => import('@/views/flash')
    },
    {
        path: '/importantNews',
        name: 'ImportantNews',
        component: () => import('@/views/importantNews')
    },
    {
        path: '/contentReference',
        name: 'ContentReference',
        component: () => import('@/views/contentReference')
    }
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
