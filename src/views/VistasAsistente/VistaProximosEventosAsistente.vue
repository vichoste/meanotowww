<template>
  <h1>proximos eventos</h1>
  <table class="table table-dark table-hover">

  </table>
  <!--  <button @click="cargarCuentas">cargar cuentas</button>-->

  <table class="table table-dark table-hover" v-if="cargadas">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">nombre</th>
      <th scope="col">Capacidad</th>
      <th scope="col">Accion</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(c, index) in this.listaEventos" :key="c.id">
      <th scope="row">{{ index + 1}}</th>
      <td>{{ c.nombre }}</td>
      <td>{{c.capacidad}}</td>
      <td><button class="btn btn-primary" @click="quieroAsistir(c)">Asistir</button></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
import store from "@/store";

export default {
  name: "VistaProximosEventos",
  computed:{
    getToken: function(){
      return store.getters.getToken
    },
  },
  data(){
    return{
      asistire:false,
      cargadas: false,
      listaEventos:[],
    }
  },
  mounted() {
    this.cargarEventos();
  },
  updated() {
    console.log("Me actualice");
  },
  methods:{
    cargarEventos(){
      this.listaEventos = [];
      let url='http://localhost:34592/api/evento/listar'
      axios.get(url, {
        headers:{
          'Authorization': `Bearer ${this.getToken}`
        }
      }).then(response => {
        let lista = response.data
        for (let i = 0; i < lista.length; i++) {
          console.log(lista[i]);
          let evento = {
            id: lista[i].id,
            nombre: lista[i].nombre,
            dueño: lista[i].dueño,
            capacidad: lista[i].capacidad,
            fechaInicio: new Date(lista[i].inicio),
            fechaFin: new Date(lista[i].finalización),
          };
          this.listaEventos.push(evento);
        }
        this.cargadas = true;
      }).catch(error => {
        console.log(error);
      })
    },
    quieroAsistir(item){
      if(item.capacidad > 0){
        item.capacidad = item.capacidad-1;
        console.log(item);
        console.log("Capacidad -1, nueva capacidad:",item.capacidad);
        this.asistire = true;
      }
    }
  }
}
</script>

<style scoped>

</style>
