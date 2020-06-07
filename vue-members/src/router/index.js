import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Members from "../views/Members.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/members",
    name: "Members",
    component: Members

    // route level code-splitting
    // this generates a separate chunk (members.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "members" */ "../views/Members.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
