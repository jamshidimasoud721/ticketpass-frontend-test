import {createRouter, createWebHistory} from 'vue-router'
import EventDetail from "@/views/EventDetail.vue";
import EventList from "@/views/EventList.vue";

const routes = [
    {
        path: '/',
        component: EventList
    },
    {
        path: '/event/:id', name: 'eventDetail',
        component: () => import('../views/EventDetail.vue'),
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
