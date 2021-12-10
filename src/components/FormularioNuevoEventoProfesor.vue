<template>
  <div class="container-fluid" style="color: white">
    <form class="col-sm-9">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre del evento</label>
        <input v-model="nombreEvento" type="text" class="form-control" id="nombre">
        <!--div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div -->
      </div>
      <div class="mb-3">
        <label for="capacidadEvento" class="form-label">Capacidad del evento</label>
        <input  v-model="capacidad" type="number" class="form-control" id="capacidadEvento">
        <!--div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div -->
      </div>
<!--      <div class="mb-3 form-check">
        <input v-model="repetir" type="checkbox" class="form-check-input" id="repetirCheck1">
        <label class="form-check-label" for="repetirCheck1">repetir evento</label>
      </div>
      <div v-if="repetir">
        <label class="form-label">Periodo de repeticion</label>
        <select v-model="periodo"  class="form-select" multiple aria-label="multiple select example">
          <option value="1">semanal</option>
          <option value="2">mensual</option>
          <option value="3">semestral</option>
        </select>
        <br/>
        <label for="fechaInicio" class="form-label">Nombre del evento</label>
        <input v-model="fechaInicio" type="date" class="form-control" id="fechaInicio">
        <br/>
        <label for="fechaFin" class="form-label">Nombre del evento</label>
        <input v-model="fechaFin" type="date" class="form-control" id="fechaFin">
      </div>-->
      <button @click="crearNevoEvento" type="button" class="btn btn-primary">crear</button>
    </form>

  </div>
</template>

<script>
import store from "@/store";
import axios from "axios";

export default {
  name: "FormularioNuevoEventoProfesor",
  data()
  {
    return {
      nombreEvento:String,
      capacidad:Number,
      fechaInicio:String,
      fechaFin:String,
      idEncargado:Number,
      repetir:false,
      periodo:Number
    }
  },computed: {
    getToken: function () {
      return store.getters.getToken;
    },
  },
  methods:{
    crearNevoEvento(){
      const nuevoEvento = {
        nombre:this.nombreEvento,
        capacidad: this.capacidad,
      };
      let url = "http://localhost:34592/api/evento/";
      this.creacion(url,nuevoEvento);
    },
    creacion(url,nuevoEvento){
      axios
      .post(url,nuevoEvento, {
        headers:{
          Authorization: `Bearer ${this.getToken}`,
        },
      })
      .then((respuesta) => {
        console.log(respuesta.data);
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
}
</script>

<style scoped>

</style>
