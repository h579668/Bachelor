import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Quiz from "../views/Quiz.vue";
import Login from "../views/Login.vue";
import Menu from "../views/Menu.vue";
import Results from "../views/Results.vue";
import Activities from "../views/Activities.vue";
import Password from "../views/Password.vue";
import Register from "../views/Register.vue";
import NewActivity from "../views/NewActivity.vue";
import ChangeActivity from "../views/ChangeActivity.vue";
import AllActivities from "@/views/AllActivities.vue";

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
  {
    path: "/login",
    name: "Login",
    component: Login,

  },
  {
    path: "/admenu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/quiz/results",
    name: "Results",
    component: Results,
  },
  {
    path: "/Activities",
    name: "Activities",
    component: Activities,
  },
  {
    path: "/pass",
    name: "Password",
    component: Password,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/newActivity",
    name: "NewActivity",
    component: NewActivity,
  },
  {
    path: "/changeActivity",
    name: "ChangeActivity",
    component: ChangeActivity,
  },
  {
    path: "/AllActivities",
    name: "AllActivities",
    component: AllActivities,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
