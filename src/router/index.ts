import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/About.vue";
import Event from "../views/Event.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/events/:id",
    name: "Event",
    component: Event,
    props: true
    // component: () => import("../views/New.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
