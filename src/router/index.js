import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import InputTask from "../views/InputTask.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/input",
      name: "inputTask",
      component: InputTask,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
  ],
});

export default router;
