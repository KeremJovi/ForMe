import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";

Vue.component("vue-sidebar-menu-akahon", VueSidebarMenuAkahon);
Vue.use(VueResource);

new Vue({
  el: "#app",
  render: h => h(App)
});
