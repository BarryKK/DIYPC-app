import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import UserAuth from "../views/auth/UserAuth.vue";
import UserRegister from "../views/auth/UserRegister.vue";
import CpuList from "../views/cpu/CpuList";
import GraphicCardList from "../views/graphiccard/GraCardList";

import test from "../components/layout/Background";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/register",
    component: UserRegister,
  },
  {
    path: "/auth",
    component: UserAuth,
  },
  {
    path: "/cpu",
    component: CpuList,
  },
  {
    path: "/graphiccard",
    component: GraphicCardList,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/test",
    component: test,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
