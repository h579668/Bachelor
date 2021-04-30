import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Bars from 'vuebars';
import '@/assets/CSS/figma.css';
import "@/assets/Images/BallImage.jpeg";

Vue.use(Bars);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
