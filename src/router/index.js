import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    redirects: "/home",
  },
  {
    path: "/home",
    component: Home,
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
