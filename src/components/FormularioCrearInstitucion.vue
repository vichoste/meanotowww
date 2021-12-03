<template>
  <div class="container-fluid" >
    <form class="col-sm-9" >
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombres</label>
        <input v-model="nombre" type="text" class="form-control" id="nombre">
      </div>

      <button type="button" @click="this.validarInstitucion" class="btn btn-primary">Crear universidad</button>
      <button type="button" @click="this.cargarInstituciones" class="btn btn-primary">cargar universidad</button>
      <!--<a v-for="institucion in getInstituciones" :key="institucion."></a> -->
    </form>

  </div>
</template>

<script>
import axios from 'axios'
import store from "../store";

export default {
  name: "FormularioCrearInstitucion",
  computed :
      {
        getToken:function ()
        {
          return store.getters.getToken
        },
        getInstituciones:function ()
        {
          return this.cargarInstituciones()
        }
      },
  data(){
    return{
      nombre:" "
    }
  },
  methods:{
    validarInstitucion()
    {
      if(this.nombre !== " ")
      {
        this.crearInstitucion()
      }
      else
      {
        console.log("escribe un nombre we")
      }
    },
    crearInstitucion()
    {
      let url='http://localhost:34592/api/institución'
      const institucion = {
        nombre: this.nombre
      }
      axios.post(url,institucion, {
        headers:{
          'Authorization': `Bearer ${this.getToken}`
        }
      }).then(response => {
        const cosas = response.data
        console.log(cosas)
      }).catch( error => {
        console.log(error)
      })
    },
    cargarInstituciones()
    {
      let url ='http://localhost:34592/api/institución/listar'
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
