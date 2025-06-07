import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    routes: [
        {
            path: "/home",
            name: "Home",
            component: () => import("./components/showSelf/Home.vue"),
        },
        {
            path: "/",
            name: "Start",
            component: () => import("./components/ShowSelf/Start.vue"),
        },
        {
            path: "/anime",
            name: "About",
            component: () => import("./components/ShowSelf/Anime.vue"),
        }
    ],
    history: createWebHistory(),
})

export default router;