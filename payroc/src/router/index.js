import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/LinkView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/link",
      name: "link",
      // route level code-splitting
      // this generates a separate chunk (link.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LinkView.vue"),
    },
    {
      path: "/:id",
      name: "redirect",
      // route level code-splitting
      // this generates a separate chunk (redirect.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RedirectView.vue"),
    },
  ],
});

export default router;
