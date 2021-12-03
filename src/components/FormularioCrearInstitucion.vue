<template>
  <div class="container-fluid" >
    <form class="col-sm-9" >
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombres</label>
        <input v-model="nombre" type="text" class="form-control" id="nombre">
      </div>

      <button type="button" @click="this.validarInstitucion" class="btn btn-primary">Crear universidad</button>
      <br/>
      <button type="button" @click="this.cargarInstituciones" class="btn btn-primary">cargar universidad</button>
      <table class="table table-dark table-hover" v-if="cargadas">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">nombre</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(c, index) in this.listaInstituciones" :key="c.id">
          <th scope="row">{{index}}</th>
          <td>{{c.nombre}}</td>
        </tr>
        </tbody>
      </table>
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
      nombre:" ",
      listaInstituciones:[],
      cargadas:false
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
    cargarInstituciones(){
      let url ='http://localhost:34592/api/institución/listar'
      axios.get(url, {
        headers:{
          'Authorization': `Bearer ${this.getToken}`
        }
      }).then(response => {
        this.listaInstituciones = []
        let lista = response.data
        console.log(response.data)
        console.log(lista)
        for (let i = 0; i < lista.length; i++) {
          console.log(lista[i])
          let institucion = {
            id:lista[i].id,
            nombre:lista[i].nombre
          }
          console.log(institucion)
          this.listaInstituciones.push(institucion)
        }
        console.log(this.listaInstituciones)
        this.cargadas =true;
      }).catch( error => {
        console.log("jajaj error")
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
