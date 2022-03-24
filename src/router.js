import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/pages/Home.vue";
import Login from "./components/pages/Login.vue";
import Register from "./components/pages/Register.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/login", component: Login },
        { path: "/register", component: Register },
    ],
});

export default router;
