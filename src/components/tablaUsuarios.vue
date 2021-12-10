<template>
  <h1>usuarios</h1>
  <table class="table table-dark table-hover">

  </table>
<!--  <button @click="cargarCuentas">cargar cuentas</button>-->

  <table class="table table-dark table-hover" v-if="cargadas">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">nombre</th>
      <th scope="col">apellido</th>
      <th scope="col">run</th>
      <th scope="col">email</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(c, index) in this.listaCuentas" :key="c.id">
      <th scope="row">{{ index + 1}}</th>
      <td>{{ c.nombre }}</td>
      <td>{{c.apellido}}</td>
      <td>{{c.run}}</td>
      <td>{{c.email}}</td>
    </tr>
    </tbody>
  </table>
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
  data() {
    return {
      cargadas : false,
      listaCuentas: [],
  };
},
  mounted() {
    this.cargarCuentas();
  },
  methods: {
    cargarCuentas()
    {
      this.listaCuentas = [];
      let url ='http://localhost:34592/api/cuenta/listar'
      axios.get(url, {
        headers:{
          'Authorization': `Bearer ${this.getToken}`
        }
      }).then(response => {
        let lista = response.data
        for (let i = 0; i < lista.length; i++) {
          let cuenta = {
            id: lista[i].id,
            nombre: lista[i].nombre,
            apellido: lista[i].apellido,
            run: lista[i].run,
            email: lista[i].email,
          };
          this.listaCuentas.push(cuenta);
        }
        this.cargadas = true;
      }).catch( error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
