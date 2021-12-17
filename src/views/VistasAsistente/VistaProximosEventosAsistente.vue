<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">Próximos eventos</h5>
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
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ c.nombre }}</td>
            <td>{{c.capacidad}}</td>
            <td><button class="btn btn-primary" @click=asistire(index+1)>Asistir</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!--  <button @click="cargarCuentas">cargar cuentas</button>-->
</template>

<script>
import axios from "axios";
import store from "@/store";

export default {
  name: "VistaProximosEventos",
  computed: {
    getToken: function () {
      return store.getters.getToken;
    },
  },
  data() {
    return {
      cargadas: false,
      listaEventos: [],
      listaEstadoEventos:[],
    };
  },
  mounted() {
    this.cargarEventos();
  },
  updated() {
    console.log("Me actualice");
  },
  methods: {
    cargarEventos() {
      console.log(this.getToken);
      this.listaEventos = [];
      let url = "http://localhost:34592/api/evento/listar";
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${this.getToken}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          let lista = response.data;
          for (let i = 0; i < lista.length; i++) {
            let evento = {
              id: lista[i].id,
              nombre: lista[i].nombre,
              capacidad: lista[i].capacidad,
            };
            this.listaEventos.push(evento);
          }
          this.cargadas = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    asistire(eventId){
      console.log(eventId);
      let url = `http://localhost:34592/api/evento/asistente/${eventId}/inscribir`;
      console.log(this.getToken);
      axios
          .post(url,eventId,{
            headers: {
              Authorization: `Bearer ${this.getToken}`,
            },
          }).then((response) => {
            console.log(response);
            console.log("Se agrego!");
      }).catch((error)=> {
        console.log(error);
      })
    },
  },
};
</script>

<style scoped>
</style>
