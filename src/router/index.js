import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import Allsales from "../components/Allsales.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },



    {
      path: "/Allsales",
      name: "Allsales",
      component: Allsales,
    },
  ],
});

export default router;
