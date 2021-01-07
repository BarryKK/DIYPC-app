import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import UserAuth from "../views/auth/UserAuth.vue";
import CpuList from "../views/cpu/CpuList";
import GraphicCardList from "../views/graphiccard/GraCardList";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
