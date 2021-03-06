import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";
import {
  MdCard,
  MdField,
  MdButton,
  MdSnackbar,
  MdProgress
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import VueMask from "v-mask";

Vue.use(VueMask);
Vue.use(MdCard);
Vue.use(MdField);
Vue.use(MdButton);
Vue.use(MdSnackbar);
Vue.use(MdProgress);

// require styles
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
