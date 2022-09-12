import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/user";
import AuthView from "../views/AuthView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "auth",
      component: AuthView,
    },
    {
      path: "/board",
      name: "board",
      component: () => import("../views/BoardView.vue"),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "card/:id",
          name: "card",
          component: () => import("../views/CardView.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const userStore = useUserStore();
  const user = await userStore.getUser();

  if (requiresAuth && !user) {
    next("/");
  } else if (to.name === "auth" && user) {
    next("board");
  } else {
    next();
  }
});

export default router;
