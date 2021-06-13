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
    component: lazyLoad("ActivityFeature/EntireList"),
  },
  {
    path: "/questions",
    name: "Questions",
    component: lazyLoad("QuizAndResult/Questions"),
  },
  {
    path: "/adlogin",
    name: "AdLogin",
    component: lazyLoad("Login/AdLogin"),

  },
  {
    path: "/admenu",
    name: "AdMenu",
    component: lazyLoad("AdMenu"),
  },
  {
    path: "/questions/results",
    name: "Results",
    component: lazyLoad("QuizAndResult/Results"),
  },
  {
    path: "/activities",
    name: "Activities",
    component: lazyLoad("ActivityList"),
  },
  {
    path: "/changePassword",
    name: "ChangePassword",
    component: lazyLoad("Login/ChangePassword"),
  },
  {
    path: "/register",
    name: "RegisterUser",
    component: lazyLoad("QuizAndResult/RegisterUser"),
  },
  {
    path: "/newActivity",
    name: "CreateNewActivity",
    component: lazyLoad("Activity/CreateNewActivity"),
  },
  {
    path: "/changeActivity",
    name: "ChangeActivity",
    component: lazyLoad("ChangeActivity"),
  },
  {
    path: "/allActivities",
    name: "AllActivities",
    component: lazyLoad("Activity/AllActivities"),
  },
  {
    path: "/createAssociation",
    name: "CreateAssociation",
    component: lazyLoad("Association/CreateAssociation"),
  },
  {
    path: "/editAssociation",
    name: "EditAssociation",
    component: lazyLoad("Association/EditAssociation"),
  },
  {
    path: "/addAssociations",
    name: "AddAssociation",
    component: lazyLoad("Association/AddAssociation"),
  },
  {
    path: "/associationActivity",
    name: "AssociationActivity",
    component: lazyLoad("Association/AssociationActivity"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
