import { createStore } from 'vuex'

const store = createStore({
  state: {
      user:
          {
              correo: "",
              estado: "",
              token: "",
              expira: "",
              roles: []
          },
      counter:0
  },
  mutations: {
      setUser(state,data)
      {
          state.user = data.user
      },
      changeValueInN(state, data)
      {
          state.counter+=data.valor;
      }
  },
  actions: {
   actionChageValueinN(contex, data)
   {
     contex.commit('changeValueInN', data)
   },
   actionSetUser(contex,data)
   {
       contex.commit('setUser',data)
   }
  },
  modules: {
  },
  getters:{
      getCounter(state){
        return state.counter
      },
      getUser(state)
      {
          return state.user
      },
      getRol(state)
      {
          if(state.user.roles.length>0)
          {
              return state.user.roles[0]
          }
          return 'null'
      }

  }
})

export default store
