import { createStore } from 'vuex'

const store = createStore({
  state: {
    counter:0
  },
  mutations: {
    changeValueInN(state, data = {})
    {
      state.counter+=data.valor;
    },
  },
  actions: {
   actionChageValueinN(contex, data)
   {
     contex.commit('changeValueInN', data)
   }
  },
  modules: {
  },
  getters:{
      getRol(state){
        return state.counter
      }
  }
})

export default store
