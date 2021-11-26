import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: {
      correo:String,
      estado:String,
      expira:String,
      rol:[],
      token:String,

    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.user
    }
  },
  actions: {
    actionSetUser({commit}, payload){
      commit('setUser',payload)
    }
  },
  modules: {
  },
  getters:{
      getRol(state){
        if(state.user.rol.length ===0 )
        {
          return 'null'
        }
        return state.user.rol[0]
      }
  }
})

export default store
