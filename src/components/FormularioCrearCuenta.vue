<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">Crear cuenta</h5>
      <form>
        <div class="mb-3">
          <label class="mb-2">Tipo de usuario</label>
          <select
            v-model="tipoCuenta"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="Administrador">Administrador</option>
            <option value="Profesor">Profesor</option>
            <option value="Encargado">Encargado</option>
            <option value="Asistente">Asistente</option>
          </select>
        </div>
        <div class="mb-3" v-if="tipoCuenta != 'Administrador'">
          <label class="mb-2">Universidad</label>
          <select
            v-model="institucion"
            class="form-select"
            aria-label="Default select example"
          >
            <option
              v-for="institucionn in this.listaInstituciones"
              :key="institucionn.nombre"
              v-bind:value="institucionn.id"
            >
              {{ institucionn.nombre }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="run" class="form-label">RUN</label>
          <input v-model="run" type="text" class="form-control" id="run" />
        </div>
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombres</label>
          <input
            v-model="nombres"
            type="text"
            class="form-control"
            id="nombre"
          />
        </div>
        <div class="mb-3">
          <label for="apellidos" class="form-label">Apellidos</label>
          <input
            v-model="apellidos"
            type="text"
            class="form-control"
            id="apellidos"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Correo electronico</label>
          <input v-model="email" type="email" class="form-control" id="email" />
        </div>
        <div class="mb-3">
          <label for="contrasena" class="form-label">Contraseña</label>
          <input
            v-model="contrasena"
            type="password"
            class="form-control"
            id="contrasena"
          />
        </div>
      </form>
    </div>
    <div class="button-center mb-5">
      <button @click="validarDatos" type="button" class="btn btn-primary">
        Crear
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "../store";

export default {
  name: "FormularioCrearCuenta",
  data() {
    return {
      run: " ",
      nombres: " ",
      apellidos: " ",
      email: " ",
      contrasena: "",
      tipoCuenta: " ",
      institucion: 0,
      listaInstituciones: [],
      cargadas: false,
    };
  },
  computed: {
    getToken: function () {
      return store.getters.getToken;
    },
  },
  mounted() {
    this.getInstituciones();
  },
  methods: {
    validarDatos() {
      const nuevaCuenta = {
        email: this.email,
        contraseña: this.contrasena,
        run: this.run,
        nombre: this.nombres,
        apellido: this.apellidos,
      };
      let url;
      switch (this.tipoCuenta) {
        case "Administrador":
          url =
            "http://localhost:34592/api/cuenta/registrar/administrador";
          break;
        case "Profesor":
          url =
            "http://localhost:34592/api/cuenta/registrar/profesor/" +
            this.institucion;
          break;
        case "Encargado":
          url =
            "http://localhost:34592/api/cuenta/registrar/encargado/" +
            this.institucion;
          break;
        case "Asistente":
          url =
            "http://localhost:34592/api/cuenta/registrar/asistente/" +
            this.institucion;
          break;
        default:
          console.log("error de cosas");
          url = "null";
          break;
      }
      if (url !== "null") {
        this.crearCuenta(url, nuevaCuenta);
      }
    },
    crearCuenta(url, userr) {
      axios
        .post(url, userr, {
          headers: {
            Authorization: `Bearer ${this.getToken}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          const cosas = response.data;
          console.log(cosas);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getInstituciones() {
      let url = "http://localhost:34592/api/institución/listar";
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${this.getToken}`,
          },
        })
        .then((response) => {
          this.listaInstituciones = [];
          let lista = response.data;
          console.log(response.data);
          console.log(lista);
          for (let i = 0; i < lista.length; i++) {
            console.log(lista[i]);
            let institucion = {
              id: lista[i].id,
              nombre: lista[i].nombre,
            };
            console.log(institucion);
            this.listaInstituciones.push(institucion);
            this.cargadas = true;
          }
        })
        .catch((error) => {
          console.log("jajaj error");
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>
