import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
export const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页",
    },
    component: HomeView,
  },
  {
    path: "/hooks",
    name: "hooks",
    meta: {
      title: "hooks",
    },

    children: [
      {
        path: "useMouse",
        name: "useMouse",
        meta: {
          title: "useMouse",
        },

        component: () => import("@/views/hooks/useMouse.vue"),
      },
      {
        path: "useTable",
        name: "useTable",
        meta: {
          title: "useTable",
        },
        component: () => import("@/views/hooks/useTable.vue"),
      },
    ],
  },
  {
    path: "/optimize",
    name: "optimize",
    meta: {
      title: "优化",
    },
    children: [
      {
        path: "section",
        name: "section",
        meta: {
          title: "任务切片",
        },
        component: () => import("@/views/optimize/section.vue"),
      },
      {
        path: "requestAnimationFrame",
        name: "requestAnimationFrame",
        meta: {
          title: "requestAnimationFrame",
        },
        component: () => import("@/views/optimize/requestAnimationFrame/index.vue"),
      },
      {
        path: "defer",
        name: "deder",
        meta: {
          title: "defer优化",
        },
        component: () => import("@/views/optimize/defer/index.vue"),
      },
    ],
  },
  {
    path: "/test",
    name: "test",
    meta: {
      title: "测试",
    },
    children: [
      {
        path: "testIndex",
        name: "testIndex",
        meta: {
          title: "测试",
        },
        component: () => import("@/views/test/index.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
