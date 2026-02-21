import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WorksView from '@/views/WorksView.vue'
import CategoryWorksView from '@/views/CategoryWorksView.vue'
import ContactsView from '@/views/ContactsView.vue'
import WorkDetailView from '@/views/WorkDetailView.vue'
import ProcessView from '@/views/ProcessView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/works',
        name: 'works',
        component: WorksView
    },
    {
        path: '/works/:category',
        name: 'category-works',
        component: CategoryWorksView
    },
    {
        path: '/works/:category/:slug',
        name: 'work-detail',
        component: WorkDetailView
    },
    {
        path: '/process',
        name: 'process',
        component: ProcessView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router