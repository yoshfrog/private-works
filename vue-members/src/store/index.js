import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: ""
  },
  mutations: {
    login(state, payload) {
      state.name = payload;
    }
  },
  getters: {
    username(state) {
      return state.name;
    }
  },
  actions: {},
  modules: {}
});
