import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import InputTask from "../views/InputTask.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import jwtDecode from "jwt-decode";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: "/input",
      name: "inputTask",
      component: InputTask,
      meta: { requiresAuth: true },
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const accessToken = localStorage.getItem("accessToken");
  const loggedIn = !!accessToken;

  if (requiresAuth && !loggedIn) {
    next({ name: "login" });
  } else {
    if (accessToken) {
      const decode = jwtDecode(accessToken);
      const tokenExpiresAt = decode.exp;
      const currentTimestamp = Math.floor(Date.now() / 1000);
      if (tokenExpiresAt > currentTimestamp) {
        next();
      } else {
        localStorage.removeItem("accessToken");
        next({ name: "login" });
      }
    } else {
      next();
    }
  }
});

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//   const accessToken = localStorage.getItem("accessToken");
//   const loggedIn = !!accessToken;

//   if (requiresAuth && !loggedIn) {
//     next({ name: "login" });
//   } else {
//     if (accessToken) {
//       const decode = jwtDecode(accessToken);
//       const tokenExpiresAt = decode.exp;
//       const currentTimestamp = Math.floor(Date.now() / 1000);
//       if (tokenExpiresAt > currentTimestamp) {
//         next();
//       } else {
//         localStorage.removeItem("accessToken");
//         next({ name: "login" });
//       }
//     } else {
//       next({ name: "login" });
//     }
//   }
// });

export default router;
