import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Soon from "@/pages/Soon.vue";
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
