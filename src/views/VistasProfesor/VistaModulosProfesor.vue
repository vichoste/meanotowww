<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">Eventos creados</h5>
      <table class="table table-dark table-hover">
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
          <td>{{c.nombre}}</td>
          <td>{{c.capacidad}}</td>
          <td><button class="btn btn-primary">Modificar</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!--  <button @click="cargarCuentas">cargar cuentas</button>-->
</template>

<script>
import store from "@/store";
import axios from "axios";

export default {
  name: "VistaModulosProfesor",
  computed: {
    getToken: function () {
      return store.getters.getToken;
    },
  },
  data() {
    return {
      listaEventos: [],
    };
  },
  mounted() {
    this.cargarEventos();
  },
  methods: {
    cargarEventos() {
      console.log(this.getToken);
      this.listaEventos = [];
      let url = "http://localhost:34592/api/evento/profesor/listar";
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
  }
}
</script>

<style scoped>

</style>
