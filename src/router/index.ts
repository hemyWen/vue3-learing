import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
export const routes = [
  {
    path: "/",
    name: "首页",
    component: HomeView,
  },
  {
    path: "/hooks",
    name: "hooks",
    children: [
      {
        path: "useMouse",
        name: "useMouse",
        component: () => import("@/views/hooks/useMouse.vue"),
      },
      {
        path: "useTable",
        name: "useTable",
        component: () => import("@/views/hooks/useTable.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
