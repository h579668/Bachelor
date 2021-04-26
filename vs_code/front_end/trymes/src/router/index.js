import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import QuizPage from "../views/QuizPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/quiz",
    name: "QuizPage",
    component: QuizPage
  },
];

const router = new VueRouter({
  routes,
});

export default router;
