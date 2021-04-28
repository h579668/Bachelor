import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Quiz from "../views/Quiz.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: Quiz,
    
  },
];

const router = new VueRouter({
  routes,
});

export default router;
