import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: lazyLoad("Home"),
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: lazyLoad("Quiz"),
  },
  {
    path: "/login",
    name: "Login",
    component: lazyLoad("Login"),

  },
  {
    path: "/admenu",
    name: "Menu",
    component: lazyLoad("Menu"),
  },
  {
    path: "/quiz/results",
    name: "Results",
    component: lazyLoad("Results"),
  },
  {
    path: "/Activities",
    name: "Activities",
    component: lazyLoad("Activities"),
  },
  {
    path: "/pass",
    name: "Password",
    component: lazyLoad("Password"),
  },
  {
    path: "/register",
    name: "Register",
    component: lazyLoad("Register"),
  },
  {
    path: "/newActivity",
    name: "NewActivity",
    component: lazyLoad("NewActivity"),
  },
  {
    path: "/changeActivity",
    name: "ChangeActivity",
    component: () => lazyLoad("ChangeActivity"),
  },
  {
    path: "/allActivities",
    name: "AllActivities",
    component: lazyLoad("AllActivities"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
