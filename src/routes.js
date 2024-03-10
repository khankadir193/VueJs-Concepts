import { createWebHashHistory,createRouter } from "vue-router";
import App from "./App.vue";

const routes = [
    {
        name:'App',
        path:'/',
        component:App
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;