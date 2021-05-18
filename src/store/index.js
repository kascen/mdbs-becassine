import { createStore } from "vuex";

export default createStore({
  state: {
    dioramas: null,
    lang: "fr"
  },
  mutations: {
    setDioramas: (state, data) => {
      state.dioramas = data;
    },
    setLang: (state, data) => {
      state.lang = data;
    }
  },
  getters: {
    getDioramaByLang: (state) => payload => state.dioramas[payload],
    diorama: (state, getters) => getters.getDioramaByLang(state.lang)
  },
  actions: {},
  modules: {}
});
