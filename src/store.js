import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firstName: "Иван",
    lastName: "Иванов"
  },
  mutations: {
    clearInput(state) {
      state.firstName = null;
      state.lastName = null;
    }
  },
  actions: {}
});
