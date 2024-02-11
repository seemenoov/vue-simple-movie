import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Soon from "@/pages/Soon.vue";
import Details from "@/pages/Details.vue";
import Error from "@/pages/Error.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/soon",
    name: "Soon",
    component: Soon,
  },

  {
    path: "/details/:id",
    name: "Movie",
    component: Details,
  },

  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    component: Error,
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
