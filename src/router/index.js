import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/soon",
    name: "Soon",
    component: () => import("@/pages/Soon.vue"),
  },

  {
    path: `/films`,
    name: "Films",
    component: () => import("@/pages/Films.vue"),
  },

  {
    path: `/films/:id`,
    name: "Film",
    component: () => import("@/pages/Details.vue"),
    props: { type: "movie" },
  },

  {
    path: `/tv`,
    name: "Serials",
    component: () => import("@/pages/Serials.vue"),
  },

  {
    path: `/tv/:id`,
    name: "Serial",
    component: () => import("@/pages/Details.vue"),
    props: { type: "tv" },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    component: () => import("@/pages/Error.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, _from, next) => {
  next();
});

export default router;
