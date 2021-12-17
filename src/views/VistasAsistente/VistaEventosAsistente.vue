<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">Mis eventos</h5>
    </div>
    <table class="table table-dark table-hover" v-if="cargadas">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">nombre</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(c, index) in this.listaEventos" :key="c.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ c.nombre }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from "@/store";
import axios from "axios";

export default {
  name: "VistaBuscarEventos",
  computed: {
    getToken: function () {
      return store.getters.getToken;
    },
  },
  data() {
    return {
      listaEventos: [],
      cargadas: false,
    };
  },
  mounted() {
    this.cargarEventos();
  },
  methods: {
    cargarEventos() {
      this.listaEventos = [];
      let url = "http://localhost:34592/api/evento/asistente/listar";
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
