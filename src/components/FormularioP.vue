<template>
  <div>
    <p>{{getCounter}}</p>
    <button @click="miClick(+1)">mas 1</button>
    <button @click="miClick(-1)">menos 1</button>
    <p v-if="getCounter>5">uff men que alto</p>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "FormularioP",
  data(){},
  methods:{
    miClick(n)
    {
      store.dispatch('actionChageValueinN', {
        valor:n
      })
      /*
      store.commit('changeValueInN',{
        valor:n
      })
       */
    }
  },
  computed:{
    getCounter: function(){
      return store.getters.getRol
    }
  },
  watch: {
    nombre: function (newNumero, oldNumero)
    {
      console.log("newNumero: "+newNumero+" oldNumero:"+oldNumero)
    },
    contrasena: function (newNumero, oldNumero)
    {
      console.log("newNumero: "+newNumero+" oldNumero:"+oldNumero)
    },
    edad: function (newNumero, oldNumero)
    {
      console.log("newNumero: "+newNumero+" oldNumero:"+oldNumero)
    }
  }
}
</script>

<style scoped>

</style>
