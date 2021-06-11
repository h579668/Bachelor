import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//A function that allows import of the views the user visits.
//Using lazyloading to get a cleaner code
function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: lazyLoad("HomePage"),
  },
  {
    path: "/",
    name: "EntireList",
    component: lazyLoad("EntireList"),
  },
  {
    path: "/questions",
    name: "Questions",
    component: lazyLoad("Questions"),
  },
  {
    path: "/adlogin",
    name: "AdLogin",
    component: lazyLoad("AdLogin"),

  },
  {
    path: "/admenu",
    name: "AdMenu",
    component: lazyLoad("AdMenu"),
  },
  {
    path: "/addtoactivity",
    name: "AddToActivity",
    component: lazyLoad("AddToActivity"),
  },
  {
    path: "/questions/results",
    name: "Results",
    component: lazyLoad("Results"),
  },
  {
    path: "/activities",
    name: "Activities",
    component: lazyLoad("ActivityList"),
  },
  {
    path: "/changePassword",
    name: "ChangePassword",
    component: lazyLoad("ChangePassword"),
  },
  {
    path: "/register",
    name: "RegisterUser",
    component: lazyLoad("RegisterUser"),
  },
  {
    path: "/newActivity",
    name: "CreateNewActivity",
    component: lazyLoad("CreateNewActivity"),
  },
  {
    path: "/changeActivity",
    name: "ChangeActivity",
    component: lazyLoad("ChangeActivity"),
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
