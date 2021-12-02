<template>
  <div class="container-fluid" >
    <form class="col-sm-9" >
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombres</label>
        <input v-model="nombre" type="text" class="form-control" id="nombre">
      </div>

      <button type="button" @click="this.validarInstitucion" class="btn btn-primary">Crear institucion</button>
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
      console.log(`Bearer ${this.getToken}`)
      let url='http://localhost:34592/api/institución'
      const institucion = {
        nombre: this.nombre
      }
      axios.post(url,institucion, {
        headers:{
          'Authorization': `Bearer ${this.getToken}`
        }
      }).then(response => {
        console.log(response.data)
        const cosas = response.data
        console.log(cosas)
      }).catch( error => {
        console.log(error)
      })
    },
  }
}
</script>

<style scoped>

</style>
