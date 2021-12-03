<template>
  <h1>usuarios</h1>
  <table class="table table-dark table-hover">

  </table>
  <button @click="cargarCuentas">cargar cuentas</button>
</template>

<script>
import axios from 'axios'
import store from "../store"

export default {
  name: "tablaUsuarios",
  computed :
      {
        getToken: function () {
          return store.getters.getToken
        },
      },
  methods: {
    cargarCuentas()
    {
      let url ='http://localhost:34592/api/cuenta/listar'
      axios.get(url, {
        headers:{
          'Authorization': `Bearer ${this.getToken}`
        }
      }).then(response => {
        const cosas = response.data
        console.log(cosas)
        return cosas
      }).catch( error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
