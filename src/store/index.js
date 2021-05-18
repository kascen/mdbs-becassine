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
      console.log(data);
      state.lang = data;
    }
  },
  getters: {
    lang: state => state.lang,
    getDioramaByLang: state => payload => state.dioramas[payload],
    diorama: (state, getters) => getters.getDioramaByLang(state.lang),
    getAnimalIndexById: (state, getters) => id => {
      console.log('find index', id);
      return getters.diorama.animals.findIndex(a => a.id === id);
    },
    getAnimalByIndex: (state, getters) => index => {
      const animals = getters.diorama.animals;
      if (animals.length===index){
        return animals[0];
      }else if(index===-1){
        return animals[animals.length - 1];
      }else{
        return animals[index];
      }
    },
    getAnimalById: (state, getters) => id => {
      return getters.diorama.animals.find(a => a.id === id);
    }
  },
  actions: {},
  modules: {}
});
